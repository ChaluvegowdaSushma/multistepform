import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Step2({ props }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="30vh"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        required
        value={props.personDetails.email}
        onChange={(e) => props.updateEmail(e.target.value)}
      />
      <TextField
        id="filled-basic"
        label="Phone Number"
        variant="outlined"
        required
        value={props.personDetails.phoneNumber}
        onChange={(e) => props.updateNumber(e.target.value)}
      />
    </Box>
  );
}
