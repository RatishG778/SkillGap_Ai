import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Target,
  TrendingUp,
} from "lucide-react";

const marketSkills = ["SQL", "Power BI", "Python", "Statistics", "Excel"];

const gapRows = [
  { label: "SQL", student: 76, target: 92, tone: "good" },
  { label: "Python", student: 58, target: 82, tone: "medium" },
  { label: "Power BI", student: 41, target: 80, tone: "gap" },
  { label: "Statistics", student: 32, target: 74, tone: "gap" },
];

const roadmapSteps = [
  { label: "SQL", state: "done" },
  { label: "Power BI", state: "done" },
  { label: "Statistics", state: "live" },
  { label: "Projects", state: "upcoming" },
  { label: "Interview", state: "upcoming" },
];

const evidence = [
  { title: "SQL", items: ["Assessment", "Project", "GitHub", "Interview"], status: [true, true, true, false] },
  { title: "Power BI", items: ["Assessment", "Project", "GitHub", "Interview"], status: [true, true, false, false] },
  { title: "Statistics", items: ["Assessment", "Project", "GitHub", "Interview"], status: [false, true, false, false] },
];

const promptSuggestions = [
  "What should I learn today?",
  "How do I close my Power BI gap?",
  "Build my next-week roadmap",
];

function LandingPage() {
  return (
    <div className="landing-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">S</div>
          <span>SkillGap AI</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#platform">Platform</a>
          <a href="#intelligence">Career Intelligence</a>
          <a href="#roadmap">Roadmap</a>
        </nav>

        <div className="topbar-actions">
          <button type="button" className="button button-ghost">
            Log in
          </button>
          <button type="button" className="button button-primary">
            Analyze my gap
          </button>
        </div>
      </header>

      <main className="landing-page">
        <section className="hero-panel panel" id="platform">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="eyebrow">Career intelligence</span>
            </div>

            <h1>
              Your career has a skill gap.
              <span>Now you can see it.</span>
            </h1>

            <p className="hero-text">
              Understand what your target role requires, what you already know,
              and what to learn next — with a roadmap built around evidence,
              not guesswork.
            </p>

            <div className="hero-actions">
              <button type="button" className="button button-primary button-large">
                Analyze My Skill Gap <ArrowRight size={18} />
              </button>
              <button type="button" className="button button-secondary button-large">
                Explore Careers
              </button>
            </div>

            <div className="trust-row" aria-label="Product trust signals">
              <div>
                <strong>72%</strong>
                <span>Career readiness</span>
              </div>
              <div>
                <strong>18 skills</strong>
                <span>Mapped to target role</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Skill intelligence visual">
            <div className="visual-header">
              <div>
                <span className="mini-label">Current Skills</span>
                <h2>Data Analyst</h2>
              </div>
              <span className="status-chip">Career fit 78%</span>
            </div>

            <div className="skill-map">
              <div className="skill-node node-current">
                <span>SQL</span>
                <strong>Strong</strong>
              </div>
              <div className="junction-line"></div>
              <div className="skill-node node-gap">
                <span>Power BI</span>
                <strong>Gap</strong>
              </div>
              <div className="junction-line"></div>
              <div className="skill-node node-target">
                <span>Target Role</span>
                <strong>Data Analyst</strong>
              </div>
            </div>

            <div className="mini-analytics">
              <div className="metric-row">
                <span>Market skills</span>
                <div className="metric-pills">
                  {marketSkills.map((skill) => (
                    <span key={skill} className="metric-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section" id="intelligence">
          <div className="section-heading">
            <span className="eyebrow">Career intelligence</span>
            <h2>Target role clarity, built into the workflow.</h2>
          </div>

          <div className="intel-grid">
            <article className="panel feature-card large-card">
              <div className="card-kicker">
                <Target size={16} />
                <span>Target role</span>
              </div>
              <h3>Data Analyst</h3>
              <div className="data-stack">
                <div>
                  <label>Market Skills</label>
                  <div className="tag-row">
                    {marketSkills.map((skill) => (
                      <span key={skill} className="soft-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label>Career fit</label>
                  <strong>78%</strong>
                </div>
              </div>
            </article>

            <article className="panel feature-card">
              <div className="card-kicker">
                <TrendingUp size={16} />
                <span>Skill gap</span>
              </div>
              <ul className="gap-list">
                {gapRows.map((item) => (
                  <li key={item.label}>
                    <div className="gap-label-row">
                      <span>{item.label}</span>
                      <strong>{item.student}%</strong>
                    </div>
                    <div className="progress-track">
                      <span
                        className={`progress-fill ${item.tone}`}
                        style={{ width: `${item.student}%` }}
                      ></span>
                    </div>
                    <small>Target {item.target}%</small>
                  </li>
                ))}
              </ul>
            </article>

            <article className="panel feature-card">
              <div className="card-kicker">
                <BrainCircuit size={16} />
                <span>Coaching signal</span>
              </div>
              <h3>Priority insight</h3>
              <p>
                Your largest leverage is in statistics and dashboard storytelling.
                These are the most common blockers for data analyst interviews.
              </p>
              <div className="insight-chip-row">
                <span className="insight-pill">Statistics</span>
                <span className="insight-pill">Power BI</span>
              </div>
            </article>
          </div>
        </section>

        <section className="info-section">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Skill gap</span>
              <h2>Your skill gap, compared clearly.</h2>
            </div>
            <button type="button" className="text-button">
              View detailed analysis <ChevronRight size={16} />
            </button>
          </div>

          <div className="comparison-panel panel">
            <div className="compare-header">
              <div>
                <span>Student</span>
                <strong>Current level</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>Target level</strong>
              </div>
            </div>

            {gapRows.map((row) => (
              <div key={row.label} className="compare-row">
                <div className="compare-skill">
                  <span className="skill-dot"></span>
                  {row.label}
                </div>
                <div className="compare-bars">
                  <div className="compare-bar student-bar" style={{ width: `${row.student}%` }}></div>
                </div>
                <div className="compare-bars target-bar-wrap">
                  <div className="compare-bar target-bar" style={{ width: `${row.target}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section" id="roadmap">
          <div className="section-heading">
            <span className="eyebrow">Roadmap</span>
            <h2>A personalized path that feels actionable.</h2>
          </div>

          <div className="roadmap-panel panel">
            <div className="roadmap-steps" aria-label="Career roadmap timeline">
              {roadmapSteps.map((step, index) => (
                <div key={step.label} className={`roadmap-step ${step.state}`}>
                  <div className="step-node"></div>
                  {index < roadmapSteps.length - 1 && <div className="step-line"></div>}
                  <div className="step-body">
                    <span>{step.label}</span>
                    <small>
                      {step.state === "done" && "Complete"}
                      {step.state === "live" && "Current"}
                      {step.state === "upcoming" && "Next"}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="info-section evidence-section">
          <div className="section-heading">
            <span className="eyebrow">Evidence</span>
            <h2>Skills are tracked from real proof, not self-reporting.</h2>
          </div>

          <div className="evidence-grid">
            {evidence.map((item) => (
              <article key={item.title} className="panel evidence-card">
                <div className="evidence-header">
                  <h3>{item.title}</h3>
                  <span className="tag state-good">Verified</span>
                </div>
                <ul className="proof-list">
                  {item.items.map((proof, idx) => (
                    <li key={proof} className={item.status[idx] ? "proof-ok" : "proof-faint"}>
                      {item.status[idx] ? <Check size={14} /> : <span className="proof-dot"></span>}
                      <span>{proof}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="info-section split-layout">
          <article className="panel job-panel">
            <div className="section-heading compact">
              <span className="eyebrow">Job analyzer</span>
              <h2>From job description to required skills.</h2>
            </div>

            <div className="job-box">
              <p>
                We are looking for a data analyst who can build dashboards, work in SQL,
                analyze customer behavior, and communicate insights clearly.
              </p>
            </div>

            <div className="extract-row">
              <div>
                <label>Required</label>
                <div className="tag-row">
                  <span className="soft-tag success">SQL</span>
                  <span className="soft-tag success">Excel</span>
                  <span className="soft-tag success">Power BI</span>
                </div>
              </div>
              <div>
                <label>Gap</label>
                <div className="tag-row">
                  <span className="soft-tag warn">Statistics</span>
                  <span className="soft-tag warn">EDA</span>
                </div>
              </div>
            </div>
          </article>

          <article className="panel copilot-panel">
            <div className="section-heading compact">
              <span className="eyebrow">Career copilot</span>
              <h2>Context-aware coaching.</h2>
            </div>

            <div className="copilot-context">
              <div className="mini-bubble">
                <span className="label">Current focus</span>
                <strong>Data Analyst</strong>
              </div>
              <div className="mini-bubble">
                <span className="label">Biggest gap</span>
                <strong>Power BI</strong>
              </div>
            </div>

            <div className="copilot-input">
              <span className="dot"></span>
              <div>
                <span className="tiny-label">Ask me anything</span>
                <p>“What should I learn today?”</p>
              </div>
            </div>

            <div className="prompt-list">
              {promptSuggestions.map((prompt) => (
                <button key={prompt} type="button" className="prompt-button">
                  {prompt}
                </button>
              ))}
            </div>
          </article>
        </section>

        <section className="info-section college-section">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">College intelligence</span>
              <h2>Placement teams can see the signal sooner.</h2>
            </div>
            <span className="status-chip neutral">Demo data</span>
          </div>

          <div className="panel college-panel">
            <div className="college-metrics">
              <div>
                <span>Students at target</span>
                <strong>41%</strong>
              </div>
              <div>
                <span>Most common gap</span>
                <strong>Statistics</strong>
              </div>
              <div>
                <span>Interview readiness</span>
                <strong>67%</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section panel">
          <div>
            <span className="eyebrow">Stop guessing</span>
            <h2>Build a roadmap around the work that actually matters.</h2>
          </div>
          <button type="button" className="button button-primary button-large">
            Start analysis <ArrowRight size={18} />
          </button>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
