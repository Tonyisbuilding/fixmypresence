// components/PaymentModal.tsx
import React, { useState } from 'react';
import { Plan } from '@/components/sections/pricing';

interface PaymentModalProps {
  brief: string;
  plan: Plan;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ brief, plan, onClose }) => {
  const deposit = plan.amount / 2;
  const [step, setStep] = useState<'deposit' | 'evidence'>('deposit');
  const [file, setFile] = useState<File | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (step === 'evidence') {
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <h2 className="modal-title">Upload Payment Receipt</h2>
          <p><strong>Brief:</strong> {brief}</p>
          <p><strong>Plan:</strong> {plan.name} — ${plan.amount.toLocaleString()}</p>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="file-input"
            onChange={e => setFile(e.target.files?.[0] ?? null)}
          />
          <div className="modal-footer">
            <button
              type="button"
              className="primary-btn"
              disabled={!file}
              onClick={() => {
                /* TODO: upload receipt + data */
                onClose();
              }}
            >
              Submit Evidence
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
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
            <strong>Thank you for wanting to work with us</strong><br/>
            All projects are initiated with 50% upfront to maintain equal commitments and project efficiency
          </div>
        </div>

        <p className="modal-deposit-text">
          Pay <strong>${deposit.toLocaleString()}</strong> (50% of ${plan.amount.toLocaleString()})
        </p>

        <div className="stripe-section">
          <span>Pay with <strong>stripe (Mima)</strong></span>
          <button type="button" className="pay-now-btn">Pay Now</button>
        </div>

        <div className="crypto-section">
          <h3 className="crypto-heading">Pay with crypto</h3>

          {[
            { label: 'Bitcoin (Legacy P2PKH)', addr: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT' },
            { label: 'Ethereum / USDT (ERC-20)', addr: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe' },
            { label: 'USDT (TRC-20 on Tron)', addr: 'TX7Z655b2RsiYiZzFeQRqw1BxYK8R8N5Zs' },
            { label: 'Solana', addr: '4eZr1L6UJXyZvnN9G6VR5vz4M6uH8JcvsQeJvLmFa1Lf' },
          ].map(item => (
            <div key={item.label} className="crypto-item">
              <div className="crypto-label">{item.label}</div>
              <div className="crypto-address-wrapper">
                <input
                  type="text"
                  readOnly
                  value={item.addr}
                  className="crypto-address"
                />
                <button
                  type="button"
                  className="crypto-copy-btn"
                  onClick={() => handleCopy(item.addr)}
                >
                  📋
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="modal-note">
          Please ensure payment details are copied correctly or send us a message for guidance.
        </p>

        <div className="modal-footer">
          <button
            type="button"
            className="primary-btn"
            onClick={() => setStep('evidence')}
          >
            I have paid
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
