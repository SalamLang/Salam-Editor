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
  const error = useRef();
  const output = useRef();

  useEffect(() => {
    salamAdd();

    const handle = () => {
      salamService(
        "صفحه: دکمه: تمام تمام",
        iframe.current,
        error.current,
        output.current,
      );
    };

    setTimeout(handle, 300);
  }, []);

  return (
    <>
      <iframe ref={iframe}></iframe>
      <pre id="error" ref={error}></pre>
      <pre id="output" ref={output}></pre>
    </>
  );
};

export default Run;
