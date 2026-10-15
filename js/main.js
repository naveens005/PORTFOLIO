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

  // 11. Direct Email Transmission Contact Form (Desktop Gmail Web & Mobile Gmail App Compose Center)
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

      const recipient = 'naveens1077@gmail.com';
      const subjectText = `Portfolio Inquiry from ${name}`;
      const bodyText = `Hi Naveen,\r\n\r\n${message}\r\n\r\n---\r\nSender Details:\r\nName: ${name}\r\nEmail: ${email}`;

      const subjectEncoded = encodeURIComponent(subjectText);
      const bodyEncoded = encodeURIComponent(bodyText);

      // Desktop Web Gmail compose URL (opens Desktop Gmail compose window with To, Subject, and Body pre-filled)
      const desktopGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subjectEncoded}&body=${bodyEncoded}`;

      // Universal mailto URL (triggers native Mobile Gmail app compose center on Android & iOS with all fields pre-filled)
      const mailtoUrl = `mailto:${recipient}?subject=${subjectEncoded}&body=${bodyEncoded}`;

      // Android-specific Gmail app Intent (directly launches com.google.android.gm into compose screen)
      const androidGmailIntent = `intent:#Intent;action=android.intent.action.SENDTO;data=mailto:${recipient}?subject=${subjectEncoded}&body=${bodyEncoded};package=com.google.android.gm;end`;

      // iOS Gmail app URI scheme
      const iosGmailScheme = `googlegmail:///co?to=${recipient}&subject=${subjectEncoded}&body=${bodyEncoded}`;

      // Device detection
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isMobile = isAndroid || isIOS || /Mobile|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(16, 185, 129, 0.12)';
        feedback.style.border = '1px solid rgba(16, 185, 129, 0.4)';
        feedback.style.color = '#e2e8f0';
        feedback.innerHTML = `
          <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; color: #10b981; display: flex; align-items: center; gap: 8px;">
            <span>✓</span> Redirecting to Gmail Compose Center...
          </div>
          <p style="margin: 0 0 10px 0; opacity: 0.9; font-size: 0.85rem; line-height: 1.4; color: #cbd5e1;">
            Your message and details have been loaded. If the compose window didn't open automatically, select your client:
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <a href="${desktopGmailUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 6px; background: #ea4335; color: #ffffff; font-size: 0.82rem; font-weight: 600; text-decoration: none; box-shadow: 0 2px 8px rgba(234,67,53,0.3);">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              Desktop Gmail Web ↗
            </a>
            <a href="${mailtoUrl}" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 6px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; font-size: 0.82rem; font-weight: 600; text-decoration: none;">
              📱 Mobile Gmail App
            </a>
            ${isAndroid ? `
            <a href="${androidGmailIntent}" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 6px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; font-size: 0.82rem; font-weight: 600; text-decoration: none;">
              🤖 Android Gmail Direct
            </a>` : ''}
            ${isIOS ? `
            <a href="${iosGmailScheme}" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 6px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; font-size: 0.82rem; font-weight: 600; text-decoration: none;">
              🍎 iOS Gmail App
            </a>` : ''}
          </div>
        `;
      }

      showToast(`✓ Launching Gmail compose center...`);

      if (isMobile) {
        // Mobile platform: Trigger native Gmail app compose screen
        const mobileLink = document.createElement('a');
        mobileLink.href = mailtoUrl;
        document.body.appendChild(mobileLink);
        mobileLink.click();
        setTimeout(() => {
          if (document.body.contains(mobileLink)) {
            document.body.removeChild(mobileLink);
          }
        }, 1000);
      } else {
        // Desktop platform: Open Desktop Gmail Web Compose in a new tab
        const gmailTab = window.open(desktopGmailUrl, '_blank');
        if (!gmailTab || gmailTab.closed || typeof gmailTab.closed === 'undefined') {
          window.location.href = desktopGmailUrl;
        }
      }
    });
  }

  // Handle direct Gmail link in social links for mobile responsiveness
  const gmailDirectLinks = document.querySelectorAll('.gmail-direct-link');
  gmailDirectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const isMobileDevice = /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobileDevice) {
        e.preventDefault();
        window.location.href = 'mailto:naveens1077@gmail.com';
      }
    });
  });

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
