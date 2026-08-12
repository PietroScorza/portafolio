// Centralized portfolio data for all components.

export interface TechItem {
  name: string;
  category: 'backend' | 'frontend' | 'tools';
  icon: string; // simple-icons slug
  color: string; // brand color hex
}

export interface ExperienceItem {
  company: string;
  type: string;
  role: string;
  description: string;
  tasks: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  status: string;
  period: string;
}

export const profileData = {
  name: 'Pietro Scorza',
  role: 'Estudiante de Ingeniería Informática & Desarrollador Full Stack',
  tagline: 'DAM + Ingeniería Informática',
  location: 'España',
  email: 'pietroscorzafernandez@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pietro-scorza-fernandez-b998613b5/',
  github: 'https://github.com/PietroScorza',
  status: 'Disponible para Teletrabajo / Remoto',
  objective:
    'Búsqueda activa de teletrabajo. Apasionado por seguir aprendiendo y aportar valor real creciendo dentro de una empresa.',
  bio: {
    university: 'Universidad de Zaragoza',
    currentYear: '2º curso de Ingeniería Informática',
    graduated: 'Graduado en Desarrollo de Aplicaciones Multiplataforma (DAM)',
  },
};

export const techStack: TechItem[] = [
  { name: 'SQL / T-SQL', category: 'backend', icon: 'microsoftsqlserver', color: '#CC2927' },
  { name: 'Python', category: 'backend', icon: 'python', color: '#3776AB' },
  { name: 'Django', category: 'backend', icon: 'django', color: '#092E20' },
  { name: 'PHP', category: 'backend', icon: 'php', color: '#777BB4' },
  { name: 'Laravel', category: 'backend', icon: 'laravel', color: '#FF2D20' },
  { name: '.NET', category: 'backend', icon: 'dotnet', color: '#512BD4' },
  { name: 'React', category: 'frontend', icon: 'react', color: '#61DAFB' },
  { name: 'HTML5', category: 'frontend', icon: 'html5', color: '#E34F26' },
  { name: 'CSS3', category: 'frontend', icon: 'css3', color: '#1572B6' },
  { name: 'JavaScript', category: 'frontend', icon: 'javascript', color: '#F7DF1E' },
  { name: 'WordPress', category: 'frontend', icon: 'wordpress', color: '#21759B' },
  { name: 'Git', category: 'tools', icon: 'git', color: '#F05032' },
  { name: 'GitHub', category: 'tools', icon: 'github', color: '#FFFFFF' },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Pymerarila',
    type: 'Empresa de Marketing Digital',
    role: 'Técnico Informático & Desarrollador .NET',
    description:
      'Mantenimiento web y desarrollo de soluciones en el ecosistema .NET para clientes de la agencia.',
    tasks: [
      'Desarrollo y mantenimiento de aplicaciones web en .NET',
      'Soporte técnico y resolución de incidencias',
      'Mantenimiento y optimización de sitios web de clientes',
      'Consultoría de desarrollo para proyectos digitales',
    ],
  },
  {
    company: 'Picture Perfect',
    type: 'Desarrolladora .NET',
    role: 'Desarrollador Backend',
    description:
      'Desarrollo backend robusto con .NET y gestión avanzada de bases de datos T-SQL.',
    tasks: [
      'Desarrollo de soluciones backend con .NET Framework',
      'Diseño, gestión y explotación de bases de datos T-SQL',
      'Implementación de consultas optimizadas y procedimientos almacenados',
      'Integración de APIs y servicios backend',
    ],
  },
  {
    company: 'Aerobika Fitness',
    type: 'Gimnasio',
    role: 'Desarrollador de Aplicación a Medida',
    description:
      'Participación en el proyecto de creación de una aplicación a medida para la gestión integral de usuarios del gimnasio.',
    tasks: [
      'Análisis de requisitos y diseño funcional de la aplicación',
      'Desarrollo de módulos para gestión de usuarios y suscripciones',
      'Implementación de la lógica de negocio del sistema',
      'Colaboración en equipo para la entrega del producto final',
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: 'Grado en Ingeniería Informática',
    institution: 'Universidad de Zaragoza',
    status: 'Actualmente cursando — 2º año',
    period: '2024 — Presente',
  },
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    institution: "Institut de l'Ebre",
    status: 'Graduado',
    period: '2022 — 2024',
  },
  {
    title: 'Grado Medio en Sistemas Microinformáticos y Redes (SMR)',
    institution: 'Institut Montsià',
    status: 'Graduado',
    period: '2020 — 2022',
  },
];

export const skills = {
  backend: [
    'SQL / T-SQL',
    'Python (Django)',
    'PHP (Laravel)',
    '.NET',
    'APIs REST',
    'Normalización de BD',
  ],
  frontend: [
    'React',
    'HTML5',
    'CSS3',
    'JavaScript',
    'WordPress',
    'SEO',
  ],
  tools: ['Git / GitHub', 'Consultoría .NET'],
};

export const categoryLabels: Record<string, string> = {
  all: 'Todos',
  backend: 'Backend & BD',
  frontend: 'Frontend',
  tools: 'Herramientas',
};
