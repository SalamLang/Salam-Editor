let $ = document
const codeTextArea = $.querySelector('#code');
const executeButton = $.querySelector('#execute');
const outputPre = $.querySelector('pre');
const iframe = $.querySelector('iframe');

codeTextArea.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        const textarea = this;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
});

const args = ['code', ''];
let isReady = false;

var Module = {
    noInitialRun: true,
    onRuntimeInitialized: () => {
        console.log('Salam loaded successfully');
        isReady = true;
        executeButton.disabled = false;

        if (codeTextArea.value.toString().trim() !== '') {
            runSalam();
        }
    },
    print: (text) => {
        console.log(text);
    }
};

function captureOutput(arguments) {
    if (outputPre) {
        outputPre.textContent = '';
    }

    let output = '';

    const originalConsoleLog = console.log;
    console.log = function (text) {
        output += text + '\n';
    };

    callMain(arguments);

    console.log = originalConsoleLog;

    if (outputPre) {
        outputPre.textContent = output;

        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDocument) {
            iframeDocument.open();
            iframeDocument.write(output);
            iframeDocument.close();
        }
    }

    return output;
}

function runSalam() {
    console.log('Running Salam code...');
    const code = codeTextArea.value.toString().trim();

    if (!code) {
        alert('Code is empty! Please enter Salam code.');
        return;
    }

    args[1] = code;
    console.log('Calling Salam with arguments:', args);

    if (isReady) {
        captureOutput(args);
    } else {
        console.log('Salam runtime not ready. Please wait...');
    }
}

executeButton.addEventListener('click', () => {
    runSalam();
    if (codeTextArea.value !== null && codeTextArea.value !== "") {
        if (executeButton.innerHTML === "اجرا") {
            iframe.style.right = "50%"
            executeButton.innerHTML = "بازگشت"
        } else if (executeButton.innerHTML === "بازگشت") {
            iframe.style.right = "150%"
            executeButton.innerHTML = "اجرا"
        }
    }
});

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'salam-wa.js';
document.body.appendChild(script);

/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => {
        console.log('Service Worker Registered');
    })
    .catch(error => {
        console.log('Service Worker Registration Failed:', error);
    });
}
*/
