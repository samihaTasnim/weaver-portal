import React from "react";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import WProdUpdateTable from "./WProdUpdateTable";

const useStyles = makeStyles((theme) => ({
  headTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 200,
    borderRadius: 25,
    height: 30,
    border: "1px solid #0064d0",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 12,
  },
  iconButton: {
    padding: 10,
    color: "#0064d0",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  title: {
    color: "#0064d0",
  },
}));

function WeaverProductionUpdate() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.headTitle}>
        <Typography className={classes.title}>
          Weaver Production Update
        </Typography>
        <Paper component="form" elevation={0} className={classes.paper}>
          <InputBase
            className={classes.input}
            placeholder="Search Here"
            inputProps={{ "aria-label": "search here" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <hr />
      <WProdUpdateTable />
    </div>
  );
}

export default WeaverProductionUpdate;
