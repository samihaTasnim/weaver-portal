import React, { useState } from 'react';
import TraderTable from './TraderTable'
import WeftTable from './WeftTable'
import './style.scss'
export default function Production() {
    const [weaver, setWeaver] = useState(true);

    return (
        <div>
            <h4 className='title1'>Weaver Weft Inward</h4>
            <div className='row row1'>
                <div className='col-6'>
                    <button onClick={(e) => setWeaver(true)} className='bt1 btn btn-outline-primary btn-rounded '>Trader's</button>
                    <button onClick={(e) => setWeaver(false)} className='bt1 btn btn-outline-primary btn-rounded'>Recent Weft Gatepass</button>
                </div>
                <div className='col-6 posi'>
                    <input className='search1 float-right input-field' placeholder='Search here...' ></input>
                </div>

            </div>
            <hr />
            {weaver == true ?
                (
                    <div className='row'>
                        <TraderTable />
                    </div>
                )
                :
                (
                    <div className='row'>
                        <WeftTable />
                    </div>
                )
            }
        </div>
    );
}
