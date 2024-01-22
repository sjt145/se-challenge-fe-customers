import React, {CSSProperties} from "react";
import {ObjOfCss} from "@/app-types";

type Props = {
  name: string,
  style?: CSSProperties
}

export const Label = (props: Props) => {
  const {name} = props;
  return (
    <label style={{...styles.label, ...(props.style || {})}}>
      {name}
    </label>
  )
}

const styles: ObjOfCss = {
  label: {
    margin: "5px 2px",
    fontSize: "20px",
    color: "#2c3345"
  }
}
