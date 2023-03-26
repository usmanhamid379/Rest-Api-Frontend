import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (event) => {
    // setFormData((preState) => ({
    //   ...preState,
    //   [event.target.name]: event.target.value,
    // }));
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an Account</p>
      </section>
      <section className="form">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              name="name"
              id="name"
              value={name}
              type="text"
              placeholder="Please Enter Your Name"
              className="form-control"
              onChange={onChange}
            />
          </div>
          {/*  */}
          <div className="form-group">
            <input
              name="email"
              id="email"
              value={email}
              type="email"
              placeholder="Please Enter Your Email"
              className="form-control"
              onChange={onChange}
            />
          </div>
          {/*  */}
          <div className="form-group">
            <input
              name="password"
              id="password"
              value={password}
              type="password"
              placeholder="Please Enter Your Password"
              className="form-control"
              onChange={onChange}
            />
          </div>
          {/*  */}
          <div className="form-group">
            <input
              name="password2"
              id="password2"
              value={password2}
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              onChange={onChange}
            />
          </div>
          {/*  */}
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
