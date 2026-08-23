/**
 * NAVEEN S — Digital Portfolio Main Orchestrator
 * Minimal on the surface. Intelligent underneath.
 */

import { initTheme } from './theme.js';
import { initCustomCursor } from './cursor.js';
import { initHeroCanvas } from './canvas.js';
import { initCommandPalette } from './commandPalette.js';
import { initAIAssistant } from './aiAssistant.js';
import { initTerminal } from './terminal.js';
import { initCaseStudies } from './caseStudies.js';
import { initSkillsTree } from './skillsTree.js';
import { initPatentModal } from './patentModal.js';
import { initCertifications } from './certifications.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Subsystems
  initTheme();
  initCustomCursor();
  initHeroCanvas();
  initSkillsTree();
  initCertifications();

  const patentSystem = initPatentModal();
  const caseStudySystem = initCaseStudies();
  const aiSystem = initAIAssistant();
  const terminalSystem = initTerminal();

  // 2. Command Palette Integration Callbacks
  initCommandPalette({
    openCaseStudy: (key) => caseStudySystem.openCaseStudy(key),
    openResume: () => openResumeModal(),
    openAI: () => aiSystem.openAssistant(),
    openTerminal: () => terminalSystem.openTerminal(),
    openPatent: () => patentSystem.openPatentModal(),
    toggleTheme: () => document.querySelector('.theme-toggle-btn')?.click(),
    copyEmail: () => copyEmailToClipboard()
  });

  // 3. Preloader Lifecycle
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (preloader) preloader.classList.add('loaded');
      triggerScrollReveals();
    }, 450);
  });
  // Fallback if load is instantaneous
  setTimeout(() => {
    if (preloader) preloader.classList.add('loaded');
    triggerScrollReveals();
  }, 750);

  // 4. Header Scroll Spy & Blur
  const header = document.querySelector('.header-nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // 5. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('mobile-open');
    });

    navLinks.forEach(l => {
      l.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinksContainer.classList.remove('mobile-open');
      });
    });
  }

  // 6. Scroll Reveal Observer
  function triggerScrollReveals() {
    const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(r => observer.observe(r));
  }

  // 7. Subtle 3D Card Tilt Effect
  const tiltCards = document.querySelectorAll('.project-item, .patent-spotlight, .pillar-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // 8. Copy Email to Clipboard
  const emailTriggers = document.querySelectorAll('.copy-email-trigger');
  emailTriggers.forEach(el => el.addEventListener('click', copyEmailToClipboard));

  function copyEmailToClipboard() {
    const email = 'naveens1077@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('✓ Copied naveens1077@gmail.com to clipboard');
    }).catch(() => {
      showToast('Email: naveens1077@gmail.com');
    });
  }

  // 9. Toast Notification System
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 20);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // 10. Live IST Chennai Clock
  const clockEl = document.getElementById('chennai-clock');
  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockEl.textContent = now.toLocaleTimeString('en-US', options) + ' IST';
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 11. Direct Email Transmission Contact Form
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const message = document.getElementById('cf-message').value.trim();
      const feedback = document.getElementById('form-feedback-msg');

      if (!name || !email || !message) {
        showToast('Please fill out all fields.');
        return;
      }

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Naveen,\n\n${message}\n\n---\nSender Details:\nName: ${name}\nEmail: ${email}`);
      const mailtoUrl = `mailto:naveens1077@gmail.com?subject=${subject}&body=${body}`;

      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(16, 185, 129, 0.15)';
        feedback.style.border = '1px solid #10b981';
        feedback.style.color = '#10b981';
        feedback.innerHTML = `✓ Opening your email application to send directly to <strong>naveens1077@gmail.com</strong>...`;
      }

      showToast(`✓ Opening email to naveens1077@gmail.com...`);
      
      // Trigger native email client directly
      window.location.href = mailtoUrl;
    });
  }

  // 12. In-Browser Resume Modal & Direct 1-Click PDF Download
  // 12. In-Browser Resume Modal & Direct PDF Download
  const resumeModal = document.getElementById('resume-modal');
  const resumeClose = document.getElementById('resume-modal-close');
  const resumeBtns = document.querySelectorAll('.resume-trigger-btn');
  const downloadResumeBtn = document.getElementById('download-resume-btn');

  function openResumeModal() {
    if (resumeModal) resumeModal.classList.add('active');
  }

  function closeResumeModal() {
    if (resumeModal) resumeModal.classList.remove('active');
  }

  resumeBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openResumeModal();
  }));

  if (resumeClose) resumeClose.addEventListener('click', closeResumeModal);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
      showToast('✓ NAVEEN_S_RESUME.pdf downloaded successfully!');
    });
  }

  // Back to Top Smooth Scroll
  const backToTop = document.querySelector('.back-to-top-btn');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
