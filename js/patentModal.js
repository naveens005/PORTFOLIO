/**
 * Featured Patent Spotlight & Interactive Gesture Simulator Modal
 */

export function initPatentModal() {
  const modal = document.getElementById('patent-modal');
  const closeBtn = document.getElementById('patent-modal-close');
  const triggerBtns = document.querySelectorAll('.patent-trigger-btn, .patent-media-preview');

  if (!modal) return;

  function openPatentModal() {
    modal.classList.add('active');
    initGestureCanvas();
  }

  function closePatentModal() {
    modal.classList.remove('active');
  }

  triggerBtns.forEach(btn => btn.addEventListener('click', openPatentModal));
  if (closeBtn) closeBtn.addEventListener('click', closePatentModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePatentModal();
  });

  function initGestureCanvas() {
    const canvas = document.getElementById('patent-hand-canvas');
    const stateText = document.getElementById('patent-gesture-state');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 240;

    let gestureMode = 'pointer_move';

    // Interactive buttons inside patent modal
    const gestureBtns = document.querySelectorAll('.patent-gesture-btn');
    gestureBtns.forEach(b => {
      b.addEventListener('click', () => {
        gestureBtns.forEach(el => el.classList.remove('active'));
        b.classList.add('active');
        gestureMode = b.getAttribute('data-gesture');
        if (stateText) {
          if (gestureMode === 'pointer_move') stateText.innerHTML = '<span style="color:#10b981;">STATE: POINTER_MOVE (Tracking Index Tip Spatial [X, Y, Z])</span>';
          else if (gestureMode === 'pinch_click') stateText.innerHTML = '<span style="color:#3b82f6;">STATE: LEFT_CLICK (Index & Thumb Distance < Threshold)</span>';
          else if (gestureMode === 'scroll') stateText.innerHTML = '<span style="color:#f59e0b;">STATE: SCROLL_ACTIVE (Two Finger Vertical Vector Delta)</span>';
        }
      });
    });

    let angle = 0;
    function render() {
      if (!modal.classList.contains('active')) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 10;
      angle += 0.02;

      // Draw MediaPipe Hand skeleton simulation
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;

      // Wrist
      const wrist = { x: cx, y: cy + 70 };

      // 5 Finger Knuckles & Tips
      const fingers = [
        { name: 'Thumb', tip: { x: cx - 45 + Math.sin(angle) * 3, y: cy + (gestureMode === 'pinch_click' ? -15 : 5) } },
        { name: 'Index', tip: { x: cx - 20, y: cy - 55 + (gestureMode === 'pinch_click' ? 40 : 0) } },
        { name: 'Middle', tip: { x: cx + 5, y: cy - 65 + (gestureMode === 'scroll' ? Math.sin(angle * 2) * 10 : 0) } },
        { name: 'Ring', tip: { x: cx + 30, y: cy - 45 } },
        { name: 'Pinky', tip: { x: cx + 50, y: cy - 25 } }
      ];

      // Draw bone connectors
      fingers.forEach(f => {
        ctx.beginPath();
        ctx.moveTo(wrist.x, wrist.y);
        ctx.lineTo(cx + (f.tip.x - cx) * 0.4, cy + 20);
        ctx.lineTo(f.tip.x, f.tip.y);
        ctx.stroke();

        // Draw joint circles
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(f.tip.x, f.tip.y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '9px monospace';
        ctx.fillText(f.name, f.tip.x - 10, f.tip.y - 8);
      });

      // Draw wrist node
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(wrist.x, wrist.y, 6, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(render);
    }
    render();
  }

  return { openPatentModal, closePatentModal };
}
