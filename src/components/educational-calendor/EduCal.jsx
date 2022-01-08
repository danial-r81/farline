import React from 'react';

import './val-edu-style.css';

export const EduCal = () => {
  return (
    <div class='main-val-container'>
      <div class='header-val-content'>
        <h1 class='val-header'>تقویم آموزشی طوس کلاس</h1>
      </div>
      <div class='val-container'>
        <div class='img-1'>
          <img src='images/val.png' alt='' />
        </div>
        <div class='img-2'>
          <img src='images/val2.png' alt='' />
        </div>
        <div class='totol-class box'>
          <h2>کلاس های جمع بندی (همایش)</h2>
          <p>
            دوره و جمع بندی نزدیک کنکور مهم ترین قدم موفقیت است.بعضی وقت ها دوره
            کردن به روش دلخواه شما پیش نمی رود و احساس می کنید که نتونستید همه
            مطالب را مرور کنید. کلاس های جمع بندی بهترین گزینه است.
          </p>
        </div>
        <div class='tip-class box'>
          <h2>کلاس های نکته و تست</h2>
          <p>
            کلاس های نکته و تست ، همان چیزی است که برای موفقیت لازم دارید.این
            کلاس ها در هفته های منتهی به کنکور برگزار می شود تا علاوه بر یادگیری
            نکته و تست های بی نظیر کنکور ، یک مرور وجمع بندی هم داشته باشی !
          </p>
        </div>
        <div class='start-class box'>
          <h2>کلاس های جامع سالیانه</h2>
          <p>
            با حضور در کلاس های جامع سالیانه ، می توانید درس ها را درکنار بهترین
            استاتید کشور یاد بگیرید و خودتون رو برای کنکور آماده کنید . از هر
            جای کشور که باشید می توانید تو کلاس بهترین اساتید کنکور شرکت کنید .
          </p>
        </div>
      </div>
    </div>
  );
};
