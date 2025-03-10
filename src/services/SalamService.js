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
          padding: 3px 10px;
          border-radius: 5px;
          color: white;
          background-color: #00BC1C;
          font-family: estedad, sans-serif;
          font-size: 15px;
          `,
  );
  if (!code) {
    // toast.error("کد ورودی خالی میباشد", {
    //   position: "bottom-center",
    // });
    return;
  }

  // console.log(
  //   "%cCalling Salam with args => " + args[1],
  //   `
  //         padding: 3px 10px;
  //         border-radius: 5px;
  //         color: white;
  //         background-color: #BEA200;
  //         font-family: estedad, sans-serif;
  //         font-size: 15px;
  //         `,
  // );

  if (window.isReady) {
    captureOutput(["code", code]);
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

        if (iframe) {
          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow.document;

          if (iframeDocument) {
            iframe.srcdoc = "";
            iframe.srcdoc = window.code ?? "";
            if (window.code.startsWith("===> Toke")) {
              iframe.srcdoc = "";
              // toast.error("خطا: ورود کاراکتر اشتباه", {
              //   position: "bottom-center",
              // });
            }
            window.code = "";
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

window.captureLint = (callback) => {
  if (outputPre) outputPre.textContent = "";
  if (errorPre) errorPre.textContent = "";

  if (is_running) {
    return;
  }

  try {
    is_running = true;

    if (typeof callMain === "function") {
      try {
        callMain(["lint", "code", localStorage.getItem("code")]);
        localStorage.setItem("code", window.code);
        callback();
        window.code = "";
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
