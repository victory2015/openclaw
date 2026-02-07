import { html } from "lit";
import { icons } from "../icons.ts";

const featureCards = [
  {
    title: "Model Hub",
    description: "Compare and route across local, cloud, and custom model endpoints.",
    highlights: ["Latency-aware routing", "Fallback chains", "Cost controls"],
    icon: icons.globe,
  },
  {
    title: "Prompt Library",
    description: "Save, tag, and share reusable prompts with version history.",
    highlights: ["Templates", "Variables", "A/B variants"],
    icon: icons.fileCode,
  },
  {
    title: "Knowledge Base",
    description: "Index docs and datasets to keep assistants grounded.",
    highlights: ["Upload folders", "Semantic search", "Access rules"],
    icon: icons.book,
  },
  {
    title: "Workflow Canvas",
    description: "Design chained automations with tools, logic, and approvals.",
    highlights: ["Branching", "Retries", "Human gates"],
    icon: icons.wrench,
  },
  {
    title: "Agent Studio",
    description: "Create multi-agent squads with shared memory and goals.",
    highlights: ["Role presets", "Shared memory", "Runbooks"],
    icon: icons.zap,
  },
  {
    title: "Usage Insights",
    description: "Track spend, performance, and adoption trends in one place.",
    highlights: ["Session analytics", "Cost caps", "Exportable reports"],
    icon: icons.barChart,
  },
] as const;

const workspaceTracks = [
  {
    title: "Studio Spaces",
    description:
      "Organize workspaces by team, project, or environment with scoped models and secrets.",
  },
  {
    title: "Conversation Ops",
    description:
      "Monitor sessions, replay transcripts, and deploy fixes without leaving the dashboard.",
  },
  {
    title: "Extensions & Tools",
    description:
      "Install skill packs and integrations to connect data sources, CRMs, and ticketing.",
  },
  {
    title: "Security Posture",
    description: "Apply guardrails with policy templates, tool allowlists, and audit trails.",
  },
] as const;

const launchActions = [
  "Connect model endpoint",
  "Import prompts",
  "Create workflow",
  "Add knowledge source",
] as const;

const pipelineSteps = [
  {
    title: "Plan",
    detail: "Define intent, success metrics, and required data sources.",
  },
  {
    title: "Build",
    detail: "Compose prompts, tools, and policies into reusable blocks.",
  },
  {
    title: "Run",
    detail: "Launch automations with human approval gates and fallbacks.",
  },
  {
    title: "Improve",
    detail: "Review analytics, refine prompts, and tune routing rules.",
  },
] as const;

export function renderAiDashboard() {
  return html`
    <section class="card ai-dashboard-hero">
      <div class="ai-dashboard-hero__content">
        <div class="ai-dashboard-hero__eyebrow">Cherry Studio-inspired</div>
        <div class="ai-dashboard-hero__title">AI Command Center</div>
        <div class="ai-dashboard-hero__sub">
          Combine OpenClaw control with a modern AI studio: prompts, models, workflows, and analytics
          in one operational cockpit.
        </div>
        <div class="ai-dashboard-hero__actions">
          ${launchActions.map((label) => html`<button class="btn btn--sm">${label}</button>`)}
        </div>
      </div>
      <div class="ai-dashboard-hero__panel">
        <div class="ai-dashboard-hero__panel-title">Live posture</div>
        <div class="ai-dashboard-hero__panel-grid">
          <div class="ai-dashboard-metric">
            <span class="ai-dashboard-metric__label">Active models</span>
            <span class="ai-dashboard-metric__value">7</span>
          </div>
          <div class="ai-dashboard-metric">
            <span class="ai-dashboard-metric__label">Workflows</span>
            <span class="ai-dashboard-metric__value">14</span>
          </div>
          <div class="ai-dashboard-metric">
            <span class="ai-dashboard-metric__label">Prompt packs</span>
            <span class="ai-dashboard-metric__value">32</span>
          </div>
          <div class="ai-dashboard-metric">
            <span class="ai-dashboard-metric__label">Knowledge sources</span>
            <span class="ai-dashboard-metric__value">5</span>
          </div>
        </div>
        <div class="ai-dashboard-hero__panel-note">
          Syncs with gateway sessions, tool approvals, and usage data in real time.
        </div>
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      ${featureCards.map(
        (card) => html`
          <div class="card ai-dashboard-feature">
            <div class="ai-dashboard-feature__icon">${card.icon}</div>
            <div class="ai-dashboard-feature__body">
              <div class="ai-dashboard-feature__title">${card.title}</div>
              <div class="ai-dashboard-feature__desc">${card.description}</div>
              <div class="ai-dashboard-feature__tags">
                ${card.highlights.map((tag) => html`<span class="ai-dashboard-pill">${tag}</span>`)}
              </div>
            </div>
          </div>
        `,
      )}
    </section>

    <section class="grid grid-cols-2" style="margin-top: 18px;">
      ${workspaceTracks.map(
        (track) => html`
          <div class="card ai-dashboard-track">
            <div class="ai-dashboard-track__title">${track.title}</div>
            <div class="ai-dashboard-track__desc">${track.description}</div>
          </div>
        `,
      )}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Operational Pipeline</div>
      <div class="card-sub">A unified loop for building, running, and improving AI operations.</div>
      <div class="ai-dashboard-pipeline">
        ${pipelineSteps.map(
          (step, index) => html`
            <div class="ai-dashboard-step">
              <div class="ai-dashboard-step__index">${index + 1}</div>
              <div>
                <div class="ai-dashboard-step__title">${step.title}</div>
                <div class="ai-dashboard-step__desc">${step.detail}</div>
              </div>
            </div>
          `,
        )}
      </div>
    </section>
  `;
}
