import { useEffect, useRef } from "react";
import salamService from "../../services/SalamService.js";

// eslint-disable-next-line react/prop-types
const Run = ({ level = 0 }) => {
  const iframe = useRef();
  const error = useRef();
  const output = useRef();

  useEffect(() => {
    if (level === 1) {
      salamService("صفحه: تمام", iframe, error, output);
    }
  }, [level]);

  return (
    <>
      <iframe ref={iframe}></iframe>
      <pre id="error" ref={error}></pre>
      <pre id="output" ref={output}></pre>
    </>
  );
};

export default Run;
