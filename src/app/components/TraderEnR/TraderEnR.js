import React, { useEffect, useState } from 'react';
import EnquiriesCard from "./EnquiriesCard.js"
import StatusTable from './StatusTable'
import StatusTable2 from './StatusTable2'
import Popup from "./Popup"
import axios from "axios"
import { api } from '../../../common/service-config.js'
import './style.scss';


export default function Production() {
    const [weaver, setWeaver] = useState(true);
    const [recent, setRecent] = useState([])
    const [cards, setCards] = useState([]);
    const [sizers, setSizzers] = useState([])
    const [quality, setQuality] = useState('')


    useEffect(() => {
        searchRecent()
    }, [])

    const searchRecent = async () => {
        await api().get("/api/weaving_enquiry/").then((res) => {
            console.log("res", res);
            setRecent(res.data.data)
            // if (res.data.data) {
            //     if (localStorage.getItem('postenq')) {
            //         const newArr = res.data.data
            //         newArr.unshift(JSON.parse(localStorage.getItem('postenq')))
            //         setRecent(newArr)
            //     }

            // } else {
            //     setRecent([])
            // }
        })

    }
    // const res = api().get('api/sizing/').then(res => { setSizzers(res.data.data) })
    // handler FUnctions
    // api/weaving_enquiry/searchByQuality
    const handleSearchByQuality = async (e) => {
        console.log('e: ', e);
        setQuality(e)
        const payload = {
            quality: e
        }
        const res = await api().post("/api/weaving_enquiry/searchByQuality", JSON.stringify(payload))
        console.log('data: ', res.data.data);
        setCards(res.data.data)
    }




    return (
        <div>
            <h4 className='title1'>Trading Enquries And Responses</h4>
            <div className='row row1'>
                <div className='col-12 col-md-6'>
                    <button onClick={(e) => setWeaver(true)} className='bt1 mb-3 mb-md-0 btn btn-outline-primary btn-rounded '>Trader Enquiry</button>
                    <button onClick={(e) => setWeaver(false)} className='bt1 btn  mb-3 mb-md-0 btn-outline-primary btn-rounded'>Status Of Response</button>
                </div>
                <div className='col-12 col-md-6'>
                    <input className='search1 float-left float-md-right' placeholder='Search here...' ></input>
                </div>

            </div>
            <hr />
            {weaver === true ?
                (
                    <div>
                        <div className='row mb-3'>
                            <div className='enquiry-selection mb-2'>
                                <div className='selection ml-4 row'>
                                    {recent.map((e) => (
                                        <button type="button" key={e.id} onClick={() => handleSearchByQuality(e.quality)} className="bt1 d-flex btn btn-outline-primary btn-rounded mr-3 mt-3 pr-3 pl-3 shadow">
                                            <span className='font'>
                                                {e.quality}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='RecivedEnquiry row'>
                            <div className='page-header text-muted header'>
                                <h4 className='title-1 m-3' >
                                    <span className='m-2'>
                                        Recived Enquiries For
                                    </span>
                                    <button type="button" className="btn btn-rounded ml-3 shadow " style={{ backgroundColor: "#0064d0", color: 'white' }}>{quality || '-'} </button>
                                </h4>
                                <div className='float-right d-flex'>
                                    <div className='m-2 d-flex'>
                                        <i className="mdi mdi-checkbox-blank-circle mr-1" style={{ color: "lightgreen" }}></i>
                                        <p style={{ fontSize: '14px' }}>Complete : 5</p>
                                    </div>
                                    <div className='m-2 d-flex'>
                                        <i className="mdi mdi-minus-circle mr-1" style={{ color: "slateblue" }}></i>
                                        <p style={{ fontSize: '14px' }}>Partial : 8</p>
                                    </div>
                                </div>
                            </div>
                            {cards.map((card, i) => (
                                <div key={card.id}
                                    className='col-12 col-lg-4 col-md-5 mt-3' >
                                    <EnquiriesCard
                                        sizers={sizers}
                                        setCards={setCards}
                                        card={card}
                                        i={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
                :
                (
                    <div className=''>
                        <div className=''>
                            <div className='title-1 m-4'>Raise a dispatch Request</div>
                            <StatusTable />
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className='title-1 m-4'>Recent Accepted Responses</div>
                                <StatusTable2
                                    table="1" />
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='title-1 m-4'>Recent Rejected Responses</div>
                                <StatusTable2
                                    table="2" />
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    );
}
