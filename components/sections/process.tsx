// components/ProcessSection.tsx
import React from 'react'
import Image from 'next/image'

const steps = [
  {
    icon: '/icons/envelope.png',
    title: 'Send Your Project Brief',
    number: '01',
    description:
      'Submit your website, brand, or material link for a pre-call evaluation. We’ll review your presence and respond within 24 hours.',
  },
  {
    icon: '/icons/conversation.png',
    title: 'Get a Strategic Call + Quote',
    number: '02',
    description:
      'We’ll walk you through your positioning gaps, ask focused questions, and send a custom quote based on your goals.',
  },
  {
    icon: '/icons/rocket-launch.png',
    title: 'Project Kicks Off',
    number: '03',
    description:
      'Once approved, we begin. No bloated timelines or handoffs—focus on elevating your brand’s online and on-paper presence.',
  },
]

const ProcessSection = () => {
  return (
    <section className="process-section">
      {/* Section Header (reuses services-badge & section-title styles) */}
      <div className="section-header">
        <span className="services-badge">process</span>
        <h2 className="section-title">
          Our process is designed to <br />
          save your time
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="process-grid">
        {steps.map((s) => (
          <div key={s.number} className="process-card">
            <div className="card-icon">
              <Image src={s.icon} alt="" width={48} height={48} />
            </div>
            <div className="card-body">
              <div className="card-step">
                <span className="step-number">{s.number}</span>
                <hr className="step-divider" />
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-description">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProcessSection
