import { ArrowRight, Bot, CheckCircle2, MessageSquareText, Play, Sparkles } from "lucide-react";

const promptChips = [
  "What should I learn today?",
  "Help me sharpen my resume bullets",
  "Give me a mock interview prompt",
  "Which skill should I focus on first?",
];

const quickInsights = [
  { label: "Current focus", value: "Power BI" },
  { label: "Best next action", value: "Build KPI dashboard" },
  { label: "Confidence boost", value: "+12%" },
];

const assistantMessages = [
  {
    role: "assistant",
    text: "Your strongest route right now is to keep building dashboard storytelling. You already have SQL depth; the gap is in translating findings into clear decisions.",
  },
  {
    role: "user",
    text: "What should I practice today?",
  },
  {
    role: "assistant",
    text: "Start with one KPI dashboard story: define the business question, explain the trend, and recommend a concrete action in under 3 minutes.",
  },
];

function Copilot() {
  return (
    <div className="copilot-page-shell">
      <header className="copilot-header panel">
        <div>
          <span className="eyebrow">Career copilot</span>
          <h1>Always-on coach</h1>
        </div>

        <button type="button" className="button button-primary">
          New prompt <ArrowRight size={16} />
        </button>
      </header>

      <section className="summary-grid">
        <article className="summary-box panel">
          <span>Focus</span>
          <strong>Power BI</strong>
          <small>Highest-impact skill gap</small>
        </article>

        <article className="summary-box panel">
          <span>Coach streak</span>
          <strong>8 days</strong>
          <small>Daily momentum</small>
        </article>

        <article className="summary-box panel accent-box">
          <span>Confidence</span>
          <strong>81%</strong>
          <small>Up from 69% last week</small>
        </article>
      </section>

      <main className="copilot-main">
        <section className="panel copilot-chat-panel">
          <div className="section-title-row">
            <span className="eyebrow">Live coach</span>
            <button type="button" className="text-button">
              View history <ArrowRight size={15} />
            </button>
          </div>

          <div className="chat-thread">
            {assistantMessages.map((message) => (
              <div key={message.text} className={`chat-bubble ${message.role}`}>
                <div className="chat-avatar">
                  {message.role === "assistant" ? <Bot size={14} /> : <MessageSquareText size={14} />}
                </div>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="mini-input-row">
            <span className="dot"></span>
            <input type="text" value="What should I do next?" readOnly />
            <button type="button" className="button button-primary">
              Send
            </button>
          </div>
        </section>

        <aside className="copilot-aside side-stack">
          <section className="panel focus-panel">
            <div className="section-title-row">
              <span className="eyebrow">Signal</span>
            </div>

            <div className="focus-card">
              <div className="focus-icon">
                <Sparkles size={18} />
              </div>
              <h2>You are within reach of your target role.</h2>
              <p>Your biggest unlock is turning analytical work into story-driven decisions and clearer business language.</p>
            </div>

            <div className="quick-signal-grid">
              {quickInsights.map((signal) => (
                <div key={signal.label} className="quick-signal-box">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="panel recommendation-panel">
            <div className="section-title-row">
              <span className="eyebrow">Prompt ideas</span>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-head">
                <Play size={18} />
                <span>Suggested prompts</span>
              </div>
              <div className="prompt-chip-list">
                {promptChips.map((prompt) => (
                  <button key={prompt} type="button" className="prompt-pill">
                    {prompt}
                  </button>
                ))}
              </div>
              <button type="button" className="button button-primary">
                Launch coach <ArrowRight size={15} />
              </button>
            </div>
          </section>

          <section className="panel evidence-panel compact-panel">
            <div className="section-title-row">
              <span className="eyebrow">Coach actions</span>
            </div>

            <ul className="mini-proof-list">
              <li>
                <CheckCircle2 size={16} />
                <span>Practice a KPI dashboard story</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Refine one resume bullet</span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>Run one mock interview answer</span>
              </li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Copilot;
