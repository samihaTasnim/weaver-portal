import React from 'react';
import { GoSearch } from 'react-icons/go';
import '../Weft/style.scss'

const Checker = () => {
  // const [is]
  return (
    <div>
      <div className='row row1'>
        <div className='col-6'>
          <h4>Checker</h4>
        </div>
        <div className='col-6 d-flex justify-content-end'>
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
      <button onClick={() => console.log('fa')} className="bt1 btn btn-primary btn-rounded">Add New Checking Report</button>
      <div className="row">
        <div className="col-md-6">
          
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Checker;