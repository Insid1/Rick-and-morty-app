import createTheme from '@mui/material/styles/createTheme';
import { green, grey } from '@mui/material/colors';
import { extendedComponents } from './router-link';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subText: React.CSSProperties;
    emphasizedSubText: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subText?: React.CSSProperties;
    emphasizedSubText: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subText: true;
    emphasizedSubText: true;
  }
}

const CONTENT_MAX_WIDTH = 1220;

const theme = createTheme({
  components: {
    ...extendedComponents,
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: grey[50],
        },
      },
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1448,
    },
  },
  typography: {
    subText: {
      fontFamily: 'Roboto',
      color: grey[600],
      fontSize: 16,
      padding: 3,
    },
    emphasizedSubText: {
      fontFamily: 'Roboto',
      color: grey[600],
      fontSize: 18,
      padding: 3,
      fontWeight: 700,
    },
  },
  palette: {
    background: {
      paper: grey[50],
    },
    primary: {
      main: green[200],
    },
    secondary: {
      main: grey[500],
    },
  },
});

export { CONTENT_MAX_WIDTH };
export default theme;
