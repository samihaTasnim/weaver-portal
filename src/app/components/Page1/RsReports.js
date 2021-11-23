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
import crossSvg from './cross.svg'
import rightSvg from './right.svg'
import roundrightSvg from './Eo_circle_green_white_checkmark.svg'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Box } from '@material-ui/core';

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
  createData('29/10/2021', '23', '23', '5', 'Parag P', ),
  createData('29/10/2021', '24', '23', '5', 'Deepak P', ),
  createData('29/10/2021', '24', '23', '5', 'Ajay P', ),
  createData('29/10/2021', '24', '23', '5' ,'Parag P' ),
  createData('29/10/2021', '24', '23', '5', 'Deepak R', ),
  createData('29/10/2021', '24', '23', '5', 'Parag P', ),
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


const Rsreports = () => {

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table" size="medium">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Loom no.</StyledTableCell>
            <StyledTableCell>Running Beam No.</StyledTableCell>
            <StyledTableCell>RS </StyledTableCell>
            <StyledTableCell>Remark</StyledTableCell>
            <StyledTableCell>Checker</StyledTableCell>
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
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
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
  );
};

export default Rsreports;