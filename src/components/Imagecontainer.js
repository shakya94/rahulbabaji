  import React from 'react';
  import hospimain from './Images/hospimain.jpeg';
  import '@fortawesome/fontawesome-free/css/all.css';

  function Imagecontainer() {
    return (
      <div className='contain py-20'>
        <div className='img-contain'>
        <img
          src={hospimain}
          width="100%"
          alt="Im should"
        /> </div>
        <div className='texti'>
        <p>Health Care<br/> For Whole Family</p>
        </div>
        <a className="custom-link" href="https://api.whatsapp.com/send?phone=919454900060&text=Hello%20I%20need%20appointment"><button className='btn'><i className="fas fa-phone pr-xl-4 pr-2 pl-0"></i>
  Book Appointment</button></a>
      </div>
    );
  }

  export default Imagecontainer;
