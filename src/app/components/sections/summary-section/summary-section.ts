import { Component } from '@angular/core';

@Component({
  selector: 'summary-section',
  imports: [],
  templateUrl: './summary-section.html',
})
export class SummarySection {
  skills = [
    { name: "JavaScript / TypeScript", percentage: 90, color: "#F7DF1E" },
    { name: "React / Next.js", percentage: 85, color: "#61DAFB" },
    { name: "NestJS / Node.js", percentage: 80, color: "#E0234E" },
    { name: "PHP / Laravel", percentage: 85, color: "#FF2D20" },
    { name: "Docker / AWS", percentage: 75, color: "#2496ED" },
    { name: "SQL & C#", percentage: 70, color: "#239120" }
  ];
  projects = [
    {
      id: "ecommerce",
      title: "SaaS Inventory",
      category: "Full Stack",
      description: "Este completo sistema ERP integra un backend en NestJS y TypeScript con una interfaz interactiva en React, permitiendo gestionar en tiempo real inventarios, ventas, compras, caja, sucursales, facturación, analíticas avanzadas y accesos de diversos usuarios.",
      tags: ["React", "NestJS", "PostgreSQL", "Docker"],
      image: "./assets/ecommerce.png",
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
      image: "./assets/taskmanager.png",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];
}
