import { useEffect, useState } from "react";
import salamService from "../../services/SalamService.js";

const Run = () => {
  const [code, setCode] = useState(localStorage?.getItem("code"));

  const salamAdd = () => {
    const script = document.createElement("script");
    script.src = "salam-wa.js";
    script.onload = () => {
      console.log("Salam module reloaded.");
    };

    document.body.appendChild(script);
  };

  salamAdd();
  useEffect(() => {
    setInterval(() => {
      if (localStorage?.getItem("code") !== code) {
        setCode(localStorage?.getItem("code"));
      }
      salamService(code);
    }, 1000);
  }, []);

  return (
    <>
      <iframe></iframe>
      <pre></pre>
    </>
  );
};

export default Run;
