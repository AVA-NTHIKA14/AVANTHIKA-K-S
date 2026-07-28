export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  featured: boolean;
  category: string;
  role: string;
  period: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
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
  contact: { email: string; github: string; linkedin: string; location: string; resumeUrl: string };
} = {
  name: "Avanthika K S",
  headline: "Designing thoughtful digital experiences and bringing them to life through code.",
  subHeadline: "Junior Product Designer | GHCI'25 AIP Scholar | ECE Undergrad @ GEC Palakkad",
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
  projects: [
    {
      slug: "lsg-track",
      title: "LSG Track",
      subtitle: "e-Governance Spatial Licensing System",
      tagline: "Digitalizing Grama Panchayat building license verification and compliance management.",
      featured: true,
      category: "Web App / GIS / e-Governance",
      role: "Full-Stack Developer & Designer",
      period: "Feb 2026 - Present",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Leaflet Maps", "Firebase Auth", "Firestore", "Firebase Functions"],
      githubUrl: "https://github.com/AVA-NTHIKA14/LSG-Track",
      overview: "A digital spatial compliance portal for local panchayats, mapping trade and building licenses to interactive GIS layers to replace physical register logging. It coordinates survey lists and tracks compliance status by geographic wards.",
      problem: "Tracking license renewals and inspections manually across multiple wards causes administrative delays and lost municipal revenue. Field workers lack a centralized coordinates database.",
      goals: [
        "Geotag survey records on interactive maps using Leaflet GIS.",
        "Isolate datasets and dashboards securely matching each user's Local Body ID.",
        "Automate renewal workflows and notification alerts."
      ],
      research: {
        methodology: "Interrogated local municipal workflows, data entry operators, and field inspectors on their regional license tracking guidelines.",
        insights: [
          "Low-connectivity rural sectors require local browser cache synchronization for on-site surveys.",
          "Simple, mobile-friendly forms are necessary for inspectors conducting field compliance reviews."
        ]
      },
      design: {
        process: "Designed a clean, spacious layout separating ward boundary layers. Emphasized contrast borders and large headers to secure fast readability for operators.",
        wireframes: "Mocked structural layouts with map coordinates occupying the left panel and licensing ledgers in the right sidebar drawer.",
        iterations: "Simplified map marker layouts to use high-contrast status colors instead of complex icons to improve render speeds.",
        finalUI: "Clean monochrome splitscreen containing dynamic coordinates tables and visual charts."
      },
      development: {
        architecture: "React SPA interacting with Firestore collections. Background synchronization runs on serverless functions with secured environment variables.",
        techDecisions: [
          { title: "Leaflet Maps API", desc: "Used Leaflet for lightweight municipal boundary rendering using customized GeoJSON overlays." },
          { title: "Multi-Tenant Collection Filters", desc: "Enforced database security rules filtering records according to user's registered Local Body ID." }
        ],
        challenges: [
          { title: "GPS Accuracy Deviations", desc: "Clerks reported coordinate offsets in rural zones. Optimized by averaging GPS inputs and saving fallback offline logs." },
          { title: "Offline Storage Coordination", desc: "Implemented local browser cache storage to automatically queue and synchronize coordinates once network connection is restored." }
        ]
      },
      keyFeatures: [
        { title: "GIS Compliance Maps", desc: "Interactive map interfaces plotting commercial licenses and boundaries in real-time." },
        { title: "Ward Data Visualizations", desc: "Displays charts analyzing active, expiring, or unlicensed properties per sector." },
        { title: "GPS-Enabled Survey Tool", desc: "A survey page capturing GPS coordinates and license parameters directly in the field." }
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
      role: "Full-Stack Developer & UI Designer",
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
      role: "LLM Engineer & Frontend Builder",
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
      slug: "inclusive-checker",
      title: "Inclusive Checker",
      subtitle: "Accessibility Content Scanner",
      tagline: "Scanning text fields for ableism, ageism, and bias using Google Gemini AI.",
      featured: false,
      category: "Chrome Extension / AI Audit",
      role: "Chrome Extension & LLM Developer",
      period: "Nov 2025 - Dec 2025",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Google Gemini API", "Chrome Extension APIs"],
      githubUrl: "https://github.com/AVA-NTHIKA14/ALTaware",
      overview: "An accessibility auditor that integrates into input forms, scanning content for unintentional exclusionary phrasing (gender biases, ableist language, age assumptions) and suggesting inclusive overrides.",
      problem: "Public notices, academic content, and job postings frequently use non-inclusive terms that alienate applicants, and grammar checkers lack the context to flag these issues.",
      goals: [
        "Audit written text in real-time as users type.",
        "Retrieve suggestions from Gemini API using structured rules schemas.",
        "Display suggestions with click-to-replace actions."
      ],
      research: {
        methodology: "Studied WCAG guidelines and researched human resources diversity standards to compile common exclusionary keywords.",
        insights: [
          "Writers want to learn why a term is flagged, rather than just getting an automated fix.",
          "Suggestions must be easy to apply without disrupting typing flow."
        ]
      },
      design: {
        process: "Designed a clean popup card interface with clear severity markers. Used high-contrast borders and spacious text layout blocks.",
        wireframes: "Mocked editor split view: content panel on the left, highlighted matches and suggestions drawers on the right.",
        iterations: "Adjusted warning indicator layouts from color-only cues to styled warning badges to comply with accessibility standards.",
        finalUI: "Clean typography with spacious grids, explicit warning tags, and simple replacement triggers."
      },
      development: {
        architecture: "React extension interacting with Chrome tabs. Sends input to Gemini models and returns JSON data containing match ranges and overrides.",
        techDecisions: [
          { title: "Structured Schema Models", desc: "Configured prompts to force Gemini models to output JSON strings matching TypeScript interfaces." },
          { title: "Dynamic In-Place Edits", desc: "Wrote coordinate-based string splicing functions to replace flagged words instantly." }
        ],
        challenges: [
          { title: "API Response Delay", desc: "Wait times for model reviews disrupted typing flows. Resolved by running audits on-demand or after user pauses." },
          { title: "Formatting Cleanup", desc: "Parsed out markdown markup elements from API responses before performing JSON conversion." }
        ]
      },
      keyFeatures: [
        { title: "Gemini Bias Scans", desc: "Flags ageist, gender-biased, or non-inclusive phrases in text inputs." },
        { title: "Educational Cards", desc: "Explains why words are flagged and suggests alternative terminology." },
        { title: "One-Click Overrides", desc: "Instantly replaces flagged words in the text box with chosen alternatives." }
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
      role: "Lead Product Designer",
      period: "Aug 2025 - Sep 2025",
      techStack: ["Figma Prototyping", "User Research", "Wireframing", "Usability Audits"],
      githubUrl: "https://github.com/AVA-NTHIKA14/Portfolio",
      overview: "An agency workspace prototype analyzing workflow bottlenecks, organizing project handoffs, and managing task automation through visual, interactive timelines.",
      problem: "Teams lose track of project handoffs and milestones across scattered dashboards, causing communication bottlenecks and project delays.",
      goals: [
        "Formulate a unified project dashboard visual design system.",
        "Conduct user research to identify main interface pain points.",
        "Build interactive high-fidelity Figma prototypes."
      ],
      research: {
        methodology: "Interviewed remote designers, developer leads, and project managers on their primary scheduling difficulties.",
        insights: [
          "Users want visual calendar grids showing clear tasks dependencies.",
          "Simple drag-and-drop mechanics reduce administrative fatigue."
        ]
      },
      design: {
        process: "Designed a clean visual system utilizing 1px borders, subtle card glows, and clear typography hierarchy.",
        wireframes: "Sketched splitscreen dashboard structures: navigation lists on the left, active timelines on the right.",
        iterations: "Simplified navigation items to clean layout headers to optimize visual clarity.",
        finalUI: "Editorial layout with high-contrast borders and spacious text blocks."
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
      role: "Full-Stack Engineer & Designer",
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
      period: "Jul 2025 — Present",
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
    linkedin: "https://linkedin.com/in/AVANTHIKA",
    location: "Kozhikode, Kerala, India",
    resumeUrl: "/assets/Avanthika_Resume.pdf"
  }
};
