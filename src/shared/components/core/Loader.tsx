import React from "react";
import {ObjOfCss} from "@/app-types";

export const Loader = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.loader}/>
    </div>
  )
}

const styles: ObjOfCss = {
  overlay: {
    display: "flex",
    background: "#000000",
    opacity: 0.5,
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: 1000,
    alignItems: "center",
    justifyContent: "center"
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #FF0000",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    animation: "spin 2s linear infinite",
  }
}
