import { useState } from "react";

import {
  ArrowRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

import "./App.css";
import FeaturedProducts from "./components/FeaturedProducts";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="navbar">

        <div className="container nav-container">

          {/* BRAND */}

          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="AISoluSoft home"
          >

            <div className="brand-mark">
              <span>A</span>
              <i />
            </div>

            <span className="brand-name">
              AI<span>Solu</span>Soft
            </span>

          </button>


          {/* DESKTOP NAVIGATION */}

          <nav
            className={
              menuOpen
                ? "nav-links mobile-open"
                : "nav-links"
            }
          >

            <button
              onClick={() => scrollTo("featured")}
            >
              Products
            </button>

            <button
              onClick={() => scrollTo("consulting")}
            >
              Consulting
            </button>

            <button
              onClick={() => scrollTo("review")}
            >
              Architecture
            </button>

            <button
              onClick={() => scrollTo("contact")}
            >
              Contact
            </button>

          </nav>


          {/* NAV ACTIONS */}

          <div className="nav-actions">

            <button
              className="nav-review"
              onClick={() => scrollTo("review")}
            >
              Free Review
              <ArrowRight size={15} />
            </button>


            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={menuOpen}
            >

              {menuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}

            </button>

          </div>

        </div>

      </header>


      {/* =========================================================
          MAIN
      ========================================================= */}

      <main>

        {/* =======================================================
            HERO
        ======================================================= */}

        <section
          className="hero"
          id="home"
        >

          <div className="hero-grid" />

          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />


          <div className="container hero-content">

            {/* LEFT */}

            <div className="hero-copy">

              <div className="hero-kicker">

                <span className="pulse-dot" />

                AI • SOFTWARE • ARCHITECTURE

              </div>


              <h1>
                Build software
                <br />
                <span>
                  that thinks bigger.
                </span>
              </h1>


              <p className="hero-description">

                AISoluSoft builds practical AI solutions,
                modern software architectures and developer
                tools for the next generation of digital products.

              </p>


              <div className="hero-buttons">

                <button
                  className="button button-primary"
                  onClick={() => scrollTo("featured")}
                >
                  Explore Products
                  <ArrowRight size={18} />
                </button>


                <button
                  className="button button-secondary"
                  onClick={() => scrollTo("review")}
                >
                  Free Architecture Review
                </button>

              </div>


              <div className="hero-trust">

                <div>
                  <CheckCircle size={16} />
                  <span>.NET & Azure</span>
                </div>

                <div>
                  <CheckCircle size={16} />
                  <span>AI Engineering</span>
                </div>

                <div>
                  <CheckCircle size={16} />
                  <span>Cloud Architecture</span>
                </div>

              </div>

            </div>


            {/* AI VISUAL */}

            <div className="ai-visual">

              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-orbit orbit-three" />


              <div className="connection connection-one" />
              <div className="connection connection-two" />
              <div className="connection connection-three" />
              <div className="connection connection-four" />


              <div className="ai-node node-main">
                <span className="ai-core-letter">
                  AI
                </span>
              </div>


              <div className="ai-node node-one">
                <span>01</span>
              </div>

              <div className="ai-node node-two">
                <span>API</span>
              </div>

              <div className="ai-node node-three">
                <span>☁</span>
              </div>

              <div className="ai-node node-four">
                <span>AI</span>
              </div>


              <div className="visual-label label-top">
                AI ENGINE
              </div>

              <div className="visual-label label-bottom">
                ARCHITECTURE / CODE / CLOUD
              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            TECHNOLOGY STRIP
        ======================================================= */}

        <section className="stats-section">

          <div className="container stats-grid">

            <div className="stat">
              <strong>AI</strong>
              <span>Engineering</span>
            </div>

            <div className="stat">
              <strong>.NET</strong>
              <span>Enterprise Software</span>
            </div>

            <div className="stat">
              <strong>Azure</strong>
              <span>Cloud Architecture</span>
            </div>

            <div className="stat">
              <strong>∞</strong>
              <span>Ideas → Solutions</span>
            </div>

          </div>

        </section>


        {/* =======================================================
            FEATURED PRODUCTS
        ======================================================= */}

        <FeaturedProducts />


        {/* =======================================================
            CONSULTING
        ======================================================= */}

        <section
          className="section consulting-section"
          id="consulting"
        >

          <div className="container">

            <div className="section-tag">
              CONSULTING
            </div>


            <h2 className="large-heading ">
              Engineering clarity
              <br />
              before engineering code.
            </h2>


            <p className="section-lead">

              Practical technology consulting for companies
              that want to use AI, cloud and modern software
              architecture without adding unnecessary complexity.

            </p>


            <div className="services-grid">

              {/* SERVICE 1 */}

              <div className="service-card">

                <span>Consulting</span>

                <div className="service-icon">
                  AI
                </div>

                <h3>
                  AI & Technology Consulting
                </h3>

                <p>
                  Turn an AI idea into a practical architecture,
                  implementation plan and technical roadmap.
                </p>

              </div>


              {/* SERVICE 2 */}

              <div className="service-card">

                <span>Architecture</span>

                <div className="service-icon">
                  .NET
                </div>

                <h3>
                  .NET & Azure Architecture
                </h3>

                <p>
                  Review APIs, cloud infrastructure, microservices,
                  security and deployment architecture.
                </p>

              </div>


              {/* SERVICE 3 */}

              <div className="service-card">

                <span>Review</span>

                <div className="service-icon">
                  API
                </div>

                <h3>
                  Architecture Review
                </h3>

                <p>
                  Identify scalability, reliability and maintainability
                  improvements before they become expensive problems.
                </p>

              </div>


              {/* SERVICE 4 */}

              <div className="service-card">

                <span>Solution</span>

                <div className="service-icon">
                  CODE
                </div>

                <h3>
                  Code & Solution Review
                </h3>

                <p>
                  Independent technical feedback for important systems,
                  implementation decisions and software designs.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            FREE ARCHITECTURE REVIEW
        ======================================================= */}

        <section
          className="review-section"
          id="review"
        >

          <div className="container review-card">

            <div className="review-copy">

              <div className="section-tag">
                FREE ARCHITECTURE REVIEW
              </div>


              <h2>
                Bring us the
                <br />
                difficult problem.
              </h2>


              <p>

                Tell us briefly about your architecture,
                software challenge or AI idea. We will review
                it and provide practical technical feedback.

              </p>


              <div className="review-points">

                <div>
                  <CheckCircle size={17} />
                  <span>
                    Architecture feedback
                  </span>
                </div>

                <div>
                  <CheckCircle size={17} />
                  <span>
                    AI integration ideas
                  </span>
                </div>

                <div>
                  <CheckCircle size={17} />
                  <span>
                    Cloud & .NET guidance
                  </span>
                </div>

              </div>

            </div>


            {/* FORM */}

            <form
              className="review-form"
              onSubmit={(event) => {

                event.preventDefault();

                alert(
                  "Thank you! The form is ready to be connected to your email/backend."
                );

              }}
            >

              <label>
                Your name

                <input
                  required
                  type="text"
                  name="name"
                  placeholder="John Smith"
                />
              </label>


              <label>
                Email address

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </label>


              <label>
                Your challenge

                <textarea
                  required
                  name="message"
                  placeholder="Describe your architecture, software problem or AI idea..."
                />
              </label>


              <button
                type="submit"
                className="button button-primary"
              >

                Request Free Review

                <ArrowRight size={18} />

              </button>

            </form>

          </div>

        </section>


        {/* =======================================================
            CONTACT
        ======================================================= */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="container contact-card">

            <div>

              <div className="section-tag">
                LET'S TALK
              </div>


              <h2>
                Have an idea?
                <br />
                Let's build it.
              </h2>


              <p>
                AI, software architecture, .NET, Azure
                or something completely new.
              </p>

            </div>


            <a
              className="contact-button"
              href="mailto:info@aisolusoft.com"
            >

              Contact AISoluSoft

              <ArrowRight size={18} />

            </a>

          </div>

        </section>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer>

        <div className="container footer">

          <div className="footer-brand">

            <div className="brand-mark small">
              <span>A</span>
              <i />
            </div>


            <div>

              <strong>
                AISoluSoft
              </strong>

              <span>
                AI • Software • Architecture
              </span>

            </div>

          </div>


          <div className="footer-links">

            <button
              onClick={() => scrollTo("home")}
            >
              Home
            </button>

            <button
              onClick={() => scrollTo("featured")}
            >
              Products
            </button>

            <button
              onClick={() => scrollTo("consulting")}
            >
              Consulting
            </button>

            <button
              onClick={() => scrollTo("review")}
            >
              Review
            </button>

          </div>


          <div className="footer-right">

            © {new Date().getFullYear()} AISoluSoft

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;