// Elements
const elm_code = document.querySelector('.code');
const elm_execute = document.querySelector('.execute');
const elm_output = document.querySelector('.output');
const elm_error = document.querySelector('.error');
const elm_iframe = document.querySelector('.iframe');
const elm_header = document.querySelector('header');
const elm_save = document.querySelector('.save');
const elm_setting_btn = document.querySelector(".setting")
const elm_setting_modal = document.querySelector(".setting_modal")
const elm_overlay = document.querySelector(".overlay")
const elm_refactor = document.querySelector(".refactor")
const elm_login_btn = document.querySelector(".login")

// Setting Element
const elm_editor_mode_1 = document.querySelector(".editor_mode1")
const elm_editor_mode_2 = document.querySelector(".editor_mode2")

// Const variables
const APP_URL = "https://api.salamlang.ir"

// Variables
let token;
let isReady = false;
let toggleStatus = 1

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
function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

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
    if (toggleStatus === 1) {
        elm_header.style.width = "49%"
        elm_code.style.width = "49%"
        document.body.style.alignItems = "start"
        document.body.style.paddingRight = "10px"
        elm_iframe.style.width = "49%"
        elm_iframe.style.right = "75%"
        elm_iframe.style.height = "calc(100% - 22px)"
        elm_execute.disabled = true
    } else {
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

const checkDefault = () => {
    if (localStorage.getItem("toggle")) {
        toggleStatus = parseInt(localStorage.getItem("toggle"))
        if (toggleStatus === 1) {
            elm_editor_mode_2.classList.add("active")
        } else {
            elm_editor_mode_1.classList.add("active")
        }
    } else {
        toggleStatus = 1
        elm_editor_mode_2.classList.add("active")
    }
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

    elm_output.textContent = '';
    elm_error.textContent = '';

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

const runLint = () => {
    console.log('Running Salam lint...');

    if (!isReady) {
        console.log('Salam runtime not ready. Please wait...');
        return;
    }

    const code = elm_code.value.toString().trim();
    if (!code) {
        return;
    }

    const arguments = ['lint', 'code', code];

    const res = captureLint(arguments);
    if (res !== null) {
        elm_code.value = res.trim();
    }
};

const runSalam = (showOutput) => {
    console.log('Running Salam code...');

    if (!isReady) {
        console.log('Salam runtime not ready. Please wait...');
        return;
    }

    const code = elm_code.value.toString().trim();
    if (!code) {
        Swal.fire({
            icon: "error",
            title: "کد نمیتواند خالی اجرا شود",
            text: "لطفا کدی نوشته و سپس ان را اجرا کنید",
        });
        return;
    }

    const arguments = ['code', code];

    captureOutput(showOutput, arguments);
};

const get_login = () => {
    Swal.fire({
        icon: "error",
        title: "لطفا در سایت وارد شوید!",
        text: "برای دسترسی به این قسمت باید در سایت وارد شوید",
    });
}

const in_login = () => {
    console.log("loggined");
}

const save_code = () => {
    Swal.fire({
        title: "عنوان کد را وارد کنید.",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        customClass: {
            confirmButton: "save_btn_after"
        },
        preConfirm: (login) => {
            if (login !== "") {
                let xhr = new XMLHttpRequest();

                xhr.onload = function () {
                    if (JSON.parse(xhr.response).status === true) {                        
                        Swal.fire({
                            icon: "success",
                            title: "کد شما ذخیره شد.",
                            html: `<a href='${JSON.parse(xhr.response).data.url}'>مشاهده</a>`
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "کد نمیتواند خالی باشد.",
                        });
                    }
                };
                xhr.open("POST", APP_URL + "/api/v1/codes/save");
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xhr.setRequestHeader('Authorization', token);
                xhr.send(JSON.stringify({
                    title: login,
                    code: elm_code.value
                }));
            } else {
                Swal.fire({
                    icon: "error",
                    title: "لطفا اطلاعات را درست وارد نمایید",
                    text: "فیلد عنوان نباید خالی باشد",
                });
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    })
}

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
        runSalam(false);
    }
});

window.addEventListener('load', () => {
    elm_code.focus();

    checkDefault();

    if (getCookie("token") !== "") {
        token = getCookie("token")
    } else {
        token = null
    }

    if (token !== null) {
        let xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (JSON.parse(xhr.response).status === true) {
                in_login()
            } else {
                elm_login_btn.style.display = "flex"
            }
        };
        xhr.open("GET", APP_URL + "/api/v1/verify_token");
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Authorization', token);
        xhr.send();
    } else {
        elm_login_btn.style.display = "flex"
    }

    if (localStorage.getItem("cache-code")) {
        elm_code.value = localStorage.getItem("cache-code").toString().trim();
    }
});

elm_editor_mode_1.addEventListener("click", () => {
    toggleStatus = 0
    localStorage.setItem("toggle", toggleStatus)
    elm_editor_mode_1.classList.add("active")
    elm_editor_mode_2.classList.remove("active")
    togglePosition()
})

elm_editor_mode_2.addEventListener("click", () => {
    toggleStatus = 1
    localStorage.setItem("toggle", toggleStatus)
    elm_editor_mode_2.classList.add("active")
    elm_editor_mode_1.classList.remove("active")
    togglePosition()
})

elm_save.addEventListener("click", () => {
    if (token !== null) {
        let xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (JSON.parse(xhr.response).status === true) {
                save_code()
            } else {
                get_login()
            }
        };
        xhr.open("GET", APP_URL + "/api/v1/verify_token");
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Authorization', token);
        xhr.send();
    } else {
        get_login()
    }
})

elm_setting_btn.addEventListener("click", () => {
    elm_setting_modal.style.opacity = "0"
    elm_setting_modal.style.display = "block"
    elm_overlay.style.opacity = "0"
    elm_overlay.style.display = "block"
    setTimeout(() => {
        elm_setting_modal.style.opacity = "1"
        elm_overlay.style.opacity = "1"
    }, 0)
})

elm_overlay.addEventListener("click", () => {
    elm_setting_modal.style.opacity = "0"
    elm_overlay.style.opacity = "0"
    setTimeout(() => {
        elm_setting_modal.style.display = "none"
        elm_overlay.style.display = "none"
    }, 300)
})

elm_refactor.addEventListener("click", () => {
    runSalam()
    if (elm_error.innerHTML === "") {
        runLint()
    } else {
        console.log(elm_error.innerHTM);

        Swal.fire({
            icon: "error",
            title: "کد نمیتواند تمیز شود",
            text: "کدی که نوشته اید دارای ارور میباشد.",
        });
    }
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

// Disable Btn
setTimeout(() => {
    if (toggleStatus === 1) {
        console.log("Sdc");

        elm_execute.disabled = true
    }
}, 300)