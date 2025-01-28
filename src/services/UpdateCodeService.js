import { client } from "../components/config/AxiosConfig.js";
import { toast } from "react-toastify";

const UpdateCodeService = async (id, code) => {
  let result = await client.put("/code/" + id, {
    code,
  });

  return result.data;
};

export default UpdateCodeService;
