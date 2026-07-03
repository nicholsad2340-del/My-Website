import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  propertyType: z.string().min(1, 'Please select a property type'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please tell us a bit about your project'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      propertyType: '',
      service: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Simulate API call
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  }

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 px-4 text-center animate-in fade-in duration-1000">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold animate-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both" data-testid="heading-contact-hero">Contact Us Today</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both" data-testid="text-contact-subtext">
            Have a question or ready to get started?
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-3" data-testid="heading-contact-info">Contact Adam Nichols</h3>
              <p className="text-lg text-foreground/70" data-testid="text-contact-no-pressure">No pressure, no obligation.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-foreground text-lg font-bold mb-1">Phone</strong>
                  <a href="tel:9318015391" className="text-xl text-primary hover:underline hover:text-accent transition-colors font-medium" data-testid="link-contact-phone">
                    (931) 801-5391
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-foreground text-lg font-bold mb-1">Email</strong>
                  <a href="mailto:adam@nicholsinsulation.com" className="text-lg text-foreground/80 hover:text-accent transition-colors" data-testid="link-contact-email">
                    adam@nicholsinsulation.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-foreground text-lg font-bold mb-1">Office</strong>
                  <p className="text-lg text-foreground/80" data-testid="text-contact-address">
                    3100 Dunlop Ln<br />
                    Clarksville, TN 37043
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-foreground text-lg font-bold mb-1">Hours</strong>
                  <ul className="text-lg text-foreground/80 space-y-1" data-testid="text-contact-hours">
                    <li>Mon–Fri: 7am – 6pm</li>
                    <li>Sat: 8am – 2pm</li>
                    <li>Sun: Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-primary/20 shadow-sm" data-testid="card-service-area">
              <h4 className="font-bold text-foreground mb-2">Our Service Area</h4>
              <p className="text-foreground/80 leading-relaxed">
                We serve Springfield, Riverside, Maplewood, Clayton, Fairview, and surrounding communities within a 60-mile radius of Clarksville.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-fit" data-testid="card-contact-form">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8" data-testid="heading-contact-form">Request Your Free Estimate</h3>
            
            {isSubmitted ? (
              <div className="bg-primary/10 border border-primary text-primary rounded-xl p-8 text-center space-y-4 animate-in fade-in zoom-in duration-500" data-testid="message-form-success">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold">Thank you!</h4>
                <p className="text-lg">Your request has been received. We'll be in touch within 1 business day.</p>
                <Button 
                  variant="outline" 
                  className="mt-6 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    form.reset();
                    setIsSubmitted(false);
                  }}
                  data-testid="button-form-reset"
                >
                  Send Another Request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="James" className="bg-background/50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-firstname" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith" className="bg-background/50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-lastname" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="james@example.com" className="bg-background/50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" className="bg-background/50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Property Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-gray-200 focus:ring-primary" data-testid="select-property-type">
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Home</SelectItem>
                            <SelectItem value="commercial">Commercial Building</SelectItem>
                            <SelectItem value="new_construction">New Construction</SelectItem>
                            <SelectItem value="multi_family">Multi-Family</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-gray-200 focus:ring-primary" data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="blown_in">Blown-In Insulation</SelectItem>
                            <SelectItem value="batt_roll">Batt & Roll Insulation</SelectItem>
                            <SelectItem value="radiant">Radiant Barriers</SelectItem>
                            <SelectItem value="commercial">Commercial Services</SelectItem>
                            <SelectItem value="not_sure">Not sure / Need assessment</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Tell Us About Your Project</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="E.g., I have an older home and want to re-insulate the attic..." 
                            className="bg-background/50 border-gray-200 focus-visible:ring-primary min-h-[120px] resize-y" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-accent hover:bg-[#d67118] text-white font-bold py-6 text-lg transition-all shadow-md hover:shadow-lg" data-testid="button-submit-form">
                      Send My Request — It's Free
                    </Button>
                    <p className="text-center text-sm text-foreground/60 mt-4" data-testid="text-form-note">
                      We respond within 1 business day. No spam, ever.
                    </p>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-accent text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold" data-testid="heading-cta-contact">Prefer to Call?</h2>
          <div className="pt-4">
            <a href="tel:9318015391" className="inline-block px-10 py-4 bg-white text-accent font-bold rounded-md hover:bg-background transition-colors text-2xl shadow-lg" data-testid="link-cta-contact-phone">
              (931) 801-5391
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}