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

import TextField from '@material-ui/core/TextField'
import moment from 'moment'
import './style.scss'



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '700px',
        height: '750px',
        border: '1px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 6, 6),
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
    },
    head: {
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: "0.0275em",
        color: "#106dd2",
    },
}));

export default function Popup({ enquiry, a }) {

    console.log(a);
    const [prodDate, setprodDate] = useState();
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleChange = e => {
        setprodDate(moment(e).format("YYYY-MM-DD"))
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            {
                a === 1 ?
                    (
                        <button onClick={handleOpen}
                            className='btn btn2 btn-primary btn-rounded p-1 btn-icon-text'>
                            Weft Gate Creation
                        </button>
                    ) :
                    (
                        <i onClick={handleOpen}
                            className='btn info mdi mdi-information'
                        />
                    )
            }


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
                    <div className={classes.paper}>
                        <Notifications />
                        <div className=' d-flex justify-content-between'>
                            <span classNmae='popHeader'>Weft Gatepass</span>
                        </div>
                        <hr />
                        <div className='row border-between'>


                            <div className='col-12 row mb-3'>
                                <div className="col-6">
                                    <div className=''>Date</div>

                                    {/* <form className={classes.container} noValidate> */}
                                    {/* <TextField
                                            className={classes.cal}
                                            id="date"
                                            type="date"
                                        // format={dateFormat}
                                        // className={classes.textField}
                                        // onChange={e => handleChange(e.target.value)}
                                        // InputLabelProps={{
                                        //     shrink: true,
                                        // }}
                                        /> */}
                                    <div className="">
                                        <DatePicker className="form-control input2 input form-control rounded  w-100"
                                            selected={new Date()}
                                            onChange={e => handleChange(e)}
                                        />
                                    </div>
                                    {/* </form> */}
                                </div>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Gp No.</div>
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
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>

                                    <div className=''>Yarn Locaton</div>
                                    <FormControl variant="outlined" className={classes.formControl}>
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
                                    </FormControl>
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Weaver</div>
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





                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Count</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>

                                <div className='col-6'>

                                    <div className=''>Mill Name</div>
                                    <FormControl variant="outlined" className={classes.formControl}>
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
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Mill Count</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Bags</div>
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
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Per Box Weight</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Totatl Weight</div>
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
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Remark</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Cotract No. </div>
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


                            <div className='mt-2 mb-2'>
                                <button className='btn btn-primary ' style={{ borderRadius: "15px", backgroundColor: "#0064d0", color: 'white' }}>
                                    <i className='float-left mr-2 mdi mdi-send' />Submit</button>

                            </div>



                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
