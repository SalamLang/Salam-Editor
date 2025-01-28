import { client } from "../components/config/AxiosConfig.js";

const SendOtpService = async (mobile) => {
  let result = await client.post("/auth", {
    mobile,
  });

  return result.data?.success;
};

export default SendOtpService;
