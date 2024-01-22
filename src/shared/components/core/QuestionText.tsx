import React, {CSSProperties} from "react";
import {ObjOfCss} from "@/app-types";
import {Label} from "@/shared/components";
import {Col} from "react-bootstrap";

type Props = {
  isRequired: boolean
  name: string,
  sx?: {
    inputLabel?: CSSProperties
  }
}

export const QuestionText = (props: Props) => {
  const {name, isRequired} = props;
  return (
    <span style={styles.span}>
      <Label name={name} style={{...styles.questionText, ...(props.sx?.inputLabel || {})}}/>
      {isRequired ? <span style={styles.asterisk}>*</span> : null}
    </span>
  )
}

const styles: ObjOfCss = {
  span: {},
  questionText: {
    margin: "5px 2px",
    fontSize: "20px",
    color: "#2D2D2D"
  },
  asterisk: {
    color: "red",
    fontSize: "15px",
    marginLeft: "3px"
  }
}
