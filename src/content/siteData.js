export const primaryNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/icf', label: 'ICF' },
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
        name: 'General Construction',
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
      'General construction — remodeling and upgrades for commercial and residential spaces',
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
    serviceSlugs: ['icf', 'construction-management', 'excavation'],
    location: 'Campbell River, BC',
    year: '2024',
    status: 'In Progress',
    summary: 'Approximately 50 standalone ICF homes on Vancouver Island — built for durability, safety, and long-term community value.',
    projectSummary:
      'JKCE is working with the Tlowitsis Nation on Vancouver Island to construct approximately 50 standalone homes using ICF technology. The project combines site excavation, ICF construction, and full construction management with daily monitoring and weekly progress reporting.',
    tags: ['ICF', 'Housing', 'Community'],
    scopeOfWork: [
      'Site preparation and excavation',
      'ICF wall construction and structural coordination',
      'Construction management with daily site monitoring',
      'Weekly progress reporting to client',
      'Trade coordination across active build phases',
    ],
    highlights: [
      'Approximately 50 standalone ICF homes for the Tlowitsis Nation community',
      'ICF technology ensures safety, structural stability, and energy performance',
      'Daily monitoring and regular client meetings throughout project lifecycle',
    ],
    gallery: [
      { src: '/images/icf/case-study-banner.webp', alt: 'ICF wall construction with bracing', caption: 'ICF exterior walls with scaffolding and bracing.' },
      { src: '/images/icf/wall-exterior.webp', alt: 'Completed ICF wall exterior', caption: 'ICF wall system ready for concrete pour.' },
      { src: '/images/icf/worker-nudura.webp', alt: 'Worker installing Nudura ICF', caption: 'Nudura ICF installation in progress.' },
      { src: '/images/icf/rebar-detail.webp', alt: 'ICF rebar and metal ties detail', caption: 'Rebar and metal tie system inside ICF blocks.' },
      { src: '/images/projects/tlowitsis/05.webp', alt: 'Aerial site view', caption: 'Aerial overview of the Tlowitsis Nation build site.' },
      { src: '/images/projects/tlowitsis/07.webp', alt: 'Interior construction', caption: 'Interior framing and mechanical rough-in.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/ATPvTt592GI',
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
    summary: 'Deep excavation and shoring for a high-end residential development by Hansen Pacific — including underground parking and foundation preparation.',
    projectSummary:
      'Hansen Pacific engaged JKCE to perform excavation work at their W63 Mansion low-rise residential project. Tasks included deep excavation for underground parking, shoring with concrete retaining walls, rebar installation, foundation preparation, and site grading.',
    tags: ['Excavation', 'Foundation', 'Shoring'],
    scopeOfWork: [
      'Deep building excavation for underground parking',
      'Shoring and concrete retaining wall construction',
      'Foundation preparation and rebar installation',
      'Site grading and drainage preparation',
      'Crane coordination for equipment and materials',
    ],
    highlights: [
      'Hansen Pacific trusted JKCE for precision excavation on a high-expectation luxury residential site',
      'Deep shoring ensured structural safety throughout the underground parking excavation',
      'Clean, well-sequenced groundwork set the stage for all subsequent construction phases',
    ],
    gallery: [
      { src: '/images/projects/w63/01.webp', alt: 'W63 Mansion project sign', caption: 'Hansen Pacific W63 Mansion — Elite Condo Community.' },
      { src: '/images/projects/w63/02.webp', alt: 'Deep excavation in progress', caption: 'Deep excavation with CAT equipment and crane coordination.' },
      { src: '/images/projects/w63/03.webp', alt: 'CAT excavator on site', caption: 'Excavation equipment working the site.' },
      { src: '/images/projects/w63/04.webp', alt: 'Crane lowering excavator', caption: 'Crane operation lowering equipment into excavation.' },
      { src: '/images/projects/w63/05.webp', alt: 'Excavation and crane overview', caption: 'Site overview with tower crane and excavation.' },
      { src: '/images/projects/w63/06.webp', alt: 'Foundation preparation', caption: 'Team preparing foundation with gravel and formwork.' },
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
    slug: 'ling-yen-mountain-temple',
    title: 'Ling Yen Mountain Temple',
    projectType: 'Cultural / Special Construction',
    category: 'Construction Management',
    serviceSlugs: ['excavation', 'icf', 'construction-management'],
    location: 'British Columbia',
    year: '2023',
    status: 'Completed',
    summary: 'Expansion of a culturally significant Buddhist temple — site excavation, ICF construction, concrete columns, and traditional architectural integration.',
    projectSummary:
      'JKCE performed site excavation and ICF-based structural construction for the expansion of Ling Yen Mountain Temple. The project involved deep excavation adjacent to the existing temple, ICF wall systems, concrete column installation, and careful coordination to preserve the cultural and architectural integrity of the site.',
    tags: ['Cultural Construction', 'ICF', 'Excavation'],
    scopeOfWork: [
      'Site preparation and excavation adjacent to existing temple',
      'ICF wall construction and structural coordination',
      'Concrete column and slab installation',
      'Construction management with sensitivity to cultural context',
      'Quality-focused delivery and site coordination',
    ],
    highlights: [
      'Complex excavation immediately adjacent to an active, culturally significant structure',
      'ICF construction delivered structural strength while respecting traditional architectural requirements',
      'Careful sequencing ensured the existing temple remained undisturbed throughout the expansion',
    ],
    gallery: [
      { src: '/images/projects/temple/01.webp', alt: 'Temple expansion concrete columns', caption: 'Concrete columns and slab installed for temple expansion.' },
      { src: '/images/projects/temple/02.webp', alt: 'Aerial view of temple excavation', caption: 'Aerial view showing existing temple and new excavation area.' },
      { src: '/images/projects/temple/03.webp', alt: 'Excavation beside temple', caption: 'Ground excavation adjacent to existing temple structure.' },
      { src: '/images/projects/temple/04.webp', alt: 'ICF and foundation construction', caption: 'ICF wall systems and foundation work in progress.' },
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
      { src: '/images/projects/warehouse/01.webp', alt: 'Warehouse aerial view', caption: 'Aerial view of the warehouse building.' },
      { src: '/images/projects/warehouse/02.webp', alt: 'Warehouse exterior drone', caption: 'Drone overview of project site.' },
      { src: '/images/projects/warehouse/03.webp', alt: 'Before renovation interior', caption: 'Warehouse interior before renovation.' },
      { src: '/images/projects/warehouse/04.webp', alt: 'Renovation in progress', caption: 'Interior renovation in progress — open plan layout taking shape.' },
      { src: '/images/projects/warehouse/05.webp', alt: 'Framing and fit-out', caption: 'Wall framing and fit-out work.' },
      { src: '/images/projects/warehouse/06.webp', alt: 'Interior finishing', caption: 'Interior finishing with tiling and lighting.' },
      { src: '/images/projects/warehouse/07.webp', alt: 'Near completion', caption: 'Space nearing completion.' },
      { src: '/images/projects/warehouse/08.webp', alt: 'Completed renovation', caption: 'Completed interior renovation.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/nn1BpoFwyOk',
    featuredOnHome: false,
    cta: {
      title: 'Planning a warehouse or commercial renovation?',
      body: 'JKCE can manage your renovation from demolition through finishing — on time, on budget, and to specification.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'po-lam-buddhist-association',
    title: 'Po Lam Buddhist Association',
    projectType: 'Residential Construction',
    category: 'ICF',
    serviceSlugs: ['icf', 'construction-management', 'excavation'],
    location: 'Chilliwack, BC',
    year: '2023',
    status: 'Completed',
    summary: 'Full-build ICF residential construction for a Buddhist community — crane-assisted ICF wall installation from foundation to completion.',
    projectSummary:
      'JKCE constructed a low-rise apartment building for Po Lam Buddhist Association in Chilliwack, BC using ICF technology. The project featured crane-assisted delivery of ICF wall panels, concrete slab construction, and full-lifecycle build management from site excavation through interior finishing.',
    tags: ['ICF', 'Residential Construction', 'Chilliwack'],
    scopeOfWork: [
      'Site excavation and grading',
      'ICF wall construction with crane-assisted panel placement',
      'Foundation and concrete slab work',
      'Structural framing and roofing',
      'Exterior cladding and insulation',
      'Interior drywall, flooring, and finishing',
      'Mechanical, electrical, and plumbing installations',
    ],
    highlights: [
      'ICF technology used throughout for superior structural and thermal performance',
      'Crane-assisted ICF panel installation for precision and efficiency',
      'Full-lifecycle construction from ground excavation to finished interior',
    ],
    gallery: [
      { src: '/images/projects/po-lam/01.webp', alt: 'ICF wall construction with crane', caption: 'Crane-assisted ICF wall panel placement.' },
      { src: '/images/projects/po-lam/02.webp', alt: 'ICF construction progress', caption: 'ICF walls and concrete slab construction in progress.' },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Need a full-build contractor for a residential or community project?',
      body: 'JKCE delivers complete construction from site preparation through interior finishing for residential and community projects.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'dajue-2699',
    title: '2699 Dajue Collection',
    projectType: 'Commercial Renovation',
    category: 'Construction Management',
    serviceSlugs: ['construction-management', 'design-service'],
    location: 'Greater Vancouver',
    year: '2024',
    status: 'Completed',
    summary: 'High-end art and porcelain showroom renovation — refined interior fit-out with custom wood display systems and premium finishes.',
    projectSummary:
      'JKCE completed a high-end commercial showroom renovation for the Dajue Collection. The project involved a full interior fit-out including custom wood display shelving, glass display cases, lighting design, and premium flooring — delivering a refined retail environment for art and porcelain.',
    tags: ['Commercial Renovation', 'Showroom', 'Interior Design'],
    scopeOfWork: [
      'Commercial interior renovation and fit-out',
      'Custom display shelving and case installation',
      'Lighting design and installation',
      'Premium flooring and finishes',
      'Electrical and systems coordination',
    ],
    highlights: [
      'Bespoke display systems designed to showcase high-value art and porcelain',
      'Premium finishes throughout create an elevated retail experience',
      'Delivered to exacting standards for a discerning commercial client',
    ],
    gallery: [
      { src: '/images/projects/dajue-2699/01.webp', alt: 'Dajue Collection site overview', caption: 'Site overview during construction.' },
      { src: '/images/projects/dajue-2699/02.webp', alt: 'Dajue Collection progress', caption: 'Construction progress on site.' },
      { src: '/images/projects/dajue-2699/03.webp', alt: 'Dajue Collection fit-out', caption: 'Fit-out nearing completion.' },
      { src: '/images/projects/dajue-2699/04.webp', alt: 'Dajue Collection completed showroom', caption: 'Completed showroom — custom display systems and premium finishes.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/TGQyPVPck8o',
    featuredOnHome: false,
    cta: {
      title: 'Planning a high-end commercial showroom or retail fit-out?',
      body: 'JKCE delivers premium commercial interiors with design coordination and quality craftsmanship.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'dajue-farm',
    title: 'Dajue Farm Reconstruction',
    projectType: 'Commercial Renovation',
    category: 'Construction Management',
    serviceSlugs: ['excavation', 'construction-management'],
    location: 'Greater Vancouver',
    year: '2024',
    status: 'Completed',
    summary: 'Excavation and full commercial interior reconstruction for Dajue Farm — from groundwork through interior fit-out.',
    projectSummary:
      'JKCE managed the reconstruction of Dajue Farm, combining site excavation and grading with a complete commercial interior renovation. The project progressed from heavy excavation through structural construction to finished interior spaces with spray foam insulation, large windows, and custom fit-out.',
    tags: ['Excavation', 'Commercial Renovation', 'Construction Management'],
    scopeOfWork: [
      'Site excavation and grading',
      'Structural construction and framing',
      'Spray foam insulation and building envelope',
      'Interior fit-out and finishing',
      'Trade coordination across all phases',
    ],
    highlights: [
      'Full-scope project from site excavation through completed interior',
      'Large-format windows and spray foam envelope deliver energy performance',
      'Drone documentation throughout construction provided ongoing progress visibility',
    ],
    gallery: [
      { src: '/images/projects/dajue-farm/05.webp', alt: 'Dajue Farm excavation', caption: 'CAT excavator performing site excavation and grading.' },
      { src: '/images/projects/dajue-farm/01.webp', alt: 'Dajue Farm aerial', caption: 'Aerial view of construction site.' },
      { src: '/images/projects/dajue-farm/06.webp', alt: 'Dajue Farm progress', caption: 'Construction progress on site.' },
      { src: '/images/projects/dajue-farm/08.webp', alt: 'Dajue Farm interior fit-out', caption: 'Interior fit-out in progress — spray foam insulation and framing.' },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Need excavation and construction management for a commercial project?',
      body: 'JKCE manages the full scope from site preparation through finished interior delivery.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'dajue-2121',
    title: '2121 Dajue',
    projectType: 'Commercial Renovation',
    category: 'Construction Management',
    serviceSlugs: ['construction-management', 'design-service'],
    location: 'Greater Vancouver',
    year: '2024',
    status: 'Completed',
    summary: 'Commercial space renovation — clean modern interior with tiled flooring, drop ceiling, and full fit-out.',
    projectSummary:
      'JKCE completed a commercial renovation for the 2121 Dajue project, delivering a clean modern interior with drop ceiling systems, tiled flooring, and full fit-out coordination.',
    tags: ['Commercial Renovation', 'Interior', 'Fit-out'],
    scopeOfWork: [
      'Interior demolition and preparation',
      'Drop ceiling installation',
      'Tiled flooring installation',
      'Wall finishing and painting',
      'Electrical and lighting coordination',
    ],
    highlights: [
      'Clean, modern commercial interior delivered to a high standard',
      'Drop ceiling and tiled flooring create a professional commercial environment',
      'Full fit-out managed by a coordinated JKCE team',
    ],
    gallery: [
      { src: '/images/projects/dajue-2121/01.webp', alt: '2121 Dajue aerial', caption: 'Aerial overview of the project location.' },
      { src: '/images/projects/dajue-2121/03.webp', alt: '2121 Dajue interior', caption: 'Completed interior with modern finishes.' },
      { src: '/images/projects/dajue-2121/04.webp', alt: '2121 Dajue fit-out', caption: 'Interior fit-out in progress.' },
      { src: '/images/projects/dajue-2121/05.webp', alt: '2121 Dajue finishing', caption: 'Final finishing stages.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/34QsFQThPrE',
    featuredOnHome: false,
    cta: {
      title: 'Planning a commercial interior renovation?',
      body: 'JKCE handles design coordination and full fit-out delivery for commercial spaces.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'alexander-road',
    title: '8511 Alexander Road',
    projectType: 'Commercial Renovation',
    category: 'Construction Management',
    serviceSlugs: ['construction-management'],
    location: 'Greater Vancouver',
    year: '2024',
    status: 'Completed',
    summary: 'Phased commercial renovation — drilling, mechanical rough-in, and drywall construction across a multi-stage fit-out.',
    projectSummary:
      'JKCE completed a phased commercial renovation at 8511 Alexander Road. Work progressed through organized construction stages including core drilling, mechanical and plumbing rough-in, structural framing, and drywall installation — coordinated across multiple active phases.',
    tags: ['Commercial Renovation', 'Phased Construction', 'Fit-out'],
    scopeOfWork: [
      'Core drilling and structural preparation',
      'Mechanical and plumbing rough-in',
      'Structural wood framing',
      'Drywall and interior board installation',
      'Trade coordination across phased construction',
    ],
    highlights: [
      'Phased construction approach maintained quality control across each stage',
      'Organized trade sequencing minimized downtime and schedule delays',
      'Delivered to specification across all mechanical, structural, and finishing phases',
    ],
    gallery: [
      { src: '/images/projects/alexander-road/01.webp', alt: 'Alexander Road site plan', caption: 'Site plan overview.' },
      { src: '/images/projects/alexander-road/02.webp', alt: 'Core drilling phase', caption: 'Core drilling and structural preparation.' },
      { src: '/images/projects/alexander-road/03.webp', alt: 'Mechanical rough-in', caption: 'Mechanical and plumbing rough-in work.' },
      { src: '/images/projects/alexander-road/06.webp', alt: 'Structural framing', caption: 'Wood framing and interior structure.' },
      { src: '/images/projects/alexander-road/07.webp', alt: 'Drywall installation', caption: 'Drywall and board installation in progress.' },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Need phased commercial renovation management?',
      body: 'JKCE coordinates multi-phase commercial projects with clear sequencing and quality control throughout.',
      button: 'Contact Us',
      to: '/contact',
    },
  },
  {
    slug: 'west-vancouver',
    title: 'West Vancouver',
    projectType: 'Residential Excavation',
    category: 'Excavation',
    serviceSlugs: ['excavation'],
    location: 'West Vancouver, BC',
    year: '2024',
    status: 'Completed',
    summary: 'Challenging hillside residential excavation in West Vancouver — site clearing, retaining wall construction, and precision earthwork on steep terrain.',
    projectSummary:
      'JKCE completed site excavation for a residential project in West Vancouver. The work involved precision excavation on steep hillside terrain, site clearing through forested areas, and concrete retaining wall construction — delivering a stable, prepared site for residential construction.',
    tags: ['Excavation', 'Shoring', 'Residential'],
    scopeOfWork: [
      'Hillside site clearing and tree removal',
      'Precision excavation on steep terrain',
      'Concrete retaining wall construction',
      'Site grading and preparation',
      'Safety and erosion control throughout',
    ],
    highlights: [
      'Complex hillside excavation requiring precision equipment operation on challenging terrain',
      'Concrete retaining wall ensures long-term site stability',
      'Site delivered clean and ready for residential construction phases',
    ],
    gallery: [
      { src: '/images/projects/west-vancouver/01.webp', alt: 'West Vancouver excavation', caption: 'CAT excavator working on steep hillside terrain.' },
      { src: '/images/projects/west-vancouver/02.webp', alt: 'West Vancouver site clearing', caption: 'Site clearing and earthwork in progress.' },
      { src: '/images/projects/west-vancouver/06.webp', alt: 'West Vancouver retaining wall', caption: 'Concrete retaining wall construction.' },
      { src: '/images/projects/west-vancouver/07.webp', alt: 'West Vancouver site progress', caption: 'Site progress with retaining wall complete.' },
    ],
    featuredOnHome: false,
    cta: {
      title: 'Need residential excavation on challenging terrain?',
      body: 'JKCE handles hillside and complex site excavation with precision equipment and experienced operators.',
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
  titleItalic: 'plus ICF capability.',
  intro: 'JKCE delivers across three core service divisions, with dedicated ICF capability to support durable, efficient builds from early planning through completion.',
  overview:
    'Three divisions, twelve specialties, and ICF expertise — built to support projects at every stage.',
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
