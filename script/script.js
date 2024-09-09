// Elements
const elm_code = document.querySelector('.code');
const elm_execute = document.querySelector('.execute');
const elm_output = document.querySelector('.output');
const elm_error = document.querySelector('.error');
const elm_iframe = document.querySelector('.iframe');

// Const variables
const args = ['code', ''];

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
		console.log(text);
	},
};

// Functions
const captureOutput = (showOutput, arguments) => {
	console.log("Capture Output: ", arguments);
	
	if (showOutput === true) {
		if (elm_iframe.style.right === "50%") {
			elm_iframe.style.right = "150%";
		} else if (elm_iframe.style.right === "150%") {
			elm_iframe.style.right = "50%";
		} else {
			elm_iframe.style.right = "50%";
		}
	}

	elm_output.textContent = '';

	let output = '';
	const originalConsoleLog = console.log;
	console.log = (text) => output += text + '\n';

	let error = '';
	const originalConsoleError = console.error;
	console.error = (text) => error += text + '\n';

	callMain(arguments);

	console.log = originalConsoleLog;
	console.error = originalConsoleError;

	elm_output.textContent = output;
	elm_error.textContent = error;

	const iframeDocument = elm_iframe.contentDocument || elm_iframe.contentWindow.document;
	if (iframeDocument) {
		iframeDocument.open();
		iframeDocument.write(output);
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

	args[1] = code;

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
