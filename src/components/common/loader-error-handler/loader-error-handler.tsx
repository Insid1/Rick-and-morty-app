import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import PortalImage from '@/assets/img/loading-component.svg';

interface ILoaderErrorHandler {
  error: string | null,
}

function LoaderErrorHandler({ error }: ILoaderErrorHandler) {
  return (
    <Box sx={{
      display: 'flex',
      height: '50vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      {error
        ? (
          <Alert severity="error">
            Error:
            {error}
          </Alert>
        )
        : (<PortalImage className="loader" />
        )}
    </Box>
  );
}

export default LoaderErrorHandler;
