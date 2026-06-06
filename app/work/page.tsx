import Link from 'next/link'

const CASE_STUDIES = [
  {
    title: 'FinTech Platform Redesign',
    problem: 'Legacy monolith with poor performance and low user retention.',
    process: 'Discovery → Architecture → UI/UX redesign → Development → Deployment',
    result: '30% faster page loads, 45% increase in sign‑ups, 20% reduction in support tickets.',
    image: '/case-study-fintech.jpg',
    link: '/work/fintech-platform-redesign'
  },
  {
    title: 'E‑Commerce Scale‑up',
    problem: 'Rapid growth caused checkout failures and cart abandonment.',
    process: 'Performance audit → Headless commerce migration → UI/UX overhaul → CI/CD setup',
    result: 'Revenue grew 2× in 3 months, checkout success rate 98%, cart abandonment down 35%.',
    image: '/case-study-ecommerce.jpg',
    link: '/work/ecommerce-scale-up'
  },
  {
    title: 'Branding & SEO Growth for SaaS Startup',
    problem: 'No brand identity; organic traffic <100 visits/month.',
    process: 'Brand strategy → Visual identity → Technical SEO → Content plan',
    result: 'Brand awareness lift 120%, organic traffic 5×, lead conversion 3×.',
    image: '/case-study-saas.jpg',
    link: '/work/saas-branding-seo'
  }
]

export default function WorkPage() {
  return (
    <section className="min-h-screen bg-background pt-20 sm:pt-28 lg:pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground">
          Our Work
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, i) => (
            <article key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={cs.image} alt={cs.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-foreground">{cs.title}</h2>
                <p className="text-sm text-muted-foreground mb-2"><strong>Problem:</strong> {cs.problem}</p>
                <p className="text-sm text-muted-foreground mb-2"><strong>Process:</strong> {cs.process}</p>
                <p className="text-sm text-muted-foreground mb-4"><strong>Result:</strong> {cs.result}</p>
                <Link href={cs.link} className="inline-block bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition">
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
