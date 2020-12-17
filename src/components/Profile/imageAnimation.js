import gsap from 'gsap';

const imageTL = () => gsap.timeline({ paused: true })
  .to('.selfie_card_back', {
    width: '100%', duration: 0.5,
  })
  .to('.selfie_card_back h1', { clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)', duration: 0.5 })
  .to('.selfie_card_back p', { clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)', duration: 0.5 });

export default imageTL;
