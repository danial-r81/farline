import Teacher from './Teacher';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTeachersHandler } from '../../../redux/features/teachers';

import './teacher.css';
const TeacherGallery = () => {
   const dispatch = useDispatch();
   const { teachers } = useSelector((state) => state.teacher);

   useEffect(() => {
      dispatch(getTeachersHandler());
   }, []);

   return (
      <div className='teacher-gallery-container'>
         <div className='header-name'>
            <h1 className='title'>اساتید آموزشگاه فرتاک</h1>
         </div>
         <section className='main-gallery'>
            {teachers.map((item, index) => (
               <Teacher key={index} teacher={item} />
            ))}
         </section>
      </div>
   );
};

export default TeacherGallery;
