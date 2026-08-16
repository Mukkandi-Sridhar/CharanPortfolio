'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src='/images/hero.png?v=3'
        className='object-cover object-top sm:object-center'
        fill={true}
        sizes='100vw'
        alt='Charan'
        priority
      />

      {/* Subtle Dark Gradient Overlay for Readability */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 pointer-events-none' />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal z-10'>
        <div className='select-none'>
          <h1 className='text-[clamp(2.5rem,7vw,5.5rem)] text-white drop-shadow-lg tracking-tight'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-8 sm:pe-12'>
                Kurni Charan Kumar
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-6 my-8 sm:mx-12 md:mx-20 lg:mx-28 text-white'>
            <div className='mb-3 md:mb-8'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.1rem,1.8vw,1.8rem)] font-medium drop-shadow-md'>
              <span className='block'>Video Editor</span>
              <span className='block'>Short-Form Content Specialist</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
