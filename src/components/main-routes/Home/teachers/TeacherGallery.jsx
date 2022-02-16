import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';

import { teachersInfo } from '../../../../redux/features/teachers';
import CreateSwiper from './CreateSwiper';

export const TeacherGallery = () => {
   const dispatch = useDispatch();
   const teachers = useSelector((state) => state.teacherReducer.teachers);
   useEffect(() => {
      dispatch(teachersInfo());
   }, []);

   return (
      <div className='teacher-gallery'>
         <CreateSwiper teachers={teachers} slidesPerView={5} minWidth={1240} />
         <CreateSwiper
            teachers={teachers}
            slidesPerView={4}
            maxWidth={1240}
            minWidth={1030}
         />

         <CreateSwiper
            teachers={teachers}
            slidesPerView={3}
            maxWidth={1030}
            minWidth={820}
         />

         <CreateSwiper
            teachers={teachers}
            slidesPerView={2}
            maxWidth={820}
            minWidth={529}
         />

         <CreateSwiper teachers={teachers} slidesPerView={1} maxWidth={528} />
      </div>
   );
};
