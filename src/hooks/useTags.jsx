import { useEffect, useState } from "react";
import { client } from "../components/config/AxiosConfig.js";

const useTags = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      return await client.get(
        "https://salamlang.github.io/Salam/config/json/layout/type.json",
      );
    };

    fetch().then((data) => {
      setData(data.data);
    });
  }, []);

  return data;
};

export default useTags;
