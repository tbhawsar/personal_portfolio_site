import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Tilak",
  lastName: "Bhawsar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "tilakbhavsar64@gmail.com",
  phone: "+447490418586",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tbhawsar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tilakb/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering a better world with code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">RAG API Project</strong></>,
    href: "/work/rag_api_project",
  },
  subline: (
    <>
      I'm Tilak, a software engineer building intelligent systems that leverage AI, bridging software & business for solving the biggest problems faced by society.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tilak is an AI-Focused Software Engineer with a background in developing automation pipelines, data transformation
        workflows, and backend services in Python. Strongly motivated to build production-grade AI systems that integrate
        Large Language Models (LLMs) into real-world workflows. Currently focused on hands-on projects using LangChain,
        retrieval-augmented generation (RAG), and vector database integrations to design and orchestrate agentic AI
        solutions. Holds a First-Class MEng and proven track record of delivering solutions in regulated environments while
        rapidly learning new technologies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "AtkinsRéalis",
        timeframe: "Jul 2022 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Initially contributed as a Mechanical Engineer designing components in Siemens NX before transitioning to software engineering through self-directed learning.
          </>,
          <>
            Developed a Python-based tool for automated data extraction from PDF documents, improving efficiency by 30% and reducing manual effort by 50%.
          </>,
          <>
            Developed backend data processing scripts in Python/Shell to transform structured and unstructured data sources into usable formats for analysis and automation.
          </>,
          <>
            Developed and debugged complex systems engineering models in Simulink for high-integrity software projects serving major international clients (including defence and engineering companies).
          </>,
          <>
            Extensively used Git for source control and Atlassian Bitbucket, Jira and Confluence for Agile sprints.
          </>,
          <>
            Wrote production code in Python and MATLAB and debugged complex, high-integrity code in Ada.
          </>,
          <>
            Also Line Mangager of a team of 7 engineers and Key Account Manager of a major client portfolio (£10m+)
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Loughborough University",
        description: <>Aeronautical Engineering (MEng) - First Class Honours.</>,
      },
      {
        name: "Wyggeston and Queen Elizabeth I College, Leicester",
        description: <>Three A-Levels: Maths (A), Physics (A), Economics (A).</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: ".",
        description: <>.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: ".",
        description: <>.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const skills = {
  path: "/skills",
  label: "Skills",
  title: "Key Skills",
  description: "A summary of my core technical and professional skills, including AI, software engineering, and more.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  skills: [
    {
      title: "AI & Machine Learning",
      description: [
        "LLMs & Prompt Engineering: OpenAI APIs, LangChain, LangGraph, RAG, Stable Diffusion, MidJourney",
        "Agentic AI Systems: Design and orchestration of multi-agent systems (e.g. Jiva AI), history-aware pipelines",
        "Embedding Search & Vector Databases: FAISS, Pinecone, semantic retrieval",
        "Data Processing: Structured and unstructured data (JSON, CSV, PDF), text extraction, metadata parsing",
        "ML Tools & Frameworks: TensorFlow (basic experience), Power BI (data visualization)"
      ],
    },
    {
      title: "Backend Development",
      description: [
        "Languages: Python (production-level), JavaScript, Shell scripting, Rust (basic)",
        "API Development & Integration: FastAPI, RESTful services",
        "File & System Ops: Linux/Unix environments, CLI tooling, automation scripts",
        "Data Handling: Data ingestion, transformation, and storage"
      ],
    },
    {
      title: "Frontend & UI/UX",
      description: [
        "Technologies: React.js, Flutter (Dart)",
        "Design Tools: Figma, UI/UX Design Principles",
        "Interface Building: Interactive web components, Streamlit, responsive layouts"
      ],
    },
    {
      title: "Cloud, Containers & DevOps",
      description: [
        "Cloud: Experience with AWS EC2, and cloud deployments",
        "Containers & Deployment: Docker, Docker Compose, containerized environments",
        "CI/CD & Versioning: Git, GitHub Actions, Bitbucket Pipelines"
      ],
    },
    {
      title: "Agile, Testing & Delivery",
      description: [
        "Agile Methodology: Scrum, sprint planning, delivery tracking",
        "Testing Certifications: ISTQB Foundation + Agile Extension",
        "Project Delivery: Requirements gathering/writing (IBM DOORS), stakeholder alignment",
        "Collaboration Tools: Jira, Confluence, Bitbucket"
      ],
    },
    {
      title: "Leadership & Communication",
      description: [
        "Team & People Management: Line management (7+ engineers), coaching, mentorship",
        "Key Account Management: Direct client relationship building and business development",
        "Soft Skills: Clear communicator, growth mindset, strong problem-solver, entrepreneurial attitude"
      ],
    },
    {
      title: "Engineering & CAD/CAE",
      description: [
        "CAD Experience: Siemens NX, SolidWorks – full lifecycle design of complex mechanical systems",
        "Simulation Familiarity: Exposure to CAD-integrated simulation and modeling workflows"
      ],
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, skills };
