import React, { useState } from 'react';
import ProductionTable from './ProductionTable'
import ProductionTable2 from './ProductionTable2'
import StatusTable from './StatusTable'
import './style.scss'
import StatusTable2 from './StatusTable2'
export default function Production() {
    const [weaver, setWeaver] = useState(true);

    return (
        <div>
            <h4 className='title1'>Production Update</h4>
            <div className='row row1'>
                <div className='col-6'>
                    <button onClick={(e) => setWeaver(true)} className='bt1 btn btn-outline-primary btn-rounded '>Production Update</button>
                    <button onClick={(e) => setWeaver(false)} className='bt1 btn btn-outline-primary btn-rounded'>Delivery Status</button>
                </div>
                <div className='col-6 posi'>
                    <input className='search1 float-right input-field' placeholder='Search here...' ></input>
                </div>

            </div>
            <hr />
            {weaver == true ?
                (
                    <div className='row'>
                        <div className='col-7'>
                            <div className='title-1 m-4'>Checked fabric Available (Approx)</div>
                            <ProductionTable />
                        </div>
                        <div className='col-5'>
                            <div className='title-1 m-4'>Unchecked fabric Available (Approx)</div>
                            <ProductionTable2 />
                        </div>

                    </div>
                )
                :
                (
                    <div className='row'>
                        <div className='col-7'>
                            <div className='title-1 m-4'>Raise a dispatch Request</div>
                            <StatusTable />
                        </div>
                        <div className='col-5'>
                            <div className='title-1 m-4'>Recent deliveries</div>
                            <StatusTable2 />
                        </div>

                    </div>
                )
            }
        </div>
    );
}
