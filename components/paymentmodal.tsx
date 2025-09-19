// components/PaymentModal.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Plan } from '@/components/sections/pricing';

interface PaymentModalProps {
  brief: string;
  plan: Plan;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ brief, plan, onClose }) => {
  const deposit = plan.amount / 2;

  const [step, setStep] = useState<'choice' | 'deposit' | 'evidence' | 'confirmation'>('choice');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // NEW: show "Copied!" per item for 1.5s
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, key?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (key) {
        setCopied(key);
        setTimeout(() => setCopied(null), 1500);
      }
    } catch {
      // optionally handle copy failures
    }
  };

  const sendEvidence = async () => {
    if (!file) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          if (typeof result === 'string') resolve(result);
          else reject(new Error('Failed to read file'));
        };
        reader.onerror = () => reject(reader.error ?? new Error('Failed to read file'));
        reader.readAsDataURL(file);
      });

      const response = await fetch('/api/submit-evidence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brief,
          plan,
          file: { name: file.name, type: file.type, dataUrl: base64 },
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const message =
          typeof errorBody?.message === 'string'
            ? errorBody.message
            : 'We could not deliver your evidence. Please try again.';
        throw new Error(message);
      }

      setStep('confirmation');
      setFile(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unexpected error occurred.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEvidenceSubmit = () => {
    if (!isSubmitting) void sendEvidence();
  };

  const closeAll = () => {
    setFile(null);
    setStep('choice');
    onClose();
  };

  if (step === 'choice') {
    return (
      <div className="modal-backdrop">
        <div className="modal modal-choice">
          <h2 className="modal-title">Thank you for choosing us</h2>
          <p className="modal-choice-message">How would you like to move forward with FixMyPresence?</p>
          <div className="modal-choice-actions">
            <button
              type="button"
              className="contact-btn"
              onClick={() => {
                window.location.href = 'mailto:tony@fixmypresence.com';
                closeAll();
              }}
            >
              Contact us
            </button>
            <button type="button" className="primary-btn" onClick={() => setStep('deposit')}>
              Pay now
            </button>
          </div>
          <div className="modal-choice-footer">
            <button type="button" className="cancel-btn" onClick={closeAll}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'evidence') {
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <h2 className="modal-title">Upload Payment Receipt</h2>
          <p>
            <strong>Brief:</strong> {brief}
          </p>
          <p>
            <strong>Plan:</strong> {plan.name} — ${plan.amount.toLocaleString()}
          </p>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="file-input"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          {errorMessage && <p className="modal-error">{errorMessage}</p>}
          <div className="modal-footer">
            <button type="button" className="primary-btn" disabled={!file || isSubmitting} onClick={handleEvidenceSubmit}>
              {isSubmitting ? 'Submitting…' : 'Submit Evidence'}
            </button>
            <button type="button" className="cancel-btn" onClick={closeAll}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'confirmation') {
    return (
      <div className="modal-backdrop">
        <div className="modal modal-confirmation">
          <h2 className="modal-title">Submission received</h2>
          <p className="modal-confirmation-message">
            We have sent your brief and payment evidence to tony@fixmypresence.com. We’ll review it and get back to you
            shortly.
          </p>
          <div className="modal-footer">
            <button type="button" className="primary-btn" onClick={closeAll}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="modal-title">Make Your Deposit</h2>

        <div className="modal-banner">
          <div className="modal-banner-icon">
            {/* Handshake SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 17l4-4m0 0l6 6m-6-6l6-6m-6 6l-2-2m8 8l4-4m0 0l-6-6m6 6l-2-2"
                stroke="#2D5A87"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="modal-banner-text">
            <strong>Thank you for wanting to work with us</strong>
            <br />
            All projects are initiated with 50% upfront to maintain equal commitments and project efficiency
          </div>
        </div>

        <p className="modal-deposit-text">
          Pay <strong>${deposit.toLocaleString()}</strong> (50% of ${plan.amount.toLocaleString()})
        </p>

        <div className="stripe-section">
          <span>
            Pay with <strong>stripe (Mima)</strong>
          </span>
          <a
            className="pay-now-btn"
            href="https://app.trymima.com/payments/68b0d2e72c3ea440e81a3845"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pay Now
          </a>
        </div>

        <div className="crypto-section">
          <h3 className="crypto-heading">Pay with crypto</h3>

          {[
            { label: 'Bitcoin (BTC)', addr: '1A4jjhkVViUNFjHWbPiv2VXGGcJSQTMnVn' },
            { label: 'Ethereum / USDT (ERC-20)', addr: '0x562d3dd82c6b0f7ac8dd6a6727cde579948385d1' },
            { label: 'USDT (TRC-20 on Tron)', addr: 'TPezoBBdjEEc1zmYJHxg5o5Lf2ZRpaWH2c' },
            { label: 'Solana', addr: '3nLG6sfQGNxvT2mbKhCRJKhscMtZETqVUcX3HCaqQUtz' },
          ].map((item) => (
            <div key={item.label} className="crypto-item">
              <div className="crypto-label">{item.label}</div>
              <div className="crypto-address-wrapper">
                <input type="text" readOnly value={item.addr} className="crypto-address" />

                <button
                  type="button"
                  className="crypto-copy-btn"
                  onClick={() => handleCopy(item.addr, item.label)}
                  aria-label="Copy address"
                  title="Copy"
                >
                  <Image src="/icons/copy.png" alt="Copy address" width={18} height={18} />
                </button>

                {copied === item.label && (
                  <span className="copy-confirm" role="status" aria-live="polite">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="modal-note">
          Please ensure payment details are copied correctly or send us a message for guidance.
        </p>

        <div className="modal-footer">
          <button type="button" className="primary-btn" onClick={() => setStep('evidence')}>
            I have paid
          </button>
          <button type="button" className="cancel-btn" onClick={closeAll}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
