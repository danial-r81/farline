import React from 'react';
import Item from './Item';

const SelectTopic = () => {
   return (
      <>
         <Item
            classN='general-lessons'
            style={{ top: '-9%' }}
            itemFor='topic'
            text='دروس عمومی'
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
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            value='2'
         />
         <Item
            classN='math-lessons'
            style={{ top: '37%', left: '88%' }}
            itemFor='topic'
            text='دروس تخصصی ریاضی'
            initial={{
               x: '-15vw',
               opacity: 0,
            }}
            animate={{
               x: 0,
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            exit={{
               y: '33vh',
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            value='1'
         />
         <Item
            classN='experiential-lessons'
            style={{ top: '37%', left: '-10%' }}
            itemFor='topic'
            text='دروس تخصصی تجربی'
            initial={{
               x: '15vw',
               opacity: 0,
            }}
            animate={{
               x: 0,
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            exit={{
               y: '33vh',
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            value='4'
         />
         <Item
            classN='humanity-lessons'
            style={{ top: '87%', left: '39%' }}
            itemFor='topic'
            text='دروس تخصصی انسانی'
            initial={{
               y: '-15vw',
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
               opacity: 1,
               transition: {
                  ease: 'easeIn',
                  duration: 1,
                  type: 'just',
               },
            }}
            value='3'
         />
      </>
   );
};

export default SelectTopic;
