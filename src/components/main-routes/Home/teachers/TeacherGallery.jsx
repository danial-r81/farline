import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { teachersInfo } from '../../../../redux/features/teachers';
import CreateSliser from '../../../slider/CreateSlider';

export const TeacherGallery = () => {
   const dispatch = useDispatch();
   const teachers = useSelector((state) => state.teacherReducer.teachers);
   useEffect(() => {
      dispatch(teachersInfo());
   }, []);

   return (
      <div className='teacher-gallery'>
         <CreateSliser
            items={teachers}
            slidesPerView={5}
            minWidth={1240}
            topic='اساتید'
            sliderAs='teacher'
            btnTopic='اساتید'
            goTo='/teachers'
         />
         <CreateSliser
            items={teachers}
            slidesPerView={4}
            maxWidth={1240}
            minWidth={1030}
            topic='اساتید'
            sliderAs='teacher'
            btnTopic='اساتید'
            goTo='/teachers'
         />

         <CreateSliser
            items={teachers}
            slidesPerView={3}
            maxWidth={1030}
            minWidth={820}
            topic='اساتید'
            sliderAs='teacher'
            btnTopic='اساتید'
            goTo='/teachers'
         />

         <CreateSliser
            items={teachers}
            slidesPerView={2}
            maxWidth={820}
            minWidth={529}
            topic='اساتید'
            sliderAs='teacher'
            btnTopic='اساتید'
            goTo='/teachers'
         />

         <CreateSliser
            items={teachers}
            slidesPerView={1}
            maxWidth={528}
            topic='اساتید'
            sliderAs='teacher'
            btnTopic='اساتید'
            goTo='/teachers'
         />
      </div>
   );
};
