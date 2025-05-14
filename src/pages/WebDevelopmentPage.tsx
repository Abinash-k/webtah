import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Code, ArrowRight, Globe, Settings, Laptop, Server } from 'lucide-react';
import ServiceBox from '@/components/ServiceBox';
import TestimonialCard from '@/components/TestimonialCard';
const WebDevelopmentPage = () => {
  return <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-700 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-blue-800/40 px-3 py-1 rounded-full mb-6">Web Development</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                <span className="text-blue-300">Custom Web</span> Solutions <br />For Your Business
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                We build stunning, high-performance websites and web applications 
                tailored to your unique business needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 hover:scale-105 transition-all">
                  Get Started
                </Button>
              </div>
              
              <div className="flex items-center mt-12">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Team member" className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover" />
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Team member" className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover" />
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Team member" className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" className="mr-1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>)}
                  </div>
                  <p className="text-sm opacity-90">Completed 500+ websites</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Web Development" className="rounded-lg shadow-2xl border border-blue-800/30 w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development <span className="text-blue-600">Services</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From responsive websites to complex web applications, we deliver end-to-end web development solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceBox title="Custom Website Development" icon={<Code />} color="blue" description="Tailored websites designed to meet your specific business requirements and brand identity." imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" />
              
              <ServiceBox title="E-Commerce Solutions" icon={<Globe />} color="blue" description="Powerful online stores with secure payment processing and inventory management." imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" />
              
              <ServiceBox title="Web Application Development" icon={<Settings />} color="blue" description="Complex web applications with advanced features and functionality." imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development <span className="text-blue-600">Process</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to deliver high-quality web solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all group transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="font-bold text-blue-600 group-hover:text-white transition-colors duration-300">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Discovery</h3>
                <p className="text-gray-600">We learn about your business, goals, and requirements to create a strategic plan.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all group transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="font-bold text-blue-600 group-hover:text-white transition-colors duration-300">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Design</h3>
                <p className="text-gray-600">We create wireframes and visual designs that align with your brand identity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all group transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="font-bold text-blue-600 group-hover:text-white transition-colors duration-300">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Development</h3>
                <p className="text-gray-600">Our developers build your website or application using the latest technologies.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all group transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="font-bold text-blue-600 group-hover:text-white transition-colors duration-300">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Launch & Support</h3>
                <p className="text-gray-600">We deploy your website and provide ongoing maintenance and support.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Modern Technology</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">We Use the Latest <span className="text-blue-600">Technologies</span></h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our development team stays up-to-date with the latest technologies to build modern, fast, and scalable web solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Laptop className="h-5 w-5 text-blue-600" />
                    <span>React</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Server className="h-5 w-5 text-blue-600" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Code className="h-5 w-5 text-blue-600" />
                    <span>Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                    <Settings className="h-5 w-5 text-blue-600" />
                    <span>WordPress</span>
                  </div>
                </div>
                
                <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Coding" className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Web Design" className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500" />
                <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Development" className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500" />
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Code" className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500" />
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
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Client Feedback</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients <span className="text-blue-600">Say</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from businesses that have transformed their digital presence with our web development services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard quote="Webtah Technologies delivered a stunning website that perfectly represents our brand. Their development team was responsive and professional throughout the entire process." author="Sarah Johnson" role="Marketing Director" rating={5} delay={100} image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" />
              
              <TestimonialCard quote="Their team built our e-commerce platform from the ground up. The attention to detail and focus on user experience resulted in higher conversion rates and increased sales." author="Michael Reynolds" role="E-Commerce Manager" rating={5} delay={200} image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" />
              
              <TestimonialCard quote="Webtah developed a complex web application for our business that streamlined our operations. Their technical expertise and commitment to quality are unmatched." author="Jessica Brown" role="Operations Director" rating={5} delay={300} image="https://images.unsplash.com/photo-1573497019236-61e7a3e1f341?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Web Development Project?</h2>
              <p className="text-xl opacity-90 mb-8">
                Contact us today to discuss your requirements and see how we can help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 hover:scale-105 transition-all">
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>;
};
export default WebDevelopmentPage;
