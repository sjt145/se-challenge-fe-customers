import {styled} from "@mui/material/styles";
import React from "react";
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowDownwardIcon sx={{fontSize: "0.9rem"}} />} {...props} />
))(({theme}) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  borderBottom: "1px solid #ddd", 
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
  padding: "12px", 
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: "#f0f0f0", 
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

export default AccordionSummary;
