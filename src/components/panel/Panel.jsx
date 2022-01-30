import React from 'react';
import { BoughtCourseTable } from './bought-course/BoughtCourseTable';
import PanelNav from './panel-nav/PanelNav';
import { useSelector } from 'react-redux';
import { PanelLayout } from './PanelLayout/PanelLayout';

import './panel.css';
import { PanelCourses } from './courses/PanelCourses';
import { Suggestion } from './suggestion/Suggestion';
import { EditAccount } from './edit-account/EditAccount';
import { PanelRoutes } from './PanelLayout/PanelRoutes';
export const Panel = () => {
  const { firstName, lastName } = useSelector(
    (state) => state.userReducer.userInfo
  );

  return (
    <div className='panel-contain'>
      <div className='user-logo'>
        <img src='../images/user.png' alt='' />
        <i className='fa fa-shopping-cart'></i>
      </div>
      <PanelNav />
      <div className='panel-main'>
        <div className='panel-bar'>
          {firstName && lastName ? (
            <div className='panel-user'>
              <div className='panel-username'>{`${firstName} ${lastName}`}</div>
            </div>
          ) : null}
        </div>
        <div className='panel-table'>
          <PanelRoutes />
        </div>
      </div>
    </div>
  );
};
