
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <HeroSection 
        title="Contact Us" 
        subtitle="Ready to secure your future and grow your business online?"
        ctaText="Get in Touch"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
                <p className="text-webtah-text-secondary mb-8">
                  Whether you need cybersecurity services, a new website, or digital marketing help, our team is ready to assist you. Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <MapPin size={24} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Office</h3>
                      <p className="text-webtah-text-secondary">71-75 Shelton Street, Covent Garden,</p>
                      <p className="text-webtah-text-secondary">London, WC2H 9JQ, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Mail size={24} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <a href="mailto:support@webtah.com" className="text-webtah-blue-dark hover:underline">support@webtah.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Phone size={24} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <a href="tel:+447587814969" className="text-webtah-blue-dark hover:underline">+44 7587 814969</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">How We Can Help</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-webtah-blue-dark rounded-full mr-2"></span>
                      <span>Cybersecurity consulting and assessments</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-webtah-blue-dark rounded-full mr-2"></span>
                      <span>Website design and development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-webtah-blue-dark rounded-full mr-2"></span>
                      <span>Web application development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-webtah-blue-dark rounded-full mr-2"></span>
                      <span>Digital marketing and SEO services</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-webtah-blue-dark rounded-full mr-2"></span>
                      <span>Free website and security audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-lg shadow-soft p-6">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-webtah-lavender">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.12472908421928164!3d51.51477667963643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22a81f067d92f5de!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sus!4v1625689073006!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Webtah Office Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
