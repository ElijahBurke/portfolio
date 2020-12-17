/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import './Profile.scss';
import ImageFlip from './ImageFlip/ImageFlip';

import imageTL from './imageAnimation';
import skillsTL from './skillsAnimation';
import InScroll from '../../Helpers/inScroll';
import ScreenSize from '../../Helpers/screenSize';

const content1 = 'I\'m a Full Stack Developer from London who\'s passionate about clean code and all things JavaScript. I fell in love with coding as it was all the things I loved about maths when i was a kid - in particular the challenge that arises from meeting problems and the intricacies of solving them. I love designing beautiful things on the front end but also love thorough architecting on the back end.';

const content2 = 'Outside of coding I love anything that gets my heart beating a bit faster - MMA, Skiing, Yoga and just about anything else. Other than that, I\'m an avid reader and traveller.';

const Profile = ({ dark }) => {
  const screenSize = ScreenSize();
  const [imageTimeline, setImageTimeline] = useState(false);
  const [showSkills, setShowSkills] = useState(true);
  const [showSkillsTL, setShowSkillsTL] = useState(false);
  const [showingBack, setShowingBack] = useState(false);
  const imageRef = useRef();
  const imageInScroll = InScroll(imageRef);

  useEffect(() => {
    if (!imageTimeline) setImageTimeline(imageTL());
    if (!showSkillsTL) setShowSkillsTL(skillsTL());
  }, []);

  const flipImage = () => {
    if (!showingBack) {
      setShowingBack(true);
      imageTimeline.play();
    } else {
      setShowingBack(false);
      imageTimeline.reverse();
    }
  };

  const handleClick = () => {
    if (screenSize === 'SMALL' || screenSize === 'MED') {
      setShowSkills((skills) => !skills);
    } else flipImage();
  };

  useEffect(() => {
    console.log(screenSize);
    if (screenSize === 'LARGE' || screenSize === 'XLARGE') setShowSkills(true);
  }, [screenSize]);

  useEffect(() => {
    if (showSkillsTL && imageRef.current && imageInScroll) {
      showSkillsTL.play();
    }
  }, [imageRef, showSkillsTL, imageInScroll]);

  return (
    <section className="profile__profile" style={{ background: `${dark ? '#222222' : '#efeeee'}` }}>
      <div className="profile__containers" style={{ background: 'transparent', height: `${screenSize === 'MED' ? '92%' : ''}` }}>
        {screenSize !== 'SMALL' && screenSize !== 'MED'
        && (
          <ImageFlip dark={dark} content1={content1} content2={content2} />
        )}
        <div className="containers__right" style={{ width: `${screenSize === 'SMALL' || screenSize === 'MED' ? '100%' : ''}`, justifyContent: 'space-around' }}>
          <h1 style={{ color: `${!dark ? 'black' : '#efefef'}` }}>Elijah Burke</h1>
          <div className="right__skills">
            <div className="skills__title" style={{ marginBottom: `${screenSize === 'SMALL' ? '5%' : ''}` }}>
              <h3 style={{ color: `${!dark ? 'black' : '#efefef'}` }}>{`${showSkills ? 'Skills' : 'Bio'}`}</h3>
            </div>

            { showSkills ? (
              <div className="skills__skills">
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>JavaScript</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>TypeScript</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>React</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Redux</p>
                <p className="skills__skill" ref={imageRef} style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Angular</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>NodeJS</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Express</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Koa</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>CSS</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>BEM</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Algorithms</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>GraphQL</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>MongoDB</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Mongoose</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>PostgreSQL</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Sequelize</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Deno</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>TypeORM</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Jest</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Mocha</p>
                <p className="skills__skill" style={{ background: `${!dark ? '#7196ff' : '#283E51'}`, fontSize: `${screenSize === 'SMALL' ? '1.2rem' : ''}`, margin: `${screenSize === 'MED' ? '1%' : ''}` }}>Chai</p>
              </div>
            ) : (
              <div className="content__text" style={{ width: `${screenSize === 'SMALL' ? '100%' : ''}` }}>
                <p style={{ color: `${!dark ? 'black' : '#efefef'}` }}>
                  {content1}
                </p>
                {screenSize !== 'SMALL'
                && (
                <p style={{ color: `${!dark ? 'black' : '#efefef'}` }}>
                  {content2}
                </p>
                )}
              </div>
            )}
            <div className="skills__show-bio">
              <button type="button" id="skills-swap" className={`button__skills-swap ${dark && 'dark'}`} onClick={handleClick} style={{ border: `${!dark ? 'black solid 1px' : 'white solid 1px'}`, width: `${screenSize === 'SMALL' ? '80%' : ''}`, marginTop: `${screenSize === 'SMALL' ? '8%' : ''}` }}>
                <h4 style={{ color: `${!dark ? 'black' : '#efefef'}` }}>
                  See
                  {`${showSkills && !showingBack ? ' Bio' : showingBack ? ' Image' : ' Skills'}`}
                  {' '}
                  <span>&gt;</span>
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
