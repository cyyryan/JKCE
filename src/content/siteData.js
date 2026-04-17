export const primaryNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export const companyInfo = {
  name: 'JKCE PROBUILD',
  address: '3600 Viking Way, Richmond, BC, V6V 1N6',
  phone: '(604) 729 6583',
  phoneHref: 'tel:+16047296583',
  email: 'info@jkceprobuild.com',
  emailHref: 'mailto:info@jkceprobuild.com',
}

export const siteMeta = {
  siteName: 'JKCE Probuild',
  siteUrl: 'https://jkce-new-web-dzs5.vercel.app',
  defaultTitle: 'JKCE Probuild | Construction Company in Greater Vancouver',
  defaultDescription:
    'JKCE Probuild is a full-service construction company in Greater Vancouver specializing in excavation, construction management, design service, and ICF construction.',
  defaultOgImage:
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
  locale: 'en_CA',
}

export const services = [
  {
    slug: 'excavation',
    name: 'Excavation',
    shortName: 'Excavation',
    icon: 'EX',
    summary: 'Site preparation, grading, trenching, shoring, and civil groundwork for projects that need a controlled start.',
    description:
      'Field-led excavation for commercial, residential, and mixed-use projects across Greater Vancouver.',
    heroBody:
      'From early site preparation to utility-related groundwork, our excavation team helps create the conditions the rest of the project depends on.',
    overview:
      'We coordinate excavation with the next phase of work so the site is ready to move forward cleanly.',
    bullets: [
      'Site preparation and clearing',
      'Bulk excavation and grading',
      'Trenching for utilities and services',
      'Shoring coordination and earth retention',
      'Civil and utility-related groundwork',
      'Dewatering and haul-off management',
    ],
    scopeOfWork: [
      'Site clearing, stripping, and early site setup',
      'Cut and fill management with grading control',
      'Underground trenching and civil utility support',
      'Shoring coordination for constrained or deeper excavation conditions',
      'Subgrade preparation for the next construction phase',
    ],
    idealProjects: [
      'Commercial developments needing full site preparation',
      'Residential and mixed-use projects with utility and grading requirements',
      'Projects that need early civil coordination before vertical construction',
    ],
    whyChoose: [
      'Field-first planning',
      'Local site knowledge',
      'Strong schedule and safety coordination',
    ],
    cta: {
      title: 'Need excavation support for an upcoming project?',
      body: 'Talk to JKCE about site preparation, trenching, grading, and utility-related groundwork.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'construction-management',
    name: 'Construction Management',
    shortName: 'Construction Mgmt',
    icon: 'CM',
    summary: 'Planning, coordination, execution, and quality control for commercial and residential project delivery.',
    description:
      'Construction management with clear coordination, schedule discipline, and accountable execution.',
    heroBody:
      'We manage planning, coordination, execution, and closeout with a practical approach that keeps quality, schedule, and budget in view.',
    overview:
      'We connect planning, trade coordination, and field execution so projects move with better control.',
    bullets: [
      'Pre-construction planning and sequencing',
      'Consultant and trade coordination',
      'Budget awareness and schedule tracking',
      'Execution management and site communication',
      'Quality control and deficiency closeout',
      'Commercial and residential delivery oversight',
    ],
    scopeOfWork: [
      'Project planning, phasing, and milestone management',
      'Trade coordination across active construction phases',
      'Site communication tied to decisions, priorities, and constraints',
      'Quality tracking, closeout planning, and turnover support',
    ],
    idealProjects: [
      'Commercial projects needing tighter schedule and trade control',
      'Residential builds requiring structured delivery management',
      'Owners and developers who need one accountable coordination partner',
    ],
    whyChoose: [
      'Practical planning',
      'Clear communication',
      'Quality-focused delivery',
    ],
    cta: {
      title: 'Need construction management that stays close to the field?',
      body: 'JKCE can support project planning, coordination, and delivery from pre-construction through turnover.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'design-service',
    name: 'Design Service',
    shortName: 'Design Service',
    icon: 'DS',
    summary: 'Preliminary design, interior design, concept development, and tenant improvement design with buildability in mind.',
    description:
      'Design support that helps clients move from early ideas to buildable scope.',
    heroBody:
      'Our design service helps clients shape the project earlier, so design intent, budget expectations, and buildability are better aligned before construction starts.',
    overview:
      'We focus on concept development, preliminary planning, and interior or tenant improvement work that supports real delivery.',
    bullets: [
      'Preliminary design and early planning',
      'Concept development and scope alignment',
      'Interior design coordination',
      'Tenant improvement design support',
      'Buildability input before construction',
      'Material and system planning',
    ],
    scopeOfWork: [
      'Early concept development tied to project goals and constraints',
      'Preliminary layouts and design direction for interior or tenant work',
      'Design coordination that supports later pricing and execution',
      'Buildability-minded review before construction commitments are finalized',
    ],
    idealProjects: [
      'Commercial interiors and tenant improvements',
      'Clients who need help turning an idea into a buildable project scope',
      'Projects that benefit from tighter alignment between design and construction',
    ],
    whyChoose: [
      'Buildability-minded design',
      'Cleaner path to pricing',
      'Fewer gaps between design and field work',
    ],
    cta: {
      title: 'Need design support before construction begins?',
      body: 'JKCE can help with preliminary design, interior planning, concept development, and tenant improvement scope.',
      button: 'Discuss Your Project',
      to: '/contact',
    },
  },
  {
    slug: 'icf',
    name: 'ICF',
    shortName: 'ICF',
    icon: 'ICF',
    summary: 'Insulated concrete form capability for durable, efficient, and better-coordinated building systems.',
    description:
      'Hands-on ICF experience for projects that value durability, thermal performance, and practical field delivery.',
    heroBody:
      'ICF is more than a product choice. It affects planning, coordination, envelope performance, and how the job is executed in the field.',
    overview:
      'ICF combines structure and insulation in one system. JKCE approaches it as a practical building method, not just a technical feature.',
    bullets: [
      'ICF planning and constructability review',
      'Foundation and wall system coordination',
      'Thermal performance and envelope-minded execution',
      'Integration with structural and field teams',
      'Sequencing support for ICF installation',
      'Hands-on delivery awareness from site to close-in',
    ],
    scopeOfWork: [
      'ICF system review in relation to structure, schedule, and field conditions',
      'Coordination of wall and foundation-related planning',
      'Integration of ICF work with broader construction sequencing',
      'Execution support shaped by real installation and project-delivery considerations',
    ],
    idealProjects: [
      'Clients evaluating ICF for energy performance and durability',
      'Projects that need stronger alignment between design intent and field execution',
      'Owners who want a contractor with practical, hands-on ICF understanding',
    ],
    whyChoose: [
      'Hands-on ICF understanding',
      'Broader construction context',
      'Practical delivery support',
    ],
    cta: {
      title: 'Considering ICF for a future project?',
      body: 'Talk to JKCE about how insulated concrete form construction fits your scope, schedule, and long-term performance goals.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
]

export const projects = [
  {
    slug: 'tlowitsis-nation',
    title: 'Tlowitsis Nation',
    projectType: 'Housing / Community Development',
    category: 'ICF',
    serviceSlugs: ['icf', 'construction-management'],
    location: 'British Columbia',
    year: '2024',
    status: 'In Progress',
    summary: 'A community-oriented housing project supporting JKCE’s ICF and housing delivery capability.',
    projectSummary:
      'Tlowitsis Nation highlights JKCE’s ability to support housing delivery through coordinated planning, field execution, and ICF-related capability where long-term durability and building performance matter.',
    tags: ['ICF', 'Housing', 'Community'],
    scopeOfWork: [
      'ICF planning and system coordination',
      'Construction management support',
      'Schedule alignment across active work phases',
      'Site and trade coordination for housing delivery',
    ],
    highlights: [
      'Supports the JKCE housing and ICF capability story',
      'Demonstrates coordinated delivery for community-oriented projects',
      'Focuses on durability, envelope performance, and practical execution',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Housing development placeholder image',
        caption: 'Placeholder visual for housing and community development work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1400&q=80',
        alt: 'Construction coordination placeholder image',
        caption: 'Placeholder visual for coordinated field delivery and building systems.',
      },
    ],
    featuredOnHome: true,
    cta: {
      title: 'Looking for a contractor with ICF and housing capability?',
      body: 'JKCE can support planning, coordination, and delivery for residential or community-oriented building projects.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'w63-mansion',
    title: 'W63 Mansion',
    projectType: 'Luxury Residential',
    category: 'Excavation',
    serviceSlugs: ['excavation'],
    location: 'Greater Vancouver',
    year: '2024',
    status: 'Completed',
    summary: 'A residential project that supports JKCE’s excavation, foundation, and site-work capability.',
    projectSummary:
      'W63 Mansion demonstrates JKCE’s excavation and groundwork capability on a high-expectation residential site where control, sequencing, and clean site preparation are essential to the broader build.',
    tags: ['Excavation', 'Foundation', 'Residential'],
    scopeOfWork: [
      'Site preparation and excavation',
      'Foundation-related groundwork',
      'Grading and trenching coordination',
      'Site control for next-phase readiness',
    ],
    highlights: [
      'Supports the excavation and foundation capability story',
      'Reflects precision-focused site work on a custom residential project',
      'Shows clean early-phase preparation for later construction scopes',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Luxury residential placeholder image',
        caption: 'Placeholder visual for custom residential site and foundation work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
        alt: 'Excavation placeholder image',
        caption: 'Placeholder visual for excavation and site-readiness execution.',
      },
    ],
    featuredOnHome: true,
    cta: {
      title: 'Need excavation and site-work support for a residential build?',
      body: 'JKCE can help with site preparation, grading, trenching, and foundation-related groundwork.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'showroom-renovation',
    title: 'Showroom Renovation',
    projectType: 'Commercial Renovation',
    category: 'Construction Management',
    serviceSlugs: ['construction-management', 'design-service'],
    location: 'Greater Vancouver',
    year: '2024',
    status: 'Completed',
    summary: 'A commercial renovation case that supports JKCE’s renovation and coordinated delivery capability.',
    projectSummary:
      'Showroom Renovation demonstrates JKCE’s ability to manage commercial renovation work with design coordination, schedule control, and attention to active-site conditions where finish quality matters.',
    tags: ['Commercial Renovation', 'Interiors', 'Coordination'],
    scopeOfWork: [
      'Commercial renovation planning and sequencing',
      'Interior and tenant-improvement design support',
      'Trade coordination during active work phases',
      'Quality control and closeout management',
    ],
    highlights: [
      'Supports JKCE’s commercial renovation capability',
      'Connects design service and construction management under one delivery path',
      'Shows detail-oriented coordination in an interior commercial environment',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
        alt: 'Showroom interior placeholder image',
        caption: 'Placeholder visual for commercial interior and showroom renovation work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Commercial fit-out placeholder image',
        caption: 'Placeholder visual for coordinated tenant improvement and fit-out delivery.',
      },
    ],
    featuredOnHome: true,
    cta: {
      title: 'Planning a commercial renovation or showroom upgrade?',
      body: 'JKCE can support renovation planning, design coordination, and execution for interior commercial spaces.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'ling-yen-mountain-temple',
    title: 'Ling Yen Mountain Temple',
    projectType: 'Cultural / Special Construction',
    category: 'Construction Management',
    serviceSlugs: ['construction-management', 'design-service'],
    location: 'British Columbia',
    year: '2023',
    status: 'Completed',
    summary: 'A culturally significant project that supports JKCE’s special construction experience.',
    projectSummary:
      'Ling Yen Mountain Temple supports JKCE’s experience with special and culturally significant construction work where coordination, care, and respect for project context are essential.',
    tags: ['Cultural Construction', 'Special Projects', 'Coordination'],
    scopeOfWork: [
      'Project coordination for special construction requirements',
      'Planning and execution support across sensitive work areas',
      'Design and construction alignment',
      'Quality-focused delivery and closeout',
    ],
    highlights: [
      'Supports JKCE’s cultural and special construction experience',
      'Demonstrates delivery sensitivity on context-specific projects',
      'Reflects careful coordination, craftsmanship, and schedule control',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Temple construction placeholder image',
        caption: 'Placeholder visual for culturally significant and special construction work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
        alt: 'Special construction placeholder image',
        caption: 'Placeholder visual for coordinated special project delivery.',
      },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Need a contractor for a culturally significant or special project?',
      body: 'JKCE brings coordinated delivery and practical construction leadership to projects that require added care and context awareness.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
]

export const aboutContent = {
  eyebrow: 'About JKCE',
  title: 'A full-service construction company',
  titleItalic: 'for Greater Vancouver.',
  intro: '20+ years of experience, delivered with quality, integrity, and control.',
  overview: [
    'JKCE supports excavation, construction management, design service, and ICF-related work.',
    'We work with clients who value dependable execution, safety, and long-term value.',
  ],
  mission:
    'Deliver construction work with precision, integrity, safety, and accountability.',
  vision:
    'Be a trusted Greater Vancouver construction partner known for quality and control.',
  strengths: [
    { title: '20+ Years', description: 'Practical construction knowledge across varied project types.' },
    { title: 'Quality', description: 'Detail-oriented execution from planning to closeout.' },
    { title: 'Safety', description: 'Safety is built into planning, site management, and delivery.' },
  ],
  capabilities: [
    'Revit and BIM-informed coordination',
    'LiDAR and drone-supported site information',
    'ICF capability with hands-on project understanding',
  ],
  promise: [
    'Clear communication',
    'Quality and schedule control',
    'Modern tools backed by field experience',
  ],
  milestones: [
    { year: '2009', title: 'Company Founded', description: 'JKCE PROBUILD established in Richmond, BC.' },
    { year: '2024', title: 'Full-Service Positioning', description: 'Website and service architecture aligned around four core capabilities.' },
  ],
  cta: {
    title: 'Need a construction partner you can trust from planning to delivery?',
    body: 'Talk with JKCE about excavation, construction management, design support, or ICF-related project needs.',
    button: 'Contact JKCE',
    to: '/contact',
  },
}

export const servicesPageContent = {
  eyebrow: 'Services',
  title: 'Four core capabilities,',
  titleItalic: 'one delivery partner.',
  intro: 'JKCE’s services section is structured around the company’s four core business lines so clients can quickly understand scope, fit, and next steps.',
  overview:
    'Four core service lines built to support projects from early planning to active delivery.',
  cta: {
    title: 'Need help choosing the right service path?',
    body: 'Start with the right conversation for your project.',
    button: 'Contact Us',
    to: '/contact',
  },
}

export const projectsPageContent = {
  eyebrow: 'Projects',
  title: 'Selected projects,',
  titleItalic: 'structured as case studies.',
  intro: 'The projects section is now built around reusable project data, listing cards, and expandable detail pages so new case studies can be added without restructuring the site.',
  overview:
    'A focused set of case studies across ICF, excavation, renovation, and special construction.',
}

export const contactContent = {
  eyebrow: 'Contact',
  title: 'Let’s discuss',
  titleItalic: 'your next project.',
  intro: 'Reach JKCE directly or send a structured project inquiry.',
  lead:
    'For pricing, early planning, or active project support, contact JKCE directly.',
  details: [
    { label: 'Email', value: companyInfo.email, href: companyInfo.emailHref, icon: '@' },
    { label: 'Phone', value: companyInfo.phone, href: companyInfo.phoneHref, icon: '+' },
    { label: 'Address', value: companyInfo.address, href: 'https://maps.google.com/?q=3600+Viking+Way+Richmond+BC', icon: '[]' },
  ],
  form: {
    title: 'Project Inquiry',
    description: 'Send JKCE the basics of your project and we can respond with the right next step.',
    note: 'Frontend-ready form only. Connect this component to your backend, CRM, or email workflow later.',
    serviceOptions: ['Excavation', 'Construction Management', 'Design Service', 'ICF'],
    projectTypeOptions: ['Commercial', 'Residential', 'Tenant Improvement', 'Institutional', 'Cultural / Special Project', 'Mixed-Use'],
  },
  faqs: [
    {
      question: 'What areas do you serve?',
      answer: 'Greater Vancouver and surrounding project areas in BC.',
    },
    {
      question: 'Can you support early planning?',
      answer: 'Yes. JKCE can support early coordination and pre-construction planning.',
    },
  ],
  cta: {
    title: 'Ready to start the conversation?',
    body: 'Use the form or contact JKCE directly.',
    button: 'Review Services',
    to: '/services',
  },
}

export const pageMeta = {
  home: {
    title: 'JKCE Probuild | Full-Service Construction Company in Greater Vancouver',
    description:
      'JKCE Probuild delivers excavation, construction management, design service, and ICF construction for commercial and residential projects across Greater Vancouver.',
    path: '/',
  },
  about: {
    title: 'About JKCE Probuild | Vancouver Construction Partner',
    description:
      'Learn about JKCE Probuild, a Greater Vancouver construction company built on 20+ years of experience, quality execution, safety, and modern technical capability.',
    path: '/about',
  },
  services: {
    title: 'Construction Services | Excavation, CM, Design, ICF | JKCE Probuild',
    description:
      'Explore JKCE Probuild services including excavation, construction management, design service, and ICF capability for Greater Vancouver projects.',
    path: '/services',
  },
  projects: {
    title: 'Projects | JKCE Probuild Case Studies',
    description:
      'Review selected JKCE Probuild projects across excavation, ICF, renovation, and special construction work in Greater Vancouver and British Columbia.',
    path: '/projects',
  },
  contact: {
    title: 'Contact JKCE Probuild | Request a Quote or Project Review',
    description:
      'Contact JKCE Probuild for excavation, construction management, design service, or ICF project inquiries in Greater Vancouver.',
    path: '/contact',
  },
  notFound: {
    title: 'Page Not Found | JKCE Probuild',
    description:
      'The page you are looking for could not be found. Return to JKCE Probuild to view services, projects, or contact information.',
    path: '/404',
  },
}

export function getServiceMeta(service) {
  return {
    title: `${service.name} | JKCE Probuild Construction Services`,
    description: `${service.name} services by JKCE Probuild in Greater Vancouver. ${service.summary}`,
    path: `/services/${service.slug}`,
  }
}

export function getProjectMeta(project) {
  return {
    title: `${project.title} | JKCE Probuild Projects`,
    description: `${project.title} is a JKCE Probuild ${project.projectType.toLowerCase()} project in ${project.location}. ${project.summary}`,
    path: `/projects/${project.slug}`,
  }
}

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByServiceSlug(slug) {
  return projects.filter((project) => project.serviceSlugs.includes(slug))
}

export function getFeaturedProjects(limit = 3) {
  return projects.filter((project) => project.featuredOnHome).slice(0, limit)
}
