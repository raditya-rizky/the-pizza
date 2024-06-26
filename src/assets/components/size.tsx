import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useContext } from "react";
import { PizzaContext, PizzaContextType } from "../../App";

export function Size() {
  const { size, setSize, selectedPizza } = useContext(PizzaContext) as PizzaContextType

  return (
    <Box mt={8}>
      <Typography color={"primary"} fontSize={42} fontWeight={700} variant='h1' mb={3}>
        Size
      </Typography>

      <FormControl>
        <RadioGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "90px",
          }}
          defaultValue={size}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          {
            ["small", "medium", "large"].map((size) => (
              <FormControlLabel
                key={size}
                control={<Radio />}
                label={size}
                value={size}
                sx={{
                  color: "black",
                }}
                disabled={!selectedPizza}
              />
            ))
          }
        </RadioGroup>
      </FormControl>
    </Box>
  )
}