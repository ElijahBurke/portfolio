import gsap from 'gsap';

const imageAnimation = (ref) => gsap.timeline({ paused: true })
  .to(ref.current, {
    transform: 'scale(1)', opacity: 1, duration: 0.6,
  })
  .from(ref.current, { y: 300, duration: 0.6 }, '-=0.5');

export default imageAnimation;
