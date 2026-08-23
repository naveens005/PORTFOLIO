/**
 * Interactive Skill Ecosystem Explorer
 */

export function initSkillsTree() {
  const container = document.getElementById('skills-grid-container');
  const filterBtns = document.querySelectorAll('.skill-tab-btn');

  if (!container) return;

  const skillsData = [
    {
      id: 'cv',
      category: 'ai',
      name: 'Computer Vision',
      sub: 'Object Detection & Spatial AI',
      desc: 'Real-time object detection, spatial tracking, feature extraction, and edge inference.',
      tags: ['YOLOv8', 'OpenCV', 'Image Processing', 'MediaPipe', 'Bounding Boxes', 'Heatmaps'],
      project: 'CrowdGuard AI & Assistive Gesture Patent'
    },
    {
      id: 'ml',
      category: 'ai',
      name: 'Machine Learning',
      sub: 'Supervised & Predictive Modeling',
      desc: 'Statistical learning, classification algorithms, regression, and model optimization.',
      tags: ['PyTorch', 'Scikit-Learn', 'Feature Engineering', 'Model Tuning', 'NumPy', 'Pandas'],
      project: 'BrainRot Behavioral Analytics'
    },
    {
      id: 'genai',
      category: 'genai',
      name: 'Generative AI & LLMs',
      sub: 'RAG & Multi-Agent Workflows',
      desc: 'Prompt engineering, contextual vector retrieval, semantic routing, and agentic workflows.',
      tags: ['LangChain', 'ChromaDB', 'Vector Search', 'Prompt Crafting', 'Anthropic Claude', 'OpenAI'],
      project: 'Conversational AI Suite & NaveenAI'
    },
    {
      id: 'data',
      category: 'data',
      name: 'Data Science & Analytics',
      sub: 'Exploratory & Time-Series Analysis',
      desc: 'Data cleaning, time-series anomaly detection, statistical hypothesis testing, and storytelling.',
      tags: ['SQL / MySQL', 'Pandas', 'NumPy', 'Matplotlib / Seaborn', 'Data Pipelines'],
      project: 'Tata GenAI Data Analytics'
    },
    {
      id: 'uiux',
      category: 'design',
      name: 'UI/UX & Product Design',
      sub: 'Design Systems & Experience Craft',
      desc: 'High-fidelity wireframing, interactive prototyping, micro-animations, and user empathy.',
      tags: ['Figma', 'Design Systems', 'Micro-interactions', 'Typography', 'Usability Testing'],
      project: 'Portfolio Experience & Event Coordination'
    },
    {
      id: 'systems',
      category: 'tools',
      name: 'Modern Web & Systems',
      sub: 'Full Stack & Deployment',
      desc: 'Responsive web architectures, modular Javascript/ES6, REST APIs, Git versioning.',
      tags: ['Python / Flask', 'JavaScript (ES6+)', 'HTML5 / Modern CSS', 'Git / GitHub', 'VS Code'],
      project: 'Full Portfolio & Web Applications'
    }
  ];

  function renderSkills(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' ? skillsData : skillsData.filter(s => s.category === filter);

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card reveal';
      card.innerHTML = `
        <div class="skill-card-top">
          <div class="skill-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="M15 15h.01"></path>
            </svg>
          </div>
          <div>
            <h4 class="skill-name">${skill.name}</h4>
            <span class="skill-sub">${skill.sub}</span>
          </div>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px;">${skill.desc}</p>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-bottom: 8px;">
          Applied in: <strong style="color: var(--text-primary); font-weight: 500;">${skill.project}</strong>
        </div>
        <div class="skill-items-list">
          ${skill.tags.map(t => `<span class="skill-item-pill">${t}</span>`).join('')}
        </div>
      `;

      container.appendChild(card);
    });

    // Trigger reveal class
    setTimeout(() => {
      container.querySelectorAll('.skill-card').forEach(c => c.classList.add('active'));
    }, 40);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-skill-filter') || 'all';
      renderSkills(cat);
    });
  });

  renderSkills('all');
}
