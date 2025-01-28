import { client } from "../components/config/AxiosConfig.js";
import { toast } from "react-toastify";

const GetCodeService = async (id) => {
  let result = await client.get("/code/" + id);

  return result.data;
};

export default GetCodeService;
