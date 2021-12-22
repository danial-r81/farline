import { Fragment } from 'react';
import { withRouter } from 'react-router';
import Nav from '../common/Nav/Nav';

const MainLayout = ({ children, history }) => {
  console.log(history);
  return (
    <Fragment>
      {history.location.pathname === '/profile' ? null : <Nav />}
      {children}
    </Fragment>
  );
};

export default withRouter(MainLayout);
