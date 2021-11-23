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
            <TableRow className={classes.root}>
                <TableCell className='tablerow' component="th" scope="row">{e.Weaver}</TableCell>
                <TableCell className='tablerow'>{e.Count}</TableCell>
                <TableCell className='tablerow'>{e.Weaver}</TableCell>
                <TableCell className='tablerow'>{e.WeftRequired}</TableCell>
                <TableCell className='tablerow'>{e.BalanceWeft}</TableCell>
                <TableCell className='tablerow'>{e.NextIssueDate}</TableCell>
                <TableCell>
                    <button className="btn btn-outline-success btn-rounded" size="small" onClick={() => setOpen(!open)}>
                        <i className='mdi mdi-truck-fast' />
                        Shipped
                    </button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <div className='row1'>
                                <TableCell align='center' className=' table-row1'>Logistics Intimeted</TableCell>
                                <TableCell align='center' className='table-row1'>Slot Alloted</TableCell>
                                <TableCell align='center' className='table-row1'>Good Loaded and In-Transit</TableCell>
                                <TableCell align='center' className='table-row1'>Goods Delivered</TableCell>
                            </div>
                            <div className='row2'>
                                <TableCell align='center' className='tablerow table-row2'>XYZ Logistics</TableCell>
                                <TableCell align='center' className='tablerow table-row2 row'>
                                    <div>Date: 21/06/2020</div>
                                    <div>Slot : 60DS</div>
                                </TableCell>
                                <TableCell align='center' className=' tablerow table-row2'>Text Here</TableCell>
                                <TableCell align='center' className=' tablerow table-row2'>
                                    <button
                                        className='btn btn-primary btn-rounded view-btn'>
                                        Delivery Challan
                                    </button></TableCell>
                            </div>
                            <ProgressBar
                                percent={35}
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

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
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
                        <TableCell className={classes.tr}>Weaver</TableCell>
                        <TableCell className={classes.tr}>Quality</TableCell>
                        <TableCell className={classes.tr}>Pick</TableCell>
                        <TableCell className={classes.tr}>Tag / Roll</TableCell>
                        <TableCell className={classes.tr}>Mtrs</TableCell>
                        <TableCell className={classes.tr}>Packing Slip</TableCell>
                        <TableCell className={classes.tr}>Dispatch Status</TableCell>
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
