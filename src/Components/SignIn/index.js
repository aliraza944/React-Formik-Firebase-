import React from "react";

import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { useFormik } from "formik";
import { auth } from "../firebase";

import * as Yup from "yup";

const SignIn = (props) => {
  const handleToken = (token, e) => {
    e.preventDefault();
    console.log(token);
  };
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid Email").required("Required"),
      password: Yup.string()
        .required("Password must be provided")
        .min(8, "Password is too short - should be 8 chars minimum."),
    }),
    onSubmit: async (values) => {
      console.log(values);

      await auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },
  });

  return (
    <div>
      <h1>Sign In</h1>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="email"> Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <Alert>{formik.errors.email}</Alert>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="password">Enter your password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <Alert color="danger">{formik.errors.password}</Alert>
          )}
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignIn;
