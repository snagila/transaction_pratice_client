import { Button, Form } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { createUser } from "../axios/userAxios";
const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, password, confirmPassword } = formData;
  // Handle on Change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Submit
  const handleOnSumbit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Logic for Signup
    // call axios to make api result
    const result = await createUser(formData);
    setFormData(initialFormData);
    // assume error
    if (result.status === "error") {
      toast.error(result.message);
      return;
    }

    // success
    toast.success(result.message);
  };

  return (
    <Form onSubmit={handleOnSumbit}>
      <CustomInput
        label="Name"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "text",
          placeholder: "Enter your Name",
          value: name,
          name: "name",
          required: true,
        }}
      />
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          placeholder: "Enter your Email",
          value: email,
          required: true,
        }}
      />
      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          placeholder: "Enter your Password",
          value: password,
          required: true,
        }}
      />
      <CustomInput
        label="Confirm Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "confirmPassword",
          placeholder: "Confirm your Password",
          value: confirmPassword,
          required: true,
        }}
      />
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};
export default SignupForm;
