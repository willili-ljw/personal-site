import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">William Li</span>
        </h1>

        <p className="hero-tagline">
          Data Science & Astrophysics major at UC Berkeley. Building data-driven
          models in astronomy and machine learning for real-world science.
          <br />
          Experience with PyTorch, astrophysical data pipelines, and research
          publications.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">UC Berkeley</span>
          <span className="hero-chip">Data Science</span>
          <span className="hero-chip">Astrophysics</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
