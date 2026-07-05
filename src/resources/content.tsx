import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// TODO: Replace with Devthon Labs blue gradient "d/l" monogram mark once logo file is attached
const person: Person = {
  firstName: "Devthon",
  lastName: "Labs",
  name: "Devthon Labs",
  role: "Web & App Development Studio",
  avatar: "/on-dark-logo.svg",
  email: "abdul.rehman.rumitarar@gmail.com",
  location: "Lahore, Pakistan",
  languages: ["Urdu", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false, // Disabled for now as Devthon Labs is a newly starting studio
  title: <>Subscribe to Devthon Labs Newsletter</>,
  description: <>Latest insights on web engineering, AI agents, and local business growth</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/108185215/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/web.entertain/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Web & App Development Studio`,
  description: `Web and app development studio — from custom full-stack builds to simple, fast websites for local businesses`,
  headline: <>Engineering Ideas Into Scalable Tech</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Demo HMS
        </Text>
      </Row>
    ),
    href: "/work/demo-hms",
  },
  subline: (
    <>
      Web and app development studio — from custom full-stack builds to simple, fast websites for local businesses and small teams.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, founder of Devthon Labs`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Devthon Labs is a founder-led web development studio building two things: production-grade web applications, and simple, fast websites for local service businesses that have strong reputations but no online presence. We work hands-on, with no agency overhead and no long onboarding — a demo-first approach where you see the actual site before deciding anything.
      </>
    ),
  },
  work: {
    display: true,
    title: "Founder's Background",
    experiences: [
      {
        company: "Consolices",
        timeframe: "Jul 2025 – Present",
        role: "Web Application Developer",
        achievements: [
          <>
            Build and maintain client web applications, integrating modern frontend capabilities and scalable backend structures.
          </>,
          <>
            Integrate third-party RESTful APIs and custom services to optimize workflow and performance.
          </>,
          <>
            Optimize frontend code and database schemas to improve load times and application responsiveness.
          </>,
        ],
        images: [],
      },
      {
        company: "Hashlogics",
        timeframe: "Sep 2024 – Jun 2025",
        role: "Web Application Developer",
        achievements: [
          <>
            Built custom plugins, workflows, and database integrations for Bubble.io applications to extend platform features.
          </>,
          <>
            Designed complex application data schemas and implemented secure, robust web APIs.
          </>,
        ],
        images: [],
      },
      {
        company: "Boson Studio",
        timeframe: "Aug 2023 – Nov 2023",
        role: "Web Developer Intern",
        achievements: [
          <>
            Assisted in building web applications from scratch, using Angular for client interfaces and Node.js for backend services.
          </>,
          <>
            Supported developers in designing RESTful APIs and drafting project technical documentation.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Education & Background",
    institutions: [
      {
        name: "University of Gujarat (UOG)",
        description: <>BS in Computer Science. Fluent in Urdu and English, with 10+ successfully completed projects and 2 professional certifications.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: <>Expertise in building clean, responsive interfaces with modern frameworks:</>,
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Angular", icon: "angular" },
          { name: "React.js", icon: "react" },
          { name: "HTML/CSS", icon: "html5" },
          { name: "Next.js", icon: "nextjs" },
        ],
      },
      {
        title: "Backend",
        description: <>Designing secure, database-backed architectures and APIs:</>,
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "Supabase", icon: "supabase" },
          { name: "SQL", icon: "mysql" },
          { name: "Java/C#", icon: "java" },
        ],
      },
      {
        title: "Tools & platforms",
        description: <>Leveraging low-code, integration suites, AI capabilities, and source control:</>,
        tags: [
          { name: "Bubble.io" },
          { name: "n8n" },
          { name: "AI Agents" },
          { name: "OpenAI API" },
          { name: "Git/GitHub", icon: "github" },
        ],
      },
      {
        title: "Core",
        description: <>Foundational engineering principles and collaboration habits:</>,
        tags: [
          { name: "Problem-solving" },
          { name: "API integration" },
          { name: "Documentation" },
        ],
      },
    ],
  },
};

const studioStats = [
  { value: "2+ years", label: "Production experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Companies/teams worked with" },
  { value: "2", label: "Core service lines" },
];

const studioCapabilities = [
  {
    title: "Custom Web Application Development",
    description: "React, Angular, Node.js, Next.js, API and AI agent integration, Bubble.io plugin development. Designed for teams needing full production applications."
  },
  {
    title: "Local Business Websites",
    description: "Fast, simple sites for barbershops, salons, florists, wedding vendors, and small trades. Offered in starter ($200-400) or full site ($600-1,000) tiers."
  }
];

const studioPrinciples = [
  {
    title: "Demo-first",
    description: "We build before we pitch, so you see the real thing before deciding."
  },
  {
    title: "Flat, honest pricing",
    description: "Clear project tiers and fixed pricing—no surprise invoices or hidden fees."
  },
  {
    title: "Fast turnaround",
    description: "We deliver simple sites and applications in days, not months."
  },
  {
    title: "Direct communication",
    description: "Work directly with the builder. No account managers, no middlemen."
  }
];

const founderNote = "Devthon Labs is led by Abdul Rehman, a full-stack developer based in Karachi with hands-on experience at Consolices, Hashlogics, and Boson Studio before founding the studio.";

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Devthon Labs Tech Blog",
  description: `Tech writing and updates from ${person.name} about full-stack engineering and development.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Web engineering and design projects completed by Devthon Labs.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Studio Gallery — Devthon Labs`,
  description: `Visual glimpses into Devthon Labs projects and workflow.`,
  images: [], // Left empty placeholder as requested
};

export { person, social, newsletter, home, about, blog, work, gallery, studioStats, studioCapabilities, studioPrinciples, founderNote };
