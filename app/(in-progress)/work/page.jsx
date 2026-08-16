'use client';

import { useState } from 'react';

import { Film, Play, Sparkles } from 'lucide-react';

import { Contact, Navbar, Transition } from '@/layout';

import { VideoModal } from '../../_layout/project/modal';

const allProjects = [
  { id: 1, type: 'video', source: '/videos/Video1.mp4', title: 'Viral Event Cut 01', category: 'Reels', thumbnail: '/images/thumb-reels.jpg' },
  { id: 2, type: 'video', source: '/videos/Video2.mp4', title: 'Instagram Reel 02', category: 'Reels', thumbnail: '/images/thumb-reels.jpg' },
  { id: 3, type: 'video', source: '/videos/Video3.mp4', title: 'YouTube Short 03', category: 'Shorts', thumbnail: '/images/thumb-shorts.jpg' },
  { id: 4, type: 'video', source: '/videos/Video4.mp4', title: 'Commercial Brand Ad 04', category: 'Ads', thumbnail: '/images/thumb-ads.jpg' },
  { id: 5, type: 'video', source: '/videos/Video5.mp4', title: 'Motion Graphics Short 05', category: 'Motion', thumbnail: '/images/thumb-motion.jpg' },
  { id: 6, type: 'video', source: '/videos/Video1.mp4', title: 'High Retention Edit 06', category: 'Reels', thumbnail: '/images/thumb-reels.jpg' },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredProjects = activeTab === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeTab);

  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-6 pt-32 pb-24 text-foreground sm:px-12 lg:px-24'>
        <div className='mx-auto max-w-6xl space-y-16'>

          {/* Header */}
          <div className='max-w-3xl space-y-6'>
            <div className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary'>
              <Film size={14} /> Portfolio & Showcase
            </div>
            <h1 className='text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              Crafted for maximum <span className='italic text-neutral-400'>watch time & reach</span>.
            </h1>
            <p className='text-lg leading-relaxed text-muted-foreground'>
              Explore a curated selection of short-form videos cut for Instagram Reels, YouTube Shorts, and Social Ads. Click any video to play in full screen with sound.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className='flex flex-wrap items-center gap-3 border-b border-white/10 pb-6'>
            {['All', 'Reels', 'Shorts', 'Ads', 'Motion'].map((tab) => (
              <button
                key={tab}
                type='button'
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'scale-105 bg-white text-black shadow-lg'
                    : 'border border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Edits' : tab}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedVideo({ source: project.source, title: project.title })}
                className='group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl cursor-pointer'
                style={{ aspectRatio: '9 / 16' }}
              >
                <video
                  src={project.source}
                  className='h-full w-full object-cover'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                />

                {/* Hover Overlay */}
                <div className='absolute inset-0 z-10 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/20 to-black/30 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <div className='flex items-center justify-between'>
                    <span className='rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md'>
                      {project.category}
                    </span>
                    <Sparkles size={16} className='text-amber-400' />
                  </div>

                  <div className='my-auto flex items-center justify-center transform transition-transform duration-300 translate-y-3 group-hover:translate-y-0'>
                    <div className='flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-black backdrop-blur-md shadow-2xl transition-transform hover:scale-105'>
                      <Play size={16} className='fill-black' /> Play Video
                    </div>
                  </div>

                  <div>
                    <h3 className='truncate text-sm font-bold tracking-wide text-white drop-shadow-md'>
                      {project.title}
                    </h3>
                    <p className='mt-1 text-xs text-neutral-400'>Click to play with sound</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Fullscreen Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <Contact />
    </Transition>
  );
}
