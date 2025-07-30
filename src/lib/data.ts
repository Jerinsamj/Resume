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
    { label: 'Email', value: 'jerin.sam@email.com', icon: Mail },
    { label: 'Phone', value: '+1 (555) 123-4567', icon: Smartphone },
    { label: 'Location', value: 'San Francisco, CA', icon: MapPin },
]

export const skills = [
  {
    category: 'Frontend',
    icon: Code,
    technologies: [
      { name: 'React & Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 98 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js & Express', level: 85 },
      { name: 'Python & Django', level: 70 },
      { name: 'GraphQL', level: 80 },
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
        role: 'Senior Software Engineer',
        company: 'Innovatech Solutions',
        period: '2020 - Present',
        description: 'Led the development of a scalable microservices architecture for a new fintech platform. Mentored junior developers and improved code quality through CI/CD pipelines and automated testing.',
    },
    {
        role: 'Software Engineer',
        company: 'Data Dynamics Corp.',
        period: '2018 - 2020',
        description: 'Developed and maintained data-intensive applications using React and Python. Contributed to a 20% improvement in application performance by optimizing database queries and frontend rendering.',
    },
    {
        role: 'Junior Web Developer',
        company: 'Creative Web Agency',
        period: '2016 - 2018',
        description: 'Built responsive websites for various clients using HTML, CSS, and JavaScript. Collaborated with designers to translate mockups into functional and visually appealing web pages.',
    },
];

export const portfolioProjects = [
    {
        name: 'E-commerce Platform',
        image: 'https://placehold.co/600x400.png',
        hint: 'online store',
        githubUrl: 'https://github.com',
        liveUrl: '#',
    },
    {
        name: 'Project Management Tool',
        image: 'https://placehold.co/600x400.png',
        hint: 'team collaboration',
        githubUrl: 'https://github.com',
        liveUrl: '#',
    },
    {
        name: 'Personal Blog Engine',
        image: 'https://placehold.co/600x400.png',
        hint: 'writer journal',
        githubUrl: 'https://github.com',
        liveUrl: '#',
    },
    {
        name: 'Data Visualization Dashboard',
        image: 'https://placehold.co/600x400.png',
        hint: 'analytics charts',
        githubUrl: 'https://github.com',
        liveUrl: '#',
    },
];

export const testimonials = [
    {
        quote: "Jerin is an exceptional engineer who brings not only technical expertise but also a creative and collaborative spirit to the team. His work has been pivotal to our success.",
        author: 'Jane Doe',
        title: 'Project Manager, Innovatech',
        avatar: 'https://placehold.co/100x100.png',
        hint: 'woman portrait',
    },
    {
        quote: "Working with Jerin was a pleasure. He is a detail-oriented developer who consistently delivers high-quality, clean, and maintainable code. Highly recommended.",
        author: 'John Smith',
        title: 'Lead Designer, Data Dynamics',
        avatar: 'https://placehold.co/100x100.png',
        hint: 'man smiling',
    },
    {
        quote: "His ability to tackle complex problems with elegant solutions is impressive. Jerin is a valuable asset to any engineering team.",
        author: 'Emily White',
        title: 'CTO, Creative Web Agency',
        avatar: 'https://placehold.co/100x100.png',
        hint: 'professional headshot',
    },
];
