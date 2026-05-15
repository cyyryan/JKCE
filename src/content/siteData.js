export const primaryNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export const companyInfo = {
  name: 'JKCE PROBUILD',
  address: '14671 Burrows Rd, Richmond, BC V6V 1K9',
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
    name: 'Excavation Division',
    shortName: 'Excavation',
    icon: 'EX',
    summary: 'Civil work, pipe laying, building excavation, and shoring — complete ground-up site preparation for any project scale.',
    description: 'Field-led excavation services for commercial, residential, and mixed-use projects across Greater Vancouver.',
    heroBody: 'From civil infrastructure to deep building excavation, our division provides the groundwork every successful construction project depends on.',
    overview: 'We coordinate excavation with the next phase of work so the site is ready to move forward cleanly.',
    subcategories: [
      {
        name: 'Civil Work',
        description: 'Road work, sewer line, and water main installation for public and private infrastructure projects.',
      },
      {
        name: 'Pipe Laying',
        description: 'Installation of underground pipes for water, gas, and drainage systems with accuracy and durability.',
      },
      {
        name: 'Building Excavation',
        description: 'Careful digging and removal of earth to prepare foundations and site groundwork for construction projects.',
      },
      {
        name: 'Shoring',
        description: 'Temporary support systems to stabilize trenches and structures, ensuring safety during excavation and construction.',
      },
    ],
    scopeOfWork: [
      'Civil work — road, sewer, and water main installation',
      'Pipe laying for underground water, gas, and drainage systems',
      'Building excavation for foundations and site groundwork',
      'Shoring and trench stabilization for safe, controlled excavation',
    ],
    cta: {
      title: 'Need excavation support for an upcoming project?',
      body: 'Talk to JKCE about civil work, pipe laying, building excavation, and shoring.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'construction-management',
    name: 'Construction Management',
    shortName: 'Construction Mgmt',
    icon: 'CM',
    summary: 'Commercial tenant improvement, new construction, residential renovation, and home builds — delivered with full project control.',
    description: 'End-to-end construction management with clear coordination, schedule discipline, and accountable execution.',
    heroBody: 'From commercial tenant improvements to full home builds, we manage every phase with a practical approach that keeps quality, schedule, and budget in view.',
    overview: 'We connect planning, trade coordination, and field execution so projects move with better control.',
    subcategories: [
      {
        name: 'Commercial Tenant Improvement',
        description: 'Upgrading and customizing commercial spaces to meet tenant needs — interior build-outs, layout changes, and system upgrades to improve both functionality and appearance.',
      },
      {
        name: 'Constructing',
        description: 'Transforming existing spaces through remodeling and upgrades that improve living and working environments with modern designs, materials, and functionality.',
      },
      {
        name: 'Residential Renovation',
        description: 'Transforming existing homes through remodeling and upgrades to improve living spaces with modern designs, materials, and functionality.',
      },
      {
        name: 'Home Construction',
        description: 'Building new residential properties from foundation to finish, creating durable homes that fit clients\' needs and preferences.',
      },
    ],
    scopeOfWork: [
      'Commercial tenant improvement — build-outs, layout changes, system upgrades',
      'Constructing — remodeling and upgrades for commercial and residential spaces',
      'Residential renovation — modern upgrades to existing homes',
      'Home construction — full residential builds from foundation to finish',
    ],
    cta: {
      title: 'Need construction management that stays close to the field?',
      body: 'JKCE can support commercial tenant improvements, renovations, and new residential builds from planning through turnover.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'design-service',
    name: 'Design Service',
    shortName: 'Design Service',
    icon: 'DS',
    summary: 'Residential interior design, tenant improvement design, development concept design, and preliminary design — all with buildability in mind.',
    description: 'Design support that takes clients from early ideas to buildable, well-coordinated project scope.',
    heroBody: 'Our design service helps shape projects earlier so design intent, budget expectations, and buildability are aligned before construction starts.',
    overview: 'We focus on concept development, preliminary planning, and interior or tenant improvement work that supports real delivery.',
    subcategories: [
      {
        name: 'Residential Interior Design',
        description: 'Designing stylish and functional living spaces that reflect your lifestyle and meet your practical needs.',
      },
      {
        name: 'Tenant Improvement Design',
        description: 'Optimizing commercial spaces with smart layouts and quality finishes for tenant comfort and operational efficiency.',
      },
      {
        name: 'Development Concept Design',
        description: 'Transforming ideas into clear visual concepts that define a project\'s vision and guide planning decisions.',
      },
      {
        name: 'Preliminary Design',
        description: 'Exploring design options and setting the foundation for detailed planning, pricing, and construction.',
      },
    ],
    scopeOfWork: [
      'Residential interior design — stylish, functional living spaces',
      'Tenant improvement design — smart layouts and finishes for commercial spaces',
      'Development concept design — visual concepts that define project vision',
      'Preliminary design — early options that set the stage for detailed planning',
    ],
    cta: {
      title: 'Need design support before construction begins?',
      body: 'JKCE can help with residential interiors, tenant improvement design, concept development, and preliminary planning.',
      button: 'Discuss Your Project',
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
    summary: 'A community-oriented housing project supporting JKCE\'s ICF and housing delivery capability.',
    projectSummary:
      'Tlowitsis Nation highlights JKCE\'s ability to support housing delivery through coordinated planning, field execution, and ICF-related capability where long-term durability and building performance matter.',
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
        src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80',
        alt: 'Residential building exterior',
        caption: 'Placeholder visual for housing and community development work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Housing development interior',
        caption: 'Placeholder visual for residential envelope and ICF wall assembly.',
      },
      {
        src: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&w=1400&q=80',
        alt: 'ICF concrete wall construction',
        caption: 'Placeholder visual for ICF formwork and concrete placement.',
      },
      {
        src: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1400&q=80',
        alt: 'Construction coordination on site',
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
    summary: 'A residential project that supports JKCE\'s excavation, foundation, and site-work capability.',
    projectSummary:
      'W63 Mansion demonstrates JKCE\'s excavation and groundwork capability on a high-expectation residential site where control, sequencing, and clean site preparation are essential to the broader build.',
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
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
        alt: 'Luxury residential exterior',
        caption: 'Placeholder visual for custom residential site and foundation work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=1400&q=80',
        alt: 'Excavation and earthworks',
        caption: 'Placeholder visual for excavation, grading, and site preparation.',
      },
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
        alt: 'Construction team on site',
        caption: 'Placeholder visual for excavation and site-readiness execution.',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
        alt: 'Aerial view of construction site',
        caption: 'Placeholder visual for site overview and foundation coordination.',
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
    summary: 'A commercial renovation case that supports JKCE\'s renovation and coordinated delivery capability.',
    projectSummary:
      'Showroom Renovation demonstrates JKCE\'s ability to manage commercial renovation work with design coordination, schedule control, and attention to active-site conditions where finish quality matters.',
    tags: ['Commercial Renovation', 'Interiors', 'Coordination'],
    scopeOfWork: [
      'Commercial renovation planning and sequencing',
      'Interior and tenant-improvement design support',
      'Trade coordination during active work phases',
      'Quality control and closeout management',
    ],
    highlights: [
      'Supports JKCE\'s commercial renovation capability',
      'Connects design service and construction management under one delivery path',
      'Shows detail-oriented coordination in an interior commercial environment',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
        alt: 'Modern showroom interior',
        caption: 'Placeholder visual for commercial interior and showroom renovation work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Commercial fit-out detail',
        caption: 'Placeholder visual for coordinated tenant improvement and fit-out delivery.',
      },
      {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Construction management and planning',
        caption: 'Placeholder visual for project planning, scheduling, and trade coordination.',
      },
      {
        src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Commercial building exterior',
        caption: 'Placeholder visual for commercial construction and building envelope work.',
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
    summary: 'A culturally significant project that supports JKCE\'s special construction experience.',
    projectSummary:
      'Ling Yen Mountain Temple supports JKCE\'s experience with special and culturally significant construction work where coordination, care, and respect for project context are essential.',
    tags: ['Cultural Construction', 'Special Projects', 'Coordination'],
    scopeOfWork: [
      'Project coordination for special construction requirements',
      'Planning and execution support across sensitive work areas',
      'Design and construction alignment',
      'Quality-focused delivery and closeout',
    ],
    highlights: [
      'Supports JKCE\'s cultural and special construction experience',
      'Demonstrates delivery sensitivity on context-specific projects',
      'Reflects careful coordination, craftsmanship, and schedule control',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
        alt: 'Special construction site overview',
        caption: 'Placeholder visual for culturally significant and special construction work.',
      },
      {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Construction planning and coordination',
        caption: 'Placeholder visual for careful planning and design-construction alignment.',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
        alt: 'Aerial construction site view',
        caption: 'Placeholder visual for coordinated special project delivery.',
      },
      {
        src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1400&q=80',
        alt: 'Project team coordination',
        caption: 'Placeholder visual for project team planning and quality-focused execution.',
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
  {
    slug: 'warehouse-renovation',
    title: 'Warehouse Renovation',
    projectType: 'Commercial Renovation',
    category: 'Construction Management',
    serviceSlugs: ['construction-management', 'design-service'],
    location: 'Richmond, BC',
    year: '2024',
    status: 'Completed',
    summary: 'Full interior renovation of a warehouse in Richmond, BC — from demolition through finishing, electrical, and plumbing.',
    projectSummary:
      'A client requested a complete warehouse renovation in Richmond, BC. JKCE managed the project end-to-end, covering interior demolition, structural construction, wall painting, flooring, and all mechanical and electrical installations.',
    tags: ['Commercial Renovation', 'Richmond', 'Interior'],
    scopeOfWork: [
      'Interior demolition of existing structures',
      'Structural construction and wall framing',
      'Wall painting and flooring installation',
      'Installation of interior fixtures and furnishings',
      'Electrical and plumbing installations',
    ],
    highlights: [
      'Full-scope commercial renovation managed by a professional JKCE team',
      'Interior designer provided consultation and planning throughout',
      'Delivered on time with high-quality workmanship from start to finish',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
        alt: 'Warehouse renovation site',
        caption: 'Placeholder — replace with actual warehouse renovation photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Renovation planning and coordination',
        caption: 'Placeholder — replace with actual project photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
        alt: 'Interior renovation progress',
        caption: 'Placeholder — replace with actual interior renovation photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Completed commercial space',
        caption: 'Placeholder — replace with completed project photos.',
      },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Planning a warehouse or commercial renovation?',
      body: 'JKCE can manage your renovation from demolition through finishing — on time, on budget, and to specification.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'commercial-renovation',
    title: 'Commercial Renovation',
    projectType: 'Commercial Renovation',
    category: 'Construction Management',
    serviceSlugs: ['construction-management', 'design-service'],
    location: 'Greater Vancouver',
    year: '2024',
    status: 'Completed',
    summary: 'Design and renovation of a billiards hall — from concept discussions through full fit-out and installation.',
    projectSummary:
      'A client planning to open a billiards hall engaged JKCE to design and renovate the space. Detailed pre-construction discussions ensured every aspect of the renovation was planned and agreed upon before work began, resulting in a smooth and successful delivery.',
    tags: ['Commercial Renovation', 'Interiors', 'Design'],
    scopeOfWork: [
      'Pre-construction client consultations and design planning',
      'Interior demolition of existing structures',
      'Wall painting and flooring installation',
      'Installation of interior fixtures and furnishings',
      'Electrical and plumbing installations',
    ],
    highlights: [
      'Thorough pre-construction planning ensured seamless execution',
      'Client-focused design process from concept to completion',
      'Professional team managed all trades from demolition through finishing',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Commercial renovation interior',
        caption: 'Placeholder — replace with actual billiards hall renovation photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
        alt: 'Interior fit-out progress',
        caption: 'Placeholder — replace with actual project photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Project coordination and planning',
        caption: 'Placeholder — replace with actual coordination photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
        alt: 'Completed commercial space',
        caption: 'Placeholder — replace with completed project photos.',
      },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Planning a commercial fit-out or renovation?',
      body: 'JKCE handles design coordination, trade management, and full renovation delivery for commercial spaces of all types.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'po-lam-buddhist-association',
    title: 'Po Lam Buddhist Association',
    projectType: 'Residential Construction',
    category: 'Construction Management',
    serviceSlugs: ['construction-management', 'excavation'],
    location: 'Chilliwack, BC',
    year: '2023',
    status: 'Completed',
    summary: 'Full construction of a low-rise residential apartment in Chilliwack, BC — from site excavation through interior finishing.',
    projectSummary:
      'JKCE constructed a low-rise apartment building for Po Lam Buddhist Association in Chilliwack, BC. The project covered the complete construction lifecycle — from site excavation and foundation work through structural framing, exterior envelope, and full interior finishing.',
    tags: ['Residential Construction', 'Chilliwack', 'Full Build'],
    scopeOfWork: [
      'Site excavation and grading',
      'Foundation and concrete work',
      'Structural framing and roofing',
      'Exterior cladding and insulation',
      'Interior drywall, flooring, and finishing',
      'Mechanical, electrical, and plumbing installations',
    ],
    highlights: [
      'Full-lifecycle construction from ground excavation to finished interior',
      'Modern residential standards met across all mechanical and electrical systems',
      'Delivered with precision and care for the community the building serves',
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80',
        alt: 'Residential building exterior',
        caption: 'Placeholder — replace with actual Po Lam project photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=1400&q=80',
        alt: 'Excavation and site work',
        caption: 'Placeholder — replace with actual excavation photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80',
        alt: 'Structural construction progress',
        caption: 'Placeholder — replace with actual construction photos.',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
        alt: 'Completed residential building',
        caption: 'Placeholder — replace with completed building photos.',
      },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Need a full-build contractor for a residential or community project?',
      body: 'JKCE delivers complete construction from site preparation through interior finishing for residential and community projects.',
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
    'With over 20 years of experience in the construction industry, JKCE Probuild has built its reputation on a foundation of professionalism, quality, and integrity. We are committed to delivering construction projects that meet the highest standards of workmanship and client satisfaction.',
    'From initial site planning and design to on-site management and quality control, JKCE Probuild offers a comprehensive range of construction services. Our team of experienced professionals works closely with clients at every stage to ensure that projects are completed on time, on budget, and to specification.',
  ],
  promisesIntro:
    'JKCE Probuild is dedicated to building lasting client relationships through consistent delivery of our core commitments:',
  promises: [
    'Personalized one-on-one service throughout the project lifecycle',
    'Transparent communication and regular progress updates',
    'Precision workmanship and rigorous quality control',
    'On-time, on-budget delivery with proactive schedule management',
    'Long-term value through durable materials and safety-first execution',
  ],
  mission:
    'To be the partner our clients trust for quality, efficiency, and lasting value.',
  vision:
    'We want to be the most trusted and innovative construction partner in the Greater Vancouver area. We are known for our commitment to quality, safety, and sustainability. Our goal is to shape communities through exceptional craftsmanship and modern design. We create spaces that meet today\'s needs and inspire future generations.',
  strengths: [
    { title: '20+ Years', description: 'Practical construction knowledge across varied project types and delivery environments.' },
    { title: 'Quality', description: 'Detail-oriented execution from planning through closeout, backed by modern tools.' },
    { title: 'Safety', description: 'Safety is built into every phase — planning, site management, and delivery.' },
  ],
  capabilities: [
    'Revit Design — BIM-ready 3D modelling and coordination',
    'BIM — integrated project data for better planning and execution',
    'LiDAR Scanning — millimetre-accurate 3D site capture',
    'Sierra Ridge Drone — aerial progress tracking and mapping',
    'ICF Construction — insulated concrete form expertise',
  ],
  promise: [
    'Clear and consistent communication',
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
  title: 'Three service divisions,',
  titleItalic: 'one delivery partner.',
  intro: 'JKCE delivers across three core divisions — each with specialized subcategories to support your project from early planning through completion.',
  overview:
    'Three divisions, twelve specialties — built to support projects at every stage.',
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
  title: 'Let\'s discuss',
  titleItalic: 'your next project.',
  intro: 'Reach JKCE directly or send a structured project inquiry.',
  lead:
    'For pricing, early planning, or active project support, contact JKCE directly.',
  details: [
    { label: 'Email', value: companyInfo.email, href: companyInfo.emailHref, icon: '@' },
    { label: 'Phone', value: companyInfo.phone, href: companyInfo.phoneHref, icon: '+' },
    { label: 'Address', value: companyInfo.address, href: 'https://maps.google.com/?q=14671+Burrows+Rd+Richmond+BC+V6V+1K9', icon: '[]' },
  ],
  form: {
    title: 'Project Inquiry',
    description: 'Send JKCE the basics of your project and we can respond with the right next step.',
    note: 'Frontend-ready form only. Connect this component to your backend, CRM, or email workflow later.',
    serviceOptions: ['Excavation Division', 'Construction Management', 'Design Service'],
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
