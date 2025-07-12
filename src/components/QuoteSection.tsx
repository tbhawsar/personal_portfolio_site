"use client";

import React from "react";
import { Flex, Text } from "@once-ui-system/core";

export const QuoteSection: React.FC = () => {
  return (
    <Flex
      fillWidth
      horizontal="center"
      paddingY="l"
      paddingX="l"
      style={{
        background: 'linear-gradient(90deg, transparent, var(--neutral-alpha-minimal), transparent)',
        borderTop: '1px solid var(--neutral-alpha-minimal)',
        borderBottom: '1px solid var(--neutral-alpha-minimal)',
      }}
    >
      <Flex
        maxWidth="l"
        fillWidth
        horizontal="center"
        style={{
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Text 
          variant="heading-default-l" 
          onBackground="neutral-weak"
          style={{ 
            lineHeight: '1.5',
            maxWidth: '700px',
            opacity: 0.5,
            position: 'relative',
          }}
        >
          <span style={{ 
            fontSize: '4rem', 
            color: 'var(--neutral-on-background-weak)', 
            opacity: 0.3,
            position: 'absolute',
            left: '-4rem',
            top: '-2rem',
            fontFamily: 'Charter, "Bitstream Charter", serif',
          }}>
            "
          </span>
          I believe the era of <span style={{ fontSize: '1.2em', fontWeight: '600', color: 'var(--brand-on-background-weak)', opacity: 0.8 }}>AI</span> is here to stay and will shape human progress in a phenomenal way. I want to work at the <span style={{ fontSize: '1.2em', fontWeight: '600', color: 'var(--brand-on-background-weak)', opacity: 0.8 }}>forefront</span> of this change to ensure we do it right.
          <span style={{ 
            fontSize: '4rem', 
            color: 'var(--neutral-on-background-weak)', 
            opacity: 0.3,
            position: 'absolute',
            right: '-4rem',
            bottom: '-2rem',
            fontFamily: 'Charter, "Bitstream Charter", serif',
          }}>
            "
          </span>
        </Text>
      </Flex>
    </Flex>
  );
}; 