'use client';

import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";


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
      logo: "/rwu.png", // Add this in /public folder
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
      logo: "/gitam.png", // Add this in /public folder
      details: [
        "Specialization: Robotics, Automation, IoT, Embedded Systems",
        "Hands-on Projects in Control Systems & Mechatronics",
      ],
    },
  ];

  const projects = [
    {
      title: "CAN-to-LoRa Gateway",
      subtitle: "Telematics System for Off-Road Vehicles",
      description:
        "Designed and built a CAN-to-LoRa gateway that transmits vehicle CAN data over long-range LoRa links.",
      details: [
        "Built hardware using STM32 and LoRa modules.",
        "Enabled long-distance telemetry and over-the-air updates.",
        "Used Python and Node-RED for dashboard visualization.",
      ],
    },
    {
      title: "Rear View Camera Test Automation",
      subtitle: "ISO 26262 Compliant ECU Validation",
      description:
        "Automated testing of rear-view camera ECUs with market-specific test suites.",
      details: [
        "Used Python, Robot Framework, and Vector CANoe for automation.",
        "Tested JPN, CHN, EU, ASN market requirements.",
        "Delivered KPIs and ensured compliance.",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen font-sans">
      <Head>
        <title>Vinay Bommanahalli Umesha | Embedded Systems Portfolio</title>
      </Head>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4">
        <Image
          src="/vinay.jpg"
          alt="Vinay Bommanahalli Umesha"
          width={160}
          height={160}
          className="rounded-full mb-6 shadow-lg border-2 border-white"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm Vinay
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
      <section className="py-16 px-4 md:px-20 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-lg leading-relaxed mb-6">
          I'm an Embedded Systems Engineer with hands-on experience in ECU validation, software testing, and automation at MBition (Mercedes-Benz Innovation Lab). I specialize in Python, C++, CANoe, Robot Framework, and Model-Based Design. Passionate about autonomous systems, I’ve led projects involving camera calibration, radar/lidar analysis, and CAN-to-LoRa gateway design.
        </p>
        <p className="text-lg leading-relaxed">
          I hold a Master's degree in Embedded Systems from TU Chemnitz and a Bachelor's in Electrical Engineering from Visvesvaraya Technological University. I’m driven by curiosity, purpose, and the desire to bridge the real and digital worlds through reliable embedded solutions.
        </p>
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
                <img
                  src="/mbition.png"
                  alt="MBition Logo"
                  className="w-16 h-16 object-contain"
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
          &copy; 2025 Vinay Bommanahalli Umesha —{" "}
          <a
            href="mailto:vgowda002@gmail.com"
            className="underline hover:text-white"
          >
            vgowda002@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
