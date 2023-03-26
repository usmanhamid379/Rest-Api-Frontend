import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (event) => {
    setFormData((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
    // setFormData({
    //   ...formData,
    //   [event.target.name]: event.target.value,
    // });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Enter Your Credentials</p>
      </section>
      <section className="form">
        <form onSubmit={(e) => onSubmit(e)}>
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
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
