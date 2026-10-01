import { ArrowRight, BriefcaseBusiness, CheckCircle2, MessageSquareText, Play, Star } from "lucide-react";

import { getTargetRoleLabel, loadCurrentStudent } from "../../store/student.store";

const questionCards = [
  {
    title: "Tell me about a time you improved a KPI decision using data.",
    difficulty: "Behavioral",
    score: 88,
  },
  {
    title: "Walk me through how you would investigate a revenue decline in a SaaS product.",
    difficulty: "Case",
    score: 81,
  },
  {
    title: "How do you explain a dashboard insight to stakeholders with different priorities?",
    difficulty: "Communication",
    score: 76,
  },
];

const prepSignals = [
  { label: "Practice streak", value: "6 days" },
  { label: "Confidence", value: "81%" },
  { label: "Upcoming mock", value: "Tomorrow" },
];

const checklist = [
  "Start with business context before metrics",
  "Connect a metric to a decision",
  "Quantify the impact of your recommendation",
];

function Interview() {
  const currentStudent = loadCurrentStudent();
  const targetRole = getTargetRoleLabel(currentStudent?.target_role_id);
  const studentName = currentStudent?.name || "Student";

  return (
    <div className="interview-shell">
      <header className="interview-header panel">
        <div>
          <span className="eyebrow">Interview</span>
          <h1>{studentName}'s {targetRole} practice</h1>
        </div>

        <button type="button" className="button button-primary">
          Start mock interview <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Practice count</span>
          <strong>18</strong>
          <small>Mock prompts completed</small>
        </article>

        <article className="summary-box panel">
          <span>Confidence</span>
          <strong>81%</strong>
          <small>Up 12 points in 2 weeks</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Focus area</span>
          <strong>Business narrative</strong>
          <small>Best opportunity to improve</small>
        </article>
      </section>

      <main className="interview-main">
        <section className="panel interview-list-panel">
          <div className="section-title-row">
            <span className="eyebrow">Prompt bank</span>
            <button type="button" className="text-button">
              View all <ArrowRight size={15} />
            </button>
          </div>

          <div className="interview-card-stack">
            {questionCards.map((question) => (
              <article key={question.title} className="interview-card">
                <div className="interview-card-head">
                  <div>
                    <span className="interview-kicker">{question.difficulty}</span>
                    <h2>{question.title}</h2>
                  </div>

                  <div className="interview-score-box">
                    <Star size={14} />
                    <strong>{question.score}%</strong>
                  </div>
                </div>

                <div className="interview-card-footer">
                  <button type="button" className="button button-secondary">
                    <Play size={14} /> Practice
                  </button>
                  <button type="button" className="button button-primary">
                    Review answer <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="interview-aside side-stack">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Performance</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <MessageSquareText size={18} />
              </div>
              <h2>Your next win is telling the story behind the numbers.</h2>
              <p>Strong signal on business context and pacing. Tighten your explanation of tradeoffs and decisions.</p>
            </div>

            <div className="interview-signal-list">
              {prepSignals.map((signal) => (
                <div key={signal.label} className="interview-signal-row">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">Coach checklist</span>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-head">
                <BriefcaseBusiness size={18} />
                <span>Quick win</span>
              </div>
              <h3>Lead with the business question.</h3>
              <p>Use a short structure: context → metric → reason → recommendation.</p>
              <ul className="coach-checklist">
                {checklist.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="button button-primary">
                Open checklist <ArrowRight size={15} />
              </button>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Interview;
