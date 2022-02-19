import { useEffect, useState } from 'react';
import Topic from './Topic';
import http from '../../../services/httpService';
import config from '../../../services/config.json';

import './courses.css';
const Topics = () => {
   const [courses, setCourses] = useState([]);
   useEffect(() => {
      http.get(`${config.baseUrl}/api/courses/`).then((res) => {
         console.log(res);
         setCourses(res.data);
      });
   }, []);

   return (
      <section className='courses'>
         {/* <div className='no-courses'>در حال حاضر دوره ای موجود نمی باشد</div> */}
         <div className='courses-container'>
            {courses.map((course) => (
               <Topic course={course} />
            ))}
         </div>
      </section>
   );
};

export default Topics;
