import {styled} from "@mui/material/styles";
import React from "react";
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowDownwardIcon sx={{fontSize: "0.9rem"}} />} {...props} />
))(({theme}) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

export default AccordionSummary;
