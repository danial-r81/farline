import { useEffect, useState } from 'react';
import { Teacher } from './Teacher';
import http from '../../../services/httpService';
import config from '../../../services/config.json';

import './teacher.css';
const TeacherGallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    http
      .get(`${config.baseUrl}/api/teachers/`)
      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className='teacher-gallery-container'>
      <div className='header-name'>
        <h1 className='title'>اساتید آموزشگاه فرتاک</h1>
      </div>
      <section className='main-gallery'>
        {data.map((item, index) => (
          <Teacher key={index} teacher={item} />
        ))}
      </section>
    </div>
  );
};

export default TeacherGallery;
