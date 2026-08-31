import { useEffect } from 'react'
import { companyInfo, siteMeta } from '../content/siteData'

/**
 * OrganizationSchema
 * -------------------
 * 站点级 JSON-LD 结构化数据(GeneralContractor / LocalBusiness)。
 * 仅使用已确认的真实公司信息 —— 不编造营业时间、评分或价格区间。
 */
export function OrganizationSchema() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'GeneralContractor',
      name: companyInfo.name,
      url: siteMeta.siteUrl,
      telephone: companyInfo.phone,
      email: companyInfo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '14671 Burrows Rd',
        addressLocality: 'Richmond',
        addressRegion: 'BC',
        postalCode: 'V6V 1K9',
        addressCountry: 'CA',
      },
      areaServed: 'Greater Vancouver, BC',
      sameAs: [
        'https://www.instagram.com/jkceprobuild/',
        'https://www.facebook.com/jkceprobuild/',
        'https://www.linkedin.com/company/jkceprobuild/',
        'https://www.youtube.com/@JKCEProbuild',
      ],
    }

    let script = document.head.querySelector('script[data-schema="organization"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-schema', 'organization')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)
  }, [])

  return null
}
