import React from 'react';
import { BoughtCourseTable } from './bought-course/BoughtCourseTable';
import { PanelNav } from './panel-nav/PanelNav';
import { useSelector } from 'react-redux';

import './panel.css';
export const Panel = () => {
  const { firstName, lastName } = useSelector(
    (state) => state.userReducer.userInfo
  );

  return (
    <div className='panel-contain'>
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
          <BoughtCourseTable />
        </div>
      </div>
    </div>
  );
};
