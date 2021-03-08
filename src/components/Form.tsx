import React from "react";
import { FaCheck } from "react-icons/fa";
import { InputForm } from "./InputForm";
import { RiAlertLine } from "react-icons/ri";
import { ButtonForm } from "./ButtonForm";

export function Form() {
  const saveEntry = (event: MouseEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="sans-serif w-90  black-80 mw6 center relative cover bg-top mt2">
      <div className="relative pa4 pa5-m">
        <div className="tracked  mb4 pv2 tc bg-gold">
          <RiAlertLine /> Please fill the details before you submit
        </div>
        <form id="addDessert" className="">
          <InputForm name="Dessert name" type="text" required />
          <InputForm name="Calories" type="text" required />
          <InputForm name="Fat" type="text" required />
          <InputForm name="Carbs" type="text" required />
          <InputForm name="Protein" type="text" required />
          <ButtonForm
            label="Submit"
            action={saveEntry}
            classname="input-reset w-100 light-gray br2 tracked pv2 ph2 pointer bg-dark-green hover-bg-blue bn"
          >
            <FaCheck />
          </ButtonForm>
        </form>
      </div>
    </div>
  );
}
