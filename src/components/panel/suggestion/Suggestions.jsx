import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSuggetsedCoursesHandler } from '../../../redux/features/courses';
import CourseBox from '../../course-box/CourseBox';

import './suggestions.css';
const Suggestions = () => {
   const dispatch = useDispatch();
   const { suggestedCourses } = useSelector((state) => state.courses);
   const phoneNumber = localStorage.getItem('phoneNumber');
   useEffect(() => {
      dispatch(getSuggetsedCoursesHandler(phoneNumber));
   }, []);
   return (
      <div className='suggestion-container'>
         <div className='suggestions'>
            {suggestedCourses.map((course, index) => (
               <CourseBox course={course} key={index} />
            ))}
         </div>
      </div>
   );
};

export default Suggestions;
