import React from 'react'
import Ajay from './Images/Ajay.jpeg';
import Nagma from './Images/Nagma.jpeg';
import Ayushman from './Images/Ayushman.jpeg';
import Virendra from './Images/Virendra.jpeg';

function Doctors() {
    const doctor=[
       { name: "Dr. Ajay",designation:"BAMS", urL:Ajay},
       { name: "Dr. Ayushman Gupta",designation:"BAMS", urL:Ayushman},
       { name: "Dr. Virendra",designation:"BAMS", urL:Virendra},
       { name: "Dr. Nagma",designation:"BAMS", urL:Nagma}
    ]  
  return (
    <div>
      <div className='doctorDiv row'>
         {doctor.map((content,index) =>(
             <div className='cardDoctor col-xl-3 col-1'>
                 <div className='pt-4 '>
             <img src={content.urL} alt="docimg" width="280px" height="240px" className="img-fluid rounded"></img></div>
             <div><b>{content.name}</b></div>
             <div className='fs-7 pb-2'>{content.designation}</div>
         </div>
         ))}
      </div>
    </div>
  )
}

export default Doctors
