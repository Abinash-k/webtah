
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Palette, PenTool, LayoutTemplate, Paintbrush, Eye } from 'lucide-react';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import { Link } from 'react-router-dom';
import FAQSection from '@/components/FAQSection';
const DesignPage = () => {
  const designFAQs = [{
    question: "What types of design services do you offer?",
    answer: "We offer a comprehensive range of design services including UI/UX design, graphic design, branding, logo design, web design, print design, and product design. Our team specializes in creating cohesive visual identities that communicate your brand's values effectively."
  }, {
    question: "How long does a typical design project take?",
    answer: "Project timelines vary based on scope and complexity. A logo design might take 1-2 weeks, while a complete brand identity package could take 4-6 weeks. Website design projects typically range from 3-8 weeks depending on size and functionality. During our initial consultation, we'll provide a specific timeline for your project."
  }, {
    question: "What is your design process like?",
    answer: "Our design process begins with discovery, where we learn about your business, goals, and audience. Next comes research and strategy, followed by concept development. After presenting initial concepts, we refine based on your feedback. Finally, we deliver the finalized designs in all necessary formats and provide guidelines for implementation."
  }, {
    question: "How do you price your design services?",
    answer: "Our pricing is project-based and depends on factors like project scope, complexity, timeline, and deliverables. We provide detailed proposals after understanding your specific needs. We also offer packages for common services like brand identity design and website design."
  }, {
    question: "Will I own the rights to the designs you create?",
    answer: "Yes, once a project is complete and paid for, you will own all rights to the final designs we create for you. We may request permission to showcase the work in our portfolio, but the intellectual property rights transfer to you upon project completion."
  }];
  return <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black to-blue-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <ScrollReveal animation="fade-left">
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-blue-800/40 px-3 py-1 rounded-full mb-6">Creative Design Solutions</span>
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                  Elevate Your Brand with <span className="text-blue-400">Exceptional</span> Design
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  We create stunning, strategic designs that capture attention, communicate your message, 
                  and drive engagement across all digital and print platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-black">
                    View Portfolio
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal animation="fade-right" delay={300}>
              <div className="hidden lg:block relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
                <img alt="Creative design workspace" className="rounded-lg shadow-2xl border border-blue-800/30 w-full max-w-md object-cover" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Design Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From brand identity to user experience, we deliver design solutions that help you stand out
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-hover transition-all duration-500">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Palette className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Brand Identity</h3>
                <p className="text-gray-600 mb-6">
                  We create comprehensive brand identities that effectively communicate your values and resonate with your audience, including logos, color palettes, typography, and brand guidelines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Logo Design & Refinement
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Brand Guidelines
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Visual Identity Systems
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-hover transition-all duration-500">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <LayoutTemplate className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  We design intuitive, engaging user interfaces and experiences that guide users through digital journeys seamlessly, balancing aesthetic appeal with functional usability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Website & App Interfaces
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    User Experience Mapping
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Prototyping & Wireframing
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-hover transition-all duration-500">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Paintbrush className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Graphic Design</h3>
                <p className="text-gray-600 mb-6">
                  From marketing materials to digital assets, we create compelling visual content that conveys your message effectively and enhances your brand presence across all touchpoints.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Marketing Materials
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Social Media Graphics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Digital & Print Assets
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A structured approach that delivers exceptional results
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-soft h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="text-xl font-bold mb-4 mt-4">Discovery</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business, goals, target audience, and market position to establish a strategic foundation for design decisions.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-soft h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="text-xl font-bold mb-4 mt-4">Conceptualize</h3>
                  <p className="text-gray-600">
                    Our designers develop initial concepts based on research insights, exploring multiple creative directions to find the perfect approach.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-soft h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="text-xl font-bold mb-4 mt-4">Refine</h3>
                  <p className="text-gray-600">
                    We collaborate with you to refine the chosen direction, iterating based on feedback until we achieve the perfect design solution.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-soft h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center text-xl font-bold">4</div>
                  <h3 className="text-xl font-bold mb-4 mt-4">Deliver</h3>
                  <p className="text-gray-600">
                    We finalize all design assets, providing comprehensive files, guidelines, and support for successful implementation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Portfolio</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A collection of our recent design projects
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-soft group relative">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Web design project" className="w-full h-64 object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">E-Commerce Redesign</h3>
                  <p className="text-white/80 mt-2">UI/UX, Web Design</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-soft group relative">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Brand identity project" className="w-full h-64 object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Luxury Brand Identity</h3>
                  <p className="text-white/80 mt-2">Branding, Logo Design</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-white rounded-lg overflow-hidden shadow-soft group relative">
                <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="App design project" className="w-full h-64 object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Fitness App Design</h3>
                  <p className="text-white/80 mt-2">UI/UX, Mobile App</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button className="bg-blue-600 text-white">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our design services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <FAQSection customFaqs={designFAQs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand's Visual Identity?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Let's discuss how our design services can elevate your brand and help you connect with your audience.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-900">
                    Schedule a Design Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Design workspace" className="rounded-lg shadow-2xl border border-blue-700/30 object-cover w-full" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>;
};
export default DesignPage;
