import Paper from "@mui/material/Paper";
import variant from "../pizza.json";
import { Box, FormControlLabel, Radio, RadioGroup, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { PizzaContext, PizzaContextType } from "../../App";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(4),
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}))

const PizzaCard = styled(Paper)(({ theme }) => ({
  flexGrow: 1,
  transition: "all 0.3s",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
  "&:hover": {
    boxShadow: theme.shadows[8],
    cursor: "pointer",
    transform: "scale(1.05)",
  },
}))

export function Pizza() {
  const { setSelectedPizza, selectedPizza } = useContext(PizzaContext) as PizzaContextType

  return (
    <>
      <RadioGroup>
        <Typography color={"primary"} fontSize={42} fontWeight={700} variant='h1' mb={3}>
          Pizza
        </Typography>
        <Container>
          {
            variant.pizza.map((pizza) => (
              <PizzaCard
                elevation={3}
                key={pizza.name}
                onClick={() =>
                  setSelectedPizza(pizza.name)
                }
                sx={{
                  transform: selectedPizza === pizza.name ? "scale(1.05)" : "none"
                }}
              >
                <Box
                  alt={pizza.name}
                  component={"img"}
                  src={pizza.image}
                  sx={{
                    borderRadius: "8px",
                    height: 233,
                    maxHeight: { xs: 233, md: 400 },
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <p
                  style={{
                    fontWeight: selectedPizza === pizza.name ? "bold" : "normal"
                  }}
                >
                  {pizza.name}
                </p>

                <span
                  style={{
                    fontWeight: selectedPizza === pizza.name ? "bold" : "normal"
                  }}
                >${pizza.price}</span>

                <FormControlLabel
                  control={<Radio />}
                  label={pizza.name}
                  value={pizza.name}
                  sx={{
                    display: "block",
                    textAlign: "center",
                  }}
                  checked={pizza.name === selectedPizza}
                />
              </PizzaCard>
            ))
          }
        </Container>
      </RadioGroup>
    </>
  )
}
