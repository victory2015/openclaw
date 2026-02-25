import { html } from "lit";
import { icons } from "../icons.ts";
import { pathForTab, type Tab } from "../navigation.ts";

export type AiDashboardProps = {
  basePath: string;
};

const METRICS = [
  {
    label: "Model Coverage",
    value: "Multi-provider",
    detail: "Route across cloud + local models.",
  },
  {
    label: "Context Memory",
    value: "Hybrid",
    detail: "Files, links, and snapshots in one place.",
  },
  {
    label: "Automation",
    value: "Workflow-ready",
    detail: "Chain prompts with tools and schedules.",
  },
];

const FEATURE_CARDS = [
  {
    title: "Model Hub",
    description:
      "Unify model credentials, defaults, and fallbacks so sessions can switch providers without rewiring prompts.",
    tags: ["Multi-model routing", "Fallback policies", "Latency-aware picks"],
  },
  {
    title: "Prompt Studio",
    description:
      "Maintain reusable prompt blueprints with variables, version notes, and persona presets for fast iteration.",
    tags: ["Prompt library", "Variables", "Persona presets"],
  },
  {
    title: "Knowledge Base",
    description:
      "Centralize reference files, docs, and web captures to power grounded responses and shared context.",
    tags: ["File library", "Web capture", "Context tags"],
  },
  {
    title: "Workflow Canvas",
    description:
      "Design multi-step runs with tools, approvals, and checkpoints that match how Cherry Studio pipelines work.",
    tags: ["Tool chaining", "Checkpoints", "Run history"],
  },
  {
    title: "Agent Control",
    description:
      "Launch assistant configurations with consistent guardrails, memory scopes, and deployment targets.",
    tags: ["Reusable agents", "Policy presets", "Environment targets"],
  },
  {
    title: "Observability",
    description:
      "Track usage, cost, and latency while watching live sessions and automation runs in one surface.",
    tags: ["Usage dashboards", "Live sessions", "Cost insights"],
  },
];

const QUICK_ACTIONS = [
  {
    label: "Open Chat",
    tab: "chat",
    detail: "Launch a live session",
  },
  {
    label: "Manage Agents",
    tab: "agents",
    detail: "Curate personas + tools",
  },
  {
    label: "Skills & Keys",
    tab: "skills",
    detail: "Control integrations",
  },
  {
    label: "Gateway Config",
    tab: "config",
    detail: "Tune routing + limits",
  },
] as const satisfies ReadonlyArray<{ label: string; tab: Tab; detail: string }>;

export function renderAiDashboard(props: AiDashboardProps) {
  return html`
    <section class="stack ai-dashboard">
      <div class="card ai-dashboard__hero">
        <div class="ai-dashboard__hero-content">
          <div class="ai-dashboard__hero-title">AI Dashboard</div>
          <div class="ai-dashboard__hero-sub">
            A Cherry Studio-inspired control center for models, prompts, knowledge, and automation.
          </div>
          <div class="ai-dashboard__hero-actions">
            ${QUICK_ACTIONS.map(
              (action) => html`
                <a class="btn" href=${pathForTab(action.tab, props.basePath)}>
                  <span>${action.label}</span>
                  <span class="ai-dashboard__action-note">${action.detail}</span>
                </a>
              `,
            )}
          </div>
        </div>
        <div class="ai-dashboard__hero-aside">
          <div class="ai-dashboard__hero-pill">
            <span class="ai-dashboard__hero-icon">${icons.brain}</span>
            <div>
              <div class="ai-dashboard__hero-pill-title">Unified AI Workspace</div>
              <div class="ai-dashboard__hero-pill-sub">
                Coordinate routing, prompts, and workflows from a single dashboard.
              </div>
            </div>
          </div>
          <div class="ai-dashboard__hero-pill">
            <span class="ai-dashboard__hero-icon">${icons.monitor}</span>
            <div>
              <div class="ai-dashboard__hero-pill-title">Operational Awareness</div>
              <div class="ai-dashboard__hero-pill-sub">
                Keep an eye on usage, logs, and automation health.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 ai-dashboard__metrics">
        ${METRICS.map(
          (metric) => html`
            <div class="card ai-dashboard__metric">
              <div class="ai-dashboard__metric-label">${metric.label}</div>
              <div class="ai-dashboard__metric-value">${metric.value}</div>
              <div class="ai-dashboard__metric-detail">${metric.detail}</div>
            </div>
          `,
        )}
      </div>

      <div class="grid grid-cols-2 ai-dashboard__grid">
        ${FEATURE_CARDS.map(
          (card) => html`
            <div class="card ai-dashboard__feature">
              <div class="ai-dashboard__feature-title">${card.title}</div>
              <div class="ai-dashboard__feature-desc">${card.description}</div>
              <div class="ai-dashboard__tags">
                ${card.tags.map((tag) => html`<span class="ai-dashboard__tag">${tag}</span>`)}
              </div>
            </div>
          `,
        )}
      </div>

      <div class="card ai-dashboard__footer">
        <div class="ai-dashboard__footer-title">Cherry Studio-aligned essentials</div>
        <div class="ai-dashboard__footer-grid">
          <div class="ai-dashboard__footer-item">
            <span class="ai-dashboard__footer-icon">${icons.link}</span>
            <div>
              <div class="ai-dashboard__footer-label">Provider sync</div>
              <div class="ai-dashboard__footer-detail">
                Map provider credentials into consistent model aliases.
              </div>
            </div>
          </div>
          <div class="ai-dashboard__footer-item">
            <span class="ai-dashboard__footer-icon">${icons.fileText}</span>
            <div>
              <div class="ai-dashboard__footer-label">Prompt versioning</div>
              <div class="ai-dashboard__footer-detail">
                Keep prompt history, changelogs, and A/B variants together.
              </div>
            </div>
          </div>
          <div class="ai-dashboard__footer-item">
            <span class="ai-dashboard__footer-icon">${icons.zap}</span>
            <div>
              <div class="ai-dashboard__footer-label">Automation hooks</div>
              <div class="ai-dashboard__footer-detail">
                Trigger workflows from schedules, events, or live chat sessions.
              </div>
            </div>
          </div>
          <div class="ai-dashboard__footer-item">
            <span class="ai-dashboard__footer-icon">${icons.scrollText}</span>
            <div>
              <div class="ai-dashboard__footer-label">Session journals</div>
              <div class="ai-dashboard__footer-detail">
                Capture transcripts, decisions, and action outcomes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
