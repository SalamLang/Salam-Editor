import { client } from "../components/config/AxiosConfig.js";

const SaveCodeService = async (title, code) => {
  let result = await client.post("/code", {
    title,
    code,
  });

  return result.data?.success;
};

export default SaveCodeService;
