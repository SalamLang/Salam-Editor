import { client } from "../components/config/AxiosConfig.js";

const GetInfoService = async () => {
  let result = await client.get("/info");

  return result.data;
};

export default GetInfoService;
