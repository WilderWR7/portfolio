import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { MainSection } from "./components/sections/main-section/main-section";
import { Project } from './interfaces/project.interface';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, MainSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Wilder Mayta';
  projects: Project[] = [
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
