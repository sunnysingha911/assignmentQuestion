import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0.5rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "0.3rem",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  compMargin: {
    margin: "0.5rem",
  },
  text: {
    textTransform: "lowercase",
  },
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [options, setOptions] = React.useState([]);
  const addOption = (e) => {
    e.preventDefault();
    setOptions([
      ...options,
      <FormControlLabel
        control={<Checkbox name={e.target.optionName.value} />}
        label={e.target.optionName.value}
      />,
    ]);
    e.target.optionName.value = "";
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Input
        className={classes.compMargin}
        fullWidth
        name="question"
        placeholder="Enter question"
      />
      <FormControl component="fieldset">
        {options && options.map((val) => val)}
      </FormControl>
      <Typography className={classes.compMargin}>
        Add option or{" "}
        <Button
          onClick={() => setOpen(true)}
          disabled={options.length >= 5 ? true : false}
          color="primary"
          className={classes.text}
        >
          {options.length >= 5 ? "Max out" : 'add "Other"'}
        </Button>
      </Typography>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h6" gutterBottom align="center">
              Add option
            </Typography>
            <form onSubmit={addOption} className={classes.input}>
              <Input
                className={classes.compMargin}
                placeholder="Enter option name"
                name="optionName"
              />
              <Button
                className={classes.compMargin}
                type="submit"
                color="primary"
                variant="contained"
              >
                Add Option
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
