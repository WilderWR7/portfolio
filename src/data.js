export const portfolioData = {
  personal: {
    greeting: "¡Hola! 👋, mi nombre es",
    name: "Wilder Mayta Machicado",
    role: "Desarrollador Web Full Stack",
    tagline: "Desarrollador Full Stack / Backend con fuerte enfoque en la lógica del lado del servidor, resolución de problemas complejos y contenedores Docker.",
    status: "Disponible para Trabajar",
    avatar: "assets/developer.png",
    resumeUrl: "#",
    socials: [
      { name: "GitHub", url: "https://github.com/WilderWR7", icon: "github" }
    ]
  },
  about: {
    title: "Sobre Mí",
    description: "Desarrollador Web Full Stack con más de 2 años de experiencia en el diseño, mantenimiento y optimización de aplicaciones web escalables para clientes internacionales. Utilizando tecnologías como: JavaScript/TypeScript (React, Next.js, NestJS) y PHP (Laravel), con fuerte enfoque en la lógica del lado del servidor (backend) y resolución de problemas complejos.\n\nExperiencia práctica trabajando con arquitecturas basadas en contenedores (Docker) e integrando servicios en la nube (AWS). Busco aportar mis habilidades técnicas en un equipo dinámico, creando soluciones eficientes y estables.",
    stats: [
      { label: "Años de Experiencia", value: "2+" },
      { label: "Proyectos Corporativos", value: "3" },
      { label: "Educación", value: "UMSA" }
    ]
  },
  skills: [
    { name: "JavaScript / TypeScript", percentage: 90, color: "#F7DF1E" },
    { name: "React / Next.js", percentage: 85, color: "#61DAFB" },
    { name: "NestJS / Node.js", percentage: 80, color: "#E0234E" },
    { name: "PHP / Laravel", percentage: 85, color: "#FF2D20" },
    { name: "Docker / AWS", percentage: 75, color: "#2496ED" },
    { name: "SQL & C#", percentage: 70, color: "#239120" }
  ],
  projects: [
    {
      id: "ecommerce",
      title: "SaaS Inventory",
      category: "Full Stack",
      description: "Este completo sistema ERP integra un backend en NestJS y TypeScript con una interfaz interactiva en React, permitiendo gestionar en tiempo real inventarios, ventas, compras, caja, sucursales, facturación, analíticas avanzadas y accesos de diversos usuarios.",
      tags: ["React", "NestJS", "PostgreSQL", "Docker"],
      image: "assets/ecommerce.png",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: "gestion-deportiva",
      title: "Plataforma Web de Gestión Deportiva (Proyecto de Grado)",
      category: "Full Stack",
      description: "Desarrollé una aplicación full-stack desde cero para la administración de campeonatos, abarcando el diseño de la base de datos, backend y frontend. Construí un microservicio de reconocimiento de huellas dactilares para autenticación segura e implementé toda la arquitectura utilizando contenedores.",
      tags: ["Next.js", "NestJS", ".NET Framework", "PostgreSQL", "Docker"],
      image: "assets/taskmanager.png",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ],
  experience: [
    {
      period: "Diciembre 2023 - Marzo 2026",
      role: "Desarrollador Full Stack / Backend",
      company: "BTSOFT",
      description: "Asignado a múltiples proyectos de gran escala para clientes internacionales (Open Mundo, Open English Junior y Serena & Lily). Soporte a plataformas de producción, resolución de problemas críticos en producción, desarrollo de nuevas características backend e integración de servicios en la nube (AWS) y bases de datos."
    }
  ],
  education: [
    {
      degree: "Licenciado en Informática",
      institution: "Universidad Mayor de San Andrés (UMSA)",
      period: "Graduado en 2024"
    }
  ],
  certifications: [
    {
      name: "Desarrollo Web Completo con html5, css3, js ajax php y mysql",
      platform: "Udemy"
    },
    {
      name: "React: De cero a experto ( Hooks y MERN )",
      platform: "Udemy"
    },
    {
      name: "React Native: Aplicaciones nativas para IOS y Android",
      platform: "Udemy"
    },
    {
      name: "Next.js: El framework de React para producción",
      platform: "Udemy"
    },
    {
      name: "Nest: Desarrollo backend escalable con Node",
      platform: "Udemy"
    },
    {
      name: "Fundamentos del desarrollo web: Full Stack o Front-end",
      platform: "LinkedIn"
    }
  ],
  contact: {
    email: "wilder.mayta91@gmail.com",
    location: "La Paz - Bolivia",
    availability: "Disponible para integrarse a equipos dinámicos y proyectos desafiantes."
  }
};
