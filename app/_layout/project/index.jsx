'use client';

import { useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { projectOptions } from '@/data';
import { useProjectSlider } from '@/hooks';
import { randomId } from '@/utils';

import { VideoModal } from './modal';
import { ProjectSlider } from './slider';

export function Project() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { transformX1, transformX2, transformY } =
    useProjectSlider(containerRef);

  const firstSlider = projectOptions.first.map(({ type, source, title }) => {
    const id = randomId();
    return (
      <ProjectSlider
        key={id}
        type={type}
        source={source}
        title={title}
        onSelect={() => setSelectedVideo({ source, title })}
      />
    );
  });

  const secondSlider = projectOptions.second.map(({ type, source, title }) => {
    const id = randomId();
    return (
      <ProjectSlider
        key={id}
        type={type}
        source={source}
        title={title}
        onSelect={() => setSelectedVideo({ source, title })}
      />
    );
  });

  return (
    <section ref={containerRef} className='relative z-10 mt-10 overflow-hidden sm:mt-14'>
      <div className='grid items-center'>
        <div className='bg-background overflow-hidden py-2'>
          <motion.div
            className='mb-4 flex gap-3 sm:mb-8 sm:gap-6 md:mb-10 md:gap-10'
            style={{
              width: '160vw',
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className='mb-4 flex gap-3 sm:mb-8 sm:gap-6 md:mb-10 md:gap-10'
            style={{
              width: '160vw',
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        <motion.div
          className='w-screen bg-background'
          style={{
            height: transformY,
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
