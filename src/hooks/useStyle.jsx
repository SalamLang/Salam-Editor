import { useEffect, useState } from "react";

const useStyle = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/src/data/style.json").then((response) => {
      response.json().then((data) => {
        let result = data.items.map((item, index) => {
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
    });
  }, []);

  return data?.flat();
};

export default useStyle;
