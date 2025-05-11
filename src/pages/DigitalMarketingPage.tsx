
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { TrendingUp, BarChart2, Search, Users, Target, ArrowRight } from 'lucide-react';
import ServiceBox from '@/components/ServiceBox';
import TestimonialCard from '@/components/TestimonialCard';

const DigitalMarketingPage = () => {
  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-700 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-purple-800/40 px-3 py-1 rounded-full mb-6">Digital Marketing</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                <span className="text-purple-300">Growth-Driven</span> Digital <br />Marketing Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Data-driven strategies that increase your online visibility, 
                drive traffic, and convert visitors into customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 hover:scale-105 transition-all">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all">
                  Free SEO Audit
                </Button>
              </div>
              
              <div className="flex items-center mt-12">
                <div className="flex -space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-purple-900 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573497019236-61e7a3e1f341?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-purple-900 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-purple-900 object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" className="mr-1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm opacity-90">Managed $10M+ in ad spend</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Digital Marketing" 
                  className="rounded-lg shadow-2xl border border-purple-800/30 w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-purple-600 mb-2">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing <span className="text-purple-600">Services</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions to help your business grow online
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceBox 
                title="Search Engine Optimization" 
                icon={<Search />}
                color="purple"
                description="Improve your website's visibility in search engine results pages (SERPs) and drive organic traffic."
                imageSrc="https://images.unsplash.com/photo-1571677246347-5040e82aeb72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              />
              
              <ServiceBox 
                title="Pay-Per-Click Advertising" 
                icon={<TrendingUp />}
                color="purple"
                description="Strategic PPC campaigns to drive targeted traffic and generate leads for your business."
                imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              />
              
              <ServiceBox 
                title="Social Media Marketing" 
                icon={<Users />}
                color="purple"
                description="Engage with your audience on social media platforms and build a strong online presence."
                imageSrc="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Analytics" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="SEO" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Social Media" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Marketing" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-purple-600 mb-2">Measurable Results</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Data-Driven <span className="text-purple-600">Strategies</span></h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our digital marketing strategies are built on data and analytics to deliver measurable results for your business.
                </p>
                
                <div className="grid grid-cols-2 gap-y-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-purple-600">250%</span>
                    <span className="text-sm text-gray-600">Avg. Traffic Increase</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-purple-600">180%</span>
                    <span className="text-sm text-gray-600">Avg. Conversion Rate</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-purple-600">300+</span>
                    <span className="text-sm text-gray-600">Clients</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-purple-600">45%</span>
                    <span className="text-sm text-gray-600">Avg. ROI Increase</span>
                  </div>
                </div>
                
                <Button className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all group">
                  Get Your Free Analysis <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-purple-600 mb-2">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Digital Marketing <span className="text-purple-600">Process</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven process ensures that we deliver results for your business
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-purple-200"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-purple-500 hover:text-white transition-all">
                    <span className="font-bold text-purple-600 hover:text-white">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Research & Analysis</h3>
                  <p className="text-gray-600 text-center">We analyze your target audience, competitors, and market to develop a strategic plan.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-purple-500 hover:text-white transition-all">
                    <span className="font-bold text-purple-600 hover:text-white">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Strategy Development</h3>
                  <p className="text-gray-600 text-center">We create a customized digital marketing strategy aligned with your business goals.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-purple-500 hover:text-white transition-all">
                    <span className="font-bold text-purple-600 hover:text-white">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Implementation</h3>
                  <p className="text-gray-600 text-center">Our team executes the strategy across all relevant digital channels.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-purple-500 hover:text-white transition-all">
                    <span className="font-bold text-purple-600 hover:text-white">4</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Monitoring & Optimization</h3>
                  <p className="text-gray-600 text-center">We continuously analyze results and optimize campaigns to maximize ROI.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-purple-600 mb-2">Client Success</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients <span className="text-purple-600">Say</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our digital marketing strategies have helped businesses achieve their goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Webtah's digital marketing team transformed our online presence. Their SEO strategy increased our organic traffic by 200% in just six months." 
                author="David Miller" 
                role="CEO, TechStart" 
                rating={5}
                delay={100}
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
              
              <TestimonialCard 
                quote="Their PPC campaigns delivered a 4x return on ad spend for our e-commerce store. The team's attention to data and continuous optimization made all the difference." 
                author="Rebecca Chen" 
                role="Marketing Manager" 
                rating={5}
                delay={200}
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
              
              <TestimonialCard 
                quote="Working with Webtah for our social media marketing has been a game-changer. They've helped us build a loyal community and increase engagement across all platforms." 
                author="John Taylor" 
                role="Brand Director" 
                rating={5}
                delay={300}
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
              <p className="text-xl opacity-90 mb-8">
                Contact us today for a free consultation and digital marketing audit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 hover:scale-105 transition-all">
                  Get a Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all">
                  View Case Studies
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPage;
