import gsap from 'gsap';

const newTl = () => gsap.timeline({ paused: true })
  .to('.hero__buttons', {
    width: '80px', height: '80px', borderRadius: '50%', background: 'white', duration: 0.5,
  })
  .to('.hero__buttons button', { opacity: 0, duration: 0.2 }, '-=0.3')
  .to('.hero__buttons', { left: '80%', duration: 1 }, '-=0.3')
  .to('.hero__fixed-button', { right: '2%', duration: 1 }, '-=1')
  .to('.hero__fixed-button img', { width: '50%', duration: 0.5 }, '-=0.4');

export default newTl;
