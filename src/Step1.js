import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Step1({ props }) {
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
        inputProps={{ style: { textAlign: "center" } }}
        label="First Name"
        required
        value={props.personDetails.firstName}
        onChange={(e) => {
          console.log(e.target.value);
          props.updateFirstName(e.target.value);
        }}
      />
      <TextField
        id="filled-basic"
        inputProps={{ style: { textAlign: "center" } }}
        label="Last Name"
        required
        value={props.personDetails.lastName}
        onChange={(e) => {
          console.log(e.target.value);
          props.updateLastName(e.target.value);
        }}
      />
    </Box>
  );
}
