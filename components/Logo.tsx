import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "full" | "icon";
}

export default function Logo({ 
  width = 40, 
  height = 40, 
  className = "",
  variant = "icon"
}: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle for icon variant */}
      {variant === "icon" && (
        <circle cx="100" cy="100" r="95" fill="currentColor" className="text-zinc-900 dark:text-zinc-100" opacity="0.05" />
      )}
      
      {/* Villa structure - Main building */}
      <g transform="translate(100, 100)">
        {/* Main building base */}
        <rect x="-60" y="-20" width="120" height="80" fill="currentColor" className="text-zinc-900 dark:text-zinc-100" />
        
        {/* Roof - Traditional Sicilian style */}
        <path
          d="M -70 -20 L 0 -50 L 70 -20 Z"
          fill="currentColor"
          className="text-zinc-700 dark:text-zinc-300"
        />
        
        {/* Decorative roof tiles pattern */}
        <path
          d="M -60 -20 L -30 -35 L 0 -20 L 30 -35 L 60 -20"
          stroke="currentColor"
          className="text-zinc-600 dark:text-zinc-400"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Central door */}
        <rect x="-15" y="20" width="30" height="40" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
        <circle cx="0" cy="40" r="3" fill="currentColor" className="text-zinc-600 dark:text-zinc-400" />
        
        {/* Windows - Left */}
        <rect x="-50" y="0" width="20" height="20" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
        <line x1="-50" y1="10" x2="-30" y2="10" stroke="currentColor" className="text-zinc-600 dark:text-zinc-400" strokeWidth="1.5" />
        <line x1="-40" y1="0" x2="-40" y2="20" stroke="currentColor" className="text-zinc-600 dark:text-zinc-400" strokeWidth="1.5" />
        
        {/* Windows - Right */}
        <rect x="30" y="0" width="20" height="20" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
        <line x1="30" y1="10" x2="50" y2="10" stroke="currentColor" className="text-zinc-600 dark:text-zinc-400" strokeWidth="1.5" />
        <line x1="40" y1="0" x2="40" y2="20" stroke="currentColor" className="text-zinc-600 dark:text-zinc-400" strokeWidth="1.5" />
        
        {/* Decorative elements - Sicilian motifs */}
        {/* Left column decoration */}
        <circle cx="-55" cy="-15" r="4" fill="currentColor" className="text-zinc-600 dark:text-zinc-400" />
        <circle cx="-55" cy="0" r="4" fill="currentColor" className="text-zinc-600 dark:text-zinc-400" />
        <circle cx="-55" cy="15" r="4" fill="currentColor" className="text-zinc-600 dark:text-zinc-400" />
        
        {/* Right column decoration */}
        <circle cx="55" cy="-15" r="4" fill="currentColor" className="text-zinc-600 dark:text-zinc-400" />
        <circle cx="55" cy="0" r="4" fill="currentColor" className="text-zinc-600 dark:text-zinc-400" />
        <circle cx="55" cy="15" r="4" fill="currentColor" className="text-zinc-600 dark:text-zinc-400" />
        
        {/* Decorative arch above door */}
        <path
          d="M -15 20 Q 0 5 15 20"
          stroke="currentColor"
          className="text-zinc-600 dark:text-zinc-400"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Side wings/columns */}
        <rect x="-70" y="-10" width="10" height="70" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
        <rect x="60" y="-10" width="10" height="70" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
        
        {/* Decorative base */}
        <rect x="-70" y="60" width="140" height="8" fill="currentColor" className="text-zinc-700 dark:text-zinc-300" />
      </g>
      
      {/* Decorative border elements - Sicilian pattern */}
      {variant === "icon" && (
        <>
          {/* Top decorative elements */}
          <circle cx="50" cy="30" r="3" fill="currentColor" className="text-zinc-500 dark:text-zinc-500" opacity="0.6" />
          <circle cx="100" cy="20" r="3" fill="currentColor" className="text-zinc-500 dark:text-zinc-500" opacity="0.6" />
          <circle cx="150" cy="30" r="3" fill="currentColor" className="text-zinc-500 dark:text-zinc-500" opacity="0.6" />
          
          {/* Bottom decorative elements */}
          <circle cx="50" cy="170" r="3" fill="currentColor" className="text-zinc-500 dark:text-zinc-500" opacity="0.6" />
          <circle cx="100" cy="180" r="3" fill="currentColor" className="text-zinc-500 dark:text-zinc-500" opacity="0.6" />
          <circle cx="150" cy="170" r="3" fill="currentColor" className="text-zinc-500 dark:text-zinc-500" opacity="0.6" />
        </>
      )}
    </svg>
  );
}

