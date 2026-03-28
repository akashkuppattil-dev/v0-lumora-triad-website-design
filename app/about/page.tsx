
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 lg:pt-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Editorial Title */}
        <section className="mb-32">
          <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-16">
            LUMORA<br/>TRIAD.
          </h1>
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                Our philosophy is simple: bridge the gap between complex engineering and premium design.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                In a digital landscape filled with generic templates and high-friction interfaces, Lumora Triad was founded to provide a balanced approach. We architect systems that are as technically stable as they are visually compelling.
              </p>
            </div>
            <div className="flex items-end justify-end">
              <div className="max-w-md space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a remote-first studio based in India, operating globally. We partner with founders and product teams who value clarity, technical precision, and high-end aesthetics.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-50">Stack</span>
                    <ul className="text-sm font-medium space-y-1">
                      <li>React / Next.js</li>
                      <li>Django / Python</li>
                      <li>PostgreSQL</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-50">Studio</span>
                    <ul className="text-sm font-medium space-y-1">
                      <li>Remote</li>
                      <li>India-based</li>
                      <li>Est. 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-32 border-t border-border">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-black opacity-40 mb-8 block">01 / Design</span>
              <h3 className="text-3xl font-bold mb-6">User-Centric Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just design interfaces; we design journeys. Every pixel is intentional, every interaction is purposeful. We focus on conversion, clarity, and brand consistency.
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-black opacity-40 mb-8 block">02 / Engineering</span>
              <h3 className="text-3xl font-bold mb-6">Built for Scale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our code is our craft. We build with modern engines like Next.js and Django to ensure your platform is as robust on the backend as it is smooth on the frontend.
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-black opacity-40 mb-8 block">03 / Partnership</span>
              <h3 className="text-3xl font-bold mb-6">Direct Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                You work directly with the experts. No bloated account management layers. We act as an extension of your team to ensure your vision is realized at the highest level.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Visual - Minimal */}
        <section className="py-32 border-t border-border bg-foreground text-background -mx-6 lg:-mx-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-bold mb-24 tracking-tighter">Technology Stack.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {[
                { label: 'Frontend', items: ['Next.js', 'React', 'Tailwind', 'Framermotion'] },
                { label: 'Backend', items: ['Django', 'Python', 'Node.js', 'Go'] },
                { label: 'Cloud', items: ['Vercel', 'AWS', 'Docker', 'PostgreSQL'] },
                { label: 'Product', items: ['Figma', 'Linear', 'Github', 'Sentry'] }
              ].map(stack => (
                <div key={stack.label}>
                  <span className="block text-[10px] uppercase tracking-widest font-black mb-6 opacity-40">{stack.label}</span>
                  <ul className="space-y-4">
                    {stack.items.map(item => (
                      <li key={item} className="text-xl lg:text-2xl font-bold">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Social / Connect */}
        <section className="py-32 border-t border-border">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter uppercase mb-6">Connect across the web.</h2>
              <p className="text-lg text-muted-foreground max-w-md">We share case studies, technical insights, and studio updates across our platforms.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {[
                { label: 'Twitter', url: 'https://x.com/LumoraTraid', action: 'Follow X' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lumoratriad/', action: 'Connect' },
                { label: 'Instagram', url: 'https://www.instagram.com/lumo.ratraid/?hl=en', action: 'Stories' },
                { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61586286665509', action: 'Update' }
              ].map(social => (
                <div key={social.label} className="group">
                  <span className="block text-[10px] uppercase tracking-widest font-black mb-4 opacity-40">{social.label}</span>
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl font-bold tracking-tight hover:underline flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    {social.action}
                    <span>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
