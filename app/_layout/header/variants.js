/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    y: 0,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};
