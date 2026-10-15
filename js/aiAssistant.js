/**
 * NaveenAI — Interactive Floating Portfolio Intelligence Assistant
 */

export function initAIAssistant(callbacks = {}) {
  const triggerBtn = document.getElementById('ai-assistant-btn');
  const drawer = document.getElementById('ai-chat-drawer');
  const closeBtn = document.getElementById('ai-chat-close');
  const messagesContainer = document.getElementById('ai-chat-messages');
  const input = document.getElementById('ai-chat-input');
  const sendBtn = document.getElementById('ai-chat-send');
  const chips = document.querySelectorAll('.ai-chip');

  if (!drawer || !messagesContainer) return;

  const knowledgeBase = [
    {
      keywords: ['who', 'about', 'naveen', 'background', 'intro', 'bio', 'who is naveen', 'education', 'college', 'degree'],
      answer: "Naveen S is a B.Tech Artificial Intelligence & Data Science builder (2023 — 2027) and UI/UX Designer from Chennai, India (Peri Institute of Technology, CGPA 8.0). He specializes in bridging complex AI pipelines (Computer Vision, LLMs, Machine Learning) with modern, high-polish user experiences."
    },
    {
      keywords: ['crowdflow', 'crowdflow ai', 'flow', 'digital twin', 'conformal', 'pressure', 'eva'],
      answer: "CrowdFlow AI is Naveen's flagship Computer Vision & crowd safety decision-support system built for the SEVA First Innovation Challenge. It features real-time YOLOv8 pedestrian tracking, optical flow kinematics (Pressure = Density × Velocity Turbulence), 1-to-5 minute conformal risk forecasting, forward digital twin 'what-if' simulations, tamper-proof SHA-256 cryptographic audit logging, and a 12-screen React Native Android mobile app. Check it out on GitHub: https://github.com/naveens005/CROWD-FLOW-AI or open the interactive case study!"
    },
    {
      keywords: ['crowdguard', 'crowdguard 3.0', 'multi-camera', 'sms', 'twilio', 'officials', 'roster', 'dispatch'],
      answer: "CrowdGuard 3.0 is Naveen's real-time multi-camera crowd monitoring and emergency dispatch platform built with YOLOv8, OpenCV, Flask, and Socket.IO. It monitors venue zones via dynamic density grids and dispatches automated Twilio SMS alerts to on-duty officials based on live GPS rosters. Check it out on GitHub: https://github.com/naveens005/crowdguard-backend or view the case study!"
    },
    {
      keywords: ['brainrot', 'wellbeing', 'behavior', 'screentime', 'cognitive'],
      answer: "BrainRot is an intelligent behavioral analytics platform that analyzes cognitive load, dopamine cycle triggers, and screentime patterns to improve digital wellbeing through predictive AI."
    },
    {
      keywords: ['chat', 'conversational', 'llm', 'rag', 'langchain', 'agent'],
      answer: "Naveen's Conversational AI Suite includes enterprise multi-agent workflows and RAG pipelines that index vector knowledge bases to provide high-precision, low-latency contextual dialogue."
    },
    {
      keywords: ['fake', 'identity', 'document', 'screening', 'forgery', 'ela', 'tamper', 'passport'],
      answer: "AI-Based Fake Identity Document Screening is Naveen's deep learning & computer vision pipeline that detects forged IDs and passports using Error Level Analysis (ELA), frequency FFT analysis, and OCR cross-validation. You can inspect the interactive case study in the Selected Work section or on GitHub: https://github.com/naveens005/AI-Based-Fake-Identity-Document-Screening."
    },
    {
      keywords: ['expense', 'spendcompass', 'tracker', 'budget', 'allowance', 'money', 'afford'],
      answer: "SpendCompass is Naveen's production-grade, local-first daily budget & expense tracker built for Android & iOS. It features an adaptive daily allowance engine with EWMA seasonality modeling, a 'Can I Afford This?' purchase simulator, and 100% privacy-compliant bank SMS parsing without invasive permissions. Check out the GitHub repo at https://github.com/naveens005/EXPENSE-TRACKER or open its case study in the Selected Work section!"
    },
    {
      keywords: ['nova', 'nova-ai', 'android', 'apk', 'kotlin', 'gemini', 'mobile', 'chatbot', 'streaming', 'sse'],
      answer: "Nova AI is Naveen's standalone Android AI assistant built natively with Kotlin and Jetpack Compose. It connects directly via encrypted HTTPS to Google Gemini Cloud with real-time SSE token streaming, completely eliminating the need for companion laptops or server proxies. It features dynamic model discovery, encrypted DataStore credential storage, and a compiled production-ready APK (18 MB). Check out the GitHub repo at https://github.com/naveens005/NOVA-AI or download the APK directly from the portfolio!"
    },
    {
      keywords: ['projects', 'work', 'built', 'portfolio', 'creations'],
      answer: "Naveen has built seven featured projects: [1] CrowdFlow AI (Real-time crowd safety decision support, digital twin & mobile app), [2] CrowdGuard 3.0 (Multi-camera surveillance & Twilio SMS dispatch), [3] BrainRot (Behavioral AI & digital wellbeing), [4] Conversational AI Suite (Enterprise RAG & multi-agent system), [5] Fake ID Screening AI (Deep learning document forgery screening), [6] SpendCompass (Smart local-first expense tracker & EWMA daily budget engine), and [7] Nova AI (Standalone Android Gemini chatbot & direct cloud streaming). Which one would you like to explore?"
    },
    {
      keywords: ['patent', 'invention', 'gesture', 'mouse', 'assistive', 'impaired', '202541055330'],
      answer: "Naveen is the co-inventor of 'Gesture Controlled Mouse Interface for Physically Impaired Users' (Indian Patent App No. 202541055330 A). It maps 21 hand-landmark spatial coordinates via computer vision to allow touchless, precise OS cursor control."
    },
    {
      keywords: ['skills', 'tech', 'stack', 'languages', 'python', 'figma', 'tools'],
      answer: "Naveen's core toolkit spans AI/ML (Python, PyTorch, YOLOv8, OpenCV, LangChain, RAG, Scikit-Learn), Data Analytics (SQL, Pandas, NumPy), and Product Design (Figma, Design Systems, UI/UX Prototyping, Frontend Web Systems)."
    },
    {
      keywords: ['hackathon', 'achievements', 'isro', 'bharatiya', 'hackfinity', 'awards'],
      answer: "Naveen's achievements include being selected for the Bharatiya Antariksh Hackathon 2026 (ISRO × Hack2Skill), competing in HackFinity 2025 (24-Hour National Hackathon), and filing a co-inventor patent in assistive AI technology."
    },
    {
      keywords: ['contact', 'hire', 'available', 'email', 'opportunity', 'job', 'reach', 'github'],
      answer: "Naveen is actively open to impactful AI/ML Engineering, Product Design, and Multidisciplinary AI roles. You can reach him directly at naveens1077@gmail.com, inspect his code on GitHub (https://github.com/naveens005), or connect on LinkedIn!"
    },
    {
      keywords: ['resume', 'cv', 'download'],
      answer: "You can view and download Naveen's official resume right inside this portfolio using the top navigation '[ RESUME ]' button or the command palette (Ctrl+K)."
    }
  ];

  function openAssistant() {
    drawer.classList.add('active');
    if (messagesContainer.children.length === 0) {
      addBotMessage("Hi! I'm NaveenAI. Ask me anything about Naveen's AI projects, patent, technical skills, or background!");
    }
    setTimeout(() => input && input.focus(), 100);
  }

  function closeAssistant() {
    drawer.classList.remove('active');
  }

  function toggleAssistant() {
    if (drawer.classList.contains('active')) {
      closeAssistant();
    } else {
      openAssistant();
    }
  }

  function addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'ai-msg bot';
    msg.textContent = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'ai-msg user';
    msg.textContent = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function processQuery(query) {
    if (!query.trim()) return;
    addUserMessage(query);
    input.value = '';

    // Show typing state
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'ai-msg bot';
    typingIndicator.innerHTML = '<span style="opacity:0.6; font-style:italic;">Analyzing query...</span>';
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      const q = query.toLowerCase();
      let bestMatch = null;
      let maxScore = 0;

      knowledgeBase.forEach(item => {
        let score = 0;
        item.keywords.forEach(kw => {
          if (q.includes(kw)) score += 2;
        });
        if (score > maxScore) {
          maxScore = score;
          bestMatch = item;
        }
      });

      if (bestMatch && maxScore > 0) {
        addBotMessage(bestMatch.answer);
      } else {
        addBotMessage("I specialize in answering questions regarding Naveen's AI work, CrowdFlow AI, CrowdGuard 3.0, his patent on gesture mouse control, skills in Python/Figma, and career background. Feel free to click any suggestion chip or email him directly at naveens1077@gmail.com!");
      }
    }, 450);
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAssistant();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAssistant();
    });
  }

  // Click outside to close assistant
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('active')) {
      if (!drawer.contains(e.target) && !triggerBtn?.contains(e.target)) {
        closeAssistant();
      }
    }
  });

  // Escape key to close assistant
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeAssistant();
    }
  });

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => processQuery(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') processQuery(input.value);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt') || chip.textContent;
      processQuery(prompt);
    });
  });

  return { openAssistant, closeAssistant, toggleAssistant };
}
