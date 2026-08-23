/**
 * Proof of Learning — Interactive Certifications Gallery & Modal Viewer
 */

export function initCertifications() {
  const container = document.getElementById('certs-grid-container');
  const modal = document.getElementById('cert-modal');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalIssuer = document.getElementById('cert-modal-issuer');
  const certModalDate = document.getElementById('cert-modal-date');
  const certModalDesc = document.getElementById('cert-modal-desc');
  const certModalSkills = document.getElementById('cert-modal-skills');
  const closeBtn = document.getElementById('cert-modal-close');

  if (!container || !modal) return;

  const certificatesData = [
    {
      id: 'cert-1',
      name: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic',
      year: '2026',
      desc: 'Deep exploration of foundation model architectures, constitutional AI principles, safety alignments, and advanced prompt engineering frameworks.',
      skills: ['Constitutional AI', 'Prompt Engineering', 'Safety Frameworks', 'LLM Alignment']
    },
    {
      id: 'cert-2',
      name: 'GenAI Powered Data Analytics',
      issuer: 'Tata × Forage',
      year: '2025',
      desc: 'Simulated business intelligence and generative AI data analysis, translating high-dimensional datasets into actionable executive insights.',
      skills: ['Data Visualization', 'GenAI Analytics', 'Predictive Modeling', 'Business Insights']
    },
    {
      id: 'cert-3',
      name: 'Claude AI in 90 Minutes',
      issuer: 'GUVI × HCL',
      year: '2025',
      desc: 'Accelerated development with Claude 3 model family, building contextual assistants and API integration pipelines.',
      skills: ['Claude 3 API', 'Context Windowing', 'Agentic Tools', 'Fast Prototyping']
    },
    {
      id: 'cert-4',
      name: 'CodeNexus Problem Solving',
      issuer: 'VIT Chennai',
      year: '2025',
      desc: 'High-intensity competitive programming, algorithmic optimization, graph traversals, and dynamic programming mastery.',
      skills: ['Algorithms', 'Data Structures', 'Time Complexity', 'Python / C++']
    },
    {
      id: 'cert-5',
      name: 'Digital Payment System Design',
      issuer: 'GUVI × HCL',
      year: '2025',
      desc: 'Architectural blueprints for secure transaction flows, webhook validations, zero-trust tokenization, and fintech interfaces.',
      skills: ['Payment Gateways', 'API Architecture', 'Security Tokens', 'System Design']
    },
    {
      id: 'cert-6',
      name: 'Crafting the Interface',
      issuer: 'Xplore ’25 · LICET',
      year: '2025',
      desc: 'UI/UX design masterclass focusing on design systems, accessible typography, micro-interactions, and visual hierarchy.',
      skills: ['Design Systems', 'Micro-interactions', 'Figma Prototyping', 'Accessibility']
    },
    {
      id: 'cert-7',
      name: 'Computer Vision & YOLO Architectures',
      issuer: 'AI Research Society',
      year: '2025',
      desc: 'Specialized certification in object detection pipelines, real-time bounding box extraction, and OpenCV preprocessing.',
      skills: ['YOLOv8', 'OpenCV', 'Image Classification', 'Edge Inference']
    },
    {
      id: 'cert-8',
      name: 'Applied Machine Learning Foundations',
      issuer: 'Peri Institute of Tech',
      year: '2024',
      desc: 'Rigorous coursework and hands-on lab certification covering supervised/unsupervised machine learning and evaluation matrices.',
      skills: ['Scikit-Learn', 'Feature Engineering', 'Model Tuning', 'NumPy / Pandas']
    },
    {
      id: 'cert-9',
      name: 'Modern Web & Interface Systems',
      issuer: 'Frontend Craft Guild',
      year: '2025',
      desc: 'State-of-the-art web architectures, responsive layouts, modular JavaScript, and smooth GPU-accelerated CSS transitions.',
      skills: ['Vanilla CSS Tokens', 'ES6 JavaScript', 'Responsive UI', 'Web Performance']
    }
  ];

  function renderCertificates() {
    container.innerHTML = '';
    certificatesData.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.innerHTML = `
        <div>
          <span class="cert-issuer">${cert.issuer}</span>
          <h4 class="cert-name">${cert.name}</h4>
        </div>
        <div class="cert-footer">
          <span>${cert.year}</span>
          <span class="view-link">View details →</span>
        </div>
      `;

      card.addEventListener('click', () => openCertModal(cert));
      container.appendChild(card);
    });
  }

  function openCertModal(cert) {
    certModalTitle.textContent = cert.name;
    certModalIssuer.textContent = `Issued by: ${cert.issuer}`;
    certModalDate.textContent = `Year: ${cert.year}`;
    certModalDesc.textContent = cert.desc;
    certModalSkills.innerHTML = cert.skills.map(s => `<span class="tag">${s}</span>`).join('');

    modal.classList.add('active');
  }

  function closeCertModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCertModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCertModal();
  });

  renderCertificates();
}
