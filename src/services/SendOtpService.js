import { client } from "../components/config/AxiosConfig.js";

const SendOtpService = async (mobile) => {
  await client.post("/auth", mobile);
};

export default SendOtpService;
