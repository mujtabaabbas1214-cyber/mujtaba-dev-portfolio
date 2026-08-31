// Central Personal Profile & Resume Data Store

export const profile = {
  name: 'Syed Muhammad Mujtaba Abbas',
  shortName: 'Mujtaba Abbas',
  logoText: 'SMMA',
  title: 'Computer Science Student | Front-End Developer | AI Enthusiast',
  heroHeadline: 'Building Modern Web Experiences & AI-Powered Applications.',
  heroDescription: 'Computer Science student and Front-End Developer passionate about creating modern applications, intelligent systems, and meaningful digital experiences.',
  
  aboutMeText: 'I am a Computer Science undergraduate with a strong interest in Front-End Development, Artificial Intelligence, software development, and UI/UX design. I enjoy building interactive web applications, AI-powered systems, Android applications, database-driven systems, and user-focused digital experiences. I am continuously improving my technical skills by working on practical academic and personal projects.',
  
  cvLink: '/cv-placeholder.pdf',
  
  // Social and Contact links (using clearly identifiable placeholders)
  socialLinks: {
    github: 'https://github.com/placeholder-mujtaba',
    linkedin: 'https://linkedin.com/in/placeholder-mujtaba',
    email: 'mailto:mujtaba.placeholder@example.com',
    emailDisplay: 'mujtaba.placeholder@example.com'
  },
  
  // 4 Professional Highlights for About Section
  aboutHighlights: [
    {
      id: 'cs-student',
      title: 'Computer Science Student',
      tagline: 'Undergraduate at PAF-KIET',
      icon: 'GraduationCap',
      description: 'Strengthening core computer science fundamentals in Data Structures, Algorithms, DBMS, Operating Systems, and Security.'
    },
    {
      id: 'frontend-dev',
      title: 'Front-End Developer',
      tagline: 'Modern Web Engineering',
      icon: 'Layout',
      description: 'Crafting responsive, performant, and dynamic single-page applications with React.js, modern CSS, and Vite.'
    },
    {
      id: 'ai-enthusiast',
      title: 'AI Enthusiast',
      tagline: 'Intelligent Systems',
      icon: 'Bot',
      description: 'Exploring autonomous agents, LLM integrations, algorithmic reasoning, and AI-powered full-stack solutions.'
    },
    {
      id: 'ui-ux-focused',
      title: 'UI/UX Focused',
      tagline: 'Human-Centered Design',
      icon: 'Sparkles',
      description: 'Applying HCI principles and Figma prototyping to create intuitive, accessible, and aesthetically refined user interfaces.'
    }
  ],

  // Skills Categories
  skills: {
    programmingLanguages: [
      { name: 'JavaScript', level: 'Advanced', icon: 'Code' },
      { name: 'Python', level: 'Intermediate', icon: 'Terminal' },
      { name: 'Java', level: 'Intermediate', icon: 'Coffee' },
      { name: 'C#', level: 'Intermediate', icon: 'Hash' },
      { name: 'C', level: 'Foundational', icon: 'Cpu' },
      { name: 'PHP', level: 'Intermediate', icon: 'Server' }
    ],
    frontend: [
      { name: 'HTML', level: 'Advanced', icon: 'FileCode' },
      { name: 'CSS', level: 'Advanced', icon: 'Palette' },
      { name: 'JavaScript', level: 'Advanced', icon: 'Zap' },
      { name: 'React.js', level: 'Advanced', icon: 'Atom' }
    ],
    backendAndDatabases: [
      { name: 'PHP', level: 'Intermediate', icon: 'Server' },
      { name: 'Python', level: 'Intermediate', icon: 'Terminal' },
      { name: 'FastAPI', level: 'Intermediate', icon: 'Zap' },
      { name: 'SQL', level: 'Intermediate', icon: 'Database' },
      { name: 'MySQL', level: 'Intermediate', icon: 'Database' },
      { name: 'Microsoft SQL Server', level: 'Intermediate', icon: 'Database' },
      { name: 'Firebase', level: 'Intermediate', icon: 'Flame' }
    ],
    tools: [
      { name: 'Git', level: 'Proficient', icon: 'GitBranch' },
      { name: 'GitHub', level: 'Proficient', icon: 'Github' },
      { name: 'Figma', level: 'Proficient', icon: 'Figma' },
      { name: 'Android Studio', level: 'Proficient', icon: 'Smartphone' },
      { name: 'Vite', level: 'Proficient', icon: 'Zap' },
      { name: 'XAMPP', level: 'Proficient', icon: 'HardDrive' },
      { name: 'Google Colab', level: 'Proficient', icon: 'Layers' }
    ],
    other: [
      { name: 'Artificial Intelligence', icon: 'Bot' },
      { name: 'UI/UX Design', icon: 'Sparkles' },
      { name: 'Data Structures and Algorithms', icon: 'Binary' },
      { name: 'Object-Oriented Programming', icon: 'Boxes' },
      { name: 'DBMS', icon: 'Database' },
      { name: 'Computer Networks', icon: 'Network' },
      { name: 'Information Security', icon: 'ShieldCheck' },
      { name: 'Software Development Life Cycle', icon: 'GitPullRequest' }
    ]
  },

  // Professional Experience
  experience: [
    {
      id: 'kdys-intern',
      position: 'Website Frontend Developer Intern',
      company: 'KDYS Lab',
      duration: '3 Months',
      type: 'Internship',
      status: 'Completed',
      description: 'Worked on frontend development tasks and gained hands-on experience building and improving web interfaces using modern web technologies including React.js and PHP.',
      highlights: [
        'Built responsive web interfaces adhering to high aesthetic and performance standards.',
        'Collaborated on component integration with React.js and dynamic PHP backend endpoints.',
        'Participated in code reviews, UI bug fixes, and cross-browser responsiveness tuning.'
      ],
      technologies: ['React.js', 'PHP', 'JavaScript', 'HTML5', 'CSS3']
    }
  ],

  // Academic Education
  education: [
    {
      id: 'paf-kiet-bscs',
      institution: 'PAF-KIET',
      degree: 'BS Computer Science',
      timeline: '2023 – 2027',
      status: 'In Progress',
      location: 'Karachi, Pakistan',
      description: 'Computer Science undergraduate building practical experience through academic projects, software development, web technologies, databases, AI, and UI/UX design.',
      keyCoursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Human-Computer Interaction (HCI)',
        'Information Security',
        'Web Engineering'
      ]
    }
  ]
};
