import { Github, Linkedin, Mail, MapPin, Smartphone, Code, Server, Database, Cloud, Award } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/jerinsamj', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/jerinsam', icon: Linkedin },
];

export const contactInfo = [
    { label: 'Email', value: 'jerinsamjames1998@gmail.com', icon: Mail },
    { label: 'Phone', value: '3658886814', icon: Smartphone },
    { label: 'Location', value: 'Canada', icon: MapPin },
]

export const skills = [
  {
    category: 'Frontend',
    icon: Code,
    technologies: [
      { name: 'React & Next.js', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 98 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js & Express', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C#', level: 78 },
      { name: 'Python', level: 88 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'Firebase', level: 90 },
    ],
  },
  {
    category: 'Cloud & Platform',
    icon: Cloud,
    technologies: [
      { name: 'Azure', level: 88 },
      { name: 'Power Platform', level: 92 },
      { name: 'SharePoint', level: 85 },
      { name: 'Google Cloud Platform', level: 85 },
    ],
  },
];

export const experience = [
    {
        role: 'Information System Administrator',
        company: 'CyberTech',
        period: 'Recent',
        description: 'Managed Azure Cloud infrastructure, including Entra ID, governance, network zoning, and virtual machines to ensure secure and scalable operations. Implemented workflow automation and data visualization using Microsoft tools.',
    },
    {
        role: 'Project Lead',
        company: 'City of Hamilton',
        period: 'Past',
        description: 'Led key projects such as a custom ticketing system, internal data access app, and performance dashboards. Utilized Power Automate, SharePoint, Power BI, and custom code (C#, JS, HTML/CSS) to streamline workflows.',
    },
];

export const certifications = [
    {
        name: 'PL-300 Microsoft Power BI Data Analyst',
        icon: Award,
    },
    {
        name: 'DP-600 Microsoft Fabric Analytics Engineer',
        icon: Award,
    }
]

export const portfolioProjects = [
    {
        name: 'Portfolio Website',
        image: 'https://placehold.co/600x400.png',
        hint: 'personal website',
        githubUrl: 'https://github.com/jerinsamj/jerinsamj.github.io',
        liveUrl: 'https://jerinsamj.github.io/Resume/',
    },
    {
        name: 'Automated Timetable Generator',
        image: 'https://placehold.co/600x400.png',
        hint: 'schedule planner',
        githubUrl: 'https://github.com/jerinsamj/automated-timetable-generator',
        liveUrl: '#',
    },
    {
        name: 'Stock Price Prediction',
        image: 'https://placehold.co/600x400.png',
        hint: 'finance forecast',
        githubUrl: 'https://github.com/jerinsamj/Stock-Price-Prediction',
        liveUrl: '#',
    },
    {
        name: 'Water Potability Prediction',
        image: 'https://placehold.co/600x400.png',
        hint: 'water quality',
        githubUrl: 'https://github.com/jerinsamj/Water-Potability-Prediction',
        liveUrl: '#',
    },
];

export const testimonials = [
    {
        quote: "Jerin is a very dedicated and hard-working person. He is a great team player and always willing to help others. I wish him all the best for his future endeavors.",
        author: 'Aysha S',
        title: 'Project Collaborator',
        avatar: 'https://placehold.co/100x100.png',
        hint: 'woman portrait',
    },
    {
        quote: "Jerin is a person who is ready to take up any challenge. He is a great learner and has a great potential to grow. I wish him all the best for his future.",
        author: 'Aleena T',
        title: 'Project Collaborator',
        avatar: 'https://placehold.co/100x100.png',
        hint: 'professional woman',
    },
    {
        quote: "His ability to tackle complex problems with elegant solutions is impressive. Jerin is a valuable asset to any engineering team.",
        author: 'Emily White',
        title: 'CTO, Creative Web Agency',
        avatar: 'https://placehold.co/100x100.png',
        hint: 'professional headshot',
    },
];
