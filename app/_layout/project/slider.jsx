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
      className='group relative w-1/4 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl cursor-pointer max-md:min-w-[180px]'
      style={{
        minWidth: '220px',
        aspectRatio: '9 / 16',
        height: 'auto',
      }}
      onClick={onSelect}
    >
      {image}
      {video}

      {/* Hover Overlay with Thematic Play Video Button */}
      <div className='absolute inset-0 z-10 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/20 to-black/30 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <div className='flex justify-end'>
          <span className='rounded-full border border-white/30 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md'>
            9:16 Reel
          </span>
        </div>

        <div className='my-auto flex items-center justify-center transform transition-transform duration-300 translate-y-3 group-hover:translate-y-0'>
          <div className='flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2.5 text-black shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white'>
            <Play className='h-4 w-4 fill-black' />
            <span className='text-xs font-bold uppercase tracking-wider'>Play Video</span>
          </div>
        </div>

        {title && (
          <p className='truncate text-xs font-semibold tracking-wide text-neutral-200 drop-shadow-md'>
            {title}
          </p>
        )}
      </div>
    </Center>
  );
}
