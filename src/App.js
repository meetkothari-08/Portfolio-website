import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight, FaLinkedinIn, FaGithub, FaEnvelope,
  FaPython, FaJava, FaReact, FaAws, FaDatabase
} from "react-icons/fa";
import { SiPostgresql, SiTableau, SiPowerbi, SiTypescript, SiScikitlearn } from "react-icons/si";
import "./index.css";

const projects = [
  {
    eyebrow: "AI + Research",
    title: "Career Recommendation System",
    metric: "86% relevance",
    description:
      "An AI-driven career intelligence platform that combines machine learning, real-time job-market data, and a fine-tuned language model to identify skill gaps and recommend personalized career paths.",
    bullets: [
      "Analyzed 1,000+ live job postings to ground recommendations in current market demand.",
      "Recommended 50+ career paths and validated performance across 100 test profiles.",
      "Published at IEEE ICISE 2025."
    ],
    stack: ["Python", "Machine Learning", "LLM", "NLP"]
  },
  {
    eyebrow: "Data Analytics",
    title: "Social Media Analytics System",
    metric: "30K posts",
    description:
      "A PostgreSQL-based analytics system built to understand what drives engagement on Instagram and translate behavioral patterns into actionable content strategy.",
    bullets: [
      "Investigated 30,000 posts with 30 analytical SQL queries.",
      "Studied content, audience, and timing across three engagement dimensions.",
      "Converted findings into recommendations on posting windows, audience behavior, and content performance."
    ],
    stack: ["PostgreSQL", "SQL", "Analytics", "Strategy"]
  },
  {
    eyebrow: "Machine Learning",
    title: "Credit Score Classifier",
    metric: "96% accuracy",
    description:
      "A supervised learning system for automated credit-risk profiling, designed to classify customer credit scores consistently across four risk levels.",
    bullets: [
      "Trained a Random Forest model on 8,000+ records across 12 features.",
      "Performed preprocessing, feature analysis, and model evaluation end to end.",
      "Achieved 96% classification accuracy."
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Random Forest"]
  },
  {
    eyebrow: "Graph AI + Research",
    title: "Blockchain Fraud Detection",
    metric: "89% F1",
    description:
      "A graph-based fraud detection framework for identifying suspicious transaction behavior while making model decisions more interpretable.",
    bullets: [
      "Modeled a transaction network with 10,000+ nodes, 12 node features, and 8 edge features.",
      "Used GNNExplainer to surface suspicious transaction patterns.",
      "Reached 84% precision and 89% F1-score; published at IEEE ICBDS 2025."
    ],
    stack: ["GNN", "Explainable AI", "Python", "Graph ML"]
  }
];

const experiences = [
  {
    role: "Repository Data Analyst",
    company: "Texas A&M University",
    meta: "Sep 2026 — Present · College Station, TX",
    points: [
      "Manage metadata and collection records in OAKTrust, a 71K+ digital-object institutional repository.",
      "Process CSV-based datasets and perform metadata quality reviews to improve accuracy, consistency, and discoverability.",
      "Use user testing and workflow analysis to identify process improvements that strengthen data integrity and repository performance."
    ]
  },
  {
    role: "Data Science Intern",
    company: "MindCraft Software",
    meta: "Jun 2025 — Nov 2025 · Mumbai, India",
    points: [
      "Built an end-to-end customer lifetime value model for 20,000+ insurance policies across 18 features, reaching an R² of 92%.",
      "Engineered a RAG-based insurance document retrieval system across 70 documents using chunking, embeddings, and semantic retrieval.",
      "Selected for additional AI projects based on model performance and delivery."
    ]
  },
  {
    role: "Technical Consultant Intern",
    company: "CocoonIT Services",
    meta: "Jun 2024 — Aug 2024 · Mumbai, India",
    points: [
      "Translated business requirements into functional specifications for Microsoft Dynamics 365 Business Central.",
      "Mapped sales, purchasing, and billing workflows and executed 30+ functional test scenarios.",
      "Worked across client and consultant teams to surface process gaps and align ERP workflows with operational needs."
    ]
  }
];

const skillGroups = [
  ["Programming", ["Python", "SQL", "Java", "C", "ReactJS", "TypeScript", "HTML", "CSS"]],
  ["Data & AI", ["Pandas", "NumPy", "Scikit-learn", "OpenCV", "Matplotlib", "Machine Learning", "RAG"]],
  ["Analytics & Platforms", ["PostgreSQL", "Tableau", "Power BI", "Microsoft Excel", "AWS"]],
  ["Business", ["Project Coordination", "Business Process Analysis", "Marketing", "Budgeting", "Event Management"]]
];

function SectionTitle({ kicker, title, copy }) {
  return (
    <div className="section-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Meet Kothari home">
          <span className="brand-mark">MK</span>
          <span className="brand-copy">Meet Kothari</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/MeetKothari-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </header>

      <main id="top">
        <section className="hero section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <div className="availability"><span /> Open to data, AI & information systems opportunities</div>
            <p className="hero-kicker">MS-MIS @ Texas A&M · Data + AI + Business Systems</p>
            <h1>I turn complex data into <em>clear decisions</em> and intelligent products.</h1>
            <p className="hero-lede">
              I’m Meet Kothari, a Management Information Systems graduate student at Texas A&M building at the intersection
              of analytics, machine learning, enterprise systems, and product-minded problem solving.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <FaArrowRight /></a>
              <a className="button button-ghost" href="mailto:meet.kothari@tamu.edu">Let’s connect</a>
            </div>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/meet-kothari08" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
              <a href="https://github.com/meetkothari-08" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              <a href="mailto:meet.kothari@tamu.edu"><FaEnvelope /> Email</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7, delay: .12 }}
          >
            <div className="panel-label">Current focus</div>
            <div className="signal-card">
              <span className="signal-number">71K+</span>
              <span className="signal-label">digital objects supported through repository data work</span>
            </div>
            <div className="signal-grid">
              <div><strong>4.0</strong><span>MS-MIS GPA</span></div>
              <div><strong>92%</strong><span>CLTV R²</span></div>
              <div><strong>2</strong><span>IEEE publications</span></div>
              <div><strong>$12.7K</strong><span>sponsorships secured</span></div>
            </div>
            <div className="mini-stack">
              <span><FaPython /> Python</span>
              <span><SiPostgresql /> PostgreSQL</span>
              <span><SiScikitlearn /> ML</span>
              <span><SiTableau /> Tableau</span>
              <span><FaReact /> React</span>
            </div>
          </motion.div>
        </section>

        <section className="proof-strip">
          <span>Machine Learning</span><i />
          <span>Data Analytics</span><i />
          <span>Information Systems</span><i />
          <span>Research</span><i />
          <span>Business Process Analysis</span>
        </section>

        <section id="work" className="section projects-section">
          <SectionTitle
            kicker="Selected work"
            title="Projects with measurable outcomes."
            copy="A selection of research and applied analytics projects where the technical work is tied to a clear problem, method, and result."
          />
          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.article
                className="project-row"
                key={project.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .55, delay: index * .05 }}
              >
                <div className="project-index">0{index + 1}</div>
                <div className="project-main">
                  <div className="project-topline">
                    <span>{project.eyebrow}</span>
                    <strong>{project.metric}</strong>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul>{project.bullets.map(item => <li key={item}>{item}</li>)}</ul>
                  <div className="chips">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <SectionTitle
            kicker="Experience"
            title="Working across data, AI, and enterprise systems."
            copy="My experience spans university data operations, applied machine learning, and client-facing ERP consulting."
          />
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.article
                className="timeline-item"
                key={exp.role}
                initial={{ opacity: 0, x: index % 2 ? 18 : -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .3 }}
                transition={{ duration: .5 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-meta">{exp.meta}</div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  <ul>{exp.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-grid">
          <div>
            <SectionTitle kicker="About" title="Technical depth, with business context." />
            <p className="about-copy">
              I’m pursuing an MS in Management Information Systems at Texas A&M University’s Mays Business School after
              completing a B.Tech in Computer Science and Engineering with a Data Science specialization at D.J. Sanghvi College of Engineering.
              That path gives me a useful dual lens: I enjoy building models and data systems, but I’m equally interested in how they fit into
              workflows, decisions, users, and organizations.
            </p>
            <div className="education-card">
              <div>
                <span>2026 — 2028</span>
                <h4>Texas A&M University · Mays Business School</h4>
                <p>MS in Management Information Systems · GPA 4.0/4.0</p>
              </div>
              <div>
                <span>2022 — 2026</span>
                <h4>D.J. Sanghvi College of Engineering</h4>
                <p>B.Tech CSE, Data Science Specialization · GPA 3.71/4.0</p>
              </div>
            </div>
          </div>

          <div className="leadership-card">
            <span className="kicker">Leadership</span>
            <h3>Marketing Head · DJS Speedsters</h3>
            <p>Led a 15-member marketing team and represented the team at the FMAE MotoStudent competition.</p>
            <div className="leadership-stats">
              <div><strong>15</strong><span>team members</span></div>
              <div><strong>2</strong><span>sponsorships</span></div>
              <div><strong>$12.7K</strong><span>secured</span></div>
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <SectionTitle kicker="Toolkit" title="The tools I use to move from question to outcome." />
          <div className="skills-grid">
            {skillGroups.map(([label, skills]) => (
              <article className="skill-group" key={label}>
                <h3>{label}</h3>
                <div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="certifications">
            <span>AWS Academy — Cloud Foundations</span>
            <span>Accenture North America — Data Analytics & Visualization Job Simulation</span>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <span className="kicker">Let’s build something useful</span>
            <h2>Have a data, AI, analytics, or systems problem worth solving?</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:meet.kothari@tamu.edu">meet.kothari@tamu.edu <FaArrowRight /></a>
            <a className="text-link" href="https://www.linkedin.com/in/meet-kothari08" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Meet Kothari</span>
        <span>Designed around data, systems, and outcomes.</span>
      </footer>
    </div>
  );
}

export default App;
