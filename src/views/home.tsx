import React, { FunctionComponent } from "react";
import DefaultLayout from "./layouts/default";
import ErrorView from "./partials/error";

const Home: FunctionComponent<{ title: string; name: string; errors: [] }> = (
  props
) => {
  return (
    <DefaultLayout title={props.title}>
      <form method="POST">
        Name: <input type="text" name="email" /> <br />
        Password: <input type="password" name="password" /> <br />
        <button type="submit">Submit</button>
      </form>
      <div>Hello {props.name}</div>
      <ErrorView errors={props.errors} />
    </DefaultLayout>
  );
};

export default Home;
