import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Button from "@mui/material/Button";
import { useState } from "react";

const steps = ["Basic Details*", "Contact Details*", "Additional Info", "End"];

export default function MultistepForm(props) {
  const [activeStep, setActiveStep] = useState(0);

  const onClickNext = (activeStep, props) => {
    if (
      activeStep == 0 &&
      (props.personDetails.firstName == "" ||
        props.personDetails.lastName == "")
    ) {
      props.updatenextzero(true);
    } else if (
      activeStep == 1 &&
      (!/\S+@\S+\.\S+/.test(props.personDetails.email) ||
        !props.personDetails.phoneNumber.match("[0-9]{10}"))
    ) {
      props.updatenextone(true);
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  const onClickPrev = (activeStep) => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep == 0 && <Step1 props={props} />}
      {activeStep == 1 && <Step2 props={props} />}
      {activeStep == 2 && <Step3 props={props} />}
      {activeStep == 3 && <Step4 props={props} />}
      {activeStep != 0 && activeStep != 3 && (
        <Box textAlign="center" minHeight="10vh">
          <Button
            variant="outlined"
            onClick={() => {
              onClickPrev(activeStep, props);
            }}
          >
            Previous
          </Button>
        </Box>
      )}
      {activeStep != 3 && (
        <Box minHeight="10vh" textAlign="center">
          <Button
            variant="contained"
            onClick={() => {
              onClickNext(activeStep, props);
            }}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
}
