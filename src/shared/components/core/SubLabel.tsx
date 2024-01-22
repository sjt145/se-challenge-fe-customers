import React from "react";
import {ObjOfCss} from "@/app-types";

type Props = {
  name: string
}

export const SubLabel = (props: Props) => {
  const {name} = props;
  return (
    <span>
      <label style={styles.label}>{name}</label>
    </span>
  )
}

const styles: ObjOfCss = {
  label: {
    padding: "0px",
    margin: "5px 2px",
    fontSize: "13px",
    color: "#57647e"
  }
}
