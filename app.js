// Comprehensive Question Bank & Flashcard Dataset
const examData = [
  {
    id: 1,
    topic: "Amino Acids & Proteins",
    questionEN: "Can you describe the four levels of protein structure and explain the non-covalent forces that stabilize each level?",
    questionCN: "请阐述蛋白质的四级结构层次，并解释维持各级结构的非共价键相互作用。",
    modelAnswerEN: `
      1. Primary Structure: Sequence of amino acids joined by covalent peptide bonds.
      2. Secondary Structure: Local folding into α-helices and β-pleated sheets, stabilized by backbone hydrogen bonds.
      3. Tertiary Structure: 3D conformation of a single polypeptide chain driven by hydrophobic interactions, disulfide bonds, ionic salt bridges, and Van der Waals forces.
      4. Quaternary Structure: Assembly of multiple polypeptide subunits (e.g., Hemoglobin).
    `,
    keywords: ["Peptide bond", "α-helix", "β-sheet", "Hydrophobic interactions", "Disulfide bridge", "Subunits"],
    checklist: [
      "Mentioned peptide bonds for primary structure",
      "Explained hydrogen bonding in α-helix & β-sheet",
      "Listed hydrophobic interactions & disulfide bonds in tertiary structure",
      "Described multi-subunit assembly for quaternary structure"
    ]
  },
  {
    id: 2,
    topic: "Enzyme Kinetics",
    questionEN: "Explain the biological significance of Km and Vmax in Michaelis-Menten kinetics, and contrast competitive vs. non-competitive inhibition.",
    questionCN: "解释米氏方程中 Km 与 Vmax 的生物学意义，并对比竞争性与非竞争性抑制作用的异同。",
    modelAnswerEN: `
      - Vmax is the maximum reaction velocity at saturating substrate concentrations.
      - Km is the substrate concentration at 1/2 Vmax, representing inverse substrate affinity (Lower Km = Higher Affinity).
      - Competitive Inhibitor: Binds to the active site. Raises apparent Km; Vmax remains unchanged.
      - Non-competitive Inhibitor: Binds to an allosteric site. Lowers Vmax; Km remains unchanged.
    `,
    keywords: ["Km (Affinity)", "Vmax (Max rate)", "Active site", "Allosteric site", "Competitive", "Non-competitive"],
    checklist: [
      "Defined Km as substrate concentration at 1/2 Vmax",
      "Stated that lower Km means higher affinity",
      "Explained competitive inhibition (Km increases, Vmax constant)",
      "Explained non-competitive inhibition (Vmax decreases, Km constant)"
    ]
  },
  {
    id: 3,
    topic: "TCA Cycle & ETC",
    questionEN: "Walk through Mitchell's chemiosmotic hypothesis and detail how the electron transport chain powers ATP Synthase.",
    questionCN: "请详细阐述米切尔化学渗透假说，说明电子传递链如何驱动 ATP 合成酶合成 ATP。",
    modelAnswerEN: `
      - As electrons flow through Complexes I, III, and IV, protons (H+) are actively pumped from the matrix into the intermembrane space.
      - This creates an electrochemical proton gradient across the inner mitochondrial membrane (Proton-motive force Δp).
      - Protons flow back into the matrix through the F0 channel of ATP Synthase (Complex V).
      - The exergonic proton flux drives mechanical rotation of F1, phosphorylating ADP + Pi into ATP.
    `,
    keywords: ["Proton-motive force", "Inner mitochondrial membrane", "Complex I, III, IV", "ATP Synthase (F0F1)", "Matrix"],
    checklist: [
      "Stated proton pumping into intermembrane space",
      "Mentioned creation of electrochemical gradient / proton-motive force",
      "Identified ATP Synthase (Complex V / F0F1)",
      "Described ADP phosphorylation driven by proton influx"
    ]
  },
  {
    id: 4,
    topic: "Glycolysis & Regulation",
    questionEN: "Outline the key regulatory steps of glycolysis and explain how PFK-1 responds to cellular energy charge and allosteric effectors.",
    questionCN: "列出糖酵解的核心关键限速步骤，并解释 PFK-1 如何对能量状态及别构调节剂作出响应。",
    modelAnswerEN: `
      - Glycolysis converts 1 glucose into 2 pyruvate in the cytosol, yielding net 2 ATP and 2 NADH.
      - PFK-1 (Phosphofructokinase-1) catalyzes the committed rate-limiting step: Fructose-6-P → Fructose-1,6-BP.
      - High ATP & Citrate indicate high energy and inhibit PFK-1.
      - High AMP & Fructose-2,6-bisphosphate (F-2,6-BP) act as potent allosteric activators.
    `,
    keywords: ["Cytosol", "PFK-1 (Rate-limiting)", "ATP & Citrate (Inhibitors)", "AMP & F-2,6-BP (Activators)", "Net 2 ATP + 2 NADH"],
    checklist: [
      "Identified cytosol as reaction location",
      "Named PFK-1 as key rate-limiting enzyme",
      "Listed ATP and citrate as allosteric inhibitors",
      "Listed AMP and F-2,6-BP as allosteric activators"
    ]
  },
  {
    id: 5,
    topic: "Urea Cycle",
    questionEN: "Describe the steps, organ localization, and compartmentalization of the urea cycle.",
    questionCN: "描述尿素循环的步骤、器官定位及其在细胞内的分步定位（线粒体与胞浆）。",
    modelAnswerEN: `
      - Organ: Primary site is hepatocytes in the liver.
      - Mitochondria: Ammonia + HCO3- + 2 ATP → Carbamoyl Phosphate via CPS-I (rate-limiting, activated by N-acetylglutamate). OTC combines it with Ornithine → Citrulline.
      - Cytosol: Citrulline + Aspartate → Argininosuccinate → Arginine + Fumarate → Arginase cleaves Arginine to yield Urea and regenerate Ornithine.
    `,
    keywords: ["Liver hepatocytes", "Mitochondria & Cytosol", "CPS-I (Rate-limiting)", "N-acetylglutamate", "Citrulline", "Arginase", "Urea"],
    checklist: [
      "Specified liver hepatocytes as primary organ",
      "Distinguished mitochondrial steps (CPS-I, OTC) from cytosolic steps",
      "Highlighted N-acetylglutamate as essential activator of CPS-I",
      "Identified Arginase producing urea and regenerating ornithine"
    ]
  }
];

