import Image from 'next/image';

const ServicesSection = () => {
    return (
      <section className="services-section">
        {/* Header */}
        <div className="section-header">
          <span className="services-badge">Services</span>
          <h1 className="section-title">
            We Wear Three Hats—All<br />
            Focused on How You Show Up
          </h1>
        </div>
  
        {/* Service Cards */}
        <div className="services-grid">
          {/* Digital Presence Design Card */}
          <div className="service-card">
            <div className="card-content">
              <div className="card-text">
                <h2 className="card-title">Website Design & Dev</h2>
              </div>
              <div className="card-images">
                <div className="for-img">
                  <Image className="hide-mobile" src="/images/EC-service.png" alt="Website design example 1" width={600} height={400} />
                  <Image src="/images/Alberon-servic.png" alt="Website design example 2" width={600} height={400} />
                </div>
                <div className="for-content">
                  <p className="card-description00">
                    We design and refine websites that build clarity, trust and conversion across all touchpoints.
                  </p>
                  <ul className="service-list">
                    <li>Website design (new & redesign)</li>
                    <li>Webflow & Framer site development</li>
                    <li>Responsive/mobile optimization</li>
                    <li>Messaging alignment + layout restructuring</li>
                    <li>Design audit</li>
                    <li>Continuous maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          {/* Brand Identity Systems Card */}
          <div className="service-card">
            <div className="card-content">
              <div className="card-text">
                <h2 className="card-title">Brand Identity Design</h2>
              </div>
              <div className="card-images">
                <div className="for-img">
                <Image className="hide-mobile" src="/images/Sumio-cap.png" alt="Website design example 1" width={600} height={400} />
                <Image src="/images/Arbx.png" alt="Brand identity example 2" width={600} height={400} />
                </div>
                <div className="for-content">
                  <p className="card-description00">
                    We craft visual identities that align with your values and translate across every asset.
                  </p>
                  <ul className="service-list">
                    <li>Brand usage guidelines</li>
                    <li>Logo design & refinement</li>
                    <li>Typography + color systems</li>
                    <li>Foundational brand systems</li>
                    <li>Rebranding & visual upgrades</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          {/* Communication & Collateral Design Card */}
          <div className="service-card">
            <div className="card-content">
              <div className="card-text">
                <h2 className="card-title">
                  Communication &<br />
                  Collateral Design
                </h2>
              </div>
              <div className="card-images">
                <div className="for-img">
                <Image className="hide-mobile" src="/images/ARBX (2).png" alt="Website design example 1" width={600} height={400} />
                <Image src="/images/ccd2.png" alt="Presentation design example 2" width={600} height={400} />
                </div>
                <div className="for-content">
                  <p className="card-description00">
                    Your credibility hinges on how well you present. We design materials that tell the right story with clarity.
                  </p>
                  <ul className="service-list">
                    <li>Reports & whitepapers</li>
                    <li>Sales PDFs & one-pagers</li>
                    <li>Proposal and onboarding docs</li>
                    <li>Pitch decks & investor presentations</li>
                    <li>Visual audits of client-facing materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  
