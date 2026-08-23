import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

// A4 dimensions: 210mm x 297mm
const margin = 14;
const pageWidth = 210;
const contentWidth = pageWidth - (margin * 2);
let y = 18;

// Primary Header
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(20, 20, 20);
doc.text('NAVEEN S', margin, y);

y += 6;
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(80, 80, 90);
doc.text('UI/UX Designer  |  AI/ML Enthusiast  |  Machine Learning Engineer', margin, y);

y += 5;
doc.setFontSize(9);
doc.setTextColor(100, 100, 110);
doc.text('Chennai, India  ·  naveens1077@gmail.com  ·  github.com/naveens005', margin, y);

y += 3;
// Divider Line
doc.setDrawColor(220, 220, 230);
doc.setLineWidth(0.4);
doc.line(margin, y, pageWidth - margin, y);

function addSectionHeader(title) {
  y += 7;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);
  doc.text(title.toUpperCase(), margin, y);
  
  y += 1.5;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 4;
}

// 1. EDUCATION
addSectionHeader('Education');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 30, 30);
doc.text('B.Tech in Artificial Intelligence & Data Science', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(100, 100, 100);
doc.text('2023 — 2027', pageWidth - margin, y, { align: 'right' });

y += 4;
doc.setFontSize(8.5);
doc.setTextColor(70, 70, 80);
doc.text('Peri Institute of Technology, Chennai  |  Undergraduate  ·  CGPA: 8.0 / 10.0', margin, y);

// 2. PATENT PUBLICATION
addSectionHeader('Patent Publication');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(30, 30, 30);
doc.text('Gesture Controlled Mouse Interface for Physically Impaired Users', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(100, 100, 100);
doc.text('Published & Pending', pageWidth - margin, y, { align: 'right' });

y += 4;
doc.setFontSize(8.5);
doc.setTextColor(70, 70, 80);
doc.text('Co-inventor  ·  Indian Patent Application No. 202541055330 A', margin, y);
y += 3.5;
doc.setFontSize(8);
doc.setTextColor(100, 100, 110);
doc.text('Touchless computer-vision system utilizing MediaPipe 21 hand-landmark extraction for assistive OS control.', margin, y);

// 3. FEATURED PROJECTS
addSectionHeader('Featured Projects');

// Project 1
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(30, 30, 30);
doc.text('CrowdGuard AI — AI Crowd Risk & Congestion Monitoring', margin, y);
y += 3.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(100, 100, 110);
doc.text('Tech: Python, YOLOv8, OpenCV, Flask, Gaussian KDE Risk Heatmaps', margin, y);
y += 3.5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(70, 70, 80);
doc.text('Real-time crowd anomaly detection system forecasting stampede bottlenecks 4-6 minutes early.', margin, y);

// Project 2
y += 4.5;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(30, 30, 30);
doc.text('BrainRot — Behavioral AI & Digital Wellbeing Platform', margin, y);
y += 3.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(100, 100, 110);
doc.text('Tech: Scikit-Learn, Time Series Analytics, Figma Design System', margin, y);
y += 3.5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(70, 70, 80);
doc.text('Intelligent attention-decay and cognitive-load modeling with ambient mindfulness interventions.', margin, y);

// Project 3
y += 4.5;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(30, 30, 30);
doc.text('Conversational AI Suite — Enterprise RAG & Multi-Agent Assistant', margin, y);
y += 3.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(100, 100, 110);
doc.text('Tech: LangChain, ChromaDB, FastAPI, Vector Search', margin, y);
y += 3.5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(70, 70, 80);
doc.text('Multi-agent decision trees and semantic retrieval with 92% factual accuracy in domain QA.', margin, y);

// 4. TECHNICAL SKILLS
addSectionHeader('Technical Skills');
doc.setFontSize(8.5);
doc.setFont('helvetica', 'bold');
doc.setTextColor(40, 40, 50);
doc.text('AI & Machine Learning:', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(70, 70, 80);
doc.text('Python, PyTorch, YOLOv8, OpenCV, Scikit-Learn, MediaPipe, LangChain, RAG', margin + 38, y);

y += 4;
doc.setFont('helvetica', 'bold');
doc.setTextColor(40, 40, 50);
doc.text('Design & Prototyping:', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(70, 70, 80);
doc.text('Figma, Design Systems, Micro-interactions, Wireframing, UX Research', margin + 38, y);

y += 4;
doc.setFont('helvetica', 'bold');
doc.setTextColor(40, 40, 50);
doc.text('Data & Web Systems:', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(70, 70, 80);
doc.text('Pandas, NumPy, SQL, JavaScript (ES6+), Modern HTML/CSS, Git, Docker', margin + 38, y);

// 5. EXPERIENCE & LEADERSHIP
addSectionHeader('Experience & Leadership');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(30, 30, 30);
doc.text('UI/UX Event Coordinator', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(100, 100, 100);
doc.text('2025 — 2026', pageWidth - margin, y, { align: 'right' });
y += 3.5;
doc.setFontSize(8);
doc.setTextColor(70, 70, 80);
doc.text('College & Regional Tech Symposiums · Led UI/UX workshops, digital stage branding, and design competitions.', margin, y);

// 6. HACKATHONS & CERTIFICATIONS
addSectionHeader('Hackathons & Certifications');
doc.setFontSize(8);
doc.setTextColor(70, 70, 80);
doc.text('• Bharatiya Antariksh Hackathon 2026 (ISRO × Hack2Skill) — Space science & analytics challenge', margin, y);
y += 3.5;
doc.setFontSize(8);
doc.text('• HackFinity 2025 (National 24-Hour Hackathon) — Built & deployed prototype under 24 hours', margin, y);
y += 3.5;
doc.setFontSize(8);
doc.text('• Certifications: Anthropic AI Fluency (2026), Tata GenAI Data Analytics (2025), GUVI×HCL Claude AI', margin, y);

// Output directory
const assetsDir = path.join(process.cwd(), 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

const outputPath = path.join(assetsDir, 'Naveen_S_Resume.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outputPath, pdfBuffer);

console.log('PDF successfully generated at:', outputPath);
