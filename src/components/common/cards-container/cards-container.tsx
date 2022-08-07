import Grid from '@mui/material/Grid';
import React from 'react';

function CardsContainer({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      container
      component="ul"
      justifyContent="center"
      gap={5}
      columnSpacing={{
        xs: 1, sm: 2, md: 3, xl: 4,
      }}
    >
      {children }
    </Grid>
  );
}

export default CardsContainer;
