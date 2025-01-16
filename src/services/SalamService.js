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

var Module = {
  noInitialRun: true,
  onRuntimeInitialized: () => {
    console.log("Salam loaded successfully");
    isReady = true;

    if (codeInput.trim() !== "") {
      runSalam();
    }
  },
  print: (text) => {
    customLogger(text, "log");
  },
  printErr: (text) => {
    customLogger(text, "error");
  },
};

const customLogger = (text, type) => {
  if (type === "error") {
    console.error(text);
  } else {
    console.log(text);
  }

  const prefix = type === "error" ? "Error: " : "";

  if (prefix === "") {
    outputPre.textContent += prefix + text + "\n";
  } else {
    errorPre.textContent += prefix + text + "\n";
  }
};

const runSalam = () => {
  console.log("Running Salam code...");
  const code = codeInput.trim();
  if (!code) {
    alert("Code is empty! Please enter Salam code.");
    return;
  }

  const args = ["code", code];
  console.log("Calling Salam with args:", args);

  if (isReady) {
    captureOutput(args);
  } else {
    console.log("Salam runtime not ready. Please wait...");
  }
};

const captureOutput = (args) => {
  outputPre.textContent = "";
  errorPre.textContent = "";

  if (is_running) {
    return;
  }

  try {
    is_running = true;

    if (typeof callMain === "function") {
      try {
        callMain(args);

        const iframeDocument =
          iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument) {
          iframe.srcdoc = outputPre.textContent;
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
