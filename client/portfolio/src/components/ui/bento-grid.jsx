import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-300",
        "p-4 bg-white/10 hover:bg-white/20 border border-white/10",
        "flex flex-col space-y-4 justify-between",
        "hover:scale-[1.02] hover:-translate-y-1",
        className
      )}>
      <div className="relative overflow-hidden rounded-lg">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        <div className="text-white/70">
          {icon}
        </div>
        <div className="font-sans font-bold text-white mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-white/70 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};
