import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  Bot,
  CheckCircle,
  Code2,
  Cpu,
  Network,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

const featuredProducts = [
  {
    id: "kill-switch",
    number: "01",
    label: "WINDOWS PRODUCTIVITY",
    title: "AI Kill Switch",
    subtitle: "Take control of your focus.",
    description:
      "A local Windows productivity tool that detects selected AI applications and browser tabs and closes matching distractions while focus mode is active.",
    features: [
      "Windows desktop application",
      "AI application detection",
      "Browser tab detection",
      "Local focus mode",
    ],
    icon: Shield,
    type: "kill-switch",
  },

  {
    id: "ai-recruiter",
    number: "02",
    label: "AI RECRUITMENT",
    title: "AI Recruiter",
    subtitle: "Find the right people faster.",
    description:
      "An AI-powered recruitment platform designed to help teams analyse candidate profiles, compare requirements and simplify the hiring workflow.",
    features: [
      "Candidate profile analysis",
      "Job requirement matching",
      "AI-assisted screening",
      "Recruitment workflow",
    ],
    icon: Bot,
    type: "recruiter",
  },

  {
    id: "energy-dashboard",
    number: "03",
    label: "ENERGY INTELLIGENCE",
    title: "Personal Energy Dashboard",
    subtitle: "Understand where your energy goes.",
    description:
      "A personal energy dashboard for visualising consumption, identifying patterns and making everyday energy usage easier to understand.",
    features: [
      "Energy consumption tracking",
      "Usage visualisation",
      "Trend analysis",
      "Personal insights",
    ],
    icon: Zap,
    type: "energy",
  },

  {
    id: "ai-tools",
    number: "04",
    label: "AI SOFTWARE",
    title: "AI Tools",
    subtitle: "Small tools. Real problems.",
    description:
      "A growing collection of practical AI utilities for developers, businesses and technical teams.",
    features: [
      "Document analysis",
      "Developer utilities",
      "Support automation",
      "Business AI workflows",
    ],
    icon: Cpu,
    type: "tools",
  },
];

function KillSwitchPreview() {
  const apps = [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Copilot",
    "Perplexity",
  ];

  return (
    <div className="product-screen">

      <div className="screen-header">

        <div className="screen-dots">
          <span />
          <span />
          <span />
        </div>

        <strong>AI Kill Switch</strong>

        <div className="screen-active">
          <i />
          ACTIVE
        </div>

      </div>

      <div className="screen-body">

        <div className="switch-card">

          <div>
            <small>FOCUS MODE</small>
            <strong>ON</strong>
          </div>

          <div className="big-toggle">
            <span />
          </div>

        </div>

        <div className="screen-caption">
          BLOCKED APPLICATIONS
        </div>

        {apps.map((app) => (
          <div className="app-row" key={app}>
            <span>{app}</span>
            <small>BLOCKED</small>
          </div>
        ))}

        <div className="console">

          <div>
            <span>12:42:08</span>
            Closed tab: ChatGPT
          </div>

          <div>
            <span>12:42:10</span>
            Closed tab: Claude
          </div>

          <div>
            <span>12:42:12</span>
            Focus mode active
          </div>

        </div>

      </div>

    </div>
  );
}


