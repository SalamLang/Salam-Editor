import { client } from "../components/config/AxiosConfig.js";
import { toast } from "react-toastify";

const SaveCodeService = async (title, code) => {
  let result = await client.post("/code", {
    title,
    code,
  });

  if (result.data?.success === false) {
    toast.error("اوه!!! یه اروری چیزی داریم.");
  }

  return result.data;
};

export default SaveCodeService;
