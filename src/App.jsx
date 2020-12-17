import React, { useState } from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className="body__app">
      <section className="app__hero">
        <Hero dark={darkMode} setDark={setDarkMode} />
      </section>
      <section className="app__profile">
        <Profile dark={darkMode} />
      </section>
      <Projects dark={darkMode} />
      <section className="app__contact">
        <Contact dark={darkMode} />
      </section>
    </main>
  );
}

export default App;
