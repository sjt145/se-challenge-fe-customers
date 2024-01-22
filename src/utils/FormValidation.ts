import {FormConstants as waveFormConstants} from "@/pages/form/wave/waveConstant/FormConstants";

export class FormValidation {
  static replaceInputValueForTypeTel(value) {
    const pattern = /\D/g;
    const newValue = value.replace(pattern, "");
    return newValue;
  }

  static replaceValueForInputFields(value) {
    const pattern = /\s/g;
    const newValue = value.replace(pattern, "");
    return newValue;
  }

  static restrictValueUptoTwoNumbers(value) {
    const pattern = /^\d{0,2}$/;
    const newValue = pattern.test(value) ? true : false;
    return newValue;
  }

  static checkFieldIsNotEmpty(value) {
    if (value === "") {
      return false;
    }
    return true;
  }

  static trimValue(value) {
    return value?.trim();
  }

  static trimSpacesAndValidateInputFields(value, fieldName) {
    const trimValue = FormValidation.trimValue(value);
    const fieldEmpty = FormValidation.checkFieldIsNotEmpty(trimValue);

    switch (fieldName) {
      case waveFormConstants.FormConfig.fields.name.fieldName:
        if (!fieldEmpty) {
          throw new Error(`Enter value`);
        }
        break;
      case waveFormConstants.FormConfig.fields.email.fieldName:
        const validEmail = FormValidation.valdiateEmail(trimValue);
        if (!validEmail) {
          throw new Error(`Enter valid ${waveFormConstants.FormConfig.fields.email.label}`);
        }
        break;
    }
    return true;
  }

  static validatePhoneNumberLength(value) {
    const pattern = /^\d{10,12}$/;
    const trimValue = value.trim();
    if (!pattern.test(trimValue)) {
      return false;
    }
    return true;
  }

  static valdiateEmail(value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimValue = value.trim();
    if (!pattern.test(trimValue)) {
      return false;
    }
    return true;
  }

  static checkValidPostalCode(value) {
    const pattern = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
    const trimValue = value.trim();
    if (!pattern.test(trimValue)) {
      return false;
    }
    return true;
  }
}
