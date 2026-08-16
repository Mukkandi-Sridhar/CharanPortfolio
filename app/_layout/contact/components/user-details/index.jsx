'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  const waUrl = `https://wa.me/918790792645?text=${encodeURIComponent("Hi Charan! I saw your portfolio and would like to talk about a project.")}`;

  return (
    <Container>
      <Row>
        <div className='flex items-center gap-4 sm:gap-8'>
          <ImageWrapper className='overflow-hidden rounded-full border border-white/20 shadow-lg'>
            <Image
              src='/images/profile.png'
              className='rounded-full object-cover object-center'
              fill={true}
              sizes='100px'
              alt='Charan Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between mt-2 sm:mt-0'>
          <MainTitle>together</MainTitle>
          <div className='hidden sm:block'>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full my-6 sm:my-8'>
          <div className='h-[1px] bg-muted-foreground/30' />
          <div className='absolute right-4 sm:right-12 top-0 z-20 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg' className='shadow-xl hover:scale-105 transition-transform'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4'>
          <a href='mailto:charannedit82@gmail.com' className='block w-full'>
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 truncate px-4 py-4 text-xs sm:px-6 sm:py-6 sm:text-sm font-medium transition-all'
            >
              charannedit82@gmail.com
            </MagneticButton>
          </a>

          <a href='tel:+918790792645' className='block w-full'>
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 px-4 py-4 text-xs sm:px-6 sm:py-6 sm:text-sm font-medium transition-all'
            >
              +91 87907 92645
            </MagneticButton>
          </a>

          <a href={waUrl} target='_blank' rel='noopener noreferrer' className='block w-full'>
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 px-4 py-4 text-xs sm:px-6 sm:py-6 sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap'
            >
              <MessageSquare size={16} /> WhatsApp Chat
            </MagneticButton>
          </a>
        </div>
      </Row>
    </Container>
  );
}
