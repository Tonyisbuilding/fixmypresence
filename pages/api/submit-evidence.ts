import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { type Transporter } from 'nodemailer';
import type { Attachment } from 'nodemailer/lib/mailer';

type EvidencePayload = {
  brief: string;
  plan: {
    name: string;
    amount: number;
  };
  file: {
    name: string;
    type: string;
    dataUrl: string;
  } | null;
};

const REQUIRED_ENV_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'EMAIL_FROM'] as const;

const ensureConfig = () => {
  const missing = REQUIRED_ENV_VARS.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing email configuration: ${missing.join(', ')}`);
  }
};

const parseDataUrl = (dataUrl: string) => {
  const parts = dataUrl.split(',');
  if (parts.length < 2) {
    throw new Error('Invalid attachment payload.');
  }

  const meta = parts[0];
  const base64 = parts[1];
  const mimeMatch = /data:(.*?);base64/.exec(meta ?? '');

  return {
    contentType: mimeMatch?.[1] ?? 'application/octet-stream',
    buffer: Buffer.from(base64, 'base64'),
  };
};

let cachedTransport: Transporter | null = null;

const getTransport = () => {
  if (!cachedTransport) {
    ensureConfig();
    cachedTransport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER ?? '',
        pass: process.env.SMTP_PASS ?? '',
      },
    });
  }

  return cachedTransport;
};

const sendMail = async (payload: EvidencePayload) => {
  const transport = getTransport();

  const { brief, plan, file } = payload;

  const planAmount = Number.isFinite(plan?.amount) ? Number(plan.amount) : 0;
  const formattedAmount = planAmount > 0 ? `$${planAmount.toLocaleString()}` : 'Not specified';

  const attachments: Attachment[] = [];
  if (file && file.dataUrl) {
    const { buffer, contentType } = parseDataUrl(file.dataUrl);
    attachments.push({
      filename: file.name || 'evidence',
      content: buffer,
      contentType: file.type || contentType,
    });
  }

  await transport.sendMail({
    from: process.env.EMAIL_FROM,
    to: 'tony@fixmypresence.com',
    subject: `Payment evidence received - ${plan?.name ?? 'Unknown plan'}`,
    text: `Plan: ${plan?.name ?? 'Unknown plan'} (${formattedAmount})\nBrief:\n${brief || 'No brief provided.'}`,
    html: `
      <p><strong>Plan:</strong> ${plan?.name ?? 'Unknown plan'} (${formattedAmount})</p>
      <p><strong>Brief:</strong></p>
      <p>${brief ? brief.replace(/\n/g, '<br/>') : 'No brief provided.'}</p>
    `,
    attachments,
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { brief, plan, file } = req.body as EvidencePayload;

  if (!plan || typeof plan.name !== 'string' || typeof plan.amount !== 'number') {
    return res.status(400).json({ message: 'Invalid plan data provided.' });
  }

  if (file && typeof file.dataUrl !== 'string') {
    return res.status(400).json({ message: 'Invalid attachment data.' });
  }

  try {
    await sendMail({
      brief: typeof brief === 'string' ? brief : '',
      plan,
      file: file ?? null,
    });

    return res.status(200).json({ message: 'Evidence delivered.' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to deliver evidence.';
    console.error('[submit-evidence] Error sending mail:', message);
    return res.status(500).json({ message });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default handler;
