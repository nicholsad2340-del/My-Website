import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import insulationWorkerImg from '@assets/jobs4_1788023621576.jpg';
import { CheckCircle2, Shield, HeartHandshake, Award } from 'lucide-react';
import ProjectGallery, { jobPhotoSets } from '@/components/ProjectGallery';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 px-4 text-center animate-in fade-in duration-1000">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold animate-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both" data-testid="heading-about-hero">About Nichols Insulation</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both" data-testid="text-about-subtext">
            A family-owned company with 25+ years of keeping Tennessee homes comfortable.
          </p>
        </div>
      </section>

      {/* Hero Photo */}
      <div className="w-full h-[320px] relative">
        <img src={insulationWorkerImg} alt="Worker installing insulation" className="w-full h-full object-cover" data-testid="img-about-hero" />
      </div>

      {/* Our Story */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-accent font-bold tracking-wider uppercase" data-testid="tag-our-story">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight" data-testid="heading-our-story">Started by a Craftsman,<br/>Grown by Trust</h2>
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed" data-testid="text-our-story-body">
              <p>
                When James Nichols founded Nichols Insulation in Clarksville, Tennessee, he had a simple philosophy: treat every home like it's your own, and never cut corners where the customer can't see.
              </p>
              <p>
                Over the years, that commitment to honest workmanship helped the company grow entirely through word-of-mouth. Today, James runs the business alongside his son, Adam, combining decades of hands-on experience with the latest advancements in building science and energy efficiency.
              </p>
              <p>
                We are proud to maintain a 5-star Google rating because we believe in straightforward pricing, showing up when we say we will, and leaving every job site cleaner than we found it. We aren't a high-pressure corporate franchise — we're your neighbors, dedicated to keeping your home comfortable for life.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-muted text-white p-10 rounded-2xl shadow-xl space-y-8" data-testid="card-milestones">
            <h3 className="text-2xl font-bold border-b border-white/20 pb-4">Our Journey</h3>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-2 rounded-full h-fit"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                <div>
                  <strong className="block text-lg">Founded</strong>
                  <span className="text-white/80">James Nichols founded the company in Clarksville, TN.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-2 rounded-full h-fit"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                <div>
                  <strong className="block text-lg">Growth</strong>
                  <span className="text-white/80">Expanded across the region and earned Energy Star certification.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-2 rounded-full h-fit"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                <div>
                  <strong className="block text-lg">Family</strong>
                  <span className="text-white/80">Adam Nichols joined the business, bringing the next generation onboard.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-2 rounded-full h-fit"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                <div>
                  <strong className="block text-lg">Today</strong>
                  <span className="text-white/80">5-star rated, locally trusted, and proudly family-owned.</span>
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-white/20 mt-8 bg-white/5 p-4 rounded-lg">
              <p className="font-bold text-center mb-2 text-white/90">Direct Contact:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-center text-lg">
                <a href="tel:9313269492" className="text-accent font-bold hover:underline">Call us Today: 931-326-9492</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery
        photos={jobPhotoSets.framing}
        eyebrow="Craftsmanship You Can See"
        title="Built Carefully, From the Inside Out"
        description="Every project reflects the way we work: careful preparation, a precise fit, and a job site treated with the same respect as your home."
        dark
      />

      {/* Core Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground" data-testid="heading-core-values">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: HeartHandshake, title: "Integrity", desc: "Honest quotes, transparent pricing, and we never over-recommend materials you don't need." },
              { icon: Award, title: "Expertise", desc: "Continuous training on the latest methods and local building codes ensures the job is done right." },
              { icon: Shield, title: "Excellence", desc: "Every job is rigorously inspected before we leave. If it's not perfect, we fix it." },
              { icon: CheckCircle2, title: "Sustainability", desc: "Eco-friendly materials that maximize efficiency, lower your footprint, and qualify for rebates." }
            ].map((val, i) => (
              <div key={i} className="flex gap-6 p-8 bg-background border-l-4 border-primary rounded-r-xl hover:shadow-md transition-shadow" data-testid={`card-value-${i}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <val.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-foreground/70 text-lg">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-accent text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold" data-testid="heading-cta-about">Meet the Team Behind the Work</h2>
          <div className="pt-4">
            <Link to="/contact" className="inline-block px-10 py-4 bg-white text-accent font-bold rounded-md hover:bg-background transition-colors text-lg shadow-lg" data-testid="button-cta-about">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}