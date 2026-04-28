import type { TechLayer, ProjectCardType } from "./utils";

export const headerLinkData = [
    {
        "title": "Home",
        "target": "home",
    },
    {
        "title": "About",
        "target": "aboutme",
    },
    {
        "title": "Expertise",
        "target": "expertise",
    },
    {
        "title": "Services",
        "target": "services",
    },
    {
        "title": "Projects",
        "target": "projects",
    },
    {
        "title": "Testimonials",
        "target": "testimonials",
    },
    {
        "title": "Contact",
        "target": "contact",
    },
];

export const serviceData = [
    {
        "title": "Web Development",
        "description": "Production web apps end-to-end — clean UI, solid performance, sensible architecture across React, Next.js, Symfony, and Laravel.",
        "imgSrc": "/images/webp/services/web.webp"
    },
    {
        "title": "Database Management",
        "description": "Schema design, query tuning, and reliable backups for MySQL and PostgreSQL — built to stay fast as your data grows.",
        "imgSrc": "/images/webp/services/database.webp"
    },
    {
        "title": "Deployment & DevOps",
        "description": "CI/CD pipelines, Docker containers, and AWS deployments wired up so releases stop being a Friday afternoon problem.",
        "imgSrc": "/images/webp/services/deploy.webp"
    },
    {
        "title": "Performance Optimization",
        "description": "Caching, query indexes, and frontend cleanup. Concrete past wins — 40% app perf gain, PageSpeed 70 → 90+.",
        "imgSrc": "/images/webp/services/performance.webp"
    },
    {
        "title": "Cloud Storage Integration",
        "description": "Secure S3 uploads with presigned URLs and visibility controls — built for media-heavy apps without runaway costs.",
        "imgSrc": "/images/webp/services/cloud.webp"
    },
    {
        "title": "API Development",
        "description": "REST APIs in Symfony or Next.js — auth, third-party integrations, and error handling that holds up in production.",
        "imgSrc": "/images/webp/services/api.webp"
    },
];

export const socialData = [
    {
        "title": "mail",
        "url": "mailto:dev.jymarkb@gmail.com",
        "icon": "mail"
    },
    {
        "title": "github",
        "url": "https://github.com/jymarkb",
        "icon": "github"
    },
    {
        "title": "linkedin",
        "url": "https://www.linkedin.com/in/jaymark-borja/",
        "icon": "linkedin"
    },
    // {
    //     "title": "Leetcode",
    //     "url": "https://leetcode.com/u/jymarkb/",
    //     "imgSrc": "/images/svg/leetcode.svg"
    // },
    // {
    //     "title": "Leetcode",
    //     "url": "https://www.hackerrank.com/profile/jymark_borja",
    //     "imgSrc": "/images/svg/hackerrank.svg"
    // },
];

export const workData = [
    {
        "title": "Landing Page",
        "imgSrc": "/images/work/blog/s-blog-1.webp"
    },
    {
        "title": "About Page",
        "imgSrc": "/images/work/blog/s-blog-2.webp"
    },
    {
        "title": "Blog Page",
        "imgSrc": "/images/work/blog/s-blog-3.webp"
    },
    {
        "title": "Contact Page",
        "imgSrc": "/images/work/blog/s-blog-4.webp"
    },
    {
        "title": "Blog Edit Page",
        "imgSrc": "/images/work/blog/s-blog-5.webp"
    },
];

export const aboutMeSocial = [
    {
        "data": "4 years",
        "title": "Experience",
        "icon": "briefcase",
        "target": ""
    },
    {
        "data": "in/jaymark-borja",
        "title": "Linkedin",
        "icon": "linkedin",
        "target": "https://www.linkedin.com/in/jaymark-borja/"
    },
    {
        "data": "github.com/jymarkb",
        "title": "Github",
        "icon": "github",
        "target": "https://github.com/jymarkb"
    },
    {
        "data": "dev.jymarkb@gmail.com",
        "title": "Email",
        "icon": "mail",
        "target": "dev.jymarkb@gmail.com"
    },
];

export const aboutMeDescription = [
    {
        "sentence": "I'm a results-driven developer building scalable, high-performance web applications from concept to deployment with modern best practices."
    },
    {
        "sentence": "With over four years of professional experience across the full stack, I've delivered production-ready features that hold up under real load."
    },
    {
        "sentence": "I specialize in reusable, responsive UI components and contribute to backend systems, APIs, and architectural decisions that scale."
    },
];

