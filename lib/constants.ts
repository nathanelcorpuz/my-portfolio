import { LinkContent, ListContent, Project } from "@/types/types";

export const skillsOverview: ListContent[] = [
  {
    title: "How I work",
    items: [
      "Loves to read existing code, figure out how to fix bugs on it, and build additional features on top while following best practices and company code directives",
      "Does everything with heart, even the most repetitive tasks and menial tasks",
      "Sees challenges as means for self-improvement",
      "Unafraid to...",
    ],
  },
  {
    title: "Frontend skills",
    items: [
      "Can convert mockups to code efficiently and with high quality using Next.js, component libraries, and other external NPM libraries if necessary.",
      "Can leverage Next.js App Router features like React Server Components, Route Groups, Middleware, and Parallel / Intercept Routes to implement any feature requirement",
      "Sees challenges as means for self-improvement",
      "Can use...",
    ],
  },
  {
    title: "Backend skills",
    items: [
      "Can develop and deploy a scalable REST API server using Express.js and Cyclic.sh",
      "Can use Next.js Route Handlers to quickly create co-located APIs within the Frontend project",
      "Can efficiently test APIs using Postman / REST VSCode extension",
      "Knowledgeable about...",
    ],
  },
  {
    title: "Other skills",
    items: [
      "Knowledgeable about Git and GitHub",
      "Always curious about CDNs, Edge computing, and serverless environments",
      "Can deploy and manage a full stack app through Vercel",
      "Properly organizes...",
    ],
  },
];

export const technologies: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "MongoDB",
  "Mongoose",
  "Node.js",
  "Express.js",
  "REST API",
  "React Query",
  "Tailwind CSS",
];

export const projects: Project[] = [
  {
    slug: "league-of-legends-home-page",
    title: "League of Legends home page",
    description:
      "A recreation of League of Legends' home page that highlights my ability to convert mockups to frontend code",
    mainFeatures: [
      "Smooth and interactive UI",
      "Purposeful animations and element designs",
      "Auto-playing video background",
      "A uniquely directed and edited in-game looping video",
      "High quality assets from Riot Games",
      "Organized GitHub ReadMe documentation",
      "Viewable on all devices",
    ],
    skillsHoned: [
      "Creating high quality mockups with Figma",
      "Customizing and extending theme with Tailwind CSS",
      "Developing a custom UI component library with JSX",
      "Responsive design",
    ],
    toolsUsed: ["Figma", "Next.js App Router", "Tailwind CSS", "Vercel"],
    devNotes: [
      "Used League Director and Premiere Pro to shoot and edit the looped video in the “Slay with Style” section",
      "This project also highlights my ability to incorporate non-coding skills in web development projects such as video editing and image editing",
      "I highly recommend checking out the GitHub ReadMe of this project if you want to see more information about how I built the project",
    ],
    links: [
      {
        text: "nleagueoflegends.vercel.app",
        href: "https://nleagueoflegends.vercel.app",
        isNewTab: true,
      },
      {
        text: "GitHub Source Code",
        href: "https://github.com/nathanelcorpuz/lol-landing-page",
        isNewTab: true,
      },
      {
        text: "ReadMe",
        href: "https://github.com/nathanelcorpuz/lol-landing-page#welcome-my-name-is-nathanel-corpuz-and-this-is-my-first-nextjs-portfolio-project",
        isNewTab: true,
      },
    ],
  },
  {
    slug: "mealer",
    title: "Mealer",
    description:
      "A web app for planning weekly meals and managing recipes that highlights my ability to build a full stack Next.js application",
    mainFeatures: [
      "Simple and minimalist UI",
      "Easily view your meals for today, tomorrow, and for the week from the home page",
      "Add, view, edit, or delete recipes from the recipes page",
      "Add, view, edit, or delete meals from the meals page",
      "Add notes to your recipes or meals",
      "Simple username/password-based authentication",
      "Usable on all devices",
    ],
    skillsHoned: [
      "Developing a custom JSX UI library",
      "Developing scalable data interaction and modeling with Mongoose",
      "Purposeful frontend and backend types with TypeScript",
      "Creating an http-only cookie-based JWT authentication and authorization",
      "Integrating backend APIs and serverless database connection",
      "Utilizing external npm libraries for client-side requirements (password-validator / slugify)",
      "Fixing production errors in hosted environment (via Vercel)",
    ],
    toolsUsed: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "TanStack React Query",
      "Mongoose",
      "MongoDB Atlas",
      "Vercel",
    ],
    devNotes: [
      "This is by far the project that I feel proudest about since I was able to launch it with very minimal features, yet it does its main purpose, which is to plan weekly meals and manage recipes for users!",
      "One of my favorite parts of this project is the GitHub ReadMe. For some reason, I really enjoy creating and organizing a ReadMe page and particularly enjoyed this one more than the previous project.",
      "Don't forget to check future features to be implemented soon and additional project information in the GitHub ReadMe!",
    ],
    links: [
      {
        text: "nmealer.vercel.app",
        href: "https://nmealer.vercel.app",
        isNewTab: true,
      },
      {
        text: "GitHub Source Code",
        href: "https://github.com/nathanelcorpuz/mealer",
        isNewTab: true,
      },
      {
        text: "ReadMe",
        href: "https://github.com/nathanelcorpuz/mealer#mealer",
        isNewTab: true,
      },
    ],
  },
];

export const aboutOverview: string[] = [
  "I'm a 28-year old full stack web developer from the Philippines.",
  "I saved just enough from 8 years of customer service to transition to web development on February 2021 to follow my dream of becoming a programmer.",
  "Web development is my chosen profession because it makes me feel like an explorer due to its plethora of branches. I also get to deal with logic and creativity on a daily basis, and its an exciting field because it seems to be a new industry in the history of mankind and it evolves everyday.",
  "My long term career goal is to have a stable income and enough savings to sustain my dream of traveling the world.",
];

export const contact: string[] = [
  "If you're interested in hiring me or working with me, please feel free to let me know via nathanelcorpuz@gmail.com",
  "You can also follow me socially via the links below:",
];

export const socials: LinkContent[] = [
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/nathanelcorpuz/",
    isNewTab: true,
  },
  {
    text: "Twitter",
    href: "https://twitter.com/nathanelcorpuz",
    isNewTab: true,
  },
];

export const headerLinks: LinkContent[] = [
  {
    text: "Home",
    href: "/",
    isNewTab: false,
  },
  {
    text: "About",
    href: "/about",
    isNewTab: false,
  },
  {
    text: "Projects",
    href: "/projects",
    isNewTab: false,
  },
  {
    text: "Skills",
    href: "/skills",
    isNewTab: false,
  },
  {
    text: "Contact",
    href: "/contact",
    isNewTab: false,
  },
];
