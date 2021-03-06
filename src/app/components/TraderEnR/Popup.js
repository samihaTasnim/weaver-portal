import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { api } from '../../../common/service-config.js'
import Notifications, { notify } from 'react-notify-toast';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"
import TextField from '@material-ui/core/TextField'
import './style.scss'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '90vw',
        height: '92vh',
        boxShadow: theme.shadows[5],
        padding: '5%',
        borderRadius: '20px'
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    cal: {
        width: "100%",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 380,
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: "0.0275em",
        color: "#106dd2",
        paddingBottom: '30px'
    },
    formControl: {
        width: '100%',
        padding: "0px",
        margin: "0px"
    },
    head: {
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: "0.0275em",
        color: "#106dd2",
    },
}));

export default function Popup({ id, sizers, cards, card, enquiry, a, setCards }) {
    console.log('cards: ', cards);
    console.log('card: ', card);

    console.log('sizers: ', sizers);


    const [data, setData] = useState()
    const [jobRate, setJobRate] = useState(0)
    
    const [radio, setRadio] = useState('')
    const [radio2, setRadio2] = useState('')
    const [meter, setMeter] = useState(0)
    const [noOfMachine, setNoOfMachine] = useState(0)
    const [cash, setCash] = useState(0)
    const [date, setDate] = useState(new Date())

    //     useEffect(() => {

    //     const data = async () => {
    //     // const data = await api().get(`/api/viewing_response/${id}`)
    //    const sizerss = await api().get('api/sizing/')
    //     console.log('sizers: ', sizerss.data.data);
    //     setSizzers(sizerss.data.dat)
    //       // console.log('data: ', data);
    //          // setData(data.data.data)
    //      }
    //         // data()
    //     }, [])



    // Handlers
    const handleSubmit = async (e) => {
        console.log('e: ', e);
        const payload = {
            weaverid: localStorage.getItem('userId'),
            requestid: card.id,
            meter: meter,
            meter_type: radio,
            sizingid: 1,
            job_rate: jobRate,
            job_rate_type: radio2,
            no_of_machine: noOfMachine,
            creadit_period: 1,
            cash_discount: cash,
            delivery_date: date,
            remark: "",
            paper: "",
            type: "Partial"
        }
        const data = await api().post("/api/weaving_response/", JSON.stringify(payload))
        console.log('data: ', data.data);
        if (data.data.status === true) {
            notify.show("Enquiry Responded", 'success');
            // alert('Enquiry Responded');
            setCards([])
            handleClose()
        } else {
            notify.show("Enquiry Not Responded", 'error');
        }

    }


    const [open, setOpen] = useState(false);
    const classes = useStyles();

    // handle functions
    // const handleQuality = (e) => {
    // setQuality(e)
    // }=
    const handleSizer = (e) => {
        // setSizzers(e)
    }

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    console.log(card.quality)

    return (
        <div>
            {cards === "card" ?
                (
                    <button href="#" onClick={handleOpen} className="btn btn-outline-success m-1" style={{ borderRadius: '10px' }}><i className='mdi mdi-check' />Respond</button>
                ) :
                <i onClick={handleOpen} className='mdi mdi-information pl-3 float-right'></i>
            }


            {/* <button onClick={handleOpen} */}

            {/* // className='btn btn2 btn-primary btn-rounded p-1 btn-icon-text'> */}
            {/* Weft Gate Creation */}
            {/* </button> */}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <div className={`${classes.paper} scrollable`}>
                        <div className='d-flex justify-content-between'>
                            <span className='popHeader'>Enquiry Details</span>
                        </div>
                        <hr />
                        <span className='body'> &nbsp;  Name of Weaver: &nbsp; &nbsp; </span>
                        <span className='text2'>{card.name}</span>
                        <div className='row mb-3'>
                            <div className="col-12 col-md-6">
                                <div>Quality</div>
                                <input type="text"
                                    className="input form-control rounded"
                                    value={card.quality}
                                    aria-label="Meter"
                                    aria-describedby="basic-addon1" />
                            </div>
                            <div className='col-12 col-md-6 mb-2 mb-md-0'>
                                <div className="d-flex flex-row justify-content-between w-75">
                                    <div>Meter</div>
                                    <div>
                                        <input className="radio form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            onChange={e => setRadio(e.target.value)}
                                            id="exampleRadios1"
                                            value="roll"
                                            checked={card.meter_type === "roll"}
                                        />
                                        <label className="radio1 form-check-label mr-3">
                                            Roll
                                        </label>
                                        <input className="radio form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            onChange={e => setRadio(e.target.value)}
                                            id="exampleRadios1"
                                            value="taga"
                                            checked={card.meter_type === "taga"}
                                        />
                                        <label className="radio1 form-check-label" >
                                            Taga
                                        </label>
                                    </div>
                                </div>
                                <input type="number"
                                    className="input form-control rounded"
                                    defaultValue={card.meter}
                                    onChange={e =>  setMeter(e.target.value)}
                                    placeholder="meter"
                                    aria-label="Meter"
                                    aria-describedby="basic-addon1" />


                            </div>
                        </div>
                        <div className=' row mb-3'>
                            <div className='col-12 col-md-6 mb-2 mb-md-0'>

                                <div className=''>Sizing</div>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={sizers}
                                        onChange={handleSizer}
                                        label="Age"
                                    >
                                        <MenuItem>
                                            <em>None</em>
                                        </MenuItem>
                                        {sizers && sizers.length > 0 ? (sizers.map((e) => (
                                            <MenuItem key={e.id} onClick={() => console.log(e)} value={e.id}>{e.name}</MenuItem>
                                        ))) : (
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                        )}

                                    </Select>
                                </FormControl>
                            </div>

                            <div className='col-12 col-md-6 mb-2 mb-md-0'>
                                <div className='row'>
                                    <div className="col-12 col-md-7">Negotiable job Rate</div>
                                    <div className='col-12 col-md-5'>
                                        <input className="radio form-check-input"
                                            type="radio"
                                            name="exampleRadios2"
                                            onChange={e => setRadio2(e.target.value)}
                                            id="exampleRadios2"
                                            value="Market"
                                            checked={card.rate = "market"}
                                        />
                                        <label className="radio1 form-check-label mr-3" >
                                            Market
                                        </label>
                                        <input className="radio form-check-input"
                                            type="radio"
                                            name="exampleRadios2"
                                            onChange={e => setRadio2(e.target.value)}
                                            id="exampleRadios2"
                                            value="Custom"
                                            checked={card.rate = "custom"}
                                        />
                                        <label className="radio1 form-check-label" >
                                            Custom
                                        </label>
                                    </div>

                                </div>
                                <input type="text"
                                    className="input form-control rounded"
                                    onChange={e => setJobRate(e.target.value)}
                                    // value={quality}
                                    // onChange={handleQuality}
                                    defaultValue={card.rate}
                                    aria-label="Meter"
                                    aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='row mb-3'>

                            <div className='col-12 col-md-6 mb-2 mb-md-0'>

                                <div className=''>No. Running Machines desired</div>
                                <input type="text"
                                    className="input form-control rounded"
                                    // value={quality}
                                    onChange={e => setNoOfMachine(e.target.value)}
                                    aria-label="Meter"
                                    aria-describedby="basic-addon1"
                                    defaultValue={card.no_of_machine}
                                />
                                {/* <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                        // value={sizers}
                                        // onChange={handleSizer}
                                        // label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem>1</MenuItem>
                                            <MenuItem>2</MenuItem>
                                            <MenuItem>3</MenuItem>
                                            <MenuItem>4</MenuItem>
                                        </Select>
                                    </FormControl> */}
                            </div>

                            <div className='col-12 col-md-6 mb-2 mb-md-0'>
                                <div className='row'>
                                    <div className='col-12'>Credit Period</div>
                                </div>
                                <input type="text"
                                    className="input form-control rounded"
                                    // value={quality}
                                    // onChange={handleQuality}
                                    placeholder=""
                                    aria-label="Meter"
                                    aria-describedby="basic-addon1" />
                            </div>

                        </div>
                        <div className=' row mb-3'>
                            <div className='col-12 col-md-6 mb-2 mb-md-0'>
                                <div className='row'>
                                    <div className='col-12'>Cash Discount</div>
                                </div>
                                <input type="text"
                                    className="input form-control rounded"
                                    // value={quality}
                                    onChange={e => setCash(e.target.value)}
                                    placeholder=""
                                    aria-label="Meter"
                                    aria-describedby="basic-addon1" />
                            </div>

                            <div className='col-12 col-md-6 mb-2 mb-md-0 customDatePickerWidth'>
                                <div className='row w-100'>
                                    <div className='col-12'>Delivery Date</div>
                                </div>
                                <DatePicker className="input form-control rounded input2 w-100"
                                    selected={date}
                                    onChange={date => setDate(date)}
                                />
                            </div>
                        </div>

                        <div className=' row mb-3'>
                            <div className='col-12 col-md-6 d-flex flex-row justify-content-between'>
                                <div >Additional Remark</div>
                                <p >{card.additional_remark || 'N/A'} </p>
                            </div>

                            <div className='col-12 col-md-6 d-flex flex-row justify-content-between'>
                                <div >Additional Paper</div>
                                <p >{card.additional_paper ? 'Show paper' : 'None'}</p>
                            </div>
                        </div>


                        <div className='m-3'>
                            <button className='btn btn-primary'
                                onClick={handleSubmit}
                                style={{ borderRadius: "15px", backgroundColor: "#0064d0", color: 'white' }}>
                                <i className='float-left mr-2 mdi mdi-send' />Submit</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    );
}
