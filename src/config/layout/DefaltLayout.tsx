import { Container, Grid } from '@mui/material';
import React from 'react';

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={12}>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Component />
        </Container>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
