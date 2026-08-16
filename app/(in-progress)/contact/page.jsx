'use client';

import { useState } from 'react';

import { CheckCircle, MapPin, Phone, Send, Sparkles } from 'lucide-react';

import { Contact, Navbar, Transition } from '@/layout';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = message.trim() ? message.trim() : "Hi Charan! I would like to discuss a video editing project with you.";
    const url = `https://wa.me/918790792645?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(url, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
    }, 5000);
  };

  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-6 pt-32 pb-24 text-foreground sm:px-12 lg:px-24'>
        <div className='mx-auto max-w-5xl space-y-12'>

          {/* Header */}
          <div className='max-w-3xl space-y-4'>
            <div className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary'>
              <Sparkles size={14} /> Start A Project
            </div>
            <h1 className='text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              Let’s turn your ideas into <span className='italic text-neutral-400'>high-impact videos</span>.
            </h1>
            <p className='text-base leading-relaxed text-muted-foreground sm:text-lg'>
              Have a project in mind or need short-form editing? Send a quick message below to connect on WhatsApp directly.
            </p>
          </div>

          <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-12'>

            {/* Direct Contact Info */}
            <div className='space-y-4 lg:col-span-5'>
              <div className='space-y-4 rounded-3xl border border-white/15 bg-neutral-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl'>
                <h3 className='text-lg font-bold text-white tracking-wide'>Contact Directly</h3>

                <div className='space-y-3'>
                  <a
                    href='https://wa.me/918790792645'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-4 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-4 transition-all hover:border-emerald-400 hover:bg-emerald-950/70 shadow-md'
                  >
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 transition-transform group-hover:scale-110'>
                      <Send size={18} />
                    </div>
                    <div className='overflow-hidden'>
                      <p className='text-xs font-semibold uppercase tracking-wider text-emerald-300'>WhatsApp</p>
                      <p className='truncate text-sm font-medium text-emerald-100 sm:text-base'>+91 87907 92645</p>
                    </div>
                  </a>

                  <a
                    href='tel:+918790792645'
                    className='group flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-950/70 p-4 transition-all hover:border-white/30 hover:bg-neutral-950 shadow-md'
                  >
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-transform group-hover:scale-110'>
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wider text-neutral-400'>Phone Call</p>
                      <p className='text-sm font-medium text-white sm:text-base'>+91 87907 92645</p>
                    </div>
                  </a>

                  <div className='flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-950/70 p-4 shadow-md'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white'>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wider text-neutral-400'>Location</p>
                      <p className='text-sm font-medium text-white sm:text-base'>India • Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Text Box */}
            <div className='rounded-3xl border border-white/15 bg-neutral-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl lg:col-span-7'>
              <h3 className='mb-4 text-xl font-bold text-white tracking-wide'>Send Quick Message</h3>

              {submitted ? (
                <div className='space-y-3 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-6 text-center text-emerald-300 shadow-xl'>
                  <CheckCircle size={40} className='mx-auto text-emerald-400' />
                  <h4 className='text-lg font-bold'>Opening WhatsApp...</h4>
                  <a
                    href={`https://wa.me/918790792645?text=${encodeURIComponent(message.trim() || "Hi Charan!")}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:bg-emerald-400 transition-colors'
                  >
                    <Send size={14} /> Open WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='space-y-2'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-neutral-300'>Your Message</label>
                    <textarea
                      rows={5}
                      placeholder='Type your message here...'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className='w-full resize-none rounded-2xl border border-white/15 bg-neutral-950/80 px-5 py-4 text-white placeholder-neutral-500 transition-all focus:border-emerald-400 focus:bg-neutral-950 focus:ring-1 focus:ring-emerald-400/40 focus:outline-none shadow-inner'
                    />
                  </div>

                  <button
                    type='submit'
                    className='flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-xl transition-all hover:bg-emerald-400 active:scale-[0.99]'
                  >
                    <Send size={18} /> Chat on WhatsApp
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>
      <Contact />
    </Transition>
  );
}
