// components/FeaturedProjectsSection.tsx
import React from 'react'
import { ArrowUpRight } from 'lucide-react'


const projects = [
    {
        id: 1,
        image: '/images/ditto.png',
        alt: 'Ditto Series B project',
        title: 'A fresh brand, pitch deck, and site to help Ditto bring in their $82m Series B',
        metrics: '$82M Series B Raised · $462M Valuation',
        link: '/case-study/ditto',
    },
    {
        id: 2,
        image: '/images/utility.png',
        alt: 'Utility project',
        title: 'Utility — Web3 cybersecurity branding',
        metrics: '',
        link: '/case-study/utility',
    },
    {
        id: 3,
        image: '/images/913ai.png',
        alt: '913.ai project',
        title: '913.ai — AI data platform identity',
        metrics: '',
        link: '/case-study/913ai',
    },
    {
        id: 4,
        image: '/images/midfunnel.png',
        alt: 'MidFunnel project',
        title: 'MidFunnel — Demand gen platform UX & branding',
        metrics: '',
        link: '/case-study/midfunnel',
    },
]

export default function FeaturedProjectsSection() {
    return (
        <section className="featured-section">
            <div className="section-header">
                <span className="services-badge">Portfolio</span>
                <div className="cwrap">
                    <h2 className="section-title">Featured Project</h2>
                    <a href="/portfolio" className="view-more">
                        View more projects
                        <ArrowUpRight size={20} className="view-more-icon" />
                    </a>
                </div>

            </div>

            <div className="projects-grid">
                {projects.map((p, i) => {
                    // pick grid-area class by index
                    const areaClass =
                        i === 0
                            ? 'large'
                            : i === 1
                                ? 'tall'
                                : i === 2
                                    ? 'bottom-left'
                                    : 'bottom-right'

                    return (
                        <div key={p.id} className={`project-card ${areaClass}`}>
                            <img src={p.image} alt={p.alt} className="project-image" />
                            <div className="project-overlay">
                                <div className="overlay-content">
                                    <h3 className="overlay-title">{p.title}</h3>
                                    {p.metrics && <p className="overlay-metrics">{p.metrics}</p>}
                                    <a href={p.link} className="overlay-link">
                                        View Case Study →
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}