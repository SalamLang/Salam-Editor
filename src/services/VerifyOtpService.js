import { client } from "../components/config/AxiosConfig.js";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const VerifyOtpService = async (mobile, otp) => {
  const { t } = useTranslation();
  let result = await client.post("/verify", {
    mobile,
    otp,
  });

  if (result.data.success === true) {
    let token = result.data.data.token;
    localStorage.setItem("token", token);
  } else {
    toast.error(t("problem"));
  }

  return result.data?.success;
};

export default VerifyOtpService;
