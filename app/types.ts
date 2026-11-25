export type ProjectDomain = "electronics" | "software" | "design" | "research";
export type ProjectStatus = "completed" | "prototype" | "in-progress" | "research" | "archived";
export type ProjectType = "academic" | "personal" | "hackathon" | "community" | "research" | "other";

export interface ProjectNote {
  title: string;
  description: string;
}

export interface ProjectResearch {
  methodology?: string;
  insights?: string[];
}

export interface ProjectDesign {
  process?: string;
  artifacts?: string;
  iterations?: string;
  outcome?: string;
}

export interface ProjectDevelopment {
  architecture?: string;
  decisions?: ProjectNote[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
  viewport: "desktop" | "mobile";
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  domains: ProjectDomain[];
  primaryDomain: ProjectDomain;
  status: ProjectStatus;
  contribution: string;
  team?: string;
  technologyStack: string[];
  featured: boolean;
  visibility: "public" | "hidden";
  period?: string;
  projectType: ProjectType;
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  coverImage?: string;
  gallery?: string[];
  screenshots?: ProjectScreenshot[];
  problem?: string;
  process?: string;
  whatIBuilt?: string;
  outcome?: string;
  objectives?: string[];
  research?: ProjectResearch;
  design?: ProjectDesign;
  development?: ProjectDevelopment;
  implementationEvidence?: string[];
  challenges?: ProjectNote[];
  learnings?: string[];
  futureImprovements?: string[];
  projectLinks?: { label: string; url: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period?: string;
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
  status?: string;
  cgpa?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export type ResumeCategory = "general" | "software" | "design";

export interface ResumeAsset {
  label: string;
  category: ResumeCategory;
  format: "pdf" | "docx";
  url: string;
  updatedAt?: string;
}

export type DesignCategory = "UI/UX" | "Branding" | "Social Media" | "Web Design" | "Visual Design";

export interface DesignWork {
  id: string;
  title: string;
  category: DesignCategory;
  description: string;
  contribution?: string;
  previewImage?: string;
  figmaUrl?: string;
}

export interface PortfolioData {
  name: string;
  headline: string;
  subHeadline: string;
  bio: string[];
  projects: CaseStudy[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  designWorks: DesignWork[];
  designPortfolioUrl?: string;
  resumes: ResumeAsset[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
}
