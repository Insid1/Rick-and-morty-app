import { Grid2Props } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

function CardContainer({ children }: Grid2Props) {
  return (
    <Grid
      container
      justifyContent="center"
      gap={5}
      columnSpacing={{
        xs: 1, sm: 2, md: 3, xl: 4,
      }}
    >
      { children }
    </Grid>
  );
}

export default CardContainer;
