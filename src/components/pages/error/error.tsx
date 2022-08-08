import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import React from 'react';

function Error() {
  return (
    <Container maxWidth="xl">
      <Alert severity="error">OOOps... Page does not exists</Alert>
    </Container>
  );
}

export default Error;
