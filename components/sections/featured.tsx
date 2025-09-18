// components/FeaturedProjectsSection.tsx
import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        id: 1,
        image: '/images/prj.png',
        alt: 'Edge Capital Brand Refresh',
        company: 'Edge Capital Management B.V',
        description1: 'Edge Capital needed a cohesive brand presence that aligned their website and investor documents with the firm’s quantitative investment focus.',
        description2: 'We introduced a new brand direction, redesigned their website, and refined their key documents—creating a consistent identity that communicates clarity and trust to stakeholders.',
        services: ['Web Design', 'Brand', 'Development'],
        link: 'https://www.behance.net/tonyisbuilding',
    },
    {
        id: 2,
        image: '/images/prj1.png',
        alt: 'Bulwark project',
        company: 'Bulwark',
        description1: 'Bulwark wanted to unify their brand representation and refine their direction for a stronger market presence.',
        description2: 'We refreshed their identity and applied it across digital and print, creating a consistent brand that communicates trust.',
        services: ['Brand Identity', 'Web Design'],
        link: 'https://www.behance.net/tonyisbuilding',
    },
    {
        id: 3,
        image: '/images/prj2.png',
        alt: '913.ai project',
        company: 'Spenviro sustainability initiative',
        description1: 'Spenviro set out to connect sustainability efforts with a platform that unifies individuals and solutions.',
        description2: 'We designed and developed a digital space that reflects their mission and empowers collaboration for lasting impact.',
        services: ['Brand Identity', 'Platform Design'],
        link: 'https://www.behance.net/tonyisbuilding',
    },
    {
        id: 4,
        image: '/images/lalourde.png',
        alt: 'Lalourde project',
        company: 'Lalourde.fr',
        description1: 'Lalourde, a French flush door manufacturer, needed a modern online presence to showcase their craftsmanship and make their products accessible to a wider audience.',
        description2: 'We designed and developed their website from the ground up—including copywriting—resulting in a clear, professional platform that communicates quality and strengthens their visibility.',
        services: ['UX Design', 'Branding'],
        link: 'https://www.behance.net/tonyisbuilding',
    },
]

export default function FeaturedProjectsSection() {
    return (
        <section className="featured-section">

            <div className="section-header">
                <span className="services-badge">Portfolio</span>
                <div className="cwrap">
                    <h2 className="section-title">Featured Project</h2>
                    <a href="https://www.behance.net/tonyisbuilding" className="view-more">
                        View more projects
                        <ArrowUpRight size={20} className="view-more-icon" />
                    </a>
                </div>
            </div>

            <div className="projects-flex-container">
                {/* First Sub Container - Card 1 (65%) and Card 2 (35%) */}
                <div className="projects-sub-container">
                    <div className="project-card flex-card-65">
                        <Image src={projects[0].image} alt={projects[0].alt} className="project-image" fill sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="project-overlay">
                            <div className="overlay-content">
                                <div className="overlay-top-section">
                                    <div className="overlay-header">
                                        <div className="company-icon">
                                            <Image
                                                src="/icons/finance.svg"
                                                alt="Company icon"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <h4 className="overlay-company">{projects[0].company}</h4>
                                    </div>

                                    <div className="overlay-body">
                                        <p className="overlay-description">{projects[0].description1}</p>
                                        <p className="overlay-description">{projects[0].description2}</p>
                                    </div>
                                </div>

                                <div className="overlay-bottom-section">
                                    <div className="service-tags">
                                        {projects[0].services.map((service, idx) => (
                                            <span key={idx} className="service-tag">{service}</span>
                                        ))}
                                    </div>
                                    <a href={projects[0].link} className="overlay-link">
                                        View Case Study →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card flex-card-35">
                        <Image src={projects[1].image} alt={projects[1].alt} className="project-image" fill sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="project-overlay">
                            <div className="overlay-content">
                                <div className="overlay-top-section">
                                    <div className="overlay-header">
                                        <div className="company-icon">
                                            <Image
                                                src="/icons/insurance.svg"
                                                alt="Company icon"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <h4 className="overlay-company">{projects[1].company}</h4>
                                    </div>

                                    <div className="overlay-body">
                                        <p className="overlay-description">{projects[1].description1}</p>
                                        <p className="overlay-description">{projects[1].description2}</p>
                                    </div>
                                </div>

                                <div className="overlay-bottom-section">
                                    <div className="service-tags">
                                        {projects[1].services.map((service, idx) => (
                                            <span key={idx} className="service-tag">{service}</span>
                                        ))}
                                    </div>
                                    <a href={projects[1].link} className="overlay-link">
                                        View Case Study →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Sub Container - Card 1 (40%) and Card 2 (60%) */}
                <div className="projects-sub-container">
                    <div className="project-card flex-card-40">
                        <Image src={projects[2].image} alt={projects[2].alt} className="project-image" fill sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="project-overlay">
                            <div className="overlay-content">
                                <div className="overlay-top-section">
                                    <div className="overlay-header">
                                        <div className="company-icon">
                                            <Image
                                                src="/icons/deforestation.svg"
                                                alt="Company icon"
                                                width={20}
                                                height={20}
                                            />
                                        </div>                                        <h4 className="overlay-company">{projects[2].company}</h4>
                                    </div>

                                    <div className="overlay-body">
                                        <p className="overlay-description">{projects[2].description1}</p>
                                        <p className="overlay-description">{projects[2].description2}</p>
                                    </div>
                                </div>

                                <div className="overlay-bottom-section">
                                    <div className="service-tags">
                                        {projects[2].services.map((service, idx) => (
                                            <span key={idx} className="service-tag">{service}</span>
                                        ))}
                                    </div>
                                    <a href={projects[2].link} className="overlay-link">
                                        View Case Study →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card flex-card-60">
                        <Image src={projects[3].image} alt={projects[3].alt} className="project-image" fill sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="project-overlay">
                            <div className="overlay-content">
                                <div className="overlay-top-section">
                                    <div className="overlay-header">
                                        <div className="company-icon">
                                            <Image
                                                src="/icons/furniture.png"
                                                alt="Company icon"
                                                width={20}
                                                height={20}
                                            />
                                        </div>                                               <h4 className="overlay-company">{projects[3].company}</h4>
                                    </div>

                                    <div className="overlay-body">
                                        <p className="overlay-description">{projects[3].description1}</p>
                                        <p className="overlay-description">{projects[3].description2}</p>
                                    </div>
                                </div>

                                <div className="overlay-bottom-section">
                                    <div className="service-tags">
                                        {projects[3].services.map((service, idx) => (
                                            <span key={idx} className="service-tag">{service}</span>
                                        ))}
                                    </div>
                                    <a href={projects[3].link} className="overlay-link">
                                        View Case Study →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}