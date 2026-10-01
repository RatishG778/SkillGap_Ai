import { ArrowRight, CheckCircle2, FileText, Sparkles } from "lucide-react";

import { getTargetRoleLabel, loadCurrentStudent } from "../../store/student.store";

const resumeSections = [
  {
    title: "Impact summary",
    status: "Strong",
    detail: "Your summary clearly emphasizes data-driven decision-making and stakeholder communication.",
  },
  {
    title: "Project bullets",
    status: "Needs polish",
    detail: "Add quantified business outcomes and connect the work to a clear customer or revenue story.",
  },
  {
    title: "Skills section",
    status: "Strong",
    detail: "The skill stack aligns well with the role requirements in analytics and product reporting.",
  },
];

const skillSignals = [
  { label: "SQL", value: 92 },
  { label: "Visualization", value: 86 },
  { label: "Business storytelling", value: 81 },
  { label: "Impact framing", value: 74 },
];

function Resume() {
  const currentStudent = loadCurrentStudent();
  const targetRole = getTargetRoleLabel(currentStudent?.target_role_id);
  const studentName = currentStudent?.name || "Student";

  return (
    <div className="resume-shell">
      <header className="resume-header panel">
        <div>
          <span className="eyebrow">Resume</span>
          <h1>{studentName}'s {targetRole} resume</h1>
        </div>

        <button type="button" className="button button-primary">
          Generate rewrite <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Score</span>
          <strong>86%</strong>
          <small>Strong baseline</small>
        </article>

        <article className="summary-box panel">
          <span>Opportunities</span>
          <strong>3</strong>
          <small>Priority edits</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Best fit</span>
          <strong>Data Analyst</strong>
          <small>Role alignment is strong</small>
        </article>
      </section>

      <main className="resume-main">
        <section className="panel resume-list-panel">
          <div className="section-title-row">
            <span className="eyebrow">Resume scan</span>
            <button type="button" className="text-button">
              Download review <ArrowRight size={15} />
            </button>
          </div>

          <div className="resume-section-stack">
            {resumeSections.map((section) => (
              <article key={section.title} className="resume-section-card">
                <div className="resume-section-head">
                  <div>
                    <span className="resume-section-kicker">{section.title}</span>
                    <h2>{section.status}</h2>
                  </div>
                  <span className={`badge ${section.status === "Strong" ? "badge-strong" : "badge-gap"}`}>
                    {section.status}
                  </span>
                </div>

                <p>{section.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="resume-aside side-stack">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Signals</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <FileText size={18} />
              </div>
              <h2>Your resume already reads like a strong analyst candidate.</h2>
              <p>The biggest improvement is in quantifying business impact and creating clearer decision-ready bullets.</p>
            </div>

            <div className="resume-skill-stack">
              {skillSignals.map((signal) => (
                <div key={signal.label} className="resume-skill-row">
                  <div className="signal-name-row">
                    <span>{signal.label}</span>
                    <strong>{signal.value}%</strong>
                  </div>
                  <div className="bars-track">
                    <span style={{ width: `${signal.value}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">Suggested edit</span>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-head">
                <Sparkles size={18} />
                <span>AI rewrite</span>
              </div>
              <h3>Turn project impact into revenue language.</h3>
              <p>Replace task-based bullets with outcome-led examples that show measurable business decisions.</p>
              <button type="button" className="button button-primary">
                Rewrite section <ArrowRight size={15} />
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
                <span>Metrics are quantified</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Business context is present</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Action + outcome is clear</span>
              </li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Resume;
