// Elements
const elm_code = document.querySelector(".code");
// const elm_highlighte = document.querySelector(".highlighted-code");
const elm_execute = document.querySelector(".execute");
const elm_output = document.querySelector(".output");
const elm_error = document.querySelector(".error");
const elm_iframe = document.querySelector(".iframe");
const elm_header = document.querySelector("header");
const elm_save = document.querySelector(".save");
const elm_setting_btn = document.querySelector(".setting");
const elm_setting_modal = document.querySelector(".setting_modal");
const elm_overlay = document.querySelector(".overlay");
const elm_refactor = document.querySelector(".refactor");
const elm_login_btn = document.querySelector(".login");
const elm_logout_btn = document.querySelector(".logout");
// Setting Element
const elm_editor_mode_1 = document.querySelector(".editor_mode1");
const elm_editor_mode_2 = document.querySelector(".editor_mode2");
const elm_editor_light = document.querySelector(".editor_light");
const elm_editor_dark = document.querySelector(".editor_dark");

// Const variables
const APP_URL = "https://auth.salamlang.ir";
const APP_URL_VERIFY_TOKEN = APP_URL + "/api/v1/verify_token";
const APP_URL_SAVE = APP_URL + "/api/v1/codes/save";
const APP_URL_GET_CODE = APP_URL + "/api/v1/code/"; // + @uuid
const DEFAULT_CODE = `صفحه:
	محتوا = «<سلام دنیا> زبان سلام»
	اندازه فونت = ۱۰۰
تمام`;
const keywords = ["صفحه", "قطعه", "جعبه", "پاراگراف", "تمام"];

// Variables
let token;
let isReady = false;
let toggleStatus = 1;
let theme = "dark";

// Global variables
var Module = {
	noInitialRun: true,
	onRuntimeInitialized: () => {
		console.log("Salam loaded successfully");

		isReady = true;

		elm_execute.disabled = !isReady;

		if (elm_code.value !== "") {
			runSalam(false);
		}
	},
	print: (text) => {
		displayOutput(text);
	},
	printErr: (text) => {
		displayError(text);
	},
	onExit: (status) => {
		console.log(`Program exited with status: ${status}`);
		elm_execute.disabled = true;
	},
};

// Functions
const handleInput = () => {
	console.log("handleInput");
	const inputText = elm_code.value.toString().trim();

	// highlightCode(inputText);

	localStorage.setItem("cache-code", inputText);

	if (toggleStatus === 1) {
		runSalam(false);
	}
};

const debounce = (func, delay) => {
	console.log("debounce", delay);
	let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const restartRuntime = () => {
	console.log("Restarting runtime...");

	Module.onRuntimeInitialized();
	Module._main();
};

const getCookie = (cookie_name) => {
	const name = cookie_name + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];

		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}

		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}

	return "";
};

const displayOutput = (text) => {
	console.log("Output: ", text);

	elm_output.textContent += text + "\n";
};

const displayError = (text) => {
	console.error("Error: ", text);

	// TODO: Ignore keepRuntimeAlive() warning
	if (text === "program exited (with status: 2), but keepRuntimeAlive() is set (counter=0) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)") {
		return;
	}

	elm_error.textContent += text + "<br>";
};

const toggleIframePosition = () => {
	if (toggleStatus === 1) {
		if (elm_iframe.style.right === "50%") {
			elm_iframe.style.right = "150%";
		} else {
			elm_iframe.style.right = "50%";
		}
	}
};

const togglePosition = () => {
	if (toggleStatus === 1) {
		elm_header.style.width = "49%";
		elm_code.style.width = "49%";
		document.body.style.alignItems = "start";
		document.body.style.paddingRight = "10px";
		elm_iframe.style.width = "calc(50% - 10px)";
		elm_iframe.style.right = "75%";
		elm_iframe.style.height = "calc(100% - 22px)";

		// elm_execute.disabled = true;
	} else {
		elm_header.style.width = "98%";
		elm_code.style.width = "98%";

		setTimeout(() => {
			document.body.style.alignItems = "center";
		}, 300);

		document.body.style.paddingRight = "0px";
		elm_iframe.style.width = "98%";
		elm_iframe.style.right = "150%";
		elm_iframe.style.height = "calc(100% - 99px)";

		// elm_execute.disabled = false;
	}
};

const changeTheme = () => {
	if (theme === "dark") {
		document.querySelector("html").classList.add("dark");
	} else {
		document.querySelector("html").classList.remove("dark");
	}
};

const checkDefault = () => {
	if (localStorage.getItem("toggle")) {
		toggleStatus = parseInt(localStorage.getItem("toggle"));

		if (toggleStatus === 1) {
			elm_editor_mode_2.classList.add("active");
		} else {
			elm_editor_mode_1.classList.add("active");
		}
	} else {
		toggleStatus = 1;

		elm_editor_mode_2.classList.add("active");
	}

	if (localStorage.getItem("theme")) {
		theme = localStorage.getItem("theme");

		if (theme === "dark") {
			elm_editor_dark.classList.add("active");
		} else {
			elm_editor_light.classList.add("active");
		}
	}

	changeTheme();

	togglePosition();
}

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

