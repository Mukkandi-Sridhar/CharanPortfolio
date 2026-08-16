'use client';

import { styled } from 'styled-components';

const containerValue = ({ theme }) => theme?.breakpoints?.container;

export const Container = styled.div`
  padding-inline: clamp(1.25em, 5vw, 6em);
  margin-inline: auto;

  @media screen and (min-width: 768px) {
    padding-inline: calc(clamp(2.5em, 6vw, 8em) * 1.5);
  }

  @media screen and (min-width: ${containerValue}) {
    max-width: ${containerValue};
  }
`;

export const Row = styled.div`
  --default-padding: clamp(2.5em, 6vh, 5em);

  &:nth-child(1) {
    padding-block-end: calc(var(--default-padding) / 2);
  }

  &:nth-child(2) {
    padding-block-end: calc(var(--default-padding) * 0.4);
  }
`;

export const ImageWrapper = styled.div`
  --image-size: clamp(3.5em, 6.5vw, 8em);

  position: relative;
  width: var(--image-size);
  height: var(--image-size);
  flex-shrink: 0;
`;

export const MainTitle = styled.h2`
  font-size: clamp(2em, 5vw, 4.5em);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
`;
