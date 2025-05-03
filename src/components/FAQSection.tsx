
import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import ScrollReveal from './ScrollReveal';
import { Shield, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive cybersecurity services including penetration testing, vulnerability assessment, red teaming, and incident response, as well as web development services including website design, web application development, and digital marketing."
    },
    {
      question: "How can I get a free audit?",
      answer: "You can request a free audit by filling out the contact form on our website or by calling us directly. We'll schedule a convenient time to assess your current security posture or website performance."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support for all our clients. Our team is always available to address any security concerns or technical issues that may arise."
    },
    {
      question: "What certifications do your security experts have?",
      answer: "Our security experts hold various certifications including OSCP, CEH, CISSP, PNPT, and CREST, ensuring that you receive the highest level of expertise and service."
    },
    {
      question: "How do you ensure the security of websites you develop?",
      answer: "We implement security best practices throughout the development process, including secure coding, regular vulnerability scanning, and penetration testing. Our developers are trained in secure coding practices and follow OWASP guidelines."
    }
  ];

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
            <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-webtah-blue mb-2">Support</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-webtah-blue">Questions</span></h2>
            <p className="text-lg text-webtah-text-secondary max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 relative">
              <div className="sticky top-24">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573497491765-dccce02b29df" 
                    alt="Support Specialist" 
                    className="rounded-2xl shadow-lg w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-xl transform rotate-3">
                    <Shield className="w-8 h-8" />
                  </div>
                </div>
                <div className="mt-10 p-6 bg-white rounded-2xl shadow-md">
                  <h3 className="font-bold text-lg mb-3">Still have questions?</h3>
                  <p className="text-gray-600 mb-4">Our team is ready to assist you with any inquiries about our cybersecurity or development services.</p>
                  <a href="/contact" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                    Contact Us <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Accordion 
                type="single" 
                collapsible 
                className="w-full space-y-4"
                value={expandedItem || undefined}
                onValueChange={(value) => setExpandedItem(value)}
              >
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-lg font-semibold py-5 px-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-webtah-text-secondary px-6 pb-5 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
