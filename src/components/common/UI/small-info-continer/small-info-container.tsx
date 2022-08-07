import Stack from '@mui/material/Stack';
import React, { ElementType } from 'react';

function SmallInfoContainer(
  { children, component }: { children: React.ReactNode, component: ElementType },
) {
  return (
    <Stack
      justifyContent="space-evenly"
      component={component}
      alignItems="center"
      direction="column"
      spacing={2}
      margin={1}
    >
      {children}
    </Stack>
  );
}

export default SmallInfoContainer;
