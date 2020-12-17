import gsap from 'gsap';

const toggleDark = () => gsap.timeline({ paused: true })
  .to('#sun', { clipPath: 'circle(0%)', duration: 0.7 })
  .to('#moon', { clipPath: 'circle(50%)', duration: 0.7 });

export default toggleDark;
