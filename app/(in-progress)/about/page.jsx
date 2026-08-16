import { Award, Film, Play, Sparkles, Video, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import { Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Kurni Charan Kumar',
  description:
    'Learn more about Kurni Charan Kumar — Short-Form Video Editor specializing in Reels, Shorts, Motion Graphics, and Sound Design.',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-6 pt-32 pb-20 text-foreground sm:px-12 lg:px-24'>
        <div className='mx-auto max-w-6xl space-y-24'>

          {/* Hero Section */}
          <section className='grid grid-cols-1 items-center gap-12 lg:grid-cols-12'>
            <div className='space-y-6 lg:col-span-7'>
              <div className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary'>
                <Sparkles size={14} /> Short-Form Video Specialist
              </div>
              <h1 className='text-4xl font-bold leading-tight tracking-tight sm:text-6xl'>
                Turning raw footage into <span className='italic text-neutral-400'>scroll-stopping</span> stories.
              </h1>
              <p className='text-lg leading-relaxed text-muted-foreground sm:text-xl'>
                Hi, I’m <strong className='font-semibold text-foreground'>Charan</strong>. I’m a passionate Video Editor focused on creating high-engagement content that keeps viewers hooked from the first second to the last.
              </p>
              <div className='flex flex-wrap gap-4 pt-4'>
                <Link href='/work'>
                  <MagneticButton variant='primary' size='md'>
                    Explore Portfolio
                  </MagneticButton>
                </Link>
                <Link href='/contact'>
                  <MagneticButton variant='outline' size='md'>
                    Let’s Talk
                  </MagneticButton>
                </Link>
              </div>
            </div>

            <div className='relative flex justify-center lg:col-span-5'>
              <div className='group relative h-72 w-72 overflow-hidden rounded-3xl border border-white/15 shadow-2xl sm:h-96 sm:w-96'>
                <Image
                  src='/images/profile.png'
                  alt='Charan'
                  fill
                  className='object-cover object-top transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
                <div className='absolute bottom-6 left-6 right-6 text-white'>
                  <p className='text-xs font-semibold uppercase tracking-widest text-neutral-400'>Location</p>
                  <p className='text-lg font-bold'>India • Remote Worldwide</p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className='grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-neutral-900/50 p-8 text-center backdrop-blur-md md:grid-cols-4'>
            <div className='space-y-1'>
              <p className='text-3xl font-extrabold text-white sm:text-5xl'>100+</p>
              <p className='text-xs font-medium uppercase tracking-wider text-neutral-400 sm:text-sm'>Videos Edited</p>
            </div>
            <div className='space-y-1'>
              <p className='text-3xl font-extrabold text-white sm:text-5xl'>50M+</p>
              <p className='text-xs font-medium uppercase tracking-wider text-neutral-400 sm:text-sm'>Organic Views</p>
            </div>
            <div className='space-y-1'>
              <p className='text-3xl font-extrabold text-white sm:text-5xl'>99%</p>
              <p className='text-xs font-medium uppercase tracking-wider text-neutral-400 sm:text-sm'>Client Satisfaction</p>
            </div>
            <div className='space-y-1'>
              <p className='text-3xl font-extrabold text-white sm:text-5xl'>24h</p>
              <p className='text-xs font-medium uppercase tracking-wider text-neutral-400 sm:text-sm'>Rapid Delivery</p>
            </div>
          </section>

          {/* Core Expertise & Workflow */}
          <section className='space-y-12'>
            <div className='max-w-2xl space-y-4'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>What Sets My Edits Apart</h2>
              <p className='text-lg text-muted-foreground'>
                I don’t just cut clips together — I craft visual narratives designed to maximize retention, watch time, and engagement for creators and brands.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              <div className='space-y-4 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 transition-all hover:border-white/20'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white'>
                  <Zap size={24} />
                </div>
                <h3 className='text-xl font-bold'>Pacing & Hook Design</h3>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  The first 3 seconds decide if a viewer stays. I design dynamic hooks with visual movement to instantly grab attention.
                </p>
              </div>

              <div className='space-y-4 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 transition-all hover:border-white/20'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white'>
                  <Film size={24} />
                </div>
                <h3 className='text-xl font-bold'>Kinetic Motion Graphics</h3>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  Custom animated captions, lower thirds, callouts, and smooth After Effects transitions that elevate raw footage.
                </p>
              </div>

              <div className='space-y-4 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 transition-all hover:border-white/20'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white'>
                  <Award size={24} />
                </div>
                <h3 className='text-xl font-bold'>Immersive Sound Design</h3>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  Layered sound effects, riser impacts, and beat-matched audio mixing that give videos punch and professional polish.
                </p>
              </div>
            </div>
          </section>

          {/* Software Suite */}
          <section className='space-y-8 rounded-3xl border border-white/10 bg-neutral-950 p-8 sm:p-12'>
            <h3 className='text-center text-2xl font-bold sm:text-3xl'>Software Stack</h3>
            <div className='flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-neutral-300 sm:gap-10 sm:text-base'>
              <div className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3'>
                <Video className='text-sky-400' size={18} /> Adobe Premiere Pro
              </div>
              <div className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3'>
                <Sparkles className='text-purple-400' size={18} /> Adobe After Effects
              </div>
              <div className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3'>
                <Play className='text-amber-400' size={18} /> DaVinci Resolve
              </div>
              <div className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3'>
                <Film className='text-emerald-400' size={18} /> Adobe Audition
              </div>
            </div>
          </section>

        </div>
      </main>
      <Contact />
    </Transition>
  );
}
