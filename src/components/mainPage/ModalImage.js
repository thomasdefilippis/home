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
      maxWidth: '95%',
      maxHeight: '95%'
  },
  dialog:{
      textAlign: 'center',
      height: 'auto',
      width: 'auto',
      backgroundColor: '#dddddd'
  },

  actions:{
    backgroundColor: '#dddddd'
  },

  button:{
    color: 'black',
    background: 'rgb(228, 130, 74)',
    margin: '0 auto',
    height: '80px',
    width: '90px',
    borderRadius: '4%',
    marginTop: '4px',
    marginBottom: '60px',
    "&:hover": {
      background: '#567CAA'
    }
  }
}));

export default function ModalImageComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      
      <Dialog
        fullScreen={fullScreen}
        maxWidth="lg"
        open={props.over}
        onClose={props.onClick}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent className={classes.dialog}>
          <img alt="gif that is supposed to load" src={props.image} className={classes.image} height="auto" width="auto"/>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={props.onClick} className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
