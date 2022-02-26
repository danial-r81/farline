import React from 'react';
import SelectTopic from './SelectTopic';
import Item from './Item';
import { useSelector } from 'react-redux';
import SelectGrade from './SelectGrade';

const Select = () => {
   const { showSelectTopic } = useSelector((state) => state.coursesReducer);
   console.log(showSelectTopic);
   return (
      <div className='select-container'>
         <ul className='circle-menu'>
            {showSelectTopic ? <SelectTopic /> : <SelectGrade />}
            <Item classN='pointer' />
         </ul>
      </div>
   );
};
export default Select;
