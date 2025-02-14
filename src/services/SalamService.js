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

const runProject = () => {
    captureOutput(code);
};

const captureOutput = (code) => {
    if (outputPre) outputPre.textContent = "";
    if (errorPre) errorPre.textContent = "";

    if (is_running) {
        return;
    }

    try {
        is_running = true;
        const res = window.mainSalam(["generator", "code", code, "--lang", localStorage?.getItem("lang")]);

        if (res === 0) {
            console.log(window.generator.getGeneratedSource());
            console.log(window.generator.getGeneratedSourceC());
        } else {
            // Merge the error arrays only if they exist and are valid arrays
            const errors = [
                ...(Array.isArray(window.generator?.errors) ? window.generator.errors : []),
                ...(Array.isArray(window.parser?.ast?.errors) ? window.parser.ast.errors : []),
                ...(Array.isArray(window.validator?.errors) ? window.validator.errors : [])
            ];

            // Check if the merged errors array is non-empty and log it as an error
            if (errors.length > 0) {
                console.error("Compilation errors:", errors);
            }
        }
        // if (iframe) {
        //   const iframeDocument =
        //     iframe.contentDocument || iframe.contentWindow.document;
        //
        //   if (iframeDocument) {
        //     iframe.srcdoc = "";
        //     iframe.srcdoc = window.code ?? "";
        //     if (window.code.startsWith("===> Toke")) {
        //       iframe.srcdoc = "";
        //       // toast.error("خطا: ورود کاراکتر اشتباه", {
        //       //   position: "bottom-center",
        //       // });
        //     }
        //     window.code = "";
        //   }
        // }
    } finally {
        is_running = false;
    }
};

export default SalamService;
