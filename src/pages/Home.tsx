import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Button, Container, Grid, TextField } from '@mui/material';
import ListErrands from '../components/ListErrands';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { updateOne } from '../store/modules/registerSlice';

import { addNote } from '../store/modules/userLogged';

const Home: React.FC = () => {
  const loggedUser = useAppSelector(state => state.login);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const [stateSearch, setStateSearch] = React.useState<string>('');
  console.log(stateSearch);

  useEffect(() => {
    if (!loggedUser.username) {
      navigate('/');
    }
  }, []);

  const openDescription = () => {
    if (description.length > 0) {
      dispatch(addNote({ description, details }));
      setDescription('');
      setDetails('');
    }
  };

  useEffect(() => {
    dispatch(updateOne({ id: loggedUser.username, changes: { notes: loggedUser.notes } }));
  }, [loggedUser]);
  return (
    <React.Fragment>
      <Grid sx={{ marginBottom: '14px' }}>
        <ResponsiveAppBar requestSearch={setStateSearch} />
      </Grid>

      <Container>
        <Grid container>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2} sx={{ marginBottom: '15px' }}>
              <Grid item xs={5} sm={4}>
                <TextField
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                  variant="standard"
                  label="Description"
                  fullWidth
                />
              </Grid>
              <Grid item xs={7} sm={6}>
                <TextField
                  onChange={e => setDetails(e.target.value)}
                  value={details}
                  variant="standard"
                  label="Details"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button onClick={openDescription} fullWidth variant="outlined" sx={{ marginTop: '11px' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ListErrands GetSearch={stateSearch} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
