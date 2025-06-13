import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, AlertCircle, Users, Mail, User, Building, Phone, FileText } from 'lucide-react';

const Registration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    teamName: '',
    teamSize: '',
    challengeTrack: '',
    experience: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName || !formData.email || !formData.teamName || !formData.challengeTrack) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill all required fields.'
      });
      return;
    }
    
    // In a real implementation, you would submit to a backend here
    // For now, just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Registration successful! You will receive a confirmation email shortly.'
    });
    
    // Reset form after successful submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      teamName: '',
      teamSize: '',
      challengeTrack: '',
      experience: '',
    });
  };

  return (
    <section id="register" className="section-padding bg-gray-50" ref={ref}>
      <div className="container mx-auto container-padding">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Registration</h2>
          <p>Sign up your team for the KUKA Hackathon Challenge</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <motion.div 
                className="bg-gradient-to-br from-primary-700 to-primary-900 text-white p-8 lg:p-12"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">Why Participate?</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-1 shrink-0" />
                    <p>Work with cutting-edge KUKA robotics technology</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-1 shrink-0" />
                    <p>Network with industry professionals and like-minded innovators</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-1 shrink-0" />
                    <p>Win exciting prizes and potential job opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-1 shrink-0" />
                    <p>Enhance your portfolio with real-world problem-solving experience</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-1 shrink-0" />
                    <p>Learn from experienced mentors and industry experts</p>
                  </li>
                </ul>
                
                <div className="mt-12">
                  <h4 className="text-xl font-semibold mb-3">Registration Deadline</h4>
                  <p>April 5, 2025 at 11:59 PM</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-8 lg:p-12 lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {formStatus.submitted ? (
                  <div className={`rounded-lg p-6 mb-6 ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    <div className="flex items-start">
                      {formStatus.success ? 
                        <CheckCircle size={24} className="mr-3 shrink-0" /> :
                        <AlertCircle size={24} className="mr-3 shrink-0" />
                      }
                      <div>
                        <h4 className="font-semibold text-lg">
                          {formStatus.success ? 'Registration Successful!' : 'Registration Error'}
                        </h4>
                        <p className="mt-1">{formStatus.message}</p>
                        {formStatus.success && (
                          <button 
                            className="mt-4 text-primary-600 font-medium hover:text-primary-700"
                            onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                          >
                            Register Another Team
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="fullName">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <User size={18} />
                          </div>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Mail size={18} />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Phone size={18} />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="organization">
                          Organization/Institution
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Building size={18} />
                          </div>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your organization or institution"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="teamName">
                          Team Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Users size={18} />
                          </div>
                          <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your team name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium" htmlFor="teamSize">
                          Team Size
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select team size</option>
                          <option value="1">Individual (1 person)</option>
                          <option value="2-3">Small team (2-3 people)</option>
                          <option value="4-5">Medium team (4-5 people)</option>
                          <option value="6+">Large team (6+ people)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="challengeTrack">
                        Challenge Track *
                      </label>
                      <select
                        id="challengeTrack"
                        name="challengeTrack"
                        value={formData.challengeTrack}
                        onChange={handleInputChange}
                        className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select a challenge track</option>
                        <option value="industrial-automation">Industrial Automation Solutions</option>
                        <option value="human-robot">Human-Robot Collaboration</option>
                        <option value="ai-robotics">AI-Powered Robotics Applications</option>
                        <option value="iot-connectivity">IoT and Connectivity Solutions</option>
                        <option value="smart-manufacturing">Smart Manufacturing Technologies</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="experience">
                        Relevant Experience
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 text-gray-500">
                          <FileText size={18} />
                        </div>
                        <textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Briefly describe your team's relevant experience or background"
                          rows="4"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button type="submit" className="btn btn-primary w-full">
                        Register Your Team
                      </button>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        * Required fields
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;