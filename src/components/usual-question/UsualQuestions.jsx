import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsualQuestionsHandler } from '../../redux/features/userInfo';
import { FiArrowDown } from 'react-icons/fi';

import './usual-questions.css';
const UsualQuestions = () => {
   const [active, setActive] = useState('');
   const dispatch = useDispatch();
   const { usualQuestions } = useSelector((state) => state.user);

   const toggleQuestion = (item) => {
      active === item.question ? setActive('') : setActive(item.question);
   };

   useEffect(() => {
      dispatch(getUsualQuestionsHandler());
   }, []);

   return (
      <section className='main-container-question'>
         <div className='header-question'>
            <h1>سوالات متداول</h1>
            <p>سوالات خود را از ما بپرسید</p>
            <div className='border-question'></div>
         </div>
         <div className='questions'>
            <h2>!شاید سوال شما هم باشد</h2>

            {usualQuestions.map((item) => (
               <div
                  className={`accordion ${
                     active === item.question ? 'show-answer' : ''
                  }`}>
                  <div className='accordion-title'>
                     <FiArrowDown
                        className='accordion-icon'
                        onClick={() => toggleQuestion(item)}
                     />
                     <p>{item.question}</p>
                  </div>
                  <div className='accordion-answer'>
                     <p>{item.answer}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default UsualQuestions;
