export const caseStudies = [
  {
    slug: 'voice-ordering-line',
    name: 'Confidential Food & Beverage Business',
    tag: 'Food & Beverage • Vapi Voice AI • n8n + Google Sheets + WhatsApp',
    result: 'Added a fully automated phone-ordering line that plugs into the client\'s existing WhatsApp ordering system — same menu, same order log, same kitchen alerts — built once as a reusable add-on for future clients.',
    bars: [65, 55, 80, 90],
    challenge:
      'The business already had a WhatsApp ordering bot, but customers who preferred calling in — or couldn\'t use WhatsApp — had no automated option. Phone orders still meant a staff member manually writing them down and re-entering them into the same system the WhatsApp bot fed, creating an extra manual step and a second place for mistakes to creep in. Any solution also had to slot into the existing Google Sheets backend without disrupting the current WhatsApp flow, and ideally be reusable as a paid add-on for other ordering-bot clients rather than a one-off build.',
    steps: [
      {
        title: 'Voice-to-tool bridge',
        desc: 'A Vapi voice assistant answers the phone and calls one of three tools — get the menu, calculate a total, or place an order — against a single n8n webhook whenever the caller needs them.',
      },
      {
        title: 'Shared backend, one source of truth',
        desc: 'n8n pulls the same business config and live menu from Google Sheets that the WhatsApp bot already uses (with a short warm cache to keep voice responses fast), so pricing and availability never drift between channels.',
      },
      {
        title: 'Orders logged to one place',
        desc: 'A completed order is written to the same Orders sheet the WhatsApp bot writes to, and triggers the same kitchen and customer notifications, so staff work off a single list regardless of which channel the order came from.',
      },
      {
        title: 'Built to be resold',
        desc: 'Every Google Sheets reference, the assistant\'s prompt, and the order-matching logic are designed to be swapped per deployment, so the same workflow can be re-pointed at a new client\'s spreadsheet and menu without a rebuild.',
      },
    ],
  },
  {
    slug: 'healthcare-document-chatbot',
    name: 'Confidential Healthcare Provider',
    tag: 'Healthcare • RAG Chatbot • LLM + Vector Search',
    result: 'Turned hours of manual document review into an instant, plain-language briefing and Q&A — with every answer grounded in the source document.',
    bars: [40, 65, 50, 90],
    challenge:
      'Staff regularly had to work through long, dense healthcare documents — patient records, clinical policies, insurance and compliance paperwork — just to find a handful of relevant facts. Reading through a single document could take twenty minutes or more, and doing it dozens of times a day didn’t scale. Search-and-skim wasn’t reliable either: important details were easy to miss, and there was no quick way to ask a follow-up question without re-reading the whole thing.',
    steps: [
      {
        title: 'Document ingestion & parsing',
        desc: 'Uploaded documents (including scanned PDFs) are parsed and broken into clean, retrievable chunks the moment they come in.',
      },
      {
        title: 'Vector embedding & retrieval',
        desc: 'Each chunk is embedded and indexed in a vector store, so the system can pull the exact passages relevant to any question instead of searching the whole document.',
      },
      {
        title: 'Automatic briefing on upload',
        desc: 'As soon as a document is uploaded, the chatbot generates a plain-language summary — what the document is, who it concerns, and the key facts a reader needs to know.',
      },
      {
        title: 'Grounded conversational Q&A',
        desc: 'Users can then ask follow-up questions in plain English. Answers are generated using retrieval-augmented generation (RAG), so every response is grounded in the actual document text rather than the model guessing.',
      },
    ],
  },
  {
    slug: 'social-commerce-order-automation',
    name: 'Confidential Social Commerce Retailer',
    tag: 'E-commerce • WhatsApp & Instagram Automation • LLM + Shopify',
    result: 'Automated the entire order journey from DM to delivery confirmation — inventory checks, upsells, invoicing, and logistics — while keeping a human in the loop on high-value orders.',
    bars: [55, 45, 70, 60],
    challenge:
      'The brand sold almost entirely through WhatsApp and Instagram DMs, and every message was handled manually: checking stock, answering product questions, writing up orders, generating invoices, and coordinating delivery. During busy periods, replies slowed down, upsell opportunities got missed, and stock occasionally got double-booked because inventory wasn’t checked in real time. Larger orders also needed a human sign-off, but there was no consistent process for catching them before they slipped through.',
    steps: [
      {
        title: 'Intent detection on every inbound message',
        desc: 'Incoming WhatsApp and Instagram messages are parsed with an LLM to identify intent — product question, order request, or something else — before any automated action runs.',
      },
      {
        title: 'Real-time inventory check & reservation',
        desc: 'The system checks live Shopify inventory and reserves stock the moment a customer commits to an order, so nothing gets sold twice.',
      },
      {
        title: 'AI-driven answers & upsells',
        desc: 'Product questions get answered instantly in the same conversation, with relevant upsell or cross-sell suggestions surfaced automatically.',
      },
      {
        title: 'Order creation with a built-in approval gate',
        desc: 'Orders are written to the orders database and Shopify automatically. Anything above a configurable value threshold is routed to Slack for human approval before moving forward.',
      },
      {
        title: 'Invoicing, delivery, and inventory sync',
        desc: 'Once approved, an invoice is generated, the order is handed off to the logistics provider, inventory is updated, and the customer gets an automatic confirmation — end to end, with no manual handoffs.',
      },
    ],
  },
  {
    slug: 'drive-pinecone-rag-chatbot',
    name: 'Confidential Recruiting & Staffing Team',
    tag: 'HR & Recruiting • RAG Chatbot • Pinecone + Google Drive Automation',
    result: 'Turned a shared Drive folder into a live, queryable knowledge base — every new document is embedded and searchable within seconds of being uploaded, with zero manual steps.',
    bars: [30, 80, 55, 95],
    challenge:
      'The team kept growing folders of resumes and candidate documents in Google Drive, but had no fast way to search across them or ask a simple question like "what experience does this candidate have?" without opening files one by one. Keeping any kind of searchable database in sync with the folder would have meant re-uploading and re-indexing documents by hand every time a new one came in — which nobody had time to keep up with.',
    steps: [
      {
        title: 'Automatic ingestion on file upload',
        desc: 'A Drive watcher triggers the moment a new file lands in the shared folder and downloads it automatically — no manual upload step or copy-paste into another tool.',
      },
      {
        title: 'Embedding & indexing in Pinecone',
        desc: 'Each document is parsed, embedded, and stored in a Pinecone vector index, so it becomes searchable within seconds of being added to the folder.',
      },
      {
        title: 'Conversational retrieval agent',
        desc: 'A chat-based AI agent answers natural-language questions — like summarizing a candidate\'s experience — by retrieving the most relevant stored documents from Pinecone and grounding its answer in them.',
      },
      {
        title: 'Always up to date, zero upkeep',
        desc: 'Because ingestion is fully automatic, the knowledge base never falls behind — every file added to the folder is searchable without anyone touching the pipeline.',
      },
    ],
  },
  {
    slug: 'ai-job-opportunity-triage',
    name: 'Confidential Working Professional',
    tag: 'Career & Recruiting • Email Triage + RAG Matching • WhatsApp Alerts',
    result: 'Replaced hours of manually sorting job-related emails with an inbox that classifies, rates, and only sends a WhatsApp alert when an opportunity is actually worth a look.',
    bars: [60, 50, 85, 70],
    challenge:
      'Job-related emails — recruiter outreach, job postings, interview invites, application updates, rejections, newsletters — all landed in one inbox with no way to tell what actually mattered without opening each one. Real opportunities got buried under cold outreach and generic listings, and there was no quick way to judge whether a posting was even a good fit before spending time on it.',
    steps: [
      {
        title: 'Automatic email classification',
        desc: 'A Gmail trigger fires on every new email, and a text classifier sorts it into categories — job vacancies, internship opportunities, interview/assessment invites, application updates, rejections, recruiter outreach, career events, networking opportunities, or other.',
      },
      {
        title: 'PDF extraction from attachments',
        desc: 'When an email includes an attached job description or document, the text is automatically extracted from the PDF so it can be analyzed like any other content.',
      },
      {
        title: 'AI matching against a personal knowledge base',
        desc: 'For opportunity emails, an AI agent compares the posting against a Pinecone-stored knowledge base — kept in sync by a separate Drive-based ingestion pipeline — and produces a fit rating.',
      },
      {
        title: 'Rating-based routing & WhatsApp alerts',
        desc: 'Strong matches trigger an automatic WhatsApp message so nothing good gets missed; weak matches are silently skipped, and other categories are either summarized over WhatsApp or auto-labeled in Gmail to keep the inbox organized.',
      },
    ],
  },
  {
    slug: 'ai-linkedin-content-automation',
    name: 'Confidential Marketing & Personal Brand Team',
    tag: 'Content & Marketing • AI Content Generation • Tavily + Pexels + LinkedIn API',
    result: 'Replaced a manual, multi-step content process with a fully automated pipeline that goes from a queued topic to a published, on-brand LinkedIn post with a matching image — with nobody touching a keyboard.',
    bars: [50, 70, 60, 85],
    challenge:
      'Posting consistently on LinkedIn meant someone had to research a topic, write a post, find a relevant image, and publish it by hand — every single time. That process was the first thing to get skipped when things got busy, so posting frequency dropped off exactly when visibility mattered most.',
    steps: [
      {
        title: 'Scheduled topic pickup',
        desc: 'A daily scheduled trigger reads the next queued topic from a Google Sheet marked "TO DO," so content ideas can be queued up in advance with no manual kickoff.',
      },
      {
        title: 'Automated research',
        desc: 'The topic is researched automatically via the Tavily Search API, pulling content from the top three results so the post is grounded in current information rather than the model\'s own assumptions.',
      },
      {
        title: 'AI-generated post & image brief',
        desc: 'GPT-4 synthesizes the research into a polished LinkedIn post, along with a short visual search query and alt text for the image that should go with it.',
      },
      {
        title: 'Automated image sourcing & selection',
        desc: 'The visual query is used to pull candidate images from Pexels, and GPT-4o reviews them and picks the one that best matches the post.',
      },
      {
        title: 'Publish & log',
        desc: 'The selected image is downloaded, uploaded to LinkedIn, and published together with the post — and the generated content is written back to the Google Sheet for a full record of what went out.',
      },
    ],
  },
]

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug)
}
