import gsap from 'gsap';

const staggerAnim = () => gsap.timeline({ paused: true })
  .to('.hero__fixed-button--contact', {
    opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.8,
  })
  .to('.hero__fixed-button--contact img', { width: '50%', duration: 0.4 }, '-=0.6')
  .to('.hero__fixed-button--project', {
    opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.8,
  }, '-=0.5')
  .to('.hero__fixed-button--project img', { width: '50%', duration: 0.4 }, '-=0.6')
  .to('.hero__fixed-button--skills', {
    opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.8,
  }, '-=0.5')
  .to('.hero__fixed-button--skills img', { width: '50%', duration: 0.4 }, '-=0.6');

export default staggerAnim;
