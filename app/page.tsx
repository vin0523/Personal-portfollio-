'use client';

import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaTools, FaCode, FaMicrochip, FaLayerGroup, FaLinux } from "react-icons/fa"; // Icons for flair
import { Mail, Linkedin, Github } from "lucide-react";



export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);
  

  const experiences = [
    {
      title: "Test Automation Engineer · 2022 – 2024",
      subtitle: "MBition (Mercedes-Benz Innovation Lab)",
      description:
        "Worked on ECU validation, automated test frameworks, camera system testing, and ISO 26262 safety-compliant workflows.",
      details: [
        "Developed automated test cases using Python, Robot Framework, and CANoe.",
        "Validated ECU software for rear-view camera systems.",
        "Integrated test automation in CI/CD pipelines using GitLab.",
        "Executed manual and automated software testing, including feature testing, regression testing, and system testing.",
        "Utilized Docker for containerizing test environments, improving deployment consistency and reducing environment-related issues.",
        "Worked in a Linux-based test environment, including using shell commands for test execution, log analysis,and environment configuration.",
      ],
    },
    {
      title: "Software Test Engineer · 02/2024 – 01/2025",
      subtitle: "MBition (Mercedes-Benz Innovation Lab)",
      description:
        "Supported software-based issue reproduction, simulation, debugging, and automated test framework development for vehicle functions and infotainment.",
      details: [
        "Supported developers in VCPU simulation, Ethernet firmware debugging, QNX, and RichOS flashing.",
        "Simulated vehicle function applications on the Civic architecture fully in software.",
        "Developed automated test scripts using CAPL and XML scripting.",
        "Analyzed Ethernet and DLT traces for performance and reliability.",
        "Developed test framework for measuring KPIs of Rear View Camera (RVC).",
        "Conducted software testing using DOIP and Ethernet logging interfaces.",
        "Tested core vehicle features and infotainment modules in software environments.",
        "Created testing scripts, documentation, and handled ticketing and verification.",
        "Performed feature testing, verification, regression, and exploratory testing.",
        "Worked in Linux-based test environments for backend service stability verification.",
      ],
    },
  ];

  const education = [
    {
      title: "M.Eng Electrical Engineering and Embedded Systems",
      subtitle: "Hochschule Ravensburg-Weingarten, Germany",
      duration: "02/2022 – 2024",
      logo: "/rwu.png",
      details: [
        "Key Courses: Lidar/Radar SoC, Advanced Signal Processing",
        "Embedded Computing, Control Systems, OpenCV",
        "Focus: Autonomous Driving & System Integration",
      ],
    },
    {
      title: "B.Tech in Electrical Engineering",
      subtitle: "GITAM University, India",
      duration: "07/2018 – 04/2022",
      logo: "/gitam.png",
      details: [
        "Specialization: Robotics, Automation, IoT, Embedded Systems",
        "Hands-on Projects in Control Systems & Mechatronics",
      ],
    },
  ];

  const projects = [
    {
      title: "Object Detection Using Radar",
      subtitle: "09/2022 – 01/2023 | Texas Instruments MMWCAS-RF-EVM",
      description:
        "Designed a radar-based system to detect dynamic objects using velocity data and clustering techniques.",
      details: [
        "Worked on MMWCAS-RF-EVM radar with real-time data streaming.",
        "Isolated dynamic objects from static points based on velocity information.",
        "Discovered moving point clusters and calculated their centroids.",
        "Defined threshold logic to compare cluster centers with bounding box centers.",
      ],
    },
    {
      title: "Camera Calibration and Depth Estimation",
      subtitle: "03/2023 – 07/2023",
      description:
        "Enhanced depth accuracy and image quality through precision camera calibration.",
      details: [
        "Calibrated camera to obtain intrinsic parameters including focal length and lens distortion.",
        "Produced distortion coefficients and supplied comparative calibration images.",
        "Calculated intrinsic matrix to suppress noise and improve visual clarity.",
      ],
    },
    {
      title: "Comparison of Lidar Sensors",
      subtitle: "09/2022 – 01/2023 | Blickfeld & Velodyne",
      description:
        "Compared Lidar performance using point cloud analysis and spatial bounding boxes.",
      details: [
        "Analyzed point clouds from Blickfeld and Velodyne sensors.",
        "Marked bounding boxes and evaluated point density inside each region.",
        "Gained practical experience in 3D data interpretation and sensor evaluation.",
      ],
    },
    {
      title: "Coordinate Controlled Pick and Place Robot",
      subtitle: "03/2022 – 06/2022",
      description:
        "Built an intelligent robotic arm guided by pathfinding algorithms for efficient object manipulation.",
      details: [
        "Implemented A* algorithm to compute optimal pick-and-place paths.",
        "Engineered motion coordination for accurate object handling.",
        "Achieved project goals with reliable autonomous task execution.",
      ],
    },
  ];
  

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen font-sans">
      <Head>
        <title>Vinay Bommanahalli Umesha | Embedded Systems Portfolio</title>
      </Head>
      <header className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
  {/* Navigation */}
  <nav className="hidden md:flex space-x-6">
    <a href="#about" className="hover:text-gray-300">About</a>
    <a href="#skills" className="hover:text-gray-300">Skills</a>
    <a href="#projects" className="hover:text-gray-300">Projects</a>
  
  </nav>

  {/* Socials + Resume */}
  <div className="flex items-center space-x-4">
    <a
      href="https://www.linkedin.com/in/vinay-gowda-900a88216"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400"
    >
      <Linkedin className="w-5 h-5" />
    </a>
    <a
      href="mailto:vgowda002@gmail.com"
      className="hover:text-red-400"
    >
      <Mail className="w-5 h-5" />
    </a>
    <a
      href="https://github.com/vin0523"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300"
    >
      <Github className="w-5 h-5" />
    </a>

    <a
      href="/Vinay.pdf"
      target="_blank"
      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
    >
      Resume
    </a>
  </div>
