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
      return result.data.map(() => {});
    });
  }, []);
};

export default useTags;
