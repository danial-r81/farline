import React from 'react';
import FirstVideos from './FirstVideos';

import './one-part-style.css';

const FirstVideosContainer = () => {
  return (
    <div className='main-one-part-container'>
      <div className='title-header'>
        <h1>مشاهده جلسات اول دوره ها</h1>
      </div>
      <div className='show-one-part'>
        <span>جلسات اول دوره های ما را به صورت رایگان تماشا کنید!</span>
        <img src='images/Webinar.gif' alt='' />
      </div>
      <div className='part'>
        {[1, 2, 3, 4].map((item) => (
          <FirstVideos
            name='نام درس'
            topic='موضوع'
            url='video/math-phizics.mp4'
            categorey='دروس عمومی'
          />
        ))}
        {/* <div className='border'></div>
        <div className='ti-btn'>
          <h2>دروس اختصاصی ریاضی فیزیک</h2>
          <button className='btn' type='button'>
            مشاهده همه
          </button>
        </div>
        <div className='math-phizics courses-video-container'>
          <div className='video-container'>
            <video controls>
              <source src='video/math-phizics.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
          <div className='video-container'>
            <video controls>
              <source src='video/math-phizics.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
          <div className='video-container'>
            <video controls>
              <source src='video/math-phizics.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
        </div>
        <div className='border'></div>
        <div className='ti-btn'>
          <h2>دروس اختصاصی علوم تجربی</h2>
          <button className='btn' type='button'>
            مشاهده همه
          </button>
        </div>
        <div className='Scince courses-video-container'>
          <div className='video-container'>
            <video controls>
              <source src='video/Scince.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
          <div className='video-container'>
            <video controls>
              <source src='video/Scince.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
          <div className='video-container'>
            <video controls>
              <source src='video/Scince.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
        </div>
        <div className='border'></div>
        <div className='ti-btn'>
          <h2>دروس اختصاصی علوم انسانی</h2>
          <button className='btn' type='button'>
            مشاهده همه
          </button>
        </div>
        <div className='humanities courses-video-container'>
          <div className='video-container'>
            <video controls>
              <source src='video/humanities.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
          <div className='video-container'>
            <video controls>
              <source src='video/humanities.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
          <div className='video-container'>
            <video controls>
              <source src='video/humanities.mp4' type='video/mp4' />
            </video>
            <h3>نام درس</h3>
            <h4>موضوع</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FirstVideosContainer;
