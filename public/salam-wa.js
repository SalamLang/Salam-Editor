var Module = typeof Module < "u" ? Module : {}, moduleOverrides = Object.assign({}, Module), arguments_ = [],
    thisProgram = "./this.program", quit_ = (e, t) => {
        throw t
    }, ENVIRONMENT_IS_WEB = typeof window == "object", ENVIRONMENT_IS_WORKER = typeof importScripts == "function",
    ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string",
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
if (Module.ENVIRONMENT) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
var scriptDirectory = "";

function locateFile(e) {
    return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e
}

var read_, readAsync, readBinary, setWindowTitle;

function logExceptionOnExit(e) {
    if (e instanceof ExitStatus) return;
    let t = e;
    e && typeof e == "object" && e.stack && (t = [e, e.stack]), err("exiting due to exception: " + t)
}

var fs, nodePath, requireNodeFS;
if (ENVIRONMENT_IS_NODE) {
    if (!(typeof process == "object" && typeof require == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    ENVIRONMENT_IS_WORKER ? scriptDirectory = require("path").dirname(scriptDirectory) + "/" : scriptDirectory = __dirname + "/", requireNodeFS = () => {
        nodePath || (fs = require("fs"), nodePath = require("path"))
    }, read_ = function (t, r) {
        return requireNodeFS(), t = nodePath.normalize(t), fs.readFileSync(t, r ? void 0 : "utf8")
    }, readBinary = e => {
        var t = read_(e, !0);
        return t.buffer || (t = new Uint8Array(t)), assert(t.buffer), t
    }, readAsync = (e, t, r) => {
        requireNodeFS(), e = nodePath.normalize(e), fs.readFile(e, function (n, o) {
            n ? r(n) : t(o.buffer)
        })
    }, process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), arguments_ = process.argv.slice(2), typeof module < "u" && (module.exports = Module), process.on("uncaughtException", function (e) {
        if (!(e instanceof ExitStatus)) throw e
    }), process.on("unhandledRejection", function (e) {
        throw e
    }), quit_ = (e, t) => {
        if (keepRuntimeAlive()) throw process.exitCode = e, t;
        logExceptionOnExit(t), process.exit(e)
    }, Module.inspect = function () {
        return "[Emscripten Module object]"
    }
} else if (ENVIRONMENT_IS_SHELL) {
    if (typeof process == "object" && typeof require == "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    typeof read < "u" && (read_ = function (t) {
        return read(t)
    }), readBinary = function (t) {
        let r;
        return typeof readbuffer == "function" ? new Uint8Array(readbuffer(t)) : (r = read(t, "binary"), assert(typeof r == "object"), r)
    }, readAsync = function (t, r, n) {
        setTimeout(() => r(readBinary(t)), 0)
    }, typeof scriptArgs < "u" ? arguments_ = scriptArgs : typeof arguments < "u" && (arguments_ = arguments), typeof quit == "function" && (quit_ = (e, t) => {
        logExceptionOnExit(t), quit(e)
    }), typeof print < "u" && (typeof console > "u" && (console = {}), console.log = print, console.warn = console.error = typeof printErr < "u" ? printErr : print)
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER ? scriptDirectory = self.location.href : typeof document < "u" && document.currentScript && (scriptDirectory = document.currentScript.src), scriptDirectory.indexOf("blob:") !== 0 ? scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1) : scriptDirectory = "", !(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
    read_ = e => {
        var t = new XMLHttpRequest;
        return t.open("GET", e, !1), t.send(null), t.responseText
    }, ENVIRONMENT_IS_WORKER && (readBinary = e => {
        var t = new XMLHttpRequest;
        return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
    }), readAsync = (e, t, r) => {
        var n = new XMLHttpRequest;
        n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = () => {
            if (n.status == 200 || n.status == 0 && n.response) {
                t(n.response);
                return
            }
            r()
        }, n.onerror = r, n.send(null)
    }, setWindowTitle = e => document.title = e
} else throw new Error("environment detection error");
var out = Module.print || console.log.bind(console), err = Module.printErr || console.warn.bind(console);
Object.assign(Module, moduleOverrides), moduleOverrides = null, Module.arguments && (arguments_ = Module.arguments), Object.getOwnPropertyDescriptor(Module, "arguments") || Object.defineProperty(Module, "arguments", {
    configurable: !0,
    get: function () {
        abort("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), Module.thisProgram && (thisProgram = Module.thisProgram), Object.getOwnPropertyDescriptor(Module, "thisProgram") || Object.defineProperty(Module, "thisProgram", {
    configurable: !0,
    get: function () {
        abort("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), Module.quit && (quit_ = Module.quit), Object.getOwnPropertyDescriptor(Module, "quit") || Object.defineProperty(Module, "quit", {
    configurable: !0,
    get: function () {
        abort("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), assert(typeof Module.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), assert(typeof Module.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), assert(typeof Module.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), assert(typeof Module.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), assert(typeof Module.read > "u", "Module.read option was removed (modify read_ in JS)"), assert(typeof Module.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), assert(typeof Module.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), assert(typeof Module.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)"), assert(typeof Module.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), Object.getOwnPropertyDescriptor(Module, "read") || Object.defineProperty(Module, "read", {
    configurable: !0,
    get: function () {
        abort("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), Object.getOwnPropertyDescriptor(Module, "readAsync") || Object.defineProperty(Module, "readAsync", {
    configurable: !0,
    get: function () {
        abort("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), Object.getOwnPropertyDescriptor(Module, "readBinary") || Object.defineProperty(Module, "readBinary", {
    configurable: !0,
    get: function () {
        abort("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), Object.getOwnPropertyDescriptor(Module, "setWindowTitle") || Object.defineProperty(Module, "setWindowTitle", {
    configurable: !0,
    get: function () {
        abort("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
});
var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js",
    PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js",
    WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js",
    NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";
assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");
var STACK_ALIGN = 16, POINTER_SIZE = 4;

function getNativeTypeSize(e) {
    switch (e) {
        case"i1":
        case"i8":
            return 1;
        case"i16":
            return 2;
        case"i32":
            return 4;
        case"i64":
            return 8;
        case"float":
            return 4;
        case"double":
            return 8;
        default: {
            if (e[e.length - 1] === "*") return POINTER_SIZE;
            if (e[0] === "i") {
                const t = Number(e.substr(1));
                return assert(t % 8 === 0, "getNativeTypeSize invalid bits " + t + ", type " + e), t / 8
            } else return 0
        }
    }
}

function warnOnce(e) {
    warnOnce.shown || (warnOnce.shown = {}), warnOnce.shown[e] || (warnOnce.shown[e] = 1, err(e))
}

function convertJsFunctionToWasm(e, t) {
    if (typeof WebAssembly.Function == "function") {
        for (var r = {i: "i32", j: "i64", f: "f32", d: "f64"}, n = {
            parameters: [],
            results: t[0] == "v" ? [] : [r[t[0]]]
        }, o = 1; o < t.length; ++o) n.parameters.push(r[t[o]]);
        return new WebAssembly.Function(n, e)
    }
    var i = [1, 0, 1, 96], a = t.slice(0, 1), s = t.slice(1), d = {i: 127, j: 126, f: 125, d: 124};
    i.push(s.length);
    for (var o = 0; o < s.length; ++o) i.push(d[s[o]]);
    a == "v" ? i.push(0) : i = i.concat([1, d[a]]), i[1] = i.length - 2;
    var c = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(i, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])),
        l = new WebAssembly.Module(c), u = new WebAssembly.Instance(l, {e: {f: e}}), f = u.exports.f;
    return f
}

var freeTableIndexes = [], functionsInTableMap;

function getEmptyTableSlot() {
    if (freeTableIndexes.length) return freeTableIndexes.pop();
    try {
        wasmTable.grow(1)
    } catch (e) {
        throw e instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : e
    }
    return wasmTable.length - 1
}

function updateTableMap(e, t) {
    for (var r = e; r < e + t; r++) {
        var n = getWasmTableEntry(r);
        n && functionsInTableMap.set(n, r)
    }
}

function addFunction(e, t) {
    if (assert(typeof e < "u"), functionsInTableMap || (functionsInTableMap = new WeakMap, updateTableMap(0, wasmTable.length)), functionsInTableMap.has(e)) return functionsInTableMap.get(e);
    var r = getEmptyTableSlot();
    try {
        setWasmTableEntry(r, e)
    } catch (o) {
        if (!(o instanceof TypeError)) throw o;
        assert(typeof t < "u", "Missing signature argument to addFunction: " + e);
        var n = convertJsFunctionToWasm(e, t);
        setWasmTableEntry(r, n)
    }
    return functionsInTableMap.set(e, r), r
}

function removeFunction(e) {
    functionsInTableMap.delete(getWasmTableEntry(e)), freeTableIndexes.push(e)
}

var tempRet0 = 0, setTempRet0 = e => {
    tempRet0 = e
}, getTempRet0 = () => tempRet0, wasmBinary;
Module.wasmBinary && (wasmBinary = Module.wasmBinary), Object.getOwnPropertyDescriptor(Module, "wasmBinary") || Object.defineProperty(Module, "wasmBinary", {
    configurable: !0,
    get: function () {
        abort("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
});
var noExitRuntime = Module.noExitRuntime || !0;
Object.getOwnPropertyDescriptor(Module, "noExitRuntime") || Object.defineProperty(Module, "noExitRuntime", {
    configurable: !0,
    get: function () {
        abort("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), typeof WebAssembly != "object" && abort("no native wasm support detected");

function setValue(e, t, r = "i8", n) {
    switch (r.charAt(r.length - 1) === "*" && (r = "i32"), r) {
        case"i1":
            HEAP8[e >> 0] = t;
            break;
        case"i8":
            HEAP8[e >> 0] = t;
            break;
        case"i16":
            HEAP16[e >> 1] = t;
            break;
        case"i32":
            HEAP32[e >> 2] = t;
            break;
        case"i64":
            tempI64 = [t >>> 0, (tempDouble = t, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[e >> 2] = tempI64[0], HEAP32[e + 4 >> 2] = tempI64[1];
            break;
        case"float":
            HEAPF32[e >> 2] = t;
            break;
        case"double":
            HEAPF64[e >> 3] = t;
            break;
        default:
            abort("invalid type for setValue: " + r)
    }
}

function getValue(e, t = "i8", r) {
    switch (t.charAt(t.length - 1) === "*" && (t = "i32"), t) {
        case"i1":
            return HEAP8[e >> 0];
        case"i8":
            return HEAP8[e >> 0];
        case"i16":
            return HEAP16[e >> 1];
        case"i32":
            return HEAP32[e >> 2];
        case"i64":
            return HEAP32[e >> 2];
        case"float":
            return HEAPF32[e >> 2];
        case"double":
            return Number(HEAPF64[e >> 3]);
        default:
            abort("invalid type for getValue: " + t)
    }
    return null
}

var wasmMemory, ABORT = !1, EXITSTATUS;

function assert(e, t) {
    e || abort("Assertion failed" + (t ? ": " + t : ""))
}

function getCFunc(e) {
    var t = Module["_" + e];
    return assert(t, "Cannot call unknown function " + e + ", make sure it is exported"), t
}

function ccall(e, t, r, n, o) {
    var i = {
        string: function (p) {
            var O = 0;
            if (p != null && p !== 0) {
                var g = (p.length << 2) + 1;
                O = stackAlloc(g), stringToUTF8(p, O, g)
            }
            return O
        }, array: function (p) {
            var O = stackAlloc(p.length);
            return writeArrayToMemory(p, O), O
        }
    };

    function a(p) {
        return t === "string" ? UTF8ToString(p) : t === "boolean" ? !!p : p
    }

    var s = getCFunc(e), d = [], c = 0;
    if (assert(t !== "array", 'Return type should not be "array".'), n) for (var l = 0; l < n.length; l++) {
        var u = i[r[l]];
        u ? (c === 0 && (c = stackSave()), d[l] = u(n[l])) : d[l] = n[l]
    }
    var f = s.apply(null, d);

    function E(p) {
        return c !== 0 && stackRestore(c), a(p)
    }

    return f = E(f), f
}

function cwrap(e, t, r, n) {
    return function () {
        return ccall(e, t, r, arguments, n)
    }
}

function _free() {
    abort("free() called but not included in the build - add '_free' to EXPORTED_FUNCTIONS")
}

var ALLOC_NORMAL = 0, ALLOC_STACK = 1;

function allocate(e, t) {
    var r;
    return assert(typeof t == "number", "allocate no longer takes a type argument"), assert(typeof e != "number", "allocate no longer takes a number as arg0"), t == ALLOC_STACK ? r = stackAlloc(e.length) : r = _malloc(e.length), !e.subarray && !e.slice && (e = new Uint8Array(e)), HEAPU8.set(e, r), r
}

var UTF8Decoder = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;

function UTF8ArrayToString(e, t, r) {
    for (var n = t + r, o = t; e[o] && !(o >= n);) ++o;
    if (o - t > 16 && e.subarray && UTF8Decoder) return UTF8Decoder.decode(e.subarray(t, o));
    for (var i = ""; t < o;) {
        var a = e[t++];
        if (!(a & 128)) {
            i += String.fromCharCode(a);
            continue
        }
        var s = e[t++] & 63;
        if ((a & 224) == 192) {
            i += String.fromCharCode((a & 31) << 6 | s);
            continue
        }
        var d = e[t++] & 63;
        if ((a & 240) == 224 ? a = (a & 15) << 12 | s << 6 | d : ((a & 248) != 240 && warnOnce("Invalid UTF-8 leading byte 0x" + a.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), a = (a & 7) << 18 | s << 12 | d << 6 | e[t++] & 63), a < 65536) i += String.fromCharCode(a); else {
            var c = a - 65536;
            i += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023)
        }
    }
    return i
}

function UTF8ToString(e, t) {
    return e ? UTF8ArrayToString(HEAPU8, e, t) : ""
}

function stringToUTF8Array(e, t, r, n) {
    if (!(n > 0)) return 0;
    for (var o = r, i = r + n - 1, a = 0; a < e.length; ++a) {
        var s = e.charCodeAt(a);
        if (s >= 55296 && s <= 57343) {
            var d = e.charCodeAt(++a);
            s = 65536 + ((s & 1023) << 10) | d & 1023
        }
        if (s <= 127) {
            if (r >= i) break;
            t[r++] = s
        } else if (s <= 2047) {
            if (r + 1 >= i) break;
            t[r++] = 192 | s >> 6, t[r++] = 128 | s & 63
        } else if (s <= 65535) {
            if (r + 2 >= i) break;
            t[r++] = 224 | s >> 12, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | s & 63
        } else {
            if (r + 3 >= i) break;
            s > 1114111 && warnOnce("Invalid Unicode code point 0x" + s.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), t[r++] = 240 | s >> 18, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | s & 63
        }
    }
    return t[r] = 0, r - o
}

function stringToUTF8(e, t, r) {
    return assert(typeof r == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), stringToUTF8Array(e, HEAPU8, t, r)
}

function lengthBytesUTF8(e) {
    for (var t = 0, r = 0; r < e.length; ++r) {
        var n = e.charCodeAt(r);
        n >= 55296 && n <= 57343 && (n = 65536 + ((n & 1023) << 10) | e.charCodeAt(++r) & 1023), n <= 127 ? ++t : n <= 2047 ? t += 2 : n <= 65535 ? t += 3 : t += 4
    }
    return t
}

function AsciiToString(e) {
    for (var t = ""; ;) {
        var r = HEAPU8[e++ >> 0];
        if (!r) return t;
        t += String.fromCharCode(r)
    }
}

function stringToAscii(e, t) {
    return writeAsciiToMemory(e, t, !1)
}

var UTF16Decoder = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;

function UTF16ToString(e, t) {
    assert(e % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
    for (var r = e, n = r >> 1, o = n + t / 2; !(n >= o) && HEAPU16[n];) ++n;
    if (r = n << 1, r - e > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(e, r));
    for (var i = "", a = 0; !(a >= t / 2); ++a) {
        var s = HEAP16[e + a * 2 >> 1];
        if (s == 0) break;
        i += String.fromCharCode(s)
    }
    return i
}

function stringToUTF16(e, t, r) {
    if (assert(t % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!"), assert(typeof r == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), r === void 0 && (r = 2147483647), r < 2) return 0;
    r -= 2;
    for (var n = t, o = r < e.length * 2 ? r / 2 : e.length, i = 0; i < o; ++i) {
        var a = e.charCodeAt(i);
        HEAP16[t >> 1] = a, t += 2
    }
    return HEAP16[t >> 1] = 0, t - n
}

function lengthBytesUTF16(e) {
    return e.length * 2
}

function UTF32ToString(e, t) {
    assert(e % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
    for (var r = 0, n = ""; !(r >= t / 4);) {
        var o = HEAP32[e + r * 4 >> 2];
        if (o == 0) break;
        if (++r, o >= 65536) {
            var i = o - 65536;
            n += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023)
        } else n += String.fromCharCode(o)
    }
    return n
}

function stringToUTF32(e, t, r) {
    if (assert(t % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!"), assert(typeof r == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), r === void 0 && (r = 2147483647), r < 4) return 0;
    for (var n = t, o = n + r - 4, i = 0; i < e.length; ++i) {
        var a = e.charCodeAt(i);
        if (a >= 55296 && a <= 57343) {
            var s = e.charCodeAt(++i);
            a = 65536 + ((a & 1023) << 10) | s & 1023
        }
        if (HEAP32[t >> 2] = a, t += 4, t + 4 > o) break
    }
    return HEAP32[t >> 2] = 0, t - n
}

function lengthBytesUTF32(e) {
    for (var t = 0, r = 0; r < e.length; ++r) {
        var n = e.charCodeAt(r);
        n >= 55296 && n <= 57343 && ++r, t += 4
    }
    return t
}

function allocateUTF8(e) {
    var t = lengthBytesUTF8(e) + 1, r = _malloc(t);
    return r && stringToUTF8Array(e, HEAP8, r, t), r
}

function allocateUTF8OnStack(e) {
    var t = lengthBytesUTF8(e) + 1, r = stackAlloc(t);
    return stringToUTF8Array(e, HEAP8, r, t), r
}

function writeStringToMemory(e, t, r) {
    warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
    var n, o;
    r && (o = t + lengthBytesUTF8(e), n = HEAP8[o]), stringToUTF8(e, t, 1 / 0), r && (HEAP8[o] = n)
}

function writeArrayToMemory(e, t) {
    assert(e.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"), HEAP8.set(e, t)
}

function writeAsciiToMemory(e, t, r) {
    for (var n = 0; n < e.length; ++n) assert(e.charCodeAt(n) === (e.charCodeAt(n) & 255)), HEAP8[t++ >> 0] = e.charCodeAt(n);
    r || (HEAP8[t >> 0] = 0)
}

function alignUp(e, t) {
    return e % t > 0 && (e += t - e % t), e
}

var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBufferAndViews(e) {
    buffer = e, Module.HEAP8 = HEAP8 = new Int8Array(e), Module.HEAP16 = HEAP16 = new Int16Array(e), Module.HEAP32 = HEAP32 = new Int32Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), Module.HEAPU16 = HEAPU16 = new Uint16Array(e), Module.HEAPU32 = HEAPU32 = new Uint32Array(e), Module.HEAPF32 = HEAPF32 = new Float32Array(e), Module.HEAPF64 = HEAPF64 = new Float64Array(e)
}

var TOTAL_STACK = 8388608;
Module.TOTAL_STACK && assert(TOTAL_STACK === Module.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var INITIAL_MEMORY = Module.INITIAL_MEMORY || 16777216;
Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY") || Object.defineProperty(Module, "INITIAL_MEMORY", {
    configurable: !0,
    get: function () {
        abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")
    }
}), assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")"), assert(typeof Int32Array < "u" && typeof Float64Array < "u" && Int32Array.prototype.subarray != null && Int32Array.prototype.set != null, "JS engine does not provide full typed array support"), assert(!Module.wasmMemory, "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally"), assert(INITIAL_MEMORY == 16777216, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
var wasmTable;

function writeStackCookie() {
    var e = _emscripten_stack_get_end();
    assert((e & 3) == 0), HEAP32[e + 4 >> 2] = 34821223, HEAP32[e + 8 >> 2] = 2310721022, HEAP32[0] = 1668509029
}

function checkStackCookie() {
    if (!ABORT) {
        var e = _emscripten_stack_get_end(), t = HEAPU32[e + 4 >> 2], r = HEAPU32[e + 8 >> 2];
        (t != 34821223 || r != 2310721022) && abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + r.toString(16) + " 0x" + t.toString(16)), HEAP32[0] !== 1668509029 && abort("Runtime error: The application has corrupted its heap memory area (address zero)!")
    }
}

(function () {
    var e = new Int16Array(1), t = new Int8Array(e.buffer);
    if (e[0] = 25459, t[0] !== 115 || t[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)"
})();
var __ATPRERUN__ = [], __ATINIT__ = [], __ATMAIN__ = [], __ATEXIT__ = [], __ATPOSTRUN__ = [], runtimeInitialized = !1,
    runtimeExited = !1, runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
    return noExitRuntime || runtimeKeepaliveCounter > 0
}

function preRun() {
    if (Module.preRun) for (typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]); Module.preRun.length;) addOnPreRun(Module.preRun.shift());
    callRuntimeCallbacks(__ATPRERUN__)
}

function initRuntime() {
    checkStackCookie(), assert(!runtimeInitialized), runtimeInitialized = !0, SOCKFS.root = FS.mount(SOCKFS, {}, null), !Module.noFSInit && !FS.init.initialized && FS.init(), FS.ignorePermissions = !1, TTY.init(), callRuntimeCallbacks(__ATINIT__)
}

function preMain() {
    checkStackCookie(), callRuntimeCallbacks(__ATMAIN__)
}

function exitRuntime() {
    checkStackCookie(), runtimeExited = !0
}

function postRun() {
    if (checkStackCookie(), Module.postRun) for (typeof Module.postRun == "function" && (Module.postRun = [Module.postRun]); Module.postRun.length;) addOnPostRun(Module.postRun.shift());
    callRuntimeCallbacks(__ATPOSTRUN__)
}

function addOnPreRun(e) {
    __ATPRERUN__.unshift(e)
}

function addOnInit(e) {
    __ATINIT__.unshift(e)
}

function addOnPreMain(e) {
    __ATMAIN__.unshift(e)
}

function addOnExit(e) {
}

function addOnPostRun(e) {
    __ATPOSTRUN__.unshift(e)
}

assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var runDependencies = 0, runDependencyWatcher = null, dependenciesFulfilled = null, runDependencyTracking = {};

function getUniqueRunDependency(e) {
    for (var t = e; ;) {
        if (!runDependencyTracking[e]) return e;
        e = t + Math.random()
    }
}

function addRunDependency(e) {
    runDependencies++, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies), e ? (assert(!runDependencyTracking[e]), runDependencyTracking[e] = 1, runDependencyWatcher === null && typeof setInterval < "u" && (runDependencyWatcher = setInterval(function () {
        if (ABORT) {
            clearInterval(runDependencyWatcher), runDependencyWatcher = null;
            return
        }
        var t = !1;
        for (var r in runDependencyTracking) t || (t = !0, err("still waiting on run dependencies:")), err("dependency: " + r);
        t && err("(end of list)")
    }, 1e4))) : err("warning: run dependency added without ID")
}

function removeRunDependency(e) {
    if (runDependencies--, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies), e ? (assert(runDependencyTracking[e]), delete runDependencyTracking[e]) : err("warning: run dependency removed without ID"), runDependencies == 0 && (runDependencyWatcher !== null && (clearInterval(runDependencyWatcher), runDependencyWatcher = null), dependenciesFulfilled)) {
        var t = dependenciesFulfilled;
        dependenciesFulfilled = null, t()
    }
}

Module.preloadedImages = {}, Module.preloadedAudios = {};

function abort(e) {
    Module.onAbort && Module.onAbort(e), e = "Aborted(" + e + ")", err(e), ABORT = !0, EXITSTATUS = 1;
    var t = new WebAssembly.RuntimeError(e);
    throw t
}

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(e) {
    return e.startsWith(dataURIPrefix)
}

function isFileURI(e) {
    return e.startsWith("file://")
}

function createExportWrapper(e, t) {
    return function () {
        var r = e, n = t;
        return t || (n = Module.asm), assert(runtimeInitialized, "native function `" + r + "` called before runtime initialization"), assert(!runtimeExited, "native function `" + r + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), n[e] || assert(n[e], "exported native function `" + r + "` not found"), n[e].apply(null, arguments)
    }
}

var wasmBinaryFile;
wasmBinaryFile = "salam-wa.wasm", isDataURI(wasmBinaryFile) || (wasmBinaryFile = locateFile(wasmBinaryFile));

function getBinary(e) {
    try {
        if (e == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
        if (readBinary) return readBinary(e);
        throw "both async and sync fetching of the wasm failed"
    } catch (t) {
        abort(t)
    }
}

function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) return fetch(wasmBinaryFile, {credentials: "same-origin"}).then(function (e) {
            if (!e.ok) throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            return e.arrayBuffer()
        }).catch(function () {
            return getBinary(wasmBinaryFile)
        });
        if (readAsync) return new Promise(function (e, t) {
            readAsync(wasmBinaryFile, function (r) {
                e(new Uint8Array(r))
            }, t)
        })
    }
    return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile)
    })
}

function createWasm() {
    var e = {env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg};

    function t(s, d) {
        var c = s.exports;
        Module.asm = c, wasmMemory = Module.asm.memory, assert(wasmMemory, "memory not found in wasm exports"), updateGlobalBufferAndViews(wasmMemory.buffer), wasmTable = Module.asm.__indirect_function_table, assert(wasmTable, "table not found in wasm exports"), addOnInit(Module.asm.__wasm_call_ctors), removeRunDependency("wasm-instantiate")
    }

    addRunDependency("wasm-instantiate");
    var r = Module;

    function n(s) {
        assert(Module === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), r = null, t(s.instance)
    }

    function o(s) {
        return getBinaryPromise().then(function (d) {
            return WebAssembly.instantiate(d, e)
        }).then(function (d) {
            return d
        }).then(s, function (d) {
            err("failed to asynchronously prepare wasm: " + d), isFileURI(wasmBinaryFile) && err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"), abort(d)
        })
    }

    function i() {
        return !wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch == "function" ? fetch(wasmBinaryFile, {credentials: "same-origin"}).then(function (s) {
            var d = WebAssembly.instantiateStreaming(s, e);
            return d.then(n, function (c) {
                return err("wasm streaming compile failed: " + c), err("falling back to ArrayBuffer instantiation"), o(n)
            })
        }) : o(n)
    }

    if (Module.instantiateWasm) try {
        var a = Module.instantiateWasm(e, t);
        return a
    } catch (s) {
        return err("Module.instantiateWasm callback failed with error: " + s), !1
    }
    return i(), {}
}

var tempDouble, tempI64, ASM_CONSTS = {};

function callRuntimeCallbacks(e) {
    for (; e.length > 0;) {
        var t = e.shift();
        if (typeof t == "function") {
            t(Module);
            continue
        }
        var r = t.func;
        typeof r == "number" ? t.arg === void 0 ? getWasmTableEntry(r)() : getWasmTableEntry(r)(t.arg) : r(t.arg === void 0 ? null : t.arg)
    }
}

function withStackSave(e) {
    var t = stackSave(), r = e();
    return stackRestore(t), r
}

function demangle(e) {
    return warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"), e
}

function demangleAll(e) {
    var t = /\b_Z[\w\d_]+/g;
    return e.replace(t, function (r) {
        var n = demangle(r);
        return r === n ? r : n + " [" + r + "]"
    })
}

var wasmTableMirror = [];

function getWasmTableEntry(e) {
    var t = wasmTableMirror[e];
    return t || (e >= wasmTableMirror.length && (wasmTableMirror.length = e + 1), wasmTableMirror[e] = t = wasmTable.get(e)), assert(wasmTable.get(e) == t, "JavaScript-side Wasm function table mirror is out of date!"), t
}

function handleException(e) {
    if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
    quit_(1, e)
}

function jsStackTrace() {
    var e = new Error;
    if (!e.stack) {
        try {
            throw new Error
        } catch (t) {
            e = t
        }
        if (!e.stack) return "(no stack trace available)"
    }
    return e.stack.toString()
}

function setWasmTableEntry(e, t) {
    wasmTable.set(e, t), wasmTableMirror[e] = t
}

function stackTrace() {
    var e = jsStackTrace();
    return Module.extraStackTrace && (e += `
` + Module.extraStackTrace()), demangleAll(e)
}

function getRandomDevice() {
    if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var e = new Uint8Array(1);
        return function () {
            return crypto.getRandomValues(e), e[0]
        }
    } else if (ENVIRONMENT_IS_NODE) try {
        var t = require("crypto");
        return function () {
            return t.randomBytes(1)[0]
        }
    } catch {
    }
    return function () {
        abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")
    }
}

var PATH = {
    splitPath: function (e) {
        var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return t.exec(e).slice(1)
    }, normalizeArray: function (e, t) {
        for (var r = 0, n = e.length - 1; n >= 0; n--) {
            var o = e[n];
            o === "." ? e.splice(n, 1) : o === ".." ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--)
        }
        if (t) for (; r; r--) e.unshift("..");
        return e
    }, normalize: function (e) {
        var t = e.charAt(0) === "/", r = e.substr(-1) === "/";
        return e = PATH.normalizeArray(e.split("/").filter(function (n) {
            return !!n
        }), !t).join("/"), !e && !t && (e = "."), e && r && (e += "/"), (t ? "/" : "") + e
    }, dirname: function (e) {
        var t = PATH.splitPath(e), r = t[0], n = t[1];
        return !r && !n ? "." : (n && (n = n.substr(0, n.length - 1)), r + n)
    }, basename: function (e) {
        if (e === "/") return "/";
        e = PATH.normalize(e), e = e.replace(/\/$/, "");
        var t = e.lastIndexOf("/");
        return t === -1 ? e : e.substr(t + 1)
    }, extname: function (e) {
        return PATH.splitPath(e)[3]
    }, join: function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(e.join("/"))
    }, join2: function (e, t) {
        return PATH.normalize(e + "/" + t)
    }
}, PATH_FS = {
    resolve: function () {
        for (var e = "", t = !1, r = arguments.length - 1; r >= -1 && !t; r--) {
            var n = r >= 0 ? arguments[r] : FS.cwd();
            if (typeof n != "string") throw new TypeError("Arguments to path.resolve must be strings");
            if (!n) return "";
            e = n + "/" + e, t = n.charAt(0) === "/"
        }
        return e = PATH.normalizeArray(e.split("/").filter(function (o) {
            return !!o
        }), !t).join("/"), (t ? "/" : "") + e || "."
    }, relative: function (e, t) {
        e = PATH_FS.resolve(e).substr(1), t = PATH_FS.resolve(t).substr(1);

        function r(c) {
            for (var l = 0; l < c.length && c[l] === ""; l++) ;
            for (var u = c.length - 1; u >= 0 && c[u] === ""; u--) ;
            return l > u ? [] : c.slice(l, u - l + 1)
        }

        for (var n = r(e.split("/")), o = r(t.split("/")), i = Math.min(n.length, o.length), a = i, s = 0; s < i; s++) if (n[s] !== o[s]) {
            a = s;
            break
        }
        for (var d = [], s = a; s < n.length; s++) d.push("..");
        return d = d.concat(o.slice(a)), d.join("/")
    }
}, TTY = {
    ttys: [], init: function () {
    }, shutdown: function () {
    }, register: function (e, t) {
        TTY.ttys[e] = {input: [], output: [], ops: t}, FS.registerDevice(e, TTY.stream_ops)
    }, stream_ops: {
        open: function (e) {
            var t = TTY.ttys[e.node.rdev];
            if (!t) throw new FS.ErrnoError(43);
            e.tty = t, e.seekable = !1
        }, close: function (e) {
            e.tty.ops.flush(e.tty)
        }, flush: function (e) {
            e.tty.ops.flush(e.tty)
        }, read: function (e, t, r, n, o) {
            if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
            for (var i = 0, a = 0; a < n; a++) {
                var s;
                try {
                    s = e.tty.ops.get_char(e.tty)
                } catch {
                    throw new FS.ErrnoError(29)
                }
                if (s === void 0 && i === 0) throw new FS.ErrnoError(6);
                if (s == null) break;
                i++, t[r + a] = s
            }
            return i && (e.node.timestamp = Date.now()), i
        }, write: function (e, t, r, n, o) {
            if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
            try {
                for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, t[r + i])
            } catch {
                throw new FS.ErrnoError(29)
            }
            return n && (e.node.timestamp = Date.now()), i
        }
    }, default_tty_ops: {
        get_char: function (e) {
            if (!e.input.length) {
                var t = null;
                if (ENVIRONMENT_IS_NODE) {
                    var r = 256, n = Buffer.alloc(r), o = 0;
                    try {
                        o = fs.readSync(process.stdin.fd, n, 0, r, -1)
                    } catch (i) {
                        if (i.toString().includes("EOF")) o = 0; else throw i
                    }
                    o > 0 ? t = n.slice(0, o).toString("utf-8") : t = null
                } else typeof window < "u" && typeof window.prompt == "function" ? (t = window.prompt("Input: "), t !== null && (t += `
`)) : typeof readline == "function" && (t = readline(), t !== null && (t += `
`));
                if (!t) return null;
                e.input = intArrayFromString(t, !0)
            }
            return e.input.shift()
        }, put_char: function (e, t) {
            t === null || t === 10 ? (out(UTF8ArrayToString(e.output, 0)), e.output = []) : t != 0 && e.output.push(t)
        }, flush: function (e) {
            e.output && e.output.length > 0 && (out(UTF8ArrayToString(e.output, 0)), e.output = [])
        }
    }, default_tty1_ops: {
        put_char: function (e, t) {
            t === null || t === 10 ? (err(UTF8ArrayToString(e.output, 0)), e.output = []) : t != 0 && e.output.push(t)
        }, flush: function (e) {
            e.output && e.output.length > 0 && (err(UTF8ArrayToString(e.output, 0)), e.output = [])
        }
    }
};

function zeroMemory(e, t) {
    HEAPU8.fill(0, e, e + t)
}

function alignMemory(e, t) {
    return assert(t, "alignment argument is required"), Math.ceil(e / t) * t
}

function mmapAlloc(e) {
    abort("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")
}

var MEMFS = {
    ops_table: null, mount: function (e) {
        return MEMFS.createNode(null, "/", 16895, 0)
    }, createNode: function (e, t, r, n) {
        if (FS.isBlkdev(r) || FS.isFIFO(r)) throw new FS.ErrnoError(63);
        MEMFS.ops_table || (MEMFS.ops_table = {
            dir: {
                node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr,
                    lookup: MEMFS.node_ops.lookup,
                    mknod: MEMFS.node_ops.mknod,
                    rename: MEMFS.node_ops.rename,
                    unlink: MEMFS.node_ops.unlink,
                    rmdir: MEMFS.node_ops.rmdir,
                    readdir: MEMFS.node_ops.readdir,
                    symlink: MEMFS.node_ops.symlink
                }, stream: {llseek: MEMFS.stream_ops.llseek}
            },
            file: {
                node: {getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr},
                stream: {
                    llseek: MEMFS.stream_ops.llseek,
                    read: MEMFS.stream_ops.read,
                    write: MEMFS.stream_ops.write,
                    allocate: MEMFS.stream_ops.allocate,
                    mmap: MEMFS.stream_ops.mmap,
                    msync: MEMFS.stream_ops.msync
                }
            },
            link: {
                node: {
                    getattr: MEMFS.node_ops.getattr,
                    setattr: MEMFS.node_ops.setattr,
                    readlink: MEMFS.node_ops.readlink
                }, stream: {}
            },
            chrdev: {
                node: {getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr},
                stream: FS.chrdev_stream_ops
            }
        });
        var o = FS.createNode(e, t, r, n);
        return FS.isDir(o.mode) ? (o.node_ops = MEMFS.ops_table.dir.node, o.stream_ops = MEMFS.ops_table.dir.stream, o.contents = {}) : FS.isFile(o.mode) ? (o.node_ops = MEMFS.ops_table.file.node, o.stream_ops = MEMFS.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : FS.isLink(o.mode) ? (o.node_ops = MEMFS.ops_table.link.node, o.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(o.mode) && (o.node_ops = MEMFS.ops_table.chrdev.node, o.stream_ops = MEMFS.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[t] = o, e.timestamp = o.timestamp), o
    }, getFileDataAsTypedArray: function (e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
    }, expandFileStorage: function (e, t) {
        var r = e.contents ? e.contents.length : 0;
        if (!(r >= t)) {
            var n = 1024 * 1024;
            t = Math.max(t, r * (r < n ? 2 : 1.125) >>> 0), r != 0 && (t = Math.max(t, 256));
            var o = e.contents;
            e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(o.subarray(0, e.usedBytes), 0)
        }
    }, resizeFileStorage: function (e, t) {
        if (e.usedBytes != t) if (t == 0) e.contents = null, e.usedBytes = 0; else {
            var r = e.contents;
            e.contents = new Uint8Array(t), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t
        }
    }, node_ops: {
        getattr: function (e) {
            var t = {};
            return t.dev = FS.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, FS.isDir(e.mode) ? t.size = 4096 : FS.isFile(e.mode) ? t.size = e.usedBytes : FS.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t
        }, setattr: function (e, t) {
            t.mode !== void 0 && (e.mode = t.mode), t.timestamp !== void 0 && (e.timestamp = t.timestamp), t.size !== void 0 && MEMFS.resizeFileStorage(e, t.size)
        }, lookup: function (e, t) {
            throw FS.genericErrors[44]
        }, mknod: function (e, t, r, n) {
            return MEMFS.createNode(e, t, r, n)
        }, rename: function (e, t, r) {
            if (FS.isDir(e.mode)) {
                var n;
                try {
                    n = FS.lookupNode(t, r)
                } catch {
                }
                if (n) for (var o in n.contents) throw new FS.ErrnoError(55)
            }
            delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = r, t.contents[r] = e, t.timestamp = e.parent.timestamp, e.parent = t
        }, unlink: function (e, t) {
            delete e.contents[t], e.timestamp = Date.now()
        }, rmdir: function (e, t) {
            var r = FS.lookupNode(e, t);
            for (var n in r.contents) throw new FS.ErrnoError(55);
            delete e.contents[t], e.timestamp = Date.now()
        }, readdir: function (e) {
            var t = [".", ".."];
            for (var r in e.contents) e.contents.hasOwnProperty(r) && t.push(r);
            return t
        }, symlink: function (e, t, r) {
            var n = MEMFS.createNode(e, t, 41471, 0);
            return n.link = r, n
        }, readlink: function (e) {
            if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
            return e.link
        }
    }, stream_ops: {
        read: function (e, t, r, n, o) {
            var i = e.node.contents;
            if (o >= e.node.usedBytes) return 0;
            var a = Math.min(e.node.usedBytes - o, n);
            if (assert(a >= 0), a > 8 && i.subarray) t.set(i.subarray(o, o + a), r); else for (var s = 0; s < a; s++) t[r + s] = i[o + s];
            return a
        }, write: function (e, t, r, n, o, i) {
            if (assert(!(t instanceof ArrayBuffer)), t.buffer === HEAP8.buffer && (i = !1), !n) return 0;
            var a = e.node;
            if (a.timestamp = Date.now(), t.subarray && (!a.contents || a.contents.subarray)) {
                if (i) return assert(o === 0, "canOwn must imply no weird position inside the file"), a.contents = t.subarray(r, r + n), a.usedBytes = n, n;
                if (a.usedBytes === 0 && o === 0) return a.contents = t.slice(r, r + n), a.usedBytes = n, n;
                if (o + n <= a.usedBytes) return a.contents.set(t.subarray(r, r + n), o), n
            }
            if (MEMFS.expandFileStorage(a, o + n), a.contents.subarray && t.subarray) a.contents.set(t.subarray(r, r + n), o); else for (var s = 0; s < n; s++) a.contents[o + s] = t[r + s];
            return a.usedBytes = Math.max(a.usedBytes, o + n), n
        }, llseek: function (e, t, r) {
            var n = t;
            if (r === 1 ? n += e.position : r === 2 && FS.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new FS.ErrnoError(28);
            return n
        }, allocate: function (e, t, r) {
            MEMFS.expandFileStorage(e.node, t + r), e.node.usedBytes = Math.max(e.node.usedBytes, t + r)
        }, mmap: function (e, t, r, n, o, i) {
            if (t !== 0) throw new FS.ErrnoError(28);
            if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
            var a, s, d = e.node.contents;
            if (!(i & 2) && d.buffer === buffer) s = !1, a = d.byteOffset; else {
                if ((n > 0 || n + r < d.length) && (d.subarray ? d = d.subarray(n, n + r) : d = Array.prototype.slice.call(d, n, n + r)), s = !0, a = mmapAlloc(r), !a) throw new FS.ErrnoError(48);
                HEAP8.set(d, a)
            }
            return {ptr: a, allocated: s}
        }, msync: function (e, t, r, n, o) {
            if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
            if (o & 2) return 0;
            var i = MEMFS.stream_ops.write(e, t, 0, n, r, !1);
            return 0
        }
    }
};

function asyncLoad(e, t, r, n) {
    var o = n ? "" : getUniqueRunDependency("al " + e);
    readAsync(e, function (i) {
        assert(i, 'Loading data file "' + e + '" failed (no arrayBuffer).'), t(new Uint8Array(i)), o && removeRunDependency(o)
    }, function (i) {
        if (r) r(); else throw 'Loading data file "' + e + '" failed.'
    }), o && addRunDependency(o)
}

var ERRNO_MESSAGES = {
    0: "Success",
    1: "Arg list too long",
    2: "Permission denied",
    3: "Address already in use",
    4: "Address not available",
    5: "Address family not supported by protocol family",
    6: "No more processes",
    7: "Socket already connected",
    8: "Bad file number",
    9: "Trying to read unreadable message",
    10: "Mount device busy",
    11: "Operation canceled",
    12: "No children",
    13: "Connection aborted",
    14: "Connection refused",
    15: "Connection reset by peer",
    16: "File locking deadlock error",
    17: "Destination address required",
    18: "Math arg out of domain of func",
    19: "Quota exceeded",
    20: "File exists",
    21: "Bad address",
    22: "File too large",
    23: "Host is unreachable",
    24: "Identifier removed",
    25: "Illegal byte sequence",
    26: "Connection already in progress",
    27: "Interrupted system call",
    28: "Invalid argument",
    29: "I/O error",
    30: "Socket is already connected",
    31: "Is a directory",
    32: "Too many symbolic links",
    33: "Too many open files",
    34: "Too many links",
    35: "Message too long",
    36: "Multihop attempted",
    37: "File or path name too long",
    38: "Network interface is not configured",
    39: "Connection reset by network",
    40: "Network is unreachable",
    41: "Too many open files in system",
    42: "No buffer space available",
    43: "No such device",
    44: "No such file or directory",
    45: "Exec format error",
    46: "No record locks available",
    47: "The link has been severed",
    48: "Not enough core",
    49: "No message of desired type",
    50: "Protocol not available",
    51: "No space left on device",
    52: "Function not implemented",
    53: "Socket is not connected",
    54: "Not a directory",
    55: "Directory not empty",
    56: "State not recoverable",
    57: "Socket operation on non-socket",
    59: "Not a typewriter",
    60: "No such device or address",
    61: "Value too large for defined data type",
    62: "Previous owner died",
    63: "Not super-user",
    64: "Broken pipe",
    65: "Protocol error",
    66: "Unknown protocol",
    67: "Protocol wrong type for socket",
    68: "Math result not representable",
    69: "Read only file system",
    70: "Illegal seek",
    71: "No such process",
    72: "Stale file handle",
    73: "Connection timed out",
    74: "Text file busy",
    75: "Cross-device link",
    100: "Device not a stream",
    101: "Bad font file fmt",
    102: "Invalid slot",
    103: "Invalid request code",
    104: "No anode",
    105: "Block device required",
    106: "Channel number out of range",
    107: "Level 3 halted",
    108: "Level 3 reset",
    109: "Link number out of range",
    110: "Protocol driver not attached",
    111: "No CSI structure available",
    112: "Level 2 halted",
    113: "Invalid exchange",
    114: "Invalid request descriptor",
    115: "Exchange full",
    116: "No data (for no delay io)",
    117: "Timer expired",
    118: "Out of streams resources",
    119: "Machine is not on the network",
    120: "Package not installed",
    121: "The object is remote",
    122: "Advertise error",
    123: "Srmount error",
    124: "Communication error on send",
    125: "Cross mount point (not really error)",
    126: "Given log. name not unique",
    127: "f.d. invalid for this operation",
    128: "Remote address changed",
    129: "Can   access a needed shared lib",
    130: "Accessing a corrupted shared lib",
    131: ".lib section in a.out corrupted",
    132: "Attempting to link in too many libs",
    133: "Attempting to exec a shared library",
    135: "Streams pipe error",
    136: "Too many users",
    137: "Socket type not supported",
    138: "Not supported",
    139: "Protocol family not supported",
    140: "Can't send after socket shutdown",
    141: "Too many references",
    142: "Host is down",
    148: "No medium (in tape drive)",
    156: "Level 2 not synchronized"
}, ERRNO_CODES = {}, FS = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: !1,
    ignorePermissions: !0,
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: (e, t = {}) => {
        if (e = PATH_FS.resolve(FS.cwd(), e), !e) return {path: "", node: null};
        var r = {follow_mount: !0, recurse_count: 0};
        for (var n in r) t[n] === void 0 && (t[n] = r[n]);
        if (t.recurse_count > 8) throw new FS.ErrnoError(32);
        for (var o = PATH.normalizeArray(e.split("/").filter(f => !!f), !1), i = FS.root, a = "/", s = 0; s < o.length; s++) {
            var d = s === o.length - 1;
            if (d && t.parent) break;
            if (i = FS.lookupNode(i, o[s]), a = PATH.join2(a, o[s]), FS.isMountpoint(i) && (!d || d && t.follow_mount) && (i = i.mounted.root), !d || t.follow) for (var c = 0; FS.isLink(i.mode);) {
                var l = FS.readlink(a);
                a = PATH_FS.resolve(PATH.dirname(a), l);
                var u = FS.lookupPath(a, {recurse_count: t.recurse_count});
                if (i = u.node, c++ > 40) throw new FS.ErrnoError(32)
            }
        }
        return {path: a, node: i}
    },
    getPath: e => {
        for (var t; ;) {
            if (FS.isRoot(e)) {
                var r = e.mount.mountpoint;
                return t ? r[r.length - 1] !== "/" ? r + "/" + t : r + t : r
            }
            t = t ? e.name + "/" + t : e.name, e = e.parent
        }
    },
    hashName: (e, t) => {
        for (var r = 0, n = 0; n < t.length; n++) r = (r << 5) - r + t.charCodeAt(n) | 0;
        return (e + r >>> 0) % FS.nameTable.length
    },
    hashAddNode: e => {
        var t = FS.hashName(e.parent.id, e.name);
        e.name_next = FS.nameTable[t], FS.nameTable[t] = e
    },
    hashRemoveNode: e => {
        var t = FS.hashName(e.parent.id, e.name);
        if (FS.nameTable[t] === e) FS.nameTable[t] = e.name_next; else for (var r = FS.nameTable[t]; r;) {
            if (r.name_next === e) {
                r.name_next = e.name_next;
                break
            }
            r = r.name_next
        }
    },
    lookupNode: (e, t) => {
        var r = FS.mayLookup(e);
        if (r) throw new FS.ErrnoError(r, e);
        for (var n = FS.hashName(e.id, t), o = FS.nameTable[n]; o; o = o.name_next) {
            var i = o.name;
            if (o.parent.id === e.id && i === t) return o
        }
        return FS.lookup(e, t)
    },
    createNode: (e, t, r, n) => {
        assert(typeof e == "object");
        var o = new FS.FSNode(e, t, r, n);
        return FS.hashAddNode(o), o
    },
    destroyNode: e => {
        FS.hashRemoveNode(e)
    },
    isRoot: e => e === e.parent,
    isMountpoint: e => !!e.mounted,
    isFile: e => (e & 61440) === 32768,
    isDir: e => (e & 61440) === 16384,
    isLink: e => (e & 61440) === 40960,
    isChrdev: e => (e & 61440) === 8192,
    isBlkdev: e => (e & 61440) === 24576,
    isFIFO: e => (e & 61440) === 4096,
    isSocket: e => (e & 49152) === 49152,
    flagModes: {r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090},
    modeStringToFlags: e => {
        var t = FS.flagModes[e];
        if (typeof t > "u") throw new Error("Unknown file open mode: " + e);
        return t
    },
    flagsToPermissionString: e => {
        var t = ["r", "w", "rw"][e & 3];
        return e & 512 && (t += "w"), t
    },
    nodePermissions: (e, t) => FS.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0,
    mayLookup: e => {
        var t = FS.nodePermissions(e, "x");
        return t || (e.node_ops.lookup ? 0 : 2)
    },
    mayCreate: (e, t) => {
        try {
            var r = FS.lookupNode(e, t);
            return 20
        } catch {
        }
        return FS.nodePermissions(e, "wx")
    },
    mayDelete: (e, t, r) => {
        var n;
        try {
            n = FS.lookupNode(e, t)
        } catch (i) {
            return i.errno
        }
        var o = FS.nodePermissions(e, "wx");
        if (o) return o;
        if (r) {
            if (!FS.isDir(n.mode)) return 54;
            if (FS.isRoot(n) || FS.getPath(n) === FS.cwd()) return 10
        } else if (FS.isDir(n.mode)) return 31;
        return 0
    },
    mayOpen: (e, t) => e ? FS.isLink(e.mode) ? 32 : FS.isDir(e.mode) && (FS.flagsToPermissionString(t) !== "r" || t & 512) ? 31 : FS.nodePermissions(e, FS.flagsToPermissionString(t)) : 44,
    MAX_OPEN_FDS: 4096,
    nextfd: (e = 0, t = FS.MAX_OPEN_FDS) => {
        for (var r = e; r <= t; r++) if (!FS.streams[r]) return r;
        throw new FS.ErrnoError(33)
    },
    getStream: e => FS.streams[e],
    createStream: (e, t, r) => {
        FS.FSStream || (FS.FSStream = function () {
        }, FS.FSStream.prototype = {
            object: {
                get: function () {
                    return this.node
                }, set: function (o) {
                    this.node = o
                }
            }, isRead: {
                get: function () {
                    return (this.flags & 2097155) !== 1
                }
            }, isWrite: {
                get: function () {
                    return (this.flags & 2097155) !== 0
                }
            }, isAppend: {
                get: function () {
                    return this.flags & 1024
                }
            }
        }), e = Object.assign(new FS.FSStream, e);
        var n = FS.nextfd(t, r);
        return e.fd = n, FS.streams[n] = e, e
    },
    closeStream: e => {
        FS.streams[e] = null
    },
    chrdev_stream_ops: {
        open: e => {
            var t = FS.getDevice(e.node.rdev);
            e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
        }, llseek: () => {
            throw new FS.ErrnoError(70)
        }
    },
    major: e => e >> 8,
    minor: e => e & 255,
    makedev: (e, t) => e << 8 | t,
    registerDevice: (e, t) => {
        FS.devices[e] = {stream_ops: t}
    },
    getDevice: e => FS.devices[e],
    getMounts: e => {
        for (var t = [], r = [e]; r.length;) {
            var n = r.pop();
            t.push(n), r.push.apply(r, n.mounts)
        }
        return t
    },
    syncfs: (e, t) => {
        typeof e == "function" && (t = e, e = !1), FS.syncFSRequests++, FS.syncFSRequests > 1 && err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        var r = FS.getMounts(FS.root.mount), n = 0;

        function o(a) {
            return assert(FS.syncFSRequests > 0), FS.syncFSRequests--, t(a)
        }

        function i(a) {
            if (a) return i.errored ? void 0 : (i.errored = !0, o(a));
            ++n >= r.length && o(null)
        }

        r.forEach(a => {
            if (!a.type.syncfs) return i(null);
            a.type.syncfs(a, e, i)
        })
    },
    mount: (e, t, r) => {
        if (typeof e == "string") throw e;
        var n = r === "/", o = !r, i;
        if (n && FS.root) throw new FS.ErrnoError(10);
        if (!n && !o) {
            var a = FS.lookupPath(r, {follow_mount: !1});
            if (r = a.path, i = a.node, FS.isMountpoint(i)) throw new FS.ErrnoError(10);
            if (!FS.isDir(i.mode)) throw new FS.ErrnoError(54)
        }
        var s = {type: e, opts: t, mountpoint: r, mounts: []}, d = e.mount(s);
        return d.mount = s, s.root = d, n ? FS.root = d : i && (i.mounted = s, i.mount && i.mount.mounts.push(s)), d
    },
    unmount: e => {
        var t = FS.lookupPath(e, {follow_mount: !1});
        if (!FS.isMountpoint(t.node)) throw new FS.ErrnoError(28);
        var r = t.node, n = r.mounted, o = FS.getMounts(n);
        Object.keys(FS.nameTable).forEach(a => {
            for (var s = FS.nameTable[a]; s;) {
                var d = s.name_next;
                o.includes(s.mount) && FS.destroyNode(s), s = d
            }
        }), r.mounted = null;
        var i = r.mount.mounts.indexOf(n);
        assert(i !== -1), r.mount.mounts.splice(i, 1)
    },
    lookup: (e, t) => e.node_ops.lookup(e, t),
    mknod: (e, t, r) => {
        var n = FS.lookupPath(e, {parent: !0}), o = n.node, i = PATH.basename(e);
        if (!i || i === "." || i === "..") throw new FS.ErrnoError(28);
        var a = FS.mayCreate(o, i);
        if (a) throw new FS.ErrnoError(a);
        if (!o.node_ops.mknod) throw new FS.ErrnoError(63);
        return o.node_ops.mknod(o, i, t, r)
    },
    create: (e, t) => (t = t !== void 0 ? t : 438, t &= 4095, t |= 32768, FS.mknod(e, t, 0)),
    mkdir: (e, t) => (t = t !== void 0 ? t : 511, t &= 1023, t |= 16384, FS.mknod(e, t, 0)),
    mkdirTree: (e, t) => {
        for (var r = e.split("/"), n = "", o = 0; o < r.length; ++o) if (r[o]) {
            n += "/" + r[o];
            try {
                FS.mkdir(n, t)
            } catch (i) {
                if (i.errno != 20) throw i
            }
        }
    },
    mkdev: (e, t, r) => (typeof r > "u" && (r = t, t = 438), t |= 8192, FS.mknod(e, t, r)),
    symlink: (e, t) => {
        if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
        var r = FS.lookupPath(t, {parent: !0}), n = r.node;
        if (!n) throw new FS.ErrnoError(44);
        var o = PATH.basename(t), i = FS.mayCreate(n, o);
        if (i) throw new FS.ErrnoError(i);
        if (!n.node_ops.symlink) throw new FS.ErrnoError(63);
        return n.node_ops.symlink(n, o, e)
    },
    rename: (e, t) => {
        var r = PATH.dirname(e), n = PATH.dirname(t), o = PATH.basename(e), i = PATH.basename(t), a, s, d;
        if (a = FS.lookupPath(e, {parent: !0}), s = a.node, a = FS.lookupPath(t, {parent: !0}), d = a.node, !s || !d) throw new FS.ErrnoError(44);
        if (s.mount !== d.mount) throw new FS.ErrnoError(75);
        var c = FS.lookupNode(s, o), l = PATH_FS.relative(e, n);
        if (l.charAt(0) !== ".") throw new FS.ErrnoError(28);
        if (l = PATH_FS.relative(t, r), l.charAt(0) !== ".") throw new FS.ErrnoError(55);
        var u;
        try {
            u = FS.lookupNode(d, i)
        } catch {
        }
        if (c !== u) {
            var f = FS.isDir(c.mode), E = FS.mayDelete(s, o, f);
            if (E) throw new FS.ErrnoError(E);
            if (E = u ? FS.mayDelete(d, i, f) : FS.mayCreate(d, i), E) throw new FS.ErrnoError(E);
            if (!s.node_ops.rename) throw new FS.ErrnoError(63);
            if (FS.isMountpoint(c) || u && FS.isMountpoint(u)) throw new FS.ErrnoError(10);
            if (d !== s && (E = FS.nodePermissions(s, "w"), E)) throw new FS.ErrnoError(E);
            FS.hashRemoveNode(c);
            try {
                s.node_ops.rename(c, d, i)
            } catch (p) {
                throw p
            } finally {
                FS.hashAddNode(c)
            }
        }
    },
    rmdir: e => {
        var t = FS.lookupPath(e, {parent: !0}), r = t.node, n = PATH.basename(e), o = FS.lookupNode(r, n),
            i = FS.mayDelete(r, n, !0);
        if (i) throw new FS.ErrnoError(i);
        if (!r.node_ops.rmdir) throw new FS.ErrnoError(63);
        if (FS.isMountpoint(o)) throw new FS.ErrnoError(10);
        r.node_ops.rmdir(r, n), FS.destroyNode(o)
    },
    readdir: e => {
        var t = FS.lookupPath(e, {follow: !0}), r = t.node;
        if (!r.node_ops.readdir) throw new FS.ErrnoError(54);
        return r.node_ops.readdir(r)
    },
    unlink: e => {
        var t = FS.lookupPath(e, {parent: !0}), r = t.node;
        if (!r) throw new FS.ErrnoError(44);
        var n = PATH.basename(e), o = FS.lookupNode(r, n), i = FS.mayDelete(r, n, !1);
        if (i) throw new FS.ErrnoError(i);
        if (!r.node_ops.unlink) throw new FS.ErrnoError(63);
        if (FS.isMountpoint(o)) throw new FS.ErrnoError(10);
        r.node_ops.unlink(r, n), FS.destroyNode(o)
    },
    readlink: e => {
        var t = FS.lookupPath(e), r = t.node;
        if (!r) throw new FS.ErrnoError(44);
        if (!r.node_ops.readlink) throw new FS.ErrnoError(28);
        return PATH_FS.resolve(FS.getPath(r.parent), r.node_ops.readlink(r))
    },
    stat: (e, t) => {
        var r = FS.lookupPath(e, {follow: !t}), n = r.node;
        if (!n) throw new FS.ErrnoError(44);
        if (!n.node_ops.getattr) throw new FS.ErrnoError(63);
        return n.node_ops.getattr(n)
    },
    lstat: e => FS.stat(e, !0),
    chmod: (e, t, r) => {
        var n;
        if (typeof e == "string") {
            var o = FS.lookupPath(e, {follow: !r});
            n = o.node
        } else n = e;
        if (!n.node_ops.setattr) throw new FS.ErrnoError(63);
        n.node_ops.setattr(n, {mode: t & 4095 | n.mode & -4096, timestamp: Date.now()})
    },
    lchmod: (e, t) => {
        FS.chmod(e, t, !0)
    },
    fchmod: (e, t) => {
        var r = FS.getStream(e);
        if (!r) throw new FS.ErrnoError(8);
        FS.chmod(r.node, t)
    },
    chown: (e, t, r, n) => {
        var o;
        if (typeof e == "string") {
            var i = FS.lookupPath(e, {follow: !n});
            o = i.node
        } else o = e;
        if (!o.node_ops.setattr) throw new FS.ErrnoError(63);
        o.node_ops.setattr(o, {timestamp: Date.now()})
    },
    lchown: (e, t, r) => {
        FS.chown(e, t, r, !0)
    },
    fchown: (e, t, r) => {
        var n = FS.getStream(e);
        if (!n) throw new FS.ErrnoError(8);
        FS.chown(n.node, t, r)
    },
    truncate: (e, t) => {
        if (t < 0) throw new FS.ErrnoError(28);
        var r;
        if (typeof e == "string") {
            var n = FS.lookupPath(e, {follow: !0});
            r = n.node
        } else r = e;
        if (!r.node_ops.setattr) throw new FS.ErrnoError(63);
        if (FS.isDir(r.mode)) throw new FS.ErrnoError(31);
        if (!FS.isFile(r.mode)) throw new FS.ErrnoError(28);
        var o = FS.nodePermissions(r, "w");
        if (o) throw new FS.ErrnoError(o);
        r.node_ops.setattr(r, {size: t, timestamp: Date.now()})
    },
    ftruncate: (e, t) => {
        var r = FS.getStream(e);
        if (!r) throw new FS.ErrnoError(8);
        if (!(r.flags & 2097155)) throw new FS.ErrnoError(28);
        FS.truncate(r.node, t)
    },
    utime: (e, t, r) => {
        var n = FS.lookupPath(e, {follow: !0}), o = n.node;
        o.node_ops.setattr(o, {timestamp: Math.max(t, r)})
    },
    open: (e, t, r, n, o) => {
        if (e === "") throw new FS.ErrnoError(44);
        t = typeof t == "string" ? FS.modeStringToFlags(t) : t, r = typeof r > "u" ? 438 : r, t & 64 ? r = r & 4095 | 32768 : r = 0;
        var i;
        if (typeof e == "object") i = e; else {
            e = PATH.normalize(e);
            try {
                var a = FS.lookupPath(e, {follow: !(t & 131072)});
                i = a.node
            } catch {
            }
        }
        var s = !1;
        if (t & 64) if (i) {
            if (t & 128) throw new FS.ErrnoError(20)
        } else i = FS.mknod(e, r, 0), s = !0;
        if (!i) throw new FS.ErrnoError(44);
        if (FS.isChrdev(i.mode) && (t &= -513), t & 65536 && !FS.isDir(i.mode)) throw new FS.ErrnoError(54);
        if (!s) {
            var d = FS.mayOpen(i, t);
            if (d) throw new FS.ErrnoError(d)
        }
        t & 512 && FS.truncate(i, 0), t &= -131713;
        var c = FS.createStream({
            node: i,
            path: FS.getPath(i),
            flags: t,
            seekable: !0,
            position: 0,
            stream_ops: i.stream_ops,
            ungotten: [],
            error: !1
        }, n, o);
        return c.stream_ops.open && c.stream_ops.open(c), Module.logReadFiles && !(t & 1) && (FS.readFiles || (FS.readFiles = {}), e in FS.readFiles || (FS.readFiles[e] = 1)), c
    },
    close: e => {
        if (FS.isClosed(e)) throw new FS.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
            e.stream_ops.close && e.stream_ops.close(e)
        } catch (t) {
            throw t
        } finally {
            FS.closeStream(e.fd)
        }
        e.fd = null
    },
    isClosed: e => e.fd === null,
    llseek: (e, t, r) => {
        if (FS.isClosed(e)) throw new FS.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
        if (r != 0 && r != 1 && r != 2) throw new FS.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position
    },
    read: (e, t, r, n, o) => {
        if (n < 0 || o < 0) throw new FS.ErrnoError(28);
        if (FS.isClosed(e)) throw new FS.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
        if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
        if (!e.stream_ops.read) throw new FS.ErrnoError(28);
        var i = typeof o < "u";
        if (!i) o = e.position; else if (!e.seekable) throw new FS.ErrnoError(70);
        var a = e.stream_ops.read(e, t, r, n, o);
        return i || (e.position += a), a
    },
    write: (e, t, r, n, o, i) => {
        if (n < 0 || o < 0) throw new FS.ErrnoError(28);
        if (FS.isClosed(e)) throw new FS.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
        if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
        if (!e.stream_ops.write) throw new FS.ErrnoError(28);
        e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
        var a = typeof o < "u";
        if (!a) o = e.position; else if (!e.seekable) throw new FS.ErrnoError(70);
        var s = e.stream_ops.write(e, t, r, n, o, i);
        return a || (e.position += s), s
    },
    allocate: (e, t, r) => {
        if (FS.isClosed(e)) throw new FS.ErrnoError(8);
        if (t < 0 || r <= 0) throw new FS.ErrnoError(28);
        if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
        if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode)) throw new FS.ErrnoError(43);
        if (!e.stream_ops.allocate) throw new FS.ErrnoError(138);
        e.stream_ops.allocate(e, t, r)
    },
    mmap: (e, t, r, n, o, i) => {
        if (o & 2 && !(i & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
        return e.stream_ops.mmap(e, t, r, n, o, i)
    },
    msync: (e, t, r, n, o) => !e || !e.stream_ops.msync ? 0 : e.stream_ops.msync(e, t, r, n, o),
    munmap: e => 0,
    ioctl: (e, t, r) => {
        if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
        return e.stream_ops.ioctl(e, t, r)
    },
    readFile: (e, t = {}) => {
        if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", t.encoding !== "utf8" && t.encoding !== "binary") throw new Error('Invalid encoding type "' + t.encoding + '"');
        var r, n = FS.open(e, t.flags), o = FS.stat(e), i = o.size, a = new Uint8Array(i);
        return FS.read(n, a, 0, i, 0), t.encoding === "utf8" ? r = UTF8ArrayToString(a, 0) : t.encoding === "binary" && (r = a), FS.close(n), r
    },
    writeFile: (e, t, r = {}) => {
        r.flags = r.flags || 577;
        var n = FS.open(e, r.flags, r.mode);
        if (typeof t == "string") {
            var o = new Uint8Array(lengthBytesUTF8(t) + 1), i = stringToUTF8Array(t, o, 0, o.length);
            FS.write(n, o, 0, i, void 0, r.canOwn)
        } else if (ArrayBuffer.isView(t)) FS.write(n, t, 0, t.byteLength, void 0, r.canOwn); else throw new Error("Unsupported data type");
        FS.close(n)
    },
    cwd: () => FS.currentPath,
    chdir: e => {
        var t = FS.lookupPath(e, {follow: !0});
        if (t.node === null) throw new FS.ErrnoError(44);
        if (!FS.isDir(t.node.mode)) throw new FS.ErrnoError(54);
        var r = FS.nodePermissions(t.node, "x");
        if (r) throw new FS.ErrnoError(r);
        FS.currentPath = t.path
    },
    createDefaultDirectories: () => {
        FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user")
    },
    createDefaultDevices: () => {
        FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), {
            read: () => 0,
            write: (t, r, n, o, i) => o
        }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var e = getRandomDevice();
        FS.createDevice("/dev", "random", e), FS.createDevice("/dev", "urandom", e), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp")
    },
    createSpecialDirectories: () => {
        FS.mkdir("/proc");
        var e = FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd"), FS.mount({
            mount: () => {
                var t = FS.createNode(e, "fd", 16895, 73);
                return t.node_ops = {
                    lookup: (r, n) => {
                        var o = +n, i = FS.getStream(o);
                        if (!i) throw new FS.ErrnoError(8);
                        var a = {parent: null, mount: {mountpoint: "fake"}, node_ops: {readlink: () => i.path}};
                        return a.parent = a, a
                    }
                }, t
            }
        }, {}, "/proc/self/fd")
    },
    createStandardStreams: () => {
        Module.stdin ? FS.createDevice("/dev", "stdin", Module.stdin) : FS.symlink("/dev/tty", "/dev/stdin"), Module.stdout ? FS.createDevice("/dev", "stdout", null, Module.stdout) : FS.symlink("/dev/tty", "/dev/stdout"), Module.stderr ? FS.createDevice("/dev", "stderr", null, Module.stderr) : FS.symlink("/dev/tty1", "/dev/stderr");
        var e = FS.open("/dev/stdin", 0), t = FS.open("/dev/stdout", 1), r = FS.open("/dev/stderr", 1);
        assert(e.fd === 0, "invalid handle for stdin (" + e.fd + ")"), assert(t.fd === 1, "invalid handle for stdout (" + t.fd + ")"), assert(r.fd === 2, "invalid handle for stderr (" + r.fd + ")")
    },
    ensureErrnoError: () => {
        FS.ErrnoError || (FS.ErrnoError = function (t, r) {
            this.node = r, this.setErrno = function (n) {
                this.errno = n;
                for (var o in ERRNO_CODES) if (ERRNO_CODES[o] === n) {
                    this.code = o;
                    break
                }
            }, this.setErrno(t), this.message = ERRNO_MESSAGES[t], this.stack && (Object.defineProperty(this, "stack", {
                value: new Error().stack,
                writable: !0
            }), this.stack = demangleAll(this.stack))
        }, FS.ErrnoError.prototype = new Error, FS.ErrnoError.prototype.constructor = FS.ErrnoError, [44].forEach(e => {
            FS.genericErrors[e] = new FS.ErrnoError(e), FS.genericErrors[e].stack = "<generic error, no stack>"
        }))
    },
    staticInit: () => {
        FS.ensureErrnoError(), FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = {MEMFS}
    },
    init: (e, t, r) => {
        assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), FS.init.initialized = !0, FS.ensureErrnoError(), Module.stdin = e || Module.stdin, Module.stdout = t || Module.stdout, Module.stderr = r || Module.stderr, FS.createStandardStreams()
    },
    quit: () => {
        FS.init.initialized = !1, ___stdio_exit();
        for (var e = 0; e < FS.streams.length; e++) {
            var t = FS.streams[e];
            t && FS.close(t)
        }
    },
    getMode: (e, t) => {
        var r = 0;
        return e && (r |= 365), t && (r |= 146), r
    },
    findObject: (e, t) => {
        var r = FS.analyzePath(e, t);
        return r.exists ? r.object : null
    },
    analyzePath: (e, t) => {
        try {
            var r = FS.lookupPath(e, {follow: !t});
            e = r.path
        } catch {
        }
        var n = {
            isRoot: !1,
            exists: !1,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: !1,
            parentPath: null,
            parentObject: null
        };
        try {
            var r = FS.lookupPath(e, {parent: !0});
            n.parentExists = !0, n.parentPath = r.path, n.parentObject = r.node, n.name = PATH.basename(e), r = FS.lookupPath(e, {follow: !t}), n.exists = !0, n.path = r.path, n.object = r.node, n.name = r.node.name, n.isRoot = r.path === "/"
        } catch (o) {
            n.error = o.errno
        }
        return n
    },
    createPath: (e, t, r, n) => {
        e = typeof e == "string" ? e : FS.getPath(e);
        for (var o = t.split("/").reverse(); o.length;) {
            var i = o.pop();
            if (i) {
                var a = PATH.join2(e, i);
                try {
                    FS.mkdir(a)
                } catch {
                }
                e = a
            }
        }
        return a
    },
    createFile: (e, t, r, n, o) => {
        var i = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t), a = FS.getMode(n, o);
        return FS.create(i, a)
    },
    createDataFile: (e, t, r, n, o, i) => {
        var a = t;
        e && (e = typeof e == "string" ? e : FS.getPath(e), a = t ? PATH.join2(e, t) : e);
        var s = FS.getMode(n, o), d = FS.create(a, s);
        if (r) {
            if (typeof r == "string") {
                for (var c = new Array(r.length), l = 0, u = r.length; l < u; ++l) c[l] = r.charCodeAt(l);
                r = c
            }
            FS.chmod(d, s | 146);
            var f = FS.open(d, 577);
            FS.write(f, r, 0, r.length, 0, i), FS.close(f), FS.chmod(d, s)
        }
        return d
    },
    createDevice: (e, t, r, n) => {
        var o = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t), i = FS.getMode(!!r, !!n);
        FS.createDevice.major || (FS.createDevice.major = 64);
        var a = FS.makedev(FS.createDevice.major++, 0);
        return FS.registerDevice(a, {
            open: s => {
                s.seekable = !1
            }, close: s => {
                n && n.buffer && n.buffer.length && n(10)
            }, read: (s, d, c, l, u) => {
                for (var f = 0, E = 0; E < l; E++) {
                    var p;
                    try {
                        p = r()
                    } catch {
                        throw new FS.ErrnoError(29)
                    }
                    if (p === void 0 && f === 0) throw new FS.ErrnoError(6);
                    if (p == null) break;
                    f++, d[c + E] = p
                }
                return f && (s.node.timestamp = Date.now()), f
            }, write: (s, d, c, l, u) => {
                for (var f = 0; f < l; f++) try {
                    n(d[c + f])
                } catch {
                    throw new FS.ErrnoError(29)
                }
                return l && (s.node.timestamp = Date.now()), f
            }
        }), FS.mkdev(o, i, a)
    },
    forceLoadFile: e => {
        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
        if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        if (read_) try {
            e.contents = intArrayFromString(read_(e.url), !0), e.usedBytes = e.contents.length
        } catch {
            throw new FS.ErrnoError(29)
        } else throw new Error("Cannot load without read() or XMLHttpRequest.")
    },
    createLazyFile: (e, t, r, n, o) => {
        function i() {
            this.lengthKnown = !1, this.chunks = []
        }

        if (i.prototype.get = function (f) {
            if (!(f > this.length - 1 || f < 0)) {
                var E = f % this.chunkSize, p = f / this.chunkSize | 0;
                return this.getter(p)[E]
            }
        }, i.prototype.setDataGetter = function (f) {
            this.getter = f
        }, i.prototype.cacheLength = function () {
            var f = new XMLHttpRequest;
            if (f.open("HEAD", r, !1), f.send(null), !(f.status >= 200 && f.status < 300 || f.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + f.status);
            var E = Number(f.getResponseHeader("Content-length")), p,
                O = (p = f.getResponseHeader("Accept-Ranges")) && p === "bytes",
                g = (p = f.getResponseHeader("Content-Encoding")) && p === "gzip", h = 1024 * 1024;
            O || (h = E);
            var T = (_, m) => {
                if (_ > m) throw new Error("invalid range (" + _ + ", " + m + ") or no bytes requested!");
                if (m > E - 1) throw new Error("only " + E + " bytes available! programmer error!");
                var w = new XMLHttpRequest;
                if (w.open("GET", r, !1), E !== h && w.setRequestHeader("Range", "bytes=" + _ + "-" + m), w.responseType = "arraybuffer", w.overrideMimeType && w.overrideMimeType("text/plain; charset=x-user-defined"), w.send(null), !(w.status >= 200 && w.status < 300 || w.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + w.status);
                return w.response !== void 0 ? new Uint8Array(w.response || []) : intArrayFromString(w.responseText || "", !0)
            }, v = this;
            v.setDataGetter(_ => {
                var m = _ * h, w = (_ + 1) * h - 1;
                if (w = Math.min(w, E - 1), typeof v.chunks[_] > "u" && (v.chunks[_] = T(m, w)), typeof v.chunks[_] > "u") throw new Error("doXHR failed!");
                return v.chunks[_]
            }), (g || !E) && (h = E = 1, E = this.getter(0).length, h = E, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = E, this._chunkSize = h, this.lengthKnown = !0
        }, typeof XMLHttpRequest < "u") {
            if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var a = new i;
            Object.defineProperties(a, {
                length: {
                    get: function () {
                        return this.lengthKnown || this.cacheLength(), this._length
                    }
                }, chunkSize: {
                    get: function () {
                        return this.lengthKnown || this.cacheLength(), this._chunkSize
                    }
                }
            });
            var s = {isDevice: !1, contents: a}
        } else var s = {isDevice: !1, url: r};
        var d = FS.createFile(e, t, s, n, o);
        s.contents ? d.contents = s.contents : s.url && (d.contents = null, d.url = s.url), Object.defineProperties(d, {
            usedBytes: {
                get: function () {
                    return this.contents.length
                }
            }
        });
        var c = {}, l = Object.keys(d.stream_ops);
        return l.forEach(u => {
            var f = d.stream_ops[u];
            c[u] = function () {
                return FS.forceLoadFile(d), f.apply(null, arguments)
            }
        }), c.read = (u, f, E, p, O) => {
            FS.forceLoadFile(d);
            var g = u.node.contents;
            if (O >= g.length) return 0;
            var h = Math.min(g.length - O, p);
            if (assert(h >= 0), g.slice) for (var T = 0; T < h; T++) f[E + T] = g[O + T]; else for (var T = 0; T < h; T++) f[E + T] = g.get(O + T);
            return h
        }, d.stream_ops = c, d
    },
    createPreloadedFile: (e, t, r, n, o, i, a, s, d, c) => {
        var l = t ? PATH_FS.resolve(PATH.join2(e, t)) : e, u = getUniqueRunDependency("cp " + l);

        function f(E) {
            function p(O) {
                c && c(), s || FS.createDataFile(e, t, O, n, o, d), i && i(), removeRunDependency(u)
            }

            Browser.handledByPreloadPlugin(E, l, p, () => {
                a && a(), removeRunDependency(u)
            }) || p(E)
        }

        addRunDependency(u), typeof r == "string" ? asyncLoad(r, E => f(E), a) : f(r)
    },
    indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
    DB_NAME: () => "EM_FS_" + window.location.pathname,
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: (e, t, r) => {
        t = t || (() => {
        }), r = r || (() => {
        });
        var n = FS.indexedDB();
        try {
            var o = n.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (i) {
            return r(i)
        }
        o.onupgradeneeded = () => {
            out("creating db");
            var i = o.result;
            i.createObjectStore(FS.DB_STORE_NAME)
        }, o.onsuccess = () => {
            var i = o.result, a = i.transaction([FS.DB_STORE_NAME], "readwrite"), s = a.objectStore(FS.DB_STORE_NAME),
                d = 0, c = 0, l = e.length;

            function u() {
                c == 0 ? t() : r()
            }

            e.forEach(f => {
                var E = s.put(FS.analyzePath(f).object.contents, f);
                E.onsuccess = () => {
                    d++, d + c == l && u()
                }, E.onerror = () => {
                    c++, d + c == l && u()
                }
            }), a.onerror = r
        }, o.onerror = r
    },
    loadFilesFromDB: (e, t, r) => {
        t = t || (() => {
        }), r = r || (() => {
        });
        var n = FS.indexedDB();
        try {
            var o = n.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (i) {
            return r(i)
        }
        o.onupgradeneeded = r, o.onsuccess = () => {
            var i = o.result;
            try {
                var a = i.transaction([FS.DB_STORE_NAME], "readonly")
            } catch (f) {
                r(f);
                return
            }
            var s = a.objectStore(FS.DB_STORE_NAME), d = 0, c = 0, l = e.length;

            function u() {
                c == 0 ? t() : r()
            }

            e.forEach(f => {
                var E = s.get(f);
                E.onsuccess = () => {
                    FS.analyzePath(f).exists && FS.unlink(f), FS.createDataFile(PATH.dirname(f), PATH.basename(f), E.result, !0, !0, !0), d++, d + c == l && u()
                }, E.onerror = () => {
                    c++, d + c == l && u()
                }
            }), a.onerror = r
        }, o.onerror = r
    },
    absolutePath: () => {
        abort("FS.absolutePath has been removed; use PATH_FS.resolve instead")
    },
    createFolder: () => {
        abort("FS.createFolder has been removed; use FS.mkdir instead")
    },
    createLink: () => {
        abort("FS.createLink has been removed; use FS.symlink instead")
    },
    joinPath: () => {
        abort("FS.joinPath has been removed; use PATH.join instead")
    },
    mmapAlloc: () => {
        abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc")
    },
    standardizePath: () => {
        abort("FS.standardizePath has been removed; use PATH.normalize instead")
    }
}, SOCKFS = {
    mount: function (e) {
        return Module.websocket = Module.websocket && typeof Module.websocket == "object" ? Module.websocket : {}, Module.websocket._callbacks = {}, Module.websocket.on = function (t, r) {
            return typeof r == "function" && (this._callbacks[t] = r), this
        }, Module.websocket.emit = function (t, r) {
            typeof this._callbacks[t] == "function" && this._callbacks[t].call(this, r)
        }, FS.createNode(null, "/", 16895, 0)
    }, createSocket: function (e, t, r) {
        t &= -526337;
        var n = t == 1;
        r && assert(n == (r == 6));
        var o = {
            family: e,
            type: t,
            protocol: r,
            server: null,
            error: null,
            peers: {},
            pending: [],
            recv_queue: [],
            sock_ops: SOCKFS.websocket_sock_ops
        }, i = SOCKFS.nextname(), a = FS.createNode(SOCKFS.root, i, 49152, 0);
        a.sock = o;
        var s = FS.createStream({path: i, node: a, flags: 2, seekable: !1, stream_ops: SOCKFS.stream_ops});
        return o.stream = s, o
    }, getSocket: function (e) {
        var t = FS.getStream(e);
        return !t || !FS.isSocket(t.node.mode) ? null : t.node.sock
    }, stream_ops: {
        poll: function (e) {
            var t = e.node.sock;
            return t.sock_ops.poll(t)
        }, ioctl: function (e, t, r) {
            var n = e.node.sock;
            return n.sock_ops.ioctl(n, t, r)
        }, read: function (e, t, r, n, o) {
            var i = e.node.sock, a = i.sock_ops.recvmsg(i, n);
            return a ? (t.set(a.buffer, r), a.buffer.length) : 0
        }, write: function (e, t, r, n, o) {
            var i = e.node.sock;
            return i.sock_ops.sendmsg(i, t, r, n)
        }, close: function (e) {
            var t = e.node.sock;
            t.sock_ops.close(t)
        }
    }, nextname: function () {
        return SOCKFS.nextname.current || (SOCKFS.nextname.current = 0), "socket[" + SOCKFS.nextname.current++ + "]"
    }, websocket_sock_ops: {
        createPeer: function (e, t, r) {
            var n;
            if (typeof t == "object" && (n = t, t = null, r = null), n) if (n._socket) t = n._socket.remoteAddress, r = n._socket.remotePort; else {
                var o = /ws[s]?:\/\/([^:]+):(\d+)/.exec(n.url);
                if (!o) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
                t = o[1], r = parseInt(o[2], 10)
            } else try {
                var i = Module.websocket && typeof Module.websocket == "object", a = "ws:#".replace("#", "//");
                if (i && typeof Module.websocket.url == "string" && (a = Module.websocket.url), a === "ws://" || a === "wss://") {
                    var s = t.split("/");
                    a = a + s[0] + ":" + r + "/" + s.slice(1).join("/")
                }
                var d = "binary";
                i && typeof Module.websocket.subprotocol == "string" && (d = Module.websocket.subprotocol);
                var c = void 0;
                d !== "null" && (d = d.replace(/^ +| +$/g, "").split(/ *, */), c = ENVIRONMENT_IS_NODE ? {protocol: d.toString()} : d), i && Module.websocket.subprotocol === null && (d = "null", c = void 0);
                var l;
                ENVIRONMENT_IS_NODE ? l = require("ws") : l = WebSocket, n = new l(a, c), n.binaryType = "arraybuffer"
            } catch {
                throw new FS.ErrnoError(23)
            }
            var u = {addr: t, port: r, socket: n, dgram_send_queue: []};
            return SOCKFS.websocket_sock_ops.addPeer(e, u), SOCKFS.websocket_sock_ops.handlePeerEvents(e, u), e.type === 2 && typeof e.sport < "u" && u.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (e.sport & 65280) >> 8, e.sport & 255])), u
        }, getPeer: function (e, t, r) {
            return e.peers[t + ":" + r]
        }, addPeer: function (e, t) {
            e.peers[t.addr + ":" + t.port] = t
        }, removePeer: function (e, t) {
            delete e.peers[t.addr + ":" + t.port]
        }, handlePeerEvents: function (e, t) {
            var r = !0, n = function () {
                Module.websocket.emit("open", e.stream.fd);
                try {
                    for (var i = t.dgram_send_queue.shift(); i;) t.socket.send(i), i = t.dgram_send_queue.shift()
                } catch {
                    t.socket.close()
                }
            };

            function o(i) {
                if (typeof i == "string") {
                    var a = new TextEncoder;
                    i = a.encode(i)
                } else {
                    if (assert(i.byteLength !== void 0), i.byteLength == 0) return;
                    i = new Uint8Array(i)
                }
                var s = r;
                if (r = !1, s && i.length === 10 && i[0] === 255 && i[1] === 255 && i[2] === 255 && i[3] === 255 && i[4] === 112 && i[5] === 111 && i[6] === 114 && i[7] === 116) {
                    var d = i[8] << 8 | i[9];
                    SOCKFS.websocket_sock_ops.removePeer(e, t), t.port = d, SOCKFS.websocket_sock_ops.addPeer(e, t);
                    return
                }
                e.recv_queue.push({addr: t.addr, port: t.port, data: i}), Module.websocket.emit("message", e.stream.fd)
            }

            ENVIRONMENT_IS_NODE ? (t.socket.on("open", n), t.socket.on("message", function (i, a) {
                a.binary && o(new Uint8Array(i).buffer)
            }), t.socket.on("close", function () {
                Module.websocket.emit("close", e.stream.fd)
            }), t.socket.on("error", function (i) {
                e.error = 14, Module.websocket.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"])
            })) : (t.socket.onopen = n, t.socket.onclose = function () {
                Module.websocket.emit("close", e.stream.fd)
            }, t.socket.onmessage = function (a) {
                o(a.data)
            }, t.socket.onerror = function (i) {
                e.error = 14, Module.websocket.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"])
            })
        }, poll: function (e) {
            if (e.type === 1 && e.server) return e.pending.length ? 65 : 0;
            var t = 0, r = e.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
            return (e.recv_queue.length || !r || r && r.socket.readyState === r.socket.CLOSING || r && r.socket.readyState === r.socket.CLOSED) && (t |= 65), (!r || r && r.socket.readyState === r.socket.OPEN) && (t |= 4), (r && r.socket.readyState === r.socket.CLOSING || r && r.socket.readyState === r.socket.CLOSED) && (t |= 16), t
        }, ioctl: function (e, t, r) {
            switch (t) {
                case 21531:
                    var n = 0;
                    return e.recv_queue.length && (n = e.recv_queue[0].data.length), HEAP32[r >> 2] = n, 0;
                default:
                    return 28
            }
        }, close: function (e) {
            if (e.server) {
                try {
                    e.server.close()
                } catch {
                }
                e.server = null
            }
            for (var t = Object.keys(e.peers), r = 0; r < t.length; r++) {
                var n = e.peers[t[r]];
                try {
                    n.socket.close()
                } catch {
                }
                SOCKFS.websocket_sock_ops.removePeer(e, n)
            }
            return 0
        }, bind: function (e, t, r) {
            if (typeof e.saddr < "u" || typeof e.sport < "u") throw new FS.ErrnoError(28);
            if (e.saddr = t, e.sport = r, e.type === 2) {
                e.server && (e.server.close(), e.server = null);
                try {
                    e.sock_ops.listen(e, 0)
                } catch (n) {
                    if (!(n instanceof FS.ErrnoError) || n.errno !== 138) throw n
                }
            }
        }, connect: function (e, t, r) {
            if (e.server) throw new FS.ErrnoError(138);
            if (typeof e.daddr < "u" && typeof e.dport < "u") {
                var n = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                if (n) throw n.socket.readyState === n.socket.CONNECTING ? new FS.ErrnoError(7) : new FS.ErrnoError(30)
            }
            var o = SOCKFS.websocket_sock_ops.createPeer(e, t, r);
            throw e.daddr = o.addr, e.dport = o.port, new FS.ErrnoError(26)
        }, listen: function (e, t) {
            if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(138);
            if (e.server) throw new FS.ErrnoError(28);
            var r = require("ws").Server, n = e.saddr;
            e.server = new r({
                host: n,
                port: e.sport
            }), Module.websocket.emit("listen", e.stream.fd), e.server.on("connection", function (o) {
                if (e.type === 1) {
                    var i = SOCKFS.createSocket(e.family, e.type, e.protocol),
                        a = SOCKFS.websocket_sock_ops.createPeer(i, o);
                    i.daddr = a.addr, i.dport = a.port, e.pending.push(i), Module.websocket.emit("connection", i.stream.fd)
                } else SOCKFS.websocket_sock_ops.createPeer(e, o), Module.websocket.emit("connection", e.stream.fd)
            }), e.server.on("closed", function () {
                Module.websocket.emit("close", e.stream.fd), e.server = null
            }), e.server.on("error", function (o) {
                e.error = 23, Module.websocket.emit("error", [e.stream.fd, e.error, "EHOSTUNREACH: Host is unreachable"])
            })
        }, accept: function (e) {
            if (!e.server) throw new FS.ErrnoError(28);
            var t = e.pending.shift();
            return t.stream.flags = e.stream.flags, t
        }, getname: function (e, t) {
            var r, n;
            if (t) {
                if (e.daddr === void 0 || e.dport === void 0) throw new FS.ErrnoError(53);
                r = e.daddr, n = e.dport
            } else r = e.saddr || 0, n = e.sport || 0;
            return {addr: r, port: n}
        }, sendmsg: function (e, t, r, n, o, i) {
            if (e.type === 2) {
                if ((o === void 0 || i === void 0) && (o = e.daddr, i = e.dport), o === void 0 || i === void 0) throw new FS.ErrnoError(17)
            } else o = e.daddr, i = e.dport;
            var a = SOCKFS.websocket_sock_ops.getPeer(e, o, i);
            if (e.type === 1) {
                if (!a || a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED) throw new FS.ErrnoError(53);
                if (a.socket.readyState === a.socket.CONNECTING) throw new FS.ErrnoError(6)
            }
            ArrayBuffer.isView(t) && (r += t.byteOffset, t = t.buffer);
            var s;
            if (s = t.slice(r, r + n), e.type === 2 && (!a || a.socket.readyState !== a.socket.OPEN)) return (!a || a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED) && (a = SOCKFS.websocket_sock_ops.createPeer(e, o, i)), a.dgram_send_queue.push(s), n;
            try {
                return a.socket.send(s), n
            } catch {
                throw new FS.ErrnoError(28)
            }
        }, recvmsg: function (e, t) {
            if (e.type === 1 && e.server) throw new FS.ErrnoError(53);
            var r = e.recv_queue.shift();
            if (!r) if (e.type === 1) {
                var n = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
                if (n) {
                    if (n.socket.readyState === n.socket.CLOSING || n.socket.readyState === n.socket.CLOSED) return null;
                    throw new FS.ErrnoError(6)
                } else throw new FS.ErrnoError(53)
            } else throw new FS.ErrnoError(6);
            var o = r.data.byteLength || r.data.length, i = r.data.byteOffset || 0, a = r.data.buffer || r.data,
                s = Math.min(t, o), d = {buffer: new Uint8Array(a, i, s), addr: r.addr, port: r.port};
            if (e.type === 1 && s < o) {
                var c = o - s;
                r.data = new Uint8Array(a, i + s, c), e.recv_queue.unshift(r)
            }
            return d
        }
    }
};

function getSocketFromFD(e) {
    var t = SOCKFS.getSocket(e);
    if (!t) throw new FS.ErrnoError(8);
    return t
}

function setErrNo(e) {
    return HEAP32[___errno_location() >> 2] = e, e
}

var Sockets = {
    BUFFER_SIZE: 10240,
    MAX_BUFFER_SIZE: 10485760,
    nextFd: 1,
    fds: {},
    nextport: 1,
    maxport: 65535,
    peer: null,
    connections: {},
    portmap: {},
    localAddr: 4261412874,
    addrPool: [33554442, 50331658, 67108874, 83886090, 100663306, 117440522, 134217738, 150994954, 167772170, 184549386, 201326602, 218103818, 234881034]
};

function inetNtop4(e) {
    return (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255)
}

function inetNtop6(e) {
    var t = "", r = 0, n = 0, o = 0, i = 0, a = 0, s = 0,
        d = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16],
        c = !0, l = "";
    for (s = 0; s < 5; s++) if (d[s] !== 0) {
        c = !1;
        break
    }
    if (c) {
        if (l = inetNtop4(d[6] | d[7] << 16), d[5] === -1) return t = "::ffff:", t += l, t;
        if (d[5] === 0) return t = "::", l === "0.0.0.0" && (l = ""), l === "0.0.0.1" && (l = "1"), t += l, t
    }
    for (r = 0; r < 8; r++) d[r] === 0 && (r - o > 1 && (a = 0), o = r, a++), a > n && (n = a, i = r - n + 1);
    for (r = 0; r < 8; r++) {
        if (n > 1 && d[r] === 0 && r >= i && r < i + n) {
            r === i && (t += ":", i === 0 && (t += ":"));
            continue
        }
        t += Number(_ntohs(d[r] & 65535)).toString(16), t += r < 7 ? ":" : ""
    }
    return t
}

function readSockaddr(e, t) {
    var r = HEAP16[e >> 1], n = _ntohs(HEAPU16[e + 2 >> 1]), o;
    switch (r) {
        case 2:
            if (t !== 16) return {errno: 28};
            o = HEAP32[e + 4 >> 2], o = inetNtop4(o);
            break;
        case 10:
            if (t !== 28) return {errno: 28};
            o = [HEAP32[e + 8 >> 2], HEAP32[e + 12 >> 2], HEAP32[e + 16 >> 2], HEAP32[e + 20 >> 2]], o = inetNtop6(o);
            break;
        default:
            return {errno: 5}
    }
    return {family: r, addr: o, port: n}
}

function inetPton4(e) {
    for (var t = e.split("."), r = 0; r < 4; r++) {
        var n = Number(t[r]);
        if (isNaN(n)) return null;
        t[r] = n
    }
    return (t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24) >>> 0
}

function jstoi_q(e) {
    return parseInt(e)
}

function inetPton6(e) {
    var t, r, n, o, i,
        a = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
        s = [];
    if (!a.test(e)) return null;
    if (e === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
    for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), t = e.split(":"), t[t.length - 4] = jstoi_q(t[t.length - 4]) + jstoi_q(t[t.length - 3]) * 256, t[t.length - 3] = jstoi_q(t[t.length - 2]) + jstoi_q(t[t.length - 1]) * 256, t = t.slice(0, t.length - 2)) : t = e.split(":"), n = 0, o = 0, r = 0; r < t.length; r++) if (typeof t[r] == "string") if (t[r] === "Z") {
        for (o = 0; o < 8 - t.length + 1; o++) s[r + o] = 0;
        n = o - 1
    } else s[r + n] = _htons(parseInt(t[r], 16)); else s[r + n] = t[r];
    return [s[1] << 16 | s[0], s[3] << 16 | s[2], s[5] << 16 | s[4], s[7] << 16 | s[6]]
}

var DNS = {
    address_map: {id: 1, addrs: {}, names: {}}, lookup_name: function (e) {
        var t = inetPton4(e);
        if (t !== null || (t = inetPton6(e), t !== null)) return e;
        var r;
        if (DNS.address_map.addrs[e]) r = DNS.address_map.addrs[e]; else {
            var n = DNS.address_map.id++;
            assert(n < 65535, "exceeded max address mappings of 65535"), r = "172.29." + (n & 255) + "." + (n & 65280), DNS.address_map.names[r] = e, DNS.address_map.addrs[e] = r
        }
        return r
    }, lookup_addr: function (e) {
        return DNS.address_map.names[e] ? DNS.address_map.names[e] : null
    }
};

function getSocketAddress(e, t, r) {
    if (r && e === 0) return null;
    var n = readSockaddr(e, t);
    if (n.errno) throw new FS.ErrnoError(n.errno);
    return n.addr = DNS.lookup_addr(n.addr) || n.addr, n
}

var SYSCALLS = {
    DEFAULT_POLLMASK: 5, calculateAt: function (e, t, r) {
        if (t[0] === "/") return t;
        var n;
        if (e === -100) n = FS.cwd(); else {
            var o = FS.getStream(e);
            if (!o) throw new FS.ErrnoError(8);
            n = o.path
        }
        if (t.length == 0) {
            if (!r) throw new FS.ErrnoError(44);
            return n
        }
        return PATH.join2(n, t)
    }, doStat: function (e, t, r) {
        try {
            var n = e(t)
        } catch (o) {
            if (o && o.node && PATH.normalize(t) !== PATH.normalize(FS.getPath(o.node))) return -54;
            throw o
        }
        return HEAP32[r >> 2] = n.dev, HEAP32[r + 4 >> 2] = 0, HEAP32[r + 8 >> 2] = n.ino, HEAP32[r + 12 >> 2] = n.mode, HEAP32[r + 16 >> 2] = n.nlink, HEAP32[r + 20 >> 2] = n.uid, HEAP32[r + 24 >> 2] = n.gid, HEAP32[r + 28 >> 2] = n.rdev, HEAP32[r + 32 >> 2] = 0, tempI64 = [n.size >>> 0, (tempDouble = n.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[r + 40 >> 2] = tempI64[0], HEAP32[r + 44 >> 2] = tempI64[1], HEAP32[r + 48 >> 2] = 4096, HEAP32[r + 52 >> 2] = n.blocks, HEAP32[r + 56 >> 2] = n.atime.getTime() / 1e3 | 0, HEAP32[r + 60 >> 2] = 0, HEAP32[r + 64 >> 2] = n.mtime.getTime() / 1e3 | 0, HEAP32[r + 68 >> 2] = 0, HEAP32[r + 72 >> 2] = n.ctime.getTime() / 1e3 | 0, HEAP32[r + 76 >> 2] = 0, tempI64 = [n.ino >>> 0, (tempDouble = n.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[r + 80 >> 2] = tempI64[0], HEAP32[r + 84 >> 2] = tempI64[1], 0
    }, doMsync: function (e, t, r, n, o) {
        var i = HEAPU8.slice(e, e + r);
        FS.msync(t, i, o, r, n)
    }, doMkdir: function (e, t) {
        return e = PATH.normalize(e), e[e.length - 1] === "/" && (e = e.substr(0, e.length - 1)), FS.mkdir(e, t, 0), 0
    }, doMknod: function (e, t, r) {
        switch (t & 61440) {
            case 32768:
            case 8192:
            case 24576:
            case 4096:
            case 49152:
                break;
            default:
                return -28
        }
        return FS.mknod(e, t, r), 0
    }, doReadlink: function (e, t, r) {
        if (r <= 0) return -28;
        var n = FS.readlink(e), o = Math.min(r, lengthBytesUTF8(n)), i = HEAP8[t + o];
        return stringToUTF8(n, t, r + 1), HEAP8[t + o] = i, o
    }, doAccess: function (e, t) {
        if (t & -8) return -28;
        var r = FS.lookupPath(e, {follow: !0}), n = r.node;
        if (!n) return -44;
        var o = "";
        return t & 4 && (o += "r"), t & 2 && (o += "w"), t & 1 && (o += "x"), o && FS.nodePermissions(n, o) ? -2 : 0
    }, doDup: function (e, t, r) {
        var n = FS.getStream(r);
        return n && FS.close(n), FS.open(e, t, 0, r, r).fd
    }, doReadv: function (e, t, r, n) {
        for (var o = 0, i = 0; i < r; i++) {
            var a = HEAP32[t + i * 8 >> 2], s = HEAP32[t + (i * 8 + 4) >> 2], d = FS.read(e, HEAP8, a, s, n);
            if (d < 0) return -1;
            if (o += d, d < s) break
        }
        return o
    }, doWritev: function (e, t, r, n) {
        for (var o = 0, i = 0; i < r; i++) {
            var a = HEAP32[t + i * 8 >> 2], s = HEAP32[t + (i * 8 + 4) >> 2], d = FS.write(e, HEAP8, a, s, n);
            if (d < 0) return -1;
            o += d
        }
        return o
    }, varargs: void 0, get: function () {
        assert(SYSCALLS.varargs != null), SYSCALLS.varargs += 4;
        var e = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return e
    }, getStr: function (e) {
        var t = UTF8ToString(e);
        return t
    }, getStreamFromFD: function (e) {
        var t = FS.getStream(e);
        if (!t) throw new FS.ErrnoError(8);
        return t
    }, get64: function (e, t) {
        return e >= 0 ? assert(t === 0) : assert(t === -1), e
    }
};

function ___syscall_connect(e, t, r) {
    try {
        var n = getSocketFromFD(e), o = getSocketAddress(t, r);
        return n.sock_ops.connect(n, o.addr, o.port), 0
    } catch (i) {
        if (typeof FS > "u" || !(i instanceof FS.ErrnoError)) throw i;
        return -i.errno
    }
}

function ___syscall_fcntl64(e, t, r) {
    SYSCALLS.varargs = r;
    try {
        var n = SYSCALLS.getStreamFromFD(e);
        switch (t) {
            case 0: {
                var o = SYSCALLS.get();
                if (o < 0) return -28;
                var i;
                return i = FS.open(n.path, n.flags, 0, o), i.fd
            }
            case 1:
            case 2:
                return 0;
            case 3:
                return n.flags;
            case 4: {
                var o = SYSCALLS.get();
                return n.flags |= o, 0
            }
            case 5: {
                var o = SYSCALLS.get(), a = 0;
                return HEAP16[o + a >> 1] = 2, 0
            }
            case 6:
            case 7:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                return setErrNo(28), -1;
            default:
                return -28
        }
    } catch (s) {
        if (typeof FS > "u" || !(s instanceof FS.ErrnoError)) throw s;
        return -s.errno
    }
}

function ___syscall_ioctl(e, t, r) {
    SYSCALLS.varargs = r;
    try {
        var n = SYSCALLS.getStreamFromFD(e);
        switch (t) {
            case 21509:
            case 21505:
                return n.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
                return n.tty ? 0 : -59;
            case 21519: {
                if (!n.tty) return -59;
                var o = SYSCALLS.get();
                return HEAP32[o >> 2] = 0, 0
            }
            case 21520:
                return n.tty ? -28 : -59;
            case 21531: {
                var o = SYSCALLS.get();
                return FS.ioctl(n, t, o)
            }
            case 21523:
                return n.tty ? 0 : -59;
            case 21524:
                return n.tty ? 0 : -59;
            default:
                abort("bad ioctl syscall " + t)
        }
    } catch (i) {
        if (typeof FS > "u" || !(i instanceof FS.ErrnoError)) throw i;
        return -i.errno
    }
}

function ___syscall_open(e, t, r) {
    SYSCALLS.varargs = r;
    try {
        var n = SYSCALLS.getStr(e), o = r ? SYSCALLS.get() : 0, i = FS.open(n, t, o);
        return i.fd
    } catch (a) {
        if (typeof FS > "u" || !(a instanceof FS.ErrnoError)) throw a;
        return -a.errno
    }
}

function writeSockaddr(e, t, r, n, o) {
    switch (t) {
        case 2:
            r = inetPton4(r), zeroMemory(e, 16), o && (HEAP32[o >> 2] = 16), HEAP16[e >> 1] = t, HEAP32[e + 4 >> 2] = r, HEAP16[e + 2 >> 1] = _htons(n);
            break;
        case 10:
            r = inetPton6(r), zeroMemory(e, 28), o && (HEAP32[o >> 2] = 28), HEAP32[e >> 2] = t, HEAP32[e + 8 >> 2] = r[0], HEAP32[e + 12 >> 2] = r[1], HEAP32[e + 16 >> 2] = r[2], HEAP32[e + 20 >> 2] = r[3], HEAP16[e + 2 >> 1] = _htons(n);
            break;
        default:
            return 5
    }
    return 0
}

function ___syscall_recvfrom(e, t, r, n, o, i) {
    try {
        var a = getSocketFromFD(e), s = a.sock_ops.recvmsg(a, r);
        if (!s) return 0;
        if (o) {
            var d = writeSockaddr(o, a.family, DNS.lookup_name(s.addr), s.port, i);
            assert(!d)
        }
        return HEAPU8.set(s.buffer, t), s.buffer.byteLength
    } catch (c) {
        if (typeof FS > "u" || !(c instanceof FS.ErrnoError)) throw c;
        return -c.errno
    }
}

function ___syscall_sendto(e, t, r, n, o, i) {
    try {
        var a = getSocketFromFD(e), s = getSocketAddress(o, i, !0);
        return s ? a.sock_ops.sendmsg(a, HEAP8, t, r, s.addr, s.port) : FS.write(a.stream, HEAP8, t, r)
    } catch (d) {
        if (typeof FS > "u" || !(d instanceof FS.ErrnoError)) throw d;
        return -d.errno
    }
}

function ___syscall_socket(e, t, r) {
    try {
        var n = SOCKFS.createSocket(e, t, r);
        return assert(n.stream.fd < 64), n.stream.fd
    } catch (o) {
        if (typeof FS > "u" || !(o instanceof FS.ErrnoError)) throw o;
        return -o.errno
    }
}

function _emscripten_memcpy_big(e, t, r) {
    HEAPU8.copyWithin(e, t, t + r)
}

function _emscripten_get_heap_max() {
    return 2147483648
}

function emscripten_realloc_buffer(e) {
    try {
        return wasmMemory.grow(e - buffer.byteLength + 65535 >>> 16), updateGlobalBufferAndViews(wasmMemory.buffer), 1
    } catch (t) {
        err("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + e + " bytes, but got error: " + t)
    }
}

function _emscripten_resize_heap(e) {
    var t = HEAPU8.length;
    e = e >>> 0, assert(e > t);
    var r = _emscripten_get_heap_max();
    if (e > r) return err("Cannot enlarge memory, asked to go up to " + e + " bytes, but the limit is " + r + " bytes!"), !1;
    for (var n = 1; n <= 4; n *= 2) {
        var o = t * (1 + .2 / n);
        o = Math.min(o, e + 100663296);
        var i = Math.min(r, alignUp(Math.max(e, o), 65536)), a = emscripten_realloc_buffer(i);
        if (a) return !0
    }
    return err("Failed to grow the heap from " + t + " bytes to " + i + " bytes, not enough memory!"), !1
}

var ENV = {};

function getExecutableName() {
    return thisProgram || "./this.program"
}

function getEnvStrings() {
    if (!getEnvStrings.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            t = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: e,
                _: getExecutableName()
            };
        for (var r in ENV) ENV[r] === void 0 ? delete t[r] : t[r] = ENV[r];
        var n = [];
        for (var r in t) n.push(r + "=" + t[r]);
        getEnvStrings.strings = n
    }
    return getEnvStrings.strings
}

function _environ_get(e, t) {
    var r = 0;
    return getEnvStrings().forEach(function (n, o) {
        var i = t + r;
        HEAP32[e + o * 4 >> 2] = i, writeAsciiToMemory(n, i), r += n.length + 1
    }), 0
}

function _environ_sizes_get(e, t) {
    var r = getEnvStrings();
    HEAP32[e >> 2] = r.length;
    var n = 0;
    return r.forEach(function (o) {
        n += o.length + 1
    }), HEAP32[t >> 2] = n, 0
}

function _exit(e) {
    exit(e)
}

function _fd_close(e) {
    try {
        var t = SYSCALLS.getStreamFromFD(e);
        return FS.close(t), 0
    } catch (r) {
        if (typeof FS > "u" || !(r instanceof FS.ErrnoError)) throw r;
        return r.errno
    }
}

function _fd_read(e, t, r, n) {
    try {
        var o = SYSCALLS.getStreamFromFD(e), i = SYSCALLS.doReadv(o, t, r);
        return HEAP32[n >> 2] = i, 0
    } catch (a) {
        if (typeof FS > "u" || !(a instanceof FS.ErrnoError)) throw a;
        return a.errno
    }
}

function _fd_seek(e, t, r, n, o) {
    try {
        var i = SYSCALLS.getStreamFromFD(e), a = 4294967296, s = r * a + (t >>> 0), d = 9007199254740992;
        return s <= -d || s >= d ? -61 : (FS.llseek(i, s, n), tempI64 = [i.position >>> 0, (tempDouble = i.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[o >> 2] = tempI64[0], HEAP32[o + 4 >> 2] = tempI64[1], i.getdents && s === 0 && n === 0 && (i.getdents = null), 0)
    } catch (c) {
        if (typeof FS > "u" || !(c instanceof FS.ErrnoError)) throw c;
        return c.errno
    }
}

function _fd_write(e, t, r, n) {
    try {
        var o = SYSCALLS.getStreamFromFD(e), i = SYSCALLS.doWritev(o, t, r);
        return HEAP32[n >> 2] = i, 0
    } catch (a) {
        if (typeof FS > "u" || !(a instanceof FS.ErrnoError)) throw a;
        return a.errno
    }
}

function _getaddrinfo(e, t, r, n) {
    var o = [], i = null, a = 0, s = 0, d = 0, c = 0, l = 0, u = 0, f, E;

    function p(O, g, h, T, v, _) {
        var m, w, y, D;
        return w = O === 10 ? 28 : 16, v = O === 10 ? inetNtop6(v) : inetNtop4(v), m = _malloc(w), D = writeSockaddr(m, O, v, _), assert(!D), y = _malloc(32), HEAP32[y + 4 >> 2] = O, HEAP32[y + 8 >> 2] = g, HEAP32[y + 12 >> 2] = h, HEAP32[y + 24 >> 2] = T, HEAP32[y + 20 >> 2] = m, O === 10 ? HEAP32[y + 16 >> 2] = 28 : HEAP32[y + 16 >> 2] = 16, HEAP32[y + 28 >> 2] = 0, y
    }

    if (r && (d = HEAP32[r >> 2], c = HEAP32[r + 4 >> 2], l = HEAP32[r + 8 >> 2], u = HEAP32[r + 12 >> 2]), l && !u && (u = l === 2 ? 17 : 6), !l && u && (l = u === 17 ? 2 : 1), u === 0 && (u = 6), l === 0 && (l = 1), !e && !t) return -2;
    if (d & -1088 || r !== 0 && HEAP32[r >> 2] & 2 && !e) return -1;
    if (d & 32) return -2;
    if (l !== 0 && l !== 1 && l !== 2) return -7;
    if (c !== 0 && c !== 2 && c !== 10) return -6;
    if (t && (t = UTF8ToString(t), s = parseInt(t, 10), isNaN(s))) return d & 1024 ? -2 : -8;
    if (!e) return c === 0 && (c = 2), d & 1 || (c === 2 ? a = _htonl(2130706433) : a = [0, 0, 0, 1]), f = p(c, l, u, null, a, s), HEAP32[n >> 2] = f, 0;
    if (e = UTF8ToString(e), a = inetPton4(e), a !== null) if (c === 0 || c === 2) c = 2; else if (c === 10 && d & 8) a = [0, 0, _htonl(65535), a], c = 10; else return -2; else if (a = inetPton6(e), a !== null) if (c === 0 || c === 10) c = 10; else return -2;
    return a != null ? (f = p(c, l, u, e, a, s), HEAP32[n >> 2] = f, 0) : d & 4 ? -2 : (e = DNS.lookup_name(e), a = inetPton4(e), c === 0 ? c = 2 : c === 10 && (a = [0, 0, _htonl(65535), a]), f = p(c, l, u, null, a, s), HEAP32[n >> 2] = f, 0)
}

function _setTempRet0(e) {
    setTempRet0(e)
}

var FSNode = function (e, t, r, n) {
    e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = FS.nextInode++, this.name = t, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = n
}, readMode = 365, writeMode = 146;
Object.defineProperties(FSNode.prototype, {
    read: {
        get: function () {
            return (this.mode & readMode) === readMode
        }, set: function (e) {
            e ? this.mode |= readMode : this.mode &= ~readMode
        }
    }, write: {
        get: function () {
            return (this.mode & writeMode) === writeMode
        }, set: function (e) {
            e ? this.mode |= writeMode : this.mode &= ~writeMode
        }
    }, isFolder: {
        get: function () {
            return FS.isDir(this.mode)
        }
    }, isDevice: {
        get: function () {
            return FS.isChrdev(this.mode)
        }
    }
}), FS.FSNode = FSNode, FS.staticInit(), ERRNO_CODES = {
    EPERM: 63,
    ENOENT: 44,
    ESRCH: 71,
    EINTR: 27,
    EIO: 29,
    ENXIO: 60,
    E2BIG: 1,
    ENOEXEC: 45,
    EBADF: 8,
    ECHILD: 12,
    EAGAIN: 6,
    EWOULDBLOCK: 6,
    ENOMEM: 48,
    EACCES: 2,
    EFAULT: 21,
    ENOTBLK: 105,
    EBUSY: 10,
    EEXIST: 20,
    EXDEV: 75,
    ENODEV: 43,
    ENOTDIR: 54,
    EISDIR: 31,
    EINVAL: 28,
    ENFILE: 41,
    EMFILE: 33,
    ENOTTY: 59,
    ETXTBSY: 74,
    EFBIG: 22,
    ENOSPC: 51,
    ESPIPE: 70,
    EROFS: 69,
    EMLINK: 34,
    EPIPE: 64,
    EDOM: 18,
    ERANGE: 68,
    ENOMSG: 49,
    EIDRM: 24,
    ECHRNG: 106,
    EL2NSYNC: 156,
    EL3HLT: 107,
    EL3RST: 108,
    ELNRNG: 109,
    EUNATCH: 110,
    ENOCSI: 111,
    EL2HLT: 112,
    EDEADLK: 16,
    ENOLCK: 46,
    EBADE: 113,
    EBADR: 114,
    EXFULL: 115,
    ENOANO: 104,
    EBADRQC: 103,
    EBADSLT: 102,
    EDEADLOCK: 16,
    EBFONT: 101,
    ENOSTR: 100,
    ENODATA: 116,
    ETIME: 117,
    ENOSR: 118,
    ENONET: 119,
    ENOPKG: 120,
    EREMOTE: 121,
    ENOLINK: 47,
    EADV: 122,
    ESRMNT: 123,
    ECOMM: 124,
    EPROTO: 65,
    EMULTIHOP: 36,
    EDOTDOT: 125,
    EBADMSG: 9,
    ENOTUNIQ: 126,
    EBADFD: 127,
    EREMCHG: 128,
    ELIBACC: 129,
    ELIBBAD: 130,
    ELIBSCN: 131,
    ELIBMAX: 132,
    ELIBEXEC: 133,
    ENOSYS: 52,
    ENOTEMPTY: 55,
    ENAMETOOLONG: 37,
    ELOOP: 32,
    EOPNOTSUPP: 138,
    EPFNOSUPPORT: 139,
    ECONNRESET: 15,
    ENOBUFS: 42,
    EAFNOSUPPORT: 5,
    EPROTOTYPE: 67,
    ENOTSOCK: 57,
    ENOPROTOOPT: 50,
    ESHUTDOWN: 140,
    ECONNREFUSED: 14,
    EADDRINUSE: 3,
    ECONNABORTED: 13,
    ENETUNREACH: 40,
    ENETDOWN: 38,
    ETIMEDOUT: 73,
    EHOSTDOWN: 142,
    EHOSTUNREACH: 23,
    EINPROGRESS: 26,
    EALREADY: 7,
    EDESTADDRREQ: 17,
    EMSGSIZE: 35,
    EPROTONOSUPPORT: 66,
    ESOCKTNOSUPPORT: 137,
    EADDRNOTAVAIL: 4,
    ENETRESET: 39,
    EISCONN: 30,
    ENOTCONN: 53,
    ETOOMANYREFS: 141,
    EUSERS: 136,
    EDQUOT: 19,
    ESTALE: 72,
    ENOTSUP: 138,
    ENOMEDIUM: 148,
    EILSEQ: 25,
    EOVERFLOW: 61,
    ECANCELED: 11,
    ENOTRECOVERABLE: 56,
    EOWNERDEAD: 62,
    ESTRPIPE: 135
};
var ASSERTIONS = !0;

function intArrayFromString(e, t, r) {
    var n = r > 0 ? r : lengthBytesUTF8(e) + 1, o = new Array(n), i = stringToUTF8Array(e, o, 0, o.length);
    return t && (o.length = i), o
}

function intArrayToString(e) {
    for (var t = [], r = 0; r < e.length; r++) {
        var n = e[r];
        n > 255 && (ASSERTIONS && assert(!1, "Character code " + n + " (" + String.fromCharCode(n) + ")  at offset " + r + " not in 0x00-0xFF."), n &= 255), t.push(String.fromCharCode(n))
    }
    return t.join("")
}

var asmLibraryArg = {
        __syscall_connect: ___syscall_connect,
        __syscall_fcntl64: ___syscall_fcntl64,
        __syscall_ioctl: ___syscall_ioctl,
        __syscall_open: ___syscall_open,
        __syscall_recvfrom: ___syscall_recvfrom,
        __syscall_sendto: ___syscall_sendto,
        __syscall_socket: ___syscall_socket,
        emscripten_memcpy_big: _emscripten_memcpy_big,
        emscripten_resize_heap: _emscripten_resize_heap,
        environ_get: _environ_get,
        environ_sizes_get: _environ_sizes_get,
        exit: _exit,
        fd_close: _fd_close,
        fd_read: _fd_read,
        fd_seek: _fd_seek,
        fd_write: _fd_write,
        getaddrinfo: _getaddrinfo,
        setTempRet0: _setTempRet0
    }, asm = createWasm(), ___wasm_call_ctors = Module.___wasm_call_ctors = createExportWrapper("__wasm_call_ctors"),
    _malloc = Module._malloc = createExportWrapper("malloc"), _main = Module._main = createExportWrapper("main"),
    ___errno_location = Module.___errno_location = createExportWrapper("__errno_location"),
    ___stdio_exit = Module.___stdio_exit = createExportWrapper("__stdio_exit"),
    _htonl = Module._htonl = createExportWrapper("htonl"), _htons = Module._htons = createExportWrapper("htons"),
    _ntohs = Module._ntohs = createExportWrapper("ntohs"),
    _emscripten_stack_init = Module._emscripten_stack_init = function () {
        return (_emscripten_stack_init = Module._emscripten_stack_init = Module.asm.emscripten_stack_init).apply(null, arguments)
    }, _emscripten_stack_get_free = Module._emscripten_stack_get_free = function () {
        return (_emscripten_stack_get_free = Module._emscripten_stack_get_free = Module.asm.emscripten_stack_get_free).apply(null, arguments)
    }, _emscripten_stack_get_base = Module._emscripten_stack_get_base = function () {
        return (_emscripten_stack_get_base = Module._emscripten_stack_get_base = Module.asm.emscripten_stack_get_base).apply(null, arguments)
    }, _emscripten_stack_get_end = Module._emscripten_stack_get_end = function () {
        return (_emscripten_stack_get_end = Module._emscripten_stack_get_end = Module.asm.emscripten_stack_get_end).apply(null, arguments)
    }, stackSave = Module.stackSave = createExportWrapper("stackSave"),
    stackRestore = Module.stackRestore = createExportWrapper("stackRestore"),
    stackAlloc = Module.stackAlloc = createExportWrapper("stackAlloc"),
    dynCall_jiji = Module.dynCall_jiji = createExportWrapper("dynCall_jiji");
Object.getOwnPropertyDescriptor(Module, "intArrayFromString") || (Module.intArrayFromString = () => abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "intArrayToString") || (Module.intArrayToString = () => abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "ccall") || (Module.ccall = () => abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "cwrap") || (Module.cwrap = () => abort("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "setValue") || (Module.setValue = () => abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getValue") || (Module.getValue = () => abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "allocate") || (Module.allocate = () => abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString") || (Module.UTF8ArrayToString = () => abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "UTF8ToString") || (Module.UTF8ToString = () => abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array") || (Module.stringToUTF8Array = () => abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "stringToUTF8") || (Module.stringToUTF8 = () => abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8") || (Module.lengthBytesUTF8 = () => abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "stackTrace") || (Module.stackTrace = () => abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "addOnPreRun") || (Module.addOnPreRun = () => abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "addOnInit") || (Module.addOnInit = () => abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "addOnPreMain") || (Module.addOnPreMain = () => abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "addOnExit") || (Module.addOnExit = () => abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "addOnPostRun") || (Module.addOnPostRun = () => abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "writeStringToMemory") || (Module.writeStringToMemory = () => abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory") || (Module.writeArrayToMemory = () => abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory") || (Module.writeAsciiToMemory = () => abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "addRunDependency") || (Module.addRunDependency = () => abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "removeRunDependency") || (Module.removeRunDependency = () => abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "FS_createFolder") || (Module.FS_createFolder = () => abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "FS_createPath") || (Module.FS_createPath = () => abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "FS_createDataFile") || (Module.FS_createDataFile = () => abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile") || (Module.FS_createPreloadedFile = () => abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile") || (Module.FS_createLazyFile = () => abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "FS_createLink") || (Module.FS_createLink = () => abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "FS_createDevice") || (Module.FS_createDevice = () => abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "FS_unlink") || (Module.FS_unlink = () => abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")), Object.getOwnPropertyDescriptor(Module, "getLEB") || (Module.getLEB = () => abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getFunctionTables") || (Module.getFunctionTables = () => abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "alignFunctionTables") || (Module.alignFunctionTables = () => abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "registerFunctions") || (Module.registerFunctions = () => abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "addFunction") || (Module.addFunction = () => abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "removeFunction") || (Module.removeFunction = () => abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getFuncWrapper") || (Module.getFuncWrapper = () => abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "prettyPrint") || (Module.prettyPrint = () => abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "dynCall") || (Module.dynCall = () => abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getCompilerSetting") || (Module.getCompilerSetting = () => abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "print") || (Module.print = () => abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "printErr") || (Module.printErr = () => abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getTempRet0") || (Module.getTempRet0 = () => abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "setTempRet0") || (Module.setTempRet0 = () => abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Module.callMain = callMain, Object.getOwnPropertyDescriptor(Module, "abort") || (Module.abort = () => abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive") || (Module.keepRuntimeAlive = () => abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "zeroMemory") || (Module.zeroMemory = () => abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8") || (Module.stringToNewUTF8 = () => abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer") || (Module.emscripten_realloc_buffer = () => abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "ENV") || (Module.ENV = () => abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "withStackSave") || (Module.withStackSave = () => abort("'withStackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES") || (Module.ERRNO_CODES = () => abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES") || (Module.ERRNO_MESSAGES = () => abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "setErrNo") || (Module.setErrNo = () => abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "inetPton4") || (Module.inetPton4 = () => abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "inetNtop4") || (Module.inetNtop4 = () => abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "inetPton6") || (Module.inetPton6 = () => abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "inetNtop6") || (Module.inetNtop6 = () => abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "readSockaddr") || (Module.readSockaddr = () => abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "writeSockaddr") || (Module.writeSockaddr = () => abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "DNS") || (Module.DNS = () => abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getHostByName") || (Module.getHostByName = () => abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "Protocols") || (Module.Protocols = () => abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "Sockets") || (Module.Sockets = () => abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getRandomDevice") || (Module.getRandomDevice = () => abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "traverseStack") || (Module.traverseStack = () => abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "convertFrameToPC") || (Module.convertFrameToPC = () => abort("'convertFrameToPC' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE") || (Module.UNWIND_CACHE = () => abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "saveInUnwindCache") || (Module.saveInUnwindCache = () => abort("'saveInUnwindCache' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "convertPCtoSourceLocation") || (Module.convertPCtoSourceLocation = () => abort("'convertPCtoSourceLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray") || (Module.readAsmConstArgsArray = () => abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs") || (Module.readAsmConstArgs = () => abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM") || (Module.mainThreadEM_ASM = () => abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "jstoi_q") || (Module.jstoi_q = () => abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "jstoi_s") || (Module.jstoi_s = () => abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getExecutableName") || (Module.getExecutableName = () => abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "listenOnce") || (Module.listenOnce = () => abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext") || (Module.autoResumeAudioContext = () => abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "dynCallLegacy") || (Module.dynCallLegacy = () => abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getDynCaller") || (Module.getDynCaller = () => abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "dynCall") || (Module.dynCall = () => abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks") || (Module.callRuntimeCallbacks = () => abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "wasmTableMirror") || (Module.wasmTableMirror = () => abort("'wasmTableMirror' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "setWasmTableEntry") || (Module.setWasmTableEntry = () => abort("'setWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "getWasmTableEntry") || (Module.getWasmTableEntry = () => abort("'getWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "handleException") || (Module.handleException = () => abort("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush") || (Module.runtimeKeepalivePush = () => abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop") || (Module.runtimeKeepalivePop = () => abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "callUserCallback") || (Module.callUserCallback = () => abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "maybeExit") || (Module.maybeExit = () => abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "safeSetTimeout") || (Module.safeSetTimeout = () => abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "asmjsMangle") || (Module.asmjsMangle = () => abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "asyncLoad") || (Module.asyncLoad = () => abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "alignMemory") || (Module.alignMemory = () => abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "mmapAlloc") || (Module.mmapAlloc = () => abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "reallyNegative") || (Module.reallyNegative = () => abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "unSign") || (Module.unSign = () => abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "reSign") || (Module.reSign = () => abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")), Object.getOwnPropertyDescriptor(Module, "formatString") || (Module.formatString = () => abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "PATH") || (Module.PATH = () => abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "PATH_FS") || (Module.PATH_FS = () => abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "SYSCALLS") || (Module.SYSCALLS = () => abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "getSocketFromFD") || (Module.getSocketFromFD = () => abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "getSocketAddress") || (Module.getSocketAddress = () => abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "JSEvents") || (Module.JSEvents = () => abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback") || (Module.registerKeyEventCallback = () => abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets") || (Module.specialHTMLTargets = () => abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString") || (Module.maybeCStringToJsString = () => abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "findEventTarget") || (Module.findEventTarget = () => abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget") || (Module.findCanvasEventTarget = () => abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect") || (Module.getBoundingClientRect = () => abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillMouseEventData") || (Module.fillMouseEventData = () => abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback") || (Module.registerMouseEventCallback = () => abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback") || (Module.registerWheelEventCallback = () => abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback") || (Module.registerUiEventCallback = () => abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback") || (Module.registerFocusEventCallback = () => abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData") || (Module.fillDeviceOrientationEventData = () => abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback") || (Module.registerDeviceOrientationEventCallback = () => abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData") || (Module.fillDeviceMotionEventData = () => abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback") || (Module.registerDeviceMotionEventCallback = () => abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "screenOrientation") || (Module.screenOrientation = () => abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData") || (Module.fillOrientationChangeEventData = () => abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback") || (Module.registerOrientationChangeEventCallback = () => abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData") || (Module.fillFullscreenChangeEventData = () => abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback") || (Module.registerFullscreenChangeEventCallback = () => abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle") || (Module.registerRestoreOldStyle = () => abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement") || (Module.hideEverythingExceptGivenElement = () => abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements") || (Module.restoreHiddenElements = () => abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "setLetterbox") || (Module.setLetterbox = () => abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy") || (Module.currentFullscreenStrategy = () => abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle") || (Module.restoreOldWindowedStyle = () => abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget") || (Module.softFullscreenResizeWebGLRenderTarget = () => abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen") || (Module.doRequestFullscreen = () => abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData") || (Module.fillPointerlockChangeEventData = () => abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback") || (Module.registerPointerlockChangeEventCallback = () => abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback") || (Module.registerPointerlockErrorEventCallback = () => abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "requestPointerLock") || (Module.requestPointerLock = () => abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData") || (Module.fillVisibilityChangeEventData = () => abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback") || (Module.registerVisibilityChangeEventCallback = () => abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback") || (Module.registerTouchEventCallback = () => abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData") || (Module.fillGamepadEventData = () => abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback") || (Module.registerGamepadEventCallback = () => abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback") || (Module.registerBeforeUnloadEventCallback = () => abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData") || (Module.fillBatteryEventData = () => abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "battery") || (Module.battery = () => abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback") || (Module.registerBatteryEventCallback = () => abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize") || (Module.setCanvasElementSize = () => abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize") || (Module.getCanvasElementSize = () => abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "demangle") || (Module.demangle = () => abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "demangleAll") || (Module.demangleAll = () => abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "jsStackTrace") || (Module.jsStackTrace = () => abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "stackTrace") || (Module.stackTrace = () => abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "getEnvStrings") || (Module.getEnvStrings = () => abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "checkWasiClock") || (Module.checkWasiClock = () => abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "writeI53ToI64") || (Module.writeI53ToI64 = () => abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped") || (Module.writeI53ToI64Clamped = () => abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling") || (Module.writeI53ToI64Signaling = () => abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped") || (Module.writeI53ToU64Clamped = () => abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling") || (Module.writeI53ToU64Signaling = () => abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "readI53FromI64") || (Module.readI53FromI64 = () => abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "readI53FromU64") || (Module.readI53FromU64 = () => abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53") || (Module.convertI32PairToI53 = () => abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53") || (Module.convertU32PairToI53 = () => abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "setImmediateWrapped") || (Module.setImmediateWrapped = () => abort("'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "clearImmediateWrapped") || (Module.clearImmediateWrapped = () => abort("'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate") || (Module.polyfillSetImmediate = () => abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount") || (Module.uncaughtExceptionCount = () => abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "exceptionLast") || (Module.exceptionLast = () => abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "exceptionCaught") || (Module.exceptionCaught = () => abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "ExceptionInfo") || (Module.ExceptionInfo = () => abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "CatchInfo") || (Module.CatchInfo = () => abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "exception_addRef") || (Module.exception_addRef = () => abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "exception_decRef") || (Module.exception_decRef = () => abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "Browser") || (Module.Browser = () => abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "funcWrappers") || (Module.funcWrappers = () => abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "getFuncWrapper") || (Module.getFuncWrapper = () => abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "setMainLoop") || (Module.setMainLoop = () => abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "wget") || (Module.wget = () => abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "FS") || (Module.FS = () => abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "MEMFS") || (Module.MEMFS = () => abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "TTY") || (Module.TTY = () => abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "PIPEFS") || (Module.PIPEFS = () => abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "SOCKFS") || (Module.SOCKFS = () => abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback") || (Module._setNetworkCallback = () => abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray") || (Module.tempFixedLengthArray = () => abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers") || (Module.miniTempWebGLFloatBuffers = () => abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType") || (Module.heapObjectForWebGLType = () => abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap") || (Module.heapAccessShiftForWebGLHeap = () => abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "GL") || (Module.GL = () => abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet") || (Module.emscriptenWebGLGet = () => abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize") || (Module.computeUnpackAlignedImageSize = () => abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData") || (Module.emscriptenWebGLGetTexPixelData = () => abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform") || (Module.emscriptenWebGLGetUniform = () => abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation") || (Module.webglGetUniformLocation = () => abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse") || (Module.webglPrepareUniformLocationsBeforeFirstUse = () => abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos") || (Module.webglGetLeftBracePos = () => abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib") || (Module.emscriptenWebGLGetVertexAttrib = () => abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "writeGLArray") || (Module.writeGLArray = () => abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "AL") || (Module.AL = () => abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "SDL_unicode") || (Module.SDL_unicode = () => abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext") || (Module.SDL_ttfContext = () => abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "SDL_audio") || (Module.SDL_audio = () => abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "SDL") || (Module.SDL = () => abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "SDL_gfx") || (Module.SDL_gfx = () => abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "GLUT") || (Module.GLUT = () => abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "EGL") || (Module.EGL = () => abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "GLFW_Window") || (Module.GLFW_Window = () => abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "GLFW") || (Module.GLFW = () => abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "GLEW") || (Module.GLEW = () => abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "IDBStore") || (Module.IDBStore = () => abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError") || (Module.runAndAbortIfError = () => abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "warnOnce") || (Module.warnOnce = () => abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "stackSave") || (Module.stackSave = () => abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "stackRestore") || (Module.stackRestore = () => abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "stackAlloc") || (Module.stackAlloc = () => abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "AsciiToString") || (Module.AsciiToString = () => abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "stringToAscii") || (Module.stringToAscii = () => abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "UTF16ToString") || (Module.UTF16ToString = () => abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "stringToUTF16") || (Module.stringToUTF16 = () => abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16") || (Module.lengthBytesUTF16 = () => abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "UTF32ToString") || (Module.UTF32ToString = () => abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "stringToUTF32") || (Module.stringToUTF32 = () => abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32") || (Module.lengthBytesUTF32 = () => abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "allocateUTF8") || (Module.allocateUTF8 = () => abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack") || (Module.allocateUTF8OnStack = () => abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")),Module.writeStackCookie = writeStackCookie,Module.checkStackCookie = checkStackCookie,Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL") || Object.defineProperty(Module, "ALLOC_NORMAL", {
    configurable: !0,
    get: function () {
        abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }
}),Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK") || Object.defineProperty(Module, "ALLOC_STACK", {
    configurable: !0,
    get: function () {
        abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }
});
var calledRun;

function ExitStatus(e) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
}

var calledMain = !1;
dependenciesFulfilled = function e() {
    calledRun || run(), calledRun || (dependenciesFulfilled = e)
};

function callMain(e) {
    assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])'), assert(__ATPRERUN__.length == 0, "cannot call main when preRun functions remain to be called");
    var t = Module._main;
    e = e || [];
    var r = e.length + 1, n = stackAlloc((r + 1) * 4);
    HEAP32[n >> 2] = allocateUTF8OnStack(thisProgram);
    for (var o = 1; o < r; o++) HEAP32[(n >> 2) + o] = allocateUTF8OnStack(e[o - 1]);
    HEAP32[(n >> 2) + r] = 0;
    try {
        var i = t(r, n);
        return exit(i, !0), i
    } catch (a) {
        return handleException(a)
    } finally {
        calledMain = !0
    }
}

function stackCheckInit() {
    _emscripten_stack_init(), writeStackCookie()
}

function run(e) {
    if (e = e || arguments_, runDependencies > 0 || (stackCheckInit(), preRun(), runDependencies > 0)) return;

    function t() {
        calledRun || (calledRun = !0, Module.calledRun = !0, !ABORT && (initRuntime(), preMain(), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), shouldRunNow && callMain(e), postRun()))
    }

    Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function () {
        setTimeout(function () {
            Module.setStatus("")
        }, 1), t()
    }, 1)) : t(), checkStackCookie()
}

Module.run = run;

function checkUnflushedContent() {
    var e = out, t = err, r = !1;
    out = err = n => {
        r = !0
    };
    try {
        ___stdio_exit(), ["stdout", "stderr"].forEach(function (n) {
            var o = FS.analyzePath("/dev/" + n);
            if (o) {
                var i = o.object, a = i.rdev, s = TTY.ttys[a];
                s && s.output && s.output.length && (r = !0)
            }
        })
    } catch {
    }
    out = e, err = t, r && warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.")
}

function exit(e, t) {
    if (EXITSTATUS = e, runtimeKeepaliveCounter || checkUnflushedContent(), keepRuntimeAlive()) {
        if (!t) {
            var r = "program exited (with status: " + e + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
            err(r)
        }
    } else exitRuntime();
    procExit(e)
}

function procExit(e) {
    EXITSTATUS = e, keepRuntimeAlive() || (Module.onExit && Module.onExit(e), ABORT = !0), quit_(e, new ExitStatus(e))
}

if (Module.preInit) for (typeof Module.preInit == "function" && (Module.preInit = [Module.preInit]); Module.preInit.length > 0;) Module.preInit.pop()();
var shouldRunNow = !0;
Module.noInitialRun && (shouldRunNow = !1), run();
