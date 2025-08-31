// components/sections/Navbar.tsx
import React from "react";

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
        <img
          src="/images/Fixmypresence-logo.svg"
          alt="FixMyPresence Logo"
          className="homepage-logo-img desktop-only"
        />
        <img
          src="/images/logomark.png"
          alt="FixMyPresence Icon"
          className="homepage-logo-img mobile-only"
        />
      </div>

      <div className="homepage-nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="homepage-nav-link">
            {l.label}
          </a>
        ))}
      </div>

      <button
        className="Nav-button"
        onClick={handlePriorityCall}
      >
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
