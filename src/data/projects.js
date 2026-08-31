// Central Project Data Store
// Real Project Screenshots Imports

// 01 — AI Agent Platform
import agentDashboard from '../assets/images/projects/ai-agent-platform/Dashboard.png';
import agentImg1 from '../assets/images/projects/ai-agent-platform/image 1.png';
import agentImg2 from '../assets/images/projects/ai-agent-platform/image 2.png';
import agentImg3 from '../assets/images/projects/ai-agent-platform/image 3.png';

// 02 — AI Chatbot
import chatbotDashboard from '../assets/images/projects/ai-chatbot/Dashboard .png';
import chatbotImg1 from '../assets/images/projects/ai-chatbot/image 1.png';

// 03 — Car Care (Android App)
import carCareDashboard from '../assets/images/projects/car-care/Dashboard.jpg';
import carCareFuel from '../assets/images/projects/car-care/Fuel Tracker.jpg';
import carCareService from '../assets/images/projects/car-care/Service Maintaince.jpg';
import carCareExpenses from '../assets/images/projects/car-care/Car Expenses.jpg';

// 04 — Learning Management System (Figma UI/UX)
import lmsHomePage from '../assets/images/projects/learning-management-system/HomePage.png';
import lmsStudent from '../assets/images/projects/learning-management-system/Student Dashboard.png';
import lmsParent from '../assets/images/projects/learning-management-system/Parent Dashboard.png';
import lmsFaculty from '../assets/images/projects/learning-management-system/Faculty Dashboard.png';

// 05 — Hostel Management System (Full-Stack Web App & Database)
import hostelDashboard from '../assets/images/projects/hostel-management-system/Dashboard.png';
import hostelLogin from '../assets/images/projects/hostel-management-system/Login System.png';
import hostelDatabase from '../assets/images/projects/hostel-management-system/Database Screenshot .png';

// 06 — Hospital Management System (Python DSA / Google Colab)
import hospitalCode from '../assets/images/projects/hospital-management-system/Code Screenshot.png';
import hospitalOutput1 from '../assets/images/projects/hospital-management-system/Output Screenshot 1.png';
import hospitalOutput2 from '../assets/images/projects/hospital-management-system/Output screenshot 2.png';

