import { useFormik } from "formik";
import { useEffect, useState } from "react";
import InputField from "../../components/inputField/input";
import Navbar from "../../components/navbar/navbar";
import { BookAppointmentSchema } from "../../utiliities/schema";
import "./form.css";
import ReactWhatsapp from 'react-whatsapp';
import Footer from "../../components/footer/footer";

const Form = () => {
    const initialValues = {
        name: '',
        age: '',
        occupation: '',
        email: '',
        phoneNumber: '',
    }
    const { values, errors, touched, handleChange, handleSubmit, isValid } = useFormik({
        initialValues,
        validationSchema: BookAppointmentSchema,
        onSubmit: (values) => {
            // setData(data);
            // submitToRepresentative(data)
        },
        enableReinitialize: true,
    });
    return (
        <div className="form-container">
            <Navbar />
            <div className="form-wrapper">
                <h3>Book an appointment</h3>
                <p>
                    Kindly call this number <a href="tel:+2348033235795" className="tel">+234 803 323 5795</a> to book an appointment
                    or Fill the Form below to be directed to our Representative.
                </p>
                <form action="submit" onSubmit={handleSubmit}>
                    <InputField
                        label="Name"
                        type="text"
                        id="name"
                        value={values.name}
                        onChange={handleChange("name")}
                        errorMsg={touched.name ? errors.name : undefined}
                        placeholder="Ibrahim Ngozi"
                    />
                    <InputField
                        label="Age"
                        type="text"
                        id="age"
                        value={values.age}
                        onChange={handleChange("age")}
                        errorMsg={touched.age ? errors.age : undefined}
                        placeholder="18 years"
                    />
                    <InputField
                        label="Occupation"
                        type="text"
                        id="occupation"
                        value={values.occupation}
                        onChange={handleChange("occupation")}
                        errorMsg={touched.occupation ? errors.occupation : undefined}
                        placeholder="Banker"
                    />
                    <InputField
                        label="Email Address"
                        type="text"
                        id="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        errorMsg={touched.email ? errors.email : undefined}
                        placeholder="Ibrozi@yahoo.com"
                    />
                    <InputField
                        label="Phone Number"
                        type="number"
                        id="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange("phoneNumber")}
                        errorMsg={touched.phoneNumber ? errors.phoneNumber : undefined}
                        placeholder="09045689321"
                    />
                    {/* <div type="submit" disabled={!isValid} className="form-btn"> */}
                    <ReactWhatsapp number="+2348033235795" type="submit"  disabled={!isValid} message={`
            Hello, My name is ${values?.name}
I would like to book an appointment
Age - ${values?.age} 
Occupation - ${values?.occupation}
Email - ${values?.email}
Phone Number - ${values?.phoneNumber}
`}>Book an appointment</ReactWhatsapp>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Form;

// service_kw3n0rj