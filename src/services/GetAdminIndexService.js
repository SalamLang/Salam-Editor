import { client } from "../components/config/AxiosConfig.js";

const GetAdminIndexService = async () => {
  let result = await client.post("/admin");

  return result.data;
};

export default GetAdminIndexService;