export const projects = [
  {
    id: 'ai-agent-platform',
    slug: 'ai-agent-platform',
    number: '01',
    name: 'AI Agent Platform',
    category: 'AI / Web Application',
    isFeatured: true,
    isMobile: false,
    accentGlow: 'cyan',
    description: 'An AI-powered platform designed to intelligently respond to user queries, provide useful information, perform calculations, and support interactions with different applications and services.',
    longDescription: 'The AI Agent Platform is an autonomous multi-agent orchestration ecosystem designed to handle multi-step reasoning, mathematical computations, and real-time data syntheses. By combining a modern, reactive user interface with robust backend execution workers, the platform delegates tasks to specialized agent routines that analyze intent, execute queries, and return structured outputs with high precision and low latency.',
    technologies: ['React.js', 'Python', 'AI Integration', 'Vite', 'REST APIs', 'CSS3'],
    features: [
      'Intelligent multi-agent user interaction',
      'AI-powered contextual responses',
      'Complex query information retrieval',
      'Dynamic mathematical and computational reasoning',
      'Modern, highly responsive interactive interface',
      'Extensible integration connectors for external services'
    ],
    problem: 'Users frequently need unified systems capable of handling both qualitative knowledge queries and exact algorithmic calculations without having to switch between multiple disconnected tools and calculators.',
    developmentProcess: 'Developed through an iterative lifecycle starting with architectural wireframes, followed by creating the modular React frontend state container and integrating asynchronous Python computational workers with robust fallback handling.',
    challenges: 'Ensuring low-latency roundtrips while coordinating multi-step agent reasoning pipelines and maintaining strict data schema validation across dynamic API responses.',
    futureImprovements: 'Implementing persistent agent memory vectors, voice-driven multimodal interaction, and expanded third-party tool plugins (e.g. automated browser actions and database connectors).',
    images: [
      { src: agentDashboard, alt: 'AI Agent Platform - Main Dashboard Interface', caption: 'Platform Dashboard & Autonomous Workspace' },
      { src: agentImg1, alt: 'AI Agent Platform - Agent Query & Prompt Runner', caption: 'Agent Query Runner & Prompt Management' },
      { src: agentImg2, alt: 'AI Agent Platform - Real-time Computational Execution', caption: 'Live Execution & Analysis View' },
      { src: agentImg3, alt: 'AI Agent Platform - System Telemetry & Output Synthesis', caption: 'System Metrics & Response Synthesis' }
    ],
    githubLink: 'https://github.com/mujtabaabbas1214-cyber/AI-AGENT-PLATFORM',
    liveDemoLink: 'https://placeholder-ai-agent-platform.vercel.app',
    figmaLink: '',
    colabLink: '',
    videoLink: '',
    apkLink: ''
  },
  {
    id: 'ai-chatbot',
    slug: 'ai-chatbot',
    number: '02',
    name: 'AI Chatbot',
    category: 'AI / Full-Stack Web Application',
    isFeatured: true,
    isMobile: false,
    accentGlow: 'indigo',
    description: 'A modern AI chatbot application with a polished SaaS-style interface. The frontend communicates with a backend that processes user messages and connects with an AI model.',
    longDescription: 'A production-grade, full-stack conversational intelligence web application that delivers seamless, real-time message streaming and Markdown syntax highlighting. Built with a responsive React.js frontend powered by Vite and backed by an asynchronous Python FastAPI server, the architecture ensures millisecond response latencies and an intuitive user experience reminiscent of premier AI SaaS applications.',
    technologies: ['React.js', 'Vite', 'Python', 'FastAPI', 'AI API', 'CSS3', 'Uvicorn'],
    features: [
      'Interactive, frictionless chat interface with chat history management',
      'Real-time streaming AI-powered responses with Markdown & code formatting',
      'Asynchronous FastAPI backend integration with robust error boundary logging',
      'Modern dark-themed responsive SaaS UI with custom scroll locks',
      'Instant prompt presets and adjustable AI model parameter controls'
    ],
    problem: 'Standard chat interfaces frequently struggle with formatting complex code snippets, sluggish message parsing, and awkward layout shifts during live streaming tokens.',
    developmentProcess: 'Designed the UI/UX in Figma with a focus on typography and readability, developed the React frontend with custom streaming hooks, and implemented FastAPI asynchronous endpoints with Pydantic payload validation.',
    challenges: 'Managing smooth token stream rendering without unnecessary component re-renders while ensuring code block syntax highlights dynamically update in real time.',
    futureImprovements: 'Adding multimodal file attachment analysis (PDFs, images), custom user personas, and persistent session storage with database synchronization.',
    images: [
      { src: chatbotDashboard, alt: 'AI Chatbot - SaaS Conversation Dashboard', caption: 'Main Conversational Interface & Sidebar' },
      { src: chatbotImg1, alt: 'AI Chatbot - Real-time AI Query Interaction', caption: 'Interactive Chat Flow & AI Model Output' }
    ],
    githubLink: 'https://github.com/mujtabaabbas1214-cyber/AI-chatbot',
    liveDemoLink: 'https://placeholder-ai-chatbot.vercel.app',
    figmaLink: '',
    colabLink: '',
    videoLink: '',
    apkLink: ''
  },
  {
    id: 'car-care',
    slug: 'car-care',
    number: '03',
    name: 'Car Care',
    category: 'Android Application',
    isFeatured: false,
    isMobile: true,
    accentGlow: 'emerald',
    description: 'A mobile application designed to help users manage their vehicles, track fuel usage, record maintenance and services, and monitor car-related expenses.',
    longDescription: 'Car Care is a native Android mobile application created to empower vehicle owners with actionable insights into their automotive expenses. Built using Java and Android Studio, the app provides an offline-first architecture to log fuel refills, calculate instant fuel economy and monetary costs, maintain scheduled service histories, and visualize monthly expenditure trends.',
    technologies: ['Android Studio', 'Java', 'XML', 'SharedPreferences', 'Android SDK'],
    features: [
      'Dedicated "My Car" profile section with odometer tracking',
      'Comprehensive Fuel Tracker calculating quantity, price per litre, and total cost',
      'Service and maintenance records with proactive milestone reminders',
      'Categorized vehicular Expense Tracker with visual monthly summaries',
      'Offline data persistence using efficient Android SharedPreferences'
    ],
    problem: 'Car owners frequently lose track of scattered paper receipts, miss critical preventative maintenance milestones, and lack visibility into real-world monthly fuel spending.',
    developmentProcess: 'Built natively in Android Studio by creating modular XML view hierarchies adhering to Material Design principles, backed by strongly-typed Java controllers and persistent local storage managers.',
    challenges: 'Handling accurate floating-point currency and fuel calculations across diverse metric/imperial units while ensuring data remains persistent across device reboots without network connectivity.',
    futureImprovements: 'Integrating Google Maps for nearby fuel station discovery, receipt image OCR scanning for automated expense logging, and cloud backup synchronization.',
    images: [
      { src: carCareDashboard, alt: 'Car Care - Android App Dashboard', caption: 'Main App Dashboard & Vehicle Summary' },
      { src: carCareFuel, alt: 'Car Care - Fuel Usage & Cost Tracker', caption: 'Fuel Economy & Refill Log' },
      { src: carCareService, alt: 'Car Care - Service & Maintenance Checklist', caption: 'Preventative Maintenance & Service Records' },
      { src: carCareExpenses, alt: 'Car Care - Monthly Vehicular Expense Tracker', caption: 'Categorized Expense Analytics' }
    ],
    githubLink: '',
    liveDemoLink: '',
    figmaLink: '',
    colabLink: '',
    videoLink: '',
    apkLink: 'https://placeholder-download-link.com/car-care.apk'
  },
  {
    id: 'learning-management-system',
    slug: 'learning-management-system',
    number: '04',
    name: 'Learning Management System',
    category: 'UI/UX Design / HCI Project',
    isFeatured: false,
    isMobile: false,
    accentGlow: 'purple',
    description: 'A role-based Learning Management System designed for Parents, Students, and Faculty. The system provides dashboards for attendance, grades, GPA, courses, timetables, and alerts.',
    longDescription: 'An extensive Human-Computer Interaction (HCI) and UI/UX design project engineered in Figma to solve communication gaps and fragmented user experiences in academic institutions. The design introduces dedicated role-tailored dashboards for Students, Parents, and Faculty members, ensuring each persona accesses relevant data—such as GPA progression, attendance analytics, timetable schedules, and instant academic alerts—with minimum cognitive friction.',
    technologies: ['Figma', 'UI/UX Design', 'HCI Principles', 'Prototyping', 'Design Systems'],
    features: [
      'Role-based dashboard architecture (Student, Parent, Faculty)',
      'Real-time cumulative GPA visualizer and academic trend line',
      'Attendance tracking meter with automated threshold warnings',
      'Interactive weekly course timetable with lecture room mapping',
      'Instant notification and academic alert center for upcoming exams and deadlines',
      'Faculty grade submission suite with distribution histograms'
    ],
    problem: 'Traditional educational management systems suffer from high visual clutter, poor accessibility, and a one-size-fits-all interface that confuses parents and overburdens instructors.',
    developmentProcess: 'Conducted user persona research and empathy mapping, created low-fidelity wireframes, iterated through high-fidelity interactive component libraries in Figma, and validated usability using Nielsen Norman heuristic guidelines.',
    challenges: 'Balancing the dense quantitative data requirements of faculty members with the clean, glanceable overview needed by non-technical parents and busy students.',
    futureImprovements: 'Developing high-fidelity interactive micro-animations in ProtoPie and converting the Figma token system into a complete Tailwind CSS / React component library.',
    images: [
      { src: lmsHomePage, alt: 'Learning Management System - Home Portal Design', caption: 'LMS Academic Portal & Navigation Homepage' },
      { src: lmsStudent, alt: 'Learning Management System - Student Dashboard UI', caption: 'Student Dashboard: GPA, Attendance & Courses' },
      { src: lmsParent, alt: 'Learning Management System - Parent Dashboard UI', caption: 'Parent View: Student Progress & Alerts' },
      { src: lmsFaculty, alt: 'Learning Management System - Faculty Suite UI', caption: 'Faculty Suite: Grading & Academic Management' }
    ],
    githubLink: '',
    liveDemoLink: '',
    figmaLink: 'https://www.figma.com/file/placeholder-lms-prototype',
    colabLink: '',
    videoLink: '',
    apkLink: ''
  },
  {
    id: 'hostel-management-system',
    slug: 'hostel-management-system',
    number: '05',
    name: 'Hostel Management System',
    category: 'Full-Stack Web Application / Database System',
    isFeatured: false,
    isMobile: false,
    accentGlow: 'blue',
    description: 'A web-based Hostel Management System designed to efficiently manage hostel-related information and operations. The project uses PHP for application development and MySQL for database management. A key focus of the project is database security and protection against SQL Injection attacks.',
    longDescription: 'A robust web-based database management system developed in PHP and MySQL to streamline residential hostel operations, room allotment, student record verification, and fee ledger management. The project emphasizes enterprise-grade database security, strictly enforcing parameterized queries and prepared statements to neutralize SQL Injection vulnerabilities within a structured three-tier architecture.',
    technologies: ['PHP', 'MySQL', 'XAMPP', 'HTML5', 'CSS3', 'SQL', 'PDO'],
    features: [
      'Comprehensive hostel room allocation and bed capacity management',
      'Detailed student registration, wing assignment, and resident directory',
      'Relational database architecture engineered with MySQL and ACID compliance',
      'Dedicated Security Considerations suite for SQL Injection mitigation',
      'Robust Three-Tier Architectural separation (Presentation, Logic, Data)',
      'Fee transaction ledger and automated receipt verification'
    ],
    problem: 'Manual paper-based hostel logs suffer from frequent double-booking errors, lack of auditability, and severe security risks when rudimentary web portals expose raw database queries to malicious inputs.',
    developmentProcess: 'Designed the normalized relational database schema in MySQL, implemented the backend business logic and authentication layer in PHP 8 utilizing PHP Data Objects (PDO), and built a clean responsive interface.',
    challenges: 'Designing strict transactional locks to prevent race conditions during peak room registration periods while refactoring legacy query patterns into bulletproof parameterized statements.',
    futureImprovements: 'Integrating automated SMS/Email gateway alerts for fee dues and building a student self-service room swap request portal.',
    securityConsiderations: {
      title: 'Security Considerations & Database Protection',
      summary: 'Security was a foundational priority throughout the design of the Hostel Management System. Below are the key security principles implemented:',
      points: [
        {
          heading: 'SQL Injection Prevention',
          detail: 'All database queries utilize PHP Data Objects (PDO) with strictly parameterized prepared statements. Raw user input is never concatenated directly into SQL query strings, completely neutralizing SQL Injection (SQLi) attack vectors.'
        },
        {
          heading: 'Secure Database Operations & Transactions',
          detail: 'Database operations enforce strict data integrity through foreign key constraints and transactional rollbacks, guaranteeing that partial data is never committed if an operation fails midway.'
        },
        {
          heading: 'Three-Tier Architecture',
          detail: 'The application enforces a clear separation of concerns across the Presentation Tier (HTML/CSS), Application Logic Tier (PHP Business Rules), and Data Tier (MySQL Database), minimizing attack surfaces and preventing unauthorized direct database access.'
        },
        {
          heading: 'Input Validation & Output Sanitization',
          detail: 'Strict server-side validation filters all incoming request payloads against expected data types and lengths, while output rendering is escaped using htmlspecialchars() to prevent Cross-Site Scripting (XSS).'
        }
      ]
    },
    images: [
      { src: hostelDashboard, alt: 'Hostel Management System - Admin Dashboard', caption: 'Hostel Administration Dashboard' },
      { src: hostelLogin, alt: 'Hostel Management System - Authentication & Login System', caption: 'Secure Authentication & Student Portal' },
      { src: hostelDatabase, alt: 'Hostel Management System - MySQL Relational Database Structure', caption: 'MySQL Database Schema & SQLi Protected Records' }
    ],
    githubLink: '',
    liveDemoLink: '',
    figmaLink: '',
    colabLink: '',
    videoLink: '',
    apkLink: ''
  },
  {
    id: 'hospital-management-system',
    slug: 'hospital-management-system',
    number: '06',
    name: 'Hospital Management System',
    category: 'Python Application / Data Structures & Algorithms Project',
    isFeatured: false,
    isMobile: false,
    accentGlow: 'orange',
    description: 'A Hospital Management System developed using Python as an academic project focused on applying programming concepts and Data Structures and Algorithms to manage hospital-related information and operations. The project currently runs in Google Colab.',
    longDescription: 'An algorithmic Python application developed in Google Colab that models core hospital operations through optimal Data Structures and Algorithms (DSA). By implementing custom priority queues (min-heaps) for emergency patient triage, binary search trees (BST) for O(log N) medical record indexing, and circular linked lists for physician on-call rotations, the system achieves maximal efficiency in patient care workflows without external database overhead.',
    technologies: ['Python', 'Data Structures & Algorithms', 'Google Colab', 'Jupyter', 'Object-Oriented Programming'],
    features: [
      'Hospital and patient information management engine',
      'Emergency room triage scheduling powered by Min-Heap Priority Queues',
      'Fast O(log N) patient record search using Binary Search Trees (BST)',
      'Doctor on-call shift management using Circular Linked Lists',
      'Interactive execution and CLI interface running in Google Colab'
    ],
    problem: 'Hospital emergency departments face critical delays if patient intake scheduling operates in naive First-Come-First-Serve (O(N)) order rather than real-time clinical severity prioritization.',
    developmentProcess: 'Formulated the mathematical problem definitions, implemented custom OOP classes in Python for each algorithmic data structure, and benchmarked time/space complexity within an interactive Google Colab notebook.',
    challenges: 'Designing custom in-memory binary search trees with dynamic re-balancing logic while maintaining clean, interactive CLI prompts within the Google Colab environment.',
    futureImprovements: 'Exporting patient analytics to interactive Matplotlib / Seaborn visualization charts and developing a lightweight Tkinter / Web GUI frontend wrapper.',
    images: [
      { src: hospitalCode, alt: 'Hospital Management System - Python Code Implementation', caption: 'DSA Python Source Code in Google Colab' },
      { src: hospitalOutput1, alt: 'Hospital Management System - Interactive Console Output 1', caption: 'Patient Registration & Emergency Triage Execution' },
      { src: hospitalOutput2, alt: 'Hospital Management System - Interactive Console Output 2', caption: 'BST Search & Doctor Allocation Runtime Results' }
    ],
    githubLink: '',
    liveDemoLink: '',
    figmaLink: '',
    colabLink: 'https://colab.research.google.com/drive/placeholder-hospital-management',
    videoLink: '',
    apkLink: ''
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug);
};