// Subject options for the contact form's <select> — kept in sync with serviceData titles.
export const contactSubjects: string[] = serviceData.map((s) => s.title);

export const projectCard: ProjectCardType[] = [
    // ── Currently shipping (client work) ─────────────────────────────
    {
        title: "REILink",
        description: "Full-stack real estate platform for lead generation, deal pipeline management, and investor collaboration.",
        tagline: "Real estate platform for lead generation, deal pipelines, and investor collaboration.",
        highlights: [
            "Built internal lead-messaging system and deal pipeline",
            "Shipped AI-assisted property analysis tools",
            "Integrated Auth0, GoHighLevel, Zillow / Redfin / BatchData APIs",
        ],
        tags: [
            "Symfony 7", "Preact.js", "Tailwind CSS", "MySQL", "Auth0", "Docker", "reCAPTCHA", "REST API",
        ],
        link: "https://reilink.com",
        imageSrc: "temporary.png",
        gallery: null,
        status: "live",
        kind: "company",
        role: "PHP Developer",
        company: "SEO For Real Estate Investors",
    },
    {
        title: "Apex",
        description: "Full-stack platform for automated WordPress site & page generation, powered by AI and credit-based subscriptions.",
        tagline: "Automated WordPress site and page generation, powered by AI and credit-based subscriptions.",
        highlights: [
            "AI content via Gemini, image generation via OpenAI",
            "Stripe subscriptions + one-time credit system",
            "Queue-based workers and webhook-driven delivery",
        ],
        tags: [
            "Symfony 7", "React", "Tailwind CSS", "MySQL", "Docker", "AWS", "Stripe", "Twilio", "DocuSign", "OpenAI", "Gemini",
        ],
        link: "",
        imageSrc: "temporary.png",
        gallery: null,
        status: "live",
        kind: "company",
        role: "PHP Developer",
        company: "SEO For Real Estate Investors",
    },
    {
        title: "Lamudi Real-Estate Platform",
        tagline: "Real estate marketplace serving multiple Southeast Asian markets.",
        highlights: [
            "Led Symfony 4 → 5 + PHP 8 migration onto AWS",
            "Cut server query cost ~35% with lazy-loaded map APIs",
            "Lifted PageSpeed from 70 → 90+ across key pages",
        ],
        tags: [
            "Symfony 5", "PHP 8", "Elasticsearch", "Bitbucket CI/CD", "AWS", "SEO",
        ],
        link: "https://www.lamudi.com.ph",
        imageSrc: "temporary.png",
        gallery: null,
        status: "live",
        kind: "company",
        role: "Junior Software Engineer",
        company: "Lamudi Technical Services Corp.",
    },

    // ── Selected work (personal, live) ────────────────────────────────
    {
        title: "COVID-19 Contact Tracing System",
        tagline: "Contact tracing system built for the LGU of Libmanan during COVID-19.",
        highlights: [
            "Web app for resident registration and QR ID generation",
            "Android scanner app for establishments",
            "Geographic dashboard tracking cases by barangay",
        ],
        tags: [
            "Bootstrap", "Material UI", "Android (Java)", "Laravel 7", "XAMPP", "MySQL", "JWT Auth", "Monorepo",
        ],
        link: "https://github.com/jymarkb/ContactTracing",
        imageSrc: "covid-1.webp",
        gallery: [
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/covid/s-covid-1.webp"
            },
            {
                "title": "Landing Page Image 2",
                "imgSrc": "/images/work/covid/s-covid-7.webp"
            },
            {
                "title": "Landing Page Image 3",
                "imgSrc": "/images/work/covid/s-covid-8.webp"
            },
            {
                "title": "Citizen Generated Identification Card Image",
                "imgSrc": "/images/work/covid/s-covid-2.webp"
            },
            {
                "title": "Establishment App Image 1",
                "imgSrc": "/images/work/covid/s-covid-3.webp"
            },
            {
                "title": "Establishment App Image 2",
                "imgSrc": "/images/work/covid/s-covid-4.webp"
            },
            {
                "title": "Citizen QR Scan Record",
                "imgSrc": "/images/work/covid/s-covid-6.webp"
            },
        ],
        status: "live",
        kind: "personal",
    },
    {
        title: "E-CapProLib",
        tagline: "Capstone project repository for academic institutions.",
        highlights: [
            "Document upload, search, and category-based browsing",
            "Filter projects by course and year level",
            "Built for the College of Information Criminology archive",
        ],
        tags: [
            "Bootstrap", "PHP", "MySQL", "XAMPP", "HTML", "CSS", "jQuery"
        ],
        link: "https://github.com/jymarkb/CapstoneRepo",
        imageSrc: "capstone-1.webp",
        gallery: [
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/capstone/s-capstone-1.webp"
            },
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/capstone/s-capstone-2.webp"
            },
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/capstone/s-capstone-3.webp"
            },
        ],
        status: "live",
        kind: "personal",
    },

    // ── Building now (WIP) ────────────────────────────────────────────
    {
        title: "SimpleEditor",
        tagline: "Drag-and-drop visual content editor for building web pages of any kind.",
        highlights: [
            "Structured layout primitives — rows, columns, content blocks",
            "Embedded WYSIWYG for rich text and media",
            "JSON content model for preview, persist, and re-render",
        ],
        tags: [
            "React", "TypeScript", "Slate.js", "Tailwind CSS", "Vite", "WYSIWYG", "Page Builder",
        ],
        link: "/",
        imageSrc: "temporary.png",
        gallery: null,
        status: "wip",
        kind: "personal",
    },
    {
        title: "Smart Pixel",
        tagline: "AI-powered image optimization tool with custom parameter controls.",
        highlights: [
            "Custom width, height, format, and crop parameters",
            "Cloud storage integration for delivery",
            "Laravel backend + Next.js frontend in a monorepo",
        ],
        tags: [
            "React", "TypeScript", "Laravel", "Next.js", "MySQL", "Monorepo", "AI", "Image Optimization"
        ],
        link: "/",
        imageSrc: "temporary.png",
        gallery: null,
        status: "wip",
        kind: "personal",
    },
    {
        title: "PhotoSync",
        tagline: "Mobile photo gallery aggregating images from multiple cloud accounts.",
        highlights: [
            "Connect multiple Google Drive accounts in one timeline",
            "Planned support for Apple iCloud Drive where the API allows",
            "Small Next.js web admin for account management",
        ],
        tags: [
            "React Native", "Expo", "TypeScript", "Next.js", "Google Drive API", "OAuth 2.0", "iCloud", "Multi-Account", "REST API",
        ],
        link: "/",
        imageSrc: "temporary.png",
        gallery: null,
        status: "wip",
        kind: "personal",
    },
];

