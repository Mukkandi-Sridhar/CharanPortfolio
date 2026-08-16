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

  // Duplicate items for continuous infinite marquee loop
  const firstItems = [...projectOptions.first, ...projectOptions.first];
  const secondItems = [...projectOptions.second, ...projectOptions.second];

  const firstSlider = firstItems.map(({ type, source, title }, idx) => {
    const id = `${randomId()}-${idx}`;
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

  const secondSlider = secondItems.map(({ type, source, title }, idx) => {
    const id = `${randomId()}-${idx}`;
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
        <div className='bg-background overflow-hidden py-4'>
          {/* Top Slider Row - Auto scrolls slowly to left */}
          <motion.div
            className='mb-4 flex gap-3 sm:mb-8 sm:gap-6 md:mb-10 md:gap-10 w-max'
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 35,
              repeat: Infinity,
            }}
          >
            {firstSlider}
          </motion.div>

          {/* Bottom Slider Row - Auto scrolls slowly to right */}
          <motion.div
            className='mb-4 flex gap-3 sm:mb-8 sm:gap-6 md:mb-10 md:gap-10 w-max'
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              ease: 'linear',
              duration: 35,
              repeat: Infinity,
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
