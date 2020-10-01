import React from "react";
import "./App.css";

import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CheckBoxes from "./Components/CheckBoxes";
import MCQ from "./Components/MCQ";
import ShortAnswer from "./Components/ShortAnswer";
import ShortTextIcon from "@material-ui/icons/ShortText";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormTitle from "./Components/FormTitle";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
  card: {
    width: "70%",
    margin: "1rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardContent: {
    display: "flex",
    justifyContent: "spacebetween",
  },
  icons: {
    marginRight: "1rem",
  },
}));

const App = () => {
  const classes = useStyles();
  const [selectItem, setSelectItem] = React.useState("SA");
  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <FormTitle />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
          >
            {selectItem === "SA" && <ShortAnswer />}
            {selectItem === "MCQ" && <MCQ />}
            {selectItem === "CB" && <CheckBoxes />}
            <FormControl variant="outlined" className={classes.formControl}>
              <Select defaultValue="SA">
                <MenuItem value="SA" onClick={() => setSelectItem("SA")}>
                  <ListItemIcon>
                    <ShortTextIcon className={classes.icons} /> Short answer
                  </ListItemIcon>
                </MenuItem>
                <MenuItem value="MCQ" onClick={() => setSelectItem("MCQ")}>
                  <ListItemIcon>
                    <RadioButtonCheckedIcon className={classes.icons} />{" "}
                    Multiple choice
                  </ListItemIcon>
                </MenuItem>
                <MenuItem value="CB" onClick={() => setSelectItem("CB")}>
                  <ListItemIcon>
                    <CheckBoxIcon className={classes.icons} /> Checkboxes
                  </ListItemIcon>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
