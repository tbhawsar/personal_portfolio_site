"use client";

import React, { useEffect, useState } from "react";
import { Flex, Text } from "@once-ui-system/core";

export const QuoteSection: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);
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
          as="p"
          style={{
            opacity: 0.8,
            position: 'relative',
            padding: '0 2rem',
            overflow: 'hidden',
            fontSize: 'clamp(1.1rem, 3.5vw, 1.8rem)',
            display: 'inline-block',
          }}
        >
          {/* Mobile quote mark open */}
          <span className="mobile-quote-mark">“</span>
          <span
            style={{
              fontSize: '4rem',
              color: 'var(--neutral-on-background-strong)',
              opacity: 0.4,
              position: 'absolute',
              left: '-4rem',
              top: '-2rem',
              fontFamily: 'Charter, "Bitstream Charter", serif',
            }}
            className="desktop-quote-mark"
          >
            "
          </span>
          <span className={`quote-fade${show ? ' show' : ''}`}>
            I believe the era of <span style={{ fontSize: '1.2em', fontWeight: '600', color: 'var(--brand-on-background-weak)', opacity: 0.8 }}>AI</span> is here to stay and will shape human progress in a phenomenal way. I want to work at the <span style={{ fontSize: '1.2em', fontWeight: '600', color: 'var(--brand-on-background-weak)', opacity: 0.8 }}>forefront</span> of this change to help do it right.
          </span>
          <span
            style={{
              fontSize: '4rem',
              color: 'var(--neutral-on-background-strong)',
              opacity: 0.4,
              position: 'absolute',
              right: '-4rem',
              bottom: '-2rem',
              fontFamily: 'Charter, "Bitstream Charter", serif',
            }}
            className="desktop-quote-mark"
          >
            "
          </span>
          {/* Mobile quote mark close */}
          <span className="mobile-quote-mark">”</span>
          <style>{`
            .quote-fade {
              opacity: 0;
              transform: translateY(16px);
              transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
              display: inline;
            }
            .quote-fade.show {
              opacity: 1;
              transform: translateY(0);
            }
            @media (max-width: 768px) {
              .desktop-quote-mark {
                display: none !important;
              }
              .mobile-quote-mark {
                display: inline !important;
                font-size: 1.5rem !important;
                color: var(--neutral-on-background-strong);
                opacity: 0.5;
                font-family: Charter, 'Bitstream Charter', serif;
                vertical-align: middle;
                margin: 0 0.1em;
              }
            }
            @media (min-width: 769px) {
              .mobile-quote-mark {
                display: none !important;
              }
              .desktop-quote-mark {
                display: inline !important;
              }
            }
          `}</style>
        </Text>
      </Flex>
    </Flex>
  );
}; 