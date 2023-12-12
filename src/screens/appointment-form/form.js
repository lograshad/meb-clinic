import { useFormik } from "formik";
import { useEffect, useState } from "react";
import InputField from "../../components/inputField/input";
import Navbar from "../../components/navbar/navbar";
import { BookAppointmentSchema } from "../../utiliities/schema";
import "./form.css";
import ReactWhatsapp from 'react-whatsapp';
import Footer from "../../components/footer/footer";

const Form = () => {
    const [nameW, setName] = useState('');
    const [ageW, setAge] = useState('');
    const [occupationW, setOccupation] = useState('');
    const [emailW, setEmail] = useState('');
    const [phoneNumberW, setPhoneNumber] = useState('');
    const initialValues = {
        name: '',
        age: '',
        occupation: '',
        email: '',
        phoneNumber: '',
    }
    const submitToRepresentative = (data) => {
        setName(data?.name)
        setAge(data?.age)
        setOccupation(data?.occupation)
        setEmail(data?.email)
        setPhoneNumber(data?.phoneNumber)
    }
    const { values, errors, touched, handleChange, handleSubmit, isValid } = useFormik({
        initialValues,
        validationSchema: BookAppointmentSchema,
        onSubmit: (data) => submitToRepresentative(data),
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
                    <div type="submit" disabled={!isValid} className="form-btn">
                        <ReactWhatsapp number="+2349063734237" message={`
            Hello, My name is ${nameW}
I would like to book an appointment
Age - ${ageW} 
Occupation - ${occupationW}
Email - ${emailW}
Phone Number - ${phoneNumberW}
`}>Book an Appointment</ReactWhatsapp>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Form;

// service_kw3n0rj