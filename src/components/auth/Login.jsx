import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Input from "./Input.jsx";
import Label from "./Label.jsx";
import Button from "./Button.jsx";
import * as Yup from "yup";
import LoginSidebar from "./LoginSidebar.jsx";
import SendOtpService from "../../services/SendOtpService.js";

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: 0,
  });

  const [clicked, setClicked] = useState(false);

  const [errors, setErrors] = useState({});

  const validation = Yup.object({
    mobile: Yup.string()
      .matches(
        /^(?:(?:\\+?|00)(98)|(0))?((?:90|91|92|93|99)[0-9]{8})$/,
        "شماره موبایل معتبر نیست",
      )
      .required("وارد کردن شماره موبایل الزامی است"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);

    validation
      .validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({});
        let result = await SendOtpService(formData.mobile);
        if (result) console.log("ok");
        setClicked(false);
      })
      .catch((err) => {
        const newErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(newErrors);
        setClicked(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div
          className={
            "w-full max-w-[900px] h-full max-h-[500px] bg-white rounded-[15px] border shadow-lg flex justify-center overflow-hidden"
          }
        >
          <LoginSidebar />
          <div className="basis-1/2 flex flex-col justify-center items-center">
            <img
              src="/images/login.jpg"
              alt="login"
              loading={"lazy"}
              className={"w-[200px] -mt-10 hue-rotate-[215deg]"}
            />
            <Form onSubmit={handleSubmit} className={"w-full max-w-[320px]"}>
              <Label form={"number"} required={true}>
                شماره موبایل:
                <Input
                  type={"number"}
                  name={"mobile"}
                  onInput={handleChange}
                  placeholder={"شماره موبایل"}
                  autoFocus={true}
                  className={"mt-1 tracking-wide"}
                />
              </Label>
              <Button type={"submit"}>ارسال کد</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
