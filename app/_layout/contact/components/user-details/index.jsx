'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/images/profile.png'
              className='rounded-full object-cover'
              fill={true}
              sizes='100px'
              alt='Kurni Charan Kumar Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div className='w-full lg:w-auto'>
            <a href='mailto:charannedit82@gmail.com' className='block w-full'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground whitespace-nowrap px-4 py-6 text-xs sm:px-8 sm:py-10 sm:text-base'
              >
                charannedit82@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div className='w-full lg:w-auto'>
            <a href='tel:+918790792645' className='block w-full'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground whitespace-nowrap px-4 py-6 text-xs sm:px-8 sm:py-10 sm:text-base'
              >
                +91 87907 92645
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
