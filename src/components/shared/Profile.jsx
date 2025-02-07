import Line from "./Line.jsx";
import Input from "../auth/Input.jsx";
import Label from "../auth/Label.jsx";
import { useTranslation } from "react-i18next";
import Form from "../auth/Form.jsx";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import GetInfoService from "../../services/GetInfoService.js";
import * as Yup from "yup";
import SendOtpService from "../../services/SendOtpService.js";
import { toast } from "react-hot-toast";
import Button from "../auth/Button.jsx";

const Profile = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    mobile: null,
    name: null,
    family: null,
  });

  useEffect(() => {
    GetInfoService().then((result) => {
      setLoading(false);
      setData(result.data.user);
    });
  }, []);

  const validation = Yup.object({
    name: Yup.string().required(t("nameRequire")),
    family: Yup.string().required(t("familyRequire")),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);

    validation
      .validate(data, { abortEarly: false })
      .then(async () => {
        setErrors({});
        let result = await UpdateInfoService(data.name, data.family);
        if (result) {
          toast.success(
            t("saved"),
            localStorage?.getItem("theme") === "dark"
              ? {
                  style: {
                    background: "#333",
                    color: "#fff",
                  },
                }
              : "",
          );
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
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      {loading === true && (
        <>
          <div
            className={
              "absolute top-0 right-0 bg-white/10 backdrop-blur-[2px] w-full h-full flex justify-center items-center"
            }
          >
            <OrbitProgress
              dense
              color="#F97316"
              size="medium"
              text=""
              textColor="#ffffff"
            />
          </div>
        </>
      )}

      <div className="w-full h-full p-3 overflow-auto">
        <Line title={"اطلاعات حساب"} className={"mt-2"} />
        <Form onSubmit={handleSubmit}>
          <Label form={"number"}>
            <span>{t("mobileNumber")}: </span>
            <Input
              type={"number"}
              placeholder={t("mobileNumber")}
              className={"mt-1 tracking-wide"}
              readOnly={true}
              defaultValue={data.mobile}
            />
          </Label>
          <Label form={"name"}>
            <span>{t("name")}: </span>
            <Input
              type={"text"}
              id={"name"}
              name={"name"}
              placeholder={t("name")}
              onInput={handleChange}
              className={"mt-1 tracking-wide"}
              defaultValue={data.name}
            />
          </Label>
          <Label form={"family"}>
            <span>{t("family")}: </span>
            <Input
              type={"text"}
              id={"family"}
              name={"family"}
              onInput={handleChange}
              placeholder={t("family")}
              className={"mt-1 tracking-wide"}
              defaultValue={data.family}
            />
          </Label>
          <Button type={"submit"} disabled={clicked} className={"mt-5"}>
            ذخیره اطلاعات
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Profile;
