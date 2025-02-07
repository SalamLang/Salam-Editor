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
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const { t } = useTranslation();

  const logout = () => {
    setClicked(true);
    setConfirm(true);
  };

  const accept = () => {
    setClicked(false);
    setConfirm(false);

    localStorage.removeItem("token");
    navigate("/");
  };

  const reject = () => {
    setClicked(false);
    setConfirm(false);
  };

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
        <Line title={"خروج"} className={"my-6"} />
        <Button
          type={"button"}
          theme={"#E7000B"}
          disabled={clicked}
          className={
            "border-2 bg-transparent !mt-0 mb-2 !text-red-600 border-red-600 flex justify-center items-center gap-2"
          }
          onClick={logout}
        >
          <Svg name={"alert"} theme={"#E7000B"} />
          خروج از حساب
        </Button>
      </div>

      <Confirm
        show={confirm}
        callback={() => {
          setConfirm(false);
        }}
        accept={accept}
        reject={reject}
      />
    </>
  );
};

export default Profile;
