import { Github, Linkedin, Mail, MapPin, Smartphone, Code, Server, Database, Cloud } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/jerinsamj', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/jerinsam', icon: Linkedin },
];

export const contactInfo = [
    { label: 'Email', value: 'jerinsam.j@email.com', icon: Mail },
    { label: 'Phone', value: '+1 (555) 123-4567', icon: Smartphone },
    { label: 'Location', value: 'San Francisco, CA', icon: MapPin },
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
      { name: 'Spring Boot', level: 75 },
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
    category: 'DevOps & Cloud',
    icon: Cloud,
    technologies: [
      { name: 'Docker', level: 80 },
      { name: 'Google Cloud Platform', level: 85 },
      { name: 'Vercel', level: 95 },
    ],
  },
];

export const experience = [
    {
        role: 'Software Engineer',
        company: 'Google',
        period: '2021 - Present',
        description: 'Developed and maintained key features for a large-scale enterprise application, improving performance and user engagement. Collaborated in an Agile environment to deliver high-quality code.',
    },
    {
        role: 'Software Engineer Intern',
        company: 'SAP',
        period: '2020 - 2021',
        description: 'Worked on the design and development of a new module for an existing HR management solution. Gained experience in full-stack development and enterprise software architecture.',
    },
];

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
