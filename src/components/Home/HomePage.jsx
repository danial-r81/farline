import React from 'react';
import { Baner } from './Baner';
import { Courses } from './Courses';
import { Footer } from './footer/Footer';

import './homepage.css';

export const HomePage = () => {
  return (
    <div className='home-page'>
      <Baner />
      <Courses />
      <Footer />
    </div>
  );
};
