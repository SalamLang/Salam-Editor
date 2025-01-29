import { client } from "../components/config/AxiosConfig.js";

const GetMyCodeService = async (id) => {
  let result = await client.get("/codes");

  return result.data;
};

export default GetMyCodeService;
