import Button from "../auth/Button.jsx";
import Svg from "./Svg.jsx";
import Line from "./Line.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confirm from "./Confirm.jsx";
import Input from "../auth/Input.jsx";
import Label from "../auth/Label.jsx";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-full p-3 overflow-auto">
        <Line title={"اطلاعات حساب"} className={"mt-2"} />
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
      </div>
    </>
  );
};

export default Profile;
