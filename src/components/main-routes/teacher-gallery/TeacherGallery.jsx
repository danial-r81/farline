import Teacher from './Teacher';

import './teacher.css';
import { useSelector } from 'react-redux';
const TeacherGallery = () => {
   const { teachers } = useSelector((state) => state.teacher);

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
