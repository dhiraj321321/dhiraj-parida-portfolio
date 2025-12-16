export const site = {
    name: "Dhiraj Parida",
    domain: "dhiraj-parida.vercel.app",
    email: "paridadhiraj20@gmail.com",
    phone: "+91 8625977324",
    linkedin: "https://www.linkedin.com/in/dhiraj-parida-b44b98237/",
    github: "https://github.com/dhiraj321321",
    headline: "Java Developer • Spring Boot • REST APIs • Scalable Backend Systems",
    about:
        "Java Developer focused on building full‑stack, scalable applications using Java, Spring Boot, ReactJS, and SQL.",
};

export const skills = {
    proficient: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "REST APIs", level: 85 },
        { name: "JDBC", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "ReactJS", level: 70 },
    ],
    familiar: [
        { name: "HTML", level: 65 },
        { name: "CSS", level: 60 },
        { name: "JavaScript", level: 60 },
        { name: "Python", level: 55 },
        { name: "OpenCV", level: 55 },
    ],
};


export const internships = [
    { title: "Java Development Intern — Codetech IT Solutions", meta: "Jan 2025 – Feb 2025" },
    { title: "Java Development Intern — Sampurv Technologies", meta: "Jun 2022 – Aug 2022" },
    { title: "Java Development Intern — AB INFOTECH Solutions", meta: "Pursuing" },
];

export const education = [
    { title: "B.Tech in CSE (AIML) — G H Raisoni College of Engineering, Nagpur", meta: "2022–Present • CGPA: 8.06" },
    { title: "Diploma in Computer Science — G H Raisoni Institute, Nagpur", meta: "2019–2022 • 82%" },
    { title: "Class X — Regent High School (State Board)", meta: "2020 • 81%" },
];

export type PortfolioProject = {
    name: string;
    repo: string;
    stack: string[];
    bullets: string[];
    logo?: string; // from /public
};

export const projects: PortfolioProject[] = [
    {
        name: "Railway Reservation System (Full Stack)",
        repo: "https://github.com/dhiraj321321/Railway_reservation_System_Full_Stack",
        stack: ["ReactJS", "Spring Boot", "PostgreSQL"],
        bullets: ["Live seat availability", "Booking + PNR generation", "Cancellation workflow"],
        logo: "/logo-railway.png",
    },
    {
        name: "MedGen (Android Medicine App)",
        repo: "https://github.com/dhiraj321321/MEDGEN_Android_Application_for_Generic_Medicine",
        stack: ["Android", "Firebase"],
        bullets: ["Medicine purchase + appointments", "Reminders", "Resell unused medicines (75% MRP)"],
        logo: "/logo-medgen.png",
    },
    {
        name: "Electricity Billing System",
        repo: "https://github.com/dhiraj321321/Electric_billing_system_using_springboot_jsp_postgresSql",
        stack: ["Spring Boot", "JSP", "PostgreSQL"],
        bullets: ["Authentication", "Unit-based bill calculation", "Billing history + admin dashboard"],
        logo: "/logo-electricity.png",
    },
    {
        name: "Face Detection System",
        repo: "https://github.com/dhiraj321321/Face-Detection-System",
        stack: ["Java", "OpenCV", "PostgreSQL"],
        bullets: ["Real-time detection", "Logs/metadata storage", "Optimized for lighting conditions"],
        logo: "/logo-facedetect.png",
    },
    {
        name: "Online Survey System",
        repo: "https://github.com/dhiraj321321/Online_Survey_System_java",
        stack: ["Java", "JSP", "Servlets", "PostgreSQL", "Tomcat"],
        bullets: ["Secure authentication", "Role-based access", "Survey analytics"],
        logo: "/logo-survey.png",
    },
];

export const moreProjects: PortfolioProject[] = [
    {
        name: "CRM System",
        repo: "https://github.com/dhiraj321321/Consumer_Relationship_Management_system",
        stack: ["Java"],
        bullets: ["Customer relationship management project."],
        logo: "/logo-crm.png",
    },
    {
        name: "WordCount Studio",
        repo: "https://github.com/dhiraj321321/WordCount_Studio",
        stack: ["Java"],
        bullets: ["Word count and text analysis tool."],
        logo: "/logo-wordcount.png",
    },
    {
        name: "Visualization Software (Java)",
        repo: "https://github.com/dhiraj321321/visualizationsoftware_JAVA",
        stack: ["Java"],
        bullets: ["Visualization utilities and charts."],
        logo: "/logo-visual.png",
    },
];
