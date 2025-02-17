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

let is_running = false;

const runProject = () => {
    captureOutput(codeInput);
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
            window.Module.print("running")
            if (iframe) {
                const iframeDocument =
                    iframe.contentDocument || iframe.contentWindow.document;

                if (iframeDocument) {
                    iframe.srcdoc = "";
                    iframe.srcdoc = (window.generator.getGeneratedSource() + " " + window.generator.getGeneratedSourceC())
                }
            }
        } else {
            const errors = [
                ...(Array.isArray(window.generator?.errors) ? window.generator.errors : []),
                ...(Array.isArray(window.parser?.ast?.errors) ? window.parser.ast.errors : []),
                ...(Array.isArray(window.validator?.errors) ? window.validator.errors : [])
            ];

            if (errors.length > 0) {
                console.error("Compilation errors:", errors);
                window.Module.printErr(errors[0])
            }
        }
    } finally {
        is_running = false;
    }
};

export default SalamService;
