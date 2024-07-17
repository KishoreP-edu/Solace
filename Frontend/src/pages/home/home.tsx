import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './home.css';

const Home = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="home-front">
        <div className="home-front-title">
          <h1>Welcome to Your Personal <br /> Therapy Assistant !!!</h1>
        </div>
        <div className="home-front-input">
          <input className="input-box" type="text" placeholder="You're Not Alone. We're Here to Listen..." />
          <button className="submit-button"></button>
        </div>
        <div className='home-front-para-1'>
          <p id="home-front-para-1" >We're here to help you navigate life's challenges in a safe, supportive, and private environment. </p>
        </div>
        <div className></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      
    </>
  );
};

export default Home;
