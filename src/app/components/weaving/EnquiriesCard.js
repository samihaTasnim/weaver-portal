import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SuccessPop from '../Hooks/SuccessPop'
import { api } from '../../../common/service-config.js'
import Notifications, { notify } from 'react-notify-toast';

// E:\x2\x2\src\app\components\Hooks\SuccessPop.js
// E:\x2\x2\src\app\components\weaving\EnquiriesCard.js
import './style.scss'


// Material UI styles
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamialy: 'Roboto',
        fontColor: '#0064D0',
        fontSize: '15px',
        fontWeight: 500,
        maxWidth: 450,
        borderRadius: '20px',
        marginBottom: '1rem',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    typo: {
        fontSize: '1rem',
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: '0.0275em',
        color: '#106dd2'
    },
    cardcontent: {
        fontSize: '1rem',
        fontFamily: "Roboto",
        fontWeight: 500,
        padding: '30px',
        marginBottom: '-1.5rem',

    },
    cardcontent1: {
        marginTop: '-1.5rem',
        padding: '30px'
    },
    badge: {
        display: 'inline',
        zIndex: 999
    },
    Actions: {
        //  height: "20%"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export default function EnquiriesCard({ card, i }) {

    // additional_paper: ""
    // additional_remark: ""
    // extension: ""
    // id: "2"
    // loomid: 1
    // meter: "01"
    // meter_type: "taga"
    // no_of_machine: "1"
    // production_date: "2021-11-01T13:23:36.404Z"
    // quality: "\"1\"\"/1*1/1*1*"
    // rate: "11111"
    // rate_type: "custom"
    // sizingid: 1
    console.log('card Data ', card);
    useEffect(() => {
        // /api/weaving_response/updateStatus
    }, [])


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleRespond = async (respond) => {
        console.log('responds: ', respond);
        const res = await api().post(`/api/weaving_response/updateStatus`, JSON.stringify(respond))
        console.log('res: ', res.data.data.status);
        if (res.data.data.status === true) {
            notify.show("Enquiry Posted", 'success');
        } else {
            notify.show("Enquiry Not Posted", 'error');
        }
    }


    return (
        <Badge color='primary' className={classes.badge} badgeContent={i + 1} overlap='circle'>
            <Card className={classes.root} >
                <CardContent className={classes.cardcontent}>
                    <div className='row'>
                        <h6 className='text1 col-6' >Name of Weaver :</h6>
                        <h6 className='text3 col-6'>{card.name || 'Patil'}</h6>
                    </div>
                    <div className='row'>
                        <h6 className='text1 col-6'>Meter  :</h6>
                        <h6 className='text2 col-6'>{card.meter}</h6>
                    </div>
                    <div className='row'>
                        <h6 className='text1 col-6'>Type of Machine :</h6>
                        <h6 className='text2 col-6'>{card.meter_type}</h6>
                    </div>
                    <div className='row'>
                        <h6 className='text1 col-6'> Job Rate :</h6>
                        <h6 className='text3 col-6'>{card.job_rate || card.rate}</h6>
                    </div>
                </CardContent>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.cardcontent1}>
                        <div className='row'>
                            <h6 className='text1 col-6'>Credit Period :</h6>
                            <h6 className='text2 col-6'>{card.creadit_period || ''}</h6>
                        </div>
                        <div className='row'>
                            <h6 className='text1 col-6'>Cash Discount :</h6>
                            <h6 className='text2 col-6'>{card.cash_discount || 'n/a'}</h6>
                        </div>
                        <div className='row'>
                            <h6 className='text1 col-6'>Sizing :</h6>
                            <h6 className='text2 col-6'>{card.sizing_name}</h6>
                        </div>
                        <div className='row'>
                            <h6 className='text1 col-6'>Aditional Remark :</h6>
                            <h6 className='text2 col-6'>{card.remark || 'n/a'}</h6>
                        </div>
                    </CardContent>
                </Collapse>

                <CardActions disableSpacing className={classes.Actions} style={{ padding: '1px' }}>

                    {card.type === "Complete" ?
                        (<div>
                            <i className="mdi mdi-checkbox-blank-circle"
                                style={{ color: "#34E15A", marginLeft: '3px' }} />
                            <span
                                style={{ marginTop: '4px', marginLeft: '5px', fontSize: '10px' }}>
                                Complete
                            </span>
                        </div>)
                        :
                        (<div className='d-flex'>
                            <i className="mdi mdi-minus-circle "
                                style={{ paddingLeft: "20px", color: "#5156BE" }} />
                            {/* <i className="mdi mdi-checkbox-blank-circle" style={{ color: "#34E15A" }} /> */}
                            <p
                                style={{ paddingLeft: "10px", paddingRight: '30px', fontSize: '10px' }}>
                                Partial Complete
                            </p>
                        </div>)
                    }


                    <div className='float-center d-flex'>
                        {/* <button href="#" className="btn btn-outline-danger m-1" style={{ borderRadius: '10px' }}><i className='mdi mdi-close' />Reject</button>
                        <button href="#" className="btn btn-outline-success m-1" style={{ borderRadius: '10px' }}><i className='mdi mdi-check' />Accept</button> */}
                        <SuccessPop
                            Reject="Reject"
                            handleRespond={handleRespond}
                            id={card.id}
                        />
                        <SuccessPop
                            Success="Success"
                            handleRespond={handleRespond}
                            id={card.id}
                        />
                    </div>
                </CardActions>
                <div  style={{marginTop: '-25px', marginLeft: '5px'}}>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                   
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton> <small>See more</small>
                </div>
                
            </Card>
        </Badge >

    );
}
