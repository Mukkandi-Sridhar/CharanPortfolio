'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { useLenis } from '@/hooks';

import { Preloader } from './preloader';

const INTRO_STORAGE_KEY = 'kcharan-intro-played';

function hasIntroPlayed() {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(INTRO_STORAGE_KEY) === 'true';
}

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(() => !hasIntroPlayed());

  useLenis();

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');

    const timeout = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
