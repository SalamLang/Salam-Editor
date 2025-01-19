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

    fetch().then((d) => {
      let data = d.data.items;

      let result = data.map((item) => {
        return item.text.fa.map((item2, index) => {
          return {
            info: item.descriptions.fa,
            type: "variable",
            label: item.text.fa[index],
            apply: item.text.fa[index] + ":\n\nتمام",
          };
        });
      });

      setData(result);
    });
  }, []);

  return data?.flat();
};

export default useTags;
