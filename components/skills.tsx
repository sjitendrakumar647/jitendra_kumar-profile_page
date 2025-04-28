"use client"

import { motion } from "framer-motion"
import { Code, Database, Layers } from "lucide-react"
import { useAnimateInView } from "@/hooks/use-animation"

// icon
import { FaNodeJs, FaReact,FaJava,FaPython,FaPhp,FaGithub,FaHtml5,FaCss3,FaBootstrap  } from "react-icons/fa6";
import { SiExpress, SiMongodb,SiMysql,SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";



export function Skills() {
  const { ref, controls, variants } = useAnimateInView()

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="text-indigo-400" size={24} />,
      items: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "SAP ABAP", level: 75 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="text-indigo-400" size={24} />,
      items: [
        { name: "MySQL", level: 90 },
        { name: "Oracle", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="text-indigo-400" size={24} />,
      items: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Three.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Bootstrap", level: 70 },
      ],
    },
  ]
  const technologies = [
    {name: "React", icon: <FaReact className="text-sky-400" size={100} />},
    {name: "Node.js", icon: <FaNodeJs className="text-lime-400" size={100} />},
    {name: "MongoDB", icon: <SiMongodb className="text-green-500" size={100} />},
    {name: "Express", icon: <SiExpress className="text-yellow-500" size={100} />},
    {name: "Java", icon: <FaJava  className="text-indigo-400" size={100} />},
    {name: "Python", icon: <FaPython  className="text-indigo-500" size={100} />},
    {name: "PHP", icon: <FaPhp className="text-indigo-800" size={100} />},
    {name: "MySQL", icon: <SiMysql className="text-indigo-400" size={100} />},
    {name: "Git", icon: <FaGithub className="text-grey-950" size={100} />},
    // {name: "Docker", icon: <FaReact className="text-indigo-400" size={24} />},
    {name: "HTML5", icon: <FaHtml5 className="text-red-600" size={100} />},
    {name: "CSS3", icon: <FaCss3 className="text-blue-700" size={100} />},
    {name: "javascript", icon: <IoLogoJavascript  className="text-yellow-300" size={100} />},
    {name: "Bootstrap", icon: <FaBootstrap  className="text-indigo-600" size={100} />},
    {name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" size={100} />},

  ];

  return (
    <section id="skills" className="py-20 p-0 m-0 bg-background">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              // variants={itemVariants}
              className="bg-indigo-200/20 p-6 rounded-xl border border-gray-700 hover:border-indigo-500/50 hover:bg-indigo-200/40 hover:shadow-sm transition-all hover:-translate-y-0.5 duration-300"
            >
              <div className="flex items-center mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold ml-2">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-fuchsia-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-400 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
          >
          
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.00 }}
              viewport={{ once: true }}
              whileHover={{ y: -7, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-4 bg-foreground/5 rounded-lg border border-foreground/10 hover:border-purple-500/50 transition-all shadow-md hover:shadow-lg "
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                
                {tech.icon}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

