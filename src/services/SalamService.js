const iframe = document.querySelector("iframe");
const outputPre = document.querySelector("#output");
const errorPre = document.querySelector("#error");
const codeTextArea = document.querySelector("#code");
const executeButton = document.querySelector("#execute");

let isReady = false;
let is_running = false;

var Module = {
  noInitialRun: true,
  onRuntimeInitialized: () => {
    console.log("Salam loaded successfully");
    isReady = true;
    executeButton.disabled = false;

    if (codeTextArea.value.toString().trim() !== "") {
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
  const code = codeTextArea.value.toString().trim();
  if (!code) {
    alert("Code is empty! Please enter Salam code.");
    return;
  }

  const args = ["code", code];
  console.log("Calling Salam with arguments:", args);

  if (isReady) {
    captureOutput(args);
  } else {
    console.log("Salam runtime not ready. Please wait...");
  }
};

const captureOutput = (arguments) => {
  outputPre.textContent = "";
  errorPre.textContent = "";

  if (is_running) {
    return;
  }

  try {
    is_running = true;

    if (typeof callMain === "function") {
      try {
        callMain(arguments);

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

const reloadModule = () => {
  const script = document.createElement("script");
  script.src = "salam-wa.js";
  script.onload = () => {
    console.log("Salam module reloaded.");
  };

  document.body.appendChild(script);
};

executeButton.addEventListener("click", () => {
  console.log("Button clicked!");

  runSalam();
});

codeTextArea.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = codeTextArea.selectionStart;
    const end = codeTextArea.selectionEnd;
    codeTextArea.value =
      codeTextArea.value.substring(0, start) +
      "	" +
      codeTextArea.value.substring(end);
    codeTextArea.selectionStart = codeTextArea.selectionEnd = start + 4;
  }
});

reloadModule();
