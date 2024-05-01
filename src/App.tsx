import { ThemeProvider, createTheme } from '@mui/material';
import { Pizza } from './assets/components/pizza';
import { deepOrange } from '@mui/material/colors';
import { Size } from './assets/components/size';
import { Toppings } from './assets/components/toppings';
import availableToppings from "./assets/pizza.json"

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
      <Size />
      <Toppings toppings={availableToppings.pizza[0].toppings} />
    </ThemeProvider>
  );
}