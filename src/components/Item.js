import React, { useState } from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from './Yup';
const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    DOB: "",
    mobile: "",
    address: ""
};
const Item = () => {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values, "hlo");
            const valObj = { ...values, id: Date.now() }

            const newData = [...data, valObj]
            setFilterData(newData)
            setData(newData);
            action.resetForm();
        }
    });
    const handleDelete = (id) => {
        const newInfo = filterData.filter((person) => {
            return person.id !== id
        });
        setData(newInfo);
    }
    return (
        <>
            <div className="container-outer">
                <form className="container" onSubmit={handleSubmit}>
                    <h2 className="register">Register Here</h2>
                    <div className="First-Name">
                        <label>First Name</label>
                        <input type="text" autoComplete='off'
                            value={values.firstname} onChange={handleChange}
                            onBlur={handleBlur} placeholder="Firstname" name="firstname" id="firstName"></input>
                    </div >
                    {errors.firstname && touched.firstname ? (
                        <p className='form-error'>{errors.firstname}</p>
                    ) : null}
                    <div className="First-Name">
                        <label>Last Name</label>
                        <input type="text" autoComplete='off'
                            value={values.lastname} onChange={handleChange}
                            onBlur={handleBlur} placeholder="Lastname" name="lastname" id="lastName"></input>
                    </div>
                    {errors.lastname && touched.lastname ? (
                        <p className='form-error'>{errors.lastname}</p>
                    ) : null}
                    <div className="First-Name">
                        <label>Emai ID</label>
                        <input type="email" autoComplete='off'
                            value={values.email} onChange={handleChange}
                            onBlur={handleBlur} placeholder="Email ID" name="email" id="email"></input>
                    </div>
                    {errors.email && touched.email ? (
                        <p className='form-error'>{errors.email}</p>
                    ) : null}
                    <div className="First-Name">
                        <label>Date of birth</label>
                        <input type="date" autoComplete='off'
                            value={values.DOB} onChange={handleChange}
                            onBlur={handleBlur} className="dob-input" name="DOB" id="DOB"></input>
                    </div>
                    {errors.DOB && touched.DOB ? (
                        <p className='form-error'>{errors.DOB}</p>
                    ) : null}
                    <div className="First-Name" >
                        <label>Mobile No.</label>
                        <input type="text" autoComplete='off'
                            value={values.mobile} onChange={handleChange}
                            onBlur={handleBlur} placeholder="Mobile No." name="mobile" id="mobile"></input>
                    </div>
                    {errors.mobile && touched.mobile ? (
                        <p className='form-error'>{errors.mobile}</p>
                    ) : null}
                    <div className="address" >
                        <label>Address</label>
                        <textarea type="text" rows="8" cols="45" autoComplete='off'
                            value={values.address} onChange={handleChange}
                            onBlur={handleBlur} placeholder="Address" name="address" id="address"></textarea>
                    </div>
                    {errors.address && touched.address ? (
                        <p className='form-error'>{errors.address}</p>
                    ) : null}
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <div>
                    {
                        data.map((el) => {
                            return (

                                <div className='data-main-outer'>
                                    <div className='data-main'>

                                        <div className='label-flex'>
                                            <label>FULLNAME:</label>
                                            <p className='profile-info' id="name-capitalize">{el.firstname} {el.lastname}</p>
                                        </div>
                                        <div className='label-flex'>
                                            <label>EMAIL:</label>
                                            <p className='profile-info'>{el.email}</p>
                                        </div>
                                        <div className='label-flex'>
                                            <label>DATE OF BIRTH:</label>
                                            <p className='profile-info'>{el.DOB}</p>
                                        </div>
                                        <div className='label-flex'>
                                            <label>MOBILE NO:</label>
                                            <p className='profile-info'>{el.mobile}</p>
                                        </div>
                                        <div className='label-flex'>
                                            <label>ADDRESS:</label>
                                            <p className='profile-info'>{el.address}</p>
                                        </div>
                                        <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Item
