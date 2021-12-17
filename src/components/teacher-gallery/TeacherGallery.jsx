import React, { Fragment } from 'react';
import { Teacher } from './Teacher';

import './teacher.css';
export const teacherGallery = () => {
  return (
    <Fragment>
      <div class='header-name'>
        <h1 class='title'>اساتید آموزشگاه فرتاک</h1>
      </div>
      <section class='main-gallery'>
        {[1, 2, 3].map((item) => (
          <Teacher />
        ))}
      </section>
    </Fragment>
  );
};
