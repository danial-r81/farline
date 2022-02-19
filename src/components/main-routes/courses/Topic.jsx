import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../services/config.json';

const Topic = ({ course }) => {
   console.log(course);
   return (
      <div className={`item`}>
         <div className='image'>
            <img
               src={`${config.baseUrl}${course.picture}`}
               alt={course.title}
            />
         </div>
         <div className='name'>{course.title}</div>
      </div>
   );
};

Topic.propTypes = {
   course: PropTypes.object.isRequired,
};

export default Topic;
