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
    <section ref={containerRef} className='relative z-10 mt-14'>
      <div className='grid items-center'>
        <div className='bg-background'>
          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
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
