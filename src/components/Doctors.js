import React from 'react'
import Ajay from './Images/Ajay.jpeg';
import Nagma from './Images/Nagma.jpeg';
import Ayushman from './Images/Ayushman.jpeg';
import Virendra from './Images/Virendra.jpeg';
import Abhishek from './Images/Abhishek.jpeg';
import Avinash from './Images/Avinash.jpeg';

function Doctors() {
    const doctor=[
       { name: "Dr. Ajay",designation:"BAMS", urL:Ajay},
       { name: "Dr. Ayushman Gupta",designation:"BAMS", urL:Ayushman},
       { name: "Dr. Virendra",designation:"BAMS", urL:Virendra},
       { name: "Dr. Nagma",designation:"BAMS", urL:Nagma},
       { name: "Dr. Abhishek Yadav",designation:"BHMS", urL:Abhishek},
       { name: "Dr. Avinash Bharadwaj",designation:"BHMS", urL:Avinash}
    ]  
  return (
    <div>
      <div className='doctorDiv row px-4'>
         {doctor.map((content,index) =>(
             <div className='cardDoctor col-xl-4 col-md-4 col-1 md-4'>
                 <div className='doctorImg pt-4'>
             <img src={content.urL} alt="docimg" width="280px" height="240px" className="img-fluid rounded overflow-hidden"></img></div>
             <div><b>{content.name}</b></div>
             <div className='fs-7 pb-2'>{content.designation}</div>
         </div>
         ))}
      </div>
    </div>
  )
}

export default Doctors
