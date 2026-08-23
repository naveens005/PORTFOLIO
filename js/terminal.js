/**
 * NaveenOS v1.0 — Ultra-Interactive Developer CLI Terminal
 * Feature-Packed with ML Simulators, Unix Utilities, Easter Eggs & Games
 */

export function initTerminal() {
  const modal = document.getElementById('terminal-modal');
  const win = document.querySelector('.terminal-window');
  const body = document.getElementById('terminal-body');
  const output = document.getElementById('terminal-output');
  const input = document.getElementById('terminal-input');
  const triggerBtns = document.querySelectorAll('.terminal-trigger-btn');
  const closeBtn = document.querySelector('.terminal-dot.dot-red');

  if (!modal || !output || !input) return;

  const availableCommands = [
    'help', 'naveenfetch', 'ai predict', 'patent sim', 'quiz', 'speedtest',
    'sudo hire naveen', 'weather chennai', 'cowsay', 'calc', 'matrix',
    'clock', 'quote', 'theme matrix', 'theme cyberpunk', 'theme amber', 'theme mono',
    'whoami', 'skills', 'projects', 'patent', 'experience', 'education', 'contact',
    'curl resume', 'cat resume', 'ls', 'pwd', 'date', 'uptime', 'clear', 'exit'
  ];

  const welcomeBanner = `
<span class="terminal-out-blue">  _   _                            ___  ____  </span>
<span class="terminal-out-blue"> | \\ | | __ ___   _____  ___ _ __  / _ \\/ ___| </span>
<span class="terminal-out-blue"> |  \\| |/ _\` \\ \\ / / _ \\/ _ \\ '_ \\| | | \\___ \\ </span>
<span class="terminal-out-blue"> | |\\  | (_| |\\ V /  __/  __/ | | | |_| |___) |</span>
<span class="terminal-out-blue"> |_| \\_|\\__,_| \\_/ \\___|\\___|_| |_|\\___/|____/ </span>
<span class="terminal-out-bold">NaveenOS Kernel v1.0.4-release</span> (Interactive AI & Product CLI)

<span class="terminal-out-yellow">┌─────────────────────────────────────────────────────────────┐</span>
<span class="terminal-out-yellow">│</span> 💡 <span class="terminal-out-bold">INTERACTIVE HINT:</span>                                         <span class="terminal-out-yellow">│</span>
<span class="terminal-out-yellow">│</span> • <span class="terminal-out-green">Click any Quick Action pill above</span> to run instantly!      <span class="terminal-out-yellow">│</span>
<span class="terminal-out-yellow">│</span> • Type <span class="terminal-out-green">'help'</span> for all 25+ commands                          <span class="terminal-out-yellow">│</span>
<span class="terminal-out-yellow">│</span> • Try: <span class="terminal-out-cyan">'naveenfetch'</span>, <span class="terminal-out-cyan">'ai predict'</span>, <span class="terminal-out-cyan">'speedtest'</span>, or <span class="terminal-out-cyan">'quiz'</span>   <span class="terminal-out-yellow">│</span>
<span class="terminal-out-yellow">└─────────────────────────────────────────────────────────────┘</span>
`;

  function printLine(text, className = '') {
    const line = document.createElement('div');
    if (className) line.className = className;
    line.innerHTML = text;
    output.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  function initScreen() {
    output.innerHTML = '';
    printLine(welcomeBanner, 'terminal-out-muted');
  }

  function openTerminal() {
    modal.classList.add('active');
    if (output.children.length === 0) {
      initScreen();
    }
    setTimeout(() => input.focus(), 50);
  }

  function closeTerminal() {
    modal.classList.remove('active');
  }

  // Quotes Database
  const quotes = [
    { text: "Simple things should be simple, complex things should be possible.", author: "Alan Kay" },
    { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { text: "Neural networks are software 2.0. We are writing programs with optimization rather than logic.", author: "Andrej Karpathy" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" }
  ];

  // Quiz Questions
  const quizQuestions = [
    {
      q: "What does YOLO stand for in real-time Computer Vision?",
      options: ["1. You Only Look Once", "2. Yield Optimization Layout Output", "3. Year Old Learning Object", "4. YAML Object Lexer Operator"],
      answer: "1",
      explain: "YOLO (You Only Look Once) is an iconic single-stage object detection architecture."
    },
    {
      q: "In UI/UX Design, what is the golden rule of Jakob's Law?",
      options: ["1. Colors must have 10:1 contrast", "2. Users spend most of their time on other sites, so they prefer familiar patterns", "3. Every page needs 3 animations", "4. Always hide search bars"],
      answer: "2",
      explain: "Jakob's Law states users expect your site to work like all other sites they already know."
    },
    {
      q: "What coordinate space does MediaPipe hand-tracking extract for gesture interfaces?",
      options: ["1. 2D pixels only", "2. 10 palm points", "3. 21 3D hand landmarks [X, Y, Z]", "4. Heatmap scalars"],
      answer: "3",
      explain: "MediaPipe extracts 21 3-dimensional spatial landmarks across fingertips, knuckles, and wrist."
    }
  ];

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    history.push(cmd);
    historyIndex = history.length;

    printLine(`<span class="terminal-prompt-sym">naveen@portfolio:~$</span> ${cmd}`, 'terminal-prompt-echo');

    // Handle Quiz In-Progress
    if (quizState.active) {
      handleQuizAnswer(cmd);
      return;
    }

    const parts = cmd.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    const argsStr = args.join(' ');

    switch (mainCmd) {
      case 'hi':
      case 'hello':
      case 'hey':
        printLine(`Hello! Welcome to <span class="terminal-out-blue">NaveenOS v1.0</span>. Type <span class="terminal-out-green">'help'</span> for all commands or try <span class="terminal-out-green">'naveenfetch'</span>!`);
        break;

      case 'help':
        printLine(`
<span class="terminal-out-yellow">✦ NAVEEN OS COMMAND REFERENCE ✦</span>

<span class="terminal-out-cyan">[Portfolio & AI Experience]</span>
  <span class="terminal-out-green">naveenfetch</span>        Display developer ASCII status card & specs
  <span class="terminal-out-green">ai predict &lt;text&gt;</span>  Run live CrowdGuard AI density inference simulation
  <span class="terminal-out-green">patent sim</span>          Stream real-time 21-landmark gesture telemetry
  <span class="terminal-out-green">sudo hire naveen</span>    Recruiter fast-track easter egg & collaboration
  <span class="terminal-out-green">whoami / about</span>      Display bio, positioning & core philosophy
  <span class="terminal-out-green">skills</span>              List AI/ML, Data & Design tool ecosystem
  <span class="terminal-out-green">projects</span>            Inspect project architecture & case studies
  <span class="terminal-out-green">patent</span>              Indian Patent Application 202541055330 A details
  <span class="terminal-out-green">education</span>           Academic metrics & B.Tech AI & DS standing
  <span class="terminal-out-green">curl resume</span>         Open and view full official resume sheet

<span class="terminal-out-cyan">[Interactive Developer Utilities & Fun]</span>
  <span class="terminal-out-green">weather &lt;city&gt;</span>      Live simulated ASCII weather forecast
  <span class="terminal-out-green">cowsay &lt;message&gt;</span>    Linux ASCII cow speaking your message
  <span class="terminal-out-green">calc &lt;math expr&gt;</span>    Interactive CLI math calculator
  <span class="terminal-out-green">speedtest</span>           Animated bandwidth & ping benchmark
  <span class="terminal-out-green">hack &lt;target&gt;</span>       Hollywood hacker decryption simulation
  <span class="terminal-out-green">matrix</span>              Matrix green digital rain stream
  <span class="terminal-out-green">clock</span>               World timezone clock (Chennai, SF, London, Tokyo)
  <span class="terminal-out-green">quote / fortune</span>     Get legendary tech & AI engineering wisdom
  <span class="terminal-out-green">quiz</span>                Start interactive 3-question AI/UX challenge
  <span class="terminal-out-green">theme &lt;name&gt;</span>        Change CRT theme (<span class="terminal-out-green">matrix</span> | <span class="terminal-out-green">amber</span> | <span class="terminal-out-green">cyberpunk</span> | <span class="terminal-out-green">mono</span>)

<span class="terminal-out-cyan">[Unix Standard]</span>
  <span class="terminal-out-green">ls</span> | <span class="terminal-out-green">pwd</span> | <span class="terminal-out-green">date</span> | <span class="terminal-out-green">echo &lt;str&gt;</span> | <span class="terminal-out-green">uptime</span> | <span class="terminal-out-green">clear</span> | <span class="terminal-out-green">exit</span>
`);
        break;

      case 'naveenfetch':
      case 'neofetch':
        printLine(`
<span class="terminal-out-blue">      ___           ___     </span>   <span class="terminal-out-bold">naveen@portfolio-os</span>
<span class="terminal-out-blue">     /\\__\\         /\\  \\    </span>   -------------------
<span class="terminal-out-blue">    /::|  |       /::\\  \\   </span>   <span class="terminal-out-yellow">OS:</span> NaveenOS v1.0 (x86_64-darwin)
<span class="terminal-out-blue">   /:|:|  |      /:/\\:\\  \\  </span>   <span class="terminal-out-yellow">Host:</span> Peri Institute of Technology (2023 — 2027)
<span class="terminal-out-blue">  /:/|:|__|__   /::\\~\\:\\  \\ </span>   <span class="terminal-out-yellow">Kernel:</span> Artificial Intelligence & Data Science
<span class="terminal-out-blue"> /:/ |::::\\__\\ /:/\\:\\ \\:\\__\\</span>   <span class="terminal-out-yellow">CGPA:</span> 8.0 / 10.0 Cumulative
<span class="terminal-out-blue"> \\/__/~~/:/  / \\/_|::\\/:/  /</span>   <span class="terminal-out-yellow">Patent:</span> Gesture Controlled Mouse (#202541055330 A)
<span class="terminal-out-blue">       /:/  /     |:|::/  / </span>   <span class="terminal-out-yellow">Stack:</span> Python · PyTorch · YOLOv8 · OpenCV · Figma
<span class="terminal-out-blue">      /:/  /      |:|\\/__/  </span>   <span class="terminal-out-yellow">Availability:</span> Open for AI/ML & UI/UX Roles
<span class="terminal-out-blue">      \\/__/       |:|__|    </span>   <span class="terminal-out-yellow">Location:</span> Chennai, India (IST +05:30)

<span style="color:#ef4444">███</span><span style="color:#f97316">███</span><span style="color:#eab308">███</span><span style="color:#22c55e">███</span><span style="color:#06b6d4">███</span><span style="color:#3b82f6">███</span><span style="color:#a855f7">███</span><span style="color:#ec4899">███</span>
`);
        break;

      case 'ai':
        if (args[0] === 'predict' || args[0] === 'test') {
          const promptScene = args.slice(1).join(' ') || 'Heavy crowd near metro station platform';
          runAiInference(promptScene);
        } else {
          printLine(`Usage: <span class="terminal-out-green">ai predict &lt;scene description&gt;</span>\nExample: <span class="terminal-out-yellow">ai predict dense stadium entrance</span>`);
        }
        break;

      case 'predict':
        runAiInference(argsStr || 'Dense transit bottleneck scenario');
        break;

      case 'patent':
        if (args[0] === 'sim' || args[0] === 'demo') {
          runPatentStream();
        } else {
          printLine(`
<span class="terminal-out-yellow">PATENT APPLICATION (INDIA)</span>
Title: Gesture Controlled Mouse Interface for Physically Impaired Users
Status: Published / Pending (App No. <strong>202541055330 A</strong>)
Role: Co-inventor
Architecture: MediaPipe 21 Hand-Landmark Spatial Feature Extraction
Try <span class="terminal-out-green">'patent sim'</span> to stream live landmark telemetry!
`);
        }
        break;

      case 'sudo':
        if (args.join(' ').toLowerCase() === 'hire naveen') {
          printLine(`
<span class="terminal-out-green">[AUTH SUCCESS] Root privilege granted to hiring manager.</span>
[EVALUATING CANDIDATE] Naveen S (AI/ML Engineer & UI/UX Designer)
[METRICS] Technical Foundation: 98% | Product Craft: 96% | Team Synergy: 100%
<span class="terminal-out-cyan">[ACTION] Initializing direct connection to naveens1077@gmail.com...</span>
`);
          setTimeout(() => {
            window.location.href = 'mailto:naveens1077@gmail.com?subject=Opportunity%20Discussion%20with%20Naveen%20S&body=Hi%20Naveen,%20we%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!';
          }, 1200);
        } else {
          printLine('User naveen is in sudoers file. Incident logged.', 'terminal-out-yellow');
        }
        break;

      case 'weather':
        showWeather(argsStr || 'Chennai');
        break;

      case 'cowsay':
        const cowMsg = argsStr || 'NaveenOS: Minimal on the surface. Intelligent underneath.';
        showCowsay(cowMsg);
        break;

      case 'calc':
      case 'eval':
        if (!argsStr) {
          printLine('Usage: <span class="terminal-out-green">calc &lt;expression&gt;</span> (e.g. calc 24 * 60, calc sqrt(144))');
        } else {
          calculateExpr(argsStr);
        }
        break;

      case 'speedtest':
        runSpeedtest();
        break;

      case 'hack':
        runHackSim(argsStr || 'defense-grid.mainframe.local');
        break;

      case 'clock':
      case 'time':
        showWorldClock();
        break;

      case 'quote':
      case 'fortune':
        const randomQ = quotes[Math.floor(Math.random() * quotes.length)];
        printLine(`\n<span class="terminal-out-cyan">"${randomQ.text}"</span>\n<span class="terminal-out-muted">— ${randomQ.author}</span>\n`);
        break;

      case 'quiz':
        startQuiz();
        break;

      case 'theme':
        const themeName = (args[0] || '').toLowerCase();
        if (['matrix', 'amber', 'cyberpunk', 'mono', 'default'].includes(themeName)) {
          win.classList.remove('theme-matrix', 'theme-amber', 'theme-cyberpunk');
          if (themeName !== 'mono' && themeName !== 'default') {
            win.classList.add(`theme-${themeName}`);
          }
          printLine(`Terminal theme switched to <span class="terminal-out-green">${themeName}</span>.`, 'terminal-out-bold');
        } else {
          printLine(`Available themes: <span class="terminal-out-green">matrix</span>, <span class="terminal-out-green">amber</span>, <span class="terminal-out-green">cyberpunk</span>, <span class="terminal-out-green">mono</span>, <span class="terminal-out-green">default</span>`);
        }
        break;

      case 'curl':
      case 'wget':
        if (args[0] && (args[0].includes('resume') || args[0].includes('cv'))) {
          printLine('Fetching official resume sheet from memory...', 'terminal-out-green');
          setTimeout(() => {
            const resumeBtn = document.querySelector('.resume-trigger-btn');
            if (resumeBtn) resumeBtn.click();
          }, 600);
        } else {
          printLine(`curl: (7) Failed to connect to ${args[0] || 'host'}: Port unreachable`, 'terminal-out-red');
        }
        break;

      case 'cat':
        if (args[0] === 'resume' || args[0] === 'resume.txt' || args[0] === 'resume.pdf') {
          printLine(`
--------------------------------------------------
<span class="terminal-out-bold">NAVEEN S — AI/ML Engineer & UI/UX Designer</span>
Chennai, India | naveens1077@gmail.com
GitHub: https://github.com/naveens005
Education: B.Tech AI & DS (2023 — 2027) | CGPA 8.0
Patent: Gesture Controlled Mouse (App No. 202541055330 A)
Core Stack: Python, YOLOv8, OpenCV, PyTorch, Figma, SQL
--------------------------------------------------
`);
        } else {
          printLine(`cat: ${args[0] || 'file'}: No such file or directory`, 'terminal-out-muted');
        }
        break;

      case 'whoami':
      case 'about':
        printLine(`
<span class="terminal-out-blue">NAVEEN S</span>
Role: UI/UX Designer · AI/ML Enthusiast · Machine Learning Engineer
Location: Chennai, India
Philosophy: "Minimal on the surface. Intelligent underneath."
Positioning: AI × Design × Data × Product Thinking
`);
        break;

      case 'skills':
        printLine(`
<span class="terminal-out-yellow">AI & Machine Learning:</span>
  Python, PyTorch, YOLOv8, OpenCV, Scikit-Learn, LangChain, RAG Architectures
<span class="terminal-out-yellow">Design & Prototyping:</span>
  Figma, UI/UX Design Systems, Wireframing, Micro-interactions, Usability Testing
<span class="terminal-out-yellow">Data & Infrastructure:</span>
  Pandas, NumPy, MySQL, Docker, Git, VS Code, Next.js / Modern JS
`);
        break;

      case 'projects':
        printLine(`
[01] <span class="terminal-out-green">CrowdGuard AI</span> — Computer Vision & Risk Prediction (YOLOv8, OpenCV, Flask)
[02] <span class="terminal-out-green">BrainRot</span> — Digital Wellbeing & Behavioral Analytics Platform
[03] <span class="terminal-out-green">Conversational AI</span> — Enterprise RAG & Multi-Agent Assistant Suite
`);
        break;

      case 'experience':
        printLine(`
• <span class="terminal-out-blue">2025-2026: UI/UX Event Coordinator</span> (College & Tech Symposiums)
• <span class="terminal-out-blue">2025: Conversational AI & ML Projects</span> (Research & RAG Workflows)
• <span class="terminal-out-blue">2023-2027: B.Tech AI & Data Science</span> (Peri Institute of Technology)
`);
        break;

      case 'education':
        printLine(`
<span class="terminal-out-blue">B.Tech in Artificial Intelligence & Data Science</span>
Institution: Peri Institute of Technology, Chennai
Status: Undergraduate (2023 — 2027) | CGPA: 8.0 / 10.0
`);
        break;

      case 'contact':
        printLine(`
Email: <span class="terminal-out-green">naveens1077@gmail.com</span>
GitHub: <span class="terminal-out-cyan">https://github.com/naveens005</span>
LinkedIn: <span class="terminal-out-cyan">https://linkedin.com</span>
`);
        break;

      case 'ls':
        printLine(`
<span class="terminal-out-blue">drwxr-xr-x</span>  projects/
<span class="terminal-out-blue">drwxr-xr-x</span>  patent/
<span class="terminal-out-blue">drwxr-xr-x</span>  skills/
<span class="terminal-out-green">-rw-r--r--</span>  resume.pdf
<span class="terminal-out-muted">-rw-r--r--</span>  manifesto.txt
<span class="terminal-out-muted">-rw-r--r--</span>  crowdguard_yolov8.weights
`);
        break;

      case 'pwd':
        printLine('/home/naveen/portfolio');
        break;

      case 'date':
        printLine(new Date().toString());
        break;

      case 'echo':
        printLine(argsStr || '');
        break;

      case 'uptime':
        printLine('up 42 days, 13:37, 1 user, load average: 0.12, 0.08, 0.05');
        break;

      case 'matrix':
        printLine('Entering the Matrix...', 'terminal-out-green');
        runMatrixEffect();
        break;

      case 'clear':
        output.innerHTML = '';
        break;

      case 'exit':
      case 'quit':
        closeTerminal();
        break;

      default:
        printLine(`zsh: command not found: ${mainCmd}. Type <span class="terminal-out-green">'help'</span> for available commands.`, 'terminal-out-muted');
    }
  }

  // AI Model Simulation
  function runAiInference(scene) {
    printLine(`\n[MODEL INFERENCE] Target: <span class="terminal-out-cyan">"${scene}"</span>`, 'terminal-out-bold');
    printLine('[1/3] Ingesting video stream & extracting spatial features...', 'terminal-out-muted');

    setTimeout(() => {
      printLine('[2/3] Running YOLOv8 object tensor detection & Gaussian KDE...', 'terminal-out-muted');
      setTimeout(() => {
        const count = Math.floor(Math.random() * 80) + 95;
        const riskPct = Math.floor(Math.random() * 30) + 68;
        printLine(`
<span class="terminal-out-green">✓ INFERENCE COMPLETE</span>
  Detected Entities: <strong>${count} pedestrians</strong>
  Congestion Density: <strong>${riskPct}%</strong>
  Bottleneck Hazard: <span class="terminal-out-red">CRITICAL RISK DETECTED</span>
  Recommendation: <span class="terminal-out-yellow">Reroute foot-traffic via Corridor B (4-6 min ahead)</span>
`);
      }, 500);
    }, 400);
  }

  // Patent Gesture Stream
  function runPatentStream() {
    printLine('\n<span class="terminal-out-yellow">=== MEDIA-PIPE 21-LANDMARK GESTURE TELEMETRY ===</span>', 'terminal-out-bold');
    const steps = [
      '[FRAME 001] Landmark 0 (Wrist): X:0.51 Y:0.82 Z:0.00 | Hand Detected',
      '[FRAME 014] Landmark 8 (Index Tip): X:0.54 Y:0.28 Z:-0.04 | Velocity: 1.2px/ms',
      '[FRAME 028] Spatial Vector Distance [Index, Thumb] = 0.018 &lt; Threshold(0.025)',
      '<span class="terminal-out-green">>>> EVENT TRIGGERED: PINCH_CLICK (Left Mouse Down) <<<</span>',
      '[FRAME 042] Index + Middle Parallel Motion: DeltaY = +0.14 | Scroll Event Dispatched'
    ];
    steps.forEach((step, idx) => {
      setTimeout(() => printLine(step), (idx + 1) * 280);
    });
  }

  // Cowsay
  function showCowsay(msg) {
    const len = msg.length;
    const border = '-'.repeat(len + 2);
    printLine(`
 <span class="terminal-out-cyan"> ${border}
&lt; ${msg} &gt;
  ${border}</span>
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`);
  }

  // Weather
  function showWeather(city) {
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    printLine(`
<span class="terminal-out-yellow">Weather Report for ${cityName}:</span>
     \\   /     Clear Sky / Optimal for Coding
      .-.      Temperature: <strong>31°C / 88°F</strong>
   ― (   ) ―   Humidity: 64% | Wind: 14 km/h ENE
      \`-\`      UV Index: Moderate
     /   \\     Forecast: Clear & Intelligent Productive Flow ☀️
`);
  }

  // Calculator
  function calculateExpr(expr) {
    try {
      const sanitized = expr.toLowerCase()
        .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
        .replace(/sin\(([^)]+)\)/g, 'Math.sin($1)')
        .replace(/cos\(([^)]+)\)/g, 'Math.cos($1)')
        .replace(/pi/g, 'Math.PI')
        .replace(/[^0-9+\-*/().Math,sqrtisncpoe]/g, '');

      // Evaluate safely
      const result = Function(`'use strict'; return (${sanitized})`)();
      printLine(`<span class="terminal-out-muted">${expr} =</span> <span class="terminal-out-green" style="font-weight:700; font-size:1rem;">${result}</span>`);
    } catch (e) {
      printLine(`<span class="terminal-out-red">calc: syntax error in expression '${expr}'</span>`);
    }
  }

  // Speedtest
  function runSpeedtest() {
    printLine('\n<span class="terminal-out-cyan">Testing connection to NaveenOS Global Edge CDN...</span>');
    printLine('Latency Ping: <span class="terminal-out-green">11 ms</span> | Jitter: <span class="terminal-out-green">1.2 ms</span>');
    let pct = 0;
    const interval = setInterval(() => {
      pct += 20;
      const barLen = Math.floor(pct / 5);
      const bar = '█'.repeat(barLen) + '-'.repeat(20 - barLen);
      printLine(`[${bar}] ${pct}% | Bandwidth: <span class="terminal-out-green">${(pct * 9.2).toFixed(1)} Mbps</span>`);
      if (pct >= 100) {
        clearInterval(interval);
        printLine('<span class="terminal-out-bold" style="color:#10b981;">✓ Download: 924.8 Mbps | Upload: 450.2 Mbps (Ultra High Performance)</span>\n');
      }
    }, 150);
  }

  // Hack Sim
  function runHackSim(target) {
    printLine(`\n<span class="terminal-out-red">[INITIATING PENETRATION TEST] -> ${target}</span>`);
    const logs = [
      'Scanning open ports... [22, 80, 443, 8080 OPEN]',
      'Injecting memory overflow payload into subsystem...',
      'Bypassing quantum encryption firewall: 0x7FFF98A2...',
      'Cracking hash: $6$rounds=5000$salts... [MATCH FOUND]',
      '<span class="terminal-out-green">ACCESS GRANTED. Root privileges acquired. Welcome to cyberspace.</span>'
    ];
    logs.forEach((log, idx) => {
      setTimeout(() => printLine(log), (idx + 1) * 300);
    });
  }

  // World Clock
  function showWorldClock() {
    const now = new Date();
    const timeIn = (tz) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    printLine(`
<span class="terminal-out-yellow">✦ GLOBAL WORLD CLOCK ✦</span>
  🇮🇳 Chennai (IST):       <span class="terminal-out-green">${timeIn('Asia/Kolkata')} (Current Local)</span>
  🇺🇸 San Francisco (PST): <span class="terminal-out-blue">${timeIn('America/Los_Angeles')}</span>
  🇬🇧 London (GMT/BST):    <span class="terminal-out-cyan">${timeIn('Europe/London')}</span>
  🇯🇵 Tokyo (JST):         <span class="terminal-out-purple">${timeIn('Asia/Tokyo')}</span>
`);
  }

  // Quiz Game
  function startQuiz() {
    quizState = { active: true, currentQ: 0, score: 0 };
    printLine(`\n<span class="terminal-out-yellow">✦ WELCOME TO THE AI & UX TRIVIA CHALLENGE ✦</span>`);
    printLine('Answer by typing the option number (<span class="terminal-out-green">1</span>, <span class="terminal-out-green">2</span>, <span class="terminal-out-green">3</span>, or <span class="terminal-out-green">4</span>).\n');
    askQuizQuestion();
  }

  function askQuizQuestion() {
    const q = quizQuestions[quizState.currentQ];
    printLine(`<span class="terminal-out-cyan">Question ${quizState.currentQ + 1}/3:</span> <span class="terminal-out-bold">${q.q}</span>`);
    q.options.forEach(opt => printLine(`  ${opt}`));
  }

  function handleQuizAnswer(ans) {
    const q = quizQuestions[quizState.currentQ];
    const cleaned = ans.trim();

    if (cleaned === q.answer) {
      quizState.score++;
      printLine(`✓ <span class="terminal-out-green">CORRECT!</span> ${q.explain}\n`);
    } else {
      printLine(`✗ <span class="terminal-out-red">INCORRECT.</span> Correct was Option ${q.answer}. ${q.explain}\n`);
    }

    quizState.currentQ++;
    if (quizState.currentQ < quizQuestions.length) {
      askQuizQuestion();
    } else {
      printLine(`
<span class="terminal-out-yellow">🎉 QUIZ COMPLETE!</span>
Your Score: <strong>${quizState.score} / ${quizQuestions.length}</strong> (${Math.round((quizState.score / quizQuestions.length) * 100)}%)
${quizState.score === 3 ? '<span class="terminal-out-green">Outstanding! You have master-level AI & UX intuition!</span>' : 'Great effort! Keep building intelligent systems!'}
`);
      quizState.active = false;
    }
  }

  // Matrix Effect
  function runMatrixEffect() {
    let count = 0;
    const interval = setInterval(() => {
      const randStr = Array.from({ length: 45 }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
      printLine(randStr, 'terminal-out-green');
      count++;
      if (count > 16) {
        clearInterval(interval);
        printLine('Matrix connection stabilized. System operational.', 'terminal-out-blue');
      }
    }, 60);
  }

  // Quick Command Chips Click Execution
  const chips = modal.querySelectorAll('.terminal-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        input.value = cmd;
        input.focus();
        setTimeout(() => {
          input.value = '';
          handleCommand(cmd);
        }, 150);
      }
    });
  });

  // Tab Autocomplete & Keyboard Handler
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      handleCommand(val);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = input.value.trim().toLowerCase();
      if (!val) return;
      const match = availableCommands.find(c => c.startsWith(val));
      if (match) {
        input.value = match;
      }
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = '';
      }
    }
  });

  triggerBtns.forEach(btn => btn.addEventListener('click', openTerminal));
  if (closeBtn) closeBtn.addEventListener('click', closeTerminal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeTerminal();
  });

  return { openTerminal, closeTerminal };
}
