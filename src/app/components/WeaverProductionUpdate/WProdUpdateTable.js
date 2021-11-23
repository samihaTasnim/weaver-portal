import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Collapse from "@material-ui/core/Collapse";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  FaPlayCircle,
  FaBan,
  FaCaretSquareDown,
  FaSyncAlt,
  FaLock,
  FaCircleNotch,
} from "react-icons/fa";
// import HouseSidingIcon from "@material-ui/icons/HouseSiding";

// import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
// const TableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "#0064d0",
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//     backgroundColor: "#f2f7fd",
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

function createData(
  Quality,
  Pick,
  Trader,
  CKDFacbric1,
  UnCKDFacbric1,
  CKDFacbric2,
  UnCKDFacbric2,
  Dispatch,
  Production,
  BeamStatus
) {
  return {
    Quality,
    Pick,
    Trader,
    CKDFacbric1,
    UnCKDFacbric1,
    CKDFacbric2,
    UnCKDFacbric2,
    Dispatch,
    Production,
    BeamStatus,
  };
}

const rows = [
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
  createData(
    '"63""/128*72/40*40"',
    42,
    "2 traders",
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    ["3 Beam", "2 Beam", "2 Beam", "40%"]
  ),
];

const useStyles = makeStyles({
  mainPage: {
    borderTopLeftRadius: 15,
  },
  table: {
    minWidth: 700,
  },
});

function Row(props) {
  const { row } = props;
  const [expandQuality, setExpandQuality] = useState(false);
  const [expandBeam, setExpandBeam] = useState(false);

  const onClickExpandQuality = () => {
    setExpandQuality(!expandQuality);
  };
  const onBeamClick = () => {
    setExpandBeam(!expandBeam);
  };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell onClick={onClickExpandQuality}>{row.Quality}</TableCell>
        <TableCell component="th" scope="row">
          {row.Pick}
        </TableCell>
        <TableCell align="center">{row.Trader}</TableCell>
        <TableCell align="center">{row.CKDFacbric1}</TableCell>
        <TableCell align="center">{row.UnCKDFacbric1}</TableCell>
        <TableCell align="center">{row.CKDFacbric2}</TableCell>
        <TableCell align="center">{row.UnCKDFacbric2}</TableCell>
        <TableCell align="center">{row.Dispatch}</TableCell>
        <TableCell align="center">{row.Production}</TableCell>
        <TableCell align="center">
          {row.BeamStatus[0]}
          <FaSyncAlt />
          {row.BeamStatus[1]}
          <FaCaretSquareDown />
          {row.BeamStatus[2]}
          <FaLock />
          {row.BeamStatus[3]}
          <FaCircleNotch />
        </TableCell>
      </TableRow>
      {expandQuality && (
        <TableRow style={{ backgroundColor: "#f0f0f0" }}>
          <TableCell />
          <TableCell component="th" scope="row">
            {row.Pick}
          </TableCell>
          <TableCell align="center">{row.Trader}</TableCell>
          <TableCell align="center">{row.CKDFacbric1}</TableCell>
          <TableCell align="center">{row.UnCKDFacbric1}</TableCell>
          <TableCell align="center">{row.CKDFacbric2}</TableCell>
          <TableCell align="center">{row.UnCKDFacbric2}</TableCell>
          <TableCell align="center">{row.Dispatch}</TableCell>
          <TableCell align="center">{row.Production}</TableCell>
          <TableCell align="center" onClick={onBeamClick}>
            {row.BeamStatus[0]}
            <FaSyncAlt />
            {row.BeamStatus[1]}
            <FaCaretSquareDown />
            {row.BeamStatus[2]}
            <FaLock />
            {row.BeamStatus[3]}
            <FaCircleNotch />
          </TableCell>
        </TableRow>
      )}
      {expandBeam && (
        <TableRow style={{ backgroundColor: "#f0f0f0" }}>
          <TableCell colSpan={9} />

          <TableCell style={{ padding: "40px 10px" }} align="center">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                Ronge No 45 <FaCaretSquareDown />
              </div>
              <div>0%</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>72</div>
                <FaPlayCircle style={{ margin: "0px 10px" }} />
                <FaBan />

                {/* <PlayCircleFilledRoundedIcon />
                <PlayCircleFilledRoundedIcon /> */}
              </div>
            </div>
          </TableCell>
          {/* <TableCell component="th" scope="row">
            {row.Pick}
          </TableCell>
          <TableCell align="center">{row.Trader}</TableCell>
          <TableCell align="center">{row.CKDFacbric1}</TableCell>
          <TableCell align="center">{row.UnCKDFacbric1}</TableCell>
          <TableCell align="center">{row.CKDFacbric2}</TableCell>
          <TableCell align="center">{row.UnCKDFacbric2}</TableCell>
          <TableCell align="center">{row.Dispatch}</TableCell>
          <TableCell align="center">{row.Production}</TableCell> */}
        </TableRow>
      )}

      {/* <TableCell style={{ paddingBottom: 0, paddingTop: 0 ,marginLeft:}} colSpan={8}>
          <Collapse in={expandQuality} timeout="auto" unmountOnExit>
            <TableCell component="th" scope="row">
              {row.Pick}
            </TableCell>
            <TableCell align="center">{row.Trader}</TableCell>
            <TableCell align="center">{row.CKDFacbric1}</TableCell>
            <TableCell align="center">{row.UnCKDFacbric1}</TableCell>
            <TableCell align="center">{row.CKDFacbric2}</TableCell>
            <TableCell align="center">{row.UnCKDFacbric2}</TableCell>
            <TableCell align="center">{row.Dispatch}</TableCell>
            <TableCell align="center">{row.Production}</TableCell>
            <TableCell align="center">{row.BeamStatus}</TableCell>
          </Collapse>
        </TableCell> */}
    </React.Fragment>
  );
}

export default function WProdUpdateTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.mainPage} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead style={{ backgroundColor: "#0064d0", color: "white" }}>
          <TableRow>
            <TableCell align="center">Quality</TableCell>
            <TableCell align="center">Pick</TableCell>
            <TableCell align="center">Trader</TableCell>
            <TableCell align="center">CKD Facbric</TableCell>
            <TableCell align="center">UnCKD Facbric</TableCell>
            <TableCell align="center">CKD Facbric</TableCell>
            <TableCell align="center">UnCKD Facbric</TableCell>
            <TableCell align="center">Dispatch</TableCell>
            <TableCell align="center">Production</TableCell>
            <TableCell align="center">Beam Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
