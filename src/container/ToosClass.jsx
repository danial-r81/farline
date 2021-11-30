import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router';
import CompleteProfile from '../components/forms/CompleteProfile';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import MainLayout from '../components/layouts/MainLayout';
import GetCode from '../components/forms/GetCode';
import { Topics } from '../components/courses/Topics';

const ToosClass = () => {
  return (
    <MainLayout>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/get-code' component={GetCode} />
          <Route path='/fill-profile' component={CompleteProfile} />
          <Route path='/login' exact component={Login} />
          <Route path='/courses' exact component={Topics} />
        </Switch>
      </AnimatePresence>
    </MainLayout>
  );
};

export default ToosClass;
