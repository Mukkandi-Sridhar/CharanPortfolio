'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 * @param {string} [props.title]
 * @param {() => void} [props.onSelect]
 */
export function ProjectSlider({ type = 'video', source, title, onSelect }) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        className='object-cover'
        fill={true}
        sizes='(max-width: 768px) 180px, 220px'
        alt={title || 'project item'}
        quality={85}
      />
    ) : null;

  const video =
    type === 'video' ? (
      <video
        src={source}
        className='pointer-events-none h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload='metadata'
      />
    ) : null;

  return (
    <Center
      className='group relative shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg transition-all duration-500 hover:scale-[1.04] hover:border-white/20 hover:shadow-2xl cursor-pointer w-[clamp(140px,42vw,170px)] sm:w-[200px] md:w-[220px] lg:w-[240px]'
      style={{
        aspectRatio: '9 / 16',
        height: 'auto',
      }}
      onClick={onSelect}
    >
      {image}
      {video}

      {/* Mobile permanent badge / Desktop hover overlay */}
      <div className='absolute inset-0 z-10 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/20 to-black/30 p-3 sm:p-4 text-white opacity-90 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <div className='flex justify-end'>
          <span className='rounded-full border border-white/30 bg-black/60 px-2 py-0.5 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md'>
            9:16 Reel
          </span>
        </div>

        <div className='my-auto flex items-center justify-center transform transition-transform duration-300 translate-y-1 group-hover:translate-y-0'>
          <div className='flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 sm:px-4 sm:py-2.5 text-black shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white'>
            <Play className='h-3 w-3 sm:h-4 sm:w-4 fill-black' />
            <span className='text-[10px] sm:text-xs font-bold uppercase tracking-wider'>Play</span>
          </div>
        </div>

        {title && (
          <p className='truncate text-[11px] sm:text-xs font-semibold tracking-wide text-neutral-200 drop-shadow-md'>
            {title}
          </p>
        )}
      </div>
    </Center>
  );
}
