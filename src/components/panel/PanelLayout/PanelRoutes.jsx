import React from 'react';
import { Route, Switch } from 'react-router';
import { BoughtCourseTable } from '../bought-course/BoughtCourseTable';
import { PanelCourses } from '../courses/PanelCourses';
import { EditAccount } from '../edit-account/EditAccount';
import Orders from '../orders/Orders';
import { Suggestion } from '../suggestion/Suggestion';
import { PanelLayout } from './PanelLayout';

export const PanelRoutes = () => {
  return (
    <PanelLayout>
      <Switch>
        <Route
          path='/profile/bought-courses'
          exact
          component={BoughtCourseTable}
        />
        <Route path='/profile/edit-account' exact component={EditAccount} />
        <Route path='/profile/courses' exact component={PanelCourses} />
        <Route path='/profile/orders' exact component={Orders} />
        <Route path='/profile/suggested-courses' exact component={Suggestion} />
      </Switch>
    </PanelLayout>
  );
};