function RecruiterPreview() {
  return (
    <div className="product-screen">

      <div className="screen-header">

        <div className="screen-dots">
          <span />
          <span />
          <span />
        </div>

        <strong>AI Recruiter</strong>

        <div className="screen-active">
          <i />
          AI ACTIVE
        </div>

      </div>

      <div className="screen-body">

        <div className="candidate-score">

          <div>
            <small>MATCH SCORE</small>
            <strong>94%</strong>
          </div>

          <div className="score-ring">
            94
          </div>

        </div>

        <div className="screen-caption">
          CANDIDATE ANALYSIS
        </div>

        <div className="candidate-row">
          <span>Technical Skills</span>
          <strong>98%</strong>
        </div>

        <div className="candidate-row">
          <span>Experience</span>
          <strong>92%</strong>
        </div>

        <div className="candidate-row">
          <span>Role Fit</span>
          <strong>95%</strong>
        </div>

        <div className="ai-insight">

          <Sparkles size={17} />

          <div>

            <strong>AI Insight</strong>

            <p>
              Strong match for the selected role
              based on skills and experience.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}


function EnergyPreview() {
  return (
    <div className="product-screen">

      <div className="screen-header">

        <div className="screen-dots">
          <span />
          <span />
          <span />
        </div>

        <strong>Personal Energy</strong>

        <div className="screen-active">
          <i />
          LIVE
        </div>

      </div>

      <div className="screen-body">

        <div className="energy-summary">

          <small>TODAY'S CONSUMPTION</small>

          <strong>
            11.8 kWh
          </strong>

          <span>
            −8.4% vs yesterday
          </span>

        </div>

        <div className="energy-bars">

          <span style={{ height: "35%" }} />
          <span style={{ height: "50%" }} />
          <span style={{ height: "42%" }} />
          <span style={{ height: "68%" }} />
          <span style={{ height: "58%" }} />
          <span style={{ height: "82%" }} />
          <span style={{ height: "64%" }} />
          <span style={{ height: "45%" }} />
          <span style={{ height: "70%" }} />
          <span style={{ height: "52%" }} />
          <span style={{ height: "38%" }} />
          <span style={{ height: "30%" }} />

        </div>

        <div className="energy-insights">

          <div>
            <Zap size={17} />

            <span>
              Peak usage
              <strong>18:00</strong>
            </span>
          </div>

          <div>
            <CheckCircle size={17} />

            <span>
              Weekly trend
              <strong>Improving</strong>
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}


function ToolsPreview() {
  return (
    <div className="tools-visual">

      <div className="tool-orbit orbit-a" />
      <div className="tool-orbit orbit-b" />
      <div className="tool-orbit orbit-c" />

      <div className="tool-core">
        <Sparkles size={34} />
      </div>

      <div className="tool-node tool-one">
        <Bot size={20} />
      </div>

      <div className="tool-node tool-two">
        <Code2 size={20} />
      </div>

      <div className="tool-node tool-three">
        <Network size={20} />
      </div>

    </div>
  );
}


export default function FeaturedProducts() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);

  const product = featuredProducts[activeProduct];
  const Icon = product.icon;

  const goToProduct = (index, dir = "next") => {
    setDirection(dir);
    setActiveProduct(index);
  };

  const nextProduct = () => {
    goToProduct(
      (activeProduct + 1) % featuredProducts.length,
      "next"
    );
  };

  const previousProduct = () => {
    goToProduct(
      (activeProduct - 1 + featuredProducts.length) %
        featuredProducts.length,
      "previous"
    );
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveProduct((current) => {
        setDirection("next");

        return (
          (current + 1) %
          featuredProducts.length
        );
      });
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section
      className="featured-section"
      id="featured"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="featured-background" />

      <div className="container">

        {/* HEADING */}

        <div className="featured-heading">

          <div>

            <div className="section-tag light-tag">
              <Sparkles size={14} />
              FEATURED PRODUCTS
            </div>

            <h2>
              AI products
              <br />
              built to be useful.
            </h2>

          </div>

          <p>
            Explore AISoluSoft products built around
            real-world productivity, recruitment,
            software and energy problems.
          </p>

        </div>


        {/* CAROUSEL */}

        <div className="featured-carousel">

          <div
            key={product.id}
            className={`featured-main ${
              direction === "next"
                ? "slide-next"
                : "slide-previous"
            }`}
          >

            {/* LEFT */}

            <div className="featured-copy">

              <div className="product-number">
                {product.number} / 0
                {featuredProducts.length}
              </div>

              <div className="featured-label">
                {product.label}
              </div>

              <div className="featured-icon">
                <Icon size={26} />
              </div>

              <h3>
                {product.title}
              </h3>

              <h4>
                {product.subtitle}
              </h4>

              <p>
                {product.description}
              </p>


              <div className="featured-features">

                {product.features.map((feature) => (
                  <div key={feature}>
                    <CheckCircle size={15} />
                    {feature}
                  </div>
                ))}

              </div>


              {/* CONTROLS */}

              <div className="featured-controls">

                <button
                  type="button"
                  onClick={previousProduct}
                  aria-label="Previous product"
                >
                  ←
                </button>


                <div className="featured-dots">

                  {featuredProducts.map(
                    (item, index) => (
                      <button
                        type="button"
                        key={item.id}
                        className={
                          index === activeProduct
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          goToProduct(
                            index,
                            index > activeProduct
                              ? "next"
                              : "previous"
                          )
                        }
                        aria-label={`Show ${item.title}`}
                      />
                    )
                  )}

                </div>


                <button
                  type="button"
                  onClick={nextProduct}
                  aria-label="Next product"
                >
                  →
                </button>

              </div>


              {/* PROGRESS */}

              <div className="featured-progress">
                <div
                  key={`${product.id}-progress`}
                  className="featured-progress-bar"
                />
              </div>

            </div>


            {/* RIGHT */}

            <div className="featured-preview">

              {product.type === "kill-switch" && (
                <KillSwitchPreview />
              )}

              {product.type === "recruiter" && (
                <RecruiterPreview />
              )}

              {product.type === "energy" && (
                <EnergyPreview />
              )}

              {product.type === "tools" && (
                <ToolsPreview />
              )}

            </div>

          </div>


          {/* PRODUCT NAV */}

          <div className="featured-product-nav">

            {featuredProducts.map(
              (item, index) => {

                const ItemIcon = item.icon;

                return (
                  <button
                    type="button"
                    key={item.id}
                    className={
                      index === activeProduct
                        ? "product-nav-item active"
                        : "product-nav-item"
                    }
                    onClick={() =>
                      goToProduct(
                        index,
                        index > activeProduct
                          ? "next"
                          : "previous"
                      )
                    }
                  >

                    <ItemIcon size={17} />

                    <span>
                      <small>
                        {item.number}
                      </small>

                      {item.title}
                    </span>

                  </button>
                );
              }
            )}

          </div>

        </div>

      </div>
    </section>
  );
}