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
            Bond Brand Loyalty is a consulting company specializing in loyalty programs, customer engagement, and brand advocacy. Its AI team integrates artificial intelligence to improve customer experiences and drive efficiencies.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I developed a brainstorming application that leveraged AI for marketing campaign ideation. This tool used ChatGPT for text generation, DALL-E for visual concepts, and Azure AI Embeddings for analyzing 75,000 ads to recommend similar campaigns. I built the application interface using Streamlit and enhanced its functionality with caching techniques, making it interactive and user-friendly. Through this project, I gained a deeper understanding of embedding-based similarity metrics and the importance of optimizing user workflows in design. The successful adoption by over 50 marketing employees highlighted the value of AI in enhancing creative processes.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I architected a competitive analysis tool, which provided actionable insights for a $25B grocery client by analyzing flyers from competitors across Canada. Utilizing web scraping (BeautifulSoup and Requests), Azure AI Vision, and Azure AI Translator, the tool categorized loyalty offers and stored insights in Snowflake for analysis. By ensuring accurate data collection and classification, the tool empowered the client with insights to refine their loyalty strategies. This project taught me the importance of integrating robust data validation steps to minimize errors in downstream analytics.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I spearheaded the development of a machine learning application using Snowflake Native Apps. The tool automated feature selection, model comparison, and partial feature analysis with a Streamlit interface, ensuring accessibility across the organization. I implemented cross-nested validation to improve model reliability and provided visualized insights into feature importance. The application reduced manual workloads significantly and democratized advanced machine learning capabilities for non-technical users at Bond.
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
            Elim Solutions is a IT consulting services company specializing in custom integrations for Oracle NetSuite. It delivers tailored solutions for businesses ranging from retail to payment processing.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I built a full-stack inventory management system using the MEAN stack. The application incorporated CRUD functionality, pagination, and real-time database updates. To enhance user experience, I implemented custom TypeScript-based validations and improved database integration for seamless updates. The project improved my skills in Angular Material design and taught me effective debugging techniques in handling data inconsistencies.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I developed features for e-commerce platforms integrating with NetSuite, including a grocery website and a hardware store platform. Using SuiteScript, Backbone, and Handlebars, I implemented design elements like headers and backend integrations, mastering ERP configurations and frontend debugging. My work included building a modular header component with animations and a search bar, aligning with mockups while resolving cross-browser styling issues. This experience emphasized the importance of bridging client requirements with technical solutions in real-time.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I created an employee feedback system using a micro frontend architecture. Built with Angular, this tool connected to databases and provided encryption options for anonymity, reflecting a secure and user-friendly design for internal applications. The feedback system integrated seamlessly with legacy systems, ensuring compatibility while modernizing the user interface. This project enhanced my ability to design scalable micro frontends, balancing modern technologies with existing infrastructure constraints.
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
            The Buckmaster Institute is an IT company that develops software products like web applications and research tools. The team I worked with focused on internal research projects involving unique software challenges.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I developed an image recognition program for detecting musical notes in digital scores using OpenCV and template matching techniques. The program achieved over 95% accuracy across 150 musical scores after implementing dynamic thresholds. To support future scalability, I documented all findings and program configurations in the company database, ensuring accessibility for subsequent research. This project refined my debugging skills, especially when working with large datasets and real-world noise in template matching systems.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I designed a difference function in Python to evaluate the accuracy of templates derived from varied musical scores, incorporating margin-of-error logic for improved precision. These results were visualized as comparison matrices and annotated charts to identify patterns and refine the image recognition algorithms. By automating the analysis process, I significantly reduced the manual effort required for validation, enabling quicker iterations on algorithm adjustments. This systematic approach ensured consistency and transparency in how results were evaluated.
          </p>
          <p className="text-white/70 text-sm md:text-base font-normal mb-4">
            I explored multi-template matching, creating a hybrid program to combine noteheads on and between staff lines. This required leveraging data validation, chart automation, and debugging, showcasing how complex features can be seamlessly integrated into evolving projects. The multi-template approach improved recognition accuracy across diverse musical scores, addressing a broader range of note patterns. This work contributed to generating over 25,000 annotated data points, which the company plans to use in future machine learning initiatives.
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