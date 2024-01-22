import {ObjOfCss} from "@/app-types";
import React from "react";
import {Col, Row} from "react-bootstrap";
import {FormConstants} from "../../waveConstant/FormConstants";
import {DropdownField, Error, InputEmail, InputText, QuestionText} from "@/shared/components";

type Props = {
  handleInputChange: (event: any) => void;
  handleSubmit: (event: any) => void;
  formState: any;
  fieldErrors: any;
};

export const CustomerForm = (props: Props) => {
  return (
    <Col xs={12} md={6} lg={6} className="mb-3" style={styles.colContainer}>
      <form className="form-container" onSubmit={props.handleSubmit}>
        <Row className="mb-3" style={styles.formBody}>
          <Col sm={12} md={6} lg={6} style={styles.inputColStyle}>
            <QuestionText name={FormConstants.FormConfig.fields.name.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.name.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.name}
              required={true}
            />
            {props.fieldErrors.name ? <Error message={props.fieldErrors.name} /> : null}
          </Col>
          <Col sm={12} md={6} lg={6} style={styles.inputColStyle}>
            <QuestionText name={FormConstants.FormConfig.fields.email.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
            <InputEmail
              name={FormConstants.FormConfig.fields.email.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.email}
              required={true}
            />
            {props.fieldErrors.email ? <Error message={props.fieldErrors.email} /> : null}
          </Col>
          <Col sm={12} md={6} lg={6} style={styles.inputColStyle}>
            <QuestionText name={FormConstants.FormConfig.fields.channel.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
            <DropdownField
              name={FormConstants.FormConfig.fields.channel.fieldName}
              defaultValue={props.formState.channel}
              options={FormConstants.FormConfig.fields.channel.options}
              onChange={props.handleInputChange}
              style={styles.dropdownStyles}
            />
            {props.fieldErrors.channel ? <Error message={props.fieldErrors.channel} /> : null}
          </Col>
          <Col sm={12} md={12} lg={12} style={styles.inputColStyle}>
            <QuestionText name={FormConstants.FormConfig.fields.address.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.address.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.address}
            />
            {props.fieldErrors?.address ? <Error message={props.fieldErrors.address} /> : null}
          </Col>
          <Col sm={12} md={6} lg={6} style={styles.inputColStyle}>
            <QuestionText name={FormConstants.FormConfig.fields.postalCode.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.postalCode.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.postalCode}
            />
            {props.fieldErrors?.postalCode ? <Error message={props.fieldErrors.postalCode} /> : null}
          </Col>
          <Col sm={12} md={6} lg={6} style={styles.inputColStyle}>
            <QuestionText name={FormConstants.FormConfig.fields.city.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.city.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.city}
            />
            {props.fieldErrors?.city ? <Error message={props.fieldErrors.city} /> : null}
          </Col>
          <Col sm={12} md={6} lg={6} style={styles.inputColStyle}>
            <QuestionText name={FormConstants.FormConfig.fields.province.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
            <DropdownField
              name={FormConstants.FormConfig.fields.province.fieldName}
              defaultValue={props.formState.province}
              options={FormConstants.FormConfig.fields.province.options}
              onChange={props.handleInputChange}
              style={styles.dropdownStyles}
            />
            {props.fieldErrors?.province ? <Error message={props.fieldErrors.province} /> : null}
          </Col>
        </Row>
        <button type="submit" style={styles.submitBtn}>
          Submit
        </button>
      </form>
    </Col>
  );
};
export default CustomerForm;

const styles: ObjOfCss = {
  formHeader: {
    justifyContent: "center",
    margin: "3% 3% 0% 3%"
  },
  formHeaderCardContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%"
  },
  colContainer: {
    maxWidth: 600,
    flex: "1 1 100%"
  },
  inputColStyle: {
    marginBottom: "8px"
  },
  formHeaderText: {
    fontSize: "30px"
  },
  formHeaderSubText: {
    fontSize: "16px",
    textAlign: "center",
    margin: "2%"
  },
  formBody: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2%"
  },
  inputLabel: {
    color: FormConstants.styles.inputLabelColor
  },
  inputStyles: {
    border: "1px solid " + FormConstants.styles.inputBorderColor,
    fontSize: "1em",
    padding: "1.5%",
    width: "95%"
  },
  dropdownStyles: {
    border: "1px solid " + FormConstants.styles.inputBorderColor,
    fontSize: "1em",
    padding: "1.5%",
    width: "100%",
    cursor: "pointer"
  },
  submitBtn: {
    cursor: "pointer",
    border: "1px solid #d9d9e1",
    backgroundColor: FormConstants.styles.submitBtnColor,
    color: "#FFFFFF",
    padding: "12px 24px",
    borderRadius: "6px",
    width: "auto",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    outline: "none"
  }
};
