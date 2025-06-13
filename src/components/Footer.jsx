import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" className="mr-2">
                <rect width="40" height="40" rx="8" fill="#0d47a1"/>
                <path d="M9 20L15 14M9 20L15 26M9 20H25M31 20C31 25.5228 26.5228 30 21 30C19.0429 30 17.2051 29.4772 15.6271 28.5715" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 10C26.5228 10 31 14.4772 31 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-bold font-heading text-white">KUKA Hackathon</span>
            </div>
            <p className="mb-4">
              Join the revolution in industrial automation and robotics. Innovate. Collaborate. Transform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Challenges</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={20} className="mr-3 shrink-0 text-gray-400" />
                <span>123 Innovation Drive, Tech Park, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 shrink-0 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 shrink-0 text-gray-400" />
                <a href="mailto:hackathon@kuka-innovation.com" className="hover:text-white transition-colors">
                  hackathon@kuka-innovation.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Stay updated with the latest news and updates about the hackathon.
            </p>
            <form className="space-y-2">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-12 text-center">
          <p>© {currentYear} KUKA Hackathon Challenge. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;