import React, { useEffect, useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-4xl sm:text-5xl font-bold text-white mb-20 text-center font-['Libre_Baskerville'] lowercase
            opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
        >
          take a look at my projects
        </h2>
        
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} 
                bg-white/10 hover:bg-white/20 transition-all duration-300`}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl 
    bg-gradient-to-br from-white/5 to-white/10 transition-all duration-300" />
);

const items = [
  {
    title: "Next Stop",
    description: "A social platform for travelers to discover and share hidden gems around the world.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Bulletin Board",
    description: "Real-time collaborative workspace for teams to brainstorm and organize ideas together.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Battle of the Marauders",
    description: "A 16-bit adventure game featuring turn-based combat and dynamic platforming mechanics.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Bond Brand Loyalty ML Challenge",
    description: "Award-winning predictive model for analyzing and forecasting customer behavior patterns.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Fantasy League Manager",
    description: "Comprehensive management system for organizing and tracking fantasy sports leagues.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Riddles Emporium",
    description: "Interactive community platform where users can create, solve, and discuss riddles.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-white/70" />,
  },
  {
    title: "Sales Forecaster",
    description: "Advanced analytics tool for predicting retail sales trends and market patterns.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-white/70" />,
  },
];