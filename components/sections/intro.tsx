// components/Intro.tsx
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';



const YOUTUBE_ID = 'r-iETptU7JY';
const YOUTUBE_THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;

const Intro = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.8;
      const endPoint = -rect.height * 0.2;

      if (rect.top <= startPoint && rect.top >= endPoint) {
        const prog = (startPoint - rect.top) / (startPoint - endPoint);
        setScrollProgress(Math.min(Math.max(prog, 0), 1));
      } else if (rect.top < endPoint) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="intro-section">
      <div className="intro-content-wrapper">
        {/* Text & Section Title */}
        <div className="intro-text-section">
          <div className="section-title section-title01">
            <span className="section-bullet">•</span>
            <span className="section-text">About FixMyPresence</span>
          </div>
          <div className="intro-headline">
            <h1 className="intro-main-title">
              <span className="animated-text-container">
                {[
                  'FixMyPresence', 'is', 'a', 'strategic', 'design', 'partner',
                  'for', 'brands', 'that', 'have', 'outgrown', 'their', 'old',
                  'websites', '—', 'or', 'need', 'a', 'presence', 'built', 'for',
                  "today’s", 'standard.'
                ].map((word, i) => {
                  const total = 40;
                  const prog = Math.max(0, Math.min(1, scrollProgress * total - i));
                  return (
                    <span
                      key={i}
                      className="animated-word"
                      style={{
                        '--word-progress': prog,
                        '--target-color': '#073E4E'
                      } as React.CSSProperties}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
              <br />
              <span className="animated-text-container subtitle-paragraph">
                {[
                  'We', 'create', 'clean,', 'structured,', 'and', 'up-to-date',
                  'websites,', 'brand', 'identities,', 'and', 'business',
                  'documents', 'that', 'communicate', 'effectively.'
                ].map((word, i) => {
                  const total = 40;
                  const prog = Math.max(0, Math.min(1, scrollProgress * total - (i + 23)));
                  return (
                    <span
                      key={`sub-${i}`}
                      className="animated-word subtitle-word"
                      style={{
                        '--word-progress': prog,
                        '--target-color': '#073E4E'
                      } as React.CSSProperties}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="intro-bottom-section">
          <div className="achievements-section">
            <div className="achievement-item">
              <div className="achievement-number">3x</div>
              <div className="achievement-description">Behance UI/UX (worldwide)</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">97%</div>
              <div className="achievement-description">Client satisfaction rate in 5 yrs</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">40+</div>
              <div className="achievement-description">Projects completed across industries</div>
            </div>
            <button className="get-started-button">
              <span>Get started</span>
              <div className="button-arrow" style={{ transform: 'rotate(45deg)' }}>
                <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* YouTube Video */}
          {/* YouTube Video */}
          <div className="video-section">
            <div className="video-container">
              {isVideoPlaying ? (
                <iframe
                  className="intro-video"
                  src={YOUTUBE_EMBED}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Intro Video"
                />
              ) : (
                <div
                  className="video-overlay"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* blurred thumbnail */}
                  <Image
                    className="video-thumb"
                    src={YOUTUBE_THUMB}
                    alt="Video thumbnail"
                    fill
                    sizes="100vw"
                    priority
                  />

                  {/* play button + info on top */}
                  <div className="play-pill">
                    <div className="pill-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 5l8 5-8 5V5z" />
                      </svg>
                    </div>
                    <div className="pill-text">
                      <strong>Watch intro video</strong>
                      <span>5 mins · Play video</span>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
