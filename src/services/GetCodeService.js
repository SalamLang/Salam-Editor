import { client } from "../components/config/AxiosConfig.js";

const GetCodeService = async (id) => {
  let result = await client.get("/code/" + id);

  return result.data;
};

export default GetCodeService;
