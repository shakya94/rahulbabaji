import React from 'react';
import { Tooltip } from 'react-tooltip';
import '../App.css';

function Numbers() {
  const total = 43567;
  const urlList = [
    { name: 'Cancer', no: '456' },
    { name: 'Piles', no: '456' },
    { name: 'Kidney Failure', no: '684' },
    { name: 'Mental Disorders', no: '930' },
    { name: 'Multiple Organ Failure', no: '265' },
    { name: 'Auto-Immune Diseases ', no: '857' },
    { name: 'Liver', no: '574' },
    { name: 'ENT', no: '574' },
    { name: 'Eye', no: '574' },
    { name: 'Drug Abuse ', no: '574' },
    { name: 'Skin Diseases', no: '574' },
    { name: 'Mouth Problems', no: '574' },
  ];
  const Cancer = ['Skin Cancer','Breast Cancer','Blood Cancer','All Cancer'];
  const Piles = ['Bleeding','Mucus','Operated Piles'];
  const Kidney = ['Polychystic','Renal Cell Carcinoma','High Cretinine','Protenuria','Cystitis','Stones','Nephratic Syndrome','Hydronephrosis'];
  const Mental = ['Dillusion','Parkinson','Brain Tumor','Aeperal Atropy','Migraine','Acute Paralysis','Multiple Selorosis','G-B Syndrome'];
  const Multiple = ['Mulitple Organ Failure'];
  const AutoImmune = ['Autoimmune'];
  const Liver = ['Polycystic Liver','Liver Cirrosis','Bilibrion','Glibeaf Syndrome','HCC','Hepatitis A B C','Loss of Appetite','Cealic Disease','Nausea','Wilson Disease'];
  const ENT = ['Dischare','CSOM','Loss of hearing'];
  const Eye = ['Glucoma','Eye Cyst','Rebitinus Pigmatosa'];
  const Drug = ['Ill effects of Medicine'];
  const Skin = ['Psorosis','White Spot(Virtigo)','Lichen Planus'];
  const Mouth = ['Oral Lichen Planus','Oral Submucosa Flrosis','Syphlisis'];

  const diseases=[
    {name: Cancer,nom:24},
    {name: Piles,nom:24},
    {name: Kidney,nom:24},
    {name: Mental,nom:24},
    {name: Multiple,nom:24},
    {name: AutoImmune,nom:24},
    {name: Liver,nom:24},
    {name: ENT,nom:24},
    {name: Eye,nom:24},
    {name: Drug,nom:24},
    {name: Skin,nom:24},
    {name: Mouth,nom:24}
  ];
  return (
    <div className='py-20'>
      <div className="headers mt-4">Total Patients Cured<br/>{total}</div>
      <div className='row m-1' style={{ justifyContent: 'space-around' }}>
        {urlList.map((tempNo, index) => (
          <div key={index} className={`my-anchor-element-${index} no col-12 col-xl-4 m-2 p-3 d-flex justify-content-center align-items-center`}>
            <h4>{tempNo.name}:<br />
              <div className='d-flex justify-content-center align-items-center'>{tempNo.no}</div>
            </h4>          
          </div>
        ))}
        {diseases.map((dis,ind)=>(
          <Tooltip anchorSelect={`.my-anchor-element-${ind}`} place="right" className="custom-tooltip">
            {dis.name.map((obj,indi)=>(

           
          <div key={indi}> {obj} </div>
          ))}
          </Tooltip>
        ))}         
      </div>
    </div>
  );
}

export default Numbers;
