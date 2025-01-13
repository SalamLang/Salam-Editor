import { useEffect, useRef, useState } from "react";
import salamService from "../../services/SalamService.js";

const Run = () => {
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

  useEffect(() => {
    salamAdd();

    const handle = () => {};

    setTimeout(handle, 300);
  }, []);

  return (
    <>
      <iframe ref={iframe}></iframe>
      <pre ref={pre}></pre>
    </>
  );
};

export default Run;
