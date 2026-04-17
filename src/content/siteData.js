export const primaryNav = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export const aboutContent = {
  eyebrow: 'About JKCE',
  title: 'A construction partner',
  titleItalic: 'built for complex work.',
  intro:
    'JKCE PROBUILD is a Richmond, BC based contractor serving Western Canada through two core divisions: earthwork and site preparation, and construction management.',
  story: [
    'We support developers, owners, and general contractors from early site readiness through managed delivery, with an emphasis on schedule discipline and accountable execution.',
    'Our team is strongest where coordination matters most: difficult site conditions, multi-scope planning, tight urban constraints, and long-term stakeholder communication.',
  ],
  values: [
    {
      title: 'Experienced Team',
      description:
        'Field-led planning and delivery shaped by years of work across commercial, institutional, and infrastructure-adjacent scopes.',
    },
    {
      title: 'Safety First',
      description:
        'Strict site controls, compliant procedures, and decision-making that protects crews, neighbours, and project timelines.',
    },
    {
      title: 'Reliable Delivery',
      description:
        'Clear sequencing, realistic coordination, and disciplined follow-through from mobilization to handover.',
    },
  ],
  milestones: [
    { year: '2009', title: 'Company Founded', description: 'JKCE PROBUILD established in Richmond, BC.' },
    { year: '2015', title: 'Division Expansion', description: 'Earthwork and site preparation capability broadened into larger project scopes.' },
    { year: '2018', title: 'Regional Growth', description: 'Project footprint expanded across Western Canada.' },
    { year: '2024', title: 'Trusted Partner', description: 'Recognized for accountable construction delivery and repeat-client relationships.' },
  ],
}

export const servicesContent = {
  eyebrow: 'Services',
  title: 'Two divisions,',
  titleItalic: 'one coordinated partner.',
  intro:
    'The old site was organized around two operating groups. We are carrying that same service architecture into the new project.',
  divisions: [
    {
      title: 'Earthwork & Site Preparation',
      description: 'Ground-up site readiness for projects that need speed, control, and environmental accountability.',
      items: [
        'Demolition and asbestos abatement',
        'Bulk excavation and dewatering',
        'Land clearing and grading',
        'Utility installation',
        'Hardscaping and exterior works',
      ],
    },
    {
      title: 'Construction Management',
      description: 'End-to-end management for commercial and institutional building scopes.',
      items: [
        'Commercial and institutional construction',
        'General contracting',
        'Commercial renovation',
        'Interior demolition',
        'Design-build coordination',
      ],
    },
  ],
  process: [
    { step: '01', title: 'Consultation', description: 'Align scope, site conditions, constraints, and decision-makers early.' },
    { step: '02', title: 'Planning', description: 'Build a practical sequence for procurement, field execution, and approvals.' },
    { step: '03', title: 'Execution', description: 'Deliver with close coordination, visible accountability, and quality control.' },
    { step: '04', title: 'Completion', description: 'Close out cleanly with handover support and next-phase readiness.' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Commercial Development Site Preparation',
    category: 'Earthwork',
    location: 'Richmond, BC',
    year: '2024',
    summary: 'Demolition, excavation, utility installation, and dewatering for a major commercial development site.',
    tags: ['Demolition', 'Bulk Excavation', 'Utilities'],
  },
  {
    id: 2,
    title: 'Institutional Building Construction',
    category: 'Construction Management',
    location: 'Vancouver, BC',
    year: '2024',
    summary: 'Managed delivery of a contemporary institutional facility using a design-build approach.',
    tags: ['Design-Build', 'General Contracting', 'Quality Control'],
  },
  {
    id: 3,
    title: 'Land Clearing and Site Development',
    category: 'Earthwork',
    location: 'Surrey, BC',
    year: '2023',
    summary: 'Residential expansion support including land clearing, pad prep, and erosion control measures.',
    tags: ['Land Clearing', 'Environmental Protection', 'Site Prep'],
  },
  {
    id: 4,
    title: 'Commercial Renovation Project',
    category: 'Construction Management',
    location: 'Burnaby, BC',
    year: '2024',
    summary: 'Interior demolition and modernization of an occupied multi-storey commercial property.',
    tags: ['Renovation', 'Interior Demo', 'Phased Delivery'],
  },
  {
    id: 5,
    title: 'Industrial Site Excavation',
    category: 'Earthwork',
    location: 'Delta, BC',
    year: '2023',
    summary: 'Complex industrial excavation with groundwater management and environmental monitoring.',
    tags: ['Dewatering', 'Soil Management', 'Compliance'],
  },
  {
    id: 6,
    title: 'Educational Facility Construction',
    category: 'Construction Management',
    location: 'Coquitlam, BC',
    year: '2024',
    summary: 'Construction coordination for a sustainable educational facility with specialized learning spaces.',
    tags: ['Institutional', 'Sustainable Design', 'Project Controls'],
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Sustainable Design Trends in Modern Construction',
    category: 'Design Trends',
    date: 'January 15, 2024',
    readTime: '5 min read',
    excerpt:
      'A look at material selection, energy systems, and project decisions shaping more durable and efficient buildings.',
  },
  {
    id: 2,
    title: 'Environmental Management Best Practices in Earthwork',
    category: 'Technical Insights',
    date: 'January 10, 2024',
    readTime: '7 min read',
    excerpt:
      'How site teams can protect soil, water, and surrounding communities while keeping work moving efficiently.',
  },
  {
    id: 3,
    title: 'Key Success Factors for Commercial Construction Projects',
    category: 'Project Management',
    date: 'January 5, 2024',
    readTime: '6 min read',
    excerpt:
      'Planning, team alignment, quality control, and communication patterns that consistently de-risk delivery.',
  },
  {
    id: 4,
    title: 'Digital Transformation Trends in the Construction Industry',
    category: 'Industry News',
    date: 'January 1, 2024',
    readTime: '8 min read',
    excerpt:
      'Why BIM, drones, and connected field reporting are changing how modern construction teams make decisions.',
  },
]

export const contactContent = {
  eyebrow: 'Contact',
  title: 'Let’s discuss',
  titleItalic: 'your next project.',
  details: [
    { label: 'Email', value: 'info@jkceprobuild.com', href: 'mailto:info@jkceprobuild.com' },
    { label: 'Phone', value: '(604) 729 6583', href: 'tel:+16047296583' },
    { label: 'Address', value: '3600 Viking Way, Richmond, BC, V6V 1N6', href: 'https://maps.google.com/?q=3600+Viking+Way+Richmond+BC' },
  ],
  faqs: [
    {
      question: 'What areas do you serve?',
      answer: 'JKCE supports projects across Metro Vancouver and broader Western Canada depending on scope and delivery needs.',
    },
    {
      question: 'What kind of projects are the best fit?',
      answer: 'We are best positioned for earthwork, site preparation, commercial renovation, and managed commercial or institutional construction.',
    },
    {
      question: 'Can you support projects before construction starts?',
      answer: 'Yes. Early coordination, site-readiness planning, and preconstruction alignment are part of the structure carried over from the old project.',
    },
  ],
}
