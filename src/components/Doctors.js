import React from 'react'
import Ajay from './Images/Ajay.jpeg';
import Nagma from './Images/Nagma.jpeg';
import Ayushman from './Images/Ayushman.jpeg';
import Virendra from './Images/Virendra.jpeg';
import Abhishek from './Images/Abhishek.jpeg';
import Avinash from './Images/Avinash.png';
import Hukum from './Images/Hukum.png';

function Doctors() {
    const doctor=[
       { name: "Dr. Ajay",designation:"BAMS", urL:Ajay},
       { name: "Dr. Ayushman Gupta",designation:"BAMS", urL:Ayushman},
       { name: "Dr. Virendra",designation:"BAMS", urL:Virendra},
       { name: "Dr. Nagma",designation:"BAMS", urL:Nagma},
       { name: "Dr. Abhishek Yadav",designation:"BHMS", urL:Abhishek},
       { name: "Dr. Avinash Bharadwaj",designation:"BHMS", urL:Avinash},
       { name: "Dr. Hukum Singh",designation:"BHMS", urL:Hukum}
    ]  
  return (
    <div>
      <div className='doctorDiv row'>    
         {doctor.map((content,index) =>(
             <div className='cardDoctor col-3 mb-4'>
                 <div className='doctorImg'>
             <img src={content.urL} alt="docimg" height="250px" width="280px" className="img-fluid rounded overflow-hidden m-2"></img></div>
             <div><b>{content.name}</b></div>
             <div className='fs-7 pb-2'>{content.designation}</div>     
             </div>   
         ))}
          
      </div>
    </div>
  )
}

export default Doctors
