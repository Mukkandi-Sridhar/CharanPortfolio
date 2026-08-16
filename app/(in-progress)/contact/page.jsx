'use client';

import { useState } from 'react';

import { CheckCircle, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

import { Contact, Navbar, Transition } from '@/layout';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Instagram Reels',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectType: 'Instagram Reels', message: '' });
    }, 4000);
  };

  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-6 pt-32 pb-24 text-foreground sm:px-12 lg:px-24'>
        <div className='mx-auto max-w-6xl space-y-16'>

          {/* Header */}
          <div className='max-w-3xl space-y-6'>
            <div className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary'>
              <Sparkles size={14} /> Start A Project
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
              Let’s turn your ideas into <span className='italic text-neutral-400'>high-impact videos</span>.
            </h1>
            <p className='text-lg leading-relaxed text-muted-foreground'>
              Have a project in mind, need monthly short-form editing, or want to elevate your channel? Send a message and let’s talk!
            </p>
          </div>

          <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-12'>

            {/* Direct Contact Cards */}
            <div className='space-y-6 lg:col-span-5'>
              <div className='space-y-6 rounded-3xl border border-white/10 bg-neutral-900/50 p-8 backdrop-blur-md'>
                <h3 className='text-xl font-bold text-white'>Direct Contact Details</h3>

                <div className='space-y-4'>
                  <a
                    href='mailto:charannedit82@gmail.com'
                    className='group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10'
                  >
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-transform group-hover:scale-110'>
                      <Mail size={20} />
                    </div>
                    <div className='overflow-hidden'>
                      <p className='text-xs font-semibold uppercase tracking-wider text-neutral-400'>Email</p>
                      <p className='truncate text-sm font-medium text-white sm:text-base'>charannedit82@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href='tel:+918790792645'
                    className='group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10'
                  >
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-transform group-hover:scale-110'>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wider text-neutral-400'>Phone</p>
                      <p className='text-sm font-medium text-white sm:text-base'>+91 87907 92645</p>
                    </div>
                  </a>

                  <div className='flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white'>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wider text-neutral-400'>Location</p>
                      <p className='text-sm font-medium text-white sm:text-base'>India • Available Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className='space-y-8 rounded-3xl border border-white/10 bg-neutral-950 p-8 shadow-2xl sm:p-12 lg:col-span-7'>
              <h3 className='text-2xl font-bold text-white'>Send A Message</h3>

              {submitted ? (
                <div className='space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center text-emerald-300'>
                  <CheckCircle size={48} className='mx-auto text-emerald-400' />
                  <h4 className='text-xl font-bold'>Message Sent!</h4>
                  <p className='text-sm text-emerald-200'>Thank you! Kurni Charan Kumar will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='space-y-2'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-neutral-300'>Your Name</label>
                    <input
                      type='text'
                      required
                      placeholder='John Doe'
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className='w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-neutral-500 transition-colors focus:border-white/40 focus:outline-none'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-neutral-300'>Your Email</label>
                    <input
                      type='email'
                      required
                      placeholder='john@example.com'
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className='w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-neutral-500 transition-colors focus:border-white/40 focus:outline-none'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-neutral-300'>Project Type</label>
                    <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
                      {['Instagram Reels', 'YouTube Shorts', 'Brand Ads', 'Retainer Edit'].map((type) => (
                        <button
                          key={type}
                          type='button'
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`rounded-xl border p-3 text-center text-xs font-semibold transition-all ${
                            formData.projectType === type
                              ? 'border-white bg-white font-bold text-black'
                              : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-neutral-300'>Project Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder='Tell me about your video project, goals, and timeline...'
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className='w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-neutral-500 transition-colors focus:border-white/40 focus:outline-none'
                    />
                  </div>

                  <button
                    type='submit'
                    className='flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-sm font-bold uppercase tracking-wider text-black shadow-xl transition-colors hover:bg-neutral-200'
                  >
                    <Send size={18} /> Send Message
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
