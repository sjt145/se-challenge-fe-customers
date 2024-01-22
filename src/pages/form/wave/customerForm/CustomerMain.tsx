import React, {useState, useEffect} from "react";
import {styled} from "@mui/material/styles";
import {Image, Loader} from "@/shared/components";
import {Col, Row, Container} from "react-bootstrap";
import Typography from "@mui/material/Typography";
import {ObjOfCss} from "@/app-types";
import {FormConstants} from "../waveConstant/FormConstants";
import {FormValidation, Logger} from "@/utils";
import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import Api from "@/http/api";
import Accordion from "@/shared/components/core/Accordion/Accordion";
import AccordionSummary from "@/shared/components/core/Accordion/AccordionSummary";
import AccordionDetails from "@/shared/components/core/Accordion/AccordionDetails";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface Customer {
  id: number;
  name: string;
  email: string;
  channel: string;
  address: string;
  postal: string;
  city: string;
  province: string;
  country: string;
}

const CustomerMain = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    channel: "",
    address: "",
    postalCode: "",
    city: "",
    province: "",
    country: ""
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: undefined,
    email: undefined,
    channel: undefined,
    address: undefined,
    postalCode: undefined,
    city: undefined,
    province: undefined
  });

  const handleAccordianChange = (panel: string, customer: Customer) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
    setSelectedCustomer(newExpanded ? customer : null);
  };

  const handleInputChange = async (event: any) => {
    const {name, value, files} = event.target;

    const newFieldErrors = {
      ...fieldErrors
    };

    const newState = {
      ...formState,
      [name]: value
    };

    switch (name) {
      case FormConstants.FormConfig.fields.name.fieldName:
        break;
      case FormConstants.FormConfig.fields.email.fieldName:
      case FormConstants.FormConfig.fields.channel.fieldName:
      case FormConstants.FormConfig.fields.address.fieldName:
      case FormConstants.FormConfig.fields.postalCode.fieldName:
      case FormConstants.FormConfig.fields.city.fieldName:
      case FormConstants.FormConfig.fields.province.fieldName:
        const newInputValues = FormValidation.replaceValueForInputFields(value);
        newState[FormConstants.FormConfig.fields[name].fieldName] = newInputValues;
        break;
    }

    setFormState(newState);
    setFieldErrors(newFieldErrors);
  };

  const validateFormFields = () => {
    const fields = Object.values(FormConstants.FormConfig.fields);

    const newFieldErrors = {
      ...fieldErrors
    };

    let isAnyFieldInvalid = false;

    for (let field of fields) {
      const fieldName = field.fieldName;
      switch (fieldName) {
        case FormConstants.FormConfig.fields.name.fieldName:
        case FormConstants.FormConfig.fields.email.fieldName:
        case FormConstants.FormConfig.fields.province.fieldName:
        case FormConstants.FormConfig.fields.city.fieldName:
          try {
            FormValidation.trimSpacesAndValidateInputFields(formState[fieldName], fieldName);
            newFieldErrors[fieldName] = "";
          } catch (error: any) {
            newFieldErrors[fieldName] = error.message;
            isAnyFieldInvalid = true;
          }
          break;
        case FormConstants.FormConfig.fields.postalCode.fieldName:
          const postalCodeIsValid = FormValidation.checkValidPostalCode(formState[fieldName]);
          if (!postalCodeIsValid) {
            newFieldErrors[FormConstants.FormConfig.fields[fieldName].fieldName] = `${FormConstants.FormConfig.fields[fieldName].label} is invalid`;
            isAnyFieldInvalid = true;
          } else {
            newFieldErrors[FormConstants.FormConfig.fields[fieldName].fieldName] = "";
          }
          break;
      }
    }

    if (isAnyFieldInvalid) {
      setFieldErrors(newFieldErrors);
    }

    return isAnyFieldInvalid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isFormFieldValidationFailed = validateFormFields();
    if (isFormFieldValidationFailed) {
      return;
    }
    setFieldErrors({
      name: undefined,
      email: undefined,
      channel: undefined,
      address: undefined,
      postalCode: undefined,
      city: undefined,
      province: undefined
    });
    Logger.info("Customer Data Log:", formState);
    alert("  Here is a gentle confirmation that your action was successful.");
  };

  const fetchCustomerData = async () => {
    setIsLoading(true);
    try {
      const response = await Api.Form.getCustomerData();
      setIsLoading(false);
      setCustomers(response?.data.customers);
    } catch (error) {
      Logger.error("Error fetching data:", error);
      alert("Unexpected error occurred. Try again!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  useEffect(() => {
    if (selectedCustomer) {
      setFormState({
        name: selectedCustomer.name,
        email: selectedCustomer.email,
        channel: selectedCustomer.channel,
        address: selectedCustomer.address,
        postalCode: selectedCustomer.postal,
        city: selectedCustomer.city,
        province: selectedCustomer.province,
        country: selectedCustomer.country
      });
    }
  }, [selectedCustomer]);

  return (
    <div style={styles.container}>
      {isLoading ? <Loader /> : null}
      <Row style={styles.formHeader}>
        <Col sm={12} lg={3} md={3}>
          <Image src={FormConstants.styles.logoUrl} style={styles.logo} />
        </Col>
      </Row>
      <hr style={styles.formDivider} />
      <ul style={styles.listContainer}>
        {customers.map(customer => (
          <Accordion key={customer.id} expanded={expanded === `panel${customer.id}`} onChange={handleAccordianChange(`panel${customer.id}`, customer)}>
            <AccordionSummary aria-controls={`panel${customer.id}d-content`} id={`panel${customer.id}d-header`}>
              <AccountCircleIcon />
              <Typography sx={{ml: 1}}>{customer.name}</Typography>
            </AccordionSummary>
            <AccordionDetails style={styles.formContainer}>
              <Container style={styles.mainContainerStyle}>
                <CustomerList costumer={customer} />
                <CustomerForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} formState={formState} fieldErrors={fieldErrors} />
              </Container>
            </AccordionDetails>
          </Accordion>
        ))}
      </ul>
    </div>
  );
};

export default CustomerMain;
const styles: ObjOfCss = {
  container: {
    background: "#f3f3fe",
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px"
  },
  mainContainerStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  listContainer: {
    width: "80vw",
    padding: 0
  },
  formContainer: {
    border: "1px solid #EEEEEE",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    background: "linear-gradient(to bottom, #ffffff, #e0e0e0)"
  },
  logo: {
    width: "100%",
    height: "auto"
  },
  formDivider: {
    border: "1px solid #d9d9e1"
  }
};
