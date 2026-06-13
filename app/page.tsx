import { Hero } from '@/components/hero';
import { About } from '@/components/about';

import { CTASection } from '@/components/cta-section';
import { Services } from '@/components/services';
import { MethodologySection } from '@/components/methodology-section';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />



      {/* What we do section */}
      <section id="what-we-do" className="py-12 lg:py-16 px-4 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">

          <Services />
          {/* Methodology Section */}
          <MethodologySection />
        </div>
      </section>
      <CTASection />
    </main>
  );
}