export const testimonialData = [
    {
        "name": "Replace with name",
        "role": "Senior Developer",
        "company": "Company Name",
        "avatar": "",
        "linkedin": "https://www.linkedin.com/",
        "quote": "Working with Jay was a great experience. He delivers clean, well-tested code on time and is always willing to dig into problems no one else wants to touch."
    },
    {
        "name": "Replace with name",
        "role": "Tech Lead",
        "company": "Company Name",
        "avatar": "",
        "linkedin": "https://www.linkedin.com/",
        "quote": "Jay paired with me on a Symfony migration that had blocked the team for weeks. He picked up the legacy code fast, proposed a clear plan, and we shipped two sprints ahead of schedule."
    },
    {
        "name": "Replace with name",
        "role": "Product Manager",
        "company": "Company Name",
        "avatar": "",
        "linkedin": "https://www.linkedin.com/",
        "quote": "What stood out was how Jay translated vague requirements into shippable UI without endless back-and-forth. The components he built were reused across three other features."
    },
    {
        "name": "Replace with name",
        "role": "Frontend Engineer",
        "company": "Company Name",
        "avatar": "",
        "linkedin": "https://www.linkedin.com/",
        "quote": "He's reliable, communicative, and genuinely cares about code quality. Reviews from Jay always made my PRs measurably better."
    },
];

export type Testimonial = (typeof testimonialData)[number];

