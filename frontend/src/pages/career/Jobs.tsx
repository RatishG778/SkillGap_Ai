import { ArrowRight, BriefcaseBusiness, CheckCircle2, MapPin, Sparkles, Star } from "lucide-react";

import { getTargetRoleLabel, loadCurrentStudent } from "../../store/student.store";

const jobCards = [
  {
    title: "Senior Data Analyst",
    company: "Northstar Labs",
    location: "Remote · US",
    match: 93,
    type: "Full-time",
    salary: "$118k - $140k",
    summary: "Own product analytics, experiment readouts, and KPI storytelling for the growth team.",
    strengths: ["SQL", "Dashboard design", "Experimentation"],
  },
  {
    title: "Product Analyst",
    company: "Sora Commerce",
    location: "New York, NY",
    match: 88,
    type: "Hybrid",
    salary: "$104k - $126k",
    summary: "Translate customer and funnel data into clear product decisions and business narratives.",
    strengths: ["CRM analysis", "Power BI", "Business case"],
  },
  {
    title: "Business Intelligence Analyst",
    company: "Helio Health",
    location: "Boston, MA",
    match: 84,
    type: "Full-time",
    salary: "$96k - $118k",
    summary: "Support insight generation for operations and revenue teams with guided dashboards and KPI reporting.",
    strengths: ["KPI reporting", "Data cleaning", "SQL"],
  },
];

const roleSignals = [
  { label: "Hiring urgency", value: "High" },
  { label: "Best fit", value: "Product analytics" },
  { label: "Interview edge", value: "Dashboard storytelling" },
];

function Jobs() {
  const currentStudent = loadCurrentStudent();
  const targetRole = getTargetRoleLabel(currentStudent?.target_role_id);
  const studentName = currentStudent?.name || "Student";

  return (
    <div className="job-shell">
      <header className="job-header panel">
        <div>
          <span className="eyebrow">Jobs</span>
          <h1>{studentName}'s {targetRole} opportunities</h1>
        </div>

        <button type="button" className="button button-primary">
          Save search <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Matches</span>
          <strong>14</strong>
          <small>Strongly aligned roles</small>
        </article>

        <article className="summary-box panel">
          <span>Median score</span>
          <strong>87%</strong>
          <small>Across target openings</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Best fit</span>
          <strong>Senior Data Analyst</strong>
          <small>Strongest role match</small>
        </article>
      </section>

      <main className="job-main">
        <section className="panel job-list-panel">
          <div className="section-title-row">
            <span className="eyebrow">Open roles</span>
            <button type="button" className="text-button">
              View pipeline <ArrowRight size={15} />
            </button>
          </div>

          <div className="job-card-stack">
            {jobCards.map((job) => (
              <article key={job.title} className="job-card">
                <div className="job-top-row">
                  <div className="job-company-block">
                    <span className="job-company">{job.company}</span>
                    <h2>{job.title}</h2>
                  </div>

                  <div className="job-match-box">
                    <Star size={14} />
                    <strong>{job.match}%</strong>
                  </div>
                </div>

                <div className="job-meta-row">
                  <span>
                    <BriefcaseBusiness size={14} /> {job.type}
                  </span>
                  <span>
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span>{job.salary}</span>
                </div>

                <p>{job.summary}</p>

                <div className="tag-row">
                  {job.strengths.map((strength) => (
                    <span key={strength} className="soft-tag success">
                      {strength}
                    </span>
                  ))}
                </div>

                <div className="job-footer-row">
                  <button type="button" className="button button-secondary">
                    Save role
                  </button>
                  <button type="button" className="button button-primary">
                    Apply now <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="job-aside side-stack">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Role fit</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <Sparkles size={18} />
              </div>
              <h2>Product analytics roles are the clearest match for your profile.</h2>
              <p>Your SQL depth, business framing, and KPI communication are strongest in these openings.</p>
            </div>

            <div className="job-signal-list">
              {roleSignals.map((signal) => (
                <div key={signal.label} className="job-signal-row">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">Interview prep</span>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-head">
                <CheckCircle2 size={18} />
                <span>Priority</span>
              </div>
              <h3>Monetize the dashboard story in interviews.</h3>
              <p>Frame business outcomes, tradeoffs, and recommendation quality in every answer to stand out.</p>
              <button type="button" className="button button-primary">
                Practice pitch <ArrowRight size={15} />
              </button>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Jobs;
