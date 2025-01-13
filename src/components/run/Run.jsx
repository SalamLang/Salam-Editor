import { useEffect, useRef, useState } from "react";
import salamService from "../../services/SalamService.js";

const Run = () => {
  const [code, setCode] = useState("");

  const salamAdd = () => {
    const script = document.createElement("script");
    script.src = "salam-wa.js";
    script.onload = () => {
      console.log("Salam module reloaded.");
    };

    document.body.appendChild(script);
  };

  const iframe = useRef();
  const pre = useRef();

  salamAdd();

  useEffect(() => {}, []);

  return (
    <>
      <iframe ref={iframe}></iframe>
      <pre ref={pre}></pre>
    </>
  );
};

export default Run;
