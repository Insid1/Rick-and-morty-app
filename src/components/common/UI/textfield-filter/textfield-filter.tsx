import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function TextfieldFilter(props: TextFieldProps) {
  return (
    <Box sx={{ textAlign: 'center', margin: '30px auto' }}>
      <TextField
        {...props}
        sx={{
          width: 400,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default TextfieldFilter;
