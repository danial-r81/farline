const Box = ({ icon, text }) => {
   return (
      <div className='box'>
         <div className='boxs'>
            <div className=''>
               <div className='cardname'>{text}</div>
            </div>
            <i className={icon}></i>
         </div>
      </div>
   );
};

export default Box;
