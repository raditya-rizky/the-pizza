import { createContext, useEffect, useState } from 'react';
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Pizza } from './assets/components/pizza';
import { deepOrange } from '@mui/material/colors';
import { Size } from './assets/components/size';
import { Toppings } from './assets/components/toppings';
import pizzaVariant from "./assets/pizza.json"

const theme = createTheme({
  palette: {
    primary: deepOrange
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "1rem",
        },
      }
    }
  },
})

export interface PizzaContextType {
  selectedPizza: string
  setSelectedPizza: (selectedPizza: string) => void
  size: string
  setSize: (size: string) => void
  toppingsObject: Record<string, boolean>
  setToppingsObject: (toppingsObject: Record<string, boolean>) => void
}

export const PizzaContext = createContext<PizzaContextType | null>(null)

export default function App() {
  const [selectedPizza, setSelectedPizza] = useState("")
  const [size, setSize] = useState("medium")
  const [toppingsObject, setToppingsObject] = useState<Record<string, boolean>>({});
  const [toppingPrice, setToppingPrice] = useState(0)

  const toppings = pizzaVariant.pizza.find((pizza) => (pizza.name === selectedPizza))?.toppings
  const price = Number(pizzaVariant.pizza.find((pizza) => (pizza.name === selectedPizza))?.price ?? 0)

  useEffect(() => {
    const oneDollarToppings = pizzaVariant.toppings[0].$1
    const twoDollarToppings = pizzaVariant.toppings[1].$2
    const threeDollarToppings = pizzaVariant.toppings[2].$3
    const keys = Object.keys(toppingsObject)

    let totalPrice = 0

    keys.forEach((item) => {
      if (toppingsObject[item]) {
        if (oneDollarToppings?.includes(item)) {
          totalPrice += 1;
          setToppingPrice(totalPrice)
        }
        if (twoDollarToppings?.includes(item)) {
          totalPrice += 2;
          setToppingPrice(totalPrice)
        }
        if (threeDollarToppings?.includes(item)) {
          totalPrice += 3;
          setToppingPrice(totalPrice)
        }
      } else {
        setToppingPrice(totalPrice)
      }
    })
  }, [price, size, toppingsObject])

  return (
    <PizzaContext.Provider value={{ selectedPizza, setSelectedPizza, size, setSize, toppingsObject, setToppingsObject }}>
      <ThemeProvider theme={theme}>
        <Pizza />
        <Size />
        <Toppings toppings={toppings ?? []} />

        <Box
          component={"div"}
          mb={20}
          mt={8}
        >
          <Typography color={"primary"} fontSize={42} fontWeight={700} variant='h1' mb={3}>
            Price
          </Typography>

          <Typography color={"black"} fontSize={42} fontWeight={700} variant='h2' mb={3}>
            ${size === "small" ? price - 1 + toppingPrice : size === "large" ? price + 2 + toppingPrice : price + toppingPrice}
          </Typography>
        </Box>
      </ThemeProvider>
    </PizzaContext.Provider>
  );
}