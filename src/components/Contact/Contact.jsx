/* eslint-disable react/prop-types */
import React from 'react';
import './Contact.scss';
import Email from '../../assetts/email.svg';
import LinkedIn from '../../assetts/linked-in.svg';
import ScreenSize from '../../Helpers/screenSize';

const Contact = ({ dark }) => {
  const screenSize = ScreenSize();
  return (
    <div className="contact__contact" style={{ background: `${dark ? '#222222' : '#efeeee'}` }}>
      <div className="contact__containers">
        <div className="contact__left-container" style={{ width: `${screenSize === 'SMALL' ? '100%' : ''}`, alignItems: `${screenSize === 'SMALL' ? 'center' : ''}` }}>
          <div className="left-container__links" style={{ background: `${dark ? '#383235' : '#D9C3CE'}` }}>
            <div className="links__title" style={{ color: `${!dark ? 'black' : '#efefef'}` }}>
              You can contact me via:
            </div>
            <a className="links__email" style={{ color: `${!dark ? 'black' : '#efefef'}` }} href="mailto:elijah_burke@hotmail.com">
              <img src={Email} alt="email svg" style={{ filter: `invert(${!dark ? '0' : '90'}%)` }} />
              Elijah_Burke@hotmail.co.uk
            </a>
            <a className="links__git" style={{ color: `${!dark ? 'black' : '#efefef'}` }} href="https://www.github.com/elijahburke">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github link" style={{ filter: `${!dark ? '' : 'invert(100%)'}` }} />
              GitHub
            </a>
            <a className="links__linked-in" style={{ color: `${!dark ? 'black' : '#efefef'}` }} href="https://www.linkedin.com/in/elijahburke">
              <img src={LinkedIn} alt="linked in svg" style={{ filter: `invert(${dark ? '0' : '100'}%)` }} />
              Linked In
            </a>
          </div>
        </div>
        { screenSize !== 'SMALL'
        && <div className="contact__right-container" style={{ color: `${!dark ? 'black' : '#efefef'}` }} />}
      </div>
      <footer style={{ background: `${dark ? '#111111' : '#dddddd'}` }}>
        <div className="footer__inner" style={{ color: `${!dark ? 'black' : '#efefef'}` }}>
          &#169; 2020 - London, all rights reserved - Elijah Burke.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
