import fs from 'node:fs'
import path from 'node:path'
import {
  getProjectMeta,
  getServiceMeta,
  pageMeta,
  projects,
  services,
  siteMeta,
} from '../src/content/siteData.js'

const outputDir = path.resolve('dist')
const template = fs.readFileSync(path.join(outputDir, 'index.html'), 'utf8')

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
}

function setMeta(html, selector, attribute, value) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`<meta\\s+[^>]*${attribute}=["']${escapedSelector}["'][^>]*>`, 'i')
  const tag = `<meta ${attribute}="${escapeHtml(selector)}" content="${escapeHtml(value)}" />`
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

function setCanonical(html, canonicalUrl) {
  const tag = `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

function renderMetadata({ title, description, path: routePath, image, noIndex = false }) {
  const canonicalUrl = new URL(routePath, siteMeta.siteUrl).toString()
  const socialImage = image || siteMeta.defaultOgImage
  let html = setTitle(template, title)
  html = setMeta(html, 'description', 'name', description)
  html = setMeta(html, 'og:title', 'property', title)
  html = setMeta(html, 'og:description', 'property', description)
  html = setMeta(html, 'og:url', 'property', canonicalUrl)
  html = setMeta(html, 'og:image', 'property', socialImage)
  html = setMeta(html, 'twitter:title', 'name', title)
  html = setMeta(html, 'twitter:description', 'name', description)
  html = setMeta(html, 'twitter:image', 'name', socialImage)
  html = setMeta(html, 'robots', 'name', noIndex ? 'noindex, nofollow' : 'index, follow')
  return setCanonical(html, canonicalUrl)
}

const fixedRoutes = [
  pageMeta.home,
  pageMeta.about,
  pageMeta.services,
  pageMeta.projects,
  pageMeta.contact,
  {
    title: 'ICF Construction | JKCE Probuild',
    description: 'JKCE delivers Insulated Concrete Form construction for commercial and residential projects across Greater Vancouver — superior strength, efficiency, and long-term value.',
    path: '/icf',
  },
  {
    title: 'Join Our Team | JKCE Probuild',
    description: 'Explore open positions at JKCE Probuild — a full-service construction company operating across Greater Vancouver.',
    path: '/careers',
  },
  {
    title: 'Privacy Policy | JKCE Probuild',
    description: 'Privacy notice and social media policy for JKCE Probuild Contracting Corp.',
    path: '/privacy-policy',
  },
]

const routes = [
  ...fixedRoutes,
  ...services.map(getServiceMeta),
  ...projects.map(getProjectMeta),
]

for (const metadata of routes) {
  const routePath = metadata.path === '/' ? '' : metadata.path.replace(/^\//, '')
  const destination = routePath
    ? path.join(outputDir, routePath, 'index.html')
    : path.join(outputDir, 'index.html')
  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, renderMetadata(metadata))
}

fs.writeFileSync(
  path.join(outputDir, '404.html'),
  renderMetadata({ ...pageMeta.notFound, path: '/404', noIndex: true })
)

console.log(`Generated metadata HTML for ${routes.length} routes plus 404.html.`)
