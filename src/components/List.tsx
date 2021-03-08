import React from "react";
import { ButtonForm } from "./ButtonForm";
import Icon from "./Icon";

export function List({ title }: { title: string }) {
  const addEntry = () => {
    console.log("holi");
  };

  return (
    <div className="pa4">
      <div className="overflow-auto">
        <div className="fl w-100 flex items-center">
          <div className="fl w-80">
            <h1>{title}</h1>
          </div>
          <div className="fl w-20 flex justify-end items-center">
            <ButtonForm
              label="reset data"
              classname=" f6 link dim br2 bn ph3 pv2 dib ttu white bg-dark-green"
              action={addEntry}
            >
              <Icon styles={{ color: "white", size: "1.2em" }} type="reset" />
            </ButtonForm>
          </div>
        </div>
        <div className="fl w-100  bg-washed-red pa2">
          <div className="fl w-70 dark-pink pa2">200 selected</div>
          <div className="fl w-30 tc flex  justify-end">
            <div className="pr3">
              <ButtonForm
                label="add new"
                classname="f6 link dim br2 ba black bn bw1 ph3 pv2  dib ttu"
                action={addEntry}
              >
                <Icon styles={{ color: "black", size: "1.2em" }} type="plus" />
              </ButtonForm>
            </div>
            <div>
              <ButtonForm
                label="delete"
                classname="f6 link dim br2 white bw1 ph3 bn pv2 ttu  dib bg-light-red"
                action={addEntry}
              >
                <Icon styles={{ color: "white", size: "1.2em" }} type="trash" />
              </ButtonForm>
            </div>
          </div>
        </div>

        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              <th className="fw6 tl pa3 bg-white">Name</th>
              <th className="fw6 tl pa3 bg-white">Username</th>
              <th className="fw6 tl pa3 bg-white">Email</th>
              <th className="fw6 tl pa3 bg-white">ID</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            <tr className="stripe-dark">
              <td className="pa3">Hassan Johnson</td>
              <td className="pa3">@hassan</td>
              <td className="pa3">hassan@companywithalongdomain.co</td>
              <td className="pa3">14419232532474</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
