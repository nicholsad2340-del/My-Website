import { useEffect } from 'react';
import { Link } from 'wouter';
import insulationWorkerImg from '@assets/Insulation_1_1783105715228.jpg';
import insulationBattImg from '@assets/insulatio_2_1783105715228.jpg';
import { CheckCircle2, Home, Building2, Leaf, ShieldCheck, MapPin } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white py-20 px-4 animate-in fade-in duration-1000 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4 animate-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both" data-testid="badge-hero">
            Licensed & Insured Professionals
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight animate-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both" data-testid="heading-hero">
            Keep Your Home <br className="hidden md:block"/>
            <span className="text-[#7ed6a8]">Warm, Cool & Efficient.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both" data-testid="text-hero-subtext">
            Nichols Insulation delivers expert residential and commercial insulation — on time, within budget, and built to last decades.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-in slide-in-from-bottom-6 duration-700 delay-700 fill-mode-both">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-[#d67118] text-white font-bold rounded-md transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg" data-testid="button-hero-primary">
              Get a Free Estimate
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold rounded-md transition-all text-lg" data-testid="button-hero-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="h-[440px] relative overflow-hidden group">
          <img src={insulationWorkerImg} alt="Worker installing insulation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-testid="img-strip-worker" />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <div className="h-[440px] relative overflow-hidden group">
          <img src={insulationBattImg} alt="Pink fiberglass batt insulation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-testid="img-strip-batt" />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </section>

      {/* Why Nichols Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 text-foreground">
            <div className="flex items-center gap-2 font-bold text-lg" data-testid="stat-rating">
              <SiGoogle className="text-accent text-2xl" />
              <span>5.0★ Google Rating</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-lg" data-testid="stat-insured">
              <ShieldCheck className="text-primary text-2xl" />
              <span>100% Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-lg" data-testid="stat-local">
              <MapPin className="text-primary text-2xl" />
              <span>Local / Clarksville TN</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground" data-testid="heading-why-nichols">The Right Team for Your Insulation Needs</h2>
            <p className="text-lg text-foreground/80" data-testid="text-why-nichols-subtext">We're not a one-size-fits-all crew. Every home is different, and we customize our approach to ensure maximum comfort and efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "Residential Experts", desc: "Attics, wall cavities, and crawlspaces, perfectly matched to our Tennessee climate.", color: "bg-primary" },
              { icon: Building2, title: "Commercial Solutions", desc: "Warehouses, multi-family units, and retail. On schedule and up to code.", color: "bg-secondary" },
              { icon: Leaf, title: "Energy Efficiency First", desc: "Reduce bills by 20–40% with the right R-value and proper sealing techniques.", color: "bg-accent" },
              { icon: ShieldCheck, title: "Guaranteed Workmanship", desc: "Written guarantee on all our work. No questions asked, just done right.", color: "bg-muted" }
            ].map((feat, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100" data-testid={`card-feature-${i}`}>
                <div className={`h-2 w-full ${feat.color}`}></div>
                <div className="p-8 flex flex-col flex-grow items-center text-center">
                  <div className={`p-4 rounded-full bg-background mb-6 shadow-inner`}>
                    <feat.icon className={`w-8 h-8 text-primary`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feat.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-muted to-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold" data-testid="heading-how-it-works">Simple. Professional. Done Right.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-white/20 z-0"></div>

            {[
              { num: 1, title: "Free Estimate", desc: "We visit your property, assess your needs, and provide a detailed quote at no cost." },
              { num: 2, title: "Custom Plan", desc: "We recommend a solution specifically matched to your structure and energy goals." },
              { num: 3, title: "Expert Install", desc: "Our certified team arrives on time, works clean, and walks you through the result." },
              { num: 4, title: "You Save", desc: "Enjoy lower energy bills and a comfortable environment year-round." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center" data-testid={`card-step-${i}`}>
                <div className="w-24 h-24 rounded-full bg-primary border-4 border-white flex items-center justify-center text-3xl font-bold mb-6 shadow-xl text-white">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-200 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-primary/10 pb-8">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground" data-testid="heading-reviews">Trusted by the Community</h2>
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-foreground">5.0</span>
                <div className="flex text-accent text-3xl">★★★★★</div>
                <span className="text-lg font-medium text-foreground/70">Google Reviews</span>
              </div>
            </div>
            <a href="https://www.google.com/maps/place/Nichols+Insulation" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline flex items-center gap-2" data-testid="link-write-review">
              Write a Review <CheckCircle2 className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Great guys! Worked hard and sealed every nook and cranny in our new project!", author: "Atom Knaak", meta: "Google Review, 5 months ago" },
              { text: "Great family owned business owned and operated by Clarksville native Shorty Nichols.", author: "Annie Lois Jones-Castillo", meta: "Google Local Guide, 4 years ago" },
              { text: "Excellent experience!", author: "Angell Henderson", meta: "Google Local Guide, 6 years ago" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between" data-testid={`card-review-${i}`}>
                <div className="flex text-accent mb-4">★★★★★</div>
                <p className="text-foreground text-lg italic mb-8 flex-grow">"{review.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{review.author}</p>
                  <p className="text-sm text-foreground/60">{review.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-accent text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold" data-testid="heading-cta-home">Ready to Lower Your Energy Bills?</h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto" data-testid="text-cta-home-subtext">
            Call us today or request your free, no-obligation estimate online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-accent font-bold rounded-md hover:bg-background transition-colors text-lg shadow-lg w-full sm:w-auto" data-testid="button-cta-home">
              Get a Free Estimate
            </Link>
            <span className="text-2xl font-bold" data-testid="text-cta-home-phone">(931) 801-5391</span>
          </div>
        </div>
      </section>
    </div>
  );
}