/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react';
import './Project.scss';
import InScroll from '../../../Helpers/inScroll';
import imageAnimation from './imageAnimation';
import ScreenSize from '../../../Helpers/screenSize';

const Projects = ({
  name, dark, img, content, stack, link, reversed,
}) => {
  const screenSize = ScreenSize();
  const [imageTL, setImageTL] = useState(false);
  const imageRef = useRef();
  const isInScroll = InScroll(imageRef);
  useEffect(() => {
    if (!imageTL && imageRef.current) setImageTL(imageAnimation(imageRef));
    if (isInScroll) {
      imageTL.play();
    }
  }, [isInScroll, imageRef, imageTL]);
  return (
    <div className={`project__${name} project_container`}>
      <div className={`inner_container ${name}__inner`} style={{ justifyContent: `${reversed ? 'flex-end' : ''}`, height: `${screenSize === 'SMALL' || screenSize === 'MED' ? '90%' : ''}` }}>
        <img
          className="inner__image"
          src={img}
          alt="project screenshot"
          style={{
            boxShadow: `${reversed ? '-' : ''}30px -30px 5px 0px rgba${dark ? '(85, 85, 85, 1)' : '(0, 0, 0, 0.6)'}`, right: `${!reversed && '-8%'}`, left: `${reversed && '-8%'}`, display: `${screenSize === 'SMALL' || screenSize === 'MED' ? 'none' : ''}`,
          }}
          ref={imageRef}
        />
        <div className="inner_left-container" style={{ width: `${screenSize === 'SMALL' || screenSize === 'MED' ? '100%' : ''}`, justifyContent: `${screenSize === 'SMALL' || screenSize === 'MED' ? 'flex-start' : ''}` }}>
          <div className="left-container__text">
            <h1 className="left-container__title" style={{ color: `${!dark ? 'black' : '#efefef'}`, justifyContent: `${screenSize === 'SMALL' || screenSize === 'MED' ? 'center' : ''}`, width: `${screenSize === 'MED' ? '70%' : ''}` }}>
              {name}
              <a href={link}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github link" style={{ filter: `${!dark ? '' : 'invert(100%)'}` }} />
              </a>
            </h1>
            <p className="left-container__content" style={{ color: `${!dark ? 'black' : '#efefef'}`, textAlign: `${screenSize === 'SMALL' || screenSize === 'MED' ? 'center' : ''}`, width: `${screenSize === 'MED' ? '70%' : ''}` }}>
              {content}
            </p>
          </div>
          {(screenSize === 'SMALL' || screenSize === 'MED') && (
          <div className="small-screen__button-container">
            <a href={link} className="small-screen__see-more" style={{ border: `${dark ? '' : 'black solid 1px'}`, color: `${dark ? '' : 'black'}` }}>
              See More
            </a>
          </div>
          )}
          <div
            className="left-container__stack"
            style={{
              justifyContent: `${screenSize === 'SMALL' || screenSize === 'MED' ? 'center' : ''}`, height: `${screenSize === 'SMALL' || screenSize === 'MED' ? '20%' : ''}`, width: `${screenSize === 'MED' ? '60%' : ''}`,
            }}
          >
            { stack.includes('Jest') && <img alt="Jest" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" /> }
            { stack.includes('React') && <img alt="React" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" /> }
            { stack.includes('GraphQL') && <img alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png" /> }
            { stack.includes('TypeScript') && <img alt="TypeScript" src="https://iconape.com/wp-content/files/fh/110909/png/typescript.png" /> }
            { stack.includes('ExpressJS') && <img alt="ExpressJS" src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" /> }
            { stack.includes('NodeJS') && <img alt="NodeJS" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" /> }
            { stack.includes('PostgreSQL') && <img alt="PostgreSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" /> }
            { stack.includes('Sequelize') && <img alt="Sequelize" src="https://cdn.worldvectorlogo.com/logos/sequelize.svg" /> }
            { stack.includes('MongoDB') && <img alt="MongoDB" src="https://img.icons8.com/color/452/mongodb.png" /> }
            { stack.includes('Mongoose') && <img alt="Mongoose" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
