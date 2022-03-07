import { useDispatch, useSelector } from 'react-redux';

const Courses = () => {
   const dispatch = useDispatch();
   const courses = useSelector((state) => state.coursesReducer.courses);
   console.log(courses);
   return <div></div>;
};

export default Courses;
