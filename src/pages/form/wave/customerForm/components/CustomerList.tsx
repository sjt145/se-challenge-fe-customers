import {ObjOfCss} from "@/app-types";
import {Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {Col} from "react-bootstrap";
import {FormConstants} from "../../waveConstant/FormConstants";
import {QuestionText} from "@/shared/components";

type Props = {
  costumer: any;
};

const CustomerList = (props: Props) => {
  return (
    <Col xs={12} md={6} lg={6} className="mb-3" style={styles.colContainer}>
      <Paper elevation={5} style={styles.paperContainer}>
        <Typography variant="h6" gutterBottom style={styles.lableStyle}>
          Customer Details
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={FormConstants.FormConfig.fields.name.label + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />
              <strong>{props.costumer.name}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={FormConstants.FormConfig.fields.email.label + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />{" "}
              <strong>{props.costumer.email}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={FormConstants.FormConfig.fields.channel.label + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />{" "}
              <strong> {props.costumer.channel}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={FormConstants.FormConfig.fields.address.label + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />{" "}
              <strong> {props.costumer.address}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={FormConstants.FormConfig.fields.postalCode.label + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />{" "}
              <strong>{props.costumer.postal}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={FormConstants.FormConfig.fields.city.label + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />{" "}
              <strong> {props.costumer.city}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={FormConstants.FormConfig.fields.province.label + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />{" "}
              <strong> {props.costumer.province}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <QuestionText name={"Country" + ":"} isRequired={false} sx={{inputLabel: styles.lableStyle}} />
              <strong>{props.costumer.country}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Col>
  );
};
export default CustomerList;

const styles: ObjOfCss = {
  colContainer: {
    maxWidth: 500,
    flex: "1 1 100%"
  },
  paperContainer: {
    padding: 20,
    margin: 20
  },
  lableStyle: {
    color: FormConstants.styles.inputLabelColor
  }
};
