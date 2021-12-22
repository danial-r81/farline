import React from 'react';
import './boughtCourses.css';

export const boughtCourseTable = () => {
  return (
    <section className='table-container'>
      <div class='tbl-header'>
        <table cellpadding='0' cellspacing='0' border='0'>
          <thead>
            <tr>
              <th>نام درس</th>
              <th>نام استاد</th>
              <th>قبمت</th>
              <th>وضعیت دوره</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class='tbl-content'>
        <table cellpadding='0' cellspacing='0' border='0'>
          <tbody>
            <tr>
              <td>ریاضی</td>
              <td>کسخلیان زاده</td>
              <td>$1.38</td>
              <td>+2.01</td>
            </tr>
            <tr>
              <td>ریاضی</td>
              <td>کسخلیان زاده</td>
              <td>$2.38</td>
              <td>-0.01</td>
            </tr>
            <tr>
              <td>ریاضی</td>
              <td>کسخلیان زاده</td>
              <td>$3.22</td>
              <td>+0.01</td>
            </tr>
            <tr>
              <td>ریاضی</td>
              <td>کسخلیان زاده</td>
              <td>$3.22</td>
              <td>+0.01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
