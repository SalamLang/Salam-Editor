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

export const runSalam = (code) => {
  console.log("runSalam - Running Salam code...");
  if (!code) {
    alert("Code is empty! Please enter Salam code.");
    return;
  }

  const args = ["code", code];
  console.log("Calling Salam with args:", args);

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
  runSalam();
};
export default SalamService;
