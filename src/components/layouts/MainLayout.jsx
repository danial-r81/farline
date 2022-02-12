import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllUsers } from '../../redux/features/userInfo';
import Nav from '../Nav/Nav';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const phoneNumber = localStorage.getItem('phoneNumber');

  useEffect(() => {
    if (phoneNumber) {
      dispatch(getAllUsers());
    }
  }, []);
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
};

export default withRouter(MainLayout);
