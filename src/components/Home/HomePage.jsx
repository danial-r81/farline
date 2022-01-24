import React, { Fragment, useEffect } from 'react';
import { Baner } from './banner/Baner';
import { Courses } from './courses/Courses';
import { Footer } from './footer/Footer';

import './homepage.css';
import { TeacherGallery } from './teachers/TeacherGallery';
import { Consultation } from './consultation/Consultation';
import { FirstSessions } from './first-sessions/FirstSessions';

export const HomePage = () => {
  return (
    <Fragment>
      <div className='home-page'>
        <Baner />
        <Courses />
        <TeacherGallery />
        <FirstSessions />
        <Consultation />
      </div>
      <Footer />
    </Fragment>
  );
};
