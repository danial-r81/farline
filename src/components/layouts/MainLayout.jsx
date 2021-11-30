import { Fragment } from 'react';
import Nav from '../common/Nav/Nav';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
};

export default MainLayout;
