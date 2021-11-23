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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import "react-step-progress-bar/styles.css";
import PopUp from "./Popup"
import { ProgressBar, Step } from "react-step-progress-bar";
import './style.scss'

const useRowStyles = makeStyles({
    root: {

    },
    head: {
        background: '#0064d0'
    },
    table: {
        boxShadow: "2px 2px 2px",
        background: '#0064d0',
        color: '#ffffff',
        fontColor: 'black',
    },
    mt: {
        // color: '#0064d0',
        fontFamily: "Roboto",
        fontWeight: "500",
    },
    th: {
        // background: '#ffffff',
        color: "#0064D0 !important"
        // color: '#142045',
    },
    tr: {
        color: "#0064D0 !important",
    },
    m2: {
        borderBottom: "1px solid rgb(17 17 17 / 0%); !important"
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
    }
]


function Row({ e, a }) {
    console.log('data1: ', e);
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root} onClick={() => setOpen(!open)}>
                <TableCell align='center' className={classes.mt} scope="row">{e.Weaver}</TableCell>
                <TableCell align='center' className={classes.mt}>{e.Count}</TableCell>
                <TableCell align='center' className={classes.mt}>{e.Count}</TableCell>
                <TableCell align='center' className={classes.mt}>{e.Weaver}</TableCell>
                <TableCell align='center' className={classes.mt}>{e.WeftRequired}</TableCell>
                <TableCell align='center' className={classes.mt}>
                    <div className='row justify-content-between'>
                        <TableCell align='center' className='table-row2 nt1'>Pick In</TableCell>
                        <TableCell align='center' className='table-row2 nt1 row'>
                            <div>On the Way</div>
                        </TableCell>
                        <TableCell align='center' className='table-row2 nt1 row'>
                            <div>Delivery</div>
                        </TableCell>
                    </div>
                    <ProgressBar
                        percent={50}
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
                <TableCell align='center' className={classes.mt}>
                    <PopUp
                        a={a} />
                </TableCell>
            </TableRow>
            {/* <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tr}>Quality</TableCell>
                                        <TableCell className={classes.tr}>Count</TableCell>
                                        <TableCell className={classes.tr}>Mill Name</TableCell>
                                        <TableCell className={classes.tr}>Bags</TableCell>
                                        <TableCell className={classes.tr}>Weft issue</TableCell>
                                        <TableCell className={classes.tr}>Delivery Status</TableCell>
                                        <TableCell className={classes.tr}>Info</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {e.tableData.map((e) => (
                                        <TableRow key={e.date} >
                                            <TableCell>{e.Count}</TableCell>
                                            <TableCell>{e.Count}</TableCell>
                                            <TableCell>{e.Count}</TableCell>
                                            <TableCell>{e.WeftRequired}</TableCell>
                                            <TableCell>{e.WeftIssued}</TableCell>
                                            <TableCell></TableCell>

                                            <TableCell>{e.NextIssueDate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow> */}
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
    const a = 0;
    const classes = useRowStyles();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead >
                    <TableRow className={classes.table}>
                        <TableCell align="center" >Quality</TableCell>
                        <TableCell align="center" >Count</TableCell>
                        <TableCell align="center" >Mill Name</TableCell>
                        <TableCell align="center" >Bags</TableCell>
                        <TableCell align="center" >Weft issue</TableCell>
                        <TableCell align="center" >Daily Status</TableCell>
                        <TableCell align="center" >Info</TableCell>
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
