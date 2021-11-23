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
import './style.scss'



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '400px',
        height: '480px',
        border: '1px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 6, 6),
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

export default function Popup({ enquiry }) {


    const [open, setOpen] = useState(false);
    const classes = useStyles();



    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <button onClick={handleOpen} className='setbtn btn btn-outline-primary p-1 btn-icon-text'>
                <i className='mdi mdi-message-draw '></i> Issue Set
            </button>
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
                            <span classNmae='popHeader'>Sizing set Issued</span>
                            <span classNmae='popHeader'>Contract 1</span>
                        </div>
                        <hr />
                        <div className='row border-between'>


                            <div className='col-12 row mb-3'>

                                <div className=''>Sizing Name</div>
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
                            <div className='col-12 row mb-3'>

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
                            <div className='col-12 row mb-3'>

                                <div className=''>Wrap Count</div>
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
