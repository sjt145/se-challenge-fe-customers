import React from 'react';
import ReactDOM from 'react-dom/client';
import {configure} from "@/http";
import App from "./App";

configure(process.env.API_BASE_URL, (error: Error) => {
  console.log("API Error: ", error);
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

