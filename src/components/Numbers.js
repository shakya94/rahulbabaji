import React from 'react';
import { Tooltip } from 'react-tooltip';

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
  const tool = [
    { Cancer: 'Skin Cancer', Hairfall: '456' },
    { Cancer: 'Blood Cancer', Hairfall: '456' },
    { Cancer: 'Lung Cancer', Hairfall: '456' },
    { Cancer: 'Mouth Cancer', Hairfall: '456' },
    { Cancer: 'Breast Cancer', Hairfall: '456' },
    { Cancer: 'All Cancer', Hairfall: '456' },
  ];
  return (
    <div className='py-20'>
      <div className="headers mt-4">Total Patients Cured<br/>{total}</div>
      <div className='row m-4' style={{ justifyContent: 'space-around' }}>
        {urlList.map((tempNo, index) => (
          <div key={index} className="my-anchor-element no col-12 col-xl-4 mb-4 p-4 d-flex justify-content-center align-items-center">
            <h4>{tempNo.name}:<br />
              <div className='d-flex justify-content-center align-items-center'>{tempNo.no}</div>
            </h4>
            <Tooltip anchorSelect=".my-anchor-element" place="right">
            {tool.map((con, index) => (
  con[tempNo.name] === tempNo.name ? <div key={index}>{con[tempNo.name]}</div> : null
))}

            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;
