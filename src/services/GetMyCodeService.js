import { client } from "../components/config/AxiosConfig.js";

const GetMyCodeService = async () => {
  let result = await client.post("/codes");

  return result.data;
};

export default GetMyCodeService;
