export const inputsData = [
  {
    labelInnerText: "Full name:",
    inputId: "name",
    errorMessage: "Please check if you entered your first and last name.",
    emptyErrorMessage: "This field must be filled.",
  },
  {
    labelInnerText: "Date of birth:",
    inputId: "dateOfBirth",
    errorMessage: "The date must be entered in DD.MM.YYYY format.",
    emptyErrorMessage: "This field must be filled.",
  },
  {
    labelInnerText: "Email:",
    inputId: "email",
    errorMessage:
      "Email should contain such parts as @, ru/com. Check your email form.",
    emptyErrorMessage: "This field must be filled.",
  },
  {
    labelInnerText: "Password:",
    inputId: "password",
    errorMessage: "The password must be at least 6 characters long.",
    emptyErrorMessage: "This field must be filled.",
  },
];

export const inputsIds = {
  nameId: "name",
  dateOfBirthId: "dateOfBirth",
  emailId: "email",
  passwordId: "password",
};
