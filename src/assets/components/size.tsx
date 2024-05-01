import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

export function Size() {
  return (
    <Box mt={8}>
      <Typography color={"primary"} fontSize={42} fontWeight={700} variant='h1' mb={3}>
        Size
      </Typography>

      <RadioGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "90px",
        }}
      >
        {
          ["small", "medium", "large"].map((size) => (
            <FormControlLabel
              control={<Radio />}
              label={size}
              value={size}
              sx={{
                color: "black",
              }}
            />
          ))
        }
      </RadioGroup>
    </Box>
  )
}