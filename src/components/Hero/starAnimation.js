import gsap from 'gsap';
import Star from '../../assetts/star.svg';

const randomCoords = (
  upperX,
  upperY,
) => {
  const randomX = Math.floor(Math.random() * upperX);
  const randomY = Math.floor(Math.random() * upperY);
  return [randomX, randomY];
};

const randomStar = (ref) => {
  const toAppend = ref.current;
  if (toAppend) {
    const { offsetWidth, offsetHeight } = toAppend;
    const [randomX, randomY] = randomCoords((offsetWidth * 0.9), (offsetHeight / 2));
    const newStar = document.createElement('img');
    newStar.src = Star;
    newStar.className += 'animated_star';
    newStar.style.top = `${randomY}px`;
    newStar.style.left = `${randomX}px`;
    toAppend.append(newStar);
    gsap.timeline()
      .to(newStar, { opacity: 1, scale: 1, duration: 1 })
      .to(newStar, { opacity: 0.5, scale: 0.98, duration: 1 })
      .to(newStar, { opacity: 1, scale: 1, duration: 1 })
      .to(newStar, { opacity: 0.5, scale: 0.98, duration: 1 })
      .to(newStar, { opacity: 1, scale: 1, duration: 1 })
      .to(newStar, {
        opacity: 0.3, scale: 0.4, duration: 1, onComplete: () => newStar.remove(),
      });
  }
};

export default randomStar;
