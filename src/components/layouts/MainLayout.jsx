import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import { getAllUsers } from '../../redux/features/userInfo';
import Nav from '../Nav/Nav';

const MainLayout = ({ children }) => {
   const dispatch = useDispatch();
   const history = useHistory();

   const phoneNumber = localStorage.getItem('phoneNumber');

   useEffect(() => {
      if (phoneNumber) {
         dispatch(getAllUsers());
      }
   }, []);
   return (
      <Fragment>
         {history.location.pathname.includes('profile') ? null : <Nav />}
         {children}
      </Fragment>
   );
};

export default withRouter(MainLayout);
