import React from "react";
import CustomerDetails from "@/pages/form/wave/customerForm/CustomerDetails";
import {ObjOfCss} from "@/app-types";

export const Home = () => {
  return (
    <div style={styles.container}>
      <CustomerDetails />
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
