import React from 'react';

function Numbers() {
  const total = 43567;
  const urlList = [
    { name: 'Cancer', no: '456' },
    { name: 'Kidney Stone', no: '684' },
    { name: 'Hairfall', no: '930' },
    { name: 'Infertility', no: '265' },
    { name: 'Digestive Issues', no: '857' },
    { name: 'Migraine', no: '574' },
  ];

  return (
    <div className='py-20'>
      <div className="headers mt-4">Total Patients Cured<br/>{total}</div>
      <div className='row m-4' style={{ justifyContent: 'space-around' }}>
        {urlList.map((tempNo, index) => (
          <div key={index} className="no col-12 col-xl-4 mb-4 p-4 d-flex justify-content-center align-items-center">
            <h4>{tempNo.name}:<br />
            <div className='d-flex justify-content-center align-items-center'>{tempNo.no}</div></h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;
