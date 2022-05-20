import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnlineClassesHandler } from '../../../redux/features/userPanel';
import './online-classes.css';
const OnlineClasses = () => {
   const dispatch = useDispatch();
   const { onlineClasses } = useSelector((state) => state.panel);
   const phoneNumber = localStorage.getItem('phoneNumber');
   console.log(onlineClasses);

   useEffect(() => {
      dispatch(getOnlineClassesHandler(phoneNumber));
   }, []);
   return (
      <div class='online-room-container'>
         <div class='title-online'>
            <h2>عنوان دوره</h2>
            <h2> تاریخ ثبت نام</h2>
            <h2>کلاس بعد</h2>
            <h2>ورود به کلاس</h2>
         </div>
         {onlineClasses.map((item) => (
            <div class='details-online'>
               <h2>{item.title} </h2>
               <h2>{item.date}</h2>
               <h2>{item.next_class}</h2>
               <a target='_blank' href={item.link}>
                  ورود به کلاس
               </a>
            </div>
         ))}
      </div>
   );
};
export default OnlineClasses;
