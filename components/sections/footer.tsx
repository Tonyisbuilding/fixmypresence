// components/Footer.tsx
import React from 'react'
import Image from 'next/image'



export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-border-gradient"></div>

            <div className="footer-content">

                {/* Left side */}
                <div className="footer-left">

                    <div className="fmp-holder1">
                        <div className="footer-logo">
                            <Image
                                src="/images/Fixmypresence-logo.svg"
                                alt="FixMyPresence logo"
                                width={360}
                                height={120}
                                style={{ width: '100%', height: 'auto' }}
                                priority
                            />
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
                                    href="https://www.linkedin.com/company/fixmypresence/about/?viewAsMember=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <FaLinkedin className="social-icon" /> */}
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/FixMyPresence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <FaTwitter className="social-icon" /> */}
                                    X/Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/tonyisbuilding?igsh=MTRwOHA2ZGV0cm91Mg%3D%3D&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <FaInstagram className="social-icon" /> */}
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.behance.net/fixmypresencehq"
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
                <a
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:fbcfc0db-3b41-4159-9e41-9aa665880678"
                    className="footer-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Legal
                </a>
                <a
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:d869603d-2ae2-43eb-bedd-ac6be358a85a"
                    className="footer-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Privacy Policy
                </a>
            </div>

            {/* Line Illustration */}
            <div className="footer-illustration">

                <Image
                    src="/images/Footer-ill_.png"
                    alt="Footer decorative line illustration"
                    width={5452}
                    height={449}
                    style={{ width: '100%', height: 'auto' }}
                />
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
