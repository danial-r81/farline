import React from 'react';
import Item from './Item';

const SelectGrade = () => {
   return (
      <>
         <Item
            classN='tenth-grade'
            style={{ top: '-9%' }}
            itemFor='grade'
            text='دهم'
            initial={{
               y: '33vh',
               opacity: 0,
            }}
            animate={{
               y: 0,
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            exit={{
               y: '33vh',
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            value='1'
         />
         <Item
            classN='eleventh-grade'
            style={{ top: '61%', left: '83%' }}
            itemFor='grade'
            text='یازدهم'
            initial={{
               x: '-20vw',
               y: '-20vh',
               opacity: 0,
            }}
            animate={{
               x: 0,
               y: 0,
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            exit={{
               y: '33vh',
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            value='2'
         />
         <Item
            classN='tweleve-grade'
            style={{ top: '61%', left: '-7%' }}
            itemFor='grade'
            text='دوازدهم'
            initial={{
               x: '20vw',
               y: '-20vh',
               opacity: 0,
            }}
            animate={{
               x: 0,
               y: 0,
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            exit={{
               y: '33vh',
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            value='1'
         />
      </>
   );
};

export default SelectGrade;
