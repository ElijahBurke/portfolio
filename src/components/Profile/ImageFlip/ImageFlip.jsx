/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import './ImageFlip.scss';
import Me from '../../../assetts/me.png';

const ImageFlip = ({
  dark, showButton, handleClick, showingBack, content1, content2,
}) => (
  <>
    <div className="containers__left">
      <div id="selfie">
        <div className="selfie_card_front">
          <img src={Me} alt="selfie" id="selfie" />
        </div>
        <div className="selfie_card_back" style={{ background: `${!dark ? '#7196ff' : '#283E51'}` }}>
          <h1>Bio</h1>
          <p>
            {content1}
          </p>
          <p>
            {content2}
          </p>
        </div>
      </div>
    </div>
    {showButton && (
    <button type="button" id="skills-swap" className={`button__skills-swap ${dark && 'dark'}`} onClick={handleClick} style={{ border: `${!dark ? 'black solid 1px' : 'white solid 1px'}`, width: '80%', marginTop: '8%' }}>
      <h4 style={{ color: `${!dark ? 'black' : '#efefef'}` }}>
        See
        {`${showingBack ? ' Image' : ' Bio'}`}
        {' '}
        <span>&gt;</span>
      </h4>
    </button>
    )}
  </>
);

export default ImageFlip;
