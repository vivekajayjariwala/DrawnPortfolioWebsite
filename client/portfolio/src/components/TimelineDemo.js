import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-white font-bold mb-2">Software Engineering Intern @ Bond Brand Loyalty</h3>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Engineered a competitive insights tool with computer vision and NLP algorithms
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Automated ML workflows for 250+ employees with a Snowflake Native Application
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Designed an AI brainstorming tool using ChatGPT 4o, OpenAI Embeddings, and Azure AI Services
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-white font-bold mb-2">Software Developer Intern @ Elim Solutions</h3>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Integrated NetSuite ERP with e-commerce platforms, resolving 50+ tickets
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Built a full-stack employee feedback app using MERN stack and AWS
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Implemented dynamic webpage elements for 50,000+ monthly visitors
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-white font-bold mb-2">Software Developer Intern @ The Buckmaster Institute</h3>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Improved image recognition accuracy by 87% using Python and OpenCV
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Automated data processing for 25,000+ complex data points
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            • Created comprehensive documentation system with 15+ published entries
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}