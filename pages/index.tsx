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
