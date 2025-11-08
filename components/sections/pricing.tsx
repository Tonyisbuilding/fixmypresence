// components/sections/PricingSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';

export interface Plan {
  name: string;
  amount: number;
}

interface PricingSectionProps {
  /** Fires when user clicks “Get started” on a card */
  onChoosePlan: (plan: Plan) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onChoosePlan }) => {
  const [brandRefinementLite, setBrandRefinementLite] = useState(false);
  const [brandRefinementPro, setBrandRefinementPro] = useState(false);
  const [sitePages, setSitePages] = useState(8);
  const [documentPages, setDocumentPages] = useState(200);
  const [revisionRounds, setRevisionRounds] = useState(3);
  const [fullTimeAttention, setFullTimeAttention] = useState(false);

  const fmt = (n: number) => n.toLocaleString();

  // Totals
  const totalLite = 5000 + (brandRefinementLite ? 1000 : 0);
  const totalPro = 8500 + (brandRefinementPro ? 1000 : 0);
  const siteExtra = Math.max(0, sitePages - 8) * 600;
  const docExtra = documentPages > 200
    ? Math.floor((documentPages - 200) / 50) * 450
    : 0;
  const revExtra = Math.max(0, revisionRounds - 3) * 500;
  const fullTimeExtra = fullTimeAttention ? 4000 : 0;
  const totalFull = 12000 + siteExtra + docExtra + revExtra + fullTimeExtra;

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <span className="pricing-badge">Pricing</span>
          <h2 className="section-title">
            Not all brands need a full overhaul — that’s why<br />
            our pricing is structured by depth, not fluff.
          </h2>
        </div>

        <div className="pricing-cards">
          {/* --- Lite --- */}
          <div className="pricing-card lite-card">
            <div className="card-icon">
              <Image src="/icons/Tier-ill.svg" alt="Lite icon" width={25} height={25} />
            </div>
            <h3 className="card-title01">Brand + Site Refresh Lite</h3>
            <p className="card-description">
              Established firms with a simple site that just needs to look as credible as the work they do.
            </p>

            <div className="card-price">
              <span className="price-amount">${fmt(totalLite)}</span>
              <span className="price-period">/ onetime payment</span>
            </div>
            <div className="divider" />

            <ul className="card-features">
              <li><span className="check-icon">✓</span> Complete website design/redesign (up to 3 core pages)</li>
              <li><span className="check-icon">✓</span> Custom development (custom code/no-code tools)</li>
              <li><span className="check-icon">✓</span> Messaging polish — headline, subtext, and clarity tweaks</li>
              <li><span className="check-icon">✓</span> Basic style guidelines (brand typography, color, and layout)</li>
              <li><span className="check-icon">✓</span> SEO optimization for on-page structure</li>
              <li><span className="check-icon">✓</span> Dedicated project admin for smooth experience</li>
              <li><span className="check-icon">✓</span> 3 rounds of revision</li>
              <li><span className="check-icon">✓</span> Your preferred communication channel</li>
            </ul>

            <div className="addon-section">
              <div className="addon-item">
                <div className="addon-left">
                  <div
                    className={`toggle-switch ${brandRefinementLite ? 'active' : ''}`}
                    onClick={() => setBrandRefinementLite(l => !l)}
                  >
                    <div className="toggle-slider" />
                  </div>
                  <span className="addon-text">Brand identity refinement</span>
                </div>
                <span className="addon-price">+$1,000</span>
              </div>
            </div>

            <div className="card-footer">
              {/* <p className="delivery-text">Average timeline: 2-3 weeks</p> */}
              <button
                className="get-started-btn"
                onClick={() => onChoosePlan({ name: 'Lite', amount: totalLite })}
              >
                Get started
                <div className="homepage-arrow-wrapper">
                  <div className="homepage-arrow">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* --- Pro --- */}
          <div className="pricing-card pro-card">
            <div className="card-icon">
              <Image src="/icons/Tier-ill.svg" alt="Pro icon" width={25} height={25} />
            </div>
            <h3 className="card-title01">Brand + Site Refresh Pro</h3>
            <p className="card-description">
              Firms with larger websites or more layered services who want strategic clarity across their digital presence.
            </p>

            <div className="card-price">
              <span className="price-amount">${fmt(totalPro)}</span>
              <span className="price-period">/ onetime payment</span>
            </div>
            <div className="divider" />

            <ul className="card-features">
              <li><span className="check-icon">✓</span> Complete website design/redesign (up to 8 core pages)</li>
              <li><span className="check-icon">✓</span> Custom development (custom code/no-code tools)</li>
              <li><span className="check-icon">✓</span> Messaging polish — headline, subtext, and clarity tweaks</li>
              <li><span className="check-icon">✓</span> Basic style guidelines (brand typography, color, and layout)</li>
              <li><span className="check-icon">✓</span> SEO optimization for on-page structure</li>
              <li><span className="check-icon">✓</span> Dedicated project admin for smooth experience</li>
            </ul>

            <div className="addon-section">
              <div className="addon-item">
                <div className="addon-left">
                  <div
                    className={`toggle-switch ${brandRefinementPro ? 'active' : ''}`}
                    onClick={() => setBrandRefinementPro(p => !p)}
                  >
                    <div className="toggle-slider" />
                  </div>
                  <span className="addon-text">Brand identity refinement</span>
                </div>
                <span className="addon-price">+$1,000</span>
              </div>
            </div>

            <div className="card-footer">
              {/* <p className="delivery-text">Average timeline: 2-3 weeks</p> */}
              <button
                className="get-started-btn"
                onClick={() => onChoosePlan({ name: 'Pro', amount: totalPro })}
              >
                Get started
                <div className="homepage-arrow-wrapper">
                  <div className="homepage-arrow">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* --- Full-Scope --- */}
          <div className="pricing-card full-scope-card">
            <span className="plan-badge">Best Value</span>

            <div className="card-icon">
              <Image src="/icons/Tier-ill.svg" alt="Full-scope icon" width={25} height={25} />
            </div>
            <h3 className="card-title01">Full-Scope Brand Refresh</h3>
            <p className="card-description">
              A strategic transformation of your entire brand presence — digital, visual, and verbal — built to match your firm’s true value.
            </p>

            <div className="card-price">
              <span className="price-amount">${fmt(totalFull)}</span>
              <span className="price-period">/ onetime payment</span>
            </div>
            <div className="divider" />

            <ul className="card-features">
              <li><span className="check-icon">✓</span> Everything in Brand + Site Refresh Pro</li>
              <li><span className="check-icon">✓</span> Full brand strategy alignment session</li>
              <li><span className="check-icon">✓</span> Advanced brand system: typography, color, icons, usage rules</li>
              <li><span className="check-icon">✓</span> On-brand presentation-ready document design (up to 200 pages)</li>
            </ul>

            <div className="customize-header">
              <span className="customize-icon">⚙️</span>
              <span className="customize-text">Customize package</span>
            </div>
            <div className="customize-section">
              <div className="customize-options">
                {/* Site pages */}
                <div className="option-row">
                  <div className="option-left">
                    <span className="option-icon">→</span>
                    <span className="option-text">Site pages</span>
                  </div>
                  <div className="option-right">
                    <button
                      className="option-btn"
                      onClick={() => setSitePages(p => Math.max(8, p - 1))}
                    >–</button>
                    <span className="option-value">{sitePages}</span>
                    <button
                      className="option-btn"
                      onClick={() => setSitePages(p => p + 1)}
                    >+</button>
                  </div>
                </div>

                {/* Document pages */}
                <div className="option-row">
                  <div className="option-left">
                    <span className="option-icon">→</span>
                    <span className="option-text">Document pages</span>
                  </div>
                  <div className="option-right">
                    <button
                      className="option-btn"
                      onClick={() => setDocumentPages(d => Math.max(200, d - 50))}
                    >–</button>
                    <span className="option-value">{documentPages}</span>
                    <button
                      className="option-btn"
                      onClick={() => setDocumentPages(d => d + 50)}
                    >+</button>
                  </div>
                </div>

                {/* Revision rounds */}
                <div className="option-row">
                  <div className="option-left">
                    <span className="option-icon">→</span>
                    <span className="option-text">Revision rounds</span>
                  </div>
                  <div className="option-right">
                    <button
                      className="option-btn"
                      onClick={() => setRevisionRounds(r => Math.max(3, r - 1))}
                    >–</button>
                    <span className="option-value">{revisionRounds}</span>
                    <button
                      className="option-btn"
                      onClick={() => setRevisionRounds(r => r + 1)}
                    >+</button>
                  </div>
                </div>

                {/* Full-time attention */}
                <div className="option-row">
                  <div className="option-left">
                    <span className="option-icon">→</span>
                    <span className="option-text">Full time attention (up to 5 weeks)</span>
                  </div>
                  <div className="option-right">
                    <div
                      className={`toggle-switch ${fullTimeAttention ? 'active' : ''}`}
                      onClick={() => setFullTimeAttention(f => !f)}
                    >
                      <div className="toggle-slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              {/* <p className="delivery-text">Average timeline: 2-3 weeks</p> */}


              <button
                type="button"
                className="get-started-btn full-scope-btn"
                onClick={() => {
                  console.log('⚡ Full-Scope plan clicked – total:', totalFull);
                  onChoosePlan({ name: 'Full-Scope', amount: totalFull });
                }}
              >
                Get started
                <div className="homepage-arrow-wrapper">
                  <div className="homepage-arrow">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                    </svg>
                  </div>
                </div>
              </button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
