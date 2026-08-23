/**
 * Smooth Custom Magnetic Cursor with Spring Physics
 */

export function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const follower = document.querySelector('.custom-cursor-follower');

  if (!dot || !follower || window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    
    dot.classList.remove('cursor-hidden');
    follower.classList.remove('cursor-hidden');
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.add('cursor-hidden');
    follower.classList.add('cursor-hidden');
  });

  document.addEventListener('mouseenter', () => {
    dot.classList.remove('cursor-hidden');
    follower.classList.remove('cursor-hidden');
  });

  // Lerp Animation Loop
  function render() {
    const ease = 0.16;
    followerX += (mouseX - followerX) * ease;
    followerY += (mouseY - followerY) * ease;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(render);
  }
  render();

  // Hover Targets
  const interactiveSelectors = 'a, button, input, textarea, .card-glass, .pillar-card, .tool-chip, .cert-card, .skill-card, .project-media, .cmd-item, .ai-chip';
  
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelectors);
    if (target) {
      if (target.matches('input, textarea')) {
        follower.classList.add('cursor-text');
        follower.classList.remove('cursor-hover');
      } else {
        follower.classList.add('cursor-hover');
        follower.classList.remove('cursor-text');
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelectors);
    if (target) {
      follower.classList.remove('cursor-hover');
      follower.classList.remove('cursor-text');
    }
  });

  // Mouse Click Reaction
  window.addEventListener('mousedown', () => {
    follower.style.transform = 'translate(-50%, -50%) scale(0.85)';
  });

  window.addEventListener('mouseup', () => {
    follower.style.transform = 'translate(-50%, -50%) scale(1)';
  });
}
