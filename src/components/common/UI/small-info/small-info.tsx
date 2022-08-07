import React from 'react';
import { Box, Typography } from '@mui/material';

interface ISmallInfo {
  title: string,
  text: string,
}

function SmallInfo({ title, text }: ISmallInfo) {
  return (
    <Box sx={{
      height: 64,
      borderBottom: '1px solid #bbbbbb',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: 400,
      minWidth: 240,
    }}
    >
      <Typography component="h3" variant="h6">{title}</Typography>
      <Typography variant="subText">{text}</Typography>
    </Box>
  );
}

export default SmallInfo;
