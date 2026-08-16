import { Center } from '@/components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: '404',
  description:
    'Passionate Video Editor focused on creating engaging short-form content, Instagram Reels, YouTube Shorts, with storytelling, motion graphics, and sound design.',
};

export default function NotFound() {
  return (
    <Center className='h-screen'>
      <div className='select-none'>
        <h1 className='text-[max(9.5em,16vw)]'>Not Found</h1>
      </div>
    </Center>
  );
}
