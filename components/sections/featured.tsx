// components/FeaturedProjectsSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

type Project = {
  id: number;
  image: string;
  alt: string;
  company: string;
  description1: string;
  description2: string;
  services: string[];
  link: string;
  icon: string;
};

const projects: Project[] = [
  {
    id: 1,
    image: '/images/prj.png',
    alt: 'Edge Capital Brand Refresh',
    company: 'Edge Capital Management B.V',
    description1:
      'Edge Capital needed a cohesive brand presence that aligned their website and investor documents with the firm’s quantitative investment focus.',
    description2:
      'We introduced a new brand direction, redesigned their website, and refined their key documents—creating a consistent identity that communicates clarity and trust to stakeholders.',
    services: ['Web Design', 'Brand', 'Development'],
    link: 'https://www.behance.net/tonyisbuilding',
    icon: '/icons/finance.svg',
  },
  {
    id: 2,
    image: '/images/prj1.png',
    alt: 'Bulwark project',
    company: 'Bulwark',
    description1:
      'Bulwark wanted to unify their brand representation and refine their direction for a stronger market presence.',
    description2:
      'We refreshed their identity and applied it across digital and print, creating a consistent brand that communicates trust.',
    services: ['Brand Identity', 'Web Design'],
    link: 'https://www.behance.net/tonyisbuilding',
    icon: '/icons/insurance.svg',
  },
  {
    id: 3,
    image: '/images/prj2.png',
    alt: '913.ai project',
    company: 'Spenviro sustainability initiative',
    description1:
      'Spenviro set out to connect sustainability efforts with a platform that unifies individuals and solutions.',
    description2:
      'We designed and developed a digital space that reflects their mission and empowers collaboration for lasting impact.',
    services: ['Brand Identity', 'Platform Design'],
    link: 'https://www.behance.net/tonyisbuilding',
    icon: '/icons/deforestation.svg',
  },
  {
    id: 4,
    image: '/images/lalourde.png',
    alt: 'Lalourde project',
    company: 'Lalourde.fr',
    description1:
      'Lalourde, a French flush door manufacturer, needed a modern online presence to showcase their craftsmanship and make their products accessible to a wider audience.',
    description2:
      'We designed and developed their website from the ground up—including copywriting—resulting in a clear, professional platform that communicates quality and strengthens their visibility.',
    services: ['UX Design', 'Branding'],
    link: 'https://www.behance.net/tonyisbuilding',
    icon: '/icons/furniture.svg',
  },
];

const FeaturedProjectsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const renderProjectCard = (project: Project, flexClass: string) => {
    const isExpanded = expandedId === project.id;
    const detailsId = `project-details-${project.id}`;

    return (
      <div className={`project-card ${flexClass}`} key={project.id}>
        <Image
          src={project.image}
          alt={project.alt}
          className="project-image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <button
          type="button"
          className="mobile-project-toggle"
          onClick={() => toggleCard(project.id)}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
        >
          <span className="mobile-project-label">{project.company}</span>
          <ChevronDown aria-hidden="true" className="mobile-project-icon" />
        </button>

        <div
          id={detailsId}
          className={`project-overlay${isExpanded ? ' is-expanded' : ''}`}
        >
          <div className="overlay-content">
            <div className="overlay-top-section">
              <div className="overlay-header">
                <span
                  className="company-icon"
                  data-project={project.id}
                  style={{
                    WebkitMaskImage: `url(${project.icon})`,
                    maskImage: `url(${project.icon})`,
                  }}
                  aria-hidden="true"
                />
                <h4 className="overlay-company">{project.company}</h4>
              </div>

              <div className="overlay-body">
                <p className="overlay-description">{project.description1}</p>
                <p className="overlay-description">{project.description2}</p>
              </div>
            </div>

            <div className="overlay-bottom-section">
              <div className="service-tags">
                {project.services.map((service, index) => (
                  <span key={index} className="service-tag">
                    {service}
                  </span>
                ))}
              </div>
              <a href={project.link} className="overlay-link">
                View Case Study →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
          {renderProjectCard(projects[0], 'flex-card-65')}
          {renderProjectCard(projects[1], 'flex-card-35')}
        </div>

        {/* Second Sub Container - Card 1 (40%) and Card 2 (60%) */}
        <div className="projects-sub-container">
          {renderProjectCard(projects[2], 'flex-card-40')}
          {renderProjectCard(projects[3], 'flex-card-60')}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
