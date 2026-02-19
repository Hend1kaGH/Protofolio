document.addEventListener('DOMContentLoaded', () => {
  const config = typeof CONFIG !== 'undefined' ? CONFIG : null;

  if (!config) {
    console.error('Config not loaded! Make sure config.js is loaded before script.js');
    return;
  }

  // ===== BRANDING POPULATION =====
  if (config.branding) {
    if (config.branding.browserTitle) {
      document.title = config.branding.browserTitle;
    }

    if (config.branding.favicon) {
      let favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      favicon.href = config.branding.favicon;
    }

    const logoIcon = document.querySelector('.logo-icon');
    const logoText = document.querySelector('.logo-text');

    if (logoIcon && config.branding.logoIcon) {
      logoIcon.textContent = config.branding.logoIcon;
    }

    if (logoText && config.branding.logoText) {
      logoText.textContent = config.branding.logoText;
    }
  }

  // ===== POPULATE CONTENT =====

  // About Section
  if (config.about) {
    const aboutTitle = document.querySelector('.section-title span:first-child');
    const aboutTitleGradient = document.querySelector('.text-gradient');
    const aboutDescription = document.querySelector('.section-description');
    const aboutImage = document.getElementById('aboutImage');

    if (aboutTitle) aboutTitle.textContent = config.about.title;
    if (aboutTitleGradient) aboutTitleGradient.textContent = config.about.titleGradient;
    if (aboutDescription) aboutDescription.textContent = config.about.description;
    if (aboutImage) {
      aboutImage.src = config.about.image;
      aboutImage.onerror = () => {
        console.warn('Profile image not found:', config.about.image);
        aboutImage.src = 'https://via.placeholder.com/400x500?text=Hendika';
      };
    }

    // Stats
    const statsGrid = document.getElementById('statsGrid');
    if (config.about.stats && statsGrid) {
      statsGrid.innerHTML = config.about.stats.map(stat => `
        <div class="stat-item">
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `).join('');
    }
  }

  // Projects Section - Horizontal Layout
  const projectsTrack = document.getElementById('projectsTrack');
  if (config.projects && projectsTrack) {
    projectsTrack.innerHTML = config.projects.map(project => `
    <a href="${project.repo || '#'}" target="_blank" rel="noopener noreferrer" class="project-card-horizontal">
      <div class="project-image-horizontal">
        <img src="${project.image}" alt="${project.title}" loading="lazy" 
             onerror="this.src='https://via.placeholder.com/1200x800?text=${encodeURIComponent(project.title)}'"/>
        
        <!-- Project Action Buttons -->
        <div class="project-actions">
          ${project.demo && project.demo !== '#' ? `
            <div onclick="event.preventDefault(); window.open('${project.demo}', '_blank')" 
               class="project-action-btn demo-btn" title="Live Demo">
              <span class="material-symbols-outlined">open_in_new</span>
            </div>
          ` : ''}
        </div>

        <div class="project-link-icon">
          <span class="material-symbols-outlined">arrow_outward</span>
        </div>
      </div>
      <div class="project-info-horizontal">
        <span class="project-category-horizontal">${project.category}</span>
        <h3 class="project-title-horizontal">${project.title}</h3>
        <p class="project-description-horizontal">${project.description}</p>
        <div class="project-tags-horizontal">
          ${project.tags.map(tag => `<span class="tag-horizontal">${tag}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('');
  }

  // Experience Section
  const experienceGrid = document.getElementById('experienceGrid');
  if (config.experiences && experienceGrid) {
    experienceGrid.innerHTML = config.experiences.map((exp, i) => `
      <div class="experience-card animate-on-scroll" style="transition-delay: ${i * 100}ms">
        <div>
          <span class="experience-period">${exp.period}</span>
          <h3 class="experience-role">${exp.role}</h3>
          <p class="experience-company">${exp.company}</p>
        </div>
        <div>
          <p class="experience-description">${exp.description}</p>
          <div class="experience-tags">
            ${exp.tags.map(tag => `<span class="tag-horizontal">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }


  // Contact Section
  const contactGrid = document.getElementById('contactGrid');
  if (config.contact?.contacts && contactGrid) {
    contactGrid.innerHTML = config.contact.contacts.map(contact => `
      <a href="${contact.link}" target="_blank" rel="noopener noreferrer" class="contact-card">
        <span class="material-symbols-outlined contact-icon">${contact.icon}</span>
        <h3 class="contact-title">${contact.title}</h3>
        <p class="contact-description">${contact.description}</p>
      </a>
    `).join('');
  }

  // Footer Section
  if (config.footer) {
    const footerLogo = document.querySelector('.footer-logo');
    const footerCopyright = document.querySelector('.footer-copyright');

    if (footerLogo) {
      footerLogo.innerHTML = `${config.footer.logo}<span class="text-gradient"> ${config.footer.logoItalic}</span>`;
    }
    if (footerCopyright) {
      footerCopyright.textContent = config.footer.copyright;
    }
  }

  // ===== MOBILE MENU =====
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = mobileMenu.classList.contains('active') ? 'close' : 'menu';
      }
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
        document.body.style.overflow = '';
      });
    });
  }

  // ===== SCROLL ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('✅ Portfolio loaded successfully!');
  console.log('📁 Using local assets from ./assets/images/');
});