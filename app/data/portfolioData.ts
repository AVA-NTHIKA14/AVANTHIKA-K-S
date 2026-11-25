import type { PortfolioData } from "../types";

/** Public portfolio content lives here so projects can be updated without touching page components. */
export const PORTFOLIO_DATA: PortfolioData = {
  name: "Avanthika K S",
  headline: "Product design, grounded in ECE.",
  subHeadline: "I am an ECE student at GEC Palakkad, working across product design and frontend development. My recent work ranges from an LSG Track portal shaped by conversations with Panchayat officials to Care-Ring, an ESP32 assistive communication prototype.",
  bio: [
    "I am a final-year Electronics and Communication Engineering student at Government Engineering College, Palakkad (KTU), focused on product design and frontend development.",
    "My project work spans digital products and embedded prototypes. I am looking for entry-level Product Designer and Frontend or Software Intern roles, with assistive hardware as another area of interest.",
  ],
  projects: [
    {
      slug: "lsg-track",
      title: "LSG Track",
      subtitle: "GIS licence portal for panchayat officials",
      tagline: "Making licence records easier to review ward by ward.",
      description: "Designed in Figma, built and deployed after speaking with village officers and the Panangad Panchayat Secretary.",
      domains: ["design", "software"],
      primaryDomain: "design",
      status: "in-progress",
      contribution: "Product design and full-stack development",
      technologyStack: ["Figma", "React", "TypeScript", "Firebase", "Leaflet", "OpenStreetMap"],
      featured: true,
      visibility: "public",
      projectType: "community",
      githubUrl: "https://github.com/AVA-NTHIKA14/LSG-Track.git",
      liveUrl: "https://sst-green.vercel.app/",
      screenshots: [
        {
          src: "/images/projects/lsg-track/lsg-track-desktop.webp",
          alt: "LSG Track Panchayat selection screen on desktop",
          viewport: "desktop",
        },
        {
          src: "/images/projects/lsg-track/lsg-track-mobile.webp",
          alt: "LSG Track Panchayat selection screen on mobile",
          viewport: "mobile",
        },
      ],
      problem: "Licence data was kept in Excel and was hard to read ward by ward.",
      process: "Spoke with village officers and the Panangad Panchayat Secretary, designed in Figma, then built and deployed the portal.",
      team: "Team details not supplied.",
      whatIBuilt: "A GIS licence portal for panchayat officials, designed in Figma, then built and deployed.",
      outcome: "The Panangad Panchayat Secretary tested the portal and gave feedback. Formal government approval is pending.",
      objectives: [
        "Connect business records to geographical views.",
        "Explore K-SMART CSV and Excel data import.",
        "Support licensing administration and field workflows.",
      ],
      research: {
        methodology:
          "The project brief describes existing licensing workflows and the need to connect records with maps. Formal interviews or user studies are not documented in this portfolio workspace.",
        insights: [
          "Location accuracy and record completeness affect the usefulness of map views.",
          "Field interfaces need to fit existing institutional workflows.",
        ],
      },
      design: {
        process: "The portal is organized around business records, map exploration and inspection work.",
        artifacts: "No source design files or screenshots are included in this portfolio workspace.",
        outcome: "A live application link is available for review; its current features should be verified in the application.",
      },
      development: {
        architecture: "The project is described as a React and TypeScript application using Firebase and Leaflet with OpenStreetMap.",
        decisions: [
          { title: "Map layer", description: "Leaflet and OpenStreetMap are used for geographical views." },
          { title: "Existing records", description: "K-SMART CSV and Excel import is part of the described workflow." },
        ],
      },
      implementationEvidence: [
        "Repository and live application links are provided. This portfolio workspace does not contain the application source for an implementation audit.",
      ],
      challenges: [
        { title: "Data quality", description: "Record completeness and location accuracy influence map reliability." },
        { title: "Workflow fit", description: "The portal needs to accommodate existing licensing and inspection practices." },
      ],
      learnings: [
        "GIS can connect administrative records with useful geographical context.",
        "Institutional software needs to account for established workflows.",
      ],
      futureImprovements: [
        "Verify renewal notifications, revenue calculations, geo-fence audits and notice generation against the current implementation.",
        "Improve record synchronization and location validation.",
      ],
    },
    {
      slug: "carering",
      title: "Care-Ring",
      subtitle: "Wearable assistive communication prototype",
      tagline: "An assistive communication prototype using touch patterns and caregiver alerts.",
      description: "A working ESP32 prototype built at a hackathon and adapted from the open-source esp32-patient-call project.",
      domains: ["electronics"],
      primaryDomain: "electronics",
      status: "prototype",
      contribution: "Prototype development",
      technologyStack: ["ESP32", "Touch patterns", "OLED", "Wi-Fi", "Email alerts"],
      featured: true,
      visibility: "public",
      projectType: "hackathon",
      problem: "The prototype explores touch-based communication to send a caregiver a request.",
      process: "Built at a hackathon and adapted from the open-source esp32-patient-call project.",
      team: "Team details not supplied.",
      whatIBuilt: "An ESP32 touch ring that recognizes touch patterns, provides OLED feedback and sends Wi-Fi email alerts to a caregiver.",
      outcome: "A working prototype. It is not a medical device and has not been tested with real users.",
      objectives: [
        "Explore four touch patterns for predefined requests.",
        "Explore ESP32 input processing and OLED feedback.",
        "Consider Wi-Fi caregiver notifications and a wearable enclosure.",
      ],
      research: {
        methodology:
          "The project frames a communication gap between people with severe physical limitations and caregivers. Clinical study and real-user testing are not documented.",
        insights: [
          "Input timing and accidental touches need careful handling.",
          "Emergency requests need a clear priority in the notification flow.",
        ],
      },
      design: {
        process: "The concept maps touch patterns to a small set of essential requests.",
        artifacts: "A hardware interaction concept combines touch input, local display feedback and wireless communication.",
        outcome: "The prototype concept describes single, double and triple taps plus a long press; usability is not clinically validated.",
      },
      development: {
        architecture: "The described concept connects touch input, ESP32 gesture recognition, OLED feedback and a Wi-Fi notification flow.",
        decisions: [
          { title: "Touch input", description: "Capacitive touch patterns represent predefined requests." },
          { title: "Local feedback", description: "An OLED is included to acknowledge interaction." },
        ],
      },
      implementationEvidence: [
        "The available portfolio content describes a prototype. Firmware, hardware records and user testing are not included here for verification.",
      ],
      challenges: [
        { title: "Gesture recognition", description: "Timing thresholds and input validation are needed to distinguish taps and long presses." },
        { title: "Wearable reliability", description: "Comfort, accidental input, cooldown and notification delivery remain considerations." },
      ],
      learnings: [
        "Hardware and software need to work together for dependable interaction.",
        "Feedback matters in minimal-input interfaces.",
      ],
      futureImprovements: [
        "Validate gesture timing and notification reliability with appropriate supervised research.",
        "Improve wearable comfort and emergency alert handling.",
      ],
    },
    {
      slug: "adaptive-windshield-wiper",
      title: "Adaptive Windshield Wiper",
      subtitle: "Rain-sensor wiper control",
      tagline: "A B.Tech mini project with automatic speed control and manual override.",
      description: "An open-loop windshield wiper controller built by a team of three.",
      domains: ["electronics"],
      primaryDomain: "electronics",
      status: "prototype",
      contribution: "B.Tech mini project; team of three; individual responsibilities not supplied",
      technologyStack: ["ESP32", "Rain sensor", "BTS7960", "PWM", "Manual override"],
      featured: true,
      visibility: "public",
      projectType: "academic",
      problem: "The project explores adjusting wiper speed based on rain-sensor input.",
      team: "Team of three.",
      whatIBuilt: "An open-loop system using an ESP32, rain sensor, BTS7960 driver, PWM speed control and manual override.",
      outcome: "Build outcome and evaluation details were not supplied.",
      futureImprovements: ["Validate sensor response and speed control under varied rain and driving conditions."],
    },
    {
      slug: "roadsense",
      title: "RoadSense",
      subtitle: "Crowd-sourced road hazard exploration",
      tagline: "Exploring smartphone sensors and maps to identify and visualize potential road hazards.",
      description:
        "A mobile project exploring how accelerometer, gyroscope and GPS readings could support road hazard reporting.",
      domains: ["software", "research"],
      primaryDomain: "research",
      status: "in-progress",
      contribution: "B.Tech major project; individual responsibilities not supplied",
      technologyStack: ["Flutter", "Smartphone sensors"],
      featured: true,
      visibility: "public",
      projectType: "research",
      githubUrl: "https://github.com/AVA-NTHIKA14/Main-Project",
      problem: "Project exploring crowdsourced road hazard reporting.",
      team: "Team details not supplied.",
      whatIBuilt: "Major project in progress using Flutter and smartphone sensors for crowdsourced hazard reporting.",
      outcome: "Not yet validated.",
      objectives: [
        "Explore sensor readings and associate motion events with GPS locations.",
        "Consider a processing pipeline that accounts for timing, orientation and noise.",
        "Explore a map-first mobile experience for viewing and reporting hazards.",
      ],
      research: {
        methodology:
          "The project explores smartphone sensor fusion and candidate classification approaches. No labelled dataset, model evaluation or detection metrics are documented here.",
        insights: [
          "Vehicle speed and phone placement can change sensor readings.",
          "Braking and turning can resemble road impacts.",
          "GPS accuracy affects hazard locations.",
        ],
      },
      design: {
        process: "The stated direction is a map-first mobile experience with hazard markers and route exploration.",
        artifacts: "No local screen exports are available in this portfolio workspace.",
      },
      development: {
        architecture: "The proposed flow includes sensor collection, timestamp alignment, orientation correction, filtering, classification and geographical association. The automatic detection model is not verified as implemented.",
        decisions: [
          { title: "Phone sensors and GPS", description: "Accelerometer, gyroscope and location readings are explored as inputs." },
          { title: "Mobile map", description: "Flutter with flutter_map and OpenStreetMap is listed for geographical visualization." },
        ],
      },
      implementationEvidence: [
        "A source repository is linked. Detection model implementation and performance are not verified in this portfolio workspace.",
      ],
      challenges: [
        { title: "Noisy motion data", description: "Phone orientation, speed, braking and turning can affect sensor signals." },
        { title: "Model validation", description: "Classification approaches need representative labelled data and evaluation." },
      ],
      learnings: [
        "Sensor collection alone is not enough for reliable anomaly detection.",
        "Machine learning depends on representative, labelled data.",
      ],
      futureImprovements: [
        "Confirm implemented app flows against the project source.",
        "Collect and label representative sensor data before evaluating classifiers.",
      ],
    },
    {
      slug: "koode-ai",
      title: "Koode AI",
      subtitle: "Malayalam voice-first companion for older adults",
      tagline: "A Malayalam voice-first companion for older adults.",
      description: "A Hacktoberfest 2026 DEV Challenge entry built with React, FastAPI, Sarvam AI, and Gemma 2 via Ollama.",
      domains: ["software", "design"],
      primaryDomain: "design",
      status: "prototype",
      contribution: "Product design and development",
      technologyStack: ["React", "FastAPI", "Sarvam AI", "Gemma 2", "Ollama"],
      featured: true,
      visibility: "public",
      period: "Hacktoberfest 2026 DEV Challenge entry",
      projectType: "hackathon",
      problem: "The project explores a Malayalam voice-first companion for older adults.",
      process: "Process details were not supplied.",
      team: "Team details not supplied.",
      whatIBuilt: "A voice-first companion using React, FastAPI, Sarvam AI (external API), and Gemma 2 via Ollama.",
      outcome: "Hacktoberfest 2026 DEV Challenge entry; MIT licence. User testing and outcome details were not supplied.",
      objectives: [
        "Explore Malayalam speech interaction and speech-to-text capabilities.",
        "Reduce typing and navigation effort through a conversational flow.",
        "Consider larger text, touch areas, visual feedback and recovery when speech fails.",
      ],
      research: {
        methodology:
          "The concept identifies language accessibility, navigation complexity and typing as barriers. User interviews and usability testing are not documented.",
        insights: [
          "Voice should not be the only interaction mode.",
          "Background noise and pronunciation can affect speech recognition.",
          "Predictable navigation and error recovery help users stay oriented.",
        ],
      },
      design: {
        process: "The design concept prioritizes Malayalam voice interaction and a simpler conversational flow.",
        artifacts: "Large touch targets and reduced navigation are design goals; local screen exports are unavailable.",
        outcome: "The available content describes a concept and explored capabilities, not a tested voice product.",
      },
      development: {
        architecture: "The project context includes Sarvam AI speech-to-text and generative AI. Implemented voice capabilities have not been verified.",
        decisions: [
          { title: "Regional language interaction", description: "Malayalam voice interaction is explored to reduce English and typing barriers." },
          { title: "Accessible visual targets", description: "Larger typography and touch areas are design targets." },
        ],
      },
      implementationEvidence: [
        "The available project information describes a concept or prototype. Integrated speech capabilities and usability are not verified in this portfolio workspace.",
      ],
      challenges: [
        { title: "Speech recognition conditions", description: "Noise and pronunciation can affect recognition and may require correction paths." },
        { title: "Interaction recovery", description: "Users need visual feedback and a way to switch to touch input." },
      ],
      learnings: [
        "Voice can reduce typing, but does not make a product accessible on its own.",
        "Visual feedback and error recovery are essential parts of voice interaction.",
      ],
      futureImprovements: [
        "Verify integrated speech capabilities against the project source.",
        "Evaluate the design with older adults before making usability claims.",
      ],
    },
  ],
  experience: [
    {
      id: "mulearn-district-lead",
      role: "District Lead",
      company: "MuLearn Foundation",
      period: "Nov 2024 – Jan 2026",
      description: [
        "District Lead, Nov 2024 to Jan 2026.",
      ],
      tags: ["Leadership", "Community", "Mentorship", "Communication"],
    },
    {
      id: "mulearn-campus-management-intern",
      role: "Campus Management Intern",
      company: "MuLearn Foundation",
      period: "Jan 2025 – Dec 2025",
      description: [
        "Supported campus management across 70+ campuses.",
      ],
      tags: ["Campus operations", "Coordination", "Community"],
    },
    {
      id: "mulearn-media-lead",
      role: "Media Lead",
      company: "MuLearn GECSKP",
      period: "Jan 2025 – Feb 2026",
      description: [
        "Media Lead, Jan 2025 to Feb 2026.",
      ],
      tags: ["Media", "Content planning", "Communication"],
    },
  ],
  skills: [
    { title: "Design - LSG Track and Koode AI", skills: ["Figma", "Product design"] },
    { title: "Frontend - LSG Track and Koode AI", skills: ["React", "TypeScript"] },
    { title: "Backend and APIs - Koode AI", skills: ["FastAPI", "Sarvam AI"] },
    { title: "Embedded - Care-Ring and Adaptive Wiper", skills: ["ESP32", "Rain sensor", "BTS7960", "PWM"] },
    { title: "Maps - LSG Track", skills: ["Leaflet", "OpenStreetMap", "Firebase"] },
  ],
  education: [
    {
      institution: "Government Engineering College, Palakkad",
      degree: "B.Tech in Electronics and Communication Engineering",
      period: "2023-2027",
      cgpa: "6.52",
      status: "Final year",
    },
  ],
  certifications: [
    { title: "IndiaFOSS 2026 Diversity Scholarship", issuer: "IndiaFOSS", date: "2026" },
    { title: "STEM Student Scholar", issuer: "AnitaB.org" },
    { title: "Certificate of Appreciation", issuer: "Kerala Coders Cafe" },
    { title: "GHC India attendee", issuer: "Grace Hopper Celebration India" },
  ],
  designWorks: [],
  designPortfolioUrl: "https://www.figma.com/design/G2iSQSGLrXMXa1vLC6vIZc/Works-by-Avanthika",
  resumes: [
    { label: "Resume", category: "general", format: "pdf", url: "/assets/Avanthika_KS_Resume_Nov_2026.pdf", updatedAt: "21 November 2026" },
  ],
  contact: {
    email: "avanthikaks1874@gmail.com",
    github: "https://github.com/AVA-NTHIKA14",
    linkedin: "https://linkedin.com/in/avanthika-ks",
    location: "Kozhikode, Kerala, India",
  },
};
