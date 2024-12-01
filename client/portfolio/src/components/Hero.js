"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import TypeWriter from "./TypeWriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <WavyBackground className="max-w-6xl mx-auto pb-40">
      <div className="flex flex-col items-center justify-center gap-6 mt-20">
        <h1 className="text-6xl sm:text-7xl font-bold text-white tracking-tight lowercase text-center animate-fadeIn font-['Libre_Baskerville']">
          Hi, I'm Vivek Jariwala
        </h1>
        
        <p className="text-lg lowercase sm:text-xl font-light text-center max-w-2xl animate-fadeIn [animation-delay:300ms]">
          <TypeWriter />
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <button className="p-[3px] relative animate-fadeIn [animation-delay:400ms] w-auto hover:scale-105 transition-all duration-300 ease-out">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500 ease-out animate-gradient" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg animate-gradient" />
            <a 
              href="/assets/Vivek_Jariwala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black rounded-[6px] relative group transition-all duration-300 ease-out text-white hover:bg-transparent font-medium block"
            >
              View Resume
            </a>
          </button>
          
          <button className="p-[3px] relative animate-fadeIn [animation-delay:500ms] w-[52px] hover:scale-105 transition-all duration-300 ease-out">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <a 
              href="https://github.com/vivekajayjariwala" 
              target="_blank"
              className="p-3 bg-black rounded-[6px] relative group transition-all duration-300 ease-out text-white hover:bg-transparent block"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </button>
          
          <button className="p-[3px] relative animate-fadeIn [animation-delay:600ms] w-[52px] hover:scale-105 transition-all duration-300 ease-out">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <a 
              href="https://linkedin.com/in/vivek-jariwala" 
              target="_blank"
              className="p-3 bg-black rounded-[6px] relative group transition-all duration-300 ease-out text-white hover:bg-transparent block"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </button>
        </div>
      </div>
    </WavyBackground>
  );
}