import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AI Humanoid Robotics",
  tagline: "Documentation for the AI Humanoid Robot Project",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://github.com", 
  baseUrl: "/",

  organizationName: "MuhammadMustafa7022", 
  projectName: "AI-Book", 

  onBrokenLinks: "warn",
  
  // VERCEL ERROR FIX: Naye format mein migrate kar diya
  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({filePath, fileContent}) => {
      return fileContent;
    },
    // Broken links warning fix
    anchors: {
      maintainCase: true,
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    {
      src: "https://www.chatbase.co/embed.min.js",
      // @ts-ignore
      chatbotId: "PASTE_YOUR_ID_HERE", 
      domain: "www.chatbase.co",
      defer: true,
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Agar aapke docs kisi folder ke andar hain toh yahan path sahi karein
          path: 'docs', 
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "AI Humanoid Robot",
      logo: {
        alt: "AI book",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/MuhammadMustafa7022",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro", // Isko confirm karein ke intro.md file docs folder mein ho
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/muhammad-mustafa-a64838294/",
            },
            {
              label: "GitHub",
              href: "https://github.com/MuhammadMustafa7022",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;