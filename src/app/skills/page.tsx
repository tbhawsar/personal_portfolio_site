"use client";

import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Flex
} from "@once-ui-system/core";
import { baseURL, skills } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React, { useState, useEffect } from "react";

export default function SkillsPage() {
  const [open, setOpen] = useState<{ [skillIdx: number]: number | null }>({});
  const [isMobile, setIsMobile] = useState(false);
  const [sectionOpen, setSectionOpen] = useState<{ [skillIdx: number]: boolean }>({});

  useEffect(() => {
    // Set initial value
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const structure = skills.skills.map((skill) => ({
    title: skill.title,
    display: true,
    items: [],
  }));
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={skills.title}
        description={skills.description}
        path={skills.path}
        image={`/api/og/generate?title=${encodeURIComponent(skills.title)}`}
      />
      <Flex fillWidth gap="0" mobileDirection="column">
        {skills.tableOfContent.display && (
          <Column
            className={styles.tocColumn}
            style={{ top: "50%", transform: "translateY(-50%)", position: "sticky" }}
            paddingLeft="24"
            gap="32"
            hide="s"
          >
            <TableOfContents structure={structure} about={skills} />
          </Column>
        )}
        <Column className={styles.mainContentWithToc} flex={9} maxWidth={40}>
          <Heading variant="display-strong-l" marginBottom="32">
            {skills.title}
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" marginBottom="xl">
            {skills.description}
          </Text>
          <Column fillWidth gap="l">
            {skills.skills.map((skill, skillIdx) => {
              // Count how many bullets are expandable
              const expandableCount = skill.description.filter(bullet => bullet.indexOf(":") !== -1).length;
              const allOpen = sectionOpen[skillIdx];
              return (
                <Column key={skill.title + skillIdx} fillWidth gap="4" id={skill.title}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Text id={skill.title} variant="heading-strong-l" style={{ marginBottom: 0 }}>
                      {skill.title}
                    </Text>
                    {isMobile && expandableCount > 0 && (
                      <button
                        aria-label={allOpen ? `Collapse all ${skill.title}` : `Expand all ${skill.title}`}
                        onClick={() => setSectionOpen(prev => ({ ...prev, [skillIdx]: !allOpen }))}
                        style={{
                          background: 'var(--brand-background-weak, #e0f2fe)',
                          border: '1.5px solid var(--brand-background-strong, #06b6d4)',
                          padding: 0,
                          marginLeft: 4,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: '50%',
                          width: 28,
                          height: 28,
                          justifyContent: 'center',
                          boxShadow: allOpen ? '0 2px 8px 0 rgba(6,182,212,0.10)' : '0 1px 6px 0 rgba(0,0,0,0.07)',
                          transition: 'all 0.18s cubic-bezier(.4,0,.2,1)',
                        }}
                        tabIndex={0}
                        className="plus-toggle-btn"
                      >
                        <span style={{ display: 'inline-flex', transition: 'transform 0.2s', transform: allOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                          {/* Plus icon (rotates to minus) */}
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="4" width="2" height="12" rx="1" fill="var(--brand-background-strong, #06b6d4)" />
                            <rect x="4" y="9" width="12" height="2" rx="1" fill="var(--brand-background-strong, #06b6d4)" />
                          </svg>
                        </span>
                        <style>{`
                          .plus-toggle-btn:hover {
                            background: var(--brand-background-strong, #06b6d4) !important;
                            border: 2px solid var(--brand-background-strong, #06b6d4) !important;
                            color: var(--brand-on-background-strong, #fff) !important;
                            box-shadow: 0 2px 12px 0 rgba(6,182,212,0.15) !important;
                          }
                          .plus-toggle-btn:focus {
                            outline: 2px solid var(--brand-background-strong, #06b6d4);
                          }
                        `}</style>
                      </button>
                    )}
                  </div>
                  <Column gap="8">
                    {skill.description.map((bullet, bulletIndex) => {
                      const colonIndex = bullet.indexOf(":");
                      let capsule = null;
                      let rest = null;
                      if (colonIndex !== -1) {
                        capsule = bullet.slice(0, colonIndex).trim();
                        rest = bullet.slice(colonIndex + 1).trim();
                      }
                      const isOpen = allOpen || open[skillIdx] === bulletIndex;
                      if (isMobile && capsule) {
                        // Mobile: collapsible
                        return (
                          <div key={bulletIndex} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span
                              className={styles.capsule}
                              style={{
                                marginRight: '10px',
                                marginTop: '18px',
                                cursor: 'pointer',
                                userSelect: 'none',
                                boxShadow: isOpen ? '0 2px 12px 0 rgba(6,182,212,0.15)' : undefined,
                                background: isOpen ? 'var(--brand-background-strong, #06b6d4)' : undefined,
                                color: isOpen ? 'var(--brand-on-background-strong, #fff)' : undefined,
                              }}
                              onClick={() => setOpen((prev) => ({ ...prev, [skillIdx]: isOpen && !allOpen ? null : bulletIndex }))}
                              tabIndex={0}
                              role="button"
                              aria-expanded={isOpen}
                            >
                              {capsule}
                            </span>
                            {rest && isOpen && (
                              <Text variant="body-default-m" onBackground="neutral-weak" style={{ marginLeft: '8px', marginTop: '8px' }}>{rest}</Text>
                            )}
                          </div>
                        );
                      } else if (capsule) {
                        // Desktop: always expanded, not clickable
                        return (
                          <Text
                            key={bulletIndex}
                            variant="body-default-m"
                            onBackground="neutral-weak"
                            style={{ paddingLeft: "0", display: 'flex', alignItems: 'center', gap: '8px' }}
                          >
                            <span
                              className={styles.capsule}
                              style={{
                                marginRight: '10px',
                                marginTop: '18px',
                                cursor: 'default',
                                userSelect: 'text',
                              }}
                            >
                              {capsule}
                            </span>
                            {rest}
                          </Text>
                        );
                      } else {
                        // No capsule, just show bullet
                        return (
                          <Text variant="body-default-m" onBackground="neutral-weak" key={bulletIndex}>{bullet}</Text>
                        );
                      }
                    })}
                  </Column>
                </Column>
              );
            })}
          </Column>
        </Column>
      </Flex>
    </Column>
  );
} 