import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch } from '../store/hooks';
import { deleteNote } from '../store/modules/userLogged';

export interface StateModalProps {
  indexNote: number;
  stateModalDelete: boolean;
  setStateModalDelete: (value: boolean) => void;
  setStateModal: (value: boolean) => void;
}

export default function DialogDelete(props: StateModalProps) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    props.setStateModalDelete(false);
  };

  const saveNote = () => {
    dispatch(deleteNote(props.indexNote));
    props.setStateModalDelete(false);
    props.setStateModal(false);
    console.log('eu certo');
  };

  return (
    <div>
      <Dialog open={props.stateModalDelete} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">Do you really want to delete this note?</DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{ color: 'white', backgroundColor: '#ff4440' }}
          >
            Disagree
          </Button>
          <Button variant="contained" onClick={saveNote} autoFocus sx={{ backgroundColor: '19e666' }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
