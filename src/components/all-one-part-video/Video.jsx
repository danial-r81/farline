import { Fragment } from 'react';

const Video = () => {
  return (
    <Fragment>
      <h2>دروس عمومی</h2>
      <div>
        <video src='video/general.mp4' controls></video>
        <h3>عنوان درس</h3>
        <h4>موضوع قسمت</h4>
      </div>
    </Fragment>
  );
};

export default Video;
