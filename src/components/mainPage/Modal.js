import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  image:{
      maxWidth: '100%',
      maxHeight: '100%'
  },
  dialog:{
      textAlign: 'center',
  },

  dialogContent: {
    backgroundColor: '#dddddd'
  },

  actions:{
    backgroundColor: '#dddddd'
  },

  button:{
    color: 'black',
    background: 'rgb(228, 130, 74)',
    height: '80px',
    width: '90px',
    margin: '0 auto',
    borderRadius: '4%',
    marginTop: '2px',
    marginBottom: '50px',
    "&:hover": {
      background: '#567CAA'
    }
  }
}));

export default function ModalComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
      
      <Dialog
        fullScreen={fullScreen}
        maxWidth="lg"
        maxHeight="lg"
        className={classes.dialog}
        open={props.open}
        onClose={props.onClick}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent className={classes.dialogContent}>
          <img alt="gif that is supposed to load" src={props.gifUrl} className={classes.image} height="auto" width="auto"/>
        </DialogContent>
        <DialogActions  className={classes.actions}>
          <Button onClick={props.onClick} className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
