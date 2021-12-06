import React from 'react';

import './footer.css';
export const Footer = () => {
  return (
    <footer>
      <section className='footer-main'>
        <div className='footer-container'>
          <div className='address-boy detail'>
            <i className='fa fa-map-marker'></i>
            <p>
              میدان 9 دی ،جنب سرای محله عباسی ،ابتدای خیابان شیخ محمدی شرقی ،
              کوچه مدرسه ، کوچه احدی ، دبیرستان غیردولتی طوس (دوره دوم)ویژه
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
              سهروردی شمالی ، خیابان عربعلی ، کوچه 13 ، پلاک 1 ، واحد 6 ویژه
              دختران
            </p>
          </div>
          <div className='tel-girl detail'>
            <i className='fa fa-phone'></i>
            <p>021-88741485</p>
          </div>
        </div>
        <div className='footer-items'>
          <ul>
            <li>
              <a href='#'> استاتید طوس کلاس</a>
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
        <div className='location'>
          <div className='location-boy'>
            <a href='https://maps.app.goo.gl/fXg2t6trMPWHdd966'>
              <img src='photos/toos.jpg' alt='' />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
