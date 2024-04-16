import React from 'react';
import { Tooltip } from 'react-tooltip';
import '../App.css';

function Numbers() {
  const total = 43567;
  const urlList = [
    { name: 'Cancer', no: '456+' },
    { name: 'Piles', no: '296+' },
    { name: 'Kidney', no: '574+' },
    { name: 'Mental', no: '480+' },
    { name: 'Multiple Organ Failure', no: '320+' },
    { name: 'Auto-Immune Disease ', no: '642+' },
    { name: 'Liver', no: '756+' },
    { name: 'ENT', no: '800+' },
    { name: 'Eye', no: '650+' },
    { name: 'Drug Abuse', no: '900+' },
    { name: 'Skin', no: '337+' },
    { name: 'Oral Issues', no: '867+' },
   
  ];
  const Cancer = ['Skin Cancer','Breast Cancer','Blood Cancer','Mouth Cancer','Ovarian Cancer','Prostate cancer'];
  const Piles = ['Bleeding','fistula','Itching','Feeling of Constipation','Burning and Severe pain'];
  const Kidney = ['Polycystic','Renal Cell Carcinoma','High Creatinine','Protenuria','Cystitis','Stones','Nephrotic Syndrome','Hydronephrosis'];
  const Mental = ['Delusion','Parkinson','Brain Tumor','Appeal Atropy','Migraine','Acute Paralysis','Multiple Sckerosis','G-B Syndrome'];
  const Multiple = ['Multiple Organ Dysfunction Syndrome','Lungs Collaps','Rhd Disease','Septicemia'];
  const AutoImmune = ['Dermatomyositis','Graves disease','Inflammatory bowel disease','Multiple sclerosis','Celiac disease'];
  const Liver = ['Cystic Liver','Liver Cirrhosis','Glibert Syndrome','Fatty Liver','Hepatitis A B C','Hemochromatosis',' Jaundice Wilson Disease'];
  const ENT = ['Dischare','CSOM','Loss of hearing','Tonsillitis','Nosebleed','Chronic rhinosinusitis'];
  const Eye = ['Age Related','macular Degeneration Blepharitis','Glucoma','Conjunctivitis','Eye Discharge','Retinal detachment','Eye Cancer','Twitching eye','Stye'];
  const Drug = ['All effects of Medicine','Inhalants','Alcohol','Methamphetamine'];
  const Skin = ['Acne','Pimple','White Spot(Vitiligo)','Blister','Allergy (any Types)','Rosacea','Eczema','Psoriasis','Cellulitis','Measles','Chicken Pox','Ring Worm','Melasma','Impetigo'];
  const Mouth = ['Oral Lichen Planus','Oral Submucosa Flrosis','Prevention','Oral cancer','Edentulism'];

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
      <div className='row ml-1' style={{ justifyContent: 'space-around' }}>
        {urlList.map((tempNo, index) => (
          <div key={index} className={`my-anchor-element-${index} no  col-xl-4 col-5 mx-2 px-3 py-1 d-flex justify-content-center align-items-center`}>
            <h4>{tempNo.name}:<br/>
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
