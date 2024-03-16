'use client';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollPanel from '@/components/scroll-panel'; // Предполагается, что ScrollPanel уже реализован

interface SkillItem {
  id: number;
  mainSkill: string;
  subSkills: string[];
}

const SkillsPanel: FC<{ items: SkillItem[] }> = ({ items }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    rest: { filter: 'blur(0px)', scale: 1 },
    hover: { filter: 'blur(4px)', scale: 0.95 },
  };

  const subSkillVariants = {
    rest: { filter: 'blur(4px)', scale: 0.95 },
    hover: { filter: 'blur(0px)', scale: 1},
  };

  return (
    <div className="page-content fixed z-5 top-0 right-0 h-full w-1/2 p-6 sm:p-8 md:p-10 lg:p-14">
      <ScrollPanel>
        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative cursor-default"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="text-3xl text-light-blue font-bold text-center"
                variants={itemVariants}
                initial="rest"
                animate={hoveredId === item.id ? "hover" : "rest"}
              >
                {item.mainSkill}
              </motion.div>
              <motion.div
                className={`flex flex-wrap gap-2 justify-center pt-2`}
                variants={subSkillVariants}
                initial="rest"
                animate={hoveredId === item.id ? "hover" : "rest"}
              >
                {item.subSkills.map((subSkill, index) => (
                  <span key={index} className="font-semibold px-2.5 py-1 rounded">
                    {subSkill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </ScrollPanel>
    </div>
  );
};

export default SkillsPanel;