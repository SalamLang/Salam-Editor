import { client } from "../components/config/AxiosConfig.js";
import { toast } from "react-toastify";

const VerifyOtpService = async (mobile, otp) => {
  let result = await client.post("/verify", {
    mobile,
    otp,
  });

  if (result.data.success === true) {
    let token = result.data.data.token;
    localStorage.setItem("token", token);
  } else {
    toast.error("مشکلی پیش امده! مجدد تلاش کنید");
  }

  return result.data?.success;
};

export default VerifyOtpService;
