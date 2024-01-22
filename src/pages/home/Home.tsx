import React from "react";
import CustomerMain from "@/pages/form/wave/customerForm/CustomerMain";
import {ObjOfCss} from "@/app-types";

export const Home = () => {
  return (
    <div style={styles.container}>
      <CustomerMain />
    </div>
  );
};

const styles: ObjOfCss = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
