import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import fileSvg from './file.svg'
import crossSvg from './cross.svg'
import rightSvg from './right.svg'
import roundrightSvg from './Eo_circle_green_white_checkmark.svg'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';
import L2l from './L2l';
import RsReports from './RsReports';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    background: '#0064d0',
  },
  body: {
    fontSize: 14,
    padding: 25
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, files) {
  return { name, calories, fat, carbs, protein, files };
}

const rows = [
  createData('29/10/2021', 'Parag P', '63"/128*72/40*40', '15 T-20 R', 'Parag P'),
  createData('29/10/2021', 'Deepak P', '63"/128*72/40*40', '30 T-15 R', 'Parag P'),
  createData('29/10/2021', 'Ajay P', '63"/128*72/40*40', '15 T-20 R', 'Parag P'),
  createData('29/10/2021', 'Parag P', '63"/128*72/40*40', '15 T-20 R', 'Parag P'),
  createData('29/10/2021', 'Deepak R', '63"/128*72/40*40', '30 T-15 R', 'Parag P'),
  createData('29/10/2021', 'Parag P', '63"/128*72/40*40', '30 T-15 R', 'Parag P'),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function QualityCheckTable() {

  const [showPendingChecking, setShowPendingChecking] = useState(true)
  const [showl2lReport, setShowl2lReport] = useState(false)
  const [showRsReports, setShowRsReports] = useState(false)
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const showTableDiv = () => {
    setShowPendingChecking(true);
    setShowl2lReport(false);
    setShowRsReports(false)
  }
  const showl2lTable = () => {
    setShowl2lReport(true);
    setShowPendingChecking(false);
    setShowRsReports(false)
  }
  const showRsReportsTable = () => {
    setShowRsReports(true)
    setShowPendingChecking(false);
    setShowl2lReport(false);
  }

  const classes = useStyles();

  return (
    <>
      <button onClick={showTableDiv} className={`bt1 btn btn-outline-primary btn-rounded ${showPendingChecking && 'active'}`}>Pending Checking Report</button>
      <button className={`bt1 btn btn-outline-primary btn-rounded ${showl2lReport && 'active'}`} onClick={showl2lTable}>L2L Reports</button>
      <button className={`bt1 btn btn-outline-primary btn-rounded ${showRsReports && 'active'}`} onClick={showRsReportsTable}>RS Reports</button>

      <br /><br />
      { showPendingChecking && 
      <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table" size="medium">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Trader</StyledTableCell>
              <StyledTableCell>Quality</StyledTableCell>
              <StyledTableCell>No. of Roll/Taga</StyledTableCell>
              <StyledTableCell>Checker</StyledTableCell>
              <StyledTableCell>Checking report</StyledTableCell>
              <StyledTableCell>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>{row.protein}</StyledTableCell>
                <StyledTableCell><img src={fileSvg} alt="" /> </StyledTableCell>
                <StyledTableCell>
                  <button type="button" className="btn btn-outline-danger px-4"><img src={crossSvg} alt="" /> Reject</button>  &nbsp; &nbsp; &nbsp;
                  <button type="button" className="btn btn-outline-success px-4" onClick={() => setOpen(true)}><img src={rightSvg} alt="" />Accept</button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box style={modalStyle} className={classes.paper}>
          <Box className="text-right">
            <IconButton onClick={() => setOpen(false)} >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="text-center">
          <img src={roundrightSvg} alt="right tick" style={{ width: '70px', height: '70px' }} className="mx-auto" />
            <h2 className="text-success">Success</h2>
            <p className="text-success"> You successfully accepted report</p>
          </Box>
        </Box>
      </Modal>
      </>
      }
      {
        showl2lReport && 
        <>
        <L2l></L2l>
        </>
      }
      {
        showRsReports && 
        <>
        <RsReports></RsReports>
        </>
      }
    </>
  );
}
