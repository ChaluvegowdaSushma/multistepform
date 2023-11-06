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
        error={
          props.personDetails.firstName === "" &&
          props.personDetails.isnextzeroclicked
        }
        required
        helperText={
          props.personDetails.firstName === "" &&
          props.personDetails.isnextzeroclicked
            ? "First name should not be empty"
            : ""
        }
        value={props.personDetails.firstName}
        onChange={(e) => {
          props.updateFirstName(e.target.value);
        }}
      />
      <TextField
        id="filled-basic"
        inputProps={{ style: { textAlign: "center" } }}
        label="Last Name"
        error={
          props.personDetails.lastName === "" &&
          props.personDetails.isnextzeroclicked
        }
        required
        helperText={
          props.personDetails.lastName === "" &&
          props.personDetails.isnextzeroclicked
            ? "Last name should not be empty"
            : ""
        }
        value={props.personDetails.lastName}
        onChange={(e) => {
          props.updateLastName(e.target.value);
        }}
      />
    </Box>
  );
}
