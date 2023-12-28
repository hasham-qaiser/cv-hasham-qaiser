import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Hasham Qaiser",
  initials: "BJ",
  location: "Los Angeles, California  ",
  locationLink: "https://www.google.com/maps/place/LosAngeles",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/117246204?s=400&u=2da4baac6a6dab3563b69b7772aa91203d62a650&v=4",
  personalWebsiteUrl: "https://www.hasham.xyz/",
  contact: {
    email: "hashamqaiser24@gmail.com",

    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },

  work: [
    {
      company: "HackForLA",
      link: "https://www.hackforla.org/",
      badges: ["Remote"],
      title: "Front-End Developer",
      start: "2023",
      end: "Current",
      description:
        "Contributing to an open-source repository by translating Figma designs into functional TypeScriptReact components.",
    },
    {
      company: "Stealth Startup",
      link: "/",
      badges: ["Remote"],
      title: "Lead Front-End Developer",
      start: "2023",
      end: "Current",
      description:
        "Spearheading the development of a MVP as the Lead Frontend Developer.",
    },
    {
      company: "Freelance Web Developer",
      link: "https://www.hasham.xyz/",
      badges: ["Remote"],
      title:
        "Front-End development services, Design & branding, Web Development",
      start: "2021",
      end: "2023",
      description:
        "Developed landing pages with a focus on search engine optimization (SEO), implementing best practices to enhance online visibility and organic traffic.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailWind",
    "Node.js",
  ],
  projects: [
    {
      title: "hasham.xyz",
      techStack: [
        "Side Project",
        "TypeScript",
        "Astro.js",
        "Vercel",
        "TailWind",
      ],
      description: "My personal website and blog. Built with Astro.js",
      logo: ConsultlyLogo,
      link: {
        label: "hasham.xyz",
        href: "https://hasham.xyz/",
      },
    },
    {
      title: "Jpeg Explorer",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Ha",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
} as const;
