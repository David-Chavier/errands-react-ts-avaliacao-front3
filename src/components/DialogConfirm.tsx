import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export interface StateModalProps {
  indexNote: number;
  stateModalConfirm: boolean;
  setStateModalConfirm: (value: boolean) => void;
  editConfirm: () => void;
}

export default function DialogConfirm(props: StateModalProps) {
  const handleClose = () => {
    props.setStateModalConfirm(false);
  };

  const saveNote = () => {
    props.editConfirm();
  };

  return (
    <div>
      <Dialog open={props.stateModalConfirm} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">Really want to save the changes?</DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{ color: 'white', backgroundColor: '#ff4440' }}
          >
            Disagree
          </Button>
          <Button variant="contained" onClick={saveNote} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
