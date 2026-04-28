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
        "imgSrc": "/images/work/blog/s-blog-1.png"
    },
    {
        "title": "About Page",
        "imgSrc": "/images/work/blog/s-blog-2.png"
    },
    {
        "title": "Blog Page",
        "imgSrc": "/images/work/blog/s-blog-3.png"
    },
    {
        "title": "Contact Page",
        "imgSrc": "/images/work/blog/s-blog-4.png"
    },
    {
        "title": "Blog Edit Page",
        "imgSrc": "/images/work/blog/s-blog-5.png"
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
        description: "Full-stack real estate platform for lead generation, deal pipeline management, and investor collaboration. I shipped the internal lead-messaging system, deal pipeline, AI-assisted property tools, and integrations with Auth0 / Go High Level / third-party data (Zillow, Redfin, BatchData).",
        tags: [
            "Symfony 7", "Preact.js", "Tailwind CSS", "MySQL", "Auth0", "Docker", "reCAPTCHA", "REST APIs",
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
        description: "Full-stack platform for automated WordPress site & page generation — AI-generated content (Gemini) and images (OpenAI), Stripe-powered subscriptions and credit systems, queue-based workers, and webhook-driven delivery. Part of a broader CRM and lead-management system.",
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
        description: "Contributed to the core platform: a Symfony 4 → 5 + PHP 8 + AWS migration, a landmark-search microservice with optimized Elasticsearch indexing, lazy-loaded map APIs that cut server query cost by 35%, GA4 event tracking refactor, and SEO + perf work that lifted PageSpeed from 70 → 90+.",
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
        description: "A web and mobile-based application designed to assist in tracking and managing COVID-19 exposure. The system allows users to log check-ins, monitor potential contact events, and store health data securely. Built with Laravel 7 and Bootstrap for the web interface, and Android with Material UI for the mobile app scanner.",
        tags: [
            "Bootstrap", "Material UI", "Android (Java)", "Laravel 7", "XAMPP", "MySQL", "JWT Auth", "Monorepo",
        ],
        link: "https://github.com/jymarkb/ContactTracing",
        imageSrc: "covid-1.png",
        gallery: [
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/covid/s-covid-1.png"
            },
            {
                "title": "Landing Page Image 2",
                "imgSrc": "/images/work/covid/s-covid-7.png"
            },
            {
                "title": "Landing Page Image 3",
                "imgSrc": "/images/work/covid/s-covid-8.png"
            },
            {
                "title": "Citizen Generated Identification Card Image",
                "imgSrc": "/images/work/covid/s-covid-2.png"
            },
            {
                "title": "Establishment App Image 1",
                "imgSrc": "/images/work/covid/s-covid-3.png"
            },
            {
                "title": "Establishment App Image 2",
                "imgSrc": "/images/work/covid/s-covid-4.png"
            },
            {
                "title": "Citizen QR Scan Record",
                "imgSrc": "/images/work/covid/s-covid-6.png"
            },
        ],
        status: "live",
        kind: "personal",
    },
    {
        title: "E-CapProLib",
        description: "An online Capstone Project Repository Library designed for academic institutions to store, manage, and browse student capstone projects. Developed with PHP and MySQL, the system allows users to upload documents, search project titles, and categorize works by course and year level, with a responsive UI using Bootstrap.",
        tags: [
            "Bootstrap", "PHP", "MySQL", "XAMPP", "HTML", "CSS", "jQuery"
        ],
        link: "https://github.com/jymarkb/CapstoneRepo",
        imageSrc: "capstone-1.png",
        gallery: [
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/capstone/s-capstone-1.png"
            },
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/capstone/s-capstone-2.png"
            },
            {
                "title": "Landing Page Image 1",
                "imgSrc": "/images/work/capstone/s-capstone-3.png"
            },
        ],
        status: "live",
        kind: "personal",
    },

    // ── Building now (WIP) ────────────────────────────────────────────
    {
        title: "SimpleEditor",
        description: "A drag-and-drop visual content editor for building web pages of any kind — similar in spirit to TinyMCE or other rich-text editors, but with structured layout primitives (rows, columns, content blocks) layered on top. Live style editing, embedded WYSIWYG for rich text, and a flexible JSON content model that makes any layout easy to preview, persist, and re-render.",
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
        description: "An AI-powered image optimization tool built with a Laravel backend and a Next.js frontend. SmartPixel allows users to upload images with custom parameters (e.g., width, height, format, crop) and returns optimized results using advanced processing logic and cloud storage integration.",
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
        description: "A mobile photo gallery that pulls images from multiple cloud accounts into one searchable timeline. Users connect several Google accounts on the device to browse photos from each Drive in one place — with planned support for Apple iCloud Drive where the API allows. A small web admin panel handles account management and usage oversight.",
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
        "quote": "Reliable, communicative, and genuinely cares about code quality. Reviews from Jay always made my PRs measurably better."
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

export const descInfoText = "<p> I'm a web developer, experience in building and maintaining full-stack web applications. I specialize in creating responsive, reusable UI components and contributing to robust server-side functionality. </p>";

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