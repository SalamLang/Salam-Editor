import { useEffect, useState } from "react";
import { client } from "../components/config/AxiosConfig.js";

const useTags = () => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      return client.get(
        "https://salamlang.github.io/Salam/config/json/layout/type.json",
      );
    };

    fetch().then((result) => {
      const data = result.data.items;

      const final = data.map((item) => {
        return {
          info: item?.descriptions?.fa,
          label: item?.text?.fa[0],
          type: "variable",
        };
      });

      setRes(final);
    });
  }, []);

  return res;
};

export default useTags;