const captureLint = (arguments) => {
	console.log("Capture Lint: ", arguments);

	elm_output.textContent = "";
	elm_error.textContent = "";

	try {
		const exitCode = callMain(arguments);

		if (exitCode !== 0) {
			return null;
		} else {
			return elm_output.textContent;
		}
	} catch (err) {
		return null;
	}
};

const captureOutput = (showOutput, arguments) => {
	console.log("Capture Output: ", arguments);

	elm_output.textContent = "";
	elm_error.textContent = "";

	if (showOutput) {
		toggleIframePosition();
	}

	try {
		const exitCode = callMain(arguments);

		if (exitCode !== 0) {
			elm_error.innerHTML = "برنامه با خطا مواجه شد.<br>" + elm_error.textContent;
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

		elm_error.innerHTML = "خطای غیرمنتظره رخ داد.<br>" + err;
		showErrorInIframe();
	} finally {
		if (Module.noInitialRun) {
			// restartRuntime();
		}
	}
};

const runLint = () => {
	console.log("Running Salam lint...");

	if (!isReady) {
		console.log("Salam runtime not ready. Please wait...");
		return;
	}

	const code = elm_code.value.toString().trim();
	if (!code) {
		return;
	}

	const arguments = ["lint", "code", code];

	const res = captureLint(arguments);
	if (res !== null) {
		elm_code.value = res.toString().trim();
	}
};

const runSalam = (showOutput) => {
	console.log("Running Salam code...");

	if (!isReady) {
		console.log("Salam runtime not ready. Please wait...");
		return;
	}

	const rawCode = elm_code.value;
	if (!rawCode) {
		elm_error.innerHTML = "";
		elm_output.innerHTML = "";

		if (showOutput === true) {
			Swal.fire({
				icon: "error",
				title: "اجرای کد",
				text: "لطفا ابتدا کد خود را بنویسید.",
			});
		}

		return;
	}

	const arguments = ["code", rawCode];

	captureOutput(showOutput, arguments);
};

const get_login = () => {
	Swal.fire({
		icon: "error",
		title: "عدم دسترسی",
		text: "برای دسترسی به این قسمت باید وارد شوید",
	});
};

const in_login = () => { };

const save_code = () => {
	const code = elm_code.value.toString().trim();
	if (!code) {
		Swal.fire({
			icon: "error",
			title: "ذخیره کد",
			text: "لطفا ابتدا کد خود را بنویسید.",
		});

		return;
	}

	Swal.fire({
		title: "عنوان کد را وارد کنید.",
		input: "text",
		inputAttributes: {
			autocapitalize: "off",
		},
		showCancelButton: true,
		confirmButtonText: "Look up",
		showLoaderOnConfirm: true,
		customClass: {
			confirmButton: "save_btn_after",
		},
		preConfirm: (login) => {
			if (login !== "") {
				const xhr = new XMLHttpRequest();
				xhr.onload = () => {
					const obj = JSON.parse(xhr.response);
					if (obj.status === true && obj.data && obj.data.slug) {
						Swal.fire({
							icon: "success",
							title: "کد شما ذخیره شد.",
							html: `<a href="/?code=${obj.data.slug}" class="see_btn">مشاهده</a>`,
						});
					} else {
						Swal.fire({
							icon: "error",
							title: "مشکلی در ذخیره کد رخ داده است!",
						});
					}
				};
				xhr.open("POST", APP_URL_SAVE);
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				xhr.setRequestHeader("Authorization", token);

				xhr.send(JSON.stringify({
					title: login,
					code: elm_code.value,
				}));
			} else {
				Swal.fire({
					icon: "error",
					title: "ذخیره کد",
					text: "مقدار عنوان نباید خالی باشد.",
				}).then((res) => {
					if (res.isConfirmed) {
						save_code();
					}
				});
			}
		},

		allowOutsideClick: () => !Swal.isLoading(),
	});
};

// const highlightCode = (code) => {
// 	const highlightedText = code.replace(
// 		new RegExp(`\\b(${keywords.join("|")})\\b`, "g"),
// 		`<span style="background-color: yellow;">$1</span>`
// 	);
// 	console.log("highlightCode", code, keywords, highlightedText);
// 
// 	elm_highlighte.innerHTML = highlightedText;
// };

// Events
elm_execute.addEventListener("click", () => {
	runSalam(true);
});

elm_code.addEventListener("keydown", (event) => {
	if (event.key === "Tab") {
		event.preventDefault();

		const textarea = event.target;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;

		textarea.value = textarea.value.substring(0, start) + "\t" + textarea.value.substring(end);
		textarea.selectionStart = textarea.selectionEnd = start + 1;
	}
});

elm_code.addEventListener("input", debounce(handleInput, 300));

if (elm_logout_btn) elm_logout_btn.addEventListener("click", () => {
	document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.salamlang.ir;";

	location.reload();
});

elm_editor_mode_1.addEventListener("click", () => {
	toggleStatus = 0;

	localStorage.setItem("toggle", toggleStatus);

	elm_editor_mode_1.classList.add("active");
	elm_editor_mode_2.classList.remove("active");

	togglePosition();
});

elm_editor_mode_2.addEventListener("click", () => {
	toggleStatus = 1;

	localStorage.setItem("toggle", toggleStatus);

	elm_editor_mode_2.classList.add("active");
	elm_editor_mode_1.classList.remove("active");

	togglePosition();
});

elm_editor_dark.addEventListener("click", () => {
	theme = "dark";

	localStorage.setItem("theme", theme);

	elm_editor_dark.classList.add("active");
	elm_editor_light.classList.remove("active");

	changeTheme();
});

elm_editor_light.addEventListener("click", () => {
	theme = "light";

	localStorage.setItem("theme", theme);

	elm_editor_dark.classList.remove("active");
	elm_editor_light.classList.add("active");

	changeTheme();
});

elm_save.addEventListener("click", () => {
	if (token !== null) {
		const xhr = new XMLHttpRequest();
		xhr.onload = () => {
			const obj = JSON.parse(xhr.response);
			if (obj.status === true) {
				save_code();
			} else {
				get_login();
			}
		};
		xhr.open("GET", APP_URL_VERIFY_TOKEN);
		xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
		xhr.setRequestHeader("Authorization", token);
		xhr.send();
	} else {
		get_login();
	}
});

elm_setting_btn.addEventListener("click", () => {
	elm_setting_modal.style.opacity = "0";
	elm_setting_modal.style.display = "block";
	elm_overlay.style.opacity = "0";
	elm_overlay.style.display = "block";

	setTimeout(() => {
		elm_setting_modal.style.opacity = "1";
		elm_overlay.style.opacity = "1";
	}, 0);
});

elm_overlay.addEventListener("click", () => {
	elm_setting_modal.style.opacity = "0";
	elm_overlay.style.opacity = "0";

	setTimeout(() => {
		elm_setting_modal.style.display = "none";
		elm_overlay.style.display = "none";
	}, 300);
});

elm_refactor.addEventListener("click", () => {
	runSalam(true);

	if (elm_error.innerHTML === "") {
		runLint();
	} else {
		console.log(elm_error.innerHTM);

		Swal.fire({
			icon: "error",
			title: "تمیز کردن کد",
			text: "کد شما خطا دارد. لطفا خطای آن را برطرف کنید.",
		});
	}
});

// Init
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "salam-wa.js";
document.body.appendChild(script);

window.addEventListener("load", () => {
	elm_code.focus();

	// if (toggleStatus === 1) {
	// 	elm_execute.disabled = true;
	// }

	checkDefault();

	token = getCookie("token");
	if (token !== "") {
		token = getCookie("token");
	} else {
		token = null;
	}

	const codeParam = new URLSearchParams(window.location.search).get("code");
	console.log("CodeParam: ", codeParam);

	if (codeParam !== null) {
		const xhr = new XMLHttpRequest();
		
		xhr.onload = () => {
			const obj = JSON.parse(xhr.response);
			if (obj.status === true) {
				elm_code.value = obj.data.code.toString().trim();
			} else {
				const cache_code = localStorage.getItem("cache-code").toString();
				if (cache_code && cache_code.trim() !== "") {
					elm_code.value = cache_code;
				} else {
					elm_code.value = DEFAULT_CODE;
				}
			}
		};
		xhr.open("GET", APP_URL_GET_CODE + codeParam);
		xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
		xhr.setRequestHeader("Authorization", token);
		xhr.send();
	}
	else {
		if (localStorage.getItem("cache-code")) {
			elm_code.value = localStorage.getItem("cache-code").toString().trim();
		} else {
			elm_code.value = DEFAULT_CODE;
		}
	}

	if (token !== null) {
		const xhr = new XMLHttpRequest();

		xhr.onload = () => {
			const obj = JSON.parse(xhr.response);
			if (obj.status === true) {
				in_login();

				if (elm_logout_btn) elm_logout_btn.style.display = "flex";
			} else {
				if (elm_login_btn) elm_login_btn.style.display = "flex";
			}
		};
		xhr.open("GET", APP_URL_VERIFY_TOKEN);
		xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
		xhr.setRequestHeader("Authorization", token);
		xhr.send();
	} else {
		if (elm_login_btn) elm_login_btn.style.display = "flex";
	}
});

// Cache
// if ("serviceWorker" in navigator) {
// 	navigator.serviceWorker.register("/script/service-worker.js").then(() => {
// 		console.log("Service Worker Registered");
// 	})
// 		.catch(error => {
// 			console.log("Service Worker Registration Failed:", error);
// 		});
// }
