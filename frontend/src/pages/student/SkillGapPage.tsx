import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Target } from "lucide-react";

import { getTargetRoleLabel, loadCurrentStudent } from "../../store/student.store";

const skillCards = [
  {
    name: "SQL",
    status: "Strong",
    level: 88,
    target: 92,
    evidence: "3 projects · 1 assessment",
    nextAction: "Practice window functions",
    tone: "strong",
  },
  {
    name: "Python",
    status: "Developing",
    level: 68,
    target: 82,
    evidence: "2 projects · 2 assessments",
    nextAction: "Build an EDA workflow",
    tone: "developing",
  },
  {
    name: "Power BI",
    status: "Priority Gap",
    level: 42,
    target: 80,
    evidence: "1 project · 2 exercises",
    nextAction: "Build a KPI dashboard",
    tone: "gap",
  },
  {
    name: "Statistics",
    status: "Priority Gap",
    level: 35,
    target: 74,
    evidence: "1 assessment · 0 projects",
    nextAction: "Review hypothesis testing",
    tone: "gap",
  },
];

const focusSkills = [
  { label: "Power BI", value: "High impact" },
  { label: "Statistics", value: "Most common blocker" },
  { label: "Business storytelling", value: "Interview edge" },
];

function SkillGapPage() {
  const currentStudent = loadCurrentStudent();
  const targetRole = getTargetRoleLabel(currentStudent?.target_role_id);

  return (
    <div className="skill-page-shell">
      <header className="skill-page-header panel">
        <div>
          <span className="eyebrow">Your skill gap</span>
          <h1>{targetRole}</h1>
        </div>

        <button type="button" className="button button-primary">
          Continue plan <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Strong</span>
          <strong>2 skills</strong>
          <small>SQL • Python</small>
        </article>

        <article className="summary-box panel">
          <span>Developing</span>
          <strong>1 skill</strong>
          <small>Python</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Priority gap</span>
          <strong>2 skills</strong>
          <small>Power BI • Statistics</small>
        </article>
      </section>

      <main className="skill-page-main">
        <section className="panel skill-list-panel">
          <div className="section-title-row">
            <span className="eyebrow">Skill breakdown</span>
            <button type="button" className="text-button">
              Compare with role <ChevronRight size={15} />
            </button>
          </div>

          <div className="skill-card-stack">
            {skillCards.map((skill) => (
              <article key={skill.name} className="skill-detail-card">
                <div className="skill-head-row">
                  <div>
                    <span className="skill-name">{skill.name}</span>
                    <small>{skill.status}</small>
                  </div>

                  <span className={`badge badge-${skill.tone}`}>{skill.status}</span>
                </div>

                <div className="skill-range-row">
                  <div>
                    <label>Your level</label>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div>
                    <label>Target</label>
                    <strong>{skill.target}%</strong>
                  </div>
                </div>

                <div className="compare-bands">
                  <div className="band-labels">
                    <span>Current</span>
                    <span>Role target</span>
                  </div>
                  <div className="compare-track">
                    <span className="compare-fill current" style={{ width: `${skill.level}%` }}></span>
                    <span className="compare-fill target" style={{ width: `${skill.target}%` }}></span>
                  </div>
                </div>

                <div className="skill-meta-row">
                  <div>
                    <span>Evidence</span>
                    <strong>{skill.evidence}</strong>
                  </div>
                  <div>
                    <span>Next action</span>
                    <strong>{skill.nextAction}</strong>
                  </div>
                </div>

                <button type="button" className="button button-secondary skill-button">
                  Continue
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="side-stack skill-aside">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Focus area</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <Target size={18} />
              </div>
              <h2>Power BI is the biggest skill gap.</h2>
              <p>
                It appears in the majority of analyst roles and affects your ability to communicate insights with clarity.
              </p>
            </div>

            <ul className="focus-list">
              {focusSkills.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">Recommended next</span>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-head">
                <Sparkles size={18} />
                <span>Priority action</span>
              </div>
              <h3>Build a KPI dashboard in Power BI</h3>
              <p>Practice scenario-based storytelling using revenue, retention, and churn metrics.</p>
              <button type="button" className="button button-primary">
                Start task <ArrowRight size={15} />
              </button>
            </div>
          </section>

          <section className="panel evidence-panel compact-panel">
            <div className="section-title-row">
              <span className="eyebrow">Evidence</span>
            </div>

            <ul className="mini-proof-list">
              <li>
                <CheckCircle2 size={16} />
                <span>SQL assessment passed</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Python project reviewed</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Power BI dashboard pending</span>
              </li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default SkillGapPage;
