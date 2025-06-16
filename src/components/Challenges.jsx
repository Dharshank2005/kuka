import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Bot, Factory, BrainCircuit, Wifi, X, Check } from 'lucide-react';
import workImage from '../assets/work.JPG'; // ✅ Make sure this path is correct

const challenges = [
  {
    id: 1,
    title: "Industrial Automation Solutions",
    icon: <Factory size={40} />,
    description: "Develop innovative industrial automation solutions that optimize manufacturing processes, reduce downtime, and enhance production efficiency. Create systems that can adapt to different manufacturing scenarios.",
    details: [
      "Identify common pain points in manufacturing workflows",
      "Design solutions that integrate with existing industrial setups",
      "Implement predictive maintenance capabilities",
      "Create user-friendly interfaces for operators",
      "Focus on scalable solutions that can be applied across different industries"
    ],
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 2,
    title: "Human-Robot Collaboration",
    icon: <Bot size={40} />,
    description: "Design solutions that enhance collaboration between humans and robots in shared workspaces. Focus on safety, intuitive interfaces, and effective communication between human operators and robotic systems.",
    details: [
      "Develop advanced safety protocols for shared workspaces",
      "Create intuitive gesture or voice control interfaces",
      "Implement visual cues for robot intentions and actions",
      "Design systems that adapt to human behavior and preferences",
      "Focus on improving efficiency in collaborative tasks"
    ],
    color: "from-teal-500 to-teal-700"
  },
  {
    id: 3,
    title: "AI-Powered Robotics Applications",
    icon: <BrainCircuit size={40} />,
    description: "Implement AI and machine learning to create smart robotic applications that can learn from their environment, make decisions, and improve over time. Address real-world challenges through intelligent automation.",
    details: [
      "Develop computer vision systems for object recognition and manipulation",
      "Implement reinforcement learning for adaptive robot behavior",
      "Create predictive algorithms for process optimization",
      "Design fault detection and self-recovery systems",
      "Focus on practical applications with measurable impact"
    ],
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 4,
    title: "IoT and Connectivity Solutions",
    icon: <Wifi size={40} />,
    description: "Create IoT solutions that enhance connectivity between robotic systems and other devices or platforms. Focus on data exchange, remote operations, and integration with existing industrial systems.",
    details: [
      "Develop robust communication protocols for industrial environments",
      "Create cloud-based monitoring and control systems",
      "Implement secure data exchange between robots and other systems",
      "Design solutions for remote operation and troubleshooting",
      "Integrate with existing industrial IoT platforms and standards"
    ],
    color: "from-orange-500 to-orange-700"
  },
];

const Challenges = () => {
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="challenges" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding" ref={ref}>
        <div className="flex flex-col md:flex-row items-start gap-10">
          
          {/* Left Image Side */}
          <div className="w-full md:w-1/2">
            <img 
              src={workImage} 
              alt="Workstation" 
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </div>

          {/* Right Content Side */}
          <div className="w-full md:w-1/2">
            <motion.div 
              className="section-title mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold">Hackathon Challenges</h2>
              <p className="text-gray-600 mt-2">Choose from these exciting challenge tracks and push the boundaries of what's possible</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[600px] pr-2"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {challenges.map((challenge) => (
                <motion.div 
                  key={challenge.id}
                  className="card overflow-hidden group cursor-pointer border border-gray-200 rounded-lg bg-white shadow-sm"
                  variants={cardVariants}
                  onClick={() => setActiveChallenge(challenge)}
                  whileHover={{ y: -5 }}
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${challenge.color}`}></div>
                  <div className="p-4 flex flex-col h-full">
                    <div className="text-primary-600 mb-2">{challenge.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{challenge.description}</p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 text-sm">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Challenge Detail Modal */}
        {activeChallenge && (
          <motion.div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveChallenge(null)}
          >
            <motion.div 
              className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${activeChallenge.color}`}></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-primary-600 mr-4">{activeChallenge.icon}</span>
                    <h3 className="text-2xl font-bold">{activeChallenge.title}</h3>
                  </div>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setActiveChallenge(null)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-gray-700 mb-6">{activeChallenge.description}</p>
                
                <h4 className="text-lg font-semibold mb-3">Key Focus Areas:</h4>
                <ul className="space-y-2 mb-6">
                  {activeChallenge.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1"><Check size={16} /></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Judging Criteria</h4>
                  <p className="text-gray-700">Solutions will be judged based on innovation, technical implementation, practical applicability, scalability, and presentation quality.</p>
                </div>
                
                <div className="mt-8 text-right">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setActiveChallenge(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Challenges;
