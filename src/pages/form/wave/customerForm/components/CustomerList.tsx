import {ObjOfCss} from "@/app-types";
import {Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {Col} from "react-bootstrap";
import {FormConstants} from "../../waveConstant/FormConstants";

type Props = {
  costumer: any;
};

const CustomerList = (props: Props) => {
  return (
    <Col xs={12} md={6} lg={6} className="mb-3" style={styles.colContainer}>
      <Paper elevation={3} style={styles.paperContainer}>
        <Typography variant="h5" gutterBottom>
          Customer Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>{FormConstants.FormConfig.fields.name.label + ":"}</strong> {props.costumer.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>{FormConstants.FormConfig.fields.email.label + ":"}</strong> {props.costumer.email}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>{FormConstants.FormConfig.fields.channel.label + ":"}</strong> {props.costumer.channel}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>{FormConstants.FormConfig.fields.address.label + ":"}</strong> {props.costumer.address}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>{FormConstants.FormConfig.fields.postalCode.label + ":"}</strong> {props.costumer.postal}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>{FormConstants.FormConfig.fields.city.label + ":"}</strong> {props.costumer.city}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>{FormConstants.FormConfig.fields.province.label + ":"}</strong> {props.costumer.province}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1">
              <strong>Country:</strong> {props.costumer.country}
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
    maxWidth: 600,
    flex: "1 1 100%"
  },
  paperContainer: {
    padding: 20,
    margin: 20
  }
};
