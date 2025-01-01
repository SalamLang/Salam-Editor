const SalamService = () => {
    // Elements
    const elm_output = document.querySelector('.output');
    const elm_error = document.querySelector('.error');
    const elm_iframe = document.querySelector('.iframe');

// Variables
    let isReady = false;

// Global variables
    var Module = {
        noInitialRun: true, onRuntimeInitialized: () => {
            console.log('Salam loaded successfully');

            isReady = true;

            runSalam(false);
        }, print: (text) => {
            displayOutput(text);
        }, printErr: (text) => {
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
		<div style="color: red; font-weight: bold;"><b>errorrrrrrrrrrrrrr:</b> ${elm_error.innerHTML}</div>
	</body>
</html>`);
            iframeDocument.close();
        }
    };

    const captureOutput = (args) => {
        console.log("Capture Output: ", args);

        elm_output.textContent = '';
        elm_error.textContent = '';

        try {
            const exitCode = callMain(args);

            if (exitCode !== 0) {
                elm_error.innerHTML = 'njkjn.jnkjkjnkjnknkj¯.<br>' + elm_error.textContent;
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

            elm_error.textContent = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.';
            showErrorInIframe();
        }
    };

    const runSalam = () => {
        console.log('Running Salam code...');

        if (!isReady) {
            console.log('Salam runtime not ready. Please wait...');
            return;
        }

        const code = "صفحه: محتوا=«سلام چطوری» تمام"

        const args = ['code', code];

        captureOutput(args);
    };

// Init
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'salam-wa.js';
    document.body.appendChild(script);

// // Cache
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/script/service-worker.js').then(() => {
//             console.log('Service Worker Registered');
//         })
//             .catch(error => {
//                 console.log('Service Worker Registration Failed:', error);
//             });
//     }
}

export default SalamService;