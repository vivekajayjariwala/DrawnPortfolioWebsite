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
  icon,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-500 ease-in-out p-[3px] relative hover:scale-[1.01] cursor-pointer",
        className
      )}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover/bento:opacity-60 blur-sm transition-all duration-700 ease-in-out animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover/bento:opacity-90 transition-all duration-700 ease-in-out animate-gradient" />
      <div className="relative bg-black rounded-lg p-4 h-full flex flex-col space-y-4 justify-between group-hover/bento:bg-black/40 transition-colors duration-500">
        <div className="relative overflow-hidden rounded-lg">
          {header}
        </div>
        <div className="group-hover/bento:translate-x-2 transition-all duration-500 ease-in-out">
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
    </div>
  );
};