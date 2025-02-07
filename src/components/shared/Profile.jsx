import Line from "./Line.jsx";
import Input from "../auth/Input.jsx";
import Label from "../auth/Label.jsx";
import { useTranslation } from "react-i18next";
import Form from "../auth/Form.jsx";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import GetInfoService from "../../services/GetInfoService.js";

const Profile = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
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
        <Form>
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
              placeholder={t("family")}
              className={"mt-1 tracking-wide"}
              defaultValue={data.family}
            />
          </Label>
        </Form>
      </div>
    </>
  );
};

export default Profile;
