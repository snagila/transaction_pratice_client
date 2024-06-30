import { Button, Form } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../axios/userAxios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../redux/user/userActions";

const LoginForm = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;

  // Handle on Change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // navigating
  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();

  // Form Submit
  // const handleOnSumbit = async (e) => {
  //   e.preventDefault();

  //   // const result = await loginUser(formData);
  //   const pending = loginUser(formData);

  //   toast.promise(pending, { pending: "Please Wait" });
  //   const { status, message } = await pending;
  //   console.log(pending);
  //   if (status === "error") {
  //     toast.error(message);
  //     return;
  //   }

  //   toast.success(message);
  //   navigate("/transactions");
  // };

  // Form Submit
  const handleOnSumbit = async (e) => {
    e.preventDefault();
    dispatch(loginUserAction(formData));
  };

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/transactions");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Form onSubmit={handleOnSumbit}>
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "text",
          placeholder: "Enter your Email",
          value: email,
          name: "email",
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

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default LoginForm;
