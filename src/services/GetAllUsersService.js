import { client } from "../components/config/AxiosConfig.js";

const GetAllUsersService = async () => {
  let result = await client.post("/admin/users");

  return result.data;
};

export default GetAllUsersService;
