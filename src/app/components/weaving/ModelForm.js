import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import uploadIco from './Group.svg';
import { BsTrash } from 'react-icons/bs';
import { IconContext } from "react-icons";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { api } from '../../../common/service-config.js'
import Notifications, { notify } from 'react-notify-toast';
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"
import help from './helper.js'
import axios from "axios"
import { DateTimePicker } from 'react-widgets';
import './style.scss'
import TextField from '@material-ui/core/TextField'
import { Form } from 'react-bootstrap';
const dateFormat = 'DD/MM/YYYY';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '1100px',
        height: '620px',
        border: '1px solid #fff',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(6, 6, 6),
        padding: "30px",
        borderRadius: '20px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
        paddingBottom: '15px'
    },
    formControl: {
        width: '100%',
    },
    head: {
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: "0.0275em",
        color: "#106dd2",
    },
}));

export default function TransitionsModal({ enquiry }) {

    const [favEnq, setFavEnq] = useState([])
    const [recentEnq, setRecentEnq] = useState([])
    const [addToFav, setAddToFav] = useState(0)

    async function getRecentEnq() {
        const res = await api().get(`api/weaving_response/recent`)
        if (res.data.status === true) {
            setRecentEnq(res.data.data.slice(0, 5))
        } else {
            console.log('Error in recent');
        }
    }
    async function getResults() {
        const body = {
            "userid": +localStorage.getItem('userId')
        }
        console.log(JSON.stringify(body));
        const res = await api().post(`api/weaving_enquiry/getFavorites`, JSON.stringify(body))
        console.log('fav data ', res);
        if (res.data.success === true) {
            setFavEnq(res.data.data)
            console.log(favEnq);
        } else {
            console.log('Error');
        }
    } getResults()

    const history = useHistory();

    const classes = useStyles();
    const [sizers, setSizers] = useState('');
    const [loom, setLoom] = useState('');
    const [machine, setMachine] = useState('');
    const [sizeDrop, setSizedrop] = useState([]);
    const [loomDrop, setLoomdrop] = useState([]);

    // input States
    const [quality1, setQuality1] = useState(``);
    const [quality2, setQuality2] = useState(``);
    const [quality3, setQuality3] = useState(``);
    const [quality4, setQuality4] = useState(``);
    const [quality5, setQuality5] = useState(``);
    const [meter, setMeter] = useState(0);
    const [rate, setRate] = useState(0);
    const [prodDate, setprodDate] = useState(new Date());
    const [addPaper, setAddPaper] = useState(null);
    const [remark, setRemark] = useState('');
    const [radio, setRadio] = useState('taga')
    const [radio2, setRadio2] = useState('custom')
    const [logout, setLogout] = useState(true)
    const [base64File, setBase64File] = useState('')

    const [open, setOpen] = useState(false);

    useEffect(() => {
        getRecentEnq()
        sizingDrop();
        loomsDrop();
    }, [])

    let qualityStr = `"${quality1}""/${quality2}*${quality3}/${quality4}*${quality5}*`
    console.log(qualityStr);

    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object

                let baseURLarr = reader.result.split(',')
                console.log(baseURLarr[1], 'just the url')
                baseURL = baseURLarr[1];
                setBase64File(baseURL)
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };
    if (addPaper) {
        getBase64(addPaper)
    }

    const fileStyle = {
        border: '1px solid #dee2e6',
        display: 'inline-block',
        width: '100%',
        cursor: 'pointer',
        borderRadius: '3px',
        color: '#bfbfbf',
        fontSize: '0.75rem',
        fontWeight: '400',
        padding: '12px 12px'
    }


    const postQuery = async (e) => {

        e.preventDefault()
        if (qualityStr === null | '' |
            meter === null | '' |
            radio === null | '' |
            radio2 === null | '' |
            prodDate === null | '' |
            sizeDrop === null | '' |
            loom === null | '' |
            machine === null | '' |
            rate === null | '' |
            loomDrop === null | '' |
            sizers === null | '') {
            notify.show('Please fill in the required fields', 'error')
            return false;
        }
        else {
            console.log('out the if loop');

            let routeName = window.location.pathname.replace(/\//g, '');
            let title;

            let flag;
            var flag2;

            switch (routeName) {
                case "Weaving": {
                    title = 'Weaving Enquiries And Responses';
                    flag = "viewing_response/recent";
                    flag2 = "weaving_enquiry"

                    break;
                }
                case 'Sizing': {
                    title = 'Sizzing Enquiries And Responses';
                    flag = "sizing/recent";
                    flag2 = "sizing_enquiry"
                    break;
                }
                default: {
                    title = 'Weaving Enquiries And Responses';
                    flag = 'weaving_enquiry';
                }
            }
            let extensionarr;

           if(addPaper) {
             extensionarr= addPaper.type.split('/')
           }

            const body = {
                id: localStorage.getItem('userId'),
                quality: qualityStr,
                meter: meter,
                meter_type: radio,
                sizingid: sizers,
                loomid: loom,
                no_of_machine: machine,
                rate: rate,
                rate_type: radio2,
                production_date: prodDate,
                additional_paper: base64File ? base64File : '',
                additional_remark: remark ? remark : '',
                extension: addPaper ? extensionarr[1] : ''
            }
            console.log(body);
            const res = await api().post(`api/weaving_enquiry`, JSON.stringify(body))
            // const res = []
            console.log('post: ', res.data.success);
            if (res.data.success === true) {
                notify.show('Enquiry Posted', 'success')
                localStorage.setItem('postenq', JSON.stringify(body))
                handleClose()
            } else {
                notify.show("Enquiry Not Posted", 'error');
            }
        }
    }


    const loomsDrop = async () => {
        const res = await api().get(`/api/looms`)
        console.log('Loom: ', res);
        setLoomdrop(res.data.data)
        if (res.data.message === "Invalid Token...") {
            setLogout(false)
            notify.show("Token Expired", 'error');
        }
    }

    const AddtoFav = async () => {
        const res = await api().post(`api/weaving_enquiry/addToFavorite`, {"id": addToFav})
        if (res.data.status === true) {
            console.log('hit success');
            alert("Enquiry Listed as favorite")
            notify.show("Enquiry Listed as favourtire", 'success');
        } else {
            notify.show("Enquiry Not Posted", 'error');
        }
    }


    const sizingDrop = async () => {
        const res = await api().get(`/api/sizing/`)
        console.log('sizingDrop: ', res);
        setSizedrop(res.data.data)
        // if (res.data.data.message === "Invalid Token...") {
        //     setLogout(false)
        //     notify.show("Token Expired", 'error');
        // }
    }


    // if (logout === false) {
    //     localStorage.removeItem("user-token");
    //     history.push("/user-pages/login-1")
    // }

    // all Handlers
    const handleChange = e => {
        setprodDate(moment(e).format("YYYY-MM-DD"))
    };
    const handleSizer = (event) => {
        setSizers(event.target.value);
    };
    const handleLoom = (e) => {
        setLoom(e.target.value);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fileArray = new FormData();
    fileArray.append("uploadFile", addPaper);

    return (
        <div>
            <Notifications/>
            <button className='btn btn-primary btn-rounded right' onClick={handleOpen} style={{ backgroundColor: "#0064d0", color: 'white' }}>
                <i className='mdi mdi-message-draw'></i>Post Enquiry </button>
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
                    <form className={classes.paper}>    
                        <h4 className={classes.title}>Enquiry Details <i onClick={handleClose} className='mdi mdi-close float-right' /></h4>
                        <div className='row border-between'>

                            <div className='col-7 line'>
                                <div className='row mb-2'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-12 mb-2'>Quality</div>
                                        </div>
                                        <div className="row g-0">
                                            <div className="col-md-2 pr-0 pl-2">
                                                <div className="d-flex">
                                                    <span style={{ marginRight: '4px' }}>"</span>
                                                    <input
                                                        type="text"
                                                        className="input input1 form-control rounded m-0 inline-block"
                                                        value={quality1}
                                                        onChange={e => setQuality1(e.target.value)}
                                                        placeholder=""
                                                        aria-label="Meter"
                                                        aria-describedby="basic-addon1" required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 pr-0 pl-2">
                                                <div className="d-flex">
                                                    <span style={{ marginRight: '4px' }}>""/</span>
                                                    <input
                                                        type="text"
                                                        className="input input1 form-control rounded m-0 inline-block"
                                                        value={quality2}
                                                        onChange={e => setQuality2(e.target.value)}
                                                        placeholder=""
                                                        aria-label="Meter"
                                                        aria-describedby="basic-addon1" required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-2 pr-0 pl-2">
                                                <div className="d-flex">
                                                    <span style={{ marginRight: '4px' }}>*</span>
                                                    <input
                                                        type="text"
                                                        className="input input1 form-control rounded m-0 inline-block"
                                                        value={quality3}
                                                        onChange={e => setQuality3(e.target.value)}
                                                        placeholder=""
                                                        aria-label="Meter"
                                                        aria-describedby="basic-addon1" required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-2 pr-0 pl-2">
                                                <div className="d-flex">
                                                    <span style={{ marginRight: '4px' }}>/</span>
                                                    <input
                                                        type="text"
                                                        className="input input1 form-control rounded m-0 inline-block"
                                                        value={quality4}
                                                        onChange={e => setQuality4(e.target.value)}
                                                        placeholder=""
                                                        aria-label="Meter"
                                                        aria-describedby="basic-addon1" required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 pr-0 pl-2">
                                                <div className="d-flex">
                                                    <span style={{ marginRight: '4px' }}>*</span>
                                                    <input
                                                        type="text"
                                                        className="input input1 form-control rounded m-0 inline-block"
                                                        value={quality5}
                                                        onChange={e => setQuality5(e.target.value)}
                                                        placeholder=""
                                                        aria-label="Meter"
                                                        aria-describedby="basic-addon1" required
                                                    />
                                                    <span style={{ marginLeft: '4px' }}>*</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-2'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-7 pl-3'>Meter</div>
                                            <div className='form-check mr-3'>
                                                <input className="radio form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    onChange={e => setRadio(e.target.value)}
                                                    id="exampleRadios1"
                                                    value="role"
                                                />
                                                <label className="radio1 form-check-label" >
                                                    Roll
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input className="radio form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    onChange={e => setRadio(e.target.value)}
                                                    id="exampleRadios1"
                                                    defaultValue="taga" checked
                                                />
                                                <label className="radio1 form-check-label" >
                                                    Taga
                                                </label>
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="input input1 form-control rounded"
                                            value={meter}
                                            onChange={e => setMeter(e.target.value)}
                                            placeholder="Meter" aria-label="Meter" aria-describedby="basic-addon1" required />
                                    </div>
                                    <div className='col-6'>
                                        <div className='col-6 mb-3'>Sizing</div>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={sizers}
                                                onChange={handleSizer}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {sizeDrop && sizeDrop.length > 0 ? (sizeDrop.map((e) => (
                                                    <MenuItem value={e.id}>{e.name}</MenuItem>
                                                ))) : (
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                {/* 2nd row */}
                                <div className='row mb-2'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-12 mb-3'>No. of Running Machine desired</div>
                                        </div>
                                        <input type="text" className="input form-control rounded" onChange={e => setMachine(e.target.value)} placeholder="" aria-label="Meter" aria-describedby="basic-addon1" required />
                                    </div>

                                    <div className='col-6'>
                                        <div className='col=6 mb-3'>Type of loom desired</div>

                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={loom}
                                                onChange={handleLoom}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {loomDrop && loomDrop.length > 0 ? (loomDrop.map((e) => (
                                                    <MenuItem value={e.id}>{e.name}</MenuItem>
                                                ))) : (
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
                                    </div>

                                </div>

                                {/* 3rd row */}
                                <div className='row mb-2'>
                                    <div className='col-6'>
                                        <div className='row d-flex'>
                                            <div className='col-7'>Negotiable job rate</div>
                                            <div className=' form-check mr-3 float-right'>
                                                <input className="radio form-check-input"
                                                    type="radio"
                                                    name="exampleRadios2"
                                                    onChange={e => setRadio2(e.target.value)}
                                                    id="exampleRadios2"
                                                    defaultValue="market"
                                                />
                                                <label className="radio1 form-check-label" >
                                                    Market
                                                </label>
                                            </div>
                                            <div className='form-check float-right'>
                                                <input className="radio form-check-input"
                                                    type="radio"
                                                    name="exampleRadios2"
                                                    onChange={e => setRadio2(e.target.value)}
                                                    id="exampleRadios2"
                                                    defaultValue="custom" checked
                                                />
                                                <label className="radio1 form-check-label" >
                                                    Custom
                                                </label>
                                            </div>
                                        </div>
                                        <input type="text"
                                            className="input form-control rounded"
                                            placeholder="ipsum"
                                            onChange={e => setRate(e.target.value)}
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" required />
                                    </div>
                                    <div className='col-6'>
                                        <div className='col=6 mb-3'>Production schedule</div>
                                        {/* <div>

                                            <form className={classes.container} noValidate>
                                                <TextField
                                                    id="date"
                                                    type="date"
                                                    format={dateFormat}
                                                    className={classes.textField}
                                                    onChange={e => handleChange(e.target.value)}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </form>

                                        </div> */}
                                        {/* <Form.Group className="row"> */}
                                        {/* <label className="col-sm-3 col-form-label">Date of Birth</label> */}
                                        <div className="">
                                            <DatePicker className="form-control input2 input form-control rounded  w-100"
                                                selected={new Date()}
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                        {/* </Form.Group> */}
                                    </div>

                                </div>
                                {/* 4th row */}
                                <div className='row mb-2'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-6 mb-3'>Additional paper</div>
                                        </div>
                                        {!addPaper &&
                                            <>
                                                <label htmlFor="file-upload" style={fileStyle} >Attach documents here
                                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                    <img src={uploadIco} alt="" />
                                                </label>
                                                <input type="file" id="file-upload" style={{ display: 'none' }} className="form-control rounded" placeholder="paper" onChange={e => setAddPaper(e.target.files[0])} aria-label="Username" aria-describedby="basic-addon1" />
                                            </>
                                        }
                                        {
                                            addPaper &&
                                            <p> Uploaded {addPaper.name} | File type: {addPaper.type}   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                                                <IconContext.Provider value={{ color: "red", size: '30px' }}>
                                                    <BsTrash onClick={() => setAddPaper(null)} />
                                                </IconContext.Provider>

                                            </p>
                                        }
                                    </div>
                                    <div className='col-6'>
                                        <div className='col=6 mb-3'>Additional remark</div>
                                        <input type="text" className="input1 form-control rounded" onChange={e => setRemark(e.target.value)} placeholder="remark" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-primary btn-rounded m-3' onClick={postQuery} style={{ backgroundColor: "#0064d0", color: 'white' }} >
                                        <i className='float-left mr-2 mdi mdi-send' />Submit</button>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div>
                                    <div className='ml-3'>Recent Enquiries &nbsp; &nbsp; &nbsp; &nbsp;
                                        <button type="button" className=" btn btn-r btn-outline-primary btn-rounded pl-3 pr-3  shadow" onClick={AddtoFav}>
                                            <span className=''>
                                                Add to favourites
                                            </span>
                                        </button>
                                        <i className='float-right mdi mdi-refresh' /></div>
                                    <hr className='ml-3' />
                                    {recentEnq && recentEnq.length > 0 ? (recentEnq.map((e) => (
                                        <button type="button" key={e.id} onClick = {() => setAddToFav(e.id)} className={  addToFav === e.id ? `btn active btn-r btn-outline-primary btn-rounded m-2 pr-3 pl-3 shadow` : `btn btn-r btn-outline-primary btn-rounded m-2 pr-3 pl-3 shadow`}>
                                            <span className=''>
                                                {e.quality}
                                            </span>
                                        </button>
                                    ))) : (
                                        <button type="button" className="btn btn-r btn-outline-primary btn-rounded m-2 pr-3 pl-3 shadow">
                                            <span className=''>
                                                No Enquiries
                                            </span>
                                        </button>
                                    )}
                                </div>
                                <div className='mt-3'>
                                    <div className='ml-3' >Favourite Enquiries <i className='float-right mdi mdi-heart' /></div>
                                    <hr className='ml-3' />
                                    {favEnq.map((e) => (
                                        <button type="button" key={e.id} className="btn btn-r btn-outline-primary btn-rounded mr-3 mt-3 pr-3 pl-3 shadow">
                                            <span className=''>
                                                {e.quality}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </form>
                </Fade>
            </Modal>
        </div>
    );
}
