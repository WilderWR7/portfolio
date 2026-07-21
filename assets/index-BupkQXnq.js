(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={personal:{greeting:`¡Hola! 👋, mi nombre es`,name:`Wilder Mayta Machicado`,role:`Desarrollador Web Full Stack`,tagline:`Desarrollador Full Stack / Backend con fuerte enfoque en la lógica del lado del servidor, resolución de problemas complejos y contenedores Docker.`,status:`Disponible para Trabajar`,avatar:`/assets/developer.png`,resumeUrl:`#`,socials:[{name:`GitHub`,url:`https://github.com/WilderWR7`,icon:`github`}]},about:{title:`Sobre Mí`,description:`Desarrollador Web Full Stack con más de 2 años de experiencia en el diseño, mantenimiento y optimización de aplicaciones web escalables para clientes internacionales. Utilizando tecnologías como: JavaScript/TypeScript (React, Next.js, NestJS) y PHP (Laravel), con fuerte enfoque en la lógica del lado del servidor (backend) y resolución de problemas complejos.

Experiencia práctica trabajando con arquitecturas basadas en contenedores (Docker) e integrando servicios en la nube (AWS). Busco aportar mis habilidades técnicas en un equipo dinámico, creando soluciones eficientes y estables.`,stats:[{label:`Años de Experiencia`,value:`2+`},{label:`Proyectos Corporativos`,value:`3`},{label:`Educación`,value:`UMSA`}]},skills:[{name:`JavaScript / TypeScript`,percentage:90,color:`#F7DF1E`},{name:`React / Next.js`,percentage:85,color:`#61DAFB`},{name:`NestJS / Node.js`,percentage:80,color:`#E0234E`},{name:`PHP / Laravel`,percentage:85,color:`#FF2D20`},{name:`Docker / AWS`,percentage:75,color:`#2496ED`},{name:`SQL & C#`,percentage:70,color:`#239120`}],projects:[{id:`ecommerce`,title:`SaaS Inventory`,category:`Full Stack`,description:`Este completo sistema ERP integra un backend en NestJS y TypeScript con una interfaz interactiva en React, permitiendo gestionar en tiempo real inventarios, ventas, compras, caja, sucursales, facturación, analíticas avanzadas y accesos de diversos usuarios.`,tags:[`React`,`NestJS`,`PostgreSQL`,`Docker`],image:`/assets/ecommerce.png`,demoUrl:`#`,githubUrl:`#`,featured:!0},{id:`gestion-deportiva`,title:`Plataforma Web de Gestión Deportiva (Proyecto de Grado)`,category:`Full Stack`,description:`Desarrollé una aplicación full-stack desde cero para la administración de campeonatos, abarcando el diseño de la base de datos, backend y frontend. Construí un microservicio de reconocimiento de huellas dactilares para autenticación segura e implementé toda la arquitectura utilizando contenedores.`,tags:[`Next.js`,`NestJS`,`.NET Framework`,`PostgreSQL`,`Docker`],image:`/assets/taskmanager.png`,demoUrl:`#`,githubUrl:`#`,featured:!0}],experience:[{period:`Diciembre 2023 - Marzo 2026`,role:`Desarrollador Full Stack / Backend`,company:`BTSOFT`,description:`Asignado a múltiples proyectos de gran escala para clientes internacionales (Open Mundo, Open English Junior y Serena & Lily). Soporte a plataformas de producción, resolución de problemas críticos en producción, desarrollo de nuevas características backend e integración de servicios en la nube (AWS) y bases de datos.`}],education:[{degree:`Licenciado en Informática`,institution:`Universidad Mayor de San Andrés (UMSA)`,period:`Graduado en 2024`}],certifications:[{name:`Desarrollo Web Completo con html5, css3, js ajax php y mysql`,platform:`Udemy`},{name:`React: De cero a experto ( Hooks y MERN )`,platform:`Udemy`},{name:`React Native: Aplicaciones nativas para IOS y Android`,platform:`Udemy`},{name:`Next.js: El framework de React para producción`,platform:`Udemy`},{name:`Nest: Desarrollo backend escalable con Node`,platform:`Udemy`},{name:`Fundamentos del desarrollo web: Full Stack o Front-end`,platform:`LinkedIn`}],contact:{email:`wilder.mayta91@gmail.com`,location:`La Paz - Bolivia`,availability:`Disponible para integrarse a equipos dinámicos y proyectos desafiantes.`}};function t(){let{personal:t,about:r,skills:i,projects:a,experience:o,education:s,certifications:c,contact:l}=e;document.getElementById(`hero-greeting`).textContent=t.greeting,document.getElementById(`hero-name`).textContent=t.name,document.getElementById(`hero-role`).textContent=t.role,document.getElementById(`hero-tagline`).textContent=t.tagline,document.getElementById(`hero-status`).textContent=t.status;let u=document.getElementById(`hero-avatar`);u&&(u.src=t.avatar);let d={github:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>`,linkedin:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.88a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66z"></path></svg>`,twitter:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`,instagram:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>`},f=document.getElementById(`hero-socials`);f&&(f.innerHTML=t.socials.map(e=>`
      <a href="${e.url}" target="_blank" rel="noopener noreferrer" aria-label="${e.name}" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#ff6b2b] hover:text-white dark:hover:bg-[#ff6b2b] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
        ${d[e.icon]||e.name}
      </a>
    `).join(``));let p=document.getElementById(`summary-about`);p&&(p.textContent=r.description.split(`

`)[0]);let m=document.getElementById(`summary-skills`);m&&(m.innerHTML=i.map(e=>`
      <div class="space-y-1.5">
        <div class="flex justify-between text-xs sm:text-sm font-semibold">
          <span class="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
            <span class="w-2 h-2 rounded-full" style="background-color: ${e.color}"></span>
            ${e.name}
          </span>
          <span class="text-[#ff6b2b] font-bold">${e.percentage}%</span>
        </div>
        <div class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-orange-400 to-[#ff6b2b] rounded-full transition-all duration-1000 ease-out skill-progress" data-percentage="${e.percentage}" style="width: 0%"></div>
        </div>
      </div>
    `).join(``));let h=document.getElementById(`summary-projects`);h&&(h.innerHTML=a.slice(0,3).map(e=>`
      <div class="flex gap-3.5 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-orange-50/50 dark:hover:bg-slate-800 border border-transparent hover:border-orange-200 dark:hover:border-slate-700 transition-all duration-200 cursor-pointer project-card-trigger" data-id="${e.id}">
        <div class="w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-700">
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col justify-center min-w-0">
          <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">${e.title}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">${e.description}</p>
          <div class="flex flex-wrap gap-1 mt-1.5">
            ${e.tags.slice(0,2).map(e=>`<span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300">${e}</span>`).join(``)}
          </div>
        </div>
      </div>
    `).join(``));let g=document.getElementById(`full-about-desc`);g&&(g.textContent=r.description);let _=document.getElementById(`about-stats`);_&&(_.innerHTML=r.stats.map(e=>`
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 shadow-md text-center hover:border-[#ff6b2b] transition-all">
        <span class="block text-4xl sm:text-5xl font-extrabold text-[#ff6b2b]">${e.value}</span>
        <span class="block text-sm font-semibold text-slate-600 dark:text-slate-400 mt-2">${e.label}</span>
      </div>
    `).join(``));let v=document.getElementById(`full-skills-grid`);v&&(v.innerHTML=i.map(e=>`
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full shadow-sm" style="background-color: ${e.color}"></span>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white">${e.name}</h4>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-[#ff6b2b]">${e.percentage}% de Dominio</span>
        </div>
        <div class="h-2.5 w-full bg-slate-100 dark:bg-slate-700/60 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-orange-400 to-[#ff6b2b] rounded-full transition-all duration-1000 ease-out skill-progress" data-percentage="${e.percentage}" style="width: 0%"></div>
        </div>
      </div>
    `).join(``)),n(a);let y=document.getElementById(`experience-timeline`);y&&(y.innerHTML=o.map((e,t)=>`
      <div class="relative group">
        <!-- Node point -->
        <span class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-[#ff6b2b] shadow-md group-hover:scale-125 transition-transform"></span>
        
        <div class="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-700/80 shadow-lg hover:border-[#ff6b2b] transition-all space-y-2">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">${e.role}</h3>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ff6b2b] self-start sm:self-auto">${e.period}</span>
          </div>
          <h4 class="text-sm font-semibold text-slate-500 dark:text-slate-400">${e.company}</h4>
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-2">${e.description}</p>
        </div>
      </div>
    `).join(``));let b=document.getElementById(`education-list`);b&&s&&(b.innerHTML=s.map(e=>`
      <div class="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-700/80 shadow-lg space-y-2 hover:border-[#ff6b2b] transition-all duration-300">
        <span class="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ff6b2b] inline-block mb-1">${e.period}</span>
        <h4 class="text-xl font-bold text-slate-900 dark:text-white">${e.degree}</h4>
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">${e.institution}</p>
      </div>
    `).join(``));let x=document.getElementById(`certifications-list`);x&&c&&(x.innerHTML=c.map(e=>`
      <div class="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-start gap-3.5 hover:border-[#ff6b2b] hover:shadow-md transition-all duration-300">
        <span class="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#ff6b2b] shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div class="min-w-0">
          <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">${e.name}</h4>
          <span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mt-1">${e.platform}</span>
        </div>
      </div>
    `).join(``)),l.availability&&(document.getElementById(`contact-availability`).textContent=l.availability),l.email&&(document.getElementById(`contact-email`).textContent=l.email,document.getElementById(`contact-email`).href=`mailto:${l.email}`);let S=document.getElementById(`contact-phone`),C=S?.closest(`.flex`);l.phone&&S?(S.textContent=l.phone,S.href=`tel:${l.phone.replace(/\s+/g,``)}`,C&&C.classList.remove(`hidden`)):C&&C.classList.add(`hidden`),l.location&&(document.getElementById(`contact-location`).textContent=l.location);let w=new Date().getFullYear();document.getElementById(`footer-copyright`).textContent=`© ${w} ${t.name}. Todos los derechos reservados.`,document.getElementById(`footer-name`).textContent=t.name}function n(e){let t=document.getElementById(`full-projects-grid`);t&&(t.innerHTML=e.map(e=>`
    <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer project-card-trigger" data-id="${e.id}">
      <div class="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-semibold text-xs">${e.category}</span>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span class="text-xs font-semibold text-white flex items-center gap-1">Ver detalles &rarr;</span>
        </div>
      </div>
      <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#ff6b2b] transition-colors">${e.title}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2 mt-2">${e.description}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
          ${e.tags.map(e=>`<span class="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">${e}</span>`).join(``)}
        </div>
      </div>
    </div>
  `).join(``),r())}function r(){let t=document.getElementById(`project-modal`),n=document.getElementById(`modal-close`),r=document.getElementById(`modal-content`);document.querySelectorAll(`.project-card-trigger`).forEach(n=>{n.addEventListener(`click`,()=>{let i=n.getAttribute(`data-id`),a=e.projects.find(e=>e.id===i);if(!a)return;document.getElementById(`modal-title`).textContent=a.title,document.getElementById(`modal-category`).textContent=a.category,document.getElementById(`modal-desc`).textContent=a.description,document.getElementById(`modal-image`).src=a.image,document.getElementById(`modal-demo`).href=a.demoUrl,document.getElementById(`modal-github`).href=a.githubUrl;let o=document.getElementById(`modal-tags`);o.innerHTML=a.tags.map(e=>`<span class="px-3 py-1 rounded-full bg-orange-50 dark:bg-slate-800 text-[#ff6b2b] text-xs font-semibold">${e}</span>`).join(``),t.classList.remove(`hidden`),setTimeout(()=>{t.classList.remove(`opacity-0`,`pointer-events-none`),r.classList.remove(`scale-95`)},10)})});let i=()=>{t.classList.add(`opacity-0`,`pointer-events-none`),r.classList.add(`scale-95`),setTimeout(()=>{t.classList.add(`hidden`)},300)};n&&(n.onclick=i),t&&(t.onclick=e=>{e.target===t&&i()})}function i(){let e=document.querySelectorAll(`.skill-progress`),t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target,n=t.getAttribute(`data-percentage`);t.style.width=`${n}%`}})},{threshold:.2});e.forEach(e=>t.observe(e));let n=document.querySelectorAll(`section[id]`),r=document.querySelectorAll(`.nav-link`),i=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target.getAttribute(`id`);r.forEach(e=>{e.getAttribute(`href`).replace(`#`,``)===t?(e.classList.add(`text-[#ff6b2b]`,`font-semibold`,`after:h-0.5`),e.classList.remove(`text-slate-600`,`dark:text-slate-300`)):(e.classList.remove(`text-[#ff6b2b]`,`font-semibold`,`after:h-0.5`),e.classList.add(`text-slate-600`,`dark:text-slate-300`))})}})},{threshold:.35});n.forEach(e=>i.observe(e))}function a(){let e=document.getElementById(`theme-toggle`),t=document.documentElement;localStorage.theme===`dark`||!(`theme`in localStorage)&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?t.classList.add(`dark`):t.classList.remove(`dark`),e?.addEventListener(`click`,()=>{t.classList.contains(`dark`)?(t.classList.remove(`dark`),localStorage.theme=`light`):(t.classList.add(`dark`),localStorage.theme=`dark`)});let n=document.getElementById(`mobile-menu-btn`),r=document.getElementById(`mobile-menu`),i=document.querySelectorAll(`.mobile-nav-link`);n?.addEventListener(`click`,()=>{r?.classList.toggle(`hidden`)}),i.forEach(e=>{e.addEventListener(`click`,()=>{r?.classList.add(`hidden`)})})}document.addEventListener(`DOMContentLoaded`,()=>{t(),a(),i(),r()});