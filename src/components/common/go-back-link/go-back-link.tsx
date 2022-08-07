import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GoBackLink() {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate(-1);
  };
  return (
    <Button onClick={handleCLick} variant="outlined" color="secondary">
      <ArrowBackIcon />
      <Typography>GO BACK</Typography>
    </Button>
  );
}

export default GoBackLink;
