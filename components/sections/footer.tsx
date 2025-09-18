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
            <div className="footer-border-gradient"></div>

            <div className="footer-content">

                {/* Left side */}
                <div className="footer-left">

                    <div className="fmp-holder1">
                        <div className="footer-logo">
                            <img src="/images/Fixmypresence-logo.svg" alt="fixmypresence logo" />
                        </div>
                        <p className="tagline">
                            we design your first impression—website, brand
                            identity, and everything in between.
                        </p>
                    </div>


                    <div className="socials">
                        <h4>Socials:</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <FaLinkedin className="social-icon" /> */}
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/yourhandle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <FaTwitter className="social-icon" /> */}
                                    X/Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <FaInstagram className="social-icon" /> */}
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://behance.net/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <FaBehance className="social-icon" /> */}
                                    Behance
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">© 2025 fixmypresence</p>
                <a href="/privacy" className="footer-privacy">Legal</a>
                <a href="/privacy" className="footer-privacy">privacy policy</a>
            </div>

            {/* Line Illustration */}
            <div className="footer-illustration">

                <img src="/images/footer-ill_.png" alt="" />
                {/* <Image 
                        src="/images/footer-ill.png" 
                        alt="Footer line illustration"
                        width={1920}
                        height={100}
                        className="footer-lines-image"
                    /> */}
            </div>
        </footer>
    )
}
