import React, { ReactElement } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";

export function Nutrition(): ReactElement {
  return (
    <>
      <List title="Nutrition List" />
      <Form />
    </>
  );
}
