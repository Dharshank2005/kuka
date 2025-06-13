"use client"
import { motion } from "framer-motion"
import { ChevronDown, Bot, LightbulbIcon, Code, Users, Cpu, Zap, BrainCircuit } from "lucide-react"

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.6,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-accent-500/20 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary-500/20 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto container-padding z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-accent-600 text-white rounded-full"
              variants={itemVariants}
            >
              Join the Innovation Challenge
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              KUKA Hackathon <br />
              <span className="text-accent-400">Challenge 2025</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg" variants={itemVariants}>
              Innovate and develop cutting-edge solutions for the future of industrial automation and robotics.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#register"
                className="btn bg-accent-500 hover:bg-accent-600 text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.a>
              <motion.a
                href="#challenges"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Challenges
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative flex justify-center md:justify-end md:pr-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              {/* Background geometric pattern */}
              <div className="absolute inset-0">
                {/* Circuit-like grid pattern */}
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Circuit lines */}
                  <path
                    d="M50 200 L150 200 L150 100 L250 100"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                  <path
                    d="M200 300 L300 300 L300 200 L350 200"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                  <path
                    d="M100 350 L200 350 L200 250"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Central robot icon with enhanced design */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-accent-400/30 rounded-full blur-xl scale-150"></div>
                  <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white p-6 rounded-full shadow-2xl border-2 border-accent-400/50">
                    <Bot size={48} />
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating tech icons - positioned in a perfect circle around center */}
              {/* Top */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translateY(-100px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <LightbulbIcon size={20} />
                </motion.div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translate(70px, -70px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-2.5 rounded-lg shadow-lg"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <BrainCircuit size={18} />
                </motion.div>
              </motion.div>

              {/* Right */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translateX(100px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, -2.5, 0] }}
                  transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Cpu size={20} />
                </motion.div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translate(70px, 70px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-orange-400 to-orange-500 text-white p-2.5 rounded-lg shadow-lg"
                  animate={{ y: [0, -1.5, 0] }}
                  transition={{ duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Zap size={18} />
                </motion.div>
              </motion.div>

              {/* Bottom */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translateY(100px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-green-400 to-green-500 text-white p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, -2.8, 0] }}
                  transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Code size={20} />
                </motion.div>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translate(-70px, 70px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-red-400 to-red-500 text-white p-2.5 rounded-lg shadow-lg"
                  animate={{ y: [0, -2.2, 0] }}
                  transition={{ duration: 6.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Zap size={18} />
                </motion.div>
              </motion.div>

              {/* Left */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translateX(-100px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-purple-400 to-purple-500 text-white p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, -1.8, 0] }}
                  transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Users size={20} />
                </motion.div>
              </motion.div>

              {/* Top Left */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translate(-70px, -70px)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-indigo-400 to-indigo-500 text-white p-2.5 rounded-lg shadow-lg"
                  animate={{ y: [0, -1.2, 0] }}
                  transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Code size={18} />
                </motion.div>
              </motion.div>

              {/* Decorative geometric shapes */}
              <motion.div
                className="absolute top-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                <div className="w-2 h-2 bg-accent-400 rotate-45"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 2.4, duration: 0.8 }}
              >
                <div className="w-3 h-3 border-2 border-accent-400 rounded-full"></div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 right-1/3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.8 }}
              >
                <div className="w-1 h-6 bg-gradient-to-b from-accent-400 to-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 left-1/3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 2.8, duration: 0.8 }}
              >
                <div className="w-6 h-1 bg-gradient-to-r from-accent-400 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a
            href="#about"
            className="text-white flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="mb-2">Scroll Down</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero