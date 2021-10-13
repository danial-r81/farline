import { Route, Switch } from 'react-router';
import Login from '../components/forms/Login';
import MainLayout from '../components/layouts/MainLayout';

const ToosClass = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path='/' exact component={Login} />
      </Switch>
    </MainLayout>
  );
};

export default ToosClass;
