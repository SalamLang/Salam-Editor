import { client } from "../components/config/AxiosConfig.js";

const VerifyOtpService = async (mobile, otp) => {
  let result = await client.post("/verify", {
    mobile,
    otp,
  });

  return result.data?.success;
};

export default VerifyOtpService;
