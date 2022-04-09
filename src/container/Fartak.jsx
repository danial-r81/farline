import { Route, useLocation, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
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
   PageNotFound,
   AccessDenied,
   Provisions,
   UsualQuestions,
   StudyMap,
   FartakNews,
   CoursePackPage,
   CoursePage,
} from '../components/index';
import {
   Cart,
   Dashbord,
   EditAccount,
   OnlineClasses,
   Suggestions,
   MyCoursesContainer,
   FinancialServices,
   WeekPlan,
} from '../components/panel/index';

const Fartak = () => {
   const { is_active } = useSelector((state) => state.user.userInfo);
   const location = useLocation();
   return (
      <MainLayout>
         <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
               <Route path='/register' element={<Register />} />
               <Route path='/get-code' element={<GetCode />} />
               <Route path='/enter-code' element={<ForgotPassCode />} />
               <Route path='/fill-profile' element={<CompleteProfile />} />
               <Route path='/login' element={<Login />} />
               <Route path='/forget-password' element={<ForgetPassword />} />
               <Route path='/change-password' element={<ChangePassword />} />
               <Route path='/contact-us' element={<Contact />} />
               <Route path='/teachers' element={<TeacherGallery />} />
               <Route
                  path='/courses/:packageName'
                  element={<CoursePackPage />}
               />
               <Route
                  path='/courses/:pakageName/:course'
                  element={<CoursePage />}
               />
               <Route path='/study-map' element={<StudyMap />} />
               <Route
                  path='/profile'
                  element={is_active ? <Panel /> : <AccessDenied />}>
                  <Route path='dashbord' element={<Dashbord />} />
                  <Route path='edit-account' element={<EditAccount />} />
                  <Route path='courses' element={<OnlineClasses />} />
                  <Route path='cart' element={<Cart />} />
                  <Route path='suggested-courses' element={<Suggestions />} />
                  <Route path='my-courses' element={<MyCoursesContainer />} />
                  <Route path='week-plan' element={<WeekPlan />} />
                  <Route
                     path='financial-services'
                     element={<FinancialServices />}
                  />
               </Route>
               <Route path='/about-us' element={<AboutUs />} />
               <Route path='/provisions' element={<Provisions />} />
               <Route path='/usual-questions' element={<UsualQuestions />} />
               <Route path='/fartak-news' element={<FartakNews />} />
               <Route path='/' element={<HomePage />} />
               <Route path='*' element={<PageNotFound />} />
            </Routes>
         </AnimatePresence>
      </MainLayout>
   );
};

export default Fartak;