</header>



      {/* Hero Section */}
      
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background.png" // Place your image in the /public folder
            alt="Background"
            fill
            className="object-cover opacity-20 blur-sm"
            priority
          />
        </div>

        {/* Foreground Content */}
        <Image
          src="/vinay.png"
          alt="Vinay Bommanahalli Umesha"
          width={160}
          height={160}
          className="w-72 h-[30rem] object-cover rounded-xl border-none shadow-lg brightness-90 contrast-90"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I&apos;m Vinay
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-xl md:text-2xl"
        >
          Embedded Systems Engineer & Innovator
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="..."></section>
      <section className="py-16 px-4 md:px-20 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-lg text-gray-300 text-justify leading-relaxed">
          
          I&apos;m an Embedded Systems Engineer with hands-on experience in ECU validation, software testing, and automation at MBition (Mercedes-Benz Innovation Lab). I specialize in Python, C++, CANoe, Robot Framework, and Model-Based Design. Passionate about autonomous systems, I&apos;ve led projects involving camera calibration, radar/lidar analysis.
        </p>
        <p className="text-lg text-gray-300 text-justify leading-relaxed">
          I hold a Master&apos;s degree in Embedded Systems from RWU and a Bachelor&apos;s in Electrical Engineering from Gitam University. I&apos;m driven by curiosity, purpose, and the desire to bridge the real and digital worlds through reliable embedded solutions.I solve problems in creative ways , I have learned the importance of applying classical strategies to modern-day projects.
        </p>
      </section>
        
