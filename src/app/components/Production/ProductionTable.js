import React, { useState, useEffect } from 'react';
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
import './style.scss'

const useRowStyles = makeStyles({
    root: {
        // background: '#0064d0',
        // color: '#ffffff',

        fontColor: 'black',
    },
    head: {
        background: '#0064d0'
    },
    table: {
        background: '#0064d0',
        color: '#ffffff',
        fontColor: 'black',
    },
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


function Row(props) {
    const { e } = props;
    console.log('data1: ', e);
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.tr}>
                <TableCell align="center" className='tablerow' scope="row">{e.Weaver}</TableCell>
                <TableCell align="center" className='tablerow'>{e.Count}</TableCell>
                <TableCell align="center" className='tablerow'>{e.Weaver}</TableCell>
                <TableCell align="center" className='tablerow'>{e.Weaver}</TableCell>
                <TableCell align="center" className='tablerow'>
                    <button className='btn btn-primary btn-rounded' onClick={() => setOpen(!open)} style={{ backgroundColor: "#0064d0", color: 'white' }}>
                        Request Dispatch
                    </button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                {/* <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tr}>Quality</TableCell>
                                        <TableCell className={classes.tr}>Count</TableCell>
                                        <TableCell className={classes.tr}>Weft required</TableCell>
                                        <TableCell className={classes.tr}>Weft issued</TableCell>
                                        <TableCell className={classes.tr}>Balance weft</TableCell>
                                        <TableCell className={classes.tr}>Last weft issue date</TableCell>
                                        <TableCell className={classes.tr}>Next weft issue date</TableCell>
                                    </TableRow>
                                </TableHead> */}
                                <TableBody>
                                    {e.tableData.map((e) => (
                                        <TableRow key={e.date} >
                                            <TableCell className='tablerow'>{e.Count}</TableCell>
                                            <TableCell className='tablerow'>{e.Count}</TableCell>
                                            <TableCell className='tablerow'>{e.WeftRequired}</TableCell>
                                            <TableCell className='tablerow'>
                                                <button className='btn tablerow1 btn-primary btn-rounded view-btn'>
                                                    <i className='mdi mdi-eye ml-3' />
                                                    View Checking Resports
                                                </button></TableCell>
                                            <TableCell>
                                                <button
                                                    className='btn btn-primary btn-rounded view-btn'>
                                                    Request Dispatch
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
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
                        <TableCell align="center">Quality</TableCell>
                        <TableCell align="center">Pick</TableCell>
                        <TableCell align="center">Mtrs</TableCell>
                        <TableCell align="center">Roll /Taga</TableCell>
                        <TableCell align="center">Change button</TableCell>
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
