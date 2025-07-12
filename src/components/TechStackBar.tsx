"use client";

import React, { useState } from "react";
import { Flex, Text } from "@once-ui-system/core";
import { 
  SiReact, 
  SiPython, 
  SiJavascript, 
  SiNodedotjs, 
  SiAmazon, 
  SiOpenai,
  SiDocker,
  SiFastapi,
  SiStreamlit,
  SiFigma,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiDiscord
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

const techStack = [
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "AWS", icon: SiAmazon },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Docker", icon: SiDocker },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "MATLAB", icon: BiCodeAlt },
  { name: "Simulink", icon: BiCodeAlt },
];

export const TechStackBar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    if (hoveredIndex === index) return 1.15;
    if (Math.abs(hoveredIndex - index) === 1) return 1.08;
    if (Math.abs(hoveredIndex - index) === 2) return 1.04;
    return 1;
  };

  const getZIndex = (index: number) => {
    if (hoveredIndex === null) return 1;
    if (hoveredIndex === index) return 10;
    if (Math.abs(hoveredIndex - index) === 1) return 5;
    if (Math.abs(hoveredIndex - index) === 2) return 3;
    return 1;
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderLogoSet = (setPrefix: string, startIndex: number) => {
    return techStack.map((tech, index) => {
      const globalIndex = startIndex + index;
      const scale = getScale(globalIndex);
      const zIndex = getZIndex(globalIndex);
      
      return (
        <React.Fragment key={`${setPrefix}-${tech.name}`}>
          <Flex
            vertical="center"
            horizontal="center"
            gap="8"
            paddingX="12"
            paddingY="8"
                          style={{
                borderRadius: 'var(--radius-m)',
                background: hoveredIndex === globalIndex ? 'var(--neutral-alpha-weak)' : 'var(--neutral-alpha-minimal)',
                border: '1px solid var(--neutral-alpha-weak)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                flexShrink: 0,
                position: 'relative',
                zIndex: zIndex,
                transform: `translateY(${hoveredIndex === globalIndex ? '-2px' : '0'}) scale(${scale})`,
              }}
            onMouseEnter={() => handleMouseEnter(globalIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <tech.icon 
              size={20} 
              style={{ 
                color: 'var(--neutral-on-background-weak)',
                opacity: 0.5
              }} 
            />
            <Text 
              variant="label-default-xs" 
              onBackground="neutral-weak"
              style={{ whiteSpace: 'nowrap' }}
            >
              {tech.name}
            </Text>
          </Flex>
          <div style={{ width: '24px', flexShrink: 0 }} />
        </React.Fragment>
      );
    });
  };

  return (
    <Flex
      fillWidth
      horizontal="center"
      paddingY="m"
      paddingX="l"
      style={{
        background: 'linear-gradient(90deg, transparent, var(--neutral-alpha-weak), transparent)',
        borderTop: '1px solid var(--neutral-alpha-weak)',
        borderBottom: '1px solid var(--neutral-alpha-weak)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          animation: 'scroll 30s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {/* First set of logos */}
        {renderLogoSet('first', 0)}
        {/* Second set of logos */}
        {renderLogoSet('second', techStack.length)}
        {/* Third set of logos for extra coverage */}
        {renderLogoSet('third', techStack.length * 2)}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </Flex>
  );
}; 