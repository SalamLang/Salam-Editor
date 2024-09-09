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
    elm_output.textContent += text + '\n';
};

const displayError = (text) => {
    elm_error.textContent += text + '\n';
};

const toggleIframePosition = () => {
	if (elm_iframe.style.right === "50%") {
		elm_iframe.style.right = "150%";
	} else {
		elm_iframe.style.right = "50%";
	}
};

const showErrorInIframe = (errorMessage) => {
    const iframeDocument = elm_iframe.contentDocument || elm_iframe.contentWindow.document;
    if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(`<div style="color: red; font-weight: bold;">خطا: ${errorMessage}</div>`);
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
		const exitCode = callMain(args);
		
		if (exitCode !== 0) {
			const errorMessage = 'برنامه با خطا مواجه شد';
			displayError(errorMessage);
			showErrorInIframe(errorMessage);
		}
	} catch (err) {
		const errorMessage = 'خطای غیرمنتظره رخ داد';
		displayError(errorMessage);
		showErrorInIframe(errorMessage);
	}
	callMain(arguments);

	const iframeDocument = elm_iframe.contentDocument || elm_iframe.contentWindow.document;
	if (iframeDocument) {
		iframeDocument.open();
		iframeDocument.write(elm_output.textContent);
		iframeDocument.close();
	}
};

const runSalam = (showOutput) => {
	console.log('Running Salam code...');

	const code = elm_code.value.toString().trim();
	if (!code) {
		alert('Code is empty! Please enter Salam code.');
		return;
	}
	
	const args = ['code', code];

	if (!isReady) {
		console.log('Salam runtime not ready. Please wait...');
		return;
	}

	captureOutput(showOutput, args);
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

		if (elm_code.value !== '') {
			runSalam(false);
		}
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
