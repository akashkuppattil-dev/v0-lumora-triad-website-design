import Image from 'next/image'

export const metadata = {
  title: 'FinTech Platform Redesign – Case Study',
  description: 'How Lumora Triad transformed a legacy FinTech platform, improving performance and user sign‑ups.',
}

export default function FintechCaseStudy() {
  return (
    <section className="py-16 bg-foreground/5">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-foreground">FinTech Platform Redesign</h1>
        <Image src="/case-study-fintech.jpg" alt="FinTech dashboard" width={1200} height={630} className="rounded-lg mb-8" />
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Problem</h2>
        <p className="mb-4 text-muted-foreground">
          Legacy monolith with poor performance, low user retention, and outdated UI caused high churn and support costs.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Process</h2>
        <ul className="list-disc list-inside mb-4 text-muted-foreground">
          <li>Discovery workshops with stakeholders</li>
          <li>Architecture redesign to micro‑services</li>
          <li>Full UI/UX redesign – user‑centered flows, accessible components</li>
          <li>Development with Next.js, TypeScript, and serverless APIs</li>
          <li>Performance optimisation and CI/CD pipeline</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Result</h2>
        <p className="mb-4 text-muted-foreground">
          30% faster page loads, 45% increase in sign‑ups, 20% reduction in support tickets, and a modern design system handed off in Figma.
        </p>
        <a href="/contact" className="inline-block mt-6 bg-foreground text-background px-6 py-3 rounded-md hover:opacity-90 transition">
          Get a similar solution
        </a>
      </div>
    </section>
  )
}
