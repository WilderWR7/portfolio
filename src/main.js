import './style.css';
import { portfolioData } from './data.js';

// --- INITIALIZE PORTFOLIO DYNAMIC DATA ---
function initPortfolio() {
  const { personal, about, skills, projects, experience, education, certifications, contact } = portfolioData;

  // 1. Hero Section
  document.getElementById('hero-greeting').textContent = personal.greeting;
  document.getElementById('hero-name').textContent = personal.name;
  document.getElementById('hero-role').textContent = personal.role;
  document.getElementById('hero-tagline').textContent = personal.tagline;
  document.getElementById('hero-status').textContent = personal.status;
  
  const heroAvatar = document.getElementById('hero-avatar');
  if (heroAvatar) heroAvatar.src = personal.avatar;

  // Social Icons mapping
  const socialIconsMap = {
    github: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>`,
    linkedin: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.88a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66z"></path></svg>`,
    twitter: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`,
    instagram: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>`
  };

  const socialsContainer = document.getElementById('hero-socials');
  if (socialsContainer) {
    socialsContainer.innerHTML = personal.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#ff6b2b] hover:text-white dark:hover:bg-[#ff6b2b] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
        ${socialIconsMap[s.icon] || s.name}
      </a>
    `).join('');
  }

  // 2. Summary Card: About & Skills
  const summaryAbout = document.getElementById('summary-about');
  if (summaryAbout) {
    // Show first paragraph of about description
    summaryAbout.textContent = about.description.split('\n\n')[0];
  }

  const summarySkills = document.getElementById('summary-skills');
  if (summarySkills) {
    summarySkills.innerHTML = skills.map(skill => `
      <div class="space-y-1.5">
        <div class="flex justify-between text-xs sm:text-sm font-semibold">
          <span class="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
            <span class="w-2 h-2 rounded-full" style="background-color: ${skill.color}"></span>
            ${skill.name}
          </span>
          <span class="text-[#ff6b2b] font-bold">${skill.percentage}%</span>
        </div>
        <div class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-orange-400 to-[#ff6b2b] rounded-full transition-all duration-1000 ease-out skill-progress" data-percentage="${skill.percentage}" style="width: 0%"></div>
        </div>
      </div>
    `).join('');
  }

  // 3. Summary Card: Mini Projects
  const summaryProjects = document.getElementById('summary-projects');
  if (summaryProjects) {
    summaryProjects.innerHTML = projects.slice(0, 3).map(proj => `
      <div class="flex gap-3.5 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-orange-50/50 dark:hover:bg-slate-800 border border-transparent hover:border-orange-200 dark:hover:border-slate-700 transition-all duration-200 cursor-pointer project-card-trigger" data-id="${proj.id}">
        <div class="w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-700">
          <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col justify-center min-w-0">
          <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">${proj.title}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">${proj.description}</p>
          <div class="flex flex-wrap gap-1 mt-1.5">
            ${proj.tags.slice(0, 2).map(tag => `<span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Full About Section
  const fullAboutDesc = document.getElementById('full-about-desc');
  if (fullAboutDesc) fullAboutDesc.textContent = about.description;

  const aboutStats = document.getElementById('about-stats');
  if (aboutStats) {
    aboutStats.innerHTML = about.stats.map(stat => `
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 shadow-md text-center hover:border-[#ff6b2b] transition-all">
        <span class="block text-4xl sm:text-5xl font-extrabold text-[#ff6b2b]">${stat.value}</span>
        <span class="block text-sm font-semibold text-slate-600 dark:text-slate-400 mt-2">${stat.label}</span>
      </div>
    `).join('');
  }

  // 5. Full Skills Grid
  const fullSkillsGrid = document.getElementById('full-skills-grid');
  if (fullSkillsGrid) {
    fullSkillsGrid.innerHTML = skills.map(skill => `
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full shadow-sm" style="background-color: ${skill.color}"></span>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white">${skill.name}</h4>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-[#ff6b2b]">${skill.percentage}% de Dominio</span>
        </div>
        <div class="h-2.5 w-full bg-slate-100 dark:bg-slate-700/60 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-orange-400 to-[#ff6b2b] rounded-full transition-all duration-1000 ease-out skill-progress" data-percentage="${skill.percentage}" style="width: 0%"></div>
        </div>
      </div>
    `).join('');
  }

  // 6. Full Projects Grid
  renderProjectsGrid(projects);

  // 7. Experience Timeline
  const timelineContainer = document.getElementById('experience-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = experience.map((exp, index) => `
      <div class="relative group">
        <!-- Node point -->
        <span class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-[#ff6b2b] shadow-md group-hover:scale-125 transition-transform"></span>
        
        <div class="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-700/80 shadow-lg hover:border-[#ff6b2b] transition-all space-y-2">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">${exp.role}</h3>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ff6b2b] self-start sm:self-auto">${exp.period}</span>
          </div>
          <h4 class="text-sm font-semibold text-slate-500 dark:text-slate-400">${exp.company}</h4>
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-2">${exp.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 7b. Education List
  const educationContainer = document.getElementById('education-list');
  if (educationContainer && education) {
    educationContainer.innerHTML = education.map(edu => `
      <div class="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-700/80 shadow-lg space-y-2 hover:border-[#ff6b2b] transition-all duration-300">
        <span class="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#ff6b2b] inline-block mb-1">${edu.period}</span>
        <h4 class="text-xl font-bold text-slate-900 dark:text-white">${edu.degree}</h4>
        <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">${edu.institution}</p>
      </div>
    `).join('');
  }

  // 7c. Certifications List
  const certificationsContainer = document.getElementById('certifications-list');
  if (certificationsContainer && certifications) {
    certificationsContainer.innerHTML = certifications.map(cert => `
      <div class="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-start gap-3.5 hover:border-[#ff6b2b] hover:shadow-md transition-all duration-300">
        <span class="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#ff6b2b] shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <div class="min-w-0">
          <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">${cert.name}</h4>
          <span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mt-1">${cert.platform}</span>
        </div>
      </div>
    `).join('');
  }

  // 8. Contact & Footer
  if (contact.availability) {
    document.getElementById('contact-availability').textContent = contact.availability;
  }
  if (contact.email) {
    document.getElementById('contact-email').textContent = contact.email;
    document.getElementById('contact-email').href = `mailto:${contact.email}`;
  }
  
  const phoneEl = document.getElementById('contact-phone');
  const phoneContainer = phoneEl?.closest('.flex');
  if (contact.phone && phoneEl) {
    phoneEl.textContent = contact.phone;
    phoneEl.href = `tel:${contact.phone.replace(/\s+/g, '')}`;
    if (phoneContainer) phoneContainer.classList.remove('hidden');
  } else {
    if (phoneContainer) phoneContainer.classList.add('hidden');
  }

  if (contact.location) {
    document.getElementById('contact-location').textContent = contact.location;
  }

  const currentYear = new Date().getFullYear();
  document.getElementById('footer-copyright').textContent = `© ${currentYear} ${personal.name}. Todos los derechos reservados.`;
  document.getElementById('footer-name').textContent = personal.name;
}

// --- RENDER PROJECTS GRID WITH FILTERING ---
function renderProjectsGrid(projectList) {
  const grid = document.getElementById('full-projects-grid');
  if (!grid) return;

  grid.innerHTML = projectList.map(proj => `
    <div class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer project-card-trigger" data-id="${proj.id}">
      <div class="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-semibold text-xs">${proj.category}</span>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span class="text-xs font-semibold text-white flex items-center gap-1">Ver detalles &rarr;</span>
        </div>
      </div>
      <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#ff6b2b] transition-colors">${proj.title}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2 mt-2">${proj.description}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
          ${proj.tags.map(tag => `<span class="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Re-attach modal listeners to newly rendered cards
  attachModalListeners();
}

// --- PROJECT MODAL FUNCTIONALITY ---
function attachModalListeners() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  document.querySelectorAll('.project-card-trigger').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const proj = portfolioData.projects.find(p => p.id === id);
      if (!proj) return;

      document.getElementById('modal-title').textContent = proj.title;
      document.getElementById('modal-category').textContent = proj.category;
      document.getElementById('modal-desc').textContent = proj.description;
      document.getElementById('modal-image').src = proj.image;
      document.getElementById('modal-demo').href = proj.demoUrl;
      document.getElementById('modal-github').href = proj.githubUrl;

      const tagsContainer = document.getElementById('modal-tags');
      tagsContainer.innerHTML = proj.tags.map(t => `<span class="px-3 py-1 rounded-full bg-orange-50 dark:bg-slate-800 text-[#ff6b2b] text-xs font-semibold">${t}</span>`).join('');

      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
      }, 10);
    });
  });

  const closeModal = () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  };

  if (modalClose) modalClose.onclick = closeModal;
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }
}

// --- INTERSECTION OBSERVER FOR PROGRESS BARS & SCROLL SPY ---
function setupObservers() {
  // 1. Progress bars animation
  const progressBars = document.querySelectorAll('.skill-progress');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetPercent = bar.getAttribute('data-percentage');
        bar.style.width = `${targetPercent}%`;
      }
    });
  }, { threshold: 0.2 });

  progressBars.forEach(bar => progressObserver.observe(bar));

  // 2. Navigation Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href').replace('#', '');
          if (href === id) {
            link.classList.add('text-[#ff6b2b]', 'font-semibold', 'after:h-0.5');
            link.classList.remove('text-slate-600', 'dark:text-slate-300');
          } else {
            link.classList.remove('text-[#ff6b2b]', 'font-semibold', 'after:h-0.5');
            link.classList.add('text-slate-600', 'dark:text-slate-300');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => scrollSpyObserver.observe(sec));
}

// --- THEME & MOBILE MENU & FILTERS SETUP ---
function setupInteractivity() {
  // 1. Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Check saved preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  themeToggle?.addEventListener('click', () => {
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });




}

// --- ON DOM LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  initPortfolio();
  setupInteractivity();
  setupObservers();
  attachModalListeners();
});
