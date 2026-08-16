'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: 2.5rem;
  padding-block: clamp(3em, 6vw, 6em) clamp(3em, 6vw, 6em);
  padding-inline: clamp(1.5em, 4vw, 6em);

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    flex-wrap: revert;
  }
`;

export const Title = styled.h4`
  font-size: clamp(1.2rem, 1.8vw, 2.1rem);
  line-height: 1.45;
`;
