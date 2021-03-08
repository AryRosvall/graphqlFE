import React, {ReactElement} from "react";

interface ButtonFormProps {
  label: string, 
  classname?: string,
  action: Function,
  children?: React.ReactNode
}

export function ButtonForm({label, classname, action, children}:ButtonFormProps):ReactElement {
  return (
    <div>
      <button className={classname} onClick={()=>action()} >
      {children} {label}
      </button>
    </div>
  );
}
