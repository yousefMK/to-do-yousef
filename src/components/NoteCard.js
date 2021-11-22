import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.catagory === "work") {
        return yellow[700];
      }
      if (note.catagory === "todos") {
        return blue[700];
      }
      if (note.catagory === "remiders") {
        return pink[400];
      } else {
        return green[700];
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  console.log(note.title);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.title[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.catagory}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
