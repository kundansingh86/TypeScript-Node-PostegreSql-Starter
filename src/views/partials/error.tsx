import React, { FunctionComponent } from "react";

const ErrorView: FunctionComponent<{
  errors: { message: string; field?: string }[];
}> = (props) => {
  if (props.errors && props.errors.length > 0) {
    return <strong>{props.errors.length} errors appeared</strong>;
  }

  return null;
};

export default ErrorView;
