import React, { useEffect, useState } from 'react';
import EnquiriesCard from "./EnquiriesCard.js"
// import PostCard from './ModelForm.js'
import './style.scss'
import ModelForm from './ModelForm.js'
import { api } from '../../../common/service-config.js'
import axios from 'axios'
import Notifications, { notify } from 'react-notify-toast';


const Weaving = () => {
    const [ids, setId] = useState(true)
    const [form, setForm] = useState(false)
    const token = localStorage.getItem('user-token');
    console.log(token);
    const [t1, setTitle] = useState("");
    const [enquiry, setEnquiry] = useState([]);
    const [recived, setRecived] = useState([])
    const [cards, setCards] = useState([])
    const [responses, setResponses] = useState([])
    // placeholder

    // if (form === true) {
    //     <ModelForm />
    // }
    // const id = () => {
    //     setId(false);
    // }
    const searchRecent = async () => {
        await api().get("/api/weaving_response/recent").then((res) => {
            console.log("res", res);
            if (res.data.data) {
                setEnquiry(res.data.data)
                // if(localStorage.getItem('postenq')) {
                //      const newArr = res.data.data
                //      newArr.unshift(JSON.parse(localStorage.getItem('postenq')))
                //      setEnquiry(newArr)
                // }
               
            } else {
                setEnquiry([])
            }
        })
    }
    // const handleSearchByQuality = async (e) => {
    //     console.log('e: ', e);
    //     const payload = {
    //         quality: e
    //     }
    //     const res = await api().post("/api/weaving_enquiry/searchByQuality", JSON.stringify(payload))
    //     console.log('data: ', res.data.data);
    //     setCards(res.data.data)
    // }

    // placeholder finished

    useEffect(() => {
        // fetch('http://103.160.107.131/api/viewing_response')
        //     .then(res => res.json())
        //     .then(data => console.log('api data for weaving', data))
        apiCall();
        searchRecent()
    }, [])
    const apiCall = async () => {

        let routeName = window.location.pathname.replace(/\//g, '');
        let title;

        var flag;

        switch (routeName) {
            case 'Weaving': {
                title = 'Weaving Enquiries And Responses';
                flag = "weaving_response/recent";
                break;
            }
            case 'Sizing': {
                title = 'Sizzing Enquiries And Responses';
                flag = "sizing_enquiry/recent";
                // flag = "sizing/recent";
                break;
            }
            default: {
                title = 'Weaving Enquiries And Responses';
                flag = 'weaving_response';
            }
        }
        setTitle(title);


        const res = await api().get(`/api/${flag}`)
        setEnquiry(res.data.data)

        const response = await api().get(`/api/viewing_response/`)
        setResponses(response.data.data)
        console.log(responses);
        console.log('hello from weaving');
    }

    const handleEnquiry = async (e) => {
        setRecived(e.quality)
        const payload = {
            quality: e.quality
        }
        const data = await api().post("api/weaving_response/searchByQuality", payload)
        console.log('data: ', data.data.data);
        if(data.data.status === false) {
            console.log('hit false');
            if(localStorage.getItem('postenq')) {
                const newArr = []
                newArr.unshift(e)
                setCards(newArr)
                console.log(cards, 'cards f');
           }
             
        }
        else {
            setCards(data.data.data)
            console.log('e: ', e);
        }
       
    }



    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    return (
        <div>
            <Notifications />
            <div className="page-header">
                <h3 className="mb-0 font-weight-semibold">{t1}</h3>
                {/* <PostCard /> */}
                <ModelForm enquiry={enquiry} />
            </div>

            <div className='enquiry-selection mb-2'>
                <div>
                    <h4 className='title-1'>Enquiry Selection</h4>
                </div>
                <div className='selection'>

                    {enquiry && enquiry.length > 0 ? (enquiry.map((e) => (
                        <button type="button" key={e.id}
                            onClick={() => handleEnquiry(e)}
                            className="btn btn-s btn-outline-primary btn-rounded mr-3 mt-3 pr-3 pl-3 shadow">
                            <span className=''>
                                {e.quality}
                            </span>
                            <i className='mdi mdi-information ml-3 float-right'></i>
                        </button>
                    ))) : (
                        <button type="button"
                            // onClick={() => handleEnquiry(e)}
                            className="btn btn-s btn-outline-primary btn-rounded mr-3 mt-3 pr-3 pl-3 shadow">
                            <span className=''>
                                -
                            </span>
                            <i className='mdi mdi-information ml-3 float-right'></i>
                        </button>
                    )}
                </div>
                <hr />
            </div>
            <div className=''>
                <h4 className='title-1 ml-3'> Recived Enquiries For
                    <button type="button" className="btn btn-rounded ml-3 shadow "
                        style={{ backgroundColor: "#0064d0", color: 'white' }}>
                        {recived ? (`${recived}`) : ('-')}
                    </button>
                    <div className='float-right d-flex'>

                        <div className='m-2 d-flex'>
                            <i className="mdi mdi-minus-circle mr-1" style={{ color: "slateblue" }}></i>
                            <p className='text-muted'
                                style={{ fontSize: '14px', padding: "3px" }}>
                                Partial Enquiries : <span>8</span>
                            </p>
                        </div>
                        <div className='m-2 d-flex'>
                            <i className="mdi mdi-checkbox-blank-circle mr-1" style={{ color: "lightgreen" }}></i>
                            <p style={{ fontSize: '14px', padding: "3px" }}>Complete Enquiries : <span className='text-muted'>5</span></p>
                        </div>
                    </div>
                </h4>
            </div>
            <div className='RecivedEnquiry row w-100' >
                <div className='page-header text-muted'>
                </div>
                {cards.map((card, i) => (
                    <div key={card.id} className='col-8 col-lg-4 col-md-5 col-sm-12 mt-3 card-box' >
                        <EnquiriesCard
                            card={card}
                            i={i}/>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Weaving;