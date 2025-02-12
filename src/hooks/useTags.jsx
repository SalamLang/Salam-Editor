import { useEffect, useState } from "react";
// import { client } from "../components/config/AxiosConfig.js";

const useTags = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/src/data/tags.json").then((response) => {
      response.json().then((data) => {
        let result = data.items.map((item) => {
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
    });
  }, []);

  return data?.flat();
};

export default useTags;
