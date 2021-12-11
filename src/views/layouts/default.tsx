import React, { FunctionComponent } from "react";

const DefaultLayout: FunctionComponent<{ title: string }> = (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default DefaultLayout;
