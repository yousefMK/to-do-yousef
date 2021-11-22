import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 30,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [catagory, setCatagory] = useState("money");

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    setTitleError(false);
    setContentError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (content === "") {
      setContentError(true);
    }

    if (title && content) {
      console.log(JSON.stringify(title, content, catagory));
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, catagory }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note :
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.field}
          variant="outlined"
          fullWidth
          label="Note Title"
          error={titleError}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <TextField
          className={classes.field}
          variant="outlined"
          fullWidth
          label="Note Detailes"
          error={contentError}
          multiline
          rows={4}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Type</FormLabel>
          <RadioGroup
            value={catagory}
            onChange={(e) => {
              setCatagory(e.target.value);
            }}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="remiders"
              control={<Radio />}
              label="Remiders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<SendIcon />}
          onClick={submitForm}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
