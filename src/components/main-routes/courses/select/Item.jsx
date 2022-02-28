import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
   getCourses,
   setShowSelectGrade,
} from '../../../../redux/features/courses';

const Item = ({
   classN,
   style,
   text,
   itemFor,
   initial,
   animate,
   exit,
   value,
}) => {
   const dispatch = useDispatch();
   const history = useNavigate();
   let { topic, grade } = useSelector((state) => state.coursesReducer);
   const { showSelectTopic } = useSelector((state) => state.coursesReducer);
   const onClickForTopic = () => dispatch(setShowSelectGrade());
   const onClickForGrade = () => {
      if (itemFor === 'topic') {
         topic = value;
      } else {
         grade = value;
      }
      dispatch(getCourses({ topic, grade, history }));
   };

   const gradeLink = (
      <div className='item-value' onClick={onClickForGrade}>
         {text}
      </div>
   );

   const topicLink = <div className='item-value'>{text}</div>;

   return (
      <motion.li
         initial={initial}
         animate={animate}
         exit={exit}
         onClick={onClickForTopic}
         className={`circle ${classN} ${
            itemFor === 'topic' ? 'topic' : 'grade'
         }`}
         style={style}>
         {!showSelectTopic ? gradeLink : topicLink}
      </motion.li>
   );
};

export default Item;
