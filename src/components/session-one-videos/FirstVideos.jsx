import React, { Fragment } from 'react';

const FirstVideos = ({ name, topic, url, categorey }) => {
  return (
    <Fragment>
      <div className='border'></div>
      <div className='ti-btn'>
        <h2>{categorey}</h2>
        <button className='btn' type='button'>
          مشاهده همه
        </button>
      </div>
      <div className='general courses-video-container'>
        <div className='video-container'>
          <video controls>
            <source src={url} type='video/mp4' />
          </video>
          <h3>{name}</h3>
          <h4>{topic}</h4>
        </div>
        <div className='video-container'>
          <video controls>
            <source src={url} type='video/mp4' />
          </video>
          <h3>{name}</h3>
          <h4>{topic}</h4>
        </div>
        <div className='video-container'>
          <video controls>
            <source src={url} type='video/mp4' />
          </video>
          <h3>{name}</h3>
          <h4>{topic}</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default FirstVideos;
