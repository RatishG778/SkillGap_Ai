import { ArrowRight, ChevronRight, Sparkles, Target } from "lucide-react";

import { getTargetRoleLabel, loadCurrentStudent } from "../../store/student.store";

const answerOptions = [
  "Use the highest revenue month as the baseline.",
  "Compare period-over-period growth and isolate demand drivers.",
  "Focus on the final quarter only to reduce noise.",
  "Apply averages across all months without segmenting by channel.",
];

const insights = [
  { label: "Current score", value: "81%" },
  { label: "Correct streak", value: "4/5" },
  { label: "Next priority", value: "Statistical reasoning" },
];

const skillSignals = [
  { name: "SQL logic", score: 88 },
  { name: "Business storytelling", score: 76 },
  { name: "Statistics", score: 62 },
  { name: "Dashboard design", score: 70 },
];

function Assessment() {
  const currentStudent = loadCurrentStudent();
  const targetRole = getTargetRoleLabel(currentStudent?.target_role_id);
  const studentName = currentStudent?.name || "Student";

  return (
    <div className="assessment-shell">
      <header className="assessment-header panel">
        <div>
          <span className="eyebrow">Assessment</span>
          <h1>{studentName}'s {targetRole} readiness check</h1>
        </div>

        <button type="button" className="button button-primary">
          Review results <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Questions</span>
          <strong>12</strong>
          <small>Timed case review</small>
        </article>

        <article className="summary-box panel">
          <span>Time</span>
          <strong>25 min</strong>
          <small>Strong pace</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Expected score</span>
          <strong>81%</strong>
          <small>Baseline for target role</small>
        </article>
      </section>

      <main className="assessment-main">
        <section className="panel assessment-panel">
          <div className="section-title-row">
            <span className="eyebrow">Live assessment</span>
            <button type="button" className="text-button">
              Skip to scoring <ChevronRight size={15} />
            </button>
          </div>

          <article className="question-card">
            <div className="question-head-row">
              <span className="question-index">Question 3 of 12</span>
              <span className="badge badge-strong">Time 02:14</span>
            </div>

            <h2>You are reviewing revenue performance for a B2B SaaS team and notice a sharp dip in the last month. What is the best immediate response?</h2>

            <div className="option-list">
              {answerOptions.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className={`option-item ${index === 1 ? "selected" : ""}`}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{option}</span>
                </button>
              ))}
            </div>
          </article>

          <div className="assessment-footer-row">
            <button type="button" className="button button-secondary">
              Previous
            </button>
            <button type="button" className="button button-primary">
              Next question <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <aside className="assessment-aside side-stack">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Progress</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <Target size={18} />
              </div>
              <h2>Strong momentum in SQL and business framing.</h2>
              <p>Statistics and structured reasoning still need a sharper decision-making cadence under time pressure.</p>
            </div>

            <div className="signal-grid">
              {insights.map((item) => (
                <div key={item.label} className="signal-box">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">Skill signals</span>
            </div>

            <div className="signal-stack">
              {skillSignals.map((signal) => (
                <div key={signal.name} className="skill-signal-row">
                  <div className="signal-name-row">
                    <span>{signal.name}</span>
                    <strong>{signal.score}%</strong>
                  </div>
                  <div className="bars-track">
                    <span style={{ width: `${signal.score}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="panel evidence-panel compact-panel">
            <div className="section-title-row">
              <span className="eyebrow">Coach note</span>
            </div>

            <div className="coach-card">
              <div className="coach-badge">
                <Sparkles size={16} />
                <span>Insight</span>
              </div>
              <h3>Context beats intuition.</h3>
              <p>Compare seasonality, channel mix, and customer behavior before deciding on a corrective action.</p>
              <button type="button" className="button button-secondary">
                View coaching guide
              </button>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Assessment;
