import { useEffect, useState } from "react";
import { client } from "../components/config/AxiosConfig.js";

const useAttr = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      return await client.get(
        "https://salamlang.github.io/Salam/config/json/layout/attribute/type.json",
      );
    };

    fetch().then((d) => {
      let data = d.data.items;

      let result = data.map((item) => {
        return item.text.fa.map((item2, index) => {
          return {
            type: "keyword",
            label: item.text.fa[index],
            apply: item.text.fa[index] + "=«»",
          };
        });
      });

      setData(result);
    });
  }, []);

  return data?.flat();
};

export default useAttr;
