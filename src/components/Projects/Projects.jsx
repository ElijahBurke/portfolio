/* eslint-disable react/prop-types */
import React from 'react';
import Project from './Project/Project';
import './Projects.scss';
import MMAPIImg from '../../assetts/screenshot-mmapi.png';
import OngakuImg from '../../assetts/screenshot-ongaku.png';
import EWSBImg from '../../assetts/screenshot-ewsb.png';

const MMAPIContent = `MMAPI is an API for every fight, fighter and event that has ever taken place in the UFC
- the worlds largest Mixed Martial Arts promotion company.
It allows users to get this information from our database using either traditional REST
API routes or fully customisable GraphQL queries.
There are also comprehensive docs for users and we built a custom GraphQL playground so
that people could test out their queries.`;

const OngakuContent = `Ongaku is a music sharing community. Users can create, save and
 discover posts by other users, navigate through the whole Discogs (worlds largest music
   database and marketplace) API with an emphasis on discovering music that they would
    not normally be exposed to. They can also access their Discogs wantlist and collections,
     interacting with them through our app.`;

const EWSBContent = `Web Sockets Boilerplate is a package that if you run it on the command line,
 installs the entire architecture for a socket based application with in built database support of
  your choice. When running the command, you're prompted to choose a database and input your database
   name. Providing the database already exists, the app comes out the box with a running mock front end
    with a socket back end and integrated database support.`;

const Projects = ({ dark }) => (
  <>
    <section className="projects__project snap-to" style={{ background: `${dark ? '#111111' : '#dddddd'}` }}>
      <Project name="MMAPI" dark={dark} link="https://github.com/ElijahBurke/MMAPI" img={MMAPIImg} content={MMAPIContent} stack={['React', 'GraphQL', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'Sequelize']} />
    </section>
    <section className="projects__project snap-to" style={{ background: `${dark ? '#222222' : '#efeeee'}` }}>
      <Project name="Ongaku" dark={dark} link="https://github.com/ritammv/ongaku" img={OngakuImg} reversed content={OngakuContent} stack={['React', 'TypeScript', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'Sequelize']} />
    </section>
    <section className="projects__project snap-to" style={{ background: `${dark ? '#111111' : '#dddddd'}` }}>
      <Project name="EWSB" dark={dark} link="https://github.com/Marcel2408/express-socket-io-boilerplate" img={EWSBImg} content={EWSBContent} stack={['Jest', 'MongoDB', 'ExpressJS', 'PostgreSQL', 'Sequelize', 'Mongoose']} />
    </section>
  </>
);

export default Projects;
