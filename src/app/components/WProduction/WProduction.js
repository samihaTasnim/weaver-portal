import React, { useState, useRef } from 'react';
import ProductionTable from './ProductionTable'
import RecentGatepassTable from './RecentGatepassTable'
import './style.scss'

export default function Weft() {
    const [weaver, setWeaver] = useState(true);
    const btns = useRef(null);
    const btns1 = useRef(null);


    return (
        <div>
            <div className='row row1'>
                <div className='col-6'>
                    <h4 className='title1'>Weaver Production Update</h4>
                    {/* <button onClick={(e) => setWeaver(true)} className='bt1 btn btn-outline-primary btn-rounded' ref={btns} >Weaver</button> */}
                    {/* <button onClick={(e) => setWeaver(false)} className='bt1 btn btn-outline-primary btn-rounded' ref={btns1}>Recent weft gatepass</button> */}
                </div>
                <div className='col-6 posi'>
                    {/* <i className='float-right mdi mdi-file-find' /> */}
                    <input type='search' style={{ paddingLeft: "10px" }} className='search1 float-right  input-field ' placeholder='Search here...' >
                    </input>
                </div>

            </div>
            <hr />
            <ProductionTable />
        </div>
    );
}
