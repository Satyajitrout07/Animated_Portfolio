import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChartLine, FaUserMd, FaHospital } from "react-icons/fa";

const projects = [
  {
    title: "TrendTrax (SaaS Platform)",
    icon: FaChartLine,
    description:
      "A SaaS platform for managing digital marketing campaigns with deep analytics and performance insights.",
    analysis: {
      problem:
        "Marketing data was fragmented across platforms and analytics requests were slow due to repeated external API calls.",
      solution:
        "Built a centralized SaaS backend integrating GA4 and Google Ads APIs with Redis caching and optimized RESTful services.",
      impact:
        "Improved response times, reduced redundant API calls, and enabled scalable multi-client reporting.",
    },
    points: [
      "Integrated GA4 & Google Ads APIs",
      "Implemented Redis caching for performance optimization",
      "Built RESTful analytics services",
      "Added campaign notification workflows",
    ],
    tech: ["Node.js", "TypeScript", "Redis", "GA4 API", "Google Ads API"],
  },
  {
    title: "MESH App (Doctor Consultation Platform)",
    icon: FaUserMd,
    description:
      "A consultation and scheduling system enabling MRs to coordinate meetings with doctors.",
    analysis: {
      problem:
        "Manual scheduling and payment workflows caused delays and inconsistencies.",
      solution:
        "Automated scheduling using Google Meet, Razorpay payments, and Firebase notifications.",
      impact:
        "Improved operational efficiency, payment reliability, and user experience.",
    },
    points: [
      "Integrated Razorpay with dynamic key handling",
      "Automated Google Meet link generation",
      "Used Firebase for real-time notifications",
      "Improved scheduling workflows",
    ],
    tech: ["Node.js", "MongoDB", "Firebase", "Razorpay"],
  },
  {
    title: "Raphacure (Healthcare Management System)",
    icon: FaHospital,
    description:
      "An end-to-end healthcare platform focused on operational efficiency and secure communication.",
    analysis: {
      problem:
        "Hospitals faced administrative overhead and privacy concerns.",
      solution:
        "Enabled WhatsApp reminders, masked calling, and secure JWT-based communication.",
      impact:
        "Reduced admin workload, improved patient engagement, and enhanced privacy.",
    },
    points: [
      "Enabled WhatsApp messaging for reminders",
      "Implemented masked calling",
      "Automated deployment & migration scripts",
      "Improved backend security",
    ],
    tech: ["Node.js", "JWT/Auth", "WhatsApp API", "Linux", "Nginx"],
  },
];

export default function Project() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1cd8d2]">
            Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Selected backend-heavy projects with real-world impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const isHover = hovered === i;

            return (
              <motion.div
                key={i}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                  rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-md
                  p-8
                "
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{
                      scale: isHover ? 1.08 : 1,
                      opacity: isHover ? 1 : 0.85,
                    }}
                    transition={{ duration: 0.3 }}
                    className="
                      w-12 h-12 rounded-xl
                      flex items-center justify-center
                      bg-white/10 border border-white/20
                    "
                  >
                    <Icon className="text-[#1cd8d2] text-xl" />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-[#1cd8d2]">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 max-w-3xl">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                  {project.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-2.5 py-1 rounded-md border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Analysis (Hover Reveal) */}
                <AnimatePresence>
                  {isHover && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.35 }}
                      className="mt-6 pt-4 border-t border-white/10 space-y-2 text-gray-300"
                    >
                      <p>
                        <span className="font-semibold text-white">
                          Problem:
                        </span>{" "}
                        {project.analysis.problem}
                      </p>
                      <p>
                        <span className="font-semibold text-white">
                          Solution:
                        </span>{" "}
                        {project.analysis.solution}
                      </p>
                      <p>
                        <span className="font-semibold text-white">
                          Impact:
                        </span>{" "}
                        {project.analysis.impact}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
