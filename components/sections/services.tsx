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
                <h2 className="card-title">Digital Presence Design</h2>
              </div>
              <div className="card-images">
                <div className="for-img">
                  <img className="hide-mobile" src="/images/image01.jpg" alt="Website design example 1" />
                  <img src="/images/image01.jpg" alt="Website design example 2" />
                </div>
                <div className="for-content">
                  <p className="card-description">
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
                <h2 className="card-title">Brand Identity Systems</h2>
              </div>
              <div className="card-images">
                <div className="for-img">
                <img className="hide-mobile" src="/images/image01.jpg" alt="Website design example 1" />
                <img src="/images/image01.jpg" alt="Brand identity example 2" />
                </div>
                <div className="for-content">
                  <p className="card-description">
                    We craft visual identities that align with your values and translate across every asset.
                  </p>
                  <ul className="service-list">
                    <li>Logo design & refinement</li>
                    <li>Typography + color systems</li>
                    <li>Brand usage guidelines</li>
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
                <img className="hide-mobile" src="/images/image01.jpg" alt="Website design example 1" />
                <img src="/images/image01.jpg" alt="Presentation design example 2" />
                </div>
                <div className="for-content">
                  <p className="card-description">
                    Your credibility hinges on how well you present. We design materials that tell the right story with clarity.
                  </p>
                  <ul className="service-list">
                    <li>Pitch decks & investor presentations</li>
                    <li>Sales PDFs & one-pagers</li>
                    <li>Reports & whitepapers</li>
                    <li>Proposal and onboarding docs</li>
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
  