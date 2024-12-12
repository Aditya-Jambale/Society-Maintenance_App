import { motion } from "framer-motion";
import { useState } from "react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-2">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: hoveredIndex === idx ? 1 : 0,
              scale: hoveredIndex === idx ? 1 : 0.8,
            }}
            transition={{ duration: 0.1 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white rounded-md whitespace-nowrap z-10"
          >
            <div className="font-bold">{item.name}</div>
            <div className="text-sm">{item.designation}</div>
          </motion.div>
          <img
            src={item.image}
            alt={item.name}
            className="object-cover rounded-full h-14 w-14 border-2 border-white group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      ))}
    </div>
  );
};