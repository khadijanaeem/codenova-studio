export const services = [
  {
    num: '01',
    slug: 'automation-ai-workflows',
    title: 'Automation & AI Workflows',
    tagline: 'Custom automations that connect your tools and remove repetitive manual work.',
    description:
      'We map out the manual, repetitive parts of your operation — data entry, follow-ups, approvals, reporting — and replace them with automations built on the tools you already use, like Zapier, Make, and n8n. Where it makes sense, we layer in AI to handle the parts that used to require a human judgment call: sorting inbound requests, drafting replies, extracting data from documents, or flagging what needs attention. The goal isn’t automation for its own sake — it’s freeing your team to spend time on the work that actually needs a human.',
    included: [
      'A workflow audit to identify where manual work is costing you the most time',
      'End-to-end automation builds across your existing tool stack',
      'AI-assisted data entry, document processing, sorting, and follow-ups',
      'Testing, documentation, and a clean handover so your team can run it',
    ],
  },
  /* Temporarily disabled — re-enable by uncommenting this block and
     restoring sequential numbering below.
  {
    num: '02',
    slug: 'gohighlevel-crm-setup-support',
    title: 'GoHighLevel CRM Setup & Support',
    tagline: 'Full setup, configuration, and ongoing support for GoHighLevel.',
    description:
      'GoHighLevel is powerful, but most teams only use a fraction of what it can do. We handle the full build-out — pipelines, funnels, calendars, automations, and integrations — configured around how your business actually sells and delivers, not a generic template. Once it’s live, we stick around for ongoing support so pipelines stay clean, automations keep working as your process evolves, and you always have someone to call when something breaks.',
    included: [
      'Full account setup and configuration from the ground up',
      'Pipeline, funnel, and automation build-out tailored to your sales process',
      'Integration with your existing tools (calendars, payment, email, and more)',
      'Ongoing support, troubleshooting, and updates as your needs change',
    ],
  },
  */
  {
    num: '02',
    slug: 'dedicated-automation-crm-experts',
    title: 'Dedicated Automation & CRM Experts',
    tagline: 'An embedded specialist who owns your systems so your team does not have to.',
    description:
      'Some businesses need more than a one-off project — they need someone who owns their automation and CRM systems the way an in-house hire would, without the overhead of actually hiring one. We embed a dedicated specialist into your operation who monitors what’s running, fixes what breaks, builds what’s next, and reports back on a regular cadence, so your systems keep getting better instead of quietly decaying after the initial build.',
    included: [
      'A named specialist assigned to your account, not a rotating queue',
      'Proactive monitoring and maintenance of existing automations and CRM',
      'Regular reporting so you always know what’s been done and what’s next',
      'Flexible scope that scales up or down as your needs change',
    ],
  },
  {
    num: '03',
    slug: 'ai-voice-agent',
    title: 'AI Voice Agent',
    tagline: 'Voice agents that handle inbound and outbound calls around the clock.',
    description:
      'We build AI voice agents that handle real phone conversations — qualifying leads, screening candidates, confirming appointments, or running routine check-in calls — without a person on the other end. Each agent is scripted and trained around your specific use case, connected to your CRM and calendar so outcomes get logged automatically, and available to take calls whenever they come in, not just during business hours.',
    included: [
      'Custom voice agent scripting and training for your specific use case',
      'Inbound and/or outbound call handling at any volume',
      'Direct integration with your CRM and calendar',
      'Call logs, transcripts, and analytics for every conversation',
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
