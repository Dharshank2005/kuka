import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who can participate in the KUKA Hackathon?",
      answer: "The hackathon is open to students, professionals, and robotics enthusiasts aged 18 and above. Participants can form teams of up to 5 members with diverse skills and backgrounds. We encourage interdisciplinary teams with expertise in programming, robotics, design, and business."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the KUKA Hackathon Challenge is completely free of charge. We want to make this opportunity accessible to all talented individuals interested in robotics and automation innovation."
    },
    {
      question: "Do I need to have a team to register?",
      answer: "While team participation is encouraged, individual registrations are also welcome. We'll provide a platform for individual participants to connect and form teams before the event. Teams can have 1-5 members."
    },
    {
      question: "What resources will be provided to participants?",
      answer: "Participants will receive access to KUKA robotics APIs, simulation environments, technical documentation, and mentorship from industry experts. We'll also provide workshops and training sessions prior to the hackathon to help you get familiar with the technologies."
    },
    {
      question: "Will we have access to physical KUKA robots?",
      answer: "Select teams working on certain challenges will have supervised access to physical KUKA robots for testing their solutions. All teams will have access to accurate simulation environments for development."
    },
    {
      question: "What are the evaluation criteria?",
      answer: "Projects will be evaluated based on innovation, technical implementation, practical applicability, business potential, presentation quality, and adherence to the chosen challenge track's objectives."
    },
    {
      question: "What are the prizes?",
      answer: "The hackathon features prizes worth over $20,000, including cash awards, internship opportunities, KUKA robotics kits, and the chance to further develop your solution with KUKA's innovation team. Specific prize details will be announced closer to the event."
    },
    {
      question: "Will there be support available during the hackathon?",
      answer: "Yes, our team of technical mentors and industry experts will be available throughout the event to provide guidance, answer questions, and help you overcome challenges."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about the KUKA Hackathon Challenge</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border-b border-gray-200 py-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full flex items-start justify-between focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-left text-gray-800">{faq.question}</h3>
                <span className="text-primary-600 ml-4 flex-shrink-0 pt-0.5">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <motion.div 
                className="mt-2 overflow-hidden"
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 pt-2">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Feel free to reach out to us.
          </p>
          <a href="mailto:hackathon@kuka-innovation.com" className="btn btn-outline">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;