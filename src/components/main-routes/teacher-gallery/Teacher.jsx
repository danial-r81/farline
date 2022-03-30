import PropTypes from 'prop-types';

import config from '../../../services/config.json';

const Teacher = ({ teacher }) => {
   console.log(teacher);
   return (
      <div class='teacher-container'>
         <div class='teacher-1 teacher-edu'>
            <div class='teacher-info'>
               <div class='container'>
                  <img src={`${config.baseUrl}${teacher.picture}`} alt='' />
                  <h2>{teacher.name}</h2>
                  <h3>{teacher.text}</h3>
                  <div class='back'>
                     <h2>رزومه</h2>
                     <div class='resume'>
                        <div className='resume-part-one'>
                           <h1>مدرک تحصیلی</h1>
                           <div>{teacher.reshte_text}</div>
                        </div>
                        <div className='resume-part-two'>
                           <h3>مدارس تدریس شده</h3>
                           <div>{teacher.school}</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

Teacher.propTypes = {
   teacher: PropTypes.object.isRequired,
};

export default Teacher;
