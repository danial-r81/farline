import { Route, useLocation, Routes } from 'react-router';
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
   PageNotFound,
   AccessDenied,
   Provisions,
   UsualQuestions,
   KeyPlan,
} from '../components/index';
import { AnimatePresence } from 'framer-motion';
import SelectedCourses from '../components/main-routes/courses/selected-courses/SelectedCourses';
import Dashbord from '../components/panel/dashbord/Dashbord';
import EditAccount from '../components/panel/edit-account/EditAccount';
import PanelCourses from '../components/panel/courses/PanelCourses';
import Cart from '../components/panel/cart/Cart';
import Suggestion from '../components/panel/suggestion/Suggestion';

const ToosClass = () => {
   const { is_active } = useSelector((state) => state.userReducer.userInfo);
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
               <Route path='/select-topic' element={<Courses />} />
               <Route path='/forget-password' element={<ForgetPassword />} />
               <Route path='/change-password' element={<ChangePassword />} />
               <Route path='/contact-us' element={<Contact />} />
               <Route path='/teachers' element={<TeacherGallery />} />
               <Route path='/key-plan' element={<KeyPlan />} />
               <Route
                  path='/profile'
                  element={is_active ? <Panel /> : <AccessDenied />}>
                  <Route path='dashbord' element={<Dashbord />} />
                  <Route path='edit-account' element={<EditAccount />} />
                  <Route path='courses' element={<PanelCourses />} />
                  <Route path='cart' element={<Cart />} />
                  <Route path='suggested-courses' element={<Suggestion />} />
               </Route>
               <Route path='/about-us' element={<AboutUs />} />
               <Route path='/provisions' element={<Provisions />} />
               <Route path='/usual-questions' element={<UsualQuestions />} />
               <Route path='/all-courses' element={<SelectedCourses />} />
               <Route path='/' element={<HomePage />} />
               <Route path='*' element={<PageNotFound />} />
            </Routes>
         </AnimatePresence>
      </MainLayout>
   );
};

export default ToosClass;
