import { client } from "../components/config/AxiosConfig.js";

const UpdateInfoService = async (name, family) => {
  let result = await client.post("/info", {
    name,
    family,
  });

  return result.data;
};

export default UpdateInfoService;
