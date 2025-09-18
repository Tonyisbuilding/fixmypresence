// components/sections/Navbar.tsx
import React from "react";
import Image from "next/image";

type NavLink = { label: string; href: string };

interface NavbarProps {
  onPriorityCallClick?: () => void;
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "About", href: "#intro" },
  { label: "Pricing", href: "#pricing" },
  { label: "Projects", href: "#projects" },
  { label: "CSR Commitment", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const PRIORITY_CALL_URL = "https://calendly.com/thisboyisbuilding/introductory-call";

const Navbar: React.FC<NavbarProps> = ({ onPriorityCallClick, links = DEFAULT_LINKS }) => {
  const handlePriorityCall = () => {
    if (onPriorityCallClick) return onPriorityCallClick();
    if (typeof window !== "undefined") {
      window.open(PRIORITY_CALL_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <nav className="homepage-nav" aria-label="Primary">
      {/* logo (left) */}
      <a href="/" className="homepage-logo" aria-label="FixMyPresence Home">
        {/* Keep svg as <img> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Fixmypresence-logo.svg"
          alt="FixMyPresence Logo"
          className="homepage-logo-img desktop-only"
        />
        {/* Mobile PNG via next/image */}
        <Image
          src="/images/Logomark.png"
          alt="FixMyPresence Icon"
          className="homepage-logo-img mobile-only"
          width={36}
          height={36}
          priority
        />
      </a>

      {/* centered links */}
      <div className="homepage-nav-links" role="navigation">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="homepage-nav-link">
            {l.label}
          </a>
        ))}
      </div>

     {/* CTA row (right) */}
<div className="Nav-ctaRow">
  <button className="Nav-button" onClick={handlePriorityCall} type="button">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/icons/premium.svg"
      alt=""
      className="homepage-message-icon"
      width={20}
      height={20}
    />
    <span className="homepage-message-text">Book a priority call</span>
  </button>

  {/* WhatsApp quick chat */}
<a
  className="Nav-whatsapp"
  href="https://wa.me/2349029664360?text=Hi%20FixMyPresence%20—%20I’d%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  title="Chat on WhatsApp"
>
  <img src="/icons/whatsapp.svg" alt="WhatsApp" width={40} height={40} />
  <sup className="whatsapp-tag">fastest</sup>
</a>

</div>

    </nav>
  );
};

export default Navbar;
