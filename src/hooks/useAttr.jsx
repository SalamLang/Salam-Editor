import { useEffect, useState } from "react";

const useAttr = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/src/data/attr.json").then((response) => {
      response.json().then((data) => {
        let result = data.items.map((item, index) => {
          if (index !== 0) {
            return item.text?.fa.map((item2, index) => {
              return {
                type: "keyword",
                label: item.text?.fa[index],
                apply: item.text?.fa[index] + "=«»",
              };
            });
          } else {
            return {
              type: "keyword",
              label: "ارور",
              apply: "ارور" + "=«»",
            };
          }
        });

        setData(result);
      });
    });
  }, []);

  return data?.flat();
};

export default useAttr;
