// components/sections/Navbar.tsx
import React from "react";
import Image from "next/image";

type NavLink = { label: string; href: string };

interface NavbarProps {
  /** Called when the user clicks “Priority Call”. Defaults to #contact */
  onPriorityCallClick?: () => void;
  /** Optional: override nav links */
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "About", href: "#intro" },
  { label: "Pricing", href: "#pricing" },
  { label: "Projects", href: "#projects" },
  { label: "CSR Commitment", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC<NavbarProps> = ({ onPriorityCallClick, links = DEFAULT_LINKS }) => {
  const handlePriorityCall = () => {
    if (onPriorityCallClick) return onPriorityCallClick();
    if (typeof window !== "undefined") window.location.hash = "contact";
  };

  return (
    <nav className="homepage-nav" aria-label="Primary">
      <div className="homepage-logo">
        {/* SVG logos can stay as <img> since Next/Image does not optimize SVG */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Fixmypresence-logo.svg"
          alt="FixMyPresence Logo"
          className="homepage-logo-img desktop-only"
        />
        {/* PNG logo → use <Image /> */}
        <Image
          src="/images/logomark.png"
          alt="FixMyPresence Icon"
          className="homepage-logo-img mobile-only"
          width={40}
          height={40}
          priority
        />
      </div>

      <div className="homepage-nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="homepage-nav-link">
            {l.label}
          </a>
        ))}
      </div>

      <button className="Nav-button" onClick={handlePriorityCall}>
        {/* SVG icon → keep as <img>, but disable lint on this line */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/premium.svg"
          alt=""
          className="homepage-message-icon"
          width={22}
          height={22}
        />
        <span className="homepage-message-text">Book a priority call</span>
      </button>
    </nav>
  );
};

export default Navbar;
