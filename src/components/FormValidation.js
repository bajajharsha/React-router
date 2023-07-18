import React, { useState, useEffect } from 'react'
import "./Form.css"

function FormValidation() {
    const intialValues = { name: "", email: "", mobile: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(handleValidate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const handleValidate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required"
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required";
        } else if (values.mobile.length < 10) {
            errors.mobile = "Mobile number must not be less than 10 characters";
        } else if (values.mobile.length > 10) {
            errors.mobile = "Mobile Number cannot exceed more than 10 characters";
        }

        return errors;
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">ThankYou for Contacting Us!!</div>
            ) : (
                <pre></pre>
            )}
            {/* <pre >{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}

                    />
                </div>
                <p>{formErrors.name}</p>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}

                    />
                </div>
                <p>{formErrors.email}</p>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formValues.mobile}
                        onChange={handleChange}

                    />
                </div>
                <p>{formErrors.mobile}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormValidation;
