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
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: skills.title,
    description: skills.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(skills.title)}`,
    path: skills.path,
  });
}

export default function SkillsPage() {
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
            {skills.skills.map((skill, index) => (
              <Column key={skill.title + index} fillWidth gap="4" id={skill.title}>
                <Text id={skill.title} variant="heading-strong-l">
                  {skill.title}
                </Text>
                <Column gap="8">
                  {skill.description.map((bullet, bulletIndex) => {
                    // Split at the first colon
                    const colonIndex = bullet.indexOf(":");
                    let capsule = null;
                    let rest = null;
                    if (colonIndex !== -1) {
                      capsule = bullet.slice(0, colonIndex).trim(); // no colon
                      rest = bullet.slice(colonIndex + 1).trim();
                    }
                    return (
                      <Text 
                        key={bulletIndex} 
                        variant="body-default-m" 
                        onBackground="neutral-weak"
                        style={{ paddingLeft: "0", display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        {capsule ? (
                          <span
                            className={styles.capsule}
                            style={{
                              marginRight: '10px',
                              marginTop: '18px',
                            }}
                          >
                            {capsule}
                          </span>
                        ) : null}
                        {rest ? rest : bullet}
                      </Text>
                    );
                  })}
                </Column>
              </Column>
            ))}
          </Column>
        </Column>
      </Flex>
    </Column>
  );
} 