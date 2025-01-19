import { useEffect, useState } from "react";
import { client } from "../components/config/AxiosConfig.js";

const useTags = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .get("https://salamlang.github.io/Salam/config/json/layout/type.json") // آدرس جدید
      .then((result) => {
        setData(result.data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return data;
};

export default useTags;
