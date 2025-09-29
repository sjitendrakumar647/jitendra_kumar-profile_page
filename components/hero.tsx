"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export function Hero() {
  const handleScroll = () => {
    const el = document.getElementById("projects")
    el?.scrollIntoView({ behavior: "smooth" })
  }
  const Scroll = () => {
    const el = document.getElementById("work")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
    >
      {/* Animated Blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-60 animate-blob"
          animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"
          animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000"
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </motion.div>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl px-8 py-12 max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 rounded-full blur-2xl opacity-80 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <img
              src="./avatar.png"
              alt="Profile"
              className="relative w-36 h-36 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </motion.div>

        {/* Animated Name & Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-white/80 mb-2 tracking-wide"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-lg"
        >
          Jitendra Kumar
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "Software Developer",
              1200,
              "Java Developer",
              1200,
              "Spring Boot Developer",
              1200,
              "Database Developer",
              1200,
              "MERN Stack Developer",
              1200,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="text-white/90"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white/80 max-w-xl mb-8 text-lg text-center"
        >
          A passionate MCA graduate and fresher software engineer with expertise in Java, Python, PHP, and MERN stack
          development. Building innovative solutions to solve real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-6"
        >
          <Button
            onClick={handleScroll}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group shadow-lg shadow-pink-500/20"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Me
            </Button>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex gap-6 mt-2"
        >
          <a
            href="#"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors shadow-lg"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-white" />
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors shadow-lg"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-white" />
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Arrow Down */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer bg-white/20 rounded-full p-3 shadow-lg"
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={Scroll}
      >
        <ArrowDown className="h-8 w-8 text-pink-400" />
      </motion.div>

      {/* Animated Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-7 h-12 rounded-full border-2 border-white/40 flex justify-center p-1 bg-white/10">
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 rounded-full bg-white/70"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}