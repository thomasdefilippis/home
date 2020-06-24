import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  image:{
      width: 'auto',
      height: 'auto'
  },
  dialog:{
      textAlign: 'center'
  },
  button:{
    color: 'black',
    fontSize: '30px',
    background: 'rgb(228, 130, 74)',
    margin: '0 auto',
    borderRadius: '20%',
    marginTop: '10px',
    marginBottom: '10px',
    "&:hover": {
      background: '#567CAA'
    }
  }
}));

export default function ModalComponent(props) {
  const classes = useStyles();


  return (
      
      <Dialog
        fullScreen
        className={classes.dialog}
        open={props.open}
        onClose={props.onClick}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent className={classes.dialog}>
          <img alt="gif that is supposed to load" src={props.gifUrl} className={classes.image} height="auto" width="auto"/>
        </DialogContent>
        <DialogActions style={{textAlign: 'center'}}>
          <Button onClick={props.onClick} className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
