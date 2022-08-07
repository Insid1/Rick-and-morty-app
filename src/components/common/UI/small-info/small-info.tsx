import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

interface ISmallInfo extends BoxProps {
  title: string,
  text: string,
}

function SmallInfo({
  title, text, ...rest
}: ISmallInfo) {
  return (
    <Box
      {...rest}
      sx={{
        height: 64,
        borderBottom: '1px solid #bbbbbb',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: 400,
        minWidth: 240,
        p: 1,
      }}
    >
      <Typography component="h3" variant="h6">{title}</Typography>
      <Typography variant="subText">{text}</Typography>
    </Box>
  );
}

export type { ISmallInfo };
export default SmallInfo;
