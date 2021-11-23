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
import ReactTooltip from 'react-tooltip';
import Popup from './Popup'

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
        color: '#ffffff',
        fontColor: 'black',
    },
});


const data = [
    {
        Ctr: "1",
        Quality: `"63""/128*72/40*40"`,
        Weaver: "T7SON",
        beamInMtrs: "4450",
        pendingMtrs: "5000",
        beamReqDate: "01/07/2021",
        emptyBeamIssue: "01/07/2021",
        beamIssueInward: "01/07/2021",
    },
    {
        Ctr: "1",
        Quality: `"63""/128*72/40*40"`,
        Weaver: "T7SON",
        beamInMtrs: "4450",
        beamReqDate: "01/07/2021",
        emptyBeamIssue: "01/07/2021",
        beamIssueInward: "01/07/2021",
    },
    {
        Ctr: "1",
        Quality: `"63""/128*72/40*40"`,
        Weaver: "T7SON",
        beamInMtrs: "4450",
        beamReqDate: "01/07/2021",
        emptyBeamIssue: "01/07/2021",
        beamIssueInward: "01/07/2021",
    },
    {
        Ctr: "1",
        Quality: `"63""/128*72/40*40"`,
        Weaver: "T7SON",
        beamInMtrs: "4450",
        beamReqDate: "01/07/2021",
        emptyBeamIssue: "01/07/2021",
        beamIssueInward: "01/07/2021",
    },
    {
        Ctr: "1",
        Quality: `"63""/128*72/40*40"`,
        Weaver: "T7SON",
        beamInMtrs: "4450",
        beamReqDate: "01/07/2021",
        emptyBeamIssue: "01/07/2021",
        beamIssueInward: "01/07/2021",
    }
]

export default function WeftTable() {
    const classes = useRowStyles();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead >
                    <TableRow className={classes.table}>
                        <TableCell>Ctr.No.</TableCell>
                        <TableCell>Quality</TableCell>
                        <TableCell>Weaver</TableCell>
                        <TableCell>Beam Inward Mtrs</TableCell>
                        <TableCell>Pending Mtrs</TableCell>
                        <TableCell>Beam Required date</TableCell>
                        <TableCell>Sizing Set issued</TableCell>
                        <TableCell>Empty Beam Issue</TableCell>
                        <TableCell>Beam Inward</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((e) => (
                        <TableRow key={e.date} >
                            <TableCell align="center">Ctr {e.Ctr}</TableCell>
                            <TableCell align="center">{e.Quality}</TableCell>
                            <TableCell align="center">{e.Weaver}</TableCell>
                            <TableCell align="center">{e.beamInMtrs}</TableCell>
                            <TableCell align="center">

                                <a
                                    data-tip
                                    data-for='one'
                                    type='button'
                                    //   href={`/doctor-info/${e._id}`}
                                    className='zmdi zmdi-info-outline fontIcon'
                                >{e.pendingMtrs}</a>
                                <ReactTooltip id='one' type='' className="bg-primary" aria-haspopup='true'>
                                    <div>Date - {e.beamReqDate}</div>
                                    <div>Beam Mtrs - {e.beamInMtrs}</div>
                                </ReactTooltip>


                            </TableCell>
                            <TableCell align="center">
                                {e.beamReqDate}
                                <i className='mdi green-info primary mdi-information' />
                            </TableCell>
                            <TableCell align="center">
                                <Popup />
                            </TableCell>
                            <TableCell align="center">
                                <a
                                    data-tip
                                    data-for='two'
                                    type='button'
                                    //   href={`/doctor-info/${e._id}`}
                                    className='zmdi zmdi-info-outline fontIcon'
                                >{e.emptyBeamIssue}</a>
                                <ReactTooltip id='two' type='' className="bg-primary" aria-haspopup='true'>
                                    <div>Flange No.</div>
                                    <div>45</div>
                                    <div>45</div>
                                    <div>45</div>
                                    <div>45</div>
                                    <div>45</div>
                                </ReactTooltip>

                            </TableCell>
                            <TableCell align="center">{e.beamIssueInward}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
