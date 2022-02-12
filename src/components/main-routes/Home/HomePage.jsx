import { Fragment } from 'react';
import { Baner } from './banner/Baner';
import { Courses } from './courses/Courses';
import { Footer } from './footer/Footer';
import { TeacherGallery } from './teachers/TeacherGallery';
import { Consultation } from './consultation/Consultation';
import { FirstSessions } from './first-sessions/FirstSessions';

import './homepage.css';
const HomePage = () => {
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

export default HomePage;
