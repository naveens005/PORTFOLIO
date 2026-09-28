/**
 * Raycast/Linear-Style Command Palette (⌘K / Ctrl+K)
 */

export function initCommandPalette(callbacks = {}) {
  const modal = document.getElementById('cmd-palette-modal');
  const input = document.getElementById('cmd-search-input');
  const list = document.getElementById('cmd-results-list');
  const triggerBtns = document.querySelectorAll('.cmd-trigger-btn');

  if (!modal || !input || !list) return;

  const commands = [
    // Navigation
    { id: 'nav-hero', title: 'Home / Hero', group: 'Navigation', icon: 'home', action: () => scrollTo('#hero') },
    { id: 'nav-about', title: 'About & Philosophy', group: 'Navigation', icon: 'user', action: () => scrollTo('#about') },
    { id: 'nav-work', title: 'Projects & Work', group: 'Navigation', icon: 'layers', action: () => scrollTo('#work') },
    { id: 'nav-skills', title: 'Skills & Ecosystem', group: 'Navigation', icon: 'cpu', action: () => scrollTo('#skills') },
    { id: 'nav-experience', title: 'Experience & Education', group: 'Navigation', icon: 'briefcase', action: () => scrollTo('#experience') },
    { id: 'nav-patent', title: 'Featured Patent Spotlight', group: 'Navigation', icon: 'award', action: () => scrollTo('#patent') },
    { id: 'nav-achieve', title: 'Hackathons & Certifications', group: 'Navigation', icon: 'check-circle', action: () => scrollTo('#achievements') },
    { id: 'nav-manifesto', title: 'Design × Intelligence Identity', group: 'Navigation', icon: 'zap', action: () => scrollTo('#manifesto') },
    { id: 'nav-contact', title: 'Contact / Let’s Talk', group: 'Navigation', icon: 'mail', action: () => scrollTo('#contact') },

    // Projects
    { id: 'proj-crowdguard', title: 'Case Study: CrowdGuard AI', group: 'Projects', icon: 'eye', action: () => callbacks.openCaseStudy && callbacks.openCaseStudy('crowdguard') },
    { id: 'proj-brainrot', title: 'Case Study: BrainRot Analytics', group: 'Projects', icon: 'activity', action: () => callbacks.openCaseStudy && callbacks.openCaseStudy('brainrot') },
    { id: 'proj-convai', title: 'Case Study: Conversational AI Suite', group: 'Projects', icon: 'message-square', action: () => callbacks.openCaseStudy && callbacks.openCaseStudy('conversational_ai') },
    { id: 'proj-fake-id', title: 'Case Study: Fake ID Screening AI', group: 'Projects', icon: 'shield', action: () => callbacks.openCaseStudy && callbacks.openCaseStudy('fake_id_screening') },
    { id: 'proj-expense-tracker', title: 'Case Study: SpendCompass (Expense Tracker)', group: 'Projects', icon: 'layers', action: () => callbacks.openCaseStudy && callbacks.openCaseStudy('expense_tracker') },

    // Actions
    { id: 'act-resume', title: 'View & Download Resume', group: 'Actions', icon: 'file-text', action: () => callbacks.openResume && callbacks.openResume() },
    { id: 'act-ai', title: 'Ask Naveen’s AI Assistant', group: 'Actions', icon: 'sparkles', action: () => callbacks.openAI && callbacks.openAI() },
    { id: 'act-terminal', title: 'Launch NaveenOS Terminal', group: 'Actions', icon: 'terminal', action: () => callbacks.openTerminal && callbacks.openTerminal() },
    { id: 'act-patent', title: 'Inspect Patent No. 202541055330 A', group: 'Actions', icon: 'shield', action: () => callbacks.openPatent && callbacks.openPatent() },
    { id: 'act-theme', title: 'Toggle Light / Dark Mode', group: 'Actions', icon: 'sun', action: () => callbacks.toggleTheme && callbacks.toggleTheme() },
    { id: 'act-copy-email', title: 'Copy Email (naveens1077@gmail.com)', group: 'Actions', icon: 'copy', action: () => callbacks.copyEmail && callbacks.copyEmail() },

    // Social
    { id: 'soc-github', title: 'GitHub Profile (@naveens005)', group: 'Social', icon: 'github', action: () => window.open('https://github.com/naveens005', '_blank') },
    { id: 'soc-linkedin', title: 'LinkedIn Profile', group: 'Social', icon: 'linkedin', action: () => window.open('https://linkedin.com', '_blank') }
  ];

  let selectedIndex = 0;
  let filteredCommands = [...commands];

  function openPalette() {
    modal.classList.add('active');
    input.value = '';
    filterResults('');
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    modal.classList.remove('active');
  }

  function scrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function getIconSvg(name) {
    const icons = {
      home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
      user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
      cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
      briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
      award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
      'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
      zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
      mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
      eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
      'message-square': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
      'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
      sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15 8L21 11L15 14L12 20L9 14L3 11L9 8L12 2z"></path></svg>',
      terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
      shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
      sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
      copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
      github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
    };
    return icons[name] || icons.zap;
  }

  function renderResults() {
    list.innerHTML = '';
    if (filteredCommands.length === 0) {
      list.innerHTML = `<li class="cmd-group-title" style="text-align:center; padding: 2rem;">No matching commands found</li>`;
      return;
    }

    let currentGroup = '';
    filteredCommands.forEach((cmd, idx) => {
      if (cmd.group !== currentGroup) {
        currentGroup = cmd.group;
        const groupEl = document.createElement('li');
        groupEl.className = 'cmd-group-title';
        groupEl.textContent = currentGroup;
        list.appendChild(groupEl);
      }

      const li = document.createElement('li');
      li.className = `cmd-item ${idx === selectedIndex ? 'selected' : ''}`;
      li.innerHTML = `
        <div class="cmd-item-left">
          ${getIconSvg(cmd.icon)}
          <span>${cmd.title}</span>
        </div>
        <span class="cmd-item-badge">${cmd.group}</span>
      `;

      li.addEventListener('click', () => {
        closePalette();
        cmd.action();
      });

      li.addEventListener('mouseenter', () => {
        selectedIndex = idx;
        updateSelectionUI();
      });

      list.appendChild(li);
    });

    scrollSelectedIntoView();
  }

  function updateSelectionUI() {
    const items = list.querySelectorAll('.cmd-item');
    items.forEach((el, i) => {
      el.classList.toggle('selected', i === selectedIndex);
    });
  }

  function scrollSelectedIntoView() {
    const selected = list.querySelector('.cmd-item.selected');
    if (selected) {
      selected.scrollIntoView({ block: 'nearest' });
    }
  }

  function filterResults(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      filteredCommands = [...commands];
    } else {
      filteredCommands = commands.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.group.toLowerCase().includes(q)
      );
    }
    selectedIndex = 0;
    renderResults();
  }

  input.addEventListener('input', (e) => {
    filterResults(e.target.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        selectedIndex = (selectedIndex + 1) % filteredCommands.length;
        updateSelectionUI();
        scrollSelectedIntoView();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
        updateSelectionUI();
        scrollSelectedIntoView();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        closePalette();
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  triggerBtns.forEach(btn => btn.addEventListener('click', openPalette));

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-close-btn')) {
      closePalette();
    }
  });

  // Global Keyboard Shortcut: ⌘K or Ctrl+K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (modal.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('active')) {
      closePalette();
    }
  });

  return { openPalette, closePalette };
}
