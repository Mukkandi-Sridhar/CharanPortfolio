'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='px-4 sm:px-12 pb-4 pt-10'>
      <div className='flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8'>
        <div className='flex gap-6 sm:gap-12'>
          <div>
            <ListTitle>Version</ListTitle>
            <p className='mt-3 text-xs sm:text-sm text-neutral-300'>2026 © Edition</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='mt-3 text-xs sm:text-sm text-neutral-300'>
              <time>IST (GMT+5:30)</time>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <ListTitle>Socials</ListTitle>
          <ul className='flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm'>{medias}</ul>
        </div>
      </div>
    </div>
  );
}
