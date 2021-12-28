import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllUsers } from '../../redux/features/userInfo';
import Nav from '../common/Nav/Nav';

const MainLayout = ({ children, history }) => {
  const dispatch = useDispatch();

  const phoneNumber = localStorage.getItem('phoneNumber');

  useEffect(() => {
    if (phoneNumber) {
      dispatch(getAllUsers());
    }
  }, []);
  return (
    <Fragment>
      {history.location.pathname === '/profile' ? null : <Nav />}
      {children}
    </Fragment>
  );
};

export default withRouter(MainLayout);
