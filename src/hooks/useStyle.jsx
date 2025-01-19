import { useEffect, useState } from "react";
import { client } from "../components/config/AxiosConfig.js";

const useStyle = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      return await client.get(
        "https://salamlang.github.io/Salam/config/json/layout/attribute/style/type.json",
      );
    };

    fetch().then((d) => {
      let data = d.data.items;

      let result = data.map((item, index) => {
        if (index !== 258) {
          return item.text?.fa.map((item2, index) => {
            return {
              type: "text",
              label: item.text?.fa[index],
              apply: item.text?.fa[index] + "=«»",
            };
          });
        } else {
          return {
            type: "text",
            label: "ارور",
            apply: "ارور" + "=«»",
          };
        }
      });

      setData(result);
    });
  }, []);

  return data?.flat();
};

export default useStyle;
