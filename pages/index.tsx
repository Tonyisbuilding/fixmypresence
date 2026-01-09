// pages/index.tsx
import React, { useState, useRef } from 'react';
import Head from "next/head";
import NavBar from "@/components/sections/nav-bar";

import Layout from "@/components/layout/layout";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import ServicesSection from "@/components/sections/services";
import ProcessSection from "@/components/sections/process";
import FeaturedProjectsSection from "@/components/sections/featured";
import TestimonialSection from "@/components/sections/testimonials";
import PricingSection, { Plan } from "@/components/sections/pricing";
import PaymentModal from "@/components/paymentmodal";
import Footer from "@/components/sections/footer";
import FAQ from "@/components/sections/faqs";


export default function Home() {
  const [brief, setBrief] = useState("");
  const [chosenPlan, setChosenPlan] = useState<Plan | null>(null);
  const pricingRef = useRef<HTMLElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Head>
        <title>FixMyPresence – Strategic Design for Impact</title>
        <meta
          name="description"
          content="Web, brand, and material design for consultants and businesses that want to look the part."
        />
        <link rel="canonical" href="https://fixmypresence.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fixmypresence.com" />
        <meta property="og:title" content="FixMyPresence – Strategic Design for Impact" />
        <meta
          property="og:description"
          content="Web, brand, and material design for consultants and businesses that want to look the part."
        />
        <meta
          property="og:image"
          content="https://fixmypresence.com/images/Fixmypresence-OG.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FixMyPresence brand and web design preview" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FixMyPresence – Strategic Design for Impact" />
        <meta
          name="twitter:description"
          content="Web, brand, and material design for consultants and businesses that want to look the part."
        />
        <meta
          name="twitter:image"
          content="https://fixmypresence.com/images/Fixmypresence-OG.jpg"
        />
        <meta name="twitter:image:alt" content="FixMyPresence brand and web design preview" />

        {/* FAQPage Schema for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do you offer refunds if we're not satisfied?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Because every project is custom and involves upfront strategy, we don't offer full refunds once work has begun. However, we structure our process in stages — meaning you see progress early and can give feedback before major milestones. If a project needs to be paused, we only charge for the work completed up to that point."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of businesses do you work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We work with a diverse range of businesses, from startups to established enterprises across various industries including technology, finance, healthcare, and more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you only design websites, or also handle development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide both design and development services. Our team can handle the complete process from initial design concepts to fully functional websites."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design investor decks, reports, and other business documents?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in creating professional business documents including investor decks, annual reports, presentations, and other corporate materials."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you work with our existing branding or do we need a full rebrand?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We can work with your existing brand guidelines and assets, or help you develop a complete rebrand depending on your needs and goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there hidden costs we should expect?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide transparent pricing upfront with detailed project scopes. There are no hidden fees, and any additional work outside the original scope is discussed and approved before proceeding."
                  }
                }
              ]
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Design Services",
              "provider": {
                "@type": "Organization",
                "name": "FixMyPresence",
                "url": "https://fixmypresence.com"
              },
              "areaServed": "Europe",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Design & Development",
                      "description": "Bespoke, high-performance websites for firms where reputation is currency."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brand Identity Design",
                      "description": "Visual systems that signal stability, sophistication, and institutional competence."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Document Design",
                      "description": "Pitch decks, investment memos, white papers, and factsheets designed for investor and board-level audiences."
                    }
                  }
                ]
              }
            }),
          }}
        />
      </Head>

      {/* Global Navigation */}
      <section>
        <NavBar />
      </section>

      {/* Hero / About Section */}
      <section id="about">
        <Hero
          brief={brief}
          onBriefChange={setBrief}
          onGetStarted={() => {
            scrollToPricing();
          }}

        />
      </section>

      {/* Intro */}
      <section>
        <Intro />
      </section>

      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Process */}
      <section id="process">
        <ProcessSection />
      </section>

      {/* Featured Projects */}
      <section id="projects">
        <FeaturedProjectsSection />
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        ref={pricingRef}
      >
        <PricingSection
          onChoosePlan={(plan) => {
            setChosenPlan(plan);
          }}
        />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialSection />
      </section>
      {/* Contact / Footer */}
      <section id="FAQ">
        <FAQ />
      </section>

      {/* Contact / Footer */}
      <section id="contact">
        <Footer />
      </section>


      {/* Payment Modal */}
      {chosenPlan && (
        <PaymentModal
          brief={brief}
          plan={chosenPlan}
          onClose={() => setChosenPlan(null)}
        />
      )}
    </Layout>
  );
}
