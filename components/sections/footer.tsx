// components/Footer.tsx
import React from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaBehance,
} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/* Left side */}
                <div className="footer-left">
                    <div className="footer-logo">
                        {/* SVG logo can remain an <img> */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/Fixmypresence-logo.svg" alt="fixmypresence logo" />
                    </div>
                    <p className="tagline">
                        we design your first impression—website, brand
                        identity, and everything in between.
                    </p>

                    <div className="socials">
                        <h4>Socials:</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="social-icon" />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/yourhandle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter className="social-icon" />
                                    X/Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="social-icon" />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://behance.net/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaBehance className="social-icon" />
                                    Behance
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right side: call card */}
                <div className="footer-right">
                    <div className="call-card">
                        <div className="call-top">
                            <Image
                                src="/images/Paul-lamain.png"
                                alt="Tony"
                                className="avatar"
                                width={64}
                                height={64}
                            />

                            <h3 className="call-title">Book an intro call</h3>
                            <p className="call-text">
                                Time to get introduced and explore how fixmypresence can help.
                            </p>

                            <button
                                className="homepage-button homepage-button-secondary"
                                id="call-button"
                            >
                                <span>
                                    <div className="homepage-arrow-wrapper">
                                        <div className="homepage-arrow">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src="/icons/call.svg"
                                                alt="Call Icon"
                                                width="17"
                                                height="17"
                                            />
                                        </div>
                                    </div>
                                    Book a call
                                </span>
                            </button>
                        </div>

                        <div className="call-email">
                            <Mail size={20} className="call-email-icon" />
                            <div className="call-email-text">
                                <p>Do you prefer email communication?</p>
                                <p>
                                    Have it:{' '}
                                    <a href="mailto:tony@fixmypresence.com">
                                        tony@fixmypresence.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">© 2025 fixmypresence</p>
                <a href="/privacy" className="footer-privacy">privacy policy</a>
            </div>
        </footer>
    )
}
