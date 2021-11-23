import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import '../Weft/style.scss'
import DispatchTable from './DispatchTable';
import QualityCheckTable from './QualityCheckTable';

const Page1 = () => {

  const [showQualityCheck, setShowQualityCheck] = useState(true)
  const [showDispatch, setShowDispatch] = useState(false)

  const showQualityCheckTable = () => {
    setShowQualityCheck(true)
    setShowDispatch(false)
  }

  const showDispatchTable = () => {
    setShowDispatch(true)
    setShowQualityCheck(false)
  }

  return (
    <div>
      <div className='row row1'>
        <div className='col-6'>
          <button onClick={showQualityCheckTable} className={ `bt1 btn btn-outline-primary btn-rounded ${showQualityCheck && 'active'}`}>Quality Check</button>
          <button onClick={showDispatchTable} className={`bt1 btn btn-outline-primary btn-rounded ${showDispatch && 'active'}`}>Dispatch</button>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          {/* <div className="row">
          <input type='search' className='search1 float-right  input-field' placeholder='Search here' > 
          </input> 
          <GoSearch />
          </div> */}
          <div className="input-group col-md-4">
            <input className="form-control search1 float-right input-field py-1" type="search" placeholder='Search here'/>
            <span className ="input-group-append">
            <button className ="btn icon bg-white border-left-0 py-1 search1" >
            <GoSearch/>
            </button>
            </span>
          </div>
        </div>

      </div>
      <hr />
      {
        showQualityCheck && <QualityCheckTable></QualityCheckTable>
      }
      {
        showDispatch && <DispatchTable></DispatchTable>
      }
    </div>
  );
};

export default Page1;