export type ProjectRole = "builder" | "designer" | "maker";

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  featured: boolean;
  category: string;
  /** Primary portfolio classification. LSG Track intentionally spans two roles. */
  role: ProjectRole[];
  contributionRole: string;
  origin?: "hackathon";
  period: string;
  techStack: string[];
  liveUrl?: string;
  /** TODO: add the published Figma URL for design-only case studies. */
  figmaUrl?: string;
  githubUrl?: string;
  overview: string;
  problem: string;
  goals: string[];
  research: {
    methodology: string;
    insights: string[];
  };
  design: {
    process: string;
    wireframes: string;
    iterations: string;
    finalUI: string;
  };
  development: {
    architecture: string;
    techDecisions: { title: string; desc: string }[];
    challenges: { title: string; desc: string }[];
  };
  keyFeatures: { title: string; desc: string }[];
  learnings: string[];
  futureImprovements: string[];
  gallery?: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ResumesConfig {
  default: string;
  versions: {
    label: string;
    url: string;
  }[];
}

export interface DesignWork {
  id: number;
  title: string;
  description: string;
  figmaUrl: string;
  thumbnail?: string;
  category: string;
}

export const PORTFOLIO_DATA: {
  name: string;
  headline: string;
  subHeadline: string;
  bio: string[];
  workflow: { name: string; description: string }[];
  projects: CaseStudy[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  designWorks: DesignWork[];
  resumes: ResumesConfig;
  contact: { email: string; github: string; linkedin: string; location: string };
} = {
  name: "Avanthika K S",
  headline: "Designing thoughtful digital experiences and bringing them to life through code.",
  subHeadline: "Product Designer & Full-Stack Builder — ECE Undergrad @ GEC Palakkad",
  bio: [
    "I am an Electronics and Communication Engineering student at Government Engineering College Palakkad who enjoys both designing and building digital products.",
    "I refuse to be boxed in as only a UI/UX Designer or only a Frontend Developer. My identity bridges these fields: I am a builder who enjoys understanding user constraints, designing minimal layouts, and writing clean, type-safe code to implement them.",
    "By combining analytical engineering logic from my ECE background with user research empathy, I focus on building highly accessible, intuitive, and compliant interfaces that solve real-world problems."
  ],
  workflow: [
    { name: "Research", description: "Analyzing requirements, studying user behaviors, and defining layout constraints." },
    { name: "Design", description: "Drafting user flows, typography guidelines, and responsive layout structures." },
    { name: "Prototype", description: "Building interactive visual mockups to refine UX interactions." },
    { name: "Develop", description: "Translating wireframes into performant, clean, and accessible code." },
    { name: "Iterate", description: "Reviewing usability audits, fixing code warnings, and polishing details." }
  ],
  // TODO: add `liveUrl` to a project only when a hosted demo is available.
  projects: [
    {
      slug: "lsg-track",
      title: "LSG Track",
      subtitle: "e-Governance Spatial Licensing System",
      tagline: "Digitalizing Grama Panchayat building license verification and compliance management.",
      featured: true,
      category: "Web App / GIS / e-Governance",
      role: ["builder", "designer"],
      contributionRole: "Full-Stack Developer & Designer",
      origin: "hackathon",
      period: "Feb 2026 - Present",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Leaflet Maps", "Firebase Auth", "Firestore", "Firebase Functions"],
      githubUrl: "https://github.com/AVA-NTHIKA14/LSG-Track",
      overview: "I built the frontend, Firebase/Firestore data layer, and role-based access control end-to-end for an e-governance GIS platform tracking Kerala Grama Panchayat trade-license compliance.",
      problem: "Field officers need an accessible way to review trade-license data and prioritize inspections, including in areas with limited connectivity.",
      goals: [
        "Deploy an interactive Leaflet GIS map with real Kerala ward-boundary data and choropleth layers.",
        "Enforce per-tenant, role-based data access with Firestore security rules.",
        "Ship as an installable, bilingual (English/Malayalam) Progressive Web App."
      ],
      research: {
        methodology: "I based the system on the needs of Kerala Grama Panchayats tracking trade-license compliance and field officer priorities.",
        insights: [
          "Field officers require ward-level geographic context to prioritize inspections.",
          "Progressive Web App installability is essential for offline-capable field use."
        ]
      },
      design: {
        process: "I designed the map interface around ward boundaries, compliance status, and field-officer inspection priorities.",
        wireframes: "I structured a map-led workspace that maintains both geographic context and data records in a single view.",
        iterations: "I introduced choropleth layers and inspection-priority heatmaps to clearly communicate inspection urgency.",
        finalUI: "The interface supports bilingual (English/Malayalam) content and installs as a Progressive Web App with automated Vitest tests."
      },
      development: {
        architecture: "React + TypeScript frontend using Leaflet for GIS, Firebase/Firestore for data and auth, and role-based Firestore security rules for access control.",
        techDecisions: [
          { title: "Leaflet with real GeoJSON", desc: "Integrated actual Kerala ward-boundary data for choropleth visualization and inspection-priority heatmaps." },
          { title: "CSV/Excel import with SheetJS", desc: "Built heuristic column mapping and deduplication to simplify bulk data uploads." }
        ],
        challenges: [
          { title: "Tenant data isolation", desc: "Engineered Firestore security rules to enforce per-tenant, role-based data access across users and inspectors." },
          { title: "Field offline capability", desc: "Shipped as an installable PWA with bilingual support and automated test coverage for field deployments." }
        ]
      },
      keyFeatures: [
          { title: "Interactive Leaflet GIS map", desc: "Real Kerala ward boundaries with choropleth layers and inspection-priority heatmaps for field officers." },
          { title: "CSV/Excel import", desc: "SheetJS-based import with heuristic column mapping and deduplication." },
          { title: "Role-based access control", desc: "Firestore security rules enforce per-tenant, role-based data isolation." }
      ],
      learnings: [
        "Civic web portals require clean validation schemas and responsive navigation paths for non-technical users.",
        "Local data caching is crucial for applications intended for on-site inspections."
      ],
      futureImprovements: [
        "Integrate local payment gateways for digital license renewals.",
        "Implement document scanner OCR to auto-read license details."
      ]
    },
    {
      slug: "find-nearby",
      title: "Find Near By",
      subtitle: "Location-Based Daily Wage Labor Network",
      tagline: "Connecting regional daily wage workers and clients on a single interactive map.",
      featured: true,
      category: "Web Application / Location Services",
      role: ["builder"],
      contributionRole: "Full-Stack Developer & UI Designer",
      origin: "hackathon",
      period: "Dec 2025 - Jan 2026",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API", "Leaflet"],
      githubUrl: "https://github.com/AVA-NTHIKA14/PanikkarUndo",
      overview: "Find Near By matches domestic workers (plumbers, electricians, painters, carpenters) with client search results based on geographic proximity, making informal labor markets more accessible.",
      problem: "Local laborers lack digital platforms to advertise their services, while clients rely on fragmented networks to find urgent household service technicians.",
      goals: [
        "Create a search interface that maps and filters certified local workers.",
        "Integrate simple direct phone dialing actions on profile cards.",
        "Support rapid account setup for non-technical laborers."
      ],
      research: {
        methodology: "Interviewed local service technicians and regional homeowners to understand their scheduling and contact discovery struggles.",
        insights: [
          "Laborers prefer simple visual profiles showing only name, phone number, and primary skill tag.",
          "Homeowners need immediate distance calculations to match closest technicians."
        ]
      },
      design: {
        process: "Formulated a minimal interface emphasizing card visibility. Spaced elements cleanly and mapped navigation buttons for quick accessibility.",
        wireframes: "Mocked visual templates separating: search filter tabs, interactive map results, and worker list cards.",
        iterations: "Shifted card links to open direct mobile dialing paths to simplify connection friction for users.",
        finalUI: "Clean white grid layout with high-contrast text and interactive coordinates maps."
      },
      development: {
        architecture: "Next.js App Router workspace querying a Supabase backend database, using location queries to filter results.",
        techDecisions: [
          { title: "Supabase Location Indexing", desc: "Leveraged database queries to search and return technicians matching geographic radius parameters." },
          { title: "Direct Contact Triggers", desc: "Integrated standard dial anchors to instantly prompt calls on mobile browsers." }
        ],
        challenges: [
          { title: "Coordinates Filtering Latency", desc: "Initial queries timed out during broad radius searches. Resolved by caching regional worker counts." },
          { title: "Laborer Profile Verification", desc: "Implemented simple verification tags to protect clients from uncertified worker profiles." }
        ]
      },
      keyFeatures: [
        { title: "Distance Filtering Search", desc: "Calculates distance coordinates to sort available workers by proximity." },
        { title: "One-Click Dial Action", desc: "Dial keys on profile cards to trigger phone calls without copy-pasting numbers." },
        { title: "Worker Registration Dashboard", desc: "A simple form interface letting workers create profiles and list skills." }
      ],
      learnings: [
        "Product designs for local communities succeed when interface barriers are minimized to single-click actions.",
        "Database coordinates querying requires robust indexes to maintain rapid response speeds."
      ],
      futureImprovements: [
        "Add client review ratings and booking logs for worker profiles.",
        "Support regional language translations to enhance local accessibility."
      ]
    },
    {
      slug: "changayi",
      title: "Changayi",
      subtitle: "AI Personal Wellness Companion",
      tagline: "A conversational mental wellness companion that listens and matches your emotional state.",
      featured: false,
      category: "AI Chat / Web Application",
      role: ["designer"],
      contributionRole: "UI/UX Designer & Interaction Architect",
      origin: "hackathon",
      period: "Oct 2025 - Nov 2025",
      techStack: ["React", "JavaScript", "Groq API", "Llama 3", "Supabase Auth", "Tailwind CSS"],
      githubUrl: "https://github.com/AVA-NTHIKA14/Changayi",
      overview: "Changayi is an empathetic conversational companion built to offer supportive wellness logs, mood tracking, and real-time stress relief chats to help users process emotions in a supportive environment.",
      problem: "Traditional mental health applications often rely on rigid, multiple-choice tracking forms rather than natural conversational expression, making them feel impersonal.",
      goals: [
        "Build a natural conversation chat container interface.",
        "Implement mood logging schemas matching user inputs.",
        "Secure conversation records using encrypted database sessions."
      ],
      research: {
        methodology: "Interviewed students on their mental health habits, finding that users seek private, low-pressure outlets to vent without judgment.",
        insights: [
          "Conversational interfaces feel more personal than clinical forms.",
          "Visual indicators (like mood color charts) help users reflect on their progress over time."
        ]
      },
      design: {
        process: "Designed a clean, light-themed chat view with soft zinc border dividers. Emphasized spacious text blocks and clear messaging buttons.",
        wireframes: "Mocked side-by-side structures: active chat console on the right, history logs and mood calendars on the left.",
        iterations: "Swapped dynamic animations for static transition layers to secure smooth rendering on low-power devices.",
        finalUI: "Editorial layout with clean text boxes, minimalist profile indicators, and subtle user controls."
      },
      development: {
        architecture: "React frontend querying Llama 3 models via Groq API. Messages are validated and stored inside a Supabase database.",
        techDecisions: [
          { title: "Empathetic Prompt Engineering", desc: "Configured system prompts to guide model responses toward supportive, active listening behavior." },
          { title: "Supabase Session Enforcements", desc: "Isolated user conversations securely so that data is private and encrypted." }
        ],
        challenges: [
          { title: "Chat Bubble Reflows", desc: "Typing animations caused visual screen jumps. Resolved by calculating text heights before rendering." },
          { title: "Model Validation Failures", desc: "API limits triggered error states. Configured fallback responses to ensure uninterrupted service." }
        ]
      },
      keyFeatures: [
        { title: "Conversational Interface", desc: "Chat system designed for low-pressure venting and support." },
        { title: "Mood Tracking Dashboard", desc: "Analyzes message tone to plot mood progress on weekly charts." },
        { title: "Wellness Cards", desc: "Suggests breathing and writing exercises based on emotional states." }
      ],
      learnings: [
        "AI applications in health require rigorous guardrails and clear safety disclaimers.",
        "Minimizing interface noise helps users focus on writing and reflection."
      ],
      futureImprovements: [
        "Add locally encrypted offline text logs for offline journaling.",
        "Develop voice chat integration for hands-free conversations."
      ]
    },
    {
      slug: "prism",
      title: "Prism",
      subtitle: "Digital Inclusive Language Checker",
      tagline: "A full-stack tool for real-time detection of potentially biased language in writing.",
      featured: false,
      category: "Full-Stack AI Tool",
      role: ["maker"],
      contributionRole: "Solo Full-Stack Builder",
      period: "2026",
      techStack: ["Next.js", "TypeScript", "Fastify", "Groq LLaMA 3.3", "Firebase Auth"],
      githubUrl: "https://github.com/AVA-NTHIKA14/prism",
      overview: "I independently built Prism, a full-stack inclusive-language detection tool: Next.js frontend, Fastify API backend, and Groq LLaMA 3.3 for real-time semantic bias detection.",
      problem: "Writers need reliable feedback on biased language that combines semantic context understanding with a dependable lexical safety net.",
      goals: [
        "Analyze language in real time using Groq's LLaMA 3.3 model for semantic bias detection.",
        "Merge LLM-based semantic analysis with a deterministic lexical safety net.",
        "Validate and deduplicate results through a custom decision engine before presentation."
      ],
      research: {
        methodology: "I designed a dual-layer detection pipeline merging semantic context analysis with deterministic lexical matching.",
        insights: [
          "LLM outputs require deterministic validation before reaching the user interface.",
          "A lexical safety net catches bias terms that semantic analysis may miss due to model variance."
        ]
      },
      design: {
        process: "I designed the interface to clearly surface flagged language and suggest alternatives while maintaining readability.",
        wireframes: "I planned the writing flow to keep analysis results visually connected to source text.",
        iterations: "I refined the decision engine to reliably validate and deduplicate results across detection layers.",
        finalUI: "The interface connects seamlessly to a structured Fastify API for responsive real-time analysis."
      },
      development: {
        architecture: "Monorepo structure with web, api, core-detector, and core-client packages. Firebase Auth for user management, unit tests for validation.",
        techDecisions: [
          { title: "Dual-layer detection pipeline", desc: "Merges LLM-based semantic analysis (Groq LLaMA 3.3) with a deterministic lexical safety net." },
          { title: "Monorepo with clear ownership", desc: "Separated web frontend, Fastify API, detector logic, and shared client utilities for maintainability." }
        ],
        challenges: [
          { title: "Result deduplication and validation", desc: "Built a custom decision engine to validate and deduplicate results across semantic and lexical detection sources." },
          { title: "Real-time API performance", desc: "Integrated Groq's LLaMA 3.3 with Fastify for responsive analysis without blocking the UI." }
        ]
      },
      keyFeatures: [
          { title: "Semantic bias detection", desc: "LLaMA 3.3 analyzes language in context for nuanced bias detection." },
          { title: "Lexical safety net", desc: "Deterministic checks catch common bias terms missed by semantic analysis." },
          { title: "Validated results", desc: "Custom decision engine deduplicates and validates findings before display." }
      ],
      learnings: [
        "Prompt engineering requires robust validation checks to handle API variance.",
        "UI tools succeed when they educate users, building long-term inclusive writing habits."
      ],
      futureImprovements: [
        "Support customized style guides for company branding rules.",
        "Integrate with text-to-speech tools to support visually impaired users."
      ]
    },
    {
      slug: "workflow",
      title: "WorkFlow",
      subtitle: "Productivity Organization Tool",
      tagline: "A design prototype for task automation and workspace tracking inside remote agencies.",
      featured: false,
      category: "UI UX Research / Figma Prototyping",
      role: ["designer"],
      contributionRole: "Lead Product Designer",
      origin: "hackathon",
      period: "Aug 2025 - Sep 2025",
      techStack: ["Figma Prototyping", "User Research", "Wireframing", "Usability Audits"],
      figmaUrl: "https://www.figma.com/design/G2iSQSGLrXMXa1vLC6vIZc/Works-by-Avanthika",
      overview: "I designed an agency workspace prototype to help teams track handoffs, milestones, and task automation in one place.",
      problem: "Teams lose track of project handoffs and milestones across scattered dashboards, causing communication bottlenecks and project delays.",
      goals: [
        "Formulate a unified project dashboard visual design system.",
        "Conduct user research to identify main interface pain points.",
        "Build interactive high-fidelity Figma prototypes."
      ],
      research: {
        methodology: "I interviewed remote designers, developer leads, and project managers about scheduling and handoff challenges.",
        insights: [
          "Users want visual calendar grids showing clear tasks dependencies.",
          "Simple drag-and-drop mechanics reduce administrative fatigue."
        ]
      },
      design: {
        process: "I created a visual system with clear hierarchy, restrained borders, and reusable components for the workspace.",
        wireframes: "I sketched dashboard layouts with navigation on the left and active timelines on the right.",
        iterations: "I simplified the navigation and headings after reviewing the early layouts for clarity.",
        finalUI: "The final prototype uses clear typography, high-contrast borders, and generous spacing."
      },
      development: {
        architecture: "High-fidelity interactive prototype created in Figma, mapping user flows, input triggers, and animated page transitions.",
        techDecisions: [
          { title: "Design Component Libraries", desc: "Built reusable Figma component cards, inputs, and button sets to keep visuals consistent." },
          { title: "Interactive Flow Mapping", desc: "Connected multiple prototype screens to simulate real task drag-and-drop operations." }
        ],
        challenges: [
          { title: "Visual Noise Reduction", desc: "Timeline cards originally cluttered the dashboard. Resolved by introducing collapsible category lists." },
          { title: "User Navigation Friction", desc: "Refined sidebar layouts based on feedback to ensure pages load within two clicks." }
        ]
      },
      keyFeatures: [
        { title: "Visual Project Timelines", desc: "Interactive timelines displaying task progressions and dependencies." },
        { title: "Workspace Automation", desc: "Simulates automated status shifts upon project completion." },
        { title: "Clean Visual Design System", desc: "A sleek black, white, and grey style guide for dashboard elements." }
      ],
      learnings: [
        "Visual quality relies on consistent grid alignment and spacing rather than heavy graphics.",
        "Interactive prototypes are crucial for uncovering usability flaws before coding starts."
      ],
      futureImprovements: [
        "Translate Figma guidelines into React component library code.",
        "Add light/dark mode variations to the visual design system."
      ]
    },
    {
      slug: "quillora",
      title: "Quillora",
      subtitle: "Medium-Inspired Blogging Platform",
      tagline: "A rich-text blogging network with tags sorting and custom writer profiles.",
      featured: false,
      category: "Full-Stack Web App",
      role: ["builder"],
      contributionRole: "Full-Stack Engineer & Designer",
      origin: "hackathon",
      period: "Jun 2025 - Aug 2025",
      techStack: ["React", "Node.js", "Express", "Supabase Database", "Tailwind CSS"],
      githubUrl: "https://github.com/AVA-NTHIKA14/Quillora-Blog-App",
      overview: "Quillora is a clean, minimal publishing network featuring a rich text markdown editor, tags categorization, and responsive reading widgets to help writers share ideas.",
      problem: "Writers want simple, clean interfaces to share their thoughts without dealing with distracting ads or complex subscription interfaces.",
      goals: [
        "Create a minimal editor supporting markdown format inputs.",
        "Build a catalog index allowing users to sort posts by tags.",
        "Implement writer profile pages displaying written articles."
      ],
      research: {
        methodology: "Studied layouts of blogging sites like Medium and Substack, analyzing post spacing, font choices, and reading experiences.",
        insights: [
          "Spacious font layouts and clear line heights improve reading comfort.",
          "Simple tag filters help readers discover related topics quickly."
        ]
      },
      design: {
        process: "Designed a clean, light-themed publishing interface with neutral border lines. Focused on clean font rendering and clear buttons.",
        wireframes: "Mocked grid systems separating: articles feed column, topic tags sidebar, and writer profile headers.",
        iterations: "Swapped custom sidebars for responsive navigation tabs to secure readability on mobile devices.",
        finalUI: "Clean typography with neutral cards, explicit post tables, and responsive forms."
      },
      development: {
        architecture: "React SPA connecting to a Node/Express server, with data storage and authentication managed via Supabase.",
        techDecisions: [
          { title: "Markdown Input Parsing", desc: "Used rich text parsers to render formatted headings, lists, and code blocks instantly." },
          { title: "Supabase Relations", desc: "Designed relational tables linking posts, authors, and tag collections." }
        ],
        challenges: [
          { title: "Editor Syncing Lag", desc: "Draft saves originally caused cursor jumps. Solved by updating local states before syncing changes with database." },
          { title: "Asset Upload Latency", desc: "Optimized image uploads by compressing files before saving them to storage buckets." }
        ]
      },
      keyFeatures: [
        { title: "Markdown Editor Panel", desc: "A text canvas supporting heading formats, quote blocks, and image placements." },
        { title: "Dynamic Topic Filtration", desc: "Enables readers to filter articles using categorized tag pills." },
        { title: "Author Profile Feeds", desc: "Personal profiles listing written articles, post statistics, and bio details." }
      ],
      learnings: [
        "A pleasant reading experience relies on clean fonts, spacious borders, and removing visual distractions.",
        "Type safety across databases and client interfaces helps maintain a stable codebase."
      ],
      futureImprovements: [
        "Add draft auto-save functions using local browser storage.",
        "Integrate article reading time metrics for each post."
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "District Lead",
      company: "MuLearn Foundation",
      period: "Nov 2024 — Jan 2026",
      description: [
        "Represented μLearn at the district level, coordinating local initiatives and community outreach programs in Palakkad.",
        "Engaged in Campus Management works.",
        "Conducted 2 Campus Call (New Campuses On boarding to mulearn)."
      ],
      tags: ["Leadership", "Mentorship", "People Management", "Community Leadership", "Networking", "Communication"]
    },
    {
      id: 2,
      role: "Media Lead",
      company: "Mulearn GECSKP",
      period: "Jan 2025 — Feb 2026",
      description: [
        "Led end-to-end management of all social media profiles for µLearn GECSKP.",
        "Oversaw content strategy, scheduling, and performance tracking across platforms.",
        "Coordinated with team members to maintain consistent branding and voice, resulting in improved reach and community engagement."
      ],
      tags: ["Communication", "Content Strategy", "Media Visibility"]
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java", "Dart", "C#"]
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "Django"]
    },
    {
      title: "Databases & Cloud",
      skills: ["Firebase", "Supabase", "Firestore", "SQL"]
    },
    {
      title: "Embedded Systems (ECE)",
      skills: ["Arduino IDE", "Microcontrollers (ATmega)", "IoT Prototyping", "Sensors Interfacing", "Hardware Prototyping"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Git", "GitHub", "VS Code", "Linux"]
    }
  ],
  education: [
    {
      institution: "Government Engineering College, Palakkad",
      degree: "B.Tech Electronics and Communication Engineering",
      period: "2022 — 2027",
      status: "Final Year"
    }
  ],
  certifications: [
    {
      title: "Responsive Web Design",
      issuer: "FreecodeCamp",
      date: "2025"
    },
    {
      title: "Advancing Inclusion Program Scholarship - STEM Students",
      issuer: "GHCI",
      date: "2025"
    },
    {
      title: "Fundamentals of UI UX",
      issuer: "Coursera",
      date: "2026"
    },
    {
      title: "Vibe Coding for Beginners: From Zero to App",
      issuer: "Google Cloud",
      date: "2026"
    },
    {
      title: "Opensource Contribution",
      issuer: "Kerala Coders Cafe",
      date: "2026"
    }
  ],
  contact: {
    email: "avanthikaks1874@gmail.com",
    github: "https://github.com/AVA-NTHIKA14",
    linkedin: "https://linkedin.com/in/avanthika-ks",
    location: "Kozhikode, Kerala, India"
  },
  resumes: {
    default: "/assets/Avanthika_Resume_General.pdf",
    versions: [
      {
        label: "General",
        url: "/assets/Avanthika_Resume_General.pdf"
      },
      {
        label: "Graphic Design Associate",
        url: "/assets/Avanthika_Resume_DesignRole.pdf"
      },
      {
        label: "Software Developer",
        url: "/assets/Avanthika_Resume_DevRole.pdf"
      }
    ]
  },
  designWorks: [
    {
      id: 1,
      title: "FOSS Club GEC Palakkad Event Poster",
      description: "Co-branded event poster for FOSS Club with IEDC, featuring duotone visual treatment.",
      figmaUrl: "https://www.figma.com/design/G2iSQSGLrXMXa1vLC6vIZc/Works-by-Avanthika",
      category: "Event Design"
    },
    {
      id: 2,
      title: "Nattil Ninnu — Kerala Organic Produce Brand",
      description: "Brand identity and landing page concept for local organic produce, including logomark and colour system.",
      figmaUrl: "https://www.figma.com/design/G2iSQSGLrXMXa1vLC6vIZc/Works-by-Avanthika",
      category: "Brand & Web"
    },
    {
      id: 3,
      title: "V-FIESTA IEEE PIE Kerala Instagram Campaign",
      description: "Multi-post visual system for IEEE campus event promotion across social media.",
      figmaUrl: "https://www.figma.com/design/G2iSQSGLrXMXa1vLC6vIZc/Works-by-Avanthika",
      category: "Social Media"
    },
    {
      id: 4,
      title: "ISTE Student Chapter RIT Kottayam Website",
      description: "Multi-page website design with unified visual identity for student chapter organization.",
      figmaUrl: "https://www.figma.com/design/G2iSQSGLrXMXa1vLC6vIZc/Works-by-Avanthika",
      category: "Web Design"
    }
  ]
};
