import { useState } from "react";
import Form from "./Form.jsx";
import Input from "./Input.jsx";
import Label from "./Label.jsx";
import Button from "./Button.jsx";
import * as Yup from "yup";
import LoginSidebar from "./LoginSidebar.jsx";
import { toast } from "react-hot-toast";
import VerifyOtpService from "../../services/VerifyOtpService.js";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Verify = ({ mobile }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    otp: null,
  });

  const [clicked, setClicked] = useState(false);

  const [errors, setErrors] = useState({});

  const validation = Yup.object({
    otp: Yup.string().required("کد ورود الزامی است"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);

    validation
      .validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({});
        let result = await VerifyOtpService(mobile, formData.otp);
        if (result) {
          location.href = "/";
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
          <LoginSidebar verify={true} />
          <div className="basis-full sm:basis-1/2 flex flex-col justify-center items-center">
            <img
              src="/images/login.jpg"
              alt="login"
              loading={"lazy"}
              className={"w-[200px] -mt-10 hue-rotate-[215deg]"}
            />
            <Form onSubmit={handleSubmit} className={"w-full max-w-[320px]"}>
              <Label form={"number"} required={true} error={errors.otp}>
                <span>{t("otpCode")}:</span>
                <Input
                  type={"number"}
                  name={"otp"}
                  onInput={handleChange}
                  placeholder={t("otpCode")}
                  autoFocus={true}
                  className={"mt-1 tracking-wide"}
                />
              </Label>
              <Button type={"submit"} disabled={clicked}>
                {t("verify")}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