// App State & DOM Elements
let currentCardIndex = 0;
let timerInterval = null;
let timerSeconds = 120; // 2 minutes default

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSimulator();
  initFlashcards();
});

// Navigation Tabs
function initTabs() {
  const buttons = document.querySelectorAll('.nav-btn');
  const tabs = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = document.getElementById(btn.dataset.tab);
      if (targetTab) targetTab.classList.add('active');
    });
  });
}

// Simulator Functions
function initSimulator() {
  const topicSelect = document.getElementById('topic-select');
  const questionEN = document.getElementById('question-en');
  const questionCN = document.getElementById('question-cn');
  const keywordsContainer = document.getElementById('keywords-container');
  const checklistContainer = document.getElementById('checklist-container');
  const modelAnswer = document.getElementById('model-answer');
  const generateBtn = document.getElementById('generate-btn');

  // Populate topics
  const topics = [...new Set(examData.map(item => item.topic))];
  topicSelect.innerHTML = '<option value="all">All Topics (随机全套大纲)</option>';
  topics.forEach(t => {
    topicSelect.innerHTML += `<option value="${t}">${t}</option>`;
  });

  function loadQuestion() {
    const selectedTopic = topicSelect.value;
    let pool = examData;
    if (selectedTopic !== 'all') {
      pool = examData.filter(item => item.topic === selectedTopic);
    }
    const q = pool[Math.floor(Math.random() * pool.length)];

    questionEN.textContent = q.questionEN;
    questionCN.textContent = q.questionCN;
    modelAnswer.innerHTML = q.modelAnswerEN.replace(/\n/g, '<br/>');

    // Keywords
    keywordsContainer.innerHTML = q.keywords
      .map(k => `<span style="background:rgba(56,189,248,0.15); color:#38bdf8; padding:0.3rem 0.6rem; border-radius:6px; font-size:0.85rem; border:1px solid rgba(56,189,248,0.3); display:inline-block; margin-right:0.5rem; margin-bottom:0.5rem;">${k}</span>`)
      .join('');

    // Checklist
    checklistContainer.innerHTML = q.checklist
      .map((item, idx) => `
        <label class="checklist-item">
          <input type="checkbox" id="check-${idx}">
          <span>${item}</span>
        </label>
      `).join('');

    resetTimer();
  }

  generateBtn.addEventListener('click', loadQuestion);
  loadQuestion();
}

// Timer Functions
function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("⏰ Time's up! Finish your spoken English summary now!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 120;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const display = document.getElementById('timer-display');
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  if (display) {
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}

// Flashcard Functions
function initFlashcards() {
  const card = document.getElementById('flashcard');
  const prevBtn = document.getElementById('card-prev');
  const nextBtn = document.getElementById('card-next');

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  function renderCard() {
    card.classList.remove('flipped');
    const data = examData[currentCardIndex];
    document.getElementById('card-tag').textContent = `${data.topic} (${currentCardIndex + 1}/${examData.length})`;
    document.getElementById('card-question-cn').textContent = data.questionCN;
    document.getElementById('card-question-en').textContent = data.questionEN;
    document.getElementById('card-keywords').innerHTML = data.keywords.map(k => `<li>${k}</li>`).join('');
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentCardIndex = (currentCardIndex - 1 + examData.length) % examData.length;
    renderCard();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentCardIndex = (currentCardIndex + 1) % examData.length;
    renderCard();
  });

  renderCard();
}
