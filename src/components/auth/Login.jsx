import { useState } from "react";
import Form from "./Form.jsx";
import Input from "./Input.jsx";
import Label from "./Label.jsx";
import Button from "./Button.jsx";
import * as Yup from "yup";
import LoginSidebar from "./LoginSidebar.jsx";
import SendOtpService from "../../services/SendOtpService.js";
import { toast } from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Login = ({ callback }) => {
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
        if (result) {
          toast.success("کدورود باموفقیت ارسال شد.");
          callback(formData.mobile);
        }
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
            "w-full max-w-[900px] h-full sm:max-h-[500px] bg-white sm:rounded-[15px] sm:border shadow-lg flex justify-center overflow-hidden"
          }
        >
          <LoginSidebar />
          <div className="basis-full sm:basis-1/2 flex flex-col justify-center items-center">
            <img
              src="/images/login.jpg"
              alt="login"
              loading={"lazy"}
              className={
                "hidden sm:inline-block w-[200px] -mt-10 hue-rotate-[215deg]"
              }
            />
            <img
              src="/images/favicon.svg"
              alt="login"
              loading={"lazy"}
              className={"w-[120px] -mt-10 sm:hidden"}
            />
            <h1
              className={"sm:hidden font-bold text-[20px] mt-2 text-[#FF5C00]"}
            >
              ورود به سلام
            </h1>
            <Form onSubmit={handleSubmit} className={"w-full max-w-[320px]"}>
              <Label form={"number"} required={true} error={errors.mobile}>
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
              <Button type={"submit"} disabled={clicked}>
                ارسال کد
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
