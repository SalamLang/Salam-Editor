// Elements
const elm_code = document.querySelector('.code');
const elm_execute = document.querySelector('.execute');
const elm_output = document.querySelector('.output');
const elm_error = document.querySelector('.error');
const elm_iframe = document.querySelector('.iframe');
const elm_toggle = document.querySelector('#toggleBtn');
const elm_header = document.querySelector('header');

// Const variables

// Variables
let isReady = false;
let toggleStatus = 0

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
};

// Functions
const displayOutput = (text) => {
    console.log("Output: ", text);

    elm_output.textContent += text + '\n';
};

const displayError = (text) => {
    console.error("Error: ", text);

    // TODO: Ignore keepRuntimeAlive() warning
    if (text === "program exited (with status: 2), but keepRuntimeAlive() is set (counter=0) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)") {
        return;
    }

    elm_error.textContent += text + '<br>';
};

const toggleIframePosition = () => {
    if (elm_iframe.style.right === "50%") {
        elm_iframe.style.right = "150%";
    } else {
        elm_iframe.style.right = "50%";
    }
};

const togglePosition = () => {
    if(toggleStatus === 1){
        elm_header.style.width = "49%"
        elm_code.style.width = "49%"
        document.body.style.alignItems = "start"
        document.body.style.paddingRight = "10px"
        elm_iframe.style.width = "49%"
        elm_iframe.style.right = "75%"
        elm_iframe.style.height = "calc(100% - 22px)"
        elm_execute.disabled = true
    }else {
        elm_header.style.width = "98%"
        elm_code.style.width = "98%"
        setTimeout(() => {
            document.body.style.alignItems = "center"
        }, 300)
        document.body.style.paddingRight = "0px"
        elm_iframe.style.width = "98%"
        elm_iframe.style.right = "150%"
        elm_iframe.style.height = "calc(100% - 99px)"
        elm_execute.disabled = false
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
        <div style="color: red; font-weight: bold;"><b>خطا:</b> ${elm_error.innerHTML}</div>
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
            elm_error.innerHTML = 'برنامه با خطا مواجه شد.<br>' + elm_error.textContent;
            showErrorInIframe();
        } else {
            const iframeDocument = getIframeContent(elm_iframe);
            if (iframeDocument) {
                iframeDocument.open();
                iframeDocument.write(elm_output.textContent);
                iframeDocument.close();
            }
        }
    } catch (err) {
        console.error(err);
        
        elm_error.textContent = 'خطای غیرمنتظره رخ داد.';
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
    if (toggleStatus === 1) {
        runSalam()
    }
});

window.addEventListener('load', () => {
    elm_code.focus();

    if (localStorage.getItem("cache-code")) {
        elm_code.value = localStorage.getItem("cache-code").toString().trim();
    }
});

elm_toggle.addEventListener("change", () => {
    if (elm_toggle.checked){
        toggleStatus = 1
    }else {
        toggleStatus = 0
    }
    togglePosition()
})

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
