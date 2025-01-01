const iframe = document.querySelector('iframe');
const outputPre = document.querySelector('pre');

let isReady = false;
let is_running = false;

const Module = {
    noInitialRun: true, onRuntimeInitialized: () => {
        console.log('Salam loaded successfully');
        isReady = true;
    }, print: (text) => {
        console.log(text);
    },
};

const SalamService = (code) => {
    Module.onRuntimeInitialized();

    console.log('Running Salam code...');

    const args = ['code', code];
    console.log('Calling Salam with args:', args);

    if (isReady) {
        captureOutput(args);
    } else {
        console.log('Salam runtime not ready. Please wait...');
    }
};

const captureOutput = (args) => {
    if (outputPre) {
        outputPre.textContent = '';
    }

    let output = '';
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    console.log = (text) => {
        output += text + '\n';
    };
    console.error = (text) => {
        output += 'Error: ' + text + '\n';
    };

    if (is_running) {
        return;
    }

    try {
        is_running = true;

        if (typeof callMain === 'function') {
            try {
                callMain(args);
            } catch (err) {
                console.error('Runtime error:', err);
            }
        } else {
            console.error('callMain is not defined. Ensure NO_EXIT_RUNTIME is enabled.',);
        }
    } catch (err) {
        console.error('خطای غیرمنتظره رخ داد. ' + err);
    } finally {
        is_running = false;
    }

    if (outputPre) {
        outputPre.textContent = output;

        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument) {
            iframeDocument.open();
            iframeDocument.write(output);
            iframeDocument.close();
        }
    }

    console.log = originalConsoleLog;
    console.error = originalConsoleError;

    return output;
};

export default SalamService;