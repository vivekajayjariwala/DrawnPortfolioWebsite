"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen } from "react-icons/ai";

export default function Navbar() {
  const navItems = [
    {
      name: "home",
      link: "#home",
      icon: <AiOutlineHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "experience",
      link: "#experience",
      icon: <AiOutlineUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "projects",
      link: "#projects",
      icon: <AiOutlineFolderOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
