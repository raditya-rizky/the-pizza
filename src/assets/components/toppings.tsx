import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import variant from "../pizza.json";
import { useContext } from "react";
import { PizzaContext, PizzaContextType } from "../../App";

export function Toppings({ toppings }: { toppings: string[] }) {
  const { toppingsObject, setToppingsObject } = useContext(PizzaContext) as PizzaContextType

  const toppingsArray = variant.toppings.reduce((accumulator, currentValue) => {
    const values = Object.values(currentValue)[0];
    return accumulator.concat(values);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToppingsObject({
      ...toppingsObject,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box mt={8}>
      <Typography color={"primary"} fontSize={42} fontWeight={700} variant='h1' mb={3}>
        Toppings
      </Typography>

      <FormGroup>
        <Grid container spacing={2}>
          {
            toppingsArray.map((availableTopping) => (
              <Grid key={availableTopping} item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                    />
                  }
                  label={availableTopping}
                  value={availableTopping}
                  name={availableTopping}
                  disabled={!toppings.includes(availableTopping)}
                  sx={{
                    color: "black",
                  }}
                />
              </Grid>
            ))
          }
        </Grid>
      </FormGroup>
    </Box>
  )
}