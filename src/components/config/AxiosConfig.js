import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

instance.interceptors.response.use(null, (error) => {
  return true;
});

export const client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export const setToken = () => {
  const token = localStorage?.getItem("token");

  if (token !== undefined) {
    instance.defaults.headers.common["authorization"] = "Bearer " + token;
    return true;
  } else {
    return false;
  }
};

export const checkToken = async () => {
  let statue = setToken();

  if (statue) {
    let result = await client.post("/token");
    if (result.data !== undefined) {
      return result.data.success === true;
    } else {
      return false;
    }
  } else {
    return statue;
  }
};
