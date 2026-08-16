'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Maximize, Pause, Play, Volume2, VolumeX, X } from 'lucide-react';

/**
 * @param {Object} props
 * @param {{ source: string; title?: string } | null} props.video
 * @param {() => void} props.onClose
 */
export function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(() => {
        // Fallback if browser blocks unmuted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
      setIsPlaying(true);
    }
  }, [video]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const newTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl md:p-8'
          onClick={onClose}
        >
          {/* Floating Top Right Close Button for Mobile Accessibility */}
          <button
            type='button'
            onClick={onClose}
            className='fixed top-4 right-4 z-[10000] flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white shadow-2xl backdrop-blur-md transition-transform hover:scale-110 active:scale-95'
            aria-label='Close video'
          >
            <X size={24} />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className='relative flex max-h-[90vh] w-full max-w-[420px] flex-col items-center overflow-hidden rounded-3xl border border-white/20 bg-neutral-950/95 shadow-2xl md:max-w-[480px]'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className='flex w-full items-center justify-between border-b border-white/10 px-5 py-4 text-white'>
              <span className='text-sm font-semibold tracking-wide text-neutral-200 truncate pr-4'>
                {video.title || 'K Charan Portfolio Video'}
              </span>
              <button
                type='button'
                onClick={onClose}
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-all hover:rotate-90 hover:bg-white hover:text-black'
                aria-label='Close video'
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player Box */}
            <div className='group relative flex h-full max-h-[72vh] w-full items-center justify-center overflow-hidden bg-black'>
              <video
                ref={videoRef}
                src={video.source}
                className='h-full w-full cursor-pointer object-contain'
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                loop
                playsInline
              />

              {/* Play/Pause Overlay indicator on click */}
              <button
                type='button'
                onClick={togglePlay}
                className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100'
              >
                <div className='flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-110'>
                  {isPlaying ? <Pause size={28} /> : <Play size={28} className='ml-1 fill-white' />}
                </div>
              </button>
            </div>

            {/* Controls Bar */}
            <div className='flex w-full flex-col gap-3 border-t border-white/10 bg-neutral-900/80 px-5 py-4 backdrop-blur-md'>
              {/* Progress Slider */}
              <input
                type='range'
                min='0'
                max='100'
                value={progress}
                onChange={handleSeek}
                className='h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-neutral-700 accent-white'
              />

              <div className='flex items-center justify-between text-white'>
                <div className='flex items-center gap-3'>
                  <button
                    type='button'
                    onClick={togglePlay}
                    className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20'
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} className='ml-0.5 fill-white' />}
                  </button>

                  <button
                    type='button'
                    onClick={toggleMute}
                    className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20'
                  >
                    {isMuted ? <VolumeX size={18} className='text-red-400' /> : <Volume2 size={18} />}
                  </button>
                </div>

                <div className='flex items-center gap-3'>
                  <button
                    type='button'
                    onClick={toggleFullscreen}
                    className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20'
                  >
                    <Maximize size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
