import React, { useEffect, useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

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

    const currentRef = titleRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
              className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} 
                bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer`}
              onClick={() => window.open(item.link, '_blank')}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const Image = ({ src, alt }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
    />
  </div>
);

const items = [
  {
    title: "Next Stop",
    description: "A social platform for travelers to discover and share hidden gems around the world.",
    header: <Image src='/assets/Next_Stop.jpg' alt="Next Stop Project" />,
    link: "https://github.com/vivekajayjariwala/NextStop"
  },
  {
    title: "Bulletin Board",
    description: "Real-time collaborative workspace for teams to brainstorm and organize ideas together.",
    header: <Image src='/assets/Bulletin_Board.jpg' alt="Bulletin Board Project" />,
    link: "https://github.com/vivekajayjariwala/BulletinBoard"
  },
  {
    title: "Battle of the Marauders",
    description: "A 16-bit adventure game featuring turn-based combat and dynamic platforming mechanics.",
    header: <Image src='/assets/Battle_of_the_Marauders.jpg' alt="Battle of the Marauders Project" />,
    link: "https://github.com/vivekajayjariwala/BattleOfTheMarauders"
  },
  {
    title: "Bond Brand Loyalty Machine Learning Challenge",
    description: "Award-winning predictive model for analyzing and forecasting customer behavior patterns.",
    header: <Image src='/assets/Bond_Brand_Loyalty_Machine_Learning_Challenge.jpg' alt="Bond ML Challenge Project" />,
    link: "https://github.com/vivekajayjariwala/MachineLearningChallenge"
  },
  {
    title: "Fantasy League Manager",
    description: "Comprehensive management system for organizing and tracking fantasy sports leagues.",
    header: <Image src='/assets/Fantasy_League_Manager.jpg' alt="Fantasy League Project" />,
    link: "https://github.com/vivekajayjariwala/FantasyLeagueManager"
  },
  {
    title: "Riddles Emporium",
    description: "Interactive community platform where users can create, solve, and discuss riddles.",
    header: <Image src='/assets/Riddles_Emporium.jpg' alt="Riddles Emporium Project" />,
    link: "https://github.com/vivekajayjariwala/RiddlesEmporium"
  },
  {
    title: "Sales Forecaster",
    description: "Advanced analytics tool for predicting retail sales trends and market patterns.",
    header: <Image src='/assets/Sales_Forecaster.jpg' alt="Sales Forecaster Project" />,
    link: "https://github.com/vivekajayjariwala/SalesForecaster"
  },
];
