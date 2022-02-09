import { useEffect } from 'react';
import http from '../../services/httpService';
import config from '../../services/config.json';
import './all-videos.css';

const AllPartVideo = () => {
  // const course_indexes = [1, 2, 3, 4];
  // useEffect(() => {
  //   course_indexes.map((index) => {
  //     http
  //       .get(`${config.baseUrl}/api/courses/${index}/`)
  //       .then((res) => console.log(res))
  //       .catch((e) => console.log(e));
  //   });
  // }, []);
  return (
    <main className='main-container-video'>
      <section className='one-part-general'>
        <h2>دروس عمومی</h2>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
      </section>
      <section className='one-part-math-phizics'>
        <h2>دروس اختصاصی ریاضی فیزیک</h2>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
      </section>
      <section className='one-part-Scince'>
        <h2>دروس اختصاصی علوم تجربی</h2>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
      </section>
      <section className='one-part-humanities'>
        <h2>دروس اختصاصی علوم انسانی</h2>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
        <div>
          <video src='video/general.mp4' controls></video>
          <h3>عنوان درس</h3>
          <h4>موضوع قسمت</h4>
        </div>
      </section>
    </main>
  );
};

export default AllPartVideo;
