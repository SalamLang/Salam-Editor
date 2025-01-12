import { useEffect, useState } from "react";

const Run = () => {
  const [code, setCode] = useState(localStorage?.getItem("code"));

  useEffect(() => {
    setInterval(() => {
      if (localStorage?.getItem("code") !== code) {
        setCode(localStorage?.getItem("code"));
      }
    }, 1000);
  }, []);

  return <></>;
};

export default Run;
