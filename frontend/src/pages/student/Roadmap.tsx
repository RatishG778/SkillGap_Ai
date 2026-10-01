import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { getTargetRoleLabel, loadCurrentStudent } from "../../store/student.store";

const roadmapPhases = [
  {
    name: "Foundation",
    status: "Complete",
    date: "Weeks 1–2",
    description: "SQL and Python fundamentals to support your analyst workflow.",
    skills: ["SQL fundamentals", "Pandas workflows"],
    score: "92%",
  },
  {
    name: "Analytics",
    status: "In progress",
    date: "Weeks 3–4",
    description: "Build confidence in Power BI, KPI design, and insight storytelling.",
    skills: ["Dashboards", "KPI design"],
    score: "74%",
  },
  {
    name: "Decision-making",
    status: "Next",
    date: "Weeks 5–6",
    description: "Strengthen statistics and decision quality for case-based interviews.",
    skills: ["Hypothesis testing", "A/B analysis"],
    score: "68%",
  },
  {
    name: "Interview",
    status: "Queued",
    date: "Weeks 7–8",
    description: "Translate business context into crisp narratives and executive-ready answers.",
    skills: ["Storytelling", "Case practice"],
    score: "54%",
  },
];

const milestoneCards = [
  {
    title: "Build a KPI dashboard",
    detail: "Create a three-page business performance dashboard with revenue, retention, and churn views.",
    time: "3 sessions",
  },
  {
    title: "Practice statistical storytelling",
    detail: "Translate a scenario into a hypothesis, metric explanation, and executive recommendation.",
    time: "2 sessions",
  },
  {
    title: "Mock interview case",
    detail: "Run a business-case interview and tighten your answer structure for stakeholder communication.",
    time: "1 sprint",
  },
];

const focusList = [
  { label: "Power BI", value: "High impact" },
  { label: "Statistics", value: "Most common blocker" },
  { label: "Stakeholder storytelling", value: "Interview edge" },
];

function Roadmap() {
  const currentStudent = loadCurrentStudent();
  const targetRole = getTargetRoleLabel(currentStudent?.target_role_id);

  return (
    <div className="roadmap-shell">
      <header className="roadmap-header panel">
        <div>
          <span className="eyebrow">Career roadmap</span>
          <h1>{targetRole} growth plan</h1>
        </div>

        <button type="button" className="button button-primary">
          Review milestone <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Current phase</span>
          <strong>Analytics</strong>
          <small>Power BI + KPI storytelling</small>
        </article>

        <article className="summary-box panel">
          <span>Next milestone</span>
          <strong>12 days</strong>
          <small>Dashboard sprint</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Readiness</span>
          <strong>74%</strong>
          <small>Target: 88% by end of cycle</small>
        </article>
      </section>

      <main className="roadmap-main">
        <section className="panel roadmap-phase-panel">
          <div className="section-title-row">
            <span className="eyebrow">Your plan</span>
            <button type="button" className="text-button">
              Export plan <ArrowRight size={15} />
            </button>
          </div>

          <div className="timeline-list">
            {roadmapPhases.map((phase) => (
              <article key={phase.name} className="phase-card">
                <div className="phase-meta">
                  <div className="phase-bullet"> </div>
                  <div>
                    <span className="phase-name">{phase.name}</span>
                    <small>{phase.date}</small>
                  </div>
                </div>

                <div className="phase-content">
                  <div className="phase-header-row">
                    <strong>{phase.status}</strong>
                    <span>{phase.score}</span>
                  </div>

                  <p>{phase.description}</p>

                  <div className="phase-tags">
                    {phase.skills.map((skill) => (
                      <span key={skill} className="soft-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="roadmap-aside side-stack">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Priority focus</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <TrendingUp size={18} />
              </div>
              <h2>Build the dashboard story people trust.</h2>
              <p>
                The clearest unlock is not just charting metrics — it is turning business context into a decision-ready narrative.
              </p>
            </div>

            <ul className="focus-list">
              {focusList.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">This week</span>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-head">
                <Sparkles size={18} />
                <span>Focus sprint</span>
              </div>
              <h3>Turn metrics into a decision narrative</h3>
              <p>Improve clarity on revenue, retention, and purchase funnel performance before the next review.</p>
              <button type="button" className="button button-primary">
                Start sprint <ArrowRight size={15} />
              </button>
            </div>
          </section>

          <section className="panel evidence-panel compact-panel">
            <div className="section-title-row">
              <span className="eyebrow">Milestones</span>
            </div>

            <ul className="mini-proof-list">
              {milestoneCards.map((item) => (
                <li key={item.title}>
                  <CheckCircle2 size={16} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Roadmap;
