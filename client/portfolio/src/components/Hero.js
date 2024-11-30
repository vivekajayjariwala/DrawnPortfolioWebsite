import TypeWriter from './TypeWriter';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-5xl ml-8 sm:ml-16">
          <h1 className="flex flex-col">
            <span className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 lowercase">
              hi, i'm
            </span>
            <div className="transform -rotate-6 -mt-4">
              <span className="text-7xl sm:text-9xl tracking-tight text-gray-900 uppercase mt-2 font-marker block">
                Vivek
              </span>
              <span className="text-7xl sm:text-9xl tracking-tight text-gray-900 uppercase mt-2 font-marker block">
                Jariwala
              </span>
            </div>
          </h1>
          <div className="text-3xl sm:text-4xl font-medium text-gray-600 mt-16">
            <TypeWriter />
          </div>
          <div className="mt-12 flex items-center gap-x-8">
            <a
              href="/resume.pdf"
              className="rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-sm 
                transition-all duration-300 ease-in-out
                hover:bg-indigo-500 hover:scale-105 hover:shadow-md
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View my resume
            </a>
            <div className="flex gap-6">
              <a 
                href="https://github.com/YourGithubUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600 hover:scale-110"
              >
                <FaGithub className="h-8 w-8" />
              </a>
              <a 
                href="https://linkedin.com/in/YourLinkedInUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600 hover:scale-110"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}