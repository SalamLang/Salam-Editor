import Line from "./Line.jsx";
import Input from "../auth/Input.jsx";
import Label from "../auth/Label.jsx";
import { useTranslation } from "react-i18next";
import Form from "../auth/Form.jsx";
import { useState } from "react";

const Profile = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    mobile: null,
    name: null,
    family: null,
  });

  return (
    <>
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
            />
          </Label>
        </Form>
      </div>
    </>
  );
};

export default Profile;
