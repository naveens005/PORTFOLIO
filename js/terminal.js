/**
 * NaveenOS v1.0 — Draggable Interactive Terminal Easter Egg
 */

export function initTerminal() {
  const modal = document.getElementById('terminal-modal');
  const body = document.getElementById('terminal-body');
  const output = document.getElementById('terminal-output');
  const input = document.getElementById('terminal-input');
  const triggerBtns = document.querySelectorAll('.terminal-trigger-btn');
  const closeBtn = document.querySelector('.terminal-dot.dot-red');

  if (!modal || !output || !input) return;

  const history = [];
  let historyIndex = -1;

  const welcomeBanner = `
  _   _                            ___  ____  
 | \\ | | __ ___   _____  ___ _ __  / _ \\/ ___| 
 |  \\| |/ _\` \\ \\ / / _ \\/ _ \\ '_ \\| | | \\___ \\ 
 | |\\  | (_| |\\ V /  __/  __/ | | | |_| |___) |
 |_| \\_|\\__,_| \\_/ \\___|\\___|_| |_|\\___/|____/ 
 NaveenOS Kernel v1.0.4-release (x86_64-apple-darwin)
 Type 'help' to see available commands.
`;

  function printLine(text, className = '') {
    const line = document.createElement('div');
    line.className = className;
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

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    history.push(cmd);
    historyIndex = history.length;

    printLine(`<span class="terminal-prompt-sym">naveen@portfolio:~$</span> ${cmd}`, 'terminal-prompt-echo');

    const [mainCmd, ...args] = cmd.toLowerCase().split(' ');

    switch (mainCmd) {
      case 'hi':
      case 'hello':
      case 'hey':
        printLine(`Hello! Welcome to <span class="terminal-out-blue">NaveenOS v1.0</span>. Type <span class="terminal-out-green">'help'</span> to see all available commands or try <span class="terminal-out-green">'skills'</span>, <span class="terminal-out-green">'projects'</span>, or <span class="terminal-out-green">'matrix'</span>!`);
        break;

      case 'help':
        printLine(`
Available commands:
  <span class="terminal-out-green">whoami</span>       Display builder bio & positioning
  <span class="terminal-out-green">skills</span>       List technical & design stack
  <span class="terminal-out-green">projects</span>     List key projects & architecture
  <span class="terminal-out-green">patent</span>       Show co-inventor patent details
  <span class="terminal-out-green">experience</span>   Display leadership & technical roles
  <span class="terminal-out-green">education</span>    Display B.Tech degree & academic metric
  <span class="terminal-out-green">contact</span>      Display communication channels
  <span class="terminal-out-green">cat resume</span>   Print formatted resume summary
  <span class="terminal-out-green">matrix</span>       Start terminal digital rain simulation
  <span class="terminal-out-green">clear</span>        Clear terminal screen
  <span class="terminal-out-green">exit</span>         Close terminal window
`);
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

      case 'patent':
        printLine(`
<span class="terminal-out-yellow">PATENT APPLICATION (INDIA)</span>
Title: Gesture Controlled Mouse Interface for Physically Impaired Users
Status: Published / Pending (App No. 202541055330 A)
Role: Co-inventor
Tech: 21 Hand-Landmark Spatial Coordinate Recognition via Computer Vision
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
GitHub: https://github.com/naveens005
LinkedIn: https://linkedin.com
`);
        break;

      case 'cat':
        if (args[0] === 'resume' || args[0] === 'resume.txt') {
          printLine(`
--------------------------------------------------
NAVEEN S — AI/ML Engineer & UI/UX Designer
Chennai, India | naveens1077@gmail.com
Education: B.Tech AI & DS (CGPA 8.0)
Patent: Gesture Controlled Mouse Interface (App No. 202541055330 A)
Core Stack: Python, OpenCV, YOLO, PyTorch, Figma, SQL
--------------------------------------------------
`);
        } else {
          printLine(`cat: ${args[0] || 'file'}: No such file or directory`, 'terminal-out-muted');
        }
        break;

      case 'matrix':
        printLine('Entering the Matrix...', 'terminal-out-green');
        runMatrixEffect();
        break;

      case 'sudo':
        printLine('User naveen is in the sudoers file. However, this incident will be reported.', 'terminal-out-yellow');
        break;

      case 'clear':
        output.innerHTML = '';
        break;

      case 'exit':
      case 'quit':
        closeTerminal();
        break;

      default:
        printLine(`zsh: command not found: ${mainCmd}. Type 'help' for available commands.`, 'terminal-out-muted');
    }
  }

  function runMatrixEffect() {
    let count = 0;
    const interval = setInterval(() => {
      const chars = '01010101010101010101010101010101010101010101';
      const randStr = Array.from({ length: 45 }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
      printLine(randStr, 'terminal-out-green');
      count++;
      if (count > 18) {
        clearInterval(interval);
        printLine('Matrix connection stabilized. System operational.', 'terminal-out-blue');
      }
    }, 60);
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      handleCommand(val);
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
