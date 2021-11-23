import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "react-datepicker/dist/react-datepicker.css";
import './style.scss'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around   ',
        backgroundColor: theme.palette.background.paper,
        width: '500px',
        height: '100px',
        border: '1px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 6, 6),
        // padding: "30px",
        borderRadius: '20px'
    },

}));

export default function TransitionsModal({ Success, Reject, handleRespond, id }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let color;

    if (Success === "Success") {
        color = "rgb(0,192,115)"
    } else if (Reject === "Reject") {
        color = "rgb(255,75,70)"
    }
    const CSS = {
        color: color
    }



    const handleSubmit = () => {
        console.log(Success);
        if (Success === "Success") {
            handleRespond(
                {
                    status: 'Accept',
                    id: id
                }
            )
            handleClose()
        }
        if (Reject === "Reject") {
            handleRespond(
                {
                    status: 'Accept',
                    id: id
                }
            )
            handleClose()
        }

    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {Success == "Success" ?
                (
                    <button href="#" className="btn btn-outline-success m-1" onClick={handleOpen} style={{ borderRadius: '10px' }}><i className='mdi mdi-check' />Accept</button>
                ) :
                (
                    <button href="#" className="btn btn-outline-danger m-1" onClick={handleOpen} style={{ borderRadius: '10px' }}><i className='mdi mdi-close' />Reject</button>

                )
            }
            {/* <button className='btn btn-primary btn-rounded right' onClick={handleOpen} style={{ backgroundColor: "#0064d0", color: 'white' }}> */}
            {/* <i className='mdi mdi-message-draw'></i>Post Enquiry </button> */}
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
                        {Success === "Success" ?
                            (<div className={classes.title} style={CSS}>
                                Would you like to Acept the Enquiry ?
                            </div>
                            ) : (
                                <div className={classes.title} style={CSS}>
                                    Would you like to Reject the Enquiry ?
                                </div>
                            )}

                        <div>
                            <i className='mdi mdi-check-circle icon-size success'
                                onClick={handleSubmit} />
                        </div>
                        <div>
                            <i onClick={handleClose} className="mdi mdi-close-circle icon-size close1" />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
