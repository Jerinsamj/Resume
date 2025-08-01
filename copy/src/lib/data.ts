import { Github, Linkedin, Mail, Smartphone, Code, Server, Database, Cloud, Award, ShieldCheck, BarChart, ListChecks } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Jerinsamj/Projects', icon: Github },
];

export const contactInfo = [
    { label: 'Email', value: 'jerinsamjames1998@gmail.com', icon: Mail },
    { label: 'Phone', value: '365-888-6814', icon: Smartphone },
]

export const skills = [
  {
    category: 'Frontend',
    icon: Code,
    technologies: [
      { name: 'React & React Native', level: 100 },
      { name: 'HTML, CSS, JS', level: 100 },
      { name: 'UX/UI (Adobe XD, Figma)', level: 100 },
      { name: 'Tailwind CSS', level: 100 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js & Express', level: 100 },
      { name: 'Java & PHP', level: 100 },
      { name: '.NET & Apache Server', level: 100 },
      { name: 'Python', level: 100 },
      { name: 'C#', level: 100 },
      { name: 'API Development', level: 100 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL & MongoDB', level: 100 },
      { name: 'Firebase', level: 100 },
      { name: 'SQL Server Reporting', level: 100 },
      { name: 'DAX & RLS', level: 100 },
      { name: 'SharePoint', level: 100 },
    ],
  },
  {
    category: 'Cloud & Platform',
    icon: Cloud,
    technologies: [
      { name: 'Azure & GCP', level: 100 },
      { name: 'AWS & Oracle Cloud', level: 100 },
      { name: 'MS Power Platform', level: 100 },
      { name: 'Microsoft Fabric', level: 100 },
      { name: 'ArcGIS', level: 100 },
      { name: 'Power Automate', level: 100 },
    ],
  },
  {
    category: 'Business Intelligence',
    icon: BarChart,
    technologies: [
        { name: 'Power BI', level: 100 },
        { name: 'Data Visualization', level: 100 },
        { name: 'SAP', level: 100 },
    ],
  },
  {
    category: 'Security & Forensics',
    icon: ShieldCheck,
    technologies: [
        { name: 'Cybersecurity (CISCO, ISC2)', level: 100 },
        { name: 'Computer Forensics', level: 100 },
        { name: 'Network Security', level: 100 },
    ],
  },
  {
    category: 'Project Management',
    icon: ListChecks,
    technologies: [
        { name: 'Agile & Scrum', level: 100 },
        { name: 'Project Lifecycle Management', level: 100 },
    ],
  }
];

export const experience = [
    {
        role: 'Environmental Quality and Compliance Technologist',
        company: 'City of Hamilton, Public Works (Full-time)',
        period: '05/2023 - 10/2023',
        description: 'Developed and automated internal systems using Microsoft Power Platform, Power Automate, SharePoint, Power BI, and Planner. Built a custom ticketing system for streamlined service request management with real-time notifications and automated workflows. Created a responsive internal app enabling secure, cross-platform data uploads and automated task assignments via Planner and Outlook.',
    },
    {
        role: 'Assistant Manager',
        company: 'Econo (Part-time 20hrs/week)',
        period: '01/2019 - 05/2019',
        description: 'Supervised day-to-day operations to meet performance, quality and service expectations. Monitored cash intake and deposit records, increasing accuracy, and reducing discrepancies. Opened and closed location and monitored shift changes to uphold successful operations strategies and maximize business success.',
    },
    {
        role: 'Information System Administrator/Manager',
        company: 'CyberTech (Full-time)',
        period: '04/2014 - 12/2017',
        description: 'Worked with programming languages and Microsoft applications such as SharePoint, Power Platform, Power BI, and Power Automate for data visualization and workflow automation. Administered and managed Azure Cloud services, including Entra ID, governance, virtual machines, network zoning, and resource provisioning to support secure and scalable infrastructure. Diagnosed and resolved hardware, software, network, and server issues across hybrid environments.',
    },
];

export const education = [
    {
        degree: 'Diploma in Software System Developer: Computer Science',
        institution: 'Mohawk College of Applied Arts and Technology, Hamilton, ON',
        period: '01/2018 - 12/2023',
    }
]

export const certifications = [
    { name: 'PL-300 Microsoft Power BI Data Analyst', icon: Award },
    { name: 'DP-100 Microsoft Certified: Azure Data Scientist', icon: Award },
    { name: 'Computer Forensics', icon: Award },
    { name: 'Oracle Cloud Infrastructure Multicloud Architect Associate', icon: Award },
    { name: 'CISCO Cybersecurity Operations Specialization', icon: Award },
    { name: 'Google UX/UI Designing Professional Certificate', icon: Award },
    { name: 'Microsoft Azure Administrator', icon: Award },
    { name: 'SAP Technology Consultant', icon: Award },
    { name: 'Cybersecurity Professional Certificate ISC2', icon: Award },
    { name: 'DP-600 Microsoft Fabric Analytics Engineer', icon: Award },
    { name: 'DP-700 Microsoft Certified: Fabric Data Engineer', icon: Award },
    { name: 'AWS Cloud Certificate', icon: Award },
    { name: 'Adobe Graphic Designer Certificate', icon: Award },
    { name: 'Microsoft Azure Cloud Certificate', icon: Award },
    { name: 'Microsoft Project Management Certificate', icon: Award },
    { name: 'Geographic Information Systems (GIS) Specialization', icon: Award },
    { name: 'Front-End and Back-End Developer', icon: Award },
];

export const portfolioProjects = [
    {
        name: 'Old Portfolio',
        image: 'https://placehold.co/600x400.png',
        hint: 'retro portfolio',
        liveUrl: 'https://jerinsamj.github.io/Resume/oldportfolio',
    },
];
