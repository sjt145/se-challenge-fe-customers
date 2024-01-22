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
        <Row style={styles.formBody}>
          <Row className="mb-3">
            <Col sm={12} md={6} lg={6}>
              <Row>
                <QuestionText name={FormConstants.FormConfig.fields.name.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
                <InputText
                  name={FormConstants.FormConfig.fields.name.fieldName}
                  onChange={props.handleInputChange}
                  inputStyle={styles.inputStyles}
                  value={props.formState.name}
                  required={true}
                />
                {props.fieldErrors.name ? <Error message={props.fieldErrors.name} /> : null}
              </Row>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Row>
                <QuestionText name={FormConstants.FormConfig.fields.email.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
                <InputEmail
                  name={FormConstants.FormConfig.fields.email.fieldName}
                  onChange={props.handleInputChange}
                  inputStyle={styles.inputStyles}
                  value={props.formState.email}
                  required={true}
                />
                {props.fieldErrors.email ? <Error message={props.fieldErrors.email} /> : null}
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12} md={6} lg={6}>
              <Row>
                <QuestionText name={FormConstants.FormConfig.fields.channel.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
                <DropdownField
                  name={FormConstants.FormConfig.fields.channel.fieldName}
                  defaultValue={props.formState.channel}
                  options={FormConstants.FormConfig.fields.channel.options}
                  onChange={props.handleInputChange}
                  style={styles.dropdownStyles}
                />
              </Row>
              {props.fieldErrors.channel ? <Error message={props.fieldErrors.channel} /> : null}
            </Col>
            <Col sm={12} md={12} lg={12}>
              <Row>
                <QuestionText name={FormConstants.FormConfig.fields.address.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
                <InputText
                  name={FormConstants.FormConfig.fields.address.fieldName}
                  onChange={props.handleInputChange}
                  inputStyle={styles.inputStyles}
                  value={props.formState.address}
                />
                {props.fieldErrors?.address ? <Error message={props.fieldErrors.address} /> : null}
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12} md={6} lg={6}>
              <Row>
                <QuestionText name={FormConstants.FormConfig.fields.postalCode.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
                <InputText
                  name={FormConstants.FormConfig.fields.postalCode.fieldName}
                  onChange={props.handleInputChange}
                  inputStyle={styles.inputStyles}
                  value={props.formState.postalCode}
                />
                {props.fieldErrors?.postalCode ? <Error message={props.fieldErrors.postalCode} /> : null}
              </Row>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Row>
                <QuestionText name={FormConstants.FormConfig.fields.city.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
                <InputText
                  name={FormConstants.FormConfig.fields.city.fieldName}
                  onChange={props.handleInputChange}
                  inputStyle={styles.inputStyles}
                  value={props.formState.city}
                />
                {props.fieldErrors?.city ? <Error message={props.fieldErrors.city} /> : null}
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12} md={6} lg={6}>
              <Row>
                <QuestionText name={FormConstants.FormConfig.fields.province.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
                <DropdownField
                  name={FormConstants.FormConfig.fields.province.fieldName}
                  defaultValue={props.formState.province}
                  options={FormConstants.FormConfig.fields.province.options}
                  onChange={props.handleInputChange}
                  style={styles.dropdownStyles}
                />
                {props.fieldErrors?.province ? <Error message={props.fieldErrors.province} /> : null}
              </Row>
            </Col>
          </Row>
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
  card: {
    margin: "5%",
    padding: "3%",
    height: "140px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    border: "2px dashed lightgray",
    textAlign: "center"
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
    padding: "6%",
    justifyContent: "center",
    alignItems: "center"
  },
  inputLabel: {
    color: FormConstants.styles.inputLabelColor
  },
  inputStyles: {
    border: "1px solid " + FormConstants.styles.inputBorderColor,
    fontSize: "1em",
    borderRadius: "4px",
    padding: "1.5%",
    width: "100%"
  },
  dropdownStyles: {
    border: "1px solid " + FormConstants.styles.inputBorderColor,
    fontSize: "1em",
    borderRadius: "4px",
    padding: "1.5%",
    width: "100%",
    cursor: "pointer"
  },
  submitBtn: {
    cursor: "pointer",
    border: "1px solid #d9d9e1",
    backgroundColor: FormConstants.styles.submitBtnColor,
    color: "#FFFFFF",
    padding: "8px 40px",
    borderRadius: "4px",
    width: "auto"
  }
};
