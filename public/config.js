// ===== PORTFOLIO CONFIGURATION =====
const CONFIG = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'HENDIKA ADHI WIBAWANTA',
    shortName: 'Hendika',
    title: 'Cybersecurity Enthusiast & Web Developer',
    subtitle: 'SECURING THE DIGITAL WORLD.',
    location: 'Student at SMK N 1 Pundong — Based in Yogyakarta, ID',
    available: true,
    email: 'emailhendika@gmail.com',
    whatsapp: '6285191240359',
    linkedin: 'https://www.linkedin.com/in/hendika-adhi-wibawanta-10249a32a/'
  },

  // ===== BRANDING =====
  branding: {
    logoIcon: 'H',
    logoText: 'Hendika',
    browserTitle: 'Hendika | Cybersecurity & Web',
    favicon: 'images/profile/logo.png' // Gantilah dengan path logo Anda
  },

  // ===== HERO SECTION =====
  hero: {
    subtitle: 'Cybersecurity Enthusiast & Web Developer',
    title: 'HENDIKA',
    italicText: 'ADHI WIBAWANTA.'
  },

  // ===== ABOUT SECTION =====
  about: {
    title: 'BUILDING',
    titleGradient: 'Wibawanta',
    description: 'A passionate student focused on cybersecurity and web development. I combine technical skills with a strong curiosity to create safe, efficient, and user-friendly digital solutions.',

    // ⬇️ GANTI DENGAN PATH LOCAL ANDA
    image: 'images/profile/hendika.jpg',


  },

  // ===== PROJECTS SECTION =====
  projects: [
    {
      id: '1',
      title: 'Karma.in',
      description: 'Karma In is a website translator that makes it easy to instantly and accurately translate text into multiple languages—free and hassle-free.',
      image: 'images/projects/karma-in.jpg',
      category: 'Web Development',
      tags: ['React', 'Gemini', 'Translaotor'],
      repo: 'https://github.com/Hend1kaGH/Karma.in.git'
    },
    {
      id: '2',
      title: 'HendikaCTF',
      description: 'A web-based Capture The Flag (CTF) competition platform featuring a retro terminal aesthetic. Designed to train cybersecurity problem-solving skills with secure flag hashing and an immersive UI.',
      image: 'images/projects/HendikaCTF.jpg',
      category: 'Web Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'CTF', 'Cybersecurity'],
      repo: 'https://github.com/Hend1kaGH/HendikaCTF.git'
    },
    {
      id: '3',
      title: 'Protofolio',
      description: 'A Python-based script for monitoring network traffic and detecting suspicious activities in real-time.',
      image: 'images/projects/protofolio.jpg',
      category: 'Web Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'Protofolio'],
      repo: 'https://github.com/Hend1kaGH/Protofolio.git'
    }
  ],

  // ===== EXPERIENCE SECTION =====
  experiences: [
    {
      id: '1',
      role: 'Cybersecurity Student & Practitioner',
      company: 'Self-Directed Learning',
      period: '2023 — Present',
      description: 'Actively learning and practicing cybersecurity fundamentals: network security, ethical hacking, vulnerability assessment, and secure coding. Building personal projects to apply theoretical knowledge.',
      tags: ['Network Security', 'Ethical Hacking', 'Python', 'Linux']
    },
    {
      id: '2',
      role: 'IT Intern (PKL)',
      company: 'Kings Computer',
      period: '2023',
      description: 'Completed vocational internship focusing on hardware troubleshooting, software installation, basic network configuration, and customer technical support. Gained hands-on experience in real-world IT environments.',
      tags: ['Hardware', 'Networking', 'Customer Support', 'Troubleshooting']
    }
  ],


  // ===== CONTACT SECTION =====
  contact: {
    title: 'LET\'S',
    titleGradient: 'CONNECT.',
    subtitle: 'Interested in cybersecurity or collaboration?',
    availableText: 'Open to internships & learning opportunities',
    contacts: [
      {
        id: '1',
        type: 'whatsapp',
        title: 'WhatsApp',
        description: 'Quick chat for questions',
        icon: 'chat',
        link: 'https://wa.me/6285191240359',
        color: 'green'
      },
      {
        id: '2',
        type: 'email',
        title: 'Email',
        description: 'Formal inquiries & collaborations',
        icon: 'alternate_email',
        link: 'mailto:emailhendika@gmail.com',
        color: 'pink'
      },
      {
        id: '3',
        type: 'linkedin',
        title: 'LinkedIn',
        description: 'Professional network',
        icon: 'hub',
        link: 'https://www.linkedin.com/in/hendika-adhi-wibawanta-10249a32a/',
        color: 'blue'
      }
    ]
  },

  // ===== FOOTER =====
  footer: {
    logo: 'HENDIKA',
    logoItalic: 'ADHI WIBAWANTA',
    copyright: '© 2025 — Student & Future Cybersecurity Professional'
  }
};