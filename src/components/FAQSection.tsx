
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import ScrollReveal from './ScrollReveal';

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
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-webtah-blue mb-2">Support</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-webtah-blue">Questions</span></h2>
            <p className="text-lg text-webtah-text-secondary max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df" 
                alt="Support Specialist" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="lg:col-span-3">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-webtah-text-secondary pb-4">
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
