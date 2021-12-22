import React from 'react';
import { boughtCourseTable } from './bought-course/boughtCourseTable';

import './panel.css';
export const Panel = () => {
  return (
    <div class='panel-contain'>
      <div class='panel-nav'>
        <ul>
          <li>
            <a href='#'>
              <span class='icon icon-film'></span>
              <span class='panel-title'>کلاس های خریداری شده</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon icon-books'></span>
              <span class='panel-title'>سفارش ها</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon icon-cogs'></span>
              <span class='panel-title'>ویرایش حساب</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon icon-user'></span>
              <span class='panel-title'>پشتیبانی</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon icon-fire'></span>
              <span class='panel-title'>دوره های پیشنهادی </span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span class='icon icon-exit'></span>
              <span class='panel-title'>خروج</span>
            </a>
          </li>
        </ul>
      </div>
      <div class='panel-main'>
        <div class='panel-bar'>
          <div class='Hmenu'>
            <span class='icon-menu'></span>
          </div>
          <div class='panel-user'>
            <img src='img/user.png' alt='User' />
          </div>
        </div>

        <div class='card'>
          <div class='box'>
            <div class='boxs'>
              <div class=''>
                <div class='number'>1</div>
                <div class='cardname'>دوره های شما</div>
              </div>
              <i class='icon-cart'></i>
            </div>
          </div>
          <div class='box'>
            <div class='boxs'>
              <div class=''>
                <div class='number'>2</div>
                <div class='cardname'>مدرسین دوره ها</div>
              </div>
              <i class='icon-users'></i>
            </div>
          </div>
          <div class='box'>
            <div class='boxs'>
              <div class=''>
                <div class='number'>3</div>
                <div class='cardname'>ارتباط با ما</div>
              </div>
              <i class='icon-mail4'></i>
            </div>
          </div>
        </div>
        <div class='panel-table'>
          <boughtCourseTable />
        </div>
      </div>
    </div>
  );
};
