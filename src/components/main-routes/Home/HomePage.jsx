import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCoursesPackageHandler } from '../../../redux/features/courses';
import { Baner } from './banner/Baner';
import { Footer } from './footer/Footer';
import { TeacherGallery } from './teachers/TeacherGallery';
import { Consultation } from './consultation/Consultation';

import './homepage.css';
import CoursesPacks from './courses/courses-packages/CoursesPacks';
const HomePage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCoursesPackageHandler());
   });

   return (
      <Fragment>
         <div className='home-page'>
            <Baner />
            <CoursesPacks />
            <TeacherGallery />
            <Consultation />
         </div>
         <Footer />
      </Fragment>
   );
};

export default HomePage;
