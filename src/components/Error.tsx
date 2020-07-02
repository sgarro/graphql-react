import React from "react";
import { Alert } from "@material-ui/lab";
import { useTheme } from "@material-ui/core";

const ErrorAlert = ({ error }) => {
  const theme = useTheme();

  return (
    <Alert style={{ margin: theme.spacing(2) }} severity="error">
      {error}
    </Alert>
  );
};
export default ErrorAlert