import { motion, useScroll, useTransform } from "framer-motion";
import { FaBriefcase, FaArrowUp } from "react-icons/fa";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Konnect.in Pvt Ltd",
    duration: "May 2022 – Present",
    promotion: true,
    metrics: [
      "⬆ Improved backend efficiency by ~17%",
      "⬇ Reduced redundant external API calls by ~40%",
      "⚡ Supported services used by 10k+ monthly users",
    ],
    points: [
      "Designed and implemented scalable RESTful APIs using Node.js and TypeScript",
      "Integrated third-party services including payments, analytics, and notifications",
      "Optimized backend performance using Redis caching and database query tuning",
      "Collaborated with frontend teams to deliver end-to-end production features",
      "Resolved critical production issues and improved overall system reliability",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Konnect.in Pvt Ltd",
    duration: "May 2021 – Apr 2022",
    promotion: false,
    metrics: [
      "🚀 Delivered 10+ production-ready backend features",
      "🐞 Fixed 50+ bugs across APIs and services",
    ],
    points: [
      "Built backend modules under senior engineer guidance",
      "Assisted in REST API development and testing",
      "Worked closely with QA and frontend teams to close releases",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="
        relative min-h-screen w-full py-20 sm:py-24
        bg-gradient-to-b
        from-[#0b0f2a] via-[#120b2d] to-[#0b1a2d]
        text-white overflow-hidden
      "
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#22d3ee] to-transparent opacity-25 blur-[160px]" />
        <div className="absolute bottom-1/4 right-0 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-transparent opacity-25 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] via-[#ec4899] to-[#22d3ee]">
            Experience
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Career progression focused on backend architecture, scalability,
            and measurable business impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="
            absolute top-0 h-full w-[2px] bg-white/10
            left-4 sm:left-1/2 sm:-translate-x-1/2
          ">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#22d3ee] via-[#ec4899] to-transparent"
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                relative mb-16 sm:mb-24 w-full flex
                justify-start
                sm:${index % 2 === 0 ? "justify-start pr-12" : "justify-end pl-12"}
                pl-12 sm:pl-0
              `}
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                  w-full sm:w-full md:w-[45%]
                  rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-md
                  p-5 sm:p-6
                "
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 border border-white/20">
                    <FaBriefcase className="text-[#22d3ee]" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                      {exp.role}
                      {exp.promotion && (
                        <FaArrowUp className="text-pink-400 text-sm" />
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#22d3ee] mb-4">
                  {exp.duration}
                </p>

                {/* Metrics */}
                <div className="mb-4 space-y-1 text-sm text-gray-300">
                  {exp.metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {metric}
                    </motion.div>
                  ))}
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 text-gray-300 list-disc list-inside text-sm sm:text-base">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Timeline Dot */}
              <div className="
                absolute top-6
                left-4 sm:left-1/2 sm:-translate-x-1/2
              ">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#ec4899] shadow-[0_0_18px_rgba(236,72,153,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
