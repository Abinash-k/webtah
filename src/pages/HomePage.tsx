
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Code, Users, Check, Star, Globe } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import FeatureCard from '@/components/FeatureCard';
import ServiceBox from '@/components/ServiceBox';
import TeamMember from '@/components/TeamMember';
import TechSphere from '@/components/TechSphere';

const HomePage = () => {
  return (
    <>
      {/* Hero Section with Gradient Overlay and Pattern */}
      <section className="relative overflow-hidden bg-gradient-to-r from-webtah-blue-dark to-webtah-blue py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full mb-6">Elite Protection</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                IT Service & <span className="text-blue-300">Tech</span> <br />Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                We specialize in proactive cybersecurity solutions designed to expose, 
                mitigate, and neutralize digital threats before they strike.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-webtah-blue-dark hover:bg-white/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center mt-12">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-400 border-2 border-webtah-blue"></div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm opacity-90">Trusted by 1200+ clients</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
                <img src="/lovable-uploads/696a0bd6-d1bc-41d7-af7e-2baa3e57f512.png" alt="Cybersecurity Expert" className="relative z-10 rounded-lg shadow-xl" width="500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best IT Agency Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-webtah-blue opacity-10 rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="Professional" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Team Meeting" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1573497491765-dccce02b29df" alt="Security Expert" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1601933470096-0e34634ffcde" alt="Tech Support" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
              
              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-webtah-blue mb-2">Trusted by Industry Leaders</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Best IT & Technology Agency For Your Business</h2>
                <p className="text-lg text-webtah-text-secondary mb-6">
                  Webtah Technologies helps businesses thrive in the digital era by offering two critical services:
                  Cybersecurity Solutions to defend against modern threats and Web Design & Development to build, grow,
                  and market your brand online.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3">
                    <div className="p-2 bg-webtah-blue/10 rounded-lg">
                      <Check className="w-5 h-5 text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Military-Grade Protection</h4>
                      <p className="text-sm text-webtah-text-secondary">Elite security for modern threats</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-webtah-blue/10 rounded-lg">
                      <Check className="w-5 h-5 text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-sm text-webtah-text-secondary">Always available when you need us</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-webtah-blue/10 rounded-lg">
                      <Check className="w-5 h-5 text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Certified Experts</h4>
                      <p className="text-sm text-webtah-text-secondary">OSCP, CEH, CISSP certified</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-webtah-blue/10 rounded-lg">
                      <Check className="w-5 h-5 text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Transparent Process</h4>
                      <p className="text-sm text-webtah-text-secondary">Clear communication throughout</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <Button className="bg-webtah-blue text-white hover:bg-webtah-blue-dark">
                    Get Started
                  </Button>
                  
                  <div className="flex items-center">
                    <span className="font-bold text-3xl text-webtah-blue-dark">94%</span>
                    <span className="text-sm text-webtah-text-secondary ml-2">Client<br />Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey Section - Three Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-webtah-blue mb-2">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Embarking on a <span className="text-webtah-blue">New Journey</span></h2>
              <p className="text-lg text-webtah-text-secondary max-w-3xl mx-auto">
                Our approach combines technical excellence with strategic thinking to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <div className="w-16 h-16 rounded-full bg-webtah-blue/10 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-webtah-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">We Protect</h3>
                <p className="text-webtah-text-secondary mb-6">
                  We identify vulnerabilities in your systems and implement robust security measures to protect your digital assets from emerging threats.
                </p>
                <Link to="/cybersecurity" className="text-webtah-blue font-medium flex items-center gap-2 hover:underline">
                  Learn More <span className="text-lg">→</span>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <div className="w-16 h-16 rounded-full bg-webtah-blue/10 flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-webtah-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">We Build</h3>
                <p className="text-webtah-text-secondary mb-6">
                  Our development team creates custom, responsive websites and applications that are optimized for performance and user experience.
                </p>
                <Link to="/development" className="text-webtah-blue font-medium flex items-center gap-2 hover:underline">
                  Learn More <span className="text-lg">→</span>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <div className="w-16 h-16 rounded-full bg-webtah-blue/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-webtah-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">We Support</h3>
                <p className="text-webtah-text-secondary mb-6">
                  Our dedicated support team ensures that your systems remain secure and operational, providing assistance whenever you need it.
                </p>
                <Link to="/contact" className="text-webtah-blue font-medium flex items-center gap-2 hover:underline">
                  Learn More <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-webtah-blue mb-2">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Professional IT Solutions & Services</h2>
              <p className="text-lg text-webtah-text-secondary max-w-3xl mx-auto">
                Comprehensive security and development solutions to meet all your digital needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <ServiceBox 
                title="Infrastructure Assessment" 
                icon={<Shield />}
                color="blue"
              />
              <ServiceBox 
                title="Web Development" 
                icon={<Code />}
                color="green"
              />
              <ServiceBox 
                title="Cloud Security" 
                icon={<Globe />}
                color="purple"
              />
              <ServiceBox 
                title="Digital Marketing" 
                icon={<Users />}
                color="orange"
              />
              <ServiceBox 
                title="Security Consulting" 
                icon={<Shield />}
                color="red"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Sphere Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-webtah-blue-dark to-black text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <TechSphere />
              
              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-300 mb-2">Innovation at Core</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Changes The World</h2>
                <p className="text-lg opacity-90 mb-8">
                  We leverage cutting-edge technologies to provide comprehensive security solutions 
                  and innovative digital experiences that help your business stay ahead of the curve.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold mb-2 flex items-center">
                      <span className="text-blue-300 mr-1">3</span>k+
                    </div>
                    <p className="text-sm opacity-80">Completed Projects</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold mb-2 flex items-center">
                      <span className="text-blue-300 mr-1">8</span>yrs+
                    </div>
                    <p className="text-sm opacity-80">Industry Experience</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold mb-2 flex items-center">
                      <span className="text-blue-300 mr-1">98</span>%
                    </div>
                    <p className="text-sm opacity-80">Success Rate</p>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold mb-2 flex items-center">
                      <span className="text-blue-300 mr-1">24</span>/7
                    </div>
                    <p className="text-sm opacity-80">Customer Support</p>
                  </div>
                </div>
                
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn More <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-webtah-blue mb-2">Our Happy Clients</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Professional <span className="text-webtah-blue">Testimonials</span> & Feedback</h2>
              <p className="text-lg text-webtah-text-secondary max-w-3xl mx-auto">
                What our clients say about our services and solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Webtah Technologies transformed our cybersecurity posture. Their penetration testing uncovered vulnerabilities we had no idea existed." 
                author="Jessica Brown" 
                role="CTO, FinSecure Inc." 
                rating={5}
                delay={100}
              />
              
              <TestimonialCard 
                quote="The team at Webtah delivered an exceptional website that perfectly captures our brand identity while also driving conversions." 
                author="Michael Reynolds" 
                role="Marketing Director" 
                rating={5}
                delay={200}
              />
              
              <TestimonialCard 
                quote="Their security consulting services have been invaluable. We now have proper protocols in place and feel confident in our digital infrastructure." 
                author="Luke Johnson" 
                role="IT Manager" 
                rating={5}
                delay={300}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-webtah-blue text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Let's talk about your cybersecurity needs and how we can help protect your business.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-webtah-blue hover:bg-white/90">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Cybersecurity Professional" 
                  className="rounded-lg shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