{/* Skillset Section */}
<section id="skills" className="..."></section>
  <section className="py-16 px-4 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

  <h2 className="text-4xl font-bold mb-12 text-center tracking-wide">Skillset</h2>
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        category: "Programming Languages",
        icon: <FaCode className="text-pink-500" />,
        skills: ["Python", "C++", "MATLAB", "CAPL", "PCB Design (KiCAD)"],
      },
      {
        category: "Tools & Frameworks",
        icon: <FaTools className="text-green-400" />,
        skills: [
          "Robot Framework",
          "CANoe",
          "OpenCV",
          "Rest-API",
          "Postman",
          "ET-Framework",
          "PuTTY",
          "WinSCP",
          "On/Off-board Diagnostic Tools",
        ],
      },
      {
        category: "Software Development",
        icon: <FaCode className="text-cyan-300" />,
        skills: ["Git", "GitHub", "GitLab", "AUTOSAR"],
      },
      {
        category: "CI/CD & DevOps",
        icon: <FaLayerGroup className="text-yellow-300" />,
        skills: ["GitLab CI", "Jenkins", "Docker"],
      },
      {
        category: "Hardware",
        icon: <FaMicrochip className="text-indigo-400" />,
        skills: ["Microcontrollers", "Radar", "Lidar", "FPGAs"],
      },
      {
        category: "Operating Systems",
        icon: <FaLinux className="text-red-400" />,
        skills: ["Windows", "Linux"],
      },
      {
        category: "Methodologies",
        icon: <FaLayerGroup className="text-teal-300" />,
        skills: ["Agile (Scrum, Kanban)", "V-Model"],
      },
      {
        category: "Collaboration & Monitoring",
        icon: <FaTools className="text-purple-300" />,
        skills: ["Jira", "Confluence", "Grafana"],
      },
    ].map((group, idx) => (
      <div
        key={idx}
        className="bg-black/30 border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-[1.02] hover:rotate-[0.5deg] transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
          {group.icon}
          {group.category}
        </h3>
        <ul className="list-none space-y-2">
          {group.skills.map((skill, i) => (
            <li
              key={i}
              className="text-sm text-gray-300 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

      {/* Experience Section */}
      <section className="py-16 px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-10 text-center"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              layout={expandedCard === idx}
              transition={{ layout: { duration: 0.6, type: "spring" } }}
              onClick={() => setExpandedCard(idx)}
              className={`rounded-2xl p-6 bg-white/10 border border-white/20 cursor-pointer shadow-xl transition-all duration-300 ease-in-out hover:bg-white/20 hover:shadow-2xl flex flex-col md:flex-row items-start md:items-center`}
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <Image
                src="/mbition.png"
                alt="MBition Logo"
                width={64} // or actual width
                height={64} // or actual height
                className="object-contain"
              />
              </div>

              <div className="flex-1">
                <motion.h3 className="text-2xl font-bold mb-1 text-white">{exp.title}</motion.h3>
                <motion.p className="text-lg mb-3 text-gray-300">{exp.subtitle}</motion.p>

                {expandedCard === idx && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {expandedCard !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setExpandedCard(null)}
            >
              <motion.div
                layoutId={`card-${expandedCard}`}
                className="bg-gray-900 rounded-2xl max-w-xl p-8 text-white relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setExpandedCard(null)}
                  className="absolute top-4 right-4 text-white text-2xl"
                  aria-label="Close"
                >
                  &times;
                </button>
                <h3 className="text-3xl font-bold mb-2">{experiences[expandedCard].title}</h3>
                <p className="text-lg mb-4">{experiences[expandedCard].subtitle}</p>
                <p className="mb-4">{experiences[expandedCard].description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {experiences[expandedCard].details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 md:px-20 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-10 text-center text-white"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              layout
              transition={{ layout: { duration: 0.6, type: "spring" } }}
              onClick={() => setExpandedEducation(idx)}
              className="cursor-pointer rounded-2xl border border-white/20 p-6 bg-white/10 shadow-lg hover:bg-white/20 hover:shadow-xl flex flex-col items-center"
            >
              <Image
                src={edu.logo}
                alt={`${edu.subtitle} Logo`}
                width={80}
                height={80}
                className="mb-4"
                priority
              />
              <h3 className="text-2xl font-bold mb-1 text-white">{edu.title}</h3>
              <p className="text-gray-300 mb-2">{edu.subtitle}</p>
              <p className="text-gray-400 mb-4">{edu.duration}</p>

              {expandedEducation === idx && (
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="..."></section>
      <section className="py-16 px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-10 text-center"
        >
          Projects
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layout={expandedCard === idx}
              transition={{ layout: { duration: 0.6, type: "spring" } }}
              onClick={() =>
                setExpandedProject(expandedProject === idx ? null : idx)
              }
              className="cursor-pointer rounded-2xl border border-white/20 p-6 bg-white/10 shadow-lg hover:bg-white/20 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-2">{project.subtitle}</p>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {expandedProject === idx && (
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-black text-gray-400">
        <p>
          &copy; 2025 Vinay Bommanahalli Umesha{" "}
          <a
            href="mailto:vgowda002@gmail.com"
            className="underline hover:text-white"
          >
          
          </a>
        </p>
      </footer>
    </div>
  );
}