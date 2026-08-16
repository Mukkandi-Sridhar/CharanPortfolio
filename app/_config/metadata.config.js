/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://kcharan-portfolio.vercel.app/'),
  title: {
    template: '%s | Kurni Charan Kumar',
    default: 'Kurni Charan Kumar • Freelance Video Editor',
  },
  description:
    'Passionate Video Editor focused on creating engaging short-form content, Instagram Reels, YouTube Shorts, with storytelling, motion graphics, and sound design.',
  generator: 'Kurni Charan Kumar',
  applicationName: 'Kurni Charan Kumar',
  referrer: 'origin-when-cross-origin',
  keywords: ['Video Editing', 'Reels', 'Shorts', 'Motion Graphics'],
  authors: [
    { name: 'Kurni Charan Kumar', url: 'https://kcharan-portfolio.vercel.app' },
  ],
  creator: 'Kurni Charan Kumar',
  publisher: 'Kurni Charan Kumar',
  twitter: {
    card: 'summary_large_image',
    title: 'Kurni Charan Kumar • Video Editor',
    description:
      'Passionate Video Editor focused on creating engaging short-form content, Instagram Reels, YouTube Shorts, with storytelling, motion graphics, and sound design.',
    siteId: '',
    creator: '@kcharanedits',
    creatorId: '',
    images: {
      url: 'https://kcharan-portfolio.vercel.app/screenshot.png',
      alt: 'Kurni Charan Kumar Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
