import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getHomePageCovers } from '../../redux/features/covers';
import { getAllUsers } from '../../redux/features/userInfo';
import Nav from '../Nav/Nav';

const MainLayout = ({ children }) => {
   const dispatch = useDispatch();
   const { pathname } = useLocation();

   const phoneNumber = localStorage.getItem('phoneNumber');

   useEffect(() => {
      if (phoneNumber) {
         dispatch(getAllUsers());
      }
      dispatch(getHomePageCovers());
   }, []);
   return (
      <Fragment>
         {pathname.includes('/profile') ? null : <Nav />}
         {children}
      </Fragment>
   );
};

export default MainLayout;
