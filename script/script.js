// Elements
const elm_code = document.querySelector('.code');
const elm_execute = document.querySelector('.execute');
const elm_output = document.querySelector('.output');
const elm_error = document.querySelector('.error');
const elm_iframe = document.querySelector('.iframe');

// Const variables

// Variables
let isReady = false;

// Global variables
var Module = {
    noInitialRun: true,
    onRuntimeInitialized: () => {
        console.log('Salam loaded successfully');

        isReady = true;

        elm_execute.disabled = !isReady;

        if (elm_code.value !== '') {
            runSalam(false);
        }
    },
    print: (text) => {
        displayOutput(text);
    },
    printErr: (text) => {
        displayError(text);
    },
    emscripten_force_exit: (exitCode) => {
        Module._emscripten_force_exit(exitCode);
    },
};

// Functions
const displayOutput = (text) => {
    console.log("Output: ", text);

    elm_output.textContent += text + '\n';
};

const displayError = (text) => {
    console.error("Error: ", text);

    elm_error.textContent += text + '<br>';
};

const toggleIframePosition = () => {
    if (elm_iframe.style.right === "50%") {
        elm_iframe.style.right = "150%";
    } else {
        elm_iframe.style.right = "50%";
    }
};

const getIframeContent = (iframe) => {
    return iframe.contentDocument || iframe.contentWindow.document;
};

const showErrorInIframe = () => {
    const iframeDocument = getIframeContent(elm_iframe);
    if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(`<!DOCTYPE html>
<html dir="rtl" lang="fa-IR">
    <body>
        <div style="color: red; font-weight: bold;">خطا: ${elm_error.textContent}</div>
    </body>
</html>`);
        iframeDocument.close();
    }
};

const captureOutput = (showOutput, arguments) => {
    console.log("Capture Output: ", arguments);

    if (showOutput) {
        toggleIframePosition();
    }

    elm_output.textContent = '';
    elm_error.textContent = '';

    try {
        const exitCode = callMain(arguments);

        if (exitCode !== 0) {
            elm_error.textContent = 'برنامه با خطا مواجه شد: ' + elm_error.textContent;
            showErrorInIframe();
        } else {
            const iframeDocument = getIframeContent(elm_iframe);
            if (iframeDocument) {
                iframeDocument.open();
                iframeDocument.write(elm_output.textContent);
                iframeDocument.close();
            }
        }
        
        emscripten_force_exit(exitCode);
    } catch (err) {
        console.error(err);
        
        elm_error.textContent = 'خطای غیرمنتظره رخ داد';
        showErrorInIframe();
    }
};

const runSalam = (showOutput) => {
    console.log('Running Salam code...');

    const code = elm_code.value.toString().trim();
    if (!code) {
        alert('Code is empty! Please enter Salam code.');
        return;
    }

    const arguments = ['code', code];

    if (!isReady) {
        console.log('Salam runtime not ready. Please wait...');
        return;
    }

    captureOutput(showOutput, arguments);
};

// Events
elm_execute.addEventListener('click', () => {
    runSalam(true);
});

elm_code.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();

        const textarea = event.target;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
});

elm_code.addEventListener("input", () => {
    localStorage.setItem("cache-code", elm_code.value.toString().trim());
});

window.addEventListener('load', () => {
    elm_code.focus();

    if (localStorage.getItem("cache-code")) {
        elm_code.value = localStorage.getItem("cache-code").toString().trim();
    }
});

// Init
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'salam-wa.js';
document.body.appendChild(script);

// Cache
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/script/service-worker.js').then(() => {
            console.log('Service Worker Registered');
        })
        .catch(error => {
            console.log('Service Worker Registration Failed:', error);
        });
}
