import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";

export default () => {
  const [title, setTitle] = React.useState();
  return (
    <div>
      {title ? (
        <Typography variant="h3">{title}</Typography>
      ) : (
        <TextField
          fullWidth
          onKeyDown={(e) =>
            e.key === "Enter" ? setTitle(e.target.value) : null
          }
        />
      )}
      <FormHelperText>Form description</FormHelperText>
      <hr />
    </div>
  );
};
