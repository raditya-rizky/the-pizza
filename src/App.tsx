import { ThemeProvider, createTheme } from '@mui/material';
import { Pizza } from './pizza';
import { deepOrange } from '@mui/material/colors';

export default function RadioButtonsGroup() {
  const theme = createTheme({
    palette: {
      primary: deepOrange
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            // overflow: "hidden",
            padding: "1rem",
          },
        }
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Pizza />
    </ThemeProvider>
  );
}