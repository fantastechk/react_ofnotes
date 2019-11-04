import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  inp: {
    marginBottom: theme.spacing(3)
  },
  btn: {
    float: 'right',
    marginLeft: theme.spacing(3)
  },
}))


export const NoteTextField = props => {
  const classes = useStyles();
  return (
    <TextField 
      variant="outlined"
      fullWidth
      className={classes.inp}
      InputLabelProps={{
        shrink: Boolean(props.value)
      }}
      {...props}
    />
  )
}


export const NoteFormButton = props => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.btn}
      {...props}
      />
  )
}
