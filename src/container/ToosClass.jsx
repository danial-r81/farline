import { Route, Switch, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import {
   HomePage,
   MainLayout,
   AboutUs,
   TeacherGallery,
   Login,
   Register,
   GetCode,
   CompleteProfile,
   ForgetPassword,
   ForgotPassCode,
   ChangePassword,
   Panel,
   Contact,
   Courses,
   FirstVideosContainer,
   PageNotFound,
   AccessDenied,
   AllPartVideo,
   Provisions,
   UsualQuestions,
   KeyPlan,
} from '../components/index';
import { AnimatePresence } from 'framer-motion';
import CourseItem from '../components/main-routes/courses/course-item/CourseItem';
import SelectedCourses from '../components/main-routes/courses/selected-courses/SelectedCourses';

const ToosClass = () => {
   const { is_active } = useSelector((state) => state.userReducer.userInfo);
   const location = useLocation();
   return (
      <AnimatePresence exitBeforeEnter>
         <MainLayout>
            <Switch location={location} key={location.key}>
               <Route path='/register' component={Register} />
               <Route path='/get-code' component={GetCode} />
               <Route path='/enter-code' component={ForgotPassCode} />
               <Route path='/fill-profile' component={CompleteProfile} />
               <Route path='/login' component={Login} />
               <Route path='/courses' component={Courses} />
               <Route path='/forget-password' component={ForgetPassword} />
               <Route path='/change-password' component={ChangePassword} />
               <Route path='/contact-us' component={Contact} />
               <Route path='/teachers' component={TeacherGallery} />
               <Route path='/key-plan' component={KeyPlan} />
               <Route
                  path='/part-one-videos'
                  component={FirstVideosContainer}
               />
               <Route
                  path='/profile'
                  component={is_active ? Panel : AccessDenied}
               />
               <Route path='/about-us' component={AboutUs} />
               <Route path='/provisions' component={Provisions} />
               <Route path='/usual-questions' component={UsualQuestions} />
               <Route path='/all-courses' component={SelectedCourses} />
               <Route path='/' exact component={HomePage} />
               <Route path='*' component={PageNotFound} />
            </Switch>
         </MainLayout>
      </AnimatePresence>
   );
};

export default ToosClass;
