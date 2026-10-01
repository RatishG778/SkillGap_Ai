import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Gauge,
  Home,
  Layers3,
  MessageSquareText,
  NotebookPen,
  Route,
  Settings,
  Sparkles,
  Target,
} from "lucide-react";

import { getTargetRoleLabel, loadCurrentStudent } from "../../store/student.store";

const navItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Career", icon: BriefcaseBusiness },
  { label: "Skill Gap", icon: Target },
  { label: "Roadmap", icon: Route },
  { label: "Assessment", icon: NotebookPen },
  { label: "Projects", icon: Layers3 },
  { label: "Jobs", icon: Compass },
  { label: "Resume", icon: Sparkles },
  { label: "Interview", icon: MessageSquareText },
  { label: "Market", icon: BarChart3 },
  { label: "Copilot", icon: BrainCircuit },
  { label: "Settings", icon: Settings },
];

const progressMetrics = [
  { label: "Career Progress", value: "72%", accent: true },
  { label: "Skills matched", value: "14/18" },
  { label: "Priority gap", value: "2" },
];

const skillRows = [
  { name: "SQL", level: 88, label: "Strong" },
  { name: "Python", level: 68, label: "Developing" },
  { name: "Power BI", level: 42, label: "Gap" },
  { name: "Statistics", level: 35, label: "Gap" },
];

const roadmapSteps = [
  { name: "SQL", state: "done" },
  { name: "Python", state: "done" },
  { name: "Power BI", state: "live" },
  { name: "Statistics", state: "next" },
  { name: "Interview", state: "next" },
];

const learningCards = [
  { title: "SQL Window Functions", time: "45 min", why: "Required by 64% of your target-role dataset." },
  { title: "Power BI Storytelling", time: "30 min", why: "Fixes the largest dashboard communication gap." },
];

function Dashboard() {
  const currentStudent = loadCurrentStudent();
  const studentName = currentStudent?.name || "Aisha";
  const targetRole = getTargetRoleLabel(currentStudent?.target_role_id);

  return (
    <div className="dashboard-shell">
      <aside className="sidebar panel">
        <div className="brand-block">
          <div className="brand-mark">S</div>
          <span>SkillGap AI</span>
        </div>

        <nav className="sidebar-nav" aria-label="Sidebar navigation">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button key={label} type="button" className={`nav-item ${active ? "active" : ""}`}>
              <Icon size={17} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="greeting">Good morning, {studentName}</p>
            <h1>
              You’re working toward
              <span>{targetRole}</span>
            </h1>
          </div>
          <button type="button" className="button button-primary">
            View full roadmap <ArrowRight size={16} />
          </button>
        </header>

        <section className="hero-strip panel">
          <div className="progress-column">
            <div className="progress-label-row">
              <span>Career progress</span>
              <strong>72%</strong>
            </div>
            <div className="career-track">
              <span style={{ width: "72%" }}></span>
            </div>
            <div className="milestone-row">
              <span>Foundation</span>
              <span>Current</span>
              <span>Target</span>
            </div>
          </div>

          <div className="mini-metrics">
            {progressMetrics.map((item) => (
              <div key={item.label} className={`metric-box ${item.accent ? "accent" : ""}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="content-grid">
          <div className="main-stack">
            <div className="mission panel">
              <div className="section-title-row">
                <span className="eyebrow">Today’s mission</span>
              </div>

              <div className="mission-body">
                <div>
                  <p className="mission-label">Complete</p>
                  <h2>SQL Window Functions</h2>
                </div>

                <div className="mission-meta-row">
                  <div>
                    <span>Estimated time</span>
                    <strong>45 min</strong>
                  </div>
                  <div>
                    <span>Why this matters</span>
                    <strong>Required by 64% of your target-role dataset.</strong>
                  </div>
                </div>

                <button type="button" className="button button-primary button-large">
                  Start learning <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="panel skill-panel">
              <div className="section-title-row">
                <span className="eyebrow">Skill intelligence</span>
                <button type="button" className="text-button">
                  View details <ArrowRight size={15} />
                </button>
              </div>

              <div className="skill-list">
                {skillRows.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-name-row">
                      <span>{skill.name}</span>
                      <strong>{skill.label}</strong>
                    </div>
                    <div className="bars-track">
                      <span style={{ width: `${skill.level}%` }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="side-stack">
            <div className="panel focus-panel">
              <div className="section-title-row">
                <span className="eyebrow">Career signal</span>
              </div>

              <div className="focus-box">
                <div className="focus-stat">
                  <Gauge size={16} />
                  <span>Current readiness</span>
                </div>
                <strong>78%</strong>
                <p>Strong coding fundamentals. Biggest unlock: business storytelling and dashboard reasoning.</p>
              </div>
            </div>

            <div className="panel roadmap-panel">
              <div className="section-title-row">
                <span className="eyebrow">Roadmap</span>
              </div>
              <div className="roadmap-flow">
                {roadmapSteps.map((step, index) => (
                  <div key={step.name} className={`roadmap-item ${step.state}`}>
                    <div className="dot" />
                    {index < roadmapSteps.length - 1 && <div className="line" />}
                    <div className="label-wrap">
                      <span>{step.name}</span>
                      <small>
                        {step.state === "done" && "Done"}
                        {step.state === "live" && "Current"}
                        {step.state === "next" && "Next"}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lower-grid">
          <div className="panel learning-panel">
            <div className="section-title-row">
              <span className="eyebrow">Recommended next</span>
            </div>

            <div className="card-stack">
              {learningCards.map((card) => (
                <article key={card.title} className="mini-card">
                  <div className="mini-card-header">
                    <div className="mini-pill"><BookOpen size={14} /> Learn</div>
                    <span>{card.time}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.why}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel evidence-panel">
            <div className="section-title-row">
              <span className="eyebrow">Evidence</span>
            </div>

            <ul className="evidence-list">
              <li>
                <CheckCircle2 size={16} />
                <span>Assessment</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Project</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>GitHub</span>
              </li>
              <li className="light">
                <span className="hollow-dot" />
                <span>Interview</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
