import { ArrowRight, CheckCircle2, FolderKanban, Sparkles } from "lucide-react";

const projectCards = [
  {
    title: "Revenue Recovery Dashboard",
    status: "In review",
    progress: 78,
    summary: "Analyze churn and retention for a SaaS product team using SQL and dashboard storytelling.",
    outcome: "3 insights delivered",
    effort: "2 weeks",
  },
  {
    title: "Customer Segmentation Story",
    status: "Ready to submit",
    progress: 92,
    summary: "Build a narrative around conversion patterns, acquisition quality, and segment performance.",
    outcome: "Portfolio-ready",
    effort: "1 week",
  },
  {
    title: "Marketing Funnel Diagnostic",
    status: "Needs feedback",
    progress: 64,
    summary: "Connect acquisition and retention signals into a KPI narrative for stakeholder decision-making.",
    outcome: "Needs editorial review",
    effort: "6 days",
  },
];

const skillSignals = [
  { label: "SQL analysis", value: "88%" },
  { label: "Dashboard storytelling", value: "82%" },
  { label: "Business framing", value: "76%" },
];

function Projects() {
  return (
    <div className="project-shell">
      <header className="project-header panel">
        <div>
          <span className="eyebrow">Projects</span>
          <h1>Portfolio momentum</h1>
        </div>

        <button type="button" className="button button-primary">
          New project <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Active</span>
          <strong>3</strong>
          <small>In-flight portfolio work</small>
        </article>

        <article className="summary-box panel">
          <span>Completion</span>
          <strong>81%</strong>
          <small>Average project readiness</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Strength</span>
          <strong>SQL + BI</strong>
          <small>Highest signal in role match</small>
        </article>
      </section>

      <main className="project-main">
        <section className="panel project-list-panel">
          <div className="section-title-row">
            <span className="eyebrow">Portfolio</span>
            <button type="button" className="text-button">
              Review all <ArrowRight size={15} />
            </button>
          </div>

          <div className="project-stack">
            {projectCards.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card-head">
                  <div>
                    <span className="project-kicker">Analytics project</span>
                    <h2>{project.title}</h2>
                  </div>
                  <span className="badge badge-developing">{project.status}</span>
                </div>

                <p>{project.summary}</p>

                <div className="project-progress-block">
                  <div className="project-progress-header">
                    <span>Progress</span>
                    <strong>{project.progress}%</strong>
                  </div>
                  <div className="bars-track">
                    <span style={{ width: `${project.progress}%` }}></span>
                  </div>
                </div>

                <div className="project-meta-row">
                  <div>
                    <span>Outcome</span>
                    <strong>{project.outcome}</strong>
                  </div>
                  <div>
                    <span>Effort</span>
                    <strong>{project.effort}</strong>
                  </div>
                </div>

                <button type="button" className="button button-secondary project-button">
                  Open project
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="project-aside side-stack">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Spotlight</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <FolderKanban size={18} />
              </div>
              <h2>Your strongest portfolio story is in SaaS performance analysis.</h2>
              <p>Use this narrative to connect revenue shifts to customer behavior and product decisions.</p>
            </div>

            <ul className="focus-list">
              {skillSignals.map((signal) => (
                <li key={signal.label}>
                  <strong>{signal.label}</strong>
                  <span>{signal.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">Coach note</span>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-head">
                <Sparkles size={18} />
                <span>AI feedback</span>
              </div>
              <h3>Clarify the business question before presenting the dashboard.</h3>
              <p>Make the insight actionable by tying the metric movement to a decision the team can make next.</p>
              <button type="button" className="button button-primary">
                Ask coach <ArrowRight size={15} />
              </button>
            </div>
          </section>

          <section className="panel evidence-panel compact-panel">
            <div className="section-title-row">
              <span className="eyebrow">Checklist</span>
            </div>

            <ul className="mini-proof-list">
              <li>
                <CheckCircle2 size={16} />
                <span>Business hook is clear</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Metrics are explained</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Decision recommendation included</span>
              </li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Projects;
