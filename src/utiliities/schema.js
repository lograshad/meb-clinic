import * as yup from "yup";

export const BookAppointmentSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup.string().required("Age is required"),
    occupation: yup.string().required("Occupation is required"),
    email: yup.string().email().required("Invalid Email"),
    phoneNumber: yup.number().required("Phone number is required"),
  });