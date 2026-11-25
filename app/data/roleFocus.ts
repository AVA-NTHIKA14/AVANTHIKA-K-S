import type { ProjectDomain } from "../types";

export const ROLE_FOCUSES = {
  design: {
    label: "Product design",
    domain: "design",
    description: "Product design and interaction focused projects",
  },
  software: {
    label: "Software development",
    domain: "software",
    description: "Web, mobile and software projects",
  },
  electronics: {
    label: "Electronics & embedded",
    domain: "electronics",
    description: "Hardware, sensors and embedded systems",
  },
} as const satisfies Record<string, { label: string; domain: ProjectDomain; description: string }>;

export type RoleFocus = keyof typeof ROLE_FOCUSES;
