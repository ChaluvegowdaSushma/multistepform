import * as React from "react";
import CardHeader from "@mui/material/CardHeader";

export default function Step4({ props }) {
  console.log(props.personDetails);
  return (
    <CardHeader
      style={{ textAlign: "center" }}
      title={
        "Thank you for filling the form " +
        props.personDetails.firstName +
        " " +
        props.personDetails.lastName
      }
    />
  );
}
