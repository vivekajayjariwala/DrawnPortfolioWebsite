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
  href
}) => {
  return (
    <a href={href || "#"} className="block">
      <div
        className={`row-span-1 rounded-xl group/bento hover:shadow-xl transition-all duration-300 ease-out p-[3px] relative hover:scale-[1.02] ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover/bento:opacity-70 blur-sm transition-all duration-500 ease-out animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover/bento:opacity-100 transition-all duration-500 ease-out animate-gradient" />
        <div className="relative bg-black rounded-lg p-4 h-full flex flex-col space-y-4 justify-between group-hover/bento:bg-black/50 transition-colors duration-300">
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
      </div>
    </a>
  );
};
