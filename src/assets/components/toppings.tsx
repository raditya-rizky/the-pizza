import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import variant from "../pizza.json";

export function Toppings({ toppings }: { toppings: string[] }) {
  const toppingsArray = variant.toppings.reduce((accumulator, currentValue) => {
    const values = Object.values(currentValue)[0];
    return accumulator.concat(values);
  }, []);

  return (
    <Box mt={8}>
      <Typography color={"primary"} fontSize={42} fontWeight={700} variant='h1' mb={3}>
        Toppings
      </Typography>

      <FormGroup>
        <Grid justifyContent={"center"} alignItems={"center"} container spacing={2}>
          {
            toppingsArray.map((availableTopping) => (
              <Grid item xs={4}>
                <FormControlLabel
                  key={availableTopping}
                  control={<Checkbox />}
                  label={availableTopping}
                  value={availableTopping}
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