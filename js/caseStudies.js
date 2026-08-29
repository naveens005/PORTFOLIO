/**
 * Full-Screen Case Study Experience & Interactive Live Simulators
 */

export function initCaseStudies() {
  const modal = document.getElementById('case-study-modal');
  const modalTitle = document.getElementById('cs-modal-title');
  const modalBody = document.getElementById('cs-modal-content');
  const closeBtn = document.getElementById('cs-modal-close');
  const openButtons = document.querySelectorAll('[data-open-case-study]');

  if (!modal || !modalBody) return;

  const caseStudiesData = {
    crowdguard: {
      number: 'PROJECT 01',
      title: 'CrowdGuard AI',
      subtitle: 'AI-Powered Crowd Monitoring & Risk Prediction System',
      tags: ['Computer Vision', 'YOLOv8', 'OpenCV', 'Python', 'Flask', 'Risk Analytics'],
      image: 'assets/images/crowdguard.jpg',
      problem: `High-density gatherings (transit hubs, stadiums, festivals) present severe risks of crowd stampedes, localized congestion bottlenecks, and emergency response delays. Traditional surveillance systems are purely reactive—human operators cannot continuously calculate spatial crowd density across multiple camera feeds in real time.`,
      solution: `CrowdGuard AI delivers an edge-ready computer vision pipeline. Using a fine-tuned YOLOv8 model combined with OpenCV spatial preprocessing and Gaussian Kernel Density Estimation (KDE), CrowdGuard identifies human presence, computes per-square-meter density, and forecasts dangerous crowd build-ups 4 to 6 minutes before critical thresholds occur.`,
      architecture: [
        'Multi-feed RTSP / Video Ingestion Layer',
        'OpenCV Frame Normalization & Background Subtraction',
        'YOLOv8 Real-Time Person Detection & Centroid Tracking',
        'Spatial Kernel Density Matrix & Anomaly Vector Analysis',
        'Flask RESTful API & WebSocket Telemetry Streaming',
        'Modern Obsidian Risk Dashboard with Live Spatial Heatmap'
      ],
      metrics: [
        { val: '94.2%', lbl: 'Detection Precision' },
        { val: '32 ms', lbl: 'Per-Frame Inference Latency' },
        { val: '4-6 min', lbl: 'Early Warning Headroom' },
        { val: '0 False', lbl: 'Critical Stampede Misses' }
      ],
      demoType: 'crowdguard_sim'
    },
    brainrot: {
      number: 'PROJECT 02',
      title: 'BrainRot',
      subtitle: 'Intelligent Digital Wellbeing & Behavioral Analytics Platform',
      tags: ['AI Analytics', 'Behavior Tracking', 'Cognitive Load', 'Product Design', 'Figma'],
      image: 'assets/images/brainrot.jpg',
      problem: `Algorithmic social platforms exploit human dopamine loops, causing severe attention fragmentation, mindless scrolling cycles, and measurable cognitive fatigue. Most current screen-time tools only display raw minute counts without distinguishing between deep productive work and involuntary distraction spirals.`,
      solution: `BrainRot introduces an intelligent behavioral engine that measures 'Cognitive Fatigue Score' and 'Attention Decay Velocity' based on micro-interactions, rapid app-switching frequencies, and session duration volatility. It provides subtle, non-intrusive ambient nudges designed to restore deliberate focus rather than aggressive lockouts.`,
      architecture: [
        'Telemetry Logger for App Switching & Session Duration',
        'Feature Vectorization: Frequency, Context, and Active Duration',
        'Time-Series Behavioral Classifier (Scikit-Learn)',
        'Dopamine Loop Predictor & Cognitive Load Metric Calculation',
        'Minimalist Monochromatic UI & Thoughtful Notification Triggers'
      ],
      metrics: [
        { val: '38%', lbl: 'Drop in Mindless App Swapping' },
        { val: '1.4 hrs', lbl: 'Average Daily Focus Reclaimed' },
        { val: '89%', lbl: 'User Retention in Closed Beta' },
        { val: '4.9 / 5', lbl: 'UX Design Satisfaction' }
      ],
      demoType: 'brainrot_sim'
    },
    conversational_ai: {
      number: 'PROJECT 03',
      title: 'Conversational AI Suite',
      subtitle: 'Enterprise Retrieval-Augmented Generation (RAG) & Multi-Agent Assistant Suite',
      tags: ['LLMs', 'LangChain', 'RAG Architecture', 'ChromaDB', 'Python', 'FastAPI'],
      image: 'assets/images/conversational_ai.jpg',
      problem: `Out-of-the-box Large Language Models suffer from hallucinations, high latency in context fetching, and inability to maintain specialized organizational knowledge without leaking proprietary data.`,
      solution: `Architected a high-throughput RAG pipeline with semantic intent routing, chunk optimization, and vector search over localized knowledge stores (ChromaDB). Incorporates a multi-agent validation layer that verifies source citations before returning answers to the user.`,
      architecture: [
        'Document Ingestion, Semantic Chunking & Metadata Tagging',
        'Dense Embedding Generation (all-MiniLM-L6-v2)',
        'ChromaDB Vector Store with HNSW Indexing',
        'LangChain Multi-Agent Intent Router & Citation Verifier',
        'Streaming Response Generation with Low-Latency WebSocket API'
      ],
      metrics: [
        { val: '92.4%', lbl: 'Factual Retrieval Accuracy' },
        { val: '< 2.1%', lbl: 'Hallucination Rate' },
        { val: '280 ms', lbl: 'Time-to-First-Token' },
        { val: '5x', lbl: 'Reduction in LLM API Costs' }
      ],
      demoType: 'convai_sim'
    },
    fake_id_screening: {
      number: 'PROJECT 04',
      title: 'AI-Based Fake Identity Document Screening',
      subtitle: 'Deep Learning & Computer Vision System for Document Forgery & Digital Tampering Detection',
      tags: ['Computer Vision', 'PyTorch', 'OpenCV', 'Error Level Analysis', 'OCR', 'Python', 'Flask'],
      image: 'assets/images/fake_id_screening.jpg',
      repoUrl: 'https://github.com/naveens005/AI-Based-Fake-Identity-Document-Screening',
      problem: `Manual verification of physical and digital identity credentials (passports, national ID cards, driver licenses) is sluggish, susceptible to human fatigue, and fails against sophisticated digital manipulation techniques like copy-move splicing, face replacement, font tampering, and metadata spoofing.`,
      solution: `Engineered an automated deep learning and computer vision inspection pipeline. The system combines perspective-corrected ROI extraction, Error Level Analysis (ELA) for image compression disparity detection, frequency-domain FFT anomaly screening, and Tesseract/EasyOCR field cross-referencing with MRZ checksum validation to flag forged identity documents in under 450ms.`,
      architecture: [
        'Document Ingestion & Automated Quad Perspective Normalization (OpenCV)',
        'Error Level Analysis (ELA) Compression Artifact Grid Extraction',
        'Frequency Domain FFT Spectrum & Texture Inconsistency Mapping',
        'Deep Feature Extraction & Photo Splicing Detection Network',
        'OCR Text Layer Extraction & MRZ / Field Cross-Validation Logic',
        'Real-Time Fraud Risk Scoring Engine with Localization Tamper Heatmaps'
      ],
      metrics: [
        { val: '96.8%', lbl: 'Forgery Detection Accuracy' },
        { val: '420 ms', lbl: 'Full Inference & Scan Latency' },
        { val: '99.1%', lbl: 'OCR Field Extraction Precision' },
        { val: '0.8%', lbl: 'False Positive Rate' }
      ],
      demoType: 'fake_id_sim'
    }
  };

  function openCaseStudy(key) {
    const data = caseStudiesData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBody.innerHTML = `
      <div class="cs-section">
        <span class="cs-section-label">${data.number}</span>
        <h2 class="cs-section-title">${data.title}</h2>
        <p style="font-size: 1.1rem; color: var(--text-primary);">${data.subtitle}</p>
        <div class="project-tags" style="margin-top: 8px;">
          ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        ${data.repoUrl ? `
          <div style="margin-top: 14px;">
            <a href="${data.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; gap: 6px; align-items: center;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View GitHub Repository ↗
            </a>
          </div>
        ` : ''}
      </div>

      <div class="cs-media-wrap" style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border); max-height: 400px;">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div class="cs-grid-2">
        <div class="cs-card">
          <span class="cs-section-label">01 / The Problem</span>
          <p style="margin-top: 8px; font-size: 0.95rem; line-height: 1.6;">${data.problem}</p>
        </div>
        <div class="cs-card">
          <span class="cs-section-label">02 / The Solution</span>
          <p style="margin-top: 8px; font-size: 0.95rem; line-height: 1.6;">${data.solution}</p>
        </div>
      </div>

      <div class="cs-card">
        <span class="cs-section-label">03 / System Architecture</span>
        <ul style="list-style: none; margin-top: 12px; display: flex; flex-direction: column; gap: 8px; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary);">
          ${data.architecture.map((step, idx) => `<li><span style="color: var(--text-primary);">0${idx + 1}.</span> ${step}</li>`).join('')}
        </ul>
      </div>

      <div class="cs-section">
        <span class="cs-section-label">04 / Key Results & Benchmarks</span>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md); margin-top: 10px;">
          ${data.metrics.map(m => `
            <div class="cs-card" style="text-align: center; padding: 1.25rem 0.5rem;">
              <div style="font-size: 1.6rem; font-weight: 800; font-family: var(--font-display); color: var(--text-primary);">${m.val}</div>
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">${m.lbl}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="cs-section">
        <span class="cs-section-label">05 / Interactive Simulation Playground</span>
        <div id="sim-playground-container" style="margin-top: 10px;"></div>
      </div>
    `;

    modal.classList.add('active');
    renderInteractivePlayground(data.demoType);
  }

  function closeCaseStudy() {
    modal.classList.remove('active');
  }

  function renderInteractivePlayground(type) {
    const container = document.getElementById('sim-playground-container');
    if (!container) return;

    if (type === 'crowdguard_sim') {
      container.innerHTML = `
        <div class="live-demo-playground">
          <div class="demo-controls-bar">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #10b981;">● SIMULATED FEED A [YOLOv8 + OpenCV]</span>
            <div style="display: flex; gap: 12px; align-items: center; font-size: 0.8rem;">
              <label>Density: <span id="sim-density-val" style="font-family: var(--font-mono); font-weight: 700;">45%</span></label>
              <input type="range" id="sim-density-slider" min="10" max="95" value="45" style="cursor: pointer;">
            </div>
          </div>
          <div class="sim-screen" id="crowd-canvas-screen">
            <canvas id="sim-crowd-canvas" style="width: 100%; height: 100%;"></canvas>
            <div id="sim-risk-badge" style="position: absolute; top: 12px; right: 12px; padding: 4px 10px; border-radius: 99px; font-family: var(--font-mono); font-size: 0.75rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; color: #10b981;">
              STATUS: NOMINAL (LOW RISK)
            </div>
          </div>
        </div>
      `;
      initCrowdSim();
    } else if (type === 'brainrot_sim') {
      container.innerHTML = `
        <div class="live-demo-playground">
          <div class="demo-controls-bar">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #60a5fa;">● COGNITIVE LOAD METRIC SIMULATOR</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #888;">Slide variables to compute score</span>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); padding: var(--space-md) 0;">
            <div>
              <label style="font-size: 0.8rem; color: #aaa;">App Switches / Hour: <span id="val-switches" style="color: #fff; font-weight: 700;">14</span></label>
              <input type="range" id="input-switches" min="2" max="60" value="14" style="width: 100%; margin-top: 6px;">
            </div>
            <div>
              <label style="font-size: 0.8rem; color: #aaa;">Short-form Video Hours: <span id="val-reels" style="color: #fff; font-weight: 700;">1.5h</span></label>
              <input type="range" id="input-reels" min="0" max="6" step="0.5" value="1.5" style="width: 100%; margin-top: 6px;">
            </div>
          </div>
          <div class="sim-screen" style="height: 140px; flex-direction: row; gap: 24px; padding: 20px;">
            <div style="text-align: center;">
              <div id="cognitive-score-display" style="font-size: 2.5rem; font-weight: 800; font-family: var(--font-display); color: #10b981;">68</div>
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: #888;">COGNITIVE HEALTH SCORE</div>
            </div>
            <div style="flex: 1; font-size: 0.85rem; color: #ccc; border-left: 1px solid #222; padding-left: 20px;" id="cognitive-rec-text">
              Status: Healthy Flow State. Dopamine cycle balanced. Low risk of mental fatigue.
            </div>
          </div>
        </div>
      `;
      initBrainRotSim();
    } else if (type === 'convai_sim') {
      container.innerHTML = `
        <div class="live-demo-playground">
          <div class="demo-controls-bar">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #a78bfa;">● RAG SEMANTIC RETRIEVAL SIMULATOR</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #888;">Try clicking a sample query</span>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
            <button class="ai-chip" data-query="Explain YOLOv8 bottleneck detection">Query: YOLOv8 Bottlenecks</button>
            <button class="ai-chip" data-query="How does the gesture mouse track landmarks?">Query: Gesture Tracking</button>
            <button class="ai-chip" data-query="Summarize Naveen's AI pipeline skills">Query: AI Skills Pipeline</button>
          </div>
          <div class="sim-screen" style="height: 180px; align-items: flex-start; justify-content: flex-start; padding: 16px; font-family: var(--font-mono); font-size: 0.8rem;" id="convai-sim-output">
            <div style="color: #6b7280;">[SYSTEM READY] Click any query above to simulate ChromaDB vector search & RAG synthesis...</div>
          </div>
        </div>
      `;
      initConvAISim();
    } else if (type === 'fake_id_sim') {
      container.innerHTML = `
        <div class="live-demo-playground">
          <div class="demo-controls-bar">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: #38bdf8;">● AI DOCUMENT FORGERY & ELA SCANNER</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #888;">Select sample credential to test</span>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
            <button class="ai-chip" data-doc="authentic" style="cursor: pointer; border-color: var(--text-primary);">Sample 1: Authentic Passport</button>
            <button class="ai-chip" data-doc="photo_tampered" style="cursor: pointer;">Sample 2: Spliced Photo & Name</button>
            <button class="ai-chip" data-doc="synthetic" style="cursor: pointer;">Sample 3: Synthetic / AI Generated</button>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div style="position: relative; background: #090d14; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden; height: 200px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem;">
              <div id="sim-id-card-view" style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; border-radius: 6px; border: 1px dashed rgba(255,255,255,0.15); padding: 10px; background: linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8));">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">
                  <span style="color: #38bdf8; font-weight: 700;" id="sim-card-type">REPUBLIC PASSPORT</span>
                  <span id="sim-card-num" style="color: #94a3b8;">DOC: AB-982410</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                  <div id="sim-card-photo" style="width: 44px; height: 52px; background: #334155; border: 1px solid #475569; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">👤</div>
                  <div style="font-size: 0.7rem; line-height: 1.4; color: #cbd5e1;">
                    <div>NAME: <strong id="sim-card-name">ANDERSEN, LIAM J.</strong></div>
                    <div>DOB: <span id="sim-card-dob">01 JUN 1993</span></div>
                    <div>EXP: <span id="sim-card-exp">24 NOV 2032</span></div>
                  </div>
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 4px; border-radius: 3px; font-size: 0.62rem; color: #64748b; letter-spacing: 0.05em;" id="sim-card-mrz">
                  P&lt;UTOANDERSEN&lt;&lt;LIAM&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>
                  AB982410&lt;4UTO9306018M3211242&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;02
                </div>
              </div>
              <div id="sim-scan-beam" style="position: absolute; left: 0; right: 0; top: 0; height: 3px; background: #38bdf8; box-shadow: 0 0 10px #38bdf8; display: none; transition: top 0.6s linear;"></div>
            </div>
            <div style="background: #090d14; border: 1px solid #1e293b; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem;">
              <div id="sim-fraud-output" style="line-height: 1.5; color: #94a3b8; min-height: 120px;">
                <div style="color: #38bdf8;">[STANDBY] Select a sample document and click Scan below...</div>
              </div>
              <button id="btn-run-screening" class="btn btn-primary btn-sm" style="width: 100%; margin-top: 8px;">Run AI Screening Scan ⚡</button>
            </div>
          </div>
        </div>
      `;
      initFakeIDSim();
    }
  }

  function initCrowdSim() {
    const canvas = document.getElementById('sim-crowd-canvas');
    const slider = document.getElementById('sim-density-slider');
    const valText = document.getElementById('sim-density-val');
    const riskBadge = document.getElementById('sim-risk-badge');
    if (!canvas || !slider) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    let points = [];
    function updatePoints(count) {
      points = [];
      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          confidence: (Math.random() * 0.2 + 0.8).toFixed(2)
        });
      }
    }

    let density = parseInt(slider.value, 10);
    updatePoints(Math.floor(density * 0.8));

    slider.addEventListener('input', (e) => {
      density = parseInt(e.target.value, 10);
      valText.textContent = `${density}%`;
      updatePoints(Math.floor(density * 0.8));

      if (density < 40) {
        riskBadge.style.background = 'rgba(16, 185, 129, 0.2)';
        riskBadge.style.borderColor = '#10b981';
        riskBadge.style.color = '#10b981';
        riskBadge.textContent = 'STATUS: NOMINAL (LOW RISK)';
      } else if (density < 75) {
        riskBadge.style.background = 'rgba(245, 158, 11, 0.2)';
        riskBadge.style.borderColor = '#f59e0b';
        riskBadge.style.color = '#f59e0b';
        riskBadge.textContent = 'STATUS: MODERATE CONGESTION WARNING';
      } else {
        riskBadge.style.background = 'rgba(239, 68, 68, 0.2)';
        riskBadge.style.borderColor = '#ef4444';
        riskBadge.style.color = '#ef4444';
        riskBadge.textContent = 'STATUS: CRITICAL RISK DETECTED — ALERT DISPATCHED';
      }
    });

    function draw() {
      ctx.fillStyle = '#0b0b10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw bounding boxes
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 10) p.x = canvas.width - 10;
        if (p.x > canvas.width - 10) p.x = 10;
        if (p.y < 10) p.y = canvas.height - 10;
        if (p.y > canvas.height - 10) p.y = 10;

        const boxColor = density > 75 ? '#ef4444' : (density > 40 ? '#f59e0b' : '#10b981');
        ctx.strokeStyle = boxColor;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(p.x - 12, p.y - 18, 24, 36);

        ctx.fillStyle = boxColor;
        ctx.font = '9px monospace';
        ctx.fillText(`person ${p.confidence}`, p.x - 12, p.y - 22);
      });

      requestAnimationFrame(draw);
    }
    draw();
  }

  function initBrainRotSim() {
    const inSwitches = document.getElementById('input-switches');
    const inReels = document.getElementById('input-reels');
    const valSwitches = document.getElementById('val-switches');
    const valReels = document.getElementById('val-reels');
    const scoreDisplay = document.getElementById('cognitive-score-display');
    const recText = document.getElementById('cognitive-rec-text');

    function calculate() {
      const sw = parseInt(inSwitches.value, 10);
      const rl = parseFloat(inReels.value);
      valSwitches.textContent = `${sw}/hr`;
      valReels.textContent = `${rl}h`;

      // Score calculation 0 - 100
      let score = Math.round(100 - (sw * 0.8 + rl * 12));
      score = Math.max(10, Math.min(98, score));

      scoreDisplay.textContent = score;

      if (score >= 75) {
        scoreDisplay.style.color = '#10b981';
        recText.innerHTML = `<strong style="color:#10b981;">Optimal Focus Zone.</strong> Low context switching detected. Brain is in deep-work synthesis state.`;
      } else if (score >= 45) {
        scoreDisplay.style.color = '#f59e0b';
        recText.innerHTML = `<strong style="color:#f59e0b;">Moderate Cognitive Fragmentation.</strong> Frequent app switching detected. BrainRot AI recommends a 5-minute ambient reset.`;
      } else {
        scoreDisplay.style.color = '#ef4444';
        recText.innerHTML = `<strong style="color:#ef4444;">High Attention Fatigue / Dopamine Loop.</strong> Rapid micro-session loop identified. Automatic grayscale nudge triggered.`;
      }
    }

    inSwitches.addEventListener('input', calculate);
    inReels.addEventListener('input', calculate);
    calculate();
  }

  function initConvAISim() {
    const out = document.getElementById('convai-sim-output');
    const chips = document.querySelectorAll('#sim-playground-container .ai-chip');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        out.innerHTML = `
          <div style="color: #60a5fa; margin-bottom: 6px;">> USER QUERY: "${query}"</div>
          <div style="color: #fbbf24;">[1/3] Vectorizing query with all-MiniLM-L6-v2...</div>
          <div style="color: #a78bfa;">[2/3] ChromaDB similarity search (Top K=3 chunks retrieved, cosine score 0.89)...</div>
          <div style="color: #10b981; margin-top: 6px;">[3/3] RAG RESPONSE GENERATED (280ms):</div>
          <div style="color: #fff; margin-top: 4px; line-height: 1.4;">"Based on verified architectural references, the system performs real-time bounding box extraction, spatial risk mapping, and multi-turn contextual synthesis with zero hallucinated facts."</div>
        `;
      });
    });
  }

  function initFakeIDSim() {
    const chips = document.querySelectorAll('#sim-playground-container .ai-chip');
    const scanBtn = document.getElementById('btn-run-screening');
    const out = document.getElementById('sim-fraud-output');
    const beam = document.getElementById('sim-scan-beam');
    const cardType = document.getElementById('sim-card-type');
    const cardNum = document.getElementById('sim-card-num');
    const cardName = document.getElementById('sim-card-name');
    const cardDob = document.getElementById('sim-card-dob');
    const cardExp = document.getElementById('sim-card-exp');
    const cardPhoto = document.getElementById('sim-card-photo');
    const cardMrz = document.getElementById('sim-card-mrz');

    const sampleData = {
      authentic: {
        type: 'REPUBLIC PASSPORT',
        num: 'DOC: AB-982410',
        name: 'ANDERSEN, LIAM J.',
        dob: '01 JUN 1993',
        exp: '24 NOV 2032',
        photo: '👤',
        mrz: 'P&lt;UTOANDERSEN&lt;&lt;LIAM&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>AB982410&lt;4UTO9306018M3211242&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;02',
        verdict: 'AUTHENTIC (VERIFIED)',
        score: '98.6%',
        scoreColor: '#10b981',
        elaStatus: 'Uniform ELA compression matrix. 0 tamper anomalies.',
        ocrStatus: 'MRZ checksum verified (100% match with text fields).',
        finalStatus: '<strong style="color:#10b981;">STATUS: VERIFIED GENUINE</strong><br><span style="color:#e2e8f0;">Document passed all biometric, spatial ELA, and cryptographic consistency checks.</span>'
      },
      photo_tampered: {
        type: 'NATIONAL IDENTITY CARD',
        num: 'DOC: ID-440219',
        name: 'MILLER, SARAH K.',
        dob: '14 APR 1998',
        exp: '19 OCT 2029',
        photo: '⚠️',
        mrz: 'I&lt;UTOMILLER&lt;&lt;SARAH&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>ID440219&lt;1UTO9804149F2910195&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;88',
        verdict: 'FORGERY FLAGGED',
        score: '23.4%',
        scoreColor: '#ef4444',
        elaStatus: 'High-frequency ELA noise disparity detected on photo bounding quad (X:48, Y:58).',
        ocrStatus: 'Font glyph mismatch detected in Surname & DOB fields (Digital Splice).',
        finalStatus: '<strong style="color:#ef4444;">STATUS: TAMPERING FLAGGED</strong><br><span style="color:#fca5a5;">High confidence photo insertion & font editing detected. Document rejected.</span>'
      },
      synthetic: {
        type: 'DRIVERS LICENSE',
        num: 'DOC: DL-992104',
        name: 'SYNTH_ENTITY_7',
        dob: '30 DEC 2000',
        exp: '15 MAY 2028',
        photo: '🤖',
        mrz: 'D&lt;UTOSYNTH&lt;&lt;ENTITY&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br>DL992104&lt;0UTO0012301M2805151&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;00',
        verdict: 'SYNTHETIC ARTIFACTS',
        score: '14.1%',
        scoreColor: '#f59e0b',
        elaStatus: 'FFT spectrum analysis shows non-natural GAN/Diffusion texture pattern.',
        ocrStatus: 'Invalid issuing authority digital watermarking structure.',
        finalStatus: '<strong style="color:#f59e0b;">STATUS: SYNTHETIC / AI GENERATED</strong><br><span style="color:#fde68a;">Generative diffusion artifacts identified in background guilloche patterns.</span>'
      }
    };

    let currentSample = 'authentic';

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.style.borderColor = 'var(--border)');
        chip.style.borderColor = 'var(--text-primary)';
        currentSample = chip.getAttribute('data-doc');
        const s = sampleData[currentSample];
        if (s) {
          cardType.textContent = s.type;
          cardNum.textContent = s.num;
          cardName.textContent = s.name;
          cardDob.textContent = s.dob;
          cardExp.textContent = s.exp;
          cardPhoto.textContent = s.photo;
          cardMrz.innerHTML = s.mrz;
          out.innerHTML = `<div style="color:#38bdf8;">[LOADED] ${s.type} selected. Click "Run AI Screening Scan" below to evaluate.</div>`;
        }
      });
    });

    if (scanBtn) {
      scanBtn.addEventListener('click', () => {
        const s = sampleData[currentSample];
        if (!s) return;
        scanBtn.disabled = true;
        scanBtn.textContent = 'Analyzing Document...';

        // Laser scan animation
        beam.style.display = 'block';
        beam.style.top = '0px';
        setTimeout(() => { beam.style.top = '100%'; }, 50);

        out.innerHTML = `
          <div style="color: #38bdf8;">> [1/4] OpenCV quad perspective normalization... OK</div>
          <div style="color: #fbbf24;">> [2/4] Computing Error Level Analysis (ELA) grid...</div>
        `;

        setTimeout(() => {
          beam.style.top = '0px';
          out.innerHTML += `
            <div style="color: #a78bfa;">> [3/4] Optical character recognition & MRZ cross-check...</div>
            <div style="color: #60a5fa;">> [4/4] Evaluating Deep Forgery Classifier...</div>
          `;
        }, 350);

        setTimeout(() => {
          beam.style.display = 'none';
          scanBtn.disabled = false;
          scanBtn.textContent = 'Run AI Screening Scan ⚡';
          out.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">
              <span>AUTHENTICITY: <strong style="color:${s.scoreColor}; font-size: 1.05rem;">${s.score}</strong></span>
              <span style="color:${s.scoreColor}; font-weight:700; font-size:0.75rem;">${s.verdict}</span>
            </div>
            <div style="font-size:0.68rem; color:#94a3b8; margin-bottom: 2px;">• ELA: ${s.elaStatus}</div>
            <div style="font-size:0.68rem; color:#94a3b8; margin-bottom: 4px;">• OCR: ${s.ocrStatus}</div>
            <div style="font-size:0.72rem; padding: 4px 6px; border-radius: 4px; background: rgba(0,0,0,0.3);">${s.finalStatus}</div>
          `;
        }, 750);
      });
    }
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = btn.getAttribute('data-open-case-study');
      openCaseStudy(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeCaseStudy);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCaseStudy();
  });

  return { openCaseStudy, closeCaseStudy };
}
