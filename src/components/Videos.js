import React from 'react';
import ReactPlayer from 'react-player/youtube';

function Videos() {
  const urlList = [
    {url:'https://www.youtube.com/watch?v=SptC-_KJ2ws'},
    {url:'https://www.youtube.com/watch?v=kFEq4SIekak'},
    {url:'https://www.youtube.com/watch?v=QrcL1ftFIdI'}
  ];

  return (
    <div className='py-20'>
      <div className="headers">Our Testimonials</div>
      <div className='row m-4'>
        {urlList.map((tempUrl,index)=>( 
          <div key={index} className="col-12 col-xl-4 mb-4 d-flex justify-content-center align-items-center">
            <ReactPlayer width={330} height={200} url={tempUrl.url} />
          </div>
        ))}
      </div>
         <a href='/Testimonials'><button className='viewmore mb-4'>View More</button></a>
    </div>
  );
}

export default Videos;
