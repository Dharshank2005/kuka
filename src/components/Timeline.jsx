import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, Users, Lightbulb, PresentationIcon, Award } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      date: "March 15, 2025",
      title: "Registration Opens",
      description: "Start forming your teams and register for the hackathon.",
      icon: <CalendarDays size={24} />,
      color: "bg-primary-600"
    },
    {
      date: "April 10, 2025",
      title: "Team Formation Deadline",
      description: "Final date to complete your team registration and submission of preliminary ideas.",
      icon: <Users size={24} />,
      color: "bg-secondary-600"
    },
    {
      date: "April 25-27, 2025",
      title: "Hackathon Weekend",
      description: "The main event! 48 hours of intense innovation, coding, and development.",
      icon: <Lightbulb size={24} />,
      color: "bg-accent-500"
    },
    {
      date: "April 27, 2025",
      title: "Project Presentations",
      description: "Present your solution to our panel of judges from KUKA and industry experts.",
      icon: <PresentationIcon size={24} />,
      color: "bg-primary-600"
    },
    {
      date: "April 30, 2025",
      title: "Awards Ceremony",
      description: "Winners announcement and prize distribution.",
      icon: <Award size={24} />,
      color: "bg-secondary-600"
    }
  ];

  return (
    <section id="timeline" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Event Timeline</h2>
          <p>Mark your calendar for these important dates</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              className="flex relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Line */}
              {index !== timelineEvents.length - 1 && (
                <div className="absolute left-6 top-9 bottom-0 w-0.5 bg-gray-200"></div>
              )}
              
              {/* Icon */}
              <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white ${event.color} shrink-0`}>
                {event.icon}
              </div>
              
              {/* Content */}
              <div className="ml-8 pb-12">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
                  {event.date}
                </span>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
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
            All participants will receive detailed instructions and access to resources upon registration.
          </p>
          <a href="#register" className="btn btn-primary">
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;