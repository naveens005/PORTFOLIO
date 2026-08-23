/**
 * NaveenOS v1.0 — Ultra-Clean & Interactive Developer CLI Terminal
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

  const history = [];
  let historyIndex = -1;
  let quizState = { active: false, currentQ: 0, score: 0 };

  const availableCommands = [
    'help', 'whoami', 'skills', 'projects', 'patent', 'naveenfetch',
    'ai predict', 'speedtest', 'quiz', 'matrix', 'weather', 'cowsay',
    'calc', 'clock', 'quote', 'theme', 'experience', 'education', 'contact',
    'curl resume', 'ls', 'pwd', 'date', 'clear', 'exit'
  ];

  function printLine(text, className = '') {
    const line = document.createElement('div');
    if (className) line.className = className;
    line.innerHTML = text;
    output.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  function initScreen() {
    output.innerHTML = '';
    printLine(`
<div style="padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.06); margin-bottom: 6px;">
  <span class="terminal-out-green" style="font-weight:700;">NaveenOS v1.0 [Release x86_64]</span> · Naveen S Portfolio
  <div style="color: #64748b; font-size: 0.8rem; margin-top: 3px;">Type <span class="terminal-out-blue">'help'</span> or click any suggestion pill above to explore.</div>
</div>
`);
  }

  function openTerminal() {
    modal.classList.add('active');
    if (output.children.length === 0) {
      initScreen();
    }
    setTimeout(() => input.focus(), 60);
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
    { text: "Neural networks are software 2.0. We are writing programs with optimization rather than logic.", author: "Andrej Karpathy" }
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

    // Handle Quiz
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
        printLine(`Hello! Welcome to <span class="terminal-out-blue">NaveenOS v1.0</span>. Type <span class="terminal-out-green">'help'</span> or click any suggestion above.`);
        break;

      case 'help':
        printLine(`
<span class="terminal-out-yellow" style="font-weight:700;">COMMAND DIRECTORY</span>

<span class="terminal-out-cyan">[Portfolio]</span>
  <span class="terminal-out-green">whoami</span>       Display bio, positioning & core philosophy
  <span class="terminal-out-green">skills</span>       List AI/ML, Data & Design tool ecosystem
  <span class="terminal-out-green">projects</span>     Inspect project architecture & case studies
  <span class="terminal-out-green">patent</span>       Indian Patent Application 202541055330 A details
  <span class="terminal-out-green">education</span>    Academic metrics & B.Tech AI & DS standing (2023-2027)
  <span class="terminal-out-green">experience</span>   Display leadership & technical roles
  <span class="terminal-out-green">contact</span>      Display official communication channels
  <span class="terminal-out-green">naveenfetch</span>  Display developer ASCII status card & specs
  <span class="terminal-out-green">curl resume</span>  View official resume sheet

<span class="terminal-out-cyan">[Interactive Tools & Games]</span>
  <span class="terminal-out-green">ai predict</span>   Run live CrowdGuard AI density inference simulation
  <span class="terminal-out-green">speedtest</span>    Run real-time bandwidth & latency benchmark
  <span class="terminal-out-green">quiz</span>         Start interactive 3-question AI/UX challenge
  <span class="terminal-out-green">matrix</span>       Matrix digital rain animation
  <span class="terminal-out-green">weather</span>      Simulated ASCII weather forecast (e.g. weather chennai)
  <span class="terminal-out-green">cowsay</span>       Linux ASCII cow speaking your text
  <span class="terminal-out-green">calc</span>         CLI math calculator (e.g. calc 42 * 10)
  <span class="terminal-out-green">clock</span>        Multi-timezone world clock
  <span class="terminal-out-green">theme</span>        Change CRT theme (matrix | cyberpunk | amber | mono)

<span class="terminal-out-cyan">[System]</span>
  <span class="terminal-out-green">clear</span> | <span class="terminal-out-green">ls</span> | <span class="terminal-out-green">pwd</span> | <span class="terminal-out-green">date</span> | <span class="terminal-out-green">exit</span>
`);
        break;

      case 'whoami':
      case 'about':
        printLine(`
<span class="terminal-out-blue" style="font-weight:700;">NAVEEN S</span>
Role: UI/UX Designer · AI/ML Enthusiast · Machine Learning Engineer
Location: Chennai, India
Philosophy: "Minimal on the surface. Intelligent underneath."
Positioning: AI × Design × Data × Product Thinking
`);
        break;

      case 'skills':
        printLine(`
<span class="terminal-out-yellow">AI & Machine Learning:</span> Python, PyTorch, YOLOv8, OpenCV, Scikit-Learn, LangChain, RAG
<span class="terminal-out-yellow">Design & Prototyping:</span> Figma, UI/UX Design Systems, Wireframing, Micro-interactions
<span class="terminal-out-yellow">Data & Systems:</span> Pandas, NumPy, MySQL, Docker, Git, JavaScript (ES6+), VS Code
`);
        break;

      case 'projects':
        printLine(`
[01] <span class="terminal-out-green">CrowdGuard AI</span> — Computer Vision & Risk Prediction (YOLOv8, OpenCV, Flask)
[02] <span class="terminal-out-green">BrainRot</span> — Digital Wellbeing & Behavioral Analytics Platform
[03] <span class="terminal-out-green">Conversational AI</span> — Enterprise RAG & Multi-Agent Assistant Suite
`);
        break;

      case 'patent':
        printLine(`
<span class="terminal-out-yellow">INDIAN PATENT APPLICATION</span>
Title: Gesture Controlled Mouse Interface for Physically Impaired Users
Status: Published / Pending (App No. <strong>202541055330 A</strong>)
Role: Co-inventor
Tech: MediaPipe 21 Hand-Landmark Spatial Feature Extraction
`);
        break;

      case 'education':
        printLine(`
<span class="terminal-out-blue">B.Tech in Artificial Intelligence & Data Science</span>
Institution: Peri Institute of Technology, Chennai
Status: Undergraduate (2023 — 2027) | Cumulative CGPA: 8.0 / 10.0
`);
        break;

      case 'experience':
        printLine(`
• <span class="terminal-out-blue">2025-2026: UI/UX Event Coordinator</span> (College & Tech Symposiums)
• <span class="terminal-out-blue">2025: Conversational AI & ML Projects</span> (Research & RAG Workflows)
• <span class="terminal-out-blue">2023-2027: B.Tech AI & Data Science</span> (Peri Institute of Technology)
`);
        break;

      case 'contact':
        printLine(`
Email: <span class="terminal-out-green">naveens1077@gmail.com</span>
GitHub: <span class="terminal-out-cyan">https://github.com/naveens005</span>
LinkedIn: <span class="terminal-out-cyan">https://linkedin.com</span>
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
`);
        break;

      case 'ai':
      case 'predict':
        const scene = argsStr || 'Heavy crowd near metro station platform';
        runAiInference(scene);
        break;

      case 'speedtest':
        runSpeedtest();
        break;

      case 'quiz':
        startQuiz();
        break;

      case 'matrix':
        printLine('Entering the Matrix...', 'terminal-out-green');
        runMatrixEffect();
        break;

      case 'weather':
        showWeather(argsStr || 'Chennai');
        break;

      case 'cowsay':
        showCowsay(argsStr || 'Minimal on the surface. Intelligent underneath.');
        break;

      case 'calc':
      case 'eval':
        if (!argsStr) {
          printLine('Usage: calc &lt;expression&gt; (e.g. calc 42 * 10)');
        } else {
          calculateExpr(argsStr);
        }
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
          printLine('Opening official resume sheet...', 'terminal-out-green');
          setTimeout(() => {
            const resumeBtn = document.querySelector('.resume-trigger-btn');
            if (resumeBtn) resumeBtn.click();
          }, 400);
        } else {
          printLine(`curl: connected to ${args[0] || 'remote'}. HTTP/2 200 OK`, 'terminal-out-muted');
        }
        break;

      case 'sudo':
        if (args.join(' ').toLowerCase() === 'hire naveen') {
          printLine(`
<span class="terminal-out-green">[AUTH GRANTED] Connecting to Naveen S...</span>
Opening your default email app to email <strong>naveens1077@gmail.com</strong>...
`);
          setTimeout(() => {
            window.location.href = 'mailto:naveens1077@gmail.com?subject=Opportunity%20Discussion%20with%20Naveen%20S';
          }, 800);
        } else {
          printLine('User naveen is in sudoers file. Incident reported.', 'terminal-out-yellow');
        }
        break;

      case 'ls':
        printLine(`
<span class="terminal-out-blue">drwxr-xr-x</span>  projects/
<span class="terminal-out-blue">drwxr-xr-x</span>  patent/
<span class="terminal-out-blue">drwxr-xr-x</span>  skills/
<span class="terminal-out-green">-rw-r--r--</span>  resume.pdf
<span class="terminal-out-muted">-rw-r--r--</span>  manifesto.txt
`);
        break;

      case 'pwd':
        printLine('/home/naveen/portfolio');
        break;

      case 'date':
        printLine(new Date().toString());
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
    printLine('[1/2] Processing YOLOv8 feature tensors...', 'terminal-out-muted');

    setTimeout(() => {
      const count = Math.floor(Math.random() * 60) + 110;
      const riskPct = Math.floor(Math.random() * 25) + 72;
      printLine(`
<span class="terminal-out-green">✓ INFERENCE COMPLETE</span>
  Pedestrian Count: <strong>${count} entities</strong>
  Congestion Density: <strong>${riskPct}%</strong>
  Bottleneck Status: <span class="terminal-out-red">CRITICAL RISK FORECASTED</span>
  Action: <span class="terminal-out-yellow">CrowdGuard automated reroute alert dispatched</span>
`);
    }, 450);
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
<span class="terminal-out-yellow">Weather for ${cityName}:</span>
     \\   /     Clear Sky / <strong>31°C / 88°F</strong>
   ― (   ) ―   Humidity: 64% | Optimal for Deep Work ☀️
     /   \\
`);
  }

  // Calculator
  function calculateExpr(expr) {
    try {
      const sanitized = expr.toLowerCase()
        .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
        .replace(/[^0-9+\-*/().Math,sqrt]/g, '');
      const result = Function(`'use strict'; return (${sanitized})`)();
      printLine(`<span class="terminal-out-muted">${expr} =</span> <span class="terminal-out-green" style="font-weight:700;">${result}</span>`);
    } catch (e) {
      printLine(`<span class="terminal-out-red">calc: syntax error in '${expr}'</span>`);
    }
  }

  // Speedtest
  function runSpeedtest() {
    printLine('\n<span class="terminal-out-cyan">Testing connection to Global Edge CDN...</span>');
    let pct = 0;
    const interval = setInterval(() => {
      pct += 25;
      const barLen = Math.floor(pct / 5);
      const bar = '█'.repeat(barLen) + '-'.repeat(20 - barLen);
      printLine(`[${bar}] ${pct}% | <span class="terminal-out-green">${(pct * 9.2).toFixed(1)} Mbps</span>`);
      if (pct >= 100) {
        clearInterval(interval);
        printLine('<span class="terminal-out-green" style="font-weight:700;">✓ Download: 920 Mbps | Latency: 12ms (Ultra Fast)</span>\n');
      }
    }, 120);
  }

  // World Clock
  function showWorldClock() {
    const now = new Date();
    const timeIn = (tz) => now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    printLine(`
<span class="terminal-out-yellow">✦ WORLD CLOCK ✦</span>
  🇮🇳 Chennai (IST):       <span class="terminal-out-green">${timeIn('Asia/Kolkata')}</span>
  🇺🇸 San Francisco (PST): <span class="terminal-out-blue">${timeIn('America/Los_Angeles')}</span>
  🇬🇧 London (GMT/BST):    <span class="terminal-out-cyan">${timeIn('Europe/London')}</span>
  🇯🇵 Tokyo (JST):         <span class="terminal-out-purple">${timeIn('Asia/Tokyo')}</span>
`);
  }

  // Quiz Game
  function startQuiz() {
    quizState = { active: true, currentQ: 0, score: 0 };
    printLine(`\n<span class="terminal-out-yellow">✦ AI & UX TRIVIA CHALLENGE ✦</span>`);
    printLine('Type <span class="terminal-out-green">1</span>, <span class="terminal-out-green">2</span>, <span class="terminal-out-green">3</span>, or <span class="terminal-out-green">4</span> to answer:\n');
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
<span class="terminal-out-yellow">🎉 QUIZ COMPLETE!</span> Score: <strong>${quizState.score} / ${quizQuestions.length}</strong>
${quizState.score === 3 ? '<span class="terminal-out-green">Master-level AI & UX intuition!</span>' : 'Great effort!'}
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
      if (count > 12) {
        clearInterval(interval);
        printLine('Matrix connection stabilized. System operational.', 'terminal-out-blue');
      }
    }, 60);
  }

  // Event Listeners for Suggestion Pills (Instant Reliable Execution)
  modal.addEventListener('click', (e) => {
    const chip = e.target.closest('.terminal-chip');
    if (chip) {
      e.preventDefault();
      e.stopPropagation();
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        input.value = '';
        input.focus();
        handleCommand(cmd);
      }
      return;
    }

    if (e.target === modal) closeTerminal();
  });

  // Tab Autocomplete & History Navigation
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

  return { openTerminal, closeTerminal };
}
