import { useEffect } from "react";
import { client } from "../components/config/AxiosConfig.js";

const useTags = () => {
  useEffect(() => {
    const fetch = async () => {
      return client.get(
        "https://salamlang.github.io/Salam/config/json/layout/type.json",
      );
    };

    fetch().then((result) => {
      const data = result.data.items;

      return data.map((item) => {
        return {
          info: item?.descriptions?.fa,
          label: item?.text?.fa[0],
          type: "variable",
        };
      });
    });
  }, []);
};

export default useTags;
