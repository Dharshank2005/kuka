import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Lightbulb, Trophy, Users } from 'lucide-react';
import kukaImage from '../assets/robo.JPG'; // Replace with your actual image path

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Lightbulb size={32} className="text-primary-600" />,
      title: 'Innovation',
      description: 'Explore new concepts and develop cutting-edge solutions in the field of robotics and automation.'
    },
    {
      icon: <Cpu size={32} className="text-primary-600" />,
      title: 'Technology',
      description: 'Work with state-of-the-art KUKA robotics systems and industrial automation technologies.'
    },
    {
      icon: <Users size={32} className="text-primary-600" />,
      title: 'Collaboration',
      description: 'Connect with like-minded tech enthusiasts, industry experts, and mentors.'
    },
    {
      icon: <Trophy size={32} className="text-primary-600" />,
      title: 'Recognition',
      description: 'Showcase your skills and win exciting prizes and potential job opportunities.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About The Hackathon</h2>
          <p>Join us for an exciting challenge to revolutionize the future of industrial automation and robotics</p>
        </motion.div>

        {/* Updated Section with Text on Left and Image on Right */}
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 mb-6">
              The KUKA Hackathon Challenge brings together brilliant minds to solve real-world problems in industrial automation and robotics. Participants will work on innovative solutions for the manufacturing industry, leveraging KUKA's advanced robotics technologies.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're a student, professional, or robotics enthusiast, this hackathon offers a platform to showcase your skills, learn from industry experts, and potentially revolutionize the future of automation.
            </p>
          </div>

          {/* Image content */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={kukaImage}
              alt="KUKA Robotics"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="card p-6 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white rounded-xl p-8 mt-16 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to take on the challenge?</h3>
              <p className="text-gray-100">
                Join forces with talented individuals, receive mentorship from industry experts, and create innovative solutions!
              </p>
            </div>
            <a href="#register" className="btn bg-white text-primary-800 hover:bg-gray-100 shadow-lg hover:shadow-xl">
              Register Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
