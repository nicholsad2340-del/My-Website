import { useEffect } from 'react';
import { Link } from 'wouter';
import insulationBattImg from '@assets/jobs7_1788023621578.jpg';
import { Wind, Layers, Sun, Factory, CheckCircle2 } from 'lucide-react';
import ProjectGallery, { jobPhotoSets } from '@/components/ProjectGallery';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 px-4 text-center animate-in fade-in duration-1000">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold animate-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both" data-testid="heading-services-hero">Our Insulation Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both" data-testid="text-services-subtext">
            Expert installation for every project type, matched precisely to your home's needs.
          </p>
        </div>
      </section>

      {/* Hero Photo */}
      <div className="w-full h-[320px] relative">
        <img src={insulationBattImg} alt="Insulation Batt" className="w-full h-full object-cover" data-testid="img-services-hero" />
      </div>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            {
              id: "blown-in",
              icon: Wind,
              title: "Blown-In Insulation",
              desc: "Loose-fill fiberglass or cellulose blown seamlessly into attics, wall cavities, and hard-to-reach areas for a comprehensive thermal blanket.",
              features: ["Fiberglass or cellulose options", "Perfect for attics and wall cavities", "Minimal disruption to home", "Fast, same-day installation"]
            },
            {
              id: "batt-roll",
              icon: Layers,
              title: "Batt & Roll Insulation",
              desc: "Pre-cut fiberglass or mineral wool panels expertly fitted between joists and studs in walls, floors, and ceilings.",
              features: ["Fiberglass and mineral wool materials", "Ideal for new construction & retrofits", "Highly cost-effective", "Fire-resistant options available"]
            },
            {
              id: "radiant",
              icon: Sun,
              title: "Radiant Barriers",
              desc: "Reflective foil installations typically placed in attics to block radiant heat transfer, keeping your home drastically cooler in the summer.",
              features: ["Reduces cooling costs up to 25%", "Ideal for hot Tennessee summers", "Works alongside existing insulation", "Long lifespan with no maintenance"]
            },
            {
              id: "commercial",
              icon: Factory,
              title: "Commercial Insulation",
              desc: "Large-scale insulation solutions designed specifically for warehouses, multi-family complexes, retail spaces, and offices.",
              features: ["Warehouses & industrial facilities", "Multi-family residential units", "Office & retail spaces", "Certified commercial code compliance"]
            }
          ].map((srv) => (
            <div key={srv.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300" data-testid={`card-service-${srv.id}`}>
              <div className="bg-muted text-white p-8 flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-xl">
                  <srv.icon className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-serif font-bold">{srv.title}</h2>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-foreground/80 text-lg mb-8 leading-relaxed">{srv.desc}</p>
                <div className="mt-auto space-y-4 bg-background p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-foreground uppercase tracking-wide text-sm mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {srv.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectGallery
        photos={jobPhotoSets.installation}
        eyebrow="Insulation in Action"
        title="A Better Install Starts With Better Work"
        description="See the kind of detail our team brings to homes and buildings across the Clarksville area."
      />

      {/* Not Sure Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted to-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold" data-testid="heading-not-sure">We'll Help You Choose the Right Solution</h2>
          <p className="text-xl text-white/90 leading-relaxed" data-testid="text-not-sure-body">
            Our free on-site assessment includes a professional R-value recommendation, material comparison, and a fully transparent quote so you know exactly what you're paying for.
          </p>
          <div className="pt-6">
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-md hover:bg-background transition-colors text-lg shadow-lg" data-testid="button-schedule-assessment">
              Schedule a Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-accent text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold" data-testid="heading-cta-services">Every Home is Different. Your Quote Should Be Too.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-accent font-bold rounded-md hover:bg-background transition-colors text-lg shadow-lg w-full sm:w-auto" data-testid="button-cta-services">
              Request Your Free Estimate
            </Link>
            <span className="text-2xl font-bold" data-testid="text-cta-services-phone">(931) 801-5391</span>
          </div>
        </div>
      </section>
    </div>
  );
}