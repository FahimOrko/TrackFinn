import * as yup from "yup";

export const basicSchema = yup.object().shape({
  trainNum: yup
    .number()
    .positive()
    .integer()
    .required("Enter the corrent train number"),

  date: yup.date().nullable().required("Please select deperture date"),
  type: yup
    .string()
    .oneOf(["IC", "S", "PYO", "HDM", "H", "other"], "Invalid train type")
    .notRequired(),
});
