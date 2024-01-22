import React, {CSSProperties} from "react";
import {ObjOfCss, ReactElementChildren} from "@/app-types";

type Props = {
  style?: CSSProperties,
  children?: ReactElementChildren
}

export const Scroll = (props: Props) => {
  const {style, children} = props;

  const container: CSSProperties = {
    ...styles.container,
    ...(style || {})
  }

  return (
    <span style={container}>{children}</span>
  )
}

const styles: ObjOfCss = {
  container: {
    overflow: "auto"
  }
}
