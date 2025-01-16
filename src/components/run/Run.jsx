import { useEffect, useRef, useState } from "react";
import salamService from "../../services/SalamService.js";

const Run = () => {
  const iframe = useRef();
  const error = useRef();
  const output = useRef();

  useEffect(() => {}, []);

  return (
    <>
      <iframe ref={iframe}></iframe>
      <pre id="error" ref={error}></pre>
      <pre id="output" ref={output}></pre>
    </>
  );
};

export default Run;
