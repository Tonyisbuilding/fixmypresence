// components/FAQSection.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import { Plus, X } from 'lucide-react'

const faqs = [
    {
        id: 1,
        question: "Do you offer refunds if we're not satisfied?",
        answer: "Because every project is custom and involves upfront strategy, we don't offer full refunds once work has begun. However, we structure our process in stages — meaning you see progress early and can give feedback before major milestones. If a project needs to be paused, we only charge for the work completed up to that point. This way, you're never paying for deliverables you don't receive."
    },
    {
        id: 2,
        question: "What types of businesses do you work with?",
        answer: "We work with a diverse range of businesses, from startups to established enterprises across various industries including technology, finance, healthcare, and more."
    },
    {
        id: 3,
        question: "Do you only design websites, or also handle development?",
        answer: "We provide both design and development services. Our team can handle the complete process from initial design concepts to fully functional websites."
    },
    {
        id: 4,
        question: "Do you design investor decks, reports, and other business documents?",
        answer: "Yes, we specialize in creating professional business documents including investor decks, annual reports, presentations, and other corporate materials."
    },
    {
        id: 5,
        question: "Can you work with our existing branding or do we need a full rebrand?",
        answer: "We can work with your existing brand guidelines and assets, or help you develop a complete rebrand depending on your needs and goals."
    },
    {
        id: 6,
        question: "Are there hidden costs we should expect?",
        answer: "We provide transparent pricing upfront with detailed project scopes. There are no hidden fees, and any additional work outside the original scope is discussed and approved before proceeding."
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0) // First item open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="faq-section">
            <div className="faq-container">
                {/* Left Side - FAQ Accordion */}
                <h2 className="faq-title">Frequently asked questions</h2>

                <div className="faq-cta">
                    <div className="faq-left">

                        <div className="faq-accordion">
                            {faqs.map((faq, index) => (
                                <div key={faq.id} className="faq-item">
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className="question-text">{faq.question}</span>
                                        <span className="faq-icon">
                                            {openIndex === index ? <X size={20} /> : <Plus size={20} />}
                                        </span>
                                    </button>

                                    {openIndex === index && (
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Contact Card */}
                    <div className="faq-right">
                        <div className="contact-card">
                            <div className="contact-avatar">
                                <Image
                                    src="/images/anthony.jpg"
                                    alt="Contact person"
                                    width={80}
                                    height={80}
                                    className="avatar-image"
                                />
                            </div>

                            <h3 className="contact-title">Or just ask us anything in 5mins</h3>
                            <p className="contact-subtitle">
                                Time to get introduced and explore how fixmypresence can help.
                            </p>

                            <button className="book-call-button">
                                <span>
                                    <div className="homepage-arrow-wrapper">
                                        <div className="homepage-arrow">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src="/icons/call.svg"
                                                alt="Call Icon"
                                                width="17"
                                                height="17"
                                            />
                                        </div>
                                    </div>
                                </span>
                                Book a call
                            </button>

                            <div className="email-section">
                                <span className="email-icon"><img src="/icons/mail.svg" alt="" /></span>
                                <div className="email-text">
                                    <p className="email-label">Prefer email communication?</p>
                                    <p className="email-address">
                                        Have it: <a href="mailto:tony@fixmypresence.com">tony@fixmypresence.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}