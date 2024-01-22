import React from "react";
import {ObjOfCss} from "@/app-types";
import {Col} from "@/shared/components";

type Props = {
  message: string,
  onClick?: () => void
}

export const MessageModal = (props: Props) => {
  const {message, onClick} = props;

  return (
    <div style={styles.dialog}>
      <Col style={styles.container}>
        <h3 style={styles.message}>{message}</h3>
        <span onClick={onClick} style={styles.button}>OK</span>
      </Col>
    </div>
  )
}

const styles: ObjOfCss = {
  dialog: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    zIndex: 999999,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    background: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 40px",
    borderRadius: "5px"
  },
  message: {
    textAlign: "center",
    color: "#333333",
    fontSize: "15px"
  },
  button: {
    background: "#80808047",
    color: "#333333",
    fontSize: "13px",
    padding: "5px 10px",
    cursor: "pointer"
  }
}
