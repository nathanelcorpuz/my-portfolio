import { ListContent, Project } from "@/types/types";

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

export const technologies = [
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
		title: "League of Legends home page",
		description: "A recreation of League of Legends' home page",
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
];
