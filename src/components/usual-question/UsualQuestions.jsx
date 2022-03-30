import { useEffect, useState } from 'react';
import http from '../../services/httpService';
import config from '../../services/config.json';

import './usual-questions.css';

const UsualQuestions = () => {
   const [questions, setQuestions] = useState([]);

   const accor = document.querySelectorAll('.accordion-title');
   accor.forEach((item) => {
      item.addEventListener('click', function () {
         item.classList.toggle('active');
         const content = item.nextElementSibling;
         if (content.style.height) {
            content.style.height = null;
         } else {
            content.style.height = content.scrollHeight + 'px';
         }
      });
   });

   useEffect(() => {
      http.get(`${config.baseUrl}/api/questions/`).then((res) => {
         setQuestions(res.data);
         console.log(res);
      });
   }, []);

   return (
      <main class='main-container-question'>
         <div class='header-question'>
            <h1>سوالات متداول</h1>
            <p>سوالات خود را از ما بپرسید</p>
            <div class='border-question'></div>
         </div>
         <div class='questions'>
            <h2>شاید سوال شما هم باشد!</h2>

            {questions.map((item) => (
               <div class='accordion'>
                  <div class='accordion-title'>
                     <i class='fa fa-chevron-left'></i>
                     {item.question}
                  </div>
                  <div class='accordion-content'>
                     <p>{item.answer}</p>
                  </div>
               </div>
            ))}
         </div>
      </main>
   );
};

export default UsualQuestions;
