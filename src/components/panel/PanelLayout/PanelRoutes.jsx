import { Route, Switch } from 'react-router';
import { Dashbord } from '../dashbord/Dashbord';
import PanelCourses from '../courses/PanelCourses';
import { EditAccount } from '../edit-account/EditAccount';
import Cart from '../cart/Cart';
import Suggestion from '../suggestion/Suggestion';
import { PanelLayout } from './PanelLayout';

export const PanelRoutes = () => {
   return (
      <PanelLayout>
         <Switch>
            <Route path='/profile/dashbord' exact component={Dashbord} />
            <Route path='/profile/edit-account' exact component={EditAccount} />
            <Route path='/profile/courses' exact component={PanelCourses} />
            <Route path='/profile/cart' exact component={Cart} />
            <Route
               path='/profile/suggested-courses'
               exact
               component={Suggestion}
            />
         </Switch>
      </PanelLayout>
   );
};
