'use client';

import Link from 'next/link';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title }, index) => {
    const id = index;
    return (
      <li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
        style={{
          paddingInline: 'clamp(1rem, 3vw, 2.5rem)',
          paddingBlock: 'clamp(1rem, 2vw, 1.5rem)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          href={href}
          className='flex items-center justify-between max-lg:flex-wrap'
          passHref
        >
          <h4
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)',
            }}
          >
            {title}
          </h4>
          <p className='text-lg font-medium'>Video Editing</p>
        </Link>
      </li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
