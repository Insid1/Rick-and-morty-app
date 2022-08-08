import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Logo from '@/assets/img/logo-black.svg';
import AppRoutes from '@/router/app-routes';
import { ToolBarStyled } from './header.styled';

function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="static" variant="elevation">
        <Container maxWidth="xl">
          <ToolBarStyled>
            <RouterLink to={AppRoutes.Main}>
              <Logo />
            </RouterLink>
            <Box sx={{ marginLeft: 'auto' }}>
              <Button variant="contained" href={AppRoutes.Main}>
                Main page
              </Button>
            </Box>
          </ToolBarStyled>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
