import React from 'react';
import './boughtCourses.css';
import Box from './Box';

export const BoughtCourseTable = () => {
  return (
    <section className='table-container'>
      <Box cardname='دوره های شما' icon='	fa fa-video-camera' />
      <Box cardname='امور مالی' icon='fa fa-money' />
      <Box cardname='برنامه مطالعاتی' icon='fa fa-map-signs' />
    </section>
  );
};
