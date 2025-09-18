// components/sections/Hero.tsx
import React from 'react';
import Image from 'next/image';

interface HeroProps {
  /** The current value of the “brief or URL” input */
  brief: string;
  /** Called whenever the user types or pastes into the input */
  onBriefChange: (val: string) => void;
  /** Called when the user clicks “Get started Now” */
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ brief, onBriefChange, onGetStarted }) => {
  return (

    // <div className="header-container">
    <section className="homepage-hero">

      <div className="hero-main-1">
        <h1 className="homepage-hero-title">
          We Create Digital Presence
          <br />
          That Speaks Before You Do
        </h1>

        <p className="homepage-hero-subtitle">
          We create and refine websites, brand identities, and sales materials for trust-first
          businesses  <br />  —to make their digital presence communicate with their audience the way it truly should.
        </p>

        <div className="homepage-input-section">
          <input
            type="text"
            value={brief}
            onChange={e => onBriefChange(e.target.value)}
            placeholder="paste website url/project brief(optional)"
            className="homepage-url-input"
          />
        </div>

        <div className="homepage-button-group">
          <button
            className="Hero-btn-pry"
            onClick={onGetStarted}
          >
            Get started Now
            <div className="homepage-arrow-wrapper">
              <div className="homepage-arrow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/Arrow.svg"
                  alt="Arrow icon"
                  width={17}
                  height={17}
                />
              </div>
            </div>
          </button>

          <button
            type="button"
            className="Hero-btn-sec"
            aria-label="Book a call on Calendly"
            onClick={() => {
              const url = "https://calendly.com/thisboyisbuilding/introductory-call?hide_event_type_details=1&hide_gdpr_banner=1";
              // @ts-ignore - injected by Calendly script
              if (window.Calendly?.initPopupWidget) {
                // @ts-ignore
                window.Calendly.initPopupWidget({ url });
              } else {
                // Fallback if the script hasn't loaded yet
                window.open(url, "_blank", "noopener,noreferrer");
              }
            }}
          >
            Book a call
            <span className="homepage-arrow-wrapper">
              <span className="homepage-arrow">
                <img src="/icons/call.svg" alt="" width={17} height={17} />
              </span>
            </span>
          </button>


        </div>

        <p className="homepage-submission-note">
          <u>Your submission helps us prep for a more focused, valuable call.</u>
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="logo-marquee">
        <p className="marquee-text">Trusted by teams and Founders worldwide</p>
        <div className="marquee">
          <div className="marquee__inner">
            {(() => {
              const base = [
                { src: '/images/Logo1.png', height: 30 },
                { src: '/images/logo2.png', height: 30 },
                { src: '/images/logo3.png', height: 30 },
                { src: '/images/logo4.png', height: 30 },
                { src: '/images/logo5.png', height: 25 }, // keep smaller
                { src: '/images/logo6.png', height: 30 },
              ];
              const track = base.concat(base); // duplicate for seamless loop
              return track.map((item, idx) => {
                const dims = item.height === 30
                  ? { width: 90, height: 30 }
                  : { width: 75, height: 25 };
                return (
                  <Image
                    key={idx}
                    src={item.src}
                    alt="Client logo"
                    className="marquee-logo"
                    {...dims}
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                  />
                );
              });
            })()}
          </div>
        </div>
      </div>
    </section>

    // </div>



  );
};

export default Hero;
