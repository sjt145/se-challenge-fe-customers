export const FormConstants = {
  styles: {
    bgColor: "#FFFFF0",
    logoUrl: "https://waveaccounting.github.io/se-challenge-fe-customers/assets/img/wave.svg",
    inputLabelColor: "#025393",
    inputBorderColor: "#008080",
    addMemberBtnBgColor: "#008080",
    submitBtnColor: "#843179"
  },
  FILE_SIZE_IN_MB: 4,
  allowedImageFileExtensions: ["jpg", "jpeg", "png", "bmp", "heic", "avif"],
  FormConfig: {
    formId: "230967556705062",
    fields: {
      name: {
        customOrder: 1,
        fieldName: "name",
        questionText: "Name",
        label: "Name"
      },
      email: {
        customOrder: 2,
        fieldName: "email",
        questionText: "Email",
        label: "Email"
      },
      channel: {
        customOrder: 3,
        fieldName: "channel",
        questionText: "Select Channel",
        label: "Channel",
        options: ["website", "email", "phone", "word-of-mouth", "other", "unknown"]
      },
      address: {
        customOrder: 4,
        fieldName: "address",
        questionText: "Address",
        label: "Address"
      },
      postalCode: {
        customOrder: 5,
        fieldName: "postalCode",
        questionText: "Postal Code",
        label: "Postal Code"
      },
      city: {
        customOrder: 6,
        fieldName: "city",
        questionText: "City",
        label: "City"
      },
      province: {
        customOrder: 7,
        fieldName: "province",
        questionText: "Province",
        label: "Province",
        options: ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"]
      }
    }
  }
};
