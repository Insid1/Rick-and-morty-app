import { Typography, TypographyProps } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

function SectionTitle({ children }: TypographyProps) {
  return (
    <Typography lineHeight={4} component="h4" variant="h6" color={grey[500]}>{children}</Typography>
  );
}

export default SectionTitle;
