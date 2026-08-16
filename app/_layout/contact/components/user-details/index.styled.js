'use client';

import { styled } from 'styled-components';

const containerValue = ({ theme }) => theme?.breakpoints?.container;

export const Container = styled.div`
  padding-inline: clamp(1.25rem, 4vw, 4rem);
  margin-inline: auto;

  @media screen and (min-width: ${containerValue}) {
    max-width: ${containerValue};
  }
`;

export const Row = styled.div`
  --default-padding: clamp(2rem, 5vh, 4rem);

  &:nth-child(1) {
    padding-block-end: calc(var(--default-padding) / 2);
  }

  &:nth-child(2) {
    padding-block-end: calc(var(--default-padding) * 0.4);
  }
`;

export const ImageWrapper = styled.div`
  --image-size: clamp(3rem, 5vw, 5.5rem);

  position: relative;
  width: var(--image-size);
  height: var(--image-size);
  flex-shrink: 0;
`;

export const MainTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
`;