export const techLayers: TechLayer[] = [
    {
        id: "frontend",
        index: 1,
        title: "Frontend",
        role: "UI frameworks, styling, foundations",
        items: [
            { name: "React", icon: "react.svg" },
            { name: "Next.js", icon: "nextjs.svg", invertOnDark: true },
            { name: "TypeScript", icon: "typescript.svg" },
            { name: "Tailwind CSS", icon: "tailwind.svg" },
            { name: "shadcn/ui", icon: "shadcn.svg", invertOnDark: true },
            { name: "Material UI", icon: "material.svg" },
            { name: "Lucide", icon: "lucide.svg", invertOnLight: true },
            { name: "SASS", icon: "sass.svg" },
            { name: "Bootstrap", icon: "bootstrap.svg" },
            { name: "TinyMCE", icon: "tiny.svg", invertOnDark: true },
            { name: "jQuery", icon: "jquery.svg", invertOnDark: true },
            { name: "HTML", icon: "html.svg" },
            { name: "CSS", icon: "css.svg" },
        ],
    },
    {
        id: "backend",
        index: 2,
        title: "Backend",
        role: "Server frameworks, APIs, data",
        items: [
            { name: "Symfony 7", icon: "symfony.svg", invertOnDark: true },
            { name: "Laravel", icon: "laravel.svg" },
            { name: "Node.js", icon: "nodejs.svg" },
            { name: "PHP", icon: "php.svg" },
            { name: "WordPress", icon: "wordpress.svg" },
            { name: "Bolt CMS", icon: "bolt.svg", invertOnDark: true },
            { name: "MySQL", icon: "mysql.svg" },
            { name: "PostgreSQL", icon: "postgresql.svg", invertOnDark: true },
            { name: "Supabase", icon: "supabase.svg" },
            { name: "Prisma", icon: "prisma.svg", invertOnDark: true },
            { name: "REST API", icon: "rest.svg", invertOnDark: true },
            { name: "WhatsApp API", icon: "whatsapp.svg" },
            { name: "Twilio", icon: "twilio.svg" },
        ],
    },
    {
        id: "platform",
        index: 3,
        title: "Platform",
        role: "Containers, hosting, deployment",
        items: [
            { name: "Docker", icon: "docker.svg" },
            { name: "NGINX", icon: "nginx.svg" },
            { name: "AWS", icon: "aws.svg", invertOnDark: true },
            { name: "Vercel", icon: "vercel.svg", invertOnDark: true },
            { name: "Railway", icon: "railway.svg", invertOnDark: true },
            { name: "Koyeb", icon: "koyeb.svg", invertOnDark: true },
            { name: "Namecheap", icon: "namecheap.svg" },
        ],
    },
    {
        id: "tools",
        index: 4,
        title: "Tools",
        role: "Dev tools, environments, process",
        items: [
            { name: "Git", icon: "git.svg" },
            { name: "ESLint", icon: "eslint.svg" },
            { name: "Prettier", icon: "prettier.svg" },
            { name: "Postman", icon: "postman.svg" },
            { name: "Figma", icon: "figma.svg" },
            { name: "Jira", icon: "jira.svg" },
            { name: "OpenAI", icon: "openai.svg", invertOnDark: true },
            { name: "Gemini", icon: "gemini.svg" },
            { name: "Stripe", icon: "stripe.svg" },
            { name: "Auth0", icon: "auth0.svg" },
            { name: "DocuSign", icon: "docusign.svg" },
            { name: "reCAPTCHA", icon: "recaptcha.svg" },
            { name: "WSL 2 Linux", icon: "linux.svg", invertOnDark: true },
            { name: "Microservices", icon: "micro-services.svg", invertOnDark: true },
        ],
    },
];

export const animationGroups = [
    { classes: ["hidden-up", "hidden-down", "tech-down", "tech-up"], animation: "animate-up" },
    { classes: ["hidden-left", "hidden-right"], animation: "animate-side" },
    { classes: ["hidden-pop"], animation: "animate-pop" },
    { classes: ["hidden-left-up"], animation: "animate-left-up" },
];

export const descInfoText = "<p> I'm a web developer, experienced in building and maintaining full-stack web applications. I specialize in creating responsive, reusable UI components and contributing to robust server-side functionality. </p>";

export const animateSpan = [
    "<p>",
    "developer,",
    "building",
    "maintaining",
    "full-stack",
    "web",
    "applications.",
    "responsive,",
    "reusable",
    "UI",
    "components",
    "</p>",
];