let iframe;
let outputPre;
let errorPre;
let codeInput;

const SalamService = (code, ifr, err, out) => {
  codeInput = code;
  iframe = ifr;
  errorPre = err;
  outputPre = out;

  runProject();
};

let isReady = false;
let is_running = false;

const runSalam = (code) => {
  console.log(
    "%c3.runSalam - Running Salam code...",
    `
          padding: 10px;
          border-radius: 10px;
          color: white;
          background-color: #00BC1C;
          font-family: estedad, sans-serif;
          font-size: 18px;
          `,
  );
  if (!code) {
    alert("Code is empty! Please enter Salam code.");
    return;
  }

  const args = ["code", code];
  console.log(
    "%cCalling Salam with args => " + args[1],
    `
          padding: 10px;
          border-radius: 10px;
          color: white;
          background-color: #BEA200;
          font-family: estedad, sans-serif;
          font-size: 18px;
          `,
  );

  if (window.isReady) {
    captureOutput(args);
  } else {
    console.log("Salam runtime not ready. Please wait...");
  }
};

const captureOutput = (args) => {
  if (outputPre) outputPre.textContent = "";
  if (errorPre) errorPre.textContent = "";

  if (is_running) {
    return;
  }

  try {
    is_running = true;

    if (typeof callMain === "function") {
      try {
        callMain(args);

        console.log("Final output: ", outputPre.textContent);

        if (iframe) {
          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow.document;

          if (iframeDocument) {
            iframe.srcdoc = outputPre.textContent;
          }
        }
      } catch (err) {
        Module.printErr("Runtime error: " + err);
      }
    } else {
      Module.printErr(
        "callMain is not defined. Ensure NO_EXIT_RUNTIME is enabled.",
      );
    }
  } catch (err) {
    Module.printErr("خطای غیرمنتظره رخ داد. " + err);
  } finally {
    is_running = false;
  }
};

const runProject = () => {
  runSalam(codeInput);
};
export default SalamService;
