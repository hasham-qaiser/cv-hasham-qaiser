import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Home } from "lucide-react";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Hasham Qaiser",
  initials: "HQ",
  location: "Los Angeles, California  ",
  locationLink: "https://www.google.com/maps/place/LosAngeles",
  about:
    " Frontend engineer based in sunny southern California. My interests extends to AI, functional UI/UX designs, and pioneering web experiences that transcend convention.",
  summary:
    "I am a results-driven Lead Frontend Developer with a proven track record in spearheading the development of MVPs for startups. My expertise includes crafting comprehensive Frontend user experiences and collaborating seamlessly with cross-functional teams. I excel in understanding client business goals and translating them into effective, meaningful, and user-centric solutions.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/117246204?s=400&u=2da4baac6a6dab3563b69b7772aa91203d62a650&v=4",
  personalWebsiteUrl: "https://www.hasham.xyz/",
  contact: {
    email: "hashamqaiser24@gmail.com",

    social: [
      {
        name: "Website",
        url: "https://www.hasham.xyz/",
        icon: Home,
      },
      {
        name: "GitHub",
        url: "https://github.com/hasham-qaiser",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hasham-qaiser/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/hashq_",
        icon: XIcon,
      },
    ],
  },

  work: [
    {
      company: "HackForLA",
      link: "https://www.hackforla.org/",
      badges: ["Remote", "Open-Source", "Volunteer"],
      title: "Front-End Developer",
      start: "2023",
      end: "Current",
      description:
        "Front-End Developer on the Expunge Assist team, Contributing to an open-source repository by translating Figma designs into functional TypeScriptReact components.",
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

      link: {
        label: "hasham.xyz",
        href: "https://hasham.xyz/",
      },
    },
    {
      title: "Jpeg Explorer",
      techStack: [
        "Side Project",
        "React",
        "CSS",
        "NFTs",
        "Wallet Explorer",
        "Web3",
      ],
      description: "Advanced NFT Wallet Analysis on Ethereum",

      link: {
        label: "Jpeg Explorer",
        href: "https://jpeg-explorer.vercel.app/",
      },
    },
    {
      title: "Location Weather",
      techStack: ["Side Project", "HTML", "JavaScript", "CSS"],
      description:
        "A simple web app that displays the current weather from any destination, Including a few magic touches.",

      link: {
        label: "Location Weather",
        href: "http://weather-app-seven-self.vercel.app/",
      },
    },
    {
      title: "Expunge Assist",
      techStack: [
        "HackforLA",
        "Open-Source",
        "Typescript",
        "React",
        "Material-MUI",
        "Figma",
      ],
      description:
        " Expunge Assist aims to help individuals in California to reduce, dismiss, or seal their criminal records as a result of Prop 47 & Prop 64.",

      link: {
        label: "EA",
        href: "https://www.hackforla.org/",
      },
    },
  ],
} as const;
