export type HeadingTextVariant = 1 | 2 | 3 | 4 | 5 | 6;
export type StandardTextVariant = 1 | 2 | 3;
export type SupportTextVariant = StandardTextVariant;
export type LinkTextVariant = HeadingTextVariant;
export type ButtonVariant = 1 | 2;
export type GapSize = "sm" | "md" | "lg";

export interface ListContent {
  title: string;
  items: string[];
}

export interface LinkContent {
  text: string;
  href: string;
  isNewTab: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  details: ListContent[];
  links: LinkContent[];
}

export interface StandardSectionItem {
  heading: string;
  description: string;
}

export interface AboutContent {
  description: string;
  items: StandardSectionItem[];
  endDescription: string;
}
