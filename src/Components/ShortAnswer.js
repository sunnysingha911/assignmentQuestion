import React from "react";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0.5rem",
  },
  compMargin: {
    margin: "0.5rem",
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form>
        <Input
          className={classes.compMargin}
          fullWidth
          name="question"
          placeholder="Enter question"
        />
        <Input
          className={classes.compMargin}
          fullWidth
          name="answer"
          placeholder="Short answer text"
        />
      </form>
    </div>
  );
};
