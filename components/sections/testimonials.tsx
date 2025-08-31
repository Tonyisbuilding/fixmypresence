// components/TestimonialSection.tsx
import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    image: '/images/paul-lamain.png',
    name: 'Paul Lamain',
    role: 'CEO at Edge Capital',
    quote:
      '“Tony has this calm, thoughtful way of working that immediately builds trust. He doesn’t just ask for design preferences—he asks the kind of questions that make you rethink how you’re presenting your business. What he delivered didn’t just look great—it felt right. Sharp, intentional, and exactly what we needed.”',
  },
  {
    image: '/images/paul-lamain.png',
    name: 'Jane Doe',
    role: 'Founder at BrightVault',
    quote:
      '“Tony took our vague ideas and turned them into a bold brand that really resonates. His process is thorough, and he always made sure we understood every decision.”',
  },
  {
    image: '/images/paul-lamain.png',
    name: 'Ahmed Khan',
    role: 'COO at FinEdge',
    quote:
      '“Working with Tony was a game-changer. He pinpointed exactly what was holding back our site, then delivered a crisp, modern design that’s already boosting engagement.”',
  },
  {
    image: '/images/paul-lamain.png',
    name: 'Li Wei',
    role: 'CMO at CryptoWave',
    quote:
      '“Tony’s attention to detail is unmatched. From typography to micro-interactions, every element feels intentional and polished. Highly recommended.”',
  },
  {
    image: '/images/paul-lamain.png',
    name: 'Sofia Martinez',
    role: 'Head of Marketing at GreenFunds',
    quote:
      '“Tony balances creativity with strategy brilliantly. He helped us refine our messaging and visuals so our investors now know exactly who we are and what we stand for.”',
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)

  // auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const { image, name, role, quote } = testimonials[current]

  return (
    <section className="testimonial-section">
      <div className="section-header">
        <span className="services-badge">Testimonial</span>
      </div>

      <div className="testimonial-grid">
        <blockquote className="testimonial-quote">{quote}</blockquote>

        <div className="testimonial-footer">
          <div className="holder">
            <img src={image} alt={name} className="testimonial-avatar" />
            <div className="testimonial-info">
              <p className="testimonial-name">{name}</p>
              <p className="testimonial-role">{role}</p>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
