// components/TestimonialsSection.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: "Paul Lamain",
        position: "CEO at Edge Capital",
        avatar: "/images/paul-lamain.jpg",
        testimonial: "Tony has this calm, thoughtful way of working that immediately builds trust. He doesn't just ask for design preferences—he asks the kind of questions that make you rethink how you're presenting your business. What he delivered didn't just look great—it felt right. Sharp, intentional, and exactly what we needed.",
        businessTypes: ["Web design & Dev", "Document design", "Branding", "Graphics design"],
        servicesOffered: ["B.V", "B2B", "Finance", "Asset Manager", "For-profit"]
    },
    {
        id: 2,
        name: "Alex Gold",
        position: "CEO at Arcademy",
        avatar: "/images/alex-gold.png",
        testimonial: "What stood out with Tony was how easy he made the whole process. He communicated clearly, kept us in the loop, and handled everything calmly even when timelines were tight. The work got done quickly, without stress on our side, and it felt like working with someone who genuinely had things under control.",
        businessTypes: ["Website redesign", "Webflow dev", "Brand retouch", "Social media graphics"],
        servicesOffered: ["Ltd", "B2C", "EdTech", "For-profit"]
    },
    {
        id: 3,
        name: "Mero Maj",
        position: "CMO at NextJump.io",
        avatar: "/images/person.png",
        testimonial: "Partnering with Tony was a game-changer for NextJump.io. He quickly understood our vision, sharpened our messaging, and delivered a site that speaks directly to our audience. Professional, efficient, and impactful.",
        businessTypes: ["Brand identity", "UI/UX design", "Marketing materials", "Pitch deck design"],
        servicesOffered: ["Coaching", "B2C", "Edtech",  "For-profit"]
    },
    {
        id: 4,
        name: "Aron Broeken",
        position: "General manager at EdgeNext",
        avatar: "/images/Aron.png",
        testimonial: "Working with Tony was seamless. His team not only redesigned our website but also refreshed all our key documents to align with our new brand direction. The result was a clear, consistent identity that communicates our value with confidence. Their attention to detail and collaborative approach made the entire process smooth and impactful.",
        businessTypes: ["Complete rebrand", "Website overhaul", "Marketing campaigns", "Print design"],
        servicesOffered: ["Corporation", "B2B", "Enterprise", "For-profit"]
    },
    {
        id: 5,
        name: "Shaayak Chatterjee",
        position: "Founder of Breathe ESG",
        avatar: "/images/esgf.png",
        testimonial: "Tony and his team designed our entire product system and website end-to-end. They grasped our goals fast and delivered a clean, scalable experience that our customers love.",
        businessTypes: ["Sustainability branding", "Web design", "Content strategy", "Social media"],
        servicesOffered: ["B2B", "Environmental", "Clean Tech", "LLC", "For-profit"]
    }
]

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const getVisibleTestimonials = () => {
        const first = testimonials[currentIndex]
        const second = testimonials[(currentIndex + 1) % testimonials.length]
        return [first, second]
    }

    const [firstTestimonial, secondTestimonial] = getVisibleTestimonials()

    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <div className="testimonials-title">
                    <h2 className="title-line-1">Reputation is everything.</h2>
                    <h2 className="title-line-2">Ours is flawless.</h2>
                </div>
                <div className="testimonials-nav">
                    <button 
                        className="nav-button prev" 
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        className="nav-button next" 
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div className="testimonials-content">
                {/* First Testimonial Card */}
                <div className="testimonial-card">
                    {/* Left Container - Business Types & Services (Transparent Background) */}
                    <div className="left-container">
                        <div className="tags-section">
                            <div className="tag-group">
                                <h5 className="tag-group-title"></h5>
                                <div className="tags-wrapper">
                                    {firstTestimonial.businessTypes.map((type, index) => (
                                        <span key={index} className="business-type-tag">
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="tag-group">
                                <h5 className="tag-group-title">Business Types</h5>
                                <div className="tags-wrapper">
                                    {firstTestimonial.servicesOffered.map((service, index) => (
                                        <span key={index} className="service-tag">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Container - Profile & Review (EDF3F4 Background) */}
                    <div className="right-container">
                        <div className="profile-section">
                            <div className="avatar-container">
                                <Image 
                                    src={firstTestimonial.avatar} 
                                    alt={firstTestimonial.name}
                                    width={48}
                                    height={48}
                                    className="avatar"
                                />
                            </div>
                            <div className="profile-info">
                                <h4 className="profile-name">{firstTestimonial.name}</h4>
                                <p className="profile-position">{firstTestimonial.position}</p>
                            </div>
                        </div>

                        <div className="review-section">
                            <p className="review-text">{firstTestimonial.testimonial}</p>
                        </div>
                    </div>
                </div>

                {/* Second Testimonial Card */}
                <div className="testimonial-card">
                    {/* Left Container - Business Types & Services (Transparent Background) */}
                    <div className="left-container">
                        <div className="tags-section">
                            <div className="tag-group">
                                <h5 className="tag-group-title">Services</h5>
                                <div className="tags-wrapper">
                                    {secondTestimonial.businessTypes.map((type, index) => (
                                        <span key={index} className="business-type-tag">
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="tag-group">
                                <h5 className="tag-group-title">Business Types</h5>
                                <div className="tags-wrapper">
                                    {secondTestimonial.servicesOffered.map((service, index) => (
                                        <span key={index} className="service-tag">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Container - Profile & Review (EDF3F4 Background) */}
                    <div className="right-container">
                        <div className="profile-section">
                            <div className="avatar-container">
                                <Image 
                                    src={secondTestimonial.avatar} 
                                    alt={secondTestimonial.name}
                                    width={48}
                                    height={48}
                                    className="avatar"
                                />
                            </div>
                            <div className="profile-info">
                                <h4 className="profile-name">{secondTestimonial.name}</h4>
                                <p className="profile-position">{secondTestimonial.position}</p>
                            </div>
                        </div>

                        <div className="review-section">
                            <p className="review-text">{secondTestimonial.testimonial}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}