// components/sections/Navbar.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = { label: string; href: string };

interface NavbarProps {
  onPriorityCallClick?: () => void;
  links?: NavLink[];
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "About", href: "#intro" },
  { label: "Pricing", href: "#pricing" },
  { label: "Projects", href: "#projects" },
  { label: "CSR Commitment", href: "/csr" },
  { label: "Contact", href: "#contact" },
];

const PRIORITY_CALL_URL = "https://calendly.com/thisboyisbuilding/introductory-call";

const Navbar: React.FC<NavbarProps> = ({ onPriorityCallClick, links = DEFAULT_LINKS }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(open => !open);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handlePriorityCall = () => {
    if (onPriorityCallClick) {
      onPriorityCallClick();
      return;
    }
    if (typeof window !== "undefined") {
      window.open(PRIORITY_CALL_URL, "_blank", "noopener,noreferrer");
    }
  };

  const handlePriorityCallAndClose = () => {
    closeMenu();
    handlePriorityCall();
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="homepage-nav" aria-label="Primary">
        <div className="nav-left">
          {/* logo (left) */}
          <Link href="/" className="homepage-logo" aria-label="FixMyPresence Home">
            <Image
              src="/images/FMP logo.png"
              alt="FixMyPresence Logo"
              className="homepage-logo-img desktop-only"
              width={360}
              height={120}
              priority
            />
            <Image
              src="/images/Logomark.png"
              alt="FixMyPresence Icon"
              className="homepage-logo-img mobile-only"
              width={36}
              height={36}
              priority
            />
          </Link>
        </div>

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
            <Image
              src="/icons/Premium.svg"
              alt="Premium icon"
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
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={40} height={40} />
            <sup className="whatsapp-tag">fastest</sup>
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-backdrop${isMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
      />

      <div
        id="mobile-navigation"
        className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-menu-links">
          {links.map((l) => (
            <a
              key={`mobile-${l.href}`}
              href={l.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="mobile-priority-btn"
          onClick={handlePriorityCallAndClose}
        >
          Book a priority call
        </button>
      </div>
    </>
  );
};

export default Navbar;
