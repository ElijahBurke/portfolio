/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import './Hero.scss';
import Sun from '../../assetts/sun.svg';
import Moon from '../../assetts/moon.svg';
import HunchCloud from '../../assetts/hunch-cloud.svg';
import SmallCloud from '../../assetts/small-cloud.svg';
import CloudSym from '../../assetts/cloud-symetrical.svg';
import randomStar from './starAnimation';
import toggleDark from './toggleDark';
import navAnimation from './navAnimation';
import staggerAnim from './staggerAnim';
import OutScroll from '../../Helpers/outScroll';
import Menu from '../../assetts/menu-svg.svg';
import Contact from '../../assetts/contact.svg';
import Skills from '../../assetts/skills.svg';
import Project from '../../assetts/project.svg';
import LinkedIn from '../../assetts/linked-in.svg';
import ScrollToEl from '../../Helpers/ScrollToEl';
import ScreenSize from '../../Helpers/screenSize';

const Hero = ({ dark, setDark }) => {
  const screenSize = ScreenSize();
  const [tl, setTL] = useState(false);
  const [newTl, setNewTL] = useState(false);
  const [staggerTL, setStaggerTL] = useState(false);
  const [currInt, setCurrInt] = useState(false);
  const [isSlidOut, setIsSlidOut] = useState(false);
  const heroRef = useRef();
  useEffect(() => {
    if (!tl) setTL(toggleDark());
    if (!staggerTL) setStaggerTL(staggerAnim());
  }, [tl, staggerTL]);

  const handleSubmit = () => {
    setDark((curr) => !curr);
    if (!dark) {
      tl.play();
      setCurrInt(setInterval(() => randomStar(heroRef), 1800));
    } else {
      tl.reverse();
      if (currInt) clearInterval(currInt);
    }
  };

  useEffect(() => {
    const handleEvent = () => {
      if (isSlidOut) {
        staggerTL.reverse();
        setIsSlidOut(false);
      }
    };
    document.querySelector('main').addEventListener('click', handleEvent);
    return () => { document.querySelector('main').removeEventListener('click', handleEvent); };
  }, [isSlidOut]);

  const handleClick = () => {
    if (!isSlidOut) {
      staggerTL.play();
      setIsSlidOut(true);
    }
  };

  const buttonsRef = useRef();
  const isOutScroll = OutScroll(buttonsRef);
  useEffect(() => {
    if (!newTl && buttonsRef.current) setNewTL(navAnimation());
    if (isOutScroll && buttonsRef.current) newTl.play();
    else if (newTl) {
      newTl.reverse();
      staggerTL.reverse();
      setIsSlidOut(false);
    }
  }, [isOutScroll, buttonsRef, newTl]);

  return (
    <div className="body__hero" ref={heroRef} style={{ background: `${dark ? 'linear-gradient(to top, #283E51, #0A2342)' : 'linear-gradient(0deg, #7196ff -0.45%, #2a5ee8 71.18%)'}` }}>
      <img id="sun" src={Sun} alt="sun svg" style={{ width: `${screenSize === 'SMALL' ? '40%' : ''}`, left: `${screenSize === 'SMALL' ? '60%' : ''}` }} />
      <img id="moon" src={Moon} alt="moon svg" style={{ width: `${screenSize === 'SMALL' ? '40%' : ''}`, left: `${screenSize === 'SMALL' ? '60%' : ''}` }} />
      <img id="hunch-cloud" src={HunchCloud} alt="cloud svg" />
      <img id="small-cloud" src={SmallCloud} alt="cloud svg" />
      <img id="cloud-sym" src={CloudSym} alt="cloud svg" />
      <nav className="hero__nav">
        {screenSize !== 'SMALL'
      && (
        <div className="nav__name" style={{ width: `${screenSize === 'MED' ? '40%' : ''}` }}>
          <h1>Find me on:</h1>
          <div className="name__links">
            <a href="https://www.linkedin.com/in/elijahburke" id="linked_in_img">
              <img src={LinkedIn} alt="linked in img" />
            </a>
            <a href="https://www.github.com/elijahburke" id="github_img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github link" />
            </a>
          </div>
        </div>
      )}
        <div className="nav__right-container" style={{ width: `${screenSize === 'SMALL' ? '100%' : ''}` }}>
          <div className="switch__container" onClick={handleSubmit}>
            <div className="switch__bar" />
            <img id="small-sun" src={dark ? Moon : Sun} alt="sun svg" style={{ left: `${dark ? '60%' : '0%'}` }} />
          </div>
          <button type="button" className="nav__contact" onClick={() => ScrollToEl(window.innerHeight * 4.8)}>
            Contact
          </button>
        </div>
      </nav>
      <div className="hero__content">
        <div className="content__title">
          ELIJAH BURKE
        </div>
        <div className="content__subtitle">
          FULL STACK DEVELOPER
        </div>
      </div>
      {screenSize !== 'SMALL'
      && (
      <div className="hero__buttons" ref={buttonsRef}>
        <button type="button" className="buttons__profile" onClick={() => ScrollToEl(window.innerHeight * 0.8)}>
          Profile
        </button>
        <button type="button" className="buttons__projects" onClick={() => ScrollToEl(window.innerHeight * 1.8)}>
          Projects
        </button>
        <button type="button" className="buttons__contact" onClick={() => ScrollToEl(window.innerHeight * 4.8)}>
          Contact
        </button>
      </div>
      )}
      <div className="padding__bottom" />
      <div className="hero__fixed-button" onClick={handleClick} style={{ background: `${dark ? '#2A2A5E' : '#5A5BE8'}` }}>
        <img src={Menu} alt="menu svg" />
      </div>
      <div className="hero__fixed-button--contact fixed-btn" style={{ background: `${dark ? '#2E3E69' : '#7196FF'}` }} onClick={() => ScrollToEl(window.innerHeight * 4.8)}>
        <img src={Contact} alt="contact svg" />
      </div>
      <div className="hero__fixed-button--project fixed-btn" style={{ background: `${dark ? '#283E51' : '#5AA5E8'}` }} onClick={() => ScrollToEl(window.innerHeight * 1.8)}>
        <img src={Project} alt="project svg" />
      </div>
      <div className="hero__fixed-button--skills fixed-btn" style={{ background: `${dark ? '#2E5D69' : '#63DFFF'}` }} onClick={() => ScrollToEl(window.innerHeight * 0.8)}>
        <img src={Skills} alt="skills svg" />
      </div>
    </div>
  );
};

export default Hero;
