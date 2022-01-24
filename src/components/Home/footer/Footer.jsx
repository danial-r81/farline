import React from 'react';

import './footer.css';
export const Footer = () => {
  return (
    <footer>
      <section className='footer-main'>
        <div className='footer-right'>
          <div className='footer-container'>
            <div className='address-boy detail'>
              <i className='fa fa-map-marker'></i>
              <p>
                میدان 9 دی ، جنب سرای محله عباسی ،ابتدای خیابان شیخ محمدی شرقی ،
                کوچه مدرسه ، کوچه احدی ، دبیرستان غیردولتی طوس (دوره دوم) ، ویژه
                پسران
              </p>
            </div>
            <div className='tel-boy detail'>
              <i className='fa fa-phone'></i>
              <p>021-55674354</p>
            </div>

            <div className='address-girl detail'>
              <i className='fa fa-map-marker'></i>
              <p>
                خیابان قلعه مرغی ، میدان شهدای مدافع حرم ، ابتدای نواب جنوب به
                شمال ، خیابان شیخ محمدی شرقی ، کوچه مدرسه ، آموزشگاه حمیدان ،
                ویژه دختران
              </p>
            </div>
            <div className='tel-girl detail'>
              <i className='fa fa-phone'></i>
              <p>021-91301962</p>
            </div>
          </div>
          <div className='footer-items'>
            <ul>
              <li>
                <a href='#'> اساتید طوس کلاس</a>
              </li>
              <li>
                <a href='#'>تقویم آموزشی</a>
              </li>
              <li>
                <a href='#'>درباره ما</a>
              </li>
              <li>
                <a href='#'>تماس با مشاورین</a>
              </li>
              <li>
                <a href='#'>سوالات متداول</a>
              </li>
              <li>
                <a href='#'>قوانین سایت</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-left'>
          <div className='location'>
            <div className='location-boy'>
              <a
                href='https://maps.app.goo.gl/fXg2t6trMPWHdd966'
                target='_blank'>
                <img src='images/toos.jpg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
