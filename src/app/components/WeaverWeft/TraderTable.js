import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import ReactTooltip from 'react-tooltip';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './style.scss'

const useRowStyles = makeStyles({
    root: {

    },
    head: {
        background: '#0064d0'
    },
    table: {
        background: '#0064d0',
        fontColor: 'black',
    },
    tr: {
        color: '#142045',
    }
});


const data = [
    {
        Weaver: "Parag P",
        Count: "60CBD",
        WeftRequired: "4450",
        WeftIssued: "2000",
        BalanceWeft: "2450",
        LastWeftIssueDate: "01/07/2021",
        NextIssueDate: "01/07/2021",
        Status: "Regular",
        tableData: [{
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }]
    },
    {
        Weaver: "Parag P",
        Count: "60CBD",
        WeftRequired: "4450",
        WeftIssued: "2000",
        BalanceWeft: "2450",
        LastWeftIssueDate: "01/07/2021",
        NextIssueDate: "01/07/2021",
        Status: "Regular",
        tableData: [{
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }]
    }, {
        Weaver: "Parag P",
        Count: "60CBD",
        WeftRequired: "4450",
        WeftIssued: "2000",
        BalanceWeft: "2450",
        LastWeftIssueDate: "01/07/2021",
        NextIssueDate: "01/07/2021",
        Status: "Regular",
        tableData: [{
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }]
    }
]


function Row(props) {
    const { e } = props;
    console.log('data1: ', e);
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root} onClick={() => setOpen(!open)}>
                <TableCell align='center' className='tablerow' component="th" scope="row">{e.Weaver}</TableCell>
                <TableCell align='center' className='tablerow'>{e.Count}</TableCell>
                <TableCell align='center' className='tablerow'>{e.Weaver}</TableCell>
                <TableCell align='center' className='tablerow'>{e.WeftRequired}</TableCell>
                <TableCell align='center' className='tablerow'>{e.BalanceWeft}</TableCell>
                <TableCell align='center' className='tablerow'>
                    <a
                        data-tip
                        data-for='one'
                        type='button'
                        //   href={`/doctor-info/${e._id}`}
                        className='zmdi zmdi-info-outline fontIcon'
                    >{e.NextIssueDate}</a>
                    <ReactTooltip id='one' type='' className="bg-primary" aria-haspopup='true'>
                        <div>Date - {e.beamReqDate}</div>
                        <div>Beam Mtrs - {e.beamInMtrs}</div>
                    </ReactTooltip>
                </TableCell>
                <TableCell align='center' className='tablerow'>{e.NextIssueDate}</TableCell>
                <TableCell align='center' className='tablerow'>
                    <button className='setbtn btn btn-outline-primary p-1 btn-icon-text'>
                        <i className='mdi mdi-message-draw '></i> Issue Set
                    </button>
                </TableCell>
                <TableCell align='center' className='tablerow'>
                    <span className='badge' style={{ color: '#34e15a', border: '1px solid #34e15a' }}>
                        <i className="mdi mdi-check-circle" />
                        {e.Status}
                    </span>
                </TableCell>


            </TableRow>
            <TableRow style={{ padding: 0 }}>
                <TableCell style={{ padding: 0 }} colSpan={12}>
                    <Collapse in={open} style={{ padding: 0 }} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <TableHead >
                                <TableCell align='center' className='table-row1'>Quality</TableCell>
                                <TableCell align='center' className='table-row1'>Count</TableCell>
                                <TableCell align='center' className='table-row1'>Weft Required</TableCell>
                                <TableCell align='center' className='table-row1'>Weft Issued</TableCell>
                                <TableCell align='center' className='table-row1'>Balance Weft</TableCell>
                                <TableCell align='center' className='table-row1'>Left Weft Issued Date</TableCell>
                                <TableCell align='center' className='table-row1'>Next Weft Issued Date</TableCell>
                                <TableCell align='center' className='table-row1'>RNG Contract No.</TableCell>
                                <TableCell align='center' className='table-row1 row3'>Delivery Status</TableCell>
                            </TableHead >

                            <TableBody>

                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='row-2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className=''>
                                    <div className='row2 d-flex justify-content-between'>
                                        <TableCell align='center' className='tablerow table-row2'>Pick in</TableCell>
                                        <TableCell align='center' className='tablerow table-row2 row'>
                                            On the way
                                        </TableCell>
                                        <TableCell align='center' className=' tablerow table-row2'>Delivery</TableCell>
                                    </div>
                                    <ProgressBar
                                        percent={75}
                                    >
                                        <Step>
                                            {({ accomplished, index }) => (
                                                <div
                                                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                                >
                                                    {index + 1}
                                                </div>
                                            )}
                                        </Step>

                                        <Step>
                                            {({ accomplished, index }) => (
                                                <div
                                                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                                >
                                                    {index + 1}
                                                </div>
                                            )}
                                        </Step>

                                        <Step>
                                            {({ accomplished, index }) => (
                                                <div
                                                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                                >
                                                    {index + 1}
                                                </div>
                                            )}
                                        </Step>


                                    </ProgressBar>
                                </TableCell>

                            </TableBody>




                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};



export default function WeftTable() {
    const classes = useRowStyles();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead >
                    <TableRow className={classes.table}>
                        <TableCell align='center' className={classes.tr}>Trader's</TableCell>
                        <TableCell align='center' className={classes.tr}>Quality</TableCell>
                        <TableCell align='center' className={classes.tr}>Weft Required</TableCell>
                        <TableCell align='center' className={classes.tr}>Weft Issued</TableCell>
                        <TableCell align='center' className={classes.tr}>Balance Weft</TableCell>
                        <TableCell align='center' className={classes.tr}>Last weft Issued Date</TableCell>
                        <TableCell align='center' className={classes.tr}>Next weft Issued Date</TableCell>
                        <TableCell align='center' className={classes.tr}>GP issue Status</TableCell>
                        <TableCell align='center' className={classes.tr}>GP Creation Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((e) => (
                        <Row key={e.name} e={e} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
