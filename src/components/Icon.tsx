import React, {ReactElement} from "react";
import { IconContext } from "react-icons/lib";
import { BiPlus, BiReset, BiTrash } from 'react-icons/bi';

interface ButtonFormProps {
    type?: string
  styles?: IconContext,
}
interface SwitchIconProps {
    type?: string
  children:  React.ReactElement<HTMLButtonElement>[] ,
}

const Switch = (props:SwitchIconProps):any  => {
    const { type, children } = props
    return children.find((child:any) => {
      return child.props.id === type
    })      
  }

export default function Icon({type="", styles={}}:ButtonFormProps):ReactElement {
  return (
    <IconContext.Provider value={styles}>
       <Switch type={type}>
            <span id="plus"><BiPlus /></span>
            <span id="reset"><BiReset /></span>
            <span id="trash"><BiTrash /></span>
        </Switch>
  </IconContext.Provider>
  );
}