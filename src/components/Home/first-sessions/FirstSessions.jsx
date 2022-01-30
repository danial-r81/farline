import React from 'react';
import { Link } from 'react-router-dom';

import './first-sessions.css';

export const FirstSessions = () => {
  return (
    <div className='first-sessions-container'>
      <div className='first-sessions-title'>مشاهده جلسات اول</div>
      <div className='first-sessions-text'>
        از طریق لینک زیر میتوانید جلسات اول از هر دوره را مشاهده کنید
      </div>
      <div className='first-sessions-link'>
        <Link to='/part-one-videos'>مشاهده</Link>
      </div>
    </div>
  );
};
