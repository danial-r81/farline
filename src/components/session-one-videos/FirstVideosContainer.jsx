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
      </div>
    </div>
  );
};

export default FirstVideosContainer;
