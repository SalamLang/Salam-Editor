import { useEffect, useRef } from "react";
import salamService from "../../services/SalamService.js";

// eslint-disable-next-line react/prop-types
const Run = ({ level = 0 }) => {
  let iframe = null;
  let error = null;
  let output = null;
  if (level === 1) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    iframe = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    error = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    output = useRef();
  }

  useEffect(() => {
    if (level === 1) {
      salamService(
        "صفحه: دکمه: تمام تمام",
        iframe.current,
        error.current,
        output.current,
      );
    }
  }, [level]);

  return (
    <>
      {level === 1 && (
        <>
          <iframe ref={iframe} className={"w-full h-[100vh] bg-white"}></iframe>
          <pre id="error" ref={error} className={"hidden"}></pre>
          <pre id="output" ref={output} className={"hidden"}></pre>
        </>
      )}
    </>
  );
};

export default Run;
