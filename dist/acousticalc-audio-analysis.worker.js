var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/essentia.js/dist/essentia-wasm.web.js
var require_essentia_wasm_web = __commonJS({
  "node_modules/essentia.js/dist/essentia-wasm.web.js"(exports, module) {
    var EssentiaWASM = (function() {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      return (function(EssentiaWASM2) {
        EssentiaWASM2 = EssentiaWASM2 || {};
        var Module = typeof EssentiaWASM2 !== "undefined" ? EssentiaWASM2 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_main")) {
          Object.defineProperty(Module["ready"], "_main", { configurable: true, get: function() {
            abort("You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_main", { configurable: true, set: function() {
            abort("You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_malloc")) {
          Object.defineProperty(Module["ready"], "_malloc", { configurable: true, get: function() {
            abort("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_malloc", { configurable: true, set: function() {
            abort("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_free")) {
          Object.defineProperty(Module["ready"], "_free", { configurable: true, get: function() {
            abort("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_free", { configurable: true, set: function() {
            abort("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackSave")) {
          Object.defineProperty(Module["ready"], "_stackSave", { configurable: true, get: function() {
            abort("You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_stackSave", { configurable: true, set: function() {
            abort("You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackRestore")) {
          Object.defineProperty(Module["ready"], "_stackRestore", { configurable: true, get: function() {
            abort("You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_stackRestore", { configurable: true, set: function() {
            abort("You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackAlloc")) {
          Object.defineProperty(Module["ready"], "_stackAlloc", { configurable: true, get: function() {
            abort("You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_stackAlloc", { configurable: true, set: function() {
            abort("You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "___data_end")) {
          Object.defineProperty(Module["ready"], "___data_end", { configurable: true, get: function() {
            abort("You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "___data_end", { configurable: true, set: function() {
            abort("You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "___wasm_call_ctors")) {
          Object.defineProperty(Module["ready"], "___wasm_call_ctors", { configurable: true, get: function() {
            abort("You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "___wasm_call_ctors", { configurable: true, set: function() {
            abort("You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fflush")) {
          Object.defineProperty(Module["ready"], "_fflush", { configurable: true, get: function() {
            abort("You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_fflush", { configurable: true, set: function() {
            abort("You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "___errno_location")) {
          Object.defineProperty(Module["ready"], "___errno_location", { configurable: true, get: function() {
            abort("You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "___errno_location", { configurable: true, set: function() {
            abort("You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "__ZSt18uncaught_exceptionv")) {
          Object.defineProperty(Module["ready"], "__ZSt18uncaught_exceptionv", { configurable: true, get: function() {
            abort("You are getting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "__ZSt18uncaught_exceptionv", { configurable: true, set: function() {
            abort("You are setting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "_setThrew")) {
          Object.defineProperty(Module["ready"], "_setThrew", { configurable: true, get: function() {
            abort("You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "_setThrew", { configurable: true, set: function() {
            abort("You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        if (!Object.getOwnPropertyDescriptor(Module["ready"], "onRuntimeInitialized")) {
          Object.defineProperty(Module["ready"], "onRuntimeInitialized", { configurable: true, get: function() {
            abort("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
          Object.defineProperty(Module["ready"], "onRuntimeInitialized", { configurable: true, set: function() {
            abort("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
          } });
        }
        var moduleOverrides = {};
        var key;
        for (key in Module) {
          if (Module.hasOwnProperty(key)) {
            moduleOverrides[key] = Module[key];
          }
        }
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = function(status, toThrow) {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = true;
        var ENVIRONMENT_IS_WORKER = false;
        if (Module["ENVIRONMENT"]) {
          throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
        }
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          if (!(typeof window === "object" || typeof importScripts === "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
          {
            read_ = function shell_read(url) {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = function readBinary2(url) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = function readAsync2(url, onload, onerror) {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = function xhr_onload() {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = function(title) {
            document.title = title;
          };
        } else {
          throw new Error("environment detection error");
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        for (key in moduleOverrides) {
          if (moduleOverrides.hasOwnProperty(key)) {
            Module[key] = moduleOverrides[key];
          }
        }
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (!Object.getOwnPropertyDescriptor(Module, "arguments")) Object.defineProperty(Module, "arguments", { configurable: true, get: function() {
          abort("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (!Object.getOwnPropertyDescriptor(Module, "thisProgram")) Object.defineProperty(Module, "thisProgram", { configurable: true, get: function() {
          abort("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        if (Module["quit"]) quit_ = Module["quit"];
        if (!Object.getOwnPropertyDescriptor(Module, "quit")) Object.defineProperty(Module, "quit", { configurable: true, get: function() {
          abort("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");
        assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
        assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
        assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
        assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
        if (!Object.getOwnPropertyDescriptor(Module, "read")) Object.defineProperty(Module, "read", { configurable: true, get: function() {
          abort("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        if (!Object.getOwnPropertyDescriptor(Module, "readAsync")) Object.defineProperty(Module, "readAsync", { configurable: true, get: function() {
          abort("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        if (!Object.getOwnPropertyDescriptor(Module, "readBinary")) Object.defineProperty(Module, "readBinary", { configurable: true, get: function() {
          abort("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        if (!Object.getOwnPropertyDescriptor(Module, "setWindowTitle")) Object.defineProperty(Module, "setWindowTitle", { configurable: true, get: function() {
          abort("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        var STACK_ALIGN = 16;
        function dynamicAlloc(size) {
          assert(DYNAMICTOP_PTR);
          var ret = HEAP32[DYNAMICTOP_PTR >> 2];
          var end = ret + size + 15 & -16;
          assert(end <= HEAP8.length, "failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly");
          HEAP32[DYNAMICTOP_PTR >> 2] = end;
          return ret;
        }
        function getNativeTypeSize(type) {
          switch (type) {
            case "i1":
            case "i8":
              return 1;
            case "i16":
              return 2;
            case "i32":
              return 4;
            case "i64":
              return 8;
            case "float":
              return 4;
            case "double":
              return 8;
            default: {
              if (type[type.length - 1] === "*") {
                return 4;
              } else if (type[0] === "i") {
                var bits = Number(type.substr(1));
                assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
                return bits / 8;
              } else {
                return 0;
              }
            }
          }
        }
        function warnOnce(text) {
          if (!warnOnce.shown) warnOnce.shown = {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            err(text);
          }
        }
        function convertJsFunctionToWasm(func, sig) {
          if (typeof WebAssembly.Function === "function") {
            var typeNames = { "i": "i32", "j": "i64", "f": "f32", "d": "f64" };
            var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] };
            for (var i = 1; i < sig.length; ++i) {
              type.parameters.push(typeNames[sig[i]]);
            }
            return new WebAssembly.Function(type, func);
          }
          var typeSection = [1, 0, 1, 96];
          var sigRet = sig.slice(0, 1);
          var sigParam = sig.slice(1);
          var typeCodes = { "i": 127, "j": 126, "f": 125, "d": 124 };
          typeSection.push(sigParam.length);
          for (var i = 0; i < sigParam.length; ++i) {
            typeSection.push(typeCodes[sigParam[i]]);
          }
          if (sigRet == "v") {
            typeSection.push(0);
          } else {
            typeSection = typeSection.concat([1, typeCodes[sigRet]]);
          }
          typeSection[1] = typeSection.length - 2;
          var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
          var module2 = new WebAssembly.Module(bytes);
          var instance2 = new WebAssembly.Instance(module2, { "e": { "f": func } });
          var wrappedFunc = instance2.exports["f"];
          return wrappedFunc;
        }
        var freeTableIndexes = [];
        var functionsInTableMap;
        function addFunctionWasm(func, sig) {
          var table = wasmTable;
          if (!functionsInTableMap) {
            functionsInTableMap = /* @__PURE__ */ new WeakMap();
            for (var i = 0; i < table.length; i++) {
              var item = table.get(i);
              if (item) {
                functionsInTableMap.set(item, i);
              }
            }
          }
          if (functionsInTableMap.has(func)) {
            return functionsInTableMap.get(func);
          }
          for (var i = 0; i < table.length; i++) {
            assert(table.get(i) != func, "function in Table but not functionsInTableMap");
          }
          var ret;
          if (freeTableIndexes.length) {
            ret = freeTableIndexes.pop();
          } else {
            ret = table.length;
            try {
              table.grow(1);
            } catch (err2) {
              if (!(err2 instanceof RangeError)) {
                throw err2;
              }
              throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
            }
          }
          try {
            table.set(ret, func);
          } catch (err2) {
            if (!(err2 instanceof TypeError)) {
              throw err2;
            }
            assert(typeof sig !== "undefined", "Missing signature argument to addFunction");
            var wrapped = convertJsFunctionToWasm(func, sig);
            table.set(ret, wrapped);
          }
          functionsInTableMap.set(func, ret);
          return ret;
        }
        function removeFunctionWasm(index) {
          functionsInTableMap.delete(wasmTable.get(index));
          freeTableIndexes.push(index);
        }
        var funcWrappers = {};
        function dynCall(sig, ptr, args) {
          if (args && args.length) {
            assert(args.length === sig.substring(1).replace(/j/g, "--").length);
            assert("dynCall_" + sig in Module, "bad function pointer type - no table for sig '" + sig + "'");
            return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
          } else {
            assert(sig.length == 1);
            assert("dynCall_" + sig in Module, "bad function pointer type - no table for sig '" + sig + "'");
            return Module["dynCall_" + sig].call(null, ptr);
          }
        }
        var tempRet0 = 0;
        var setTempRet0 = function(value) {
          tempRet0 = value;
        };
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary")) Object.defineProperty(Module, "wasmBinary", { configurable: true, get: function() {
          abort("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        var noExitRuntime;
        if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
        if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime")) Object.defineProperty(Module, "noExitRuntime", { configurable: true, get: function() {
          abort("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        if (typeof WebAssembly !== "object") {
          abort("no native wasm support detected");
        }
        function setValue(ptr, value, type, noSafe) {
          type = type || "i8";
          if (type.charAt(type.length - 1) === "*") type = "i32";
          switch (type) {
            case "i1":
              HEAP8[ptr >> 0] = value;
              break;
            case "i8":
              HEAP8[ptr >> 0] = value;
              break;
            case "i16":
              HEAP16[ptr >> 1] = value;
              break;
            case "i32":
              HEAP32[ptr >> 2] = value;
              break;
            case "i64":
              tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
              break;
            case "float":
              HEAPF32[ptr >> 2] = value;
              break;
            case "double":
              HEAPF64[ptr >> 3] = value;
              break;
            default:
              abort("invalid type for setValue: " + type);
          }
        }
        var wasmMemory;
        var wasmTable = new WebAssembly.Table({ "initial": 4301, "maximum": 4301 + 0, "element": "anyfunc" });
        var ABORT = false;
        var EXITSTATUS = 0;
        function assert(condition, text) {
          if (!condition) {
            abort("Assertion failed: " + text);
          }
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
          return func;
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": function(str) {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              var len = (str.length << 2) + 1;
              ret2 = stackAlloc(len);
              stringToUTF8(str, ret2, len);
            }
            return ret2;
          }, "array": function(arr) {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string") return UTF8ToString(ret2);
            if (returnType === "boolean") return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          assert(returnType !== "array", 'Return type should not be "array".');
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          ret = convertReturnValue(ret);
          if (stack !== 0) stackRestore(stack);
          return ret;
        }
        var ALLOC_NONE = 3;
        var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heap, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
            return UTF8Decoder.decode(heap.subarray(idx, endPtr));
          } else {
            var str = "";
            while (idx < endPtr) {
              var u0 = heap[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heap[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heap[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!");
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              if (u >= 2097152) warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
            if (u <= 127) ++len;
            else if (u <= 2047) len += 2;
            else if (u <= 65535) len += 3;
            else len += 4;
          }
          return len;
        }
        var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : void 0;
        function UTF16ToString(ptr, maxBytesToRead) {
          assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
          var endPtr = ptr;
          var idx = endPtr >> 1;
          var maxIdx = idx + maxBytesToRead / 2;
          while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
          endPtr = idx << 1;
          if (endPtr - ptr > 32 && UTF16Decoder) {
            return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
          } else {
            var i = 0;
            var str = "";
            while (1) {
              var codeUnit = HEAP16[ptr + i * 2 >> 1];
              if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
              ++i;
              str += String.fromCharCode(codeUnit);
            }
          }
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
          assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[ptr + i * 4 >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
          assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function writeArrayToMemory(array, buffer2) {
          assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
          HEAP8.set(array, buffer2);
        }
        function writeAsciiToMemory(str, buffer2, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
            HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
        }
        var WASM_PAGE_SIZE = 65536;
        function alignUp(x, multiple) {
          if (x % multiple > 0) {
            x += multiple - x % multiple;
          }
          return x;
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var STACK_BASE = 5713952, STACK_MAX = 471072, DYNAMIC_BASE = 5713952, DYNAMICTOP_PTR = 470912;
        assert(STACK_BASE % 16 === 0, "stack must start aligned");
        assert(DYNAMIC_BASE % 16 === 0, "heap must start aligned");
        var TOTAL_STACK = 5242880;
        if (Module["TOTAL_STACK"]) assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");
        var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
        if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY")) Object.defineProperty(Module, "INITIAL_MEMORY", { configurable: true, get: function() {
          abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
        } });
        assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
        assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== void 0 && Int32Array.prototype.set !== void 0, "JS engine does not provide full typed array support");
        if (Module["wasmMemory"]) {
          wasmMemory = Module["wasmMemory"];
        } else {
          wasmMemory = new WebAssembly.Memory({ "initial": INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE, "maximum": 2147483648 / WASM_PAGE_SIZE });
        }
        if (wasmMemory) {
          buffer = wasmMemory.buffer;
        }
        INITIAL_INITIAL_MEMORY = buffer.byteLength;
        assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
        assert(65536 % WASM_PAGE_SIZE === 0);
        updateGlobalBufferAndViews(buffer);
        HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
        function writeStackCookie() {
          assert((STACK_MAX & 3) == 0);
          HEAPU32[(STACK_MAX >> 2) + 1] = 34821223;
          HEAPU32[(STACK_MAX >> 2) + 2] = 2310721022;
          HEAP32[0] = 1668509029;
        }
        function checkStackCookie() {
          var cookie1 = HEAPU32[(STACK_MAX >> 2) + 1];
          var cookie2 = HEAPU32[(STACK_MAX >> 2) + 2];
          if (cookie1 != 34821223 || cookie2 != 2310721022) {
            abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16));
          }
          if (HEAP32[0] !== 1668509029) abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
        }
        (function() {
          var h16 = new Int16Array(1);
          var h8 = new Int8Array(h16.buffer);
          h16[0] = 25459;
          if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian!";
        })();
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            var callback = callbacks.shift();
            if (typeof callback == "function") {
              callback(Module);
              continue;
            }
            var func = callback.func;
            if (typeof func === "number") {
              if (callback.arg === void 0) {
                Module["dynCall_v"](func);
              } else {
                Module["dynCall_vi"](func, callback.arg);
              }
            } else {
              func(callback.arg === void 0 ? null : callback.arg);
            }
          }
        }
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATMAIN__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeExited = false;
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          checkStackCookie();
          assert(!runtimeInitialized);
          runtimeInitialized = true;
          if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
          TTY.init();
          callRuntimeCallbacks(__ATINIT__);
        }
        function preMain() {
          checkStackCookie();
          FS.ignorePermissions = false;
          callRuntimeCallbacks(__ATMAIN__);
        }
        function exitRuntime() {
          checkStackCookie();
          runtimeExited = true;
        }
        function postRun() {
          checkStackCookie();
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        var Math_abs = Math.abs;
        var Math_ceil = Math.ceil;
        var Math_floor = Math.floor;
        var Math_min = Math.min;
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        var runDependencyTracking = {};
        function getUniqueRunDependency(id) {
          var orig = id;
          while (1) {
            if (!runDependencyTracking[id]) return id;
            id = orig + Math.random();
          }
        }
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (id) {
            assert(!runDependencyTracking[id]);
            runDependencyTracking[id] = 1;
            if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
              runDependencyWatcher = setInterval(function() {
                if (ABORT) {
                  clearInterval(runDependencyWatcher);
                  runDependencyWatcher = null;
                  return;
                }
                var shown = false;
                for (var dep in runDependencyTracking) {
                  if (!shown) {
                    shown = true;
                    err("still waiting on run dependencies:");
                  }
                  err("dependency: " + dep);
                }
                if (shown) {
                  err("(end of list)");
                }
              }, 1e4);
            }
          } else {
            err("warning: run dependency added without ID");
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (id) {
            assert(runDependencyTracking[id]);
            delete runDependencyTracking[id];
          } else {
            err("warning: run dependency removed without ID");
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        Module["preloadedImages"] = {};
        Module["preloadedAudios"] = {};
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what += "";
          out(what);
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          var output = "abort(" + what + ") at " + stackTrace();
          what = output;
          throw new WebAssembly.RuntimeError(what);
        }
        function hasPrefix(str, prefix) {
          return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return hasPrefix(filename, dataURIPrefix);
        }
        var fileURIPrefix = "file://";
        function createExportWrapper(name, fixedasm) {
          return function() {
            var displayName = name;
            var asm2 = fixedasm;
            if (!fixedasm) {
              asm2 = Module["asm"];
            }
            assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
            assert(!runtimeExited, "native function `" + displayName + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
            if (!asm2[name]) {
              assert(asm2[name], "exported native function `" + displayName + "` not found");
            }
            return asm2[name].apply(null, arguments);
          };
        }
        var wasmBinaryFile = "essentia-wasm.web.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary() {
          try {
            if (wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(wasmBinaryFile);
            } else {
              throw "both async and sync fetching of the wasm failed";
            }
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
            return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
              if (!response["ok"]) {
                throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
              }
              return response["arrayBuffer"]();
            }).catch(function() {
              return getBinary();
            });
          }
          return new Promise(function(resolve, reject) {
            resolve(getBinary());
          });
        }
        function createWasm() {
          var info = { "env": asmLibraryArg, "wasi_snapshot_preview1": asmLibraryArg };
          function receiveInstance(instance2, module2) {
            var exports3 = instance2.exports;
            Module["asm"] = exports3;
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          var trueModule = Module;
          function receiveInstantiatedSource(output) {
            assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
            trueModule = null;
            receiveInstance(output["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
              fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiatedSource, function(reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiatedSource);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiatedSource);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports2 = Module["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              return false;
            }
          }
          instantiateAsync();
          return {};
        }
        var tempDouble;
        var tempI64;
        __ATINIT__.push({ func: function() {
          ___wasm_call_ctors();
        } });
        function demangle(func) {
          warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
          return func;
        }
        function demangleAll(text) {
          var regex = /\b_Z[\w\d_]+/g;
          return text.replace(regex, function(x) {
            var y = demangle(x);
            return x === y ? x : y + " [" + x + "]";
          });
        }
        function jsStackTrace() {
          var err2 = new Error();
          if (!err2.stack) {
            try {
              throw new Error();
            } catch (e) {
              err2 = e;
            }
            if (!err2.stack) {
              return "(no stack trace available)";
            }
          }
          return err2.stack.toString();
        }
        function stackTrace() {
          var js = jsStackTrace();
          if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
          return demangleAll(js);
        }
        function ___assert_fail(condition, filename, line, func) {
          abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
        }
        function ___cxa_allocate_exception(size) {
          return _malloc(size);
        }
        function _atexit(func, arg) {
          warnOnce("atexit() called, but EXIT_RUNTIME is not set, so atexits() will not be called. set EXIT_RUNTIME to 1 (see the FAQ)");
        }
        function ___cxa_atexit(a0, a1) {
          return _atexit(a0, a1);
        }
        var ___exception_infos = {};
        var ___exception_last = 0;
        function ___cxa_throw(ptr, type, destructor) {
          err("Compiled code throwing an exception, " + [ptr, type, destructor]);
          ___exception_infos[ptr] = { ptr, adjusted: [ptr], type, destructor, refcount: 0, caught: false, rethrown: false };
          ___exception_last = ptr;
          if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
            __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
          } else {
            __ZSt18uncaught_exceptionv.uncaught_exceptions++;
          }
          throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
        }
        function ___handle_stack_overflow() {
          abort("stack overflow");
        }
        function setErrNo(value) {
          HEAP32[___errno_location() >> 2] = value;
          return value;
        }
        function ___map_file(pathname, size) {
          setErrNo(63);
          return -1;
        }
        var PATH = { splitPath: function(filename) {
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return splitPathRe.exec(filename).slice(1);
        }, normalizeArray: function(parts, allowAboveRoot) {
          var up = 0;
          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
              parts.splice(i, 1);
            } else if (last === "..") {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }
          if (allowAboveRoot) {
            for (; up; up--) {
              parts.unshift("..");
            }
          }
          return parts;
        }, normalize: function(path) {
          var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
          path = PATH.normalizeArray(path.split("/").filter(function(p) {
            return !!p;
          }), !isAbsolute).join("/");
          if (!path && !isAbsolute) {
            path = ".";
          }
          if (path && trailingSlash) {
            path += "/";
          }
          return (isAbsolute ? "/" : "") + path;
        }, dirname: function(path) {
          var result = PATH.splitPath(path), root = result[0], dir = result[1];
          if (!root && !dir) {
            return ".";
          }
          if (dir) {
            dir = dir.substr(0, dir.length - 1);
          }
          return root + dir;
        }, basename: function(path) {
          if (path === "/") return "/";
          var lastSlash = path.lastIndexOf("/");
          if (lastSlash === -1) return path;
          return path.substr(lastSlash + 1);
        }, extname: function(path) {
          return PATH.splitPath(path)[3];
        }, join: function() {
          var paths = Array.prototype.slice.call(arguments, 0);
          return PATH.normalize(paths.join("/"));
        }, join2: function(l, r) {
          return PATH.normalize(l + "/" + r);
        } };
        var PATH_FS = { resolve: function() {
          var resolvedPath = "", resolvedAbsolute = false;
          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : FS.cwd();
            if (typeof path !== "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            } else if (!path) {
              return "";
            }
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charAt(0) === "/";
          }
          resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
            return !!p;
          }), !resolvedAbsolute).join("/");
          return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        }, relative: function(from, to) {
          from = PATH_FS.resolve(from).substr(1);
          to = PATH_FS.resolve(to).substr(1);
          function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
              if (arr[start] !== "") break;
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
              if (arr[end] !== "") break;
            }
            if (start > end) return [];
            return arr.slice(start, end - start + 1);
          }
          var fromParts = trim(from.split("/"));
          var toParts = trim(to.split("/"));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;
          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }
          var outputParts = [];
          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..");
          }
          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join("/");
        } };
        var TTY = { ttys: [], init: function() {
        }, shutdown: function() {
        }, register: function(dev, ops) {
          TTY.ttys[dev] = { input: [], output: [], ops };
          FS.registerDevice(dev, TTY.stream_ops);
        }, stream_ops: { open: function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        }, close: function(stream) {
          stream.tty.ops.flush(stream.tty);
        }, flush: function(stream) {
          stream.tty.ops.flush(stream.tty);
        }, read: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0) break;
            bytesRead++;
            buffer2[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        }, write: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer2[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        } }, default_tty_ops: { get_char: function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\n";
              }
            } else if (typeof readline == "function") {
              result = readline();
              if (result !== null) {
                result += "\n";
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        }, put_char: function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        }, flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        } }, default_tty1_ops: { put_char: function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        }, flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        } } };
        var MEMFS = { ops_table: null, mount: function(mount) {
          return MEMFS.createNode(null, "/", 16384 | 511, 0);
        }, createNode: function(parent, name, mode, dev) {
          if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63);
          }
          if (!MEMFS.ops_table) {
            MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } };
          }
          var node = FS.createNode(parent, name, mode, dev);
          if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {};
          } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null;
          } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream;
          } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream;
          }
          node.timestamp = Date.now();
          if (parent) {
            parent.contents[name] = node;
          }
          return node;
        }, getFileDataAsRegularArray: function(node) {
          if (node.contents && node.contents.subarray) {
            var arr = [];
            for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
            return arr;
          }
          return node.contents;
        }, getFileDataAsTypedArray: function(node) {
          if (!node.contents) return new Uint8Array(0);
          if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
          return new Uint8Array(node.contents);
        }, expandFileStorage: function(node, newCapacity) {
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity) return;
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
          if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity);
          if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
          return;
        }, resizeFileStorage: function(node, newSize) {
          if (node.usedBytes == newSize) return;
          if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0;
            return;
          }
          if (!node.contents || node.contents.subarray) {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize);
            if (oldContents) {
              node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
            }
            node.usedBytes = newSize;
            return;
          }
          if (!node.contents) node.contents = [];
          if (node.contents.length > newSize) node.contents.length = newSize;
          else while (node.contents.length < newSize) node.contents.push(0);
          node.usedBytes = newSize;
        }, node_ops: { getattr: function(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        }, setattr: function(node, attr) {
          if (attr.mode !== void 0) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== void 0) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        }, lookup: function(parent, name) {
          throw FS.genericErrors[44];
        }, mknod: function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        }, rename: function(old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        }, unlink: function(parent, name) {
          delete parent.contents[name];
        }, rmdir: function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        }, readdir: function(node) {
          var entries = [".", ".."];
          for (var key2 in node.contents) {
            if (!node.contents.hasOwnProperty(key2)) {
              continue;
            }
            entries.push(key2);
          }
          return entries;
        }, symlink: function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        }, readlink: function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        } }, stream_ops: { read: function(stream, buffer2, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            buffer2.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer2[offset + i] = contents[position + i];
          }
          return size;
        }, write: function(stream, buffer2, offset, length, position, canOwn) {
          assert(!(buffer2 instanceof ArrayBuffer));
          if (buffer2.buffer === HEAP8.buffer) {
            if (canOwn) {
              warnOnce("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)");
            }
            canOwn = false;
          }
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer2.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              assert(position === 0, "canOwn must imply no weird position inside the file");
              node.contents = buffer2.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer2.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer2.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer2.subarray) node.contents.set(buffer2.subarray(offset, offset + length), position);
          else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer2[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        }, llseek: function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        }, allocate: function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        }, mmap: function(stream, address, length, position, prot, flags) {
          assert(address === 0);
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr, allocated };
        }, msync: function(stream, buffer2, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            return 0;
          }
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer2, 0, length, offset, false);
          return 0;
        } } };
        var ERRNO_MESSAGES = { 0: "Success", 1: "Arg list too long", 2: "Permission denied", 3: "Address already in use", 4: "Address not available", 5: "Address family not supported by protocol family", 6: "No more processes", 7: "Socket already connected", 8: "Bad file number", 9: "Trying to read unreadable message", 10: "Mount device busy", 11: "Operation canceled", 12: "No children", 13: "Connection aborted", 14: "Connection refused", 15: "Connection reset by peer", 16: "File locking deadlock error", 17: "Destination address required", 18: "Math arg out of domain of func", 19: "Quota exceeded", 20: "File exists", 21: "Bad address", 22: "File too large", 23: "Host is unreachable", 24: "Identifier removed", 25: "Illegal byte sequence", 26: "Connection already in progress", 27: "Interrupted system call", 28: "Invalid argument", 29: "I/O error", 30: "Socket is already connected", 31: "Is a directory", 32: "Too many symbolic links", 33: "Too many open files", 34: "Too many links", 35: "Message too long", 36: "Multihop attempted", 37: "File or path name too long", 38: "Network interface is not configured", 39: "Connection reset by network", 40: "Network is unreachable", 41: "Too many open files in system", 42: "No buffer space available", 43: "No such device", 44: "No such file or directory", 45: "Exec format error", 46: "No record locks available", 47: "The link has been severed", 48: "Not enough core", 49: "No message of desired type", 50: "Protocol not available", 51: "No space left on device", 52: "Function not implemented", 53: "Socket is not connected", 54: "Not a directory", 55: "Directory not empty", 56: "State not recoverable", 57: "Socket operation on non-socket", 59: "Not a typewriter", 60: "No such device or address", 61: "Value too large for defined data type", 62: "Previous owner died", 63: "Not super-user", 64: "Broken pipe", 65: "Protocol error", 66: "Unknown protocol", 67: "Protocol wrong type for socket", 68: "Math result not representable", 69: "Read only file system", 70: "Illegal seek", 71: "No such process", 72: "Stale file handle", 73: "Connection timed out", 74: "Text file busy", 75: "Cross-device link", 100: "Device not a stream", 101: "Bad font file fmt", 102: "Invalid slot", 103: "Invalid request code", 104: "No anode", 105: "Block device required", 106: "Channel number out of range", 107: "Level 3 halted", 108: "Level 3 reset", 109: "Link number out of range", 110: "Protocol driver not attached", 111: "No CSI structure available", 112: "Level 2 halted", 113: "Invalid exchange", 114: "Invalid request descriptor", 115: "Exchange full", 116: "No data (for no delay io)", 117: "Timer expired", 118: "Out of streams resources", 119: "Machine is not on the network", 120: "Package not installed", 121: "The object is remote", 122: "Advertise error", 123: "Srmount error", 124: "Communication error on send", 125: "Cross mount point (not really error)", 126: "Given log. name not unique", 127: "f.d. invalid for this operation", 128: "Remote address changed", 129: "Can   access a needed shared lib", 130: "Accessing a corrupted shared lib", 131: ".lib section in a.out corrupted", 132: "Attempting to link in too many libs", 133: "Attempting to exec a shared library", 135: "Streams pipe error", 136: "Too many users", 137: "Socket type not supported", 138: "Not supported", 139: "Protocol family not supported", 140: "Can't send after socket shutdown", 141: "Too many references", 142: "Host is down", 148: "No medium (in tape drive)", 156: "Level 2 not synchronized" };
        var ERRNO_CODES = { EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135 };
        var FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, trackingDelegate: {}, tracking: { openFlags: { READ: 1, WRITE: 2 } }, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, handleFSError: function(e) {
          if (!(e instanceof FS.ErrnoError)) throw e + " : " + stackTrace();
          return setErrNo(e.errno);
        }, lookupPath: function(path, opts) {
          path = PATH_FS.resolve(FS.cwd(), path);
          opts = opts || {};
          if (!path) return { path: "", node: null };
          var defaults = { follow_mount: true, recurse_count: 0 };
          for (var key2 in defaults) {
            if (opts[key2] === void 0) {
              opts[key2] = defaults[key2];
            }
          }
          if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32);
          }
          var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
            return !!p;
          }), false);
          var current = FS.root;
          var current_path = "/";
          for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
              break;
            }
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
            if (FS.isMountpoint(current)) {
              if (!islast || islast && opts.follow_mount) {
                current = current.mounted.root;
              }
            }
            if (!islast || opts.follow) {
              var count = 0;
              while (FS.isLink(current.mode)) {
                var link = FS.readlink(current_path);
                current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
                current = lookup.node;
                if (count++ > 40) {
                  throw new FS.ErrnoError(32);
                }
              }
            }
          }
          return { path: current_path, node: current };
        }, getPath: function(node) {
          var path;
          while (true) {
            if (FS.isRoot(node)) {
              var mount = node.mount.mountpoint;
              if (!path) return mount;
              return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
            }
            path = path ? node.name + "/" + path : node.name;
            node = node.parent;
          }
        }, hashName: function(parentid, name) {
          var hash = 0;
          for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
          }
          return (parentid + hash >>> 0) % FS.nameTable.length;
        }, hashAddNode: function(node) {
          var hash = FS.hashName(node.parent.id, node.name);
          node.name_next = FS.nameTable[hash];
          FS.nameTable[hash] = node;
        }, hashRemoveNode: function(node) {
          var hash = FS.hashName(node.parent.id, node.name);
          if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next;
          } else {
            var current = FS.nameTable[hash];
            while (current) {
              if (current.name_next === node) {
                current.name_next = node.name_next;
                break;
              }
              current = current.name_next;
            }
          }
        }, lookupNode: function(parent, name) {
          var errCode = FS.mayLookup(parent);
          if (errCode) {
            throw new FS.ErrnoError(errCode, parent);
          }
          var hash = FS.hashName(parent.id, name);
          for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
              return node;
            }
          }
          return FS.lookup(parent, name);
        }, createNode: function(parent, name, mode, rdev) {
          var node = new FS.FSNode(parent, name, mode, rdev);
          FS.hashAddNode(node);
          return node;
        }, destroyNode: function(node) {
          FS.hashRemoveNode(node);
        }, isRoot: function(node) {
          return node === node.parent;
        }, isMountpoint: function(node) {
          return !!node.mounted;
        }, isFile: function(mode) {
          return (mode & 61440) === 32768;
        }, isDir: function(mode) {
          return (mode & 61440) === 16384;
        }, isLink: function(mode) {
          return (mode & 61440) === 40960;
        }, isChrdev: function(mode) {
          return (mode & 61440) === 8192;
        }, isBlkdev: function(mode) {
          return (mode & 61440) === 24576;
        }, isFIFO: function(mode) {
          return (mode & 61440) === 4096;
        }, isSocket: function(mode) {
          return (mode & 49152) === 49152;
        }, flagModes: { "r": 0, "rs": 1052672, "r+": 2, "w": 577, "wx": 705, "xw": 705, "w+": 578, "wx+": 706, "xw+": 706, "a": 1089, "ax": 1217, "xa": 1217, "a+": 1090, "ax+": 1218, "xa+": 1218 }, modeStringToFlags: function(str) {
          var flags = FS.flagModes[str];
          if (typeof flags === "undefined") {
            throw new Error("Unknown file open mode: " + str);
          }
          return flags;
        }, flagsToPermissionString: function(flag) {
          var perms = ["r", "w", "rw"][flag & 3];
          if (flag & 512) {
            perms += "w";
          }
          return perms;
        }, nodePermissions: function(node, perms) {
          if (FS.ignorePermissions) {
            return 0;
          }
          if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
            return 2;
          } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
            return 2;
          } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
            return 2;
          }
          return 0;
        }, mayLookup: function(dir) {
          var errCode = FS.nodePermissions(dir, "x");
          if (errCode) return errCode;
          if (!dir.node_ops.lookup) return 2;
          return 0;
        }, mayCreate: function(dir, name) {
          try {
            var node = FS.lookupNode(dir, name);
            return 20;
          } catch (e) {
          }
          return FS.nodePermissions(dir, "wx");
        }, mayDelete: function(dir, name, isdir) {
          var node;
          try {
            node = FS.lookupNode(dir, name);
          } catch (e) {
            return e.errno;
          }
          var errCode = FS.nodePermissions(dir, "wx");
          if (errCode) {
            return errCode;
          }
          if (isdir) {
            if (!FS.isDir(node.mode)) {
              return 54;
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
              return 10;
            }
          } else {
            if (FS.isDir(node.mode)) {
              return 31;
            }
          }
          return 0;
        }, mayOpen: function(node, flags) {
          if (!node) {
            return 44;
          }
          if (FS.isLink(node.mode)) {
            return 32;
          } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
              return 31;
            }
          }
          return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
        }, MAX_OPEN_FDS: 4096, nextfd: function(fd_start, fd_end) {
          fd_start = fd_start || 0;
          fd_end = fd_end || FS.MAX_OPEN_FDS;
          for (var fd = fd_start; fd <= fd_end; fd++) {
            if (!FS.streams[fd]) {
              return fd;
            }
          }
          throw new FS.ErrnoError(33);
        }, getStream: function(fd) {
          return FS.streams[fd];
        }, createStream: function(stream, fd_start, fd_end) {
          if (!FS.FSStream) {
            FS.FSStream = function() {
            };
            FS.FSStream.prototype = { object: { get: function() {
              return this.node;
            }, set: function(val) {
              this.node = val;
            } }, isRead: { get: function() {
              return (this.flags & 2097155) !== 1;
            } }, isWrite: { get: function() {
              return (this.flags & 2097155) !== 0;
            } }, isAppend: { get: function() {
              return this.flags & 1024;
            } } };
          }
          var newStream = new FS.FSStream();
          for (var p in stream) {
            newStream[p] = stream[p];
          }
          stream = newStream;
          var fd = FS.nextfd(fd_start, fd_end);
          stream.fd = fd;
          FS.streams[fd] = stream;
          return stream;
        }, closeStream: function(fd) {
          FS.streams[fd] = null;
        }, chrdev_stream_ops: { open: function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        }, llseek: function() {
          throw new FS.ErrnoError(70);
        } }, major: function(dev) {
          return dev >> 8;
        }, minor: function(dev) {
          return dev & 255;
        }, makedev: function(ma, mi) {
          return ma << 8 | mi;
        }, registerDevice: function(dev, ops) {
          FS.devices[dev] = { stream_ops: ops };
        }, getDevice: function(dev) {
          return FS.devices[dev];
        }, getMounts: function(mount) {
          var mounts = [];
          var check = [mount];
          while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts);
          }
          return mounts;
        }, syncfs: function(populate, callback) {
          if (typeof populate === "function") {
            callback = populate;
            populate = false;
          }
          FS.syncFSRequests++;
          if (FS.syncFSRequests > 1) {
            err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
          }
          var mounts = FS.getMounts(FS.root.mount);
          var completed = 0;
          function doCallback(errCode) {
            assert(FS.syncFSRequests > 0);
            FS.syncFSRequests--;
            return callback(errCode);
          }
          function done(errCode) {
            if (errCode) {
              if (!done.errored) {
                done.errored = true;
                return doCallback(errCode);
              }
              return;
            }
            if (++completed >= mounts.length) {
              doCallback(null);
            }
          }
          mounts.forEach(function(mount) {
            if (!mount.type.syncfs) {
              return done(null);
            }
            mount.type.syncfs(mount, populate, done);
          });
        }, mount: function(type, opts, mountpoint) {
          if (typeof type === "string") {
            throw type;
          }
          var root = mountpoint === "/";
          var pseudo = !mountpoint;
          var node;
          if (root && FS.root) {
            throw new FS.ErrnoError(10);
          } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
            if (!FS.isDir(node.mode)) {
              throw new FS.ErrnoError(54);
            }
          }
          var mount = { type, opts, mountpoint, mounts: [] };
          var mountRoot = type.mount(mount);
          mountRoot.mount = mount;
          mount.root = mountRoot;
          if (root) {
            FS.root = mountRoot;
          } else if (node) {
            node.mounted = mount;
            if (node.mount) {
              node.mount.mounts.push(mount);
            }
          }
          return mountRoot;
        }, unmount: function(mountpoint) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28);
          }
          var node = lookup.node;
          var mount = node.mounted;
          var mounts = FS.getMounts(mount);
          Object.keys(FS.nameTable).forEach(function(hash) {
            var current = FS.nameTable[hash];
            while (current) {
              var next = current.name_next;
              if (mounts.indexOf(current.mount) !== -1) {
                FS.destroyNode(current);
              }
              current = next;
            }
          });
          node.mounted = null;
          var idx = node.mount.mounts.indexOf(mount);
          assert(idx !== -1);
          node.mount.mounts.splice(idx, 1);
        }, lookup: function(parent, name) {
          return parent.node_ops.lookup(parent, name);
        }, mknod: function(path, mode, dev) {
          var lookup = FS.lookupPath(path, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path);
          if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.mayCreate(parent, name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.mknod(parent, name, mode, dev);
        }, create: function(path, mode) {
          mode = mode !== void 0 ? mode : 438;
          mode &= 4095;
          mode |= 32768;
          return FS.mknod(path, mode, 0);
        }, mkdir: function(path, mode) {
          mode = mode !== void 0 ? mode : 511;
          mode &= 511 | 512;
          mode |= 16384;
          return FS.mknod(path, mode, 0);
        }, mkdirTree: function(path, mode) {
          var dirs = path.split("/");
          var d = "";
          for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i]) continue;
            d += "/" + dirs[i];
            try {
              FS.mkdir(d, mode);
            } catch (e) {
              if (e.errno != 20) throw e;
            }
          }
        }, mkdev: function(path, mode, dev) {
          if (typeof dev === "undefined") {
            dev = mode;
            mode = 438;
          }
          mode |= 8192;
          return FS.mknod(path, mode, dev);
        }, symlink: function(oldpath, newpath) {
          if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44);
          }
          var lookup = FS.lookupPath(newpath, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS.ErrnoError(44);
          }
          var newname = PATH.basename(newpath);
          var errCode = FS.mayCreate(parent, newname);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.symlink(parent, newname, oldpath);
        }, rename: function(old_path, new_path) {
          var old_dirname = PATH.dirname(old_path);
          var new_dirname = PATH.dirname(new_path);
          var old_name = PATH.basename(old_path);
          var new_name = PATH.basename(new_path);
          var lookup, old_dir, new_dir;
          try {
            lookup = FS.lookupPath(old_path, { parent: true });
            old_dir = lookup.node;
            lookup = FS.lookupPath(new_path, { parent: true });
            new_dir = lookup.node;
          } catch (e) {
            throw new FS.ErrnoError(10);
          }
          if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
          if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75);
          }
          var old_node = FS.lookupNode(old_dir, old_name);
          var relative = PATH_FS.relative(old_path, new_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28);
          }
          relative = PATH_FS.relative(new_path, old_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55);
          }
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {
          }
          if (old_node === new_node) {
            return;
          }
          var isdir = FS.isDir(old_node.mode);
          var errCode = FS.mayDelete(old_dir, old_name, isdir);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10);
          }
          if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, "w");
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          try {
            if (FS.trackingDelegate["willMovePath"]) {
              FS.trackingDelegate["willMovePath"](old_path, new_path);
            }
          } catch (e) {
            err("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
          }
          FS.hashRemoveNode(old_node);
          try {
            old_dir.node_ops.rename(old_node, new_dir, new_name);
          } catch (e) {
            throw e;
          } finally {
            FS.hashAddNode(old_node);
          }
          try {
            if (FS.trackingDelegate["onMovePath"]) FS.trackingDelegate["onMovePath"](old_path, new_path);
          } catch (e) {
            err("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
          }
        }, rmdir: function(path) {
          var lookup = FS.lookupPath(path, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, true);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          try {
            if (FS.trackingDelegate["willDeletePath"]) {
              FS.trackingDelegate["willDeletePath"](path);
            }
          } catch (e) {
            err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
          }
          parent.node_ops.rmdir(parent, name);
          FS.destroyNode(node);
          try {
            if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
          } catch (e) {
            err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
          }
        }, readdir: function(path) {
          var lookup = FS.lookupPath(path, { follow: true });
          var node = lookup.node;
          if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54);
          }
          return node.node_ops.readdir(node);
        }, unlink: function(path) {
          var lookup = FS.lookupPath(path, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, false);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          try {
            if (FS.trackingDelegate["willDeletePath"]) {
              FS.trackingDelegate["willDeletePath"](path);
            }
          } catch (e) {
            err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
          }
          parent.node_ops.unlink(parent, name);
          FS.destroyNode(node);
          try {
            if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
          } catch (e) {
            err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
          }
        }, readlink: function(path) {
          var lookup = FS.lookupPath(path);
          var link = lookup.node;
          if (!link) {
            throw new FS.ErrnoError(44);
          }
          if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28);
          }
          return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
        }, stat: function(path, dontFollow) {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          var node = lookup.node;
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63);
          }
          return node.node_ops.getattr(node);
        }, lstat: function(path) {
          return FS.stat(path, true);
        }, chmod: function(path, mode, dontFollow) {
          var node;
          if (typeof path === "string") {
            var lookup = FS.lookupPath(path, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, { mode: mode & 4095 | node.mode & ~4095, timestamp: Date.now() });
        }, lchmod: function(path, mode) {
          FS.chmod(path, mode, true);
        }, fchmod: function(fd, mode) {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chmod(stream.node, mode);
        }, chown: function(path, uid, gid, dontFollow) {
          var node;
          if (typeof path === "string") {
            var lookup = FS.lookupPath(path, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, { timestamp: Date.now() });
        }, lchown: function(path, uid, gid) {
          FS.chown(path, uid, gid, true);
        }, fchown: function(fd, uid, gid) {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chown(stream.node, uid, gid);
        }, truncate: function(path, len) {
          if (len < 0) {
            throw new FS.ErrnoError(28);
          }
          var node;
          if (typeof path === "string") {
            var lookup = FS.lookupPath(path, { follow: true });
            node = lookup.node;
          } else {
            node = path;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.nodePermissions(node, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
        }, ftruncate: function(fd, len) {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28);
          }
          FS.truncate(stream.node, len);
        }, utime: function(path, atime, mtime) {
          var lookup = FS.lookupPath(path, { follow: true });
          var node = lookup.node;
          node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
        }, open: function(path, flags, mode, fd_start, fd_end) {
          if (path === "") {
            throw new FS.ErrnoError(44);
          }
          flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
          mode = typeof mode === "undefined" ? 438 : mode;
          if (flags & 64) {
            mode = mode & 4095 | 32768;
          } else {
            mode = 0;
          }
          var node;
          if (typeof path === "object") {
            node = path;
          } else {
            path = PATH.normalize(path);
            try {
              var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
              node = lookup.node;
            } catch (e) {
            }
          }
          var created = false;
          if (flags & 64) {
            if (node) {
              if (flags & 128) {
                throw new FS.ErrnoError(20);
              }
            } else {
              node = FS.mknod(path, mode, 0);
              created = true;
            }
          }
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          if (FS.isChrdev(node.mode)) {
            flags &= ~512;
          }
          if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
          if (!created) {
            var errCode = FS.mayOpen(node, flags);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          if (flags & 512) {
            FS.truncate(node, 0);
          }
          flags &= ~(128 | 512 | 131072);
          var stream = FS.createStream({ node, path: FS.getPath(node), flags, seekable: true, position: 0, stream_ops: node.stream_ops, ungotten: [], error: false }, fd_start, fd_end);
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
          if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles) FS.readFiles = {};
            if (!(path in FS.readFiles)) {
              FS.readFiles[path] = 1;
              err("FS.trackingDelegate error on read file: " + path);
            }
          }
          try {
            if (FS.trackingDelegate["onOpenFile"]) {
              var trackingFlags = 0;
              if ((flags & 2097155) !== 1) {
                trackingFlags |= FS.tracking.openFlags.READ;
              }
              if ((flags & 2097155) !== 0) {
                trackingFlags |= FS.tracking.openFlags.WRITE;
              }
              FS.trackingDelegate["onOpenFile"](path, trackingFlags);
            }
          } catch (e) {
            err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
          }
          return stream;
        }, close: function(stream) {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (stream.getdents) stream.getdents = null;
          try {
            if (stream.stream_ops.close) {
              stream.stream_ops.close(stream);
            }
          } catch (e) {
            throw e;
          } finally {
            FS.closeStream(stream.fd);
          }
          stream.fd = null;
        }, isClosed: function(stream) {
          return stream.fd === null;
        }, llseek: function(stream, offset, whence) {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70);
          }
          if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28);
          }
          stream.position = stream.stream_ops.llseek(stream, offset, whence);
          stream.ungotten = [];
          return stream.position;
        }, read: function(stream, buffer2, offset, length, position) {
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28);
          }
          var seeking = typeof position !== "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesRead = stream.stream_ops.read(stream, buffer2, offset, length, position);
          if (!seeking) stream.position += bytesRead;
          return bytesRead;
        }, write: function(stream, buffer2, offset, length, position, canOwn) {
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28);
          }
          if (stream.seekable && stream.flags & 1024) {
            FS.llseek(stream, 0, 2);
          }
          var seeking = typeof position !== "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesWritten = stream.stream_ops.write(stream, buffer2, offset, length, position, canOwn);
          if (!seeking) stream.position += bytesWritten;
          try {
            if (stream.path && FS.trackingDelegate["onWriteToFile"]) FS.trackingDelegate["onWriteToFile"](stream.path);
          } catch (e) {
            err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
          }
          return bytesWritten;
        }, allocate: function(stream, offset, length) {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138);
          }
          stream.stream_ops.allocate(stream, offset, length);
        }, mmap: function(stream, address, length, position, prot, flags) {
          if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2);
          }
          if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43);
          }
          return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
        }, msync: function(stream, buffer2, offset, length, mmapFlags) {
          if (!stream || !stream.stream_ops.msync) {
            return 0;
          }
          return stream.stream_ops.msync(stream, buffer2, offset, length, mmapFlags);
        }, munmap: function(stream) {
          return 0;
        }, ioctl: function(stream, cmd, arg) {
          if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59);
          }
          return stream.stream_ops.ioctl(stream, cmd, arg);
        }, readFile: function(path, opts) {
          opts = opts || {};
          opts.flags = opts.flags || "r";
          opts.encoding = opts.encoding || "binary";
          if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error('Invalid encoding type "' + opts.encoding + '"');
          }
          var ret;
          var stream = FS.open(path, opts.flags);
          var stat = FS.stat(path);
          var length = stat.size;
          var buf = new Uint8Array(length);
          FS.read(stream, buf, 0, length, 0);
          if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0);
          } else if (opts.encoding === "binary") {
            ret = buf;
          }
          FS.close(stream);
          return ret;
        }, writeFile: function(path, data, opts) {
          opts = opts || {};
          opts.flags = opts.flags || "w";
          var stream = FS.open(path, opts.flags, opts.mode);
          if (typeof data === "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
          } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
          } else {
            throw new Error("Unsupported data type");
          }
          FS.close(stream);
        }, cwd: function() {
          return FS.currentPath;
        }, chdir: function(path) {
          var lookup = FS.lookupPath(path, { follow: true });
          if (lookup.node === null) {
            throw new FS.ErrnoError(44);
          }
          if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54);
          }
          var errCode = FS.nodePermissions(lookup.node, "x");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          FS.currentPath = lookup.path;
        }, createDefaultDirectories: function() {
          FS.mkdir("/tmp");
          FS.mkdir("/home");
          FS.mkdir("/home/web_user");
        }, createDefaultDevices: function() {
          FS.mkdir("/dev");
          FS.registerDevice(FS.makedev(1, 3), { read: function() {
            return 0;
          }, write: function(stream, buffer2, offset, length, pos) {
            return length;
          } });
          FS.mkdev("/dev/null", FS.makedev(1, 3));
          TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
          TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
          FS.mkdev("/dev/tty", FS.makedev(5, 0));
          FS.mkdev("/dev/tty1", FS.makedev(6, 0));
          var random_device;
          if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
            var randomBuffer = new Uint8Array(1);
            random_device = function() {
              crypto.getRandomValues(randomBuffer);
              return randomBuffer[0];
            };
          } else {
          }
          if (!random_device) {
            random_device = function() {
              abort("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
            };
          }
          FS.createDevice("/dev", "random", random_device);
          FS.createDevice("/dev", "urandom", random_device);
          FS.mkdir("/dev/shm");
          FS.mkdir("/dev/shm/tmp");
        }, createSpecialDirectories: function() {
          FS.mkdir("/proc");
          FS.mkdir("/proc/self");
          FS.mkdir("/proc/self/fd");
          FS.mount({ mount: function() {
            var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
            node.node_ops = { lookup: function(parent, name) {
              var fd = +name;
              var stream = FS.getStream(fd);
              if (!stream) throw new FS.ErrnoError(8);
              var ret = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: function() {
                return stream.path;
              } } };
              ret.parent = ret;
              return ret;
            } };
            return node;
          } }, {}, "/proc/self/fd");
        }, createStandardStreams: function() {
          if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdin");
          }
          if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdout");
          }
          if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"]);
          } else {
            FS.symlink("/dev/tty1", "/dev/stderr");
          }
          var stdin = FS.open("/dev/stdin", "r");
          var stdout = FS.open("/dev/stdout", "w");
          var stderr = FS.open("/dev/stderr", "w");
          assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
          assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
          assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
        }, ensureErrnoError: function() {
          if (FS.ErrnoError) return;
          FS.ErrnoError = function ErrnoError(errno, node) {
            this.node = node;
            this.setErrno = function(errno2) {
              this.errno = errno2;
              for (var key2 in ERRNO_CODES) {
                if (ERRNO_CODES[key2] === errno2) {
                  this.code = key2;
                  break;
                }
              }
            };
            this.setErrno(errno);
            this.message = ERRNO_MESSAGES[errno];
            if (this.stack) {
              Object.defineProperty(this, "stack", { value: new Error().stack, writable: true });
              this.stack = demangleAll(this.stack);
            }
          };
          FS.ErrnoError.prototype = new Error();
          FS.ErrnoError.prototype.constructor = FS.ErrnoError;
          [44].forEach(function(code) {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>";
          });
        }, staticInit: function() {
          FS.ensureErrnoError();
          FS.nameTable = new Array(4096);
          FS.mount(MEMFS, {}, "/");
          FS.createDefaultDirectories();
          FS.createDefaultDevices();
          FS.createSpecialDirectories();
          FS.filesystems = { "MEMFS": MEMFS };
        }, init: function(input, output, error) {
          assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
          FS.init.initialized = true;
          FS.ensureErrnoError();
          Module["stdin"] = input || Module["stdin"];
          Module["stdout"] = output || Module["stdout"];
          Module["stderr"] = error || Module["stderr"];
          FS.createStandardStreams();
        }, quit: function() {
          FS.init.initialized = false;
          var fflush = Module["_fflush"];
          if (fflush) fflush(0);
          for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
              continue;
            }
            FS.close(stream);
          }
        }, getMode: function(canRead, canWrite) {
          var mode = 0;
          if (canRead) mode |= 292 | 73;
          if (canWrite) mode |= 146;
          return mode;
        }, joinPath: function(parts, forceRelative) {
          var path = PATH.join.apply(null, parts);
          if (forceRelative && path[0] == "/") path = path.substr(1);
          return path;
        }, absolutePath: function(relative, base) {
          return PATH_FS.resolve(base, relative);
        }, standardizePath: function(path) {
          return PATH.normalize(path);
        }, findObject: function(path, dontResolveLastLink) {
          var ret = FS.analyzePath(path, dontResolveLastLink);
          if (ret.exists) {
            return ret.object;
          } else {
            setErrNo(ret.error);
            return null;
          }
        }, analyzePath: function(path, dontResolveLastLink) {
          try {
            var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
            path = lookup.path;
          } catch (e) {
          }
          var ret = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
          try {
            var lookup = FS.lookupPath(path, { parent: true });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/";
          } catch (e) {
            ret.error = e.errno;
          }
          return ret;
        }, createFolder: function(parent, name, canRead, canWrite) {
          var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
          var mode = FS.getMode(canRead, canWrite);
          return FS.mkdir(path, mode);
        }, createPath: function(parent, path, canRead, canWrite) {
          parent = typeof parent === "string" ? parent : FS.getPath(parent);
          var parts = path.split("/").reverse();
          while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH.join2(parent, part);
            try {
              FS.mkdir(current);
            } catch (e) {
            }
            parent = current;
          }
          return current;
        }, createFile: function(parent, name, properties, canRead, canWrite) {
          var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
          var mode = FS.getMode(canRead, canWrite);
          return FS.create(path, mode);
        }, createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
          var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
          var mode = FS.getMode(canRead, canWrite);
          var node = FS.create(path, mode);
          if (data) {
            if (typeof data === "string") {
              var arr = new Array(data.length);
              for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
              data = arr;
            }
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, "w");
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode);
          }
          return node;
        }, createDevice: function(parent, name, input, output) {
          var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
          var mode = FS.getMode(!!input, !!output);
          if (!FS.createDevice.major) FS.createDevice.major = 64;
          var dev = FS.makedev(FS.createDevice.major++, 0);
          FS.registerDevice(dev, { open: function(stream) {
            stream.seekable = false;
          }, close: function(stream) {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          }, read: function(stream, buffer2, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0) break;
              bytesRead++;
              buffer2[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          }, write: function(stream, buffer2, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer2[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          } });
          return FS.mkdev(path, mode, dev);
        }, createLink: function(parent, name, target, canRead, canWrite) {
          var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
          return FS.symlink(target, path);
        }, forceLoadFile: function(obj) {
          if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
          var success = true;
          if (typeof XMLHttpRequest !== "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          } else if (read_) {
            try {
              obj.contents = intArrayFromString(read_(obj.url), true);
              obj.usedBytes = obj.contents.length;
            } catch (e) {
              success = false;
            }
          } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.");
          }
          if (!success) setErrNo(29);
          return success;
        }, createLazyFile: function(parent, name, url, canRead, canWrite) {
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = [];
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
              return void 0;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset];
          };
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          };
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing) chunkSize = datalength;
            var doXHR = function(from, to) {
              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
              var xhr2 = new XMLHttpRequest();
              xhr2.open("GET", url, false);
              if (datalength !== chunkSize) xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
              if (typeof Uint8Array != "undefined") xhr2.responseType = "arraybuffer";
              if (xhr2.overrideMimeType) {
                xhr2.overrideMimeType("text/plain; charset=x-user-defined");
              }
              xhr2.send(null);
              if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
              if (xhr2.response !== void 0) {
                return new Uint8Array(xhr2.response || []);
              } else {
                return intArrayFromString(xhr2.responseText || "", true);
              }
            };
            var lazyArray2 = this;
            lazyArray2.setDataGetter(function(chunkNum) {
              var start = chunkNum * chunkSize;
              var end = (chunkNum + 1) * chunkSize - 1;
              end = Math.min(end, datalength - 1);
              if (typeof lazyArray2.chunks[chunkNum] === "undefined") {
                lazyArray2.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray2.chunks[chunkNum] === "undefined") throw new Error("doXHR failed!");
              return lazyArray2.chunks[chunkNum];
            });
            if (usesGzip || !datalength) {
              chunkSize = datalength = 1;
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          };
          if (typeof XMLHttpRequest !== "undefined") {
            if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array();
            Object.defineProperties(lazyArray, { length: { get: function() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            } }, chunkSize: { get: function() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            } } });
            var properties = { isDevice: false, contents: lazyArray };
          } else {
            var properties = { isDevice: false, url };
          }
          var node = FS.createFile(parent, name, properties, canRead, canWrite);
          if (properties.contents) {
            node.contents = properties.contents;
          } else if (properties.url) {
            node.contents = null;
            node.url = properties.url;
          }
          Object.defineProperties(node, { usedBytes: { get: function() {
            return this.contents.length;
          } } });
          var stream_ops = {};
          var keys = Object.keys(node.stream_ops);
          keys.forEach(function(key2) {
            var fn = node.stream_ops[key2];
            stream_ops[key2] = function forceLoadLazyFile() {
              if (!FS.forceLoadFile(node)) {
                throw new FS.ErrnoError(29);
              }
              return fn.apply(null, arguments);
            };
          });
          stream_ops.read = function stream_ops_read(stream, buffer2, offset, length, position) {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            var contents = stream.node.contents;
            if (position >= contents.length) return 0;
            var size = Math.min(contents.length - position, length);
            assert(size >= 0);
            if (contents.slice) {
              for (var i = 0; i < size; i++) {
                buffer2[offset + i] = contents[position + i];
              }
            } else {
              for (var i = 0; i < size; i++) {
                buffer2[offset + i] = contents.get(position + i);
              }
            }
            return size;
          };
          node.stream_ops = stream_ops;
          return node;
        }, createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
          Browser.init();
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
          var dep = getUniqueRunDependency("cp " + fullname);
          function processData(byteArray) {
            function finish(byteArray2) {
              if (preFinish) preFinish();
              if (!dontCreateFile) {
                FS.createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
              }
              if (onload) onload();
              removeRunDependency(dep);
            }
            var handled = false;
            Module["preloadPlugins"].forEach(function(plugin) {
              if (handled) return;
              if (plugin["canHandle"](fullname)) {
                plugin["handle"](byteArray, fullname, finish, function() {
                  if (onerror) onerror();
                  removeRunDependency(dep);
                });
                handled = true;
              }
            });
            if (!handled) finish(byteArray);
          }
          addRunDependency(dep);
          if (typeof url == "string") {
            Browser.asyncLoad(url, function(byteArray) {
              processData(byteArray);
            }, onerror);
          } else {
            processData(url);
          }
        }, indexedDB: function() {
          return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }, DB_NAME: function() {
          return "EM_FS_" + window.location.pathname;
        }, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: function(paths, onload, onerror) {
          onload = onload || function() {
          };
          onerror = onerror || function() {
          };
          var indexedDB = FS.indexedDB();
          try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
          } catch (e) {
            return onerror(e);
          }
          openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
            out("creating db");
            var db = openRequest.result;
            db.createObjectStore(FS.DB_STORE_NAME);
          };
          openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;
            var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0, fail = 0, total = paths.length;
            function finish() {
              if (fail == 0) onload();
              else onerror();
            }
            paths.forEach(function(path) {
              var putRequest = files.put(FS.analyzePath(path).object.contents, path);
              putRequest.onsuccess = function putRequest_onsuccess() {
                ok++;
                if (ok + fail == total) finish();
              };
              putRequest.onerror = function putRequest_onerror() {
                fail++;
                if (ok + fail == total) finish();
              };
            });
            transaction.onerror = onerror;
          };
          openRequest.onerror = onerror;
        }, loadFilesFromDB: function(paths, onload, onerror) {
          onload = onload || function() {
          };
          onerror = onerror || function() {
          };
          var indexedDB = FS.indexedDB();
          try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
          } catch (e) {
            return onerror(e);
          }
          openRequest.onupgradeneeded = onerror;
          openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;
            try {
              var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
            } catch (e) {
              onerror(e);
              return;
            }
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0, fail = 0, total = paths.length;
            function finish() {
              if (fail == 0) onload();
              else onerror();
            }
            paths.forEach(function(path) {
              var getRequest = files.get(path);
              getRequest.onsuccess = function getRequest_onsuccess() {
                if (FS.analyzePath(path).exists) {
                  FS.unlink(path);
                }
                FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                ok++;
                if (ok + fail == total) finish();
              };
              getRequest.onerror = function getRequest_onerror() {
                fail++;
                if (ok + fail == total) finish();
              };
            });
            transaction.onerror = onerror;
          };
          openRequest.onerror = onerror;
        } };
        var SYSCALLS = { mappings: {}, DEFAULT_POLLMASK: 5, umask: 511, calculateAt: function(dirfd, path) {
          if (path[0] !== "/") {
            var dir;
            if (dirfd === -100) {
              dir = FS.cwd();
            } else {
              var dirstream = FS.getStream(dirfd);
              if (!dirstream) throw new FS.ErrnoError(8);
              dir = dirstream.path;
            }
            path = PATH.join2(dir, path);
          }
          return path;
        }, doStat: function(func, path, buf) {
          try {
            var stat = func(path);
          } catch (e) {
            if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
              return -54;
            }
            throw e;
          }
          HEAP32[buf >> 2] = stat.dev;
          HEAP32[buf + 4 >> 2] = 0;
          HEAP32[buf + 8 >> 2] = stat.ino;
          HEAP32[buf + 12 >> 2] = stat.mode;
          HEAP32[buf + 16 >> 2] = stat.nlink;
          HEAP32[buf + 20 >> 2] = stat.uid;
          HEAP32[buf + 24 >> 2] = stat.gid;
          HEAP32[buf + 28 >> 2] = stat.rdev;
          HEAP32[buf + 32 >> 2] = 0;
          tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
          HEAP32[buf + 48 >> 2] = 4096;
          HEAP32[buf + 52 >> 2] = stat.blocks;
          HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
          HEAP32[buf + 60 >> 2] = 0;
          HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
          HEAP32[buf + 68 >> 2] = 0;
          HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
          HEAP32[buf + 76 >> 2] = 0;
          tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
          return 0;
        }, doMsync: function(addr, stream, len, flags, offset) {
          var buffer2 = HEAPU8.slice(addr, addr + len);
          FS.msync(stream, buffer2, offset, len, flags);
        }, doMkdir: function(path, mode) {
          path = PATH.normalize(path);
          if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
          FS.mkdir(path, mode, 0);
          return 0;
        }, doMknod: function(path, mode, dev) {
          switch (mode & 61440) {
            case 32768:
            case 8192:
            case 24576:
            case 4096:
            case 49152:
              break;
            default:
              return -28;
          }
          FS.mknod(path, mode, dev);
          return 0;
        }, doReadlink: function(path, buf, bufsize) {
          if (bufsize <= 0) return -28;
          var ret = FS.readlink(path);
          var len = Math.min(bufsize, lengthBytesUTF8(ret));
          var endChar = HEAP8[buf + len];
          stringToUTF8(ret, buf, bufsize + 1);
          HEAP8[buf + len] = endChar;
          return len;
        }, doAccess: function(path, amode) {
          if (amode & ~7) {
            return -28;
          }
          var node;
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
          if (!node) {
            return -44;
          }
          var perms = "";
          if (amode & 4) perms += "r";
          if (amode & 2) perms += "w";
          if (amode & 1) perms += "x";
          if (perms && FS.nodePermissions(node, perms)) {
            return -2;
          }
          return 0;
        }, doDup: function(path, flags, suggestFD) {
          var suggest = FS.getStream(suggestFD);
          if (suggest) FS.close(suggest);
          return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
        }, doReadv: function(stream, iov, iovcnt, offset) {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAP32[iov + i * 8 >> 2];
            var len = HEAP32[iov + (i * 8 + 4) >> 2];
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0) return -1;
            ret += curr;
            if (curr < len) break;
          }
          return ret;
        }, doWritev: function(stream, iov, iovcnt, offset) {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAP32[iov + i * 8 >> 2];
            var len = HEAP32[iov + (i * 8 + 4) >> 2];
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0) return -1;
            ret += curr;
          }
          return ret;
        }, varargs: void 0, get: function() {
          assert(SYSCALLS.varargs != void 0);
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        }, getStreamFromFD: function(fd) {
          var stream = FS.getStream(fd);
          if (!stream) throw new FS.ErrnoError(8);
          return stream;
        }, get64: function(low, high) {
          if (low >= 0) assert(high === 0);
          else assert(high === -1);
          return low;
        } };
        function syscallMunmap(addr, len) {
          if ((addr | 0) === -1 || len === 0) {
            return -28;
          }
          var info = SYSCALLS.mappings[addr];
          if (!info) return 0;
          if (len === info.len) {
            var stream = FS.getStream(info.fd);
            if (info.prot & 2) {
              SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
            }
            FS.munmap(stream);
            SYSCALLS.mappings[addr] = null;
            if (info.allocated) {
              _free(info.malloc);
            }
          }
          return 0;
        }
        function ___sys_munmap(addr, len) {
          try {
            return syscallMunmap(addr, len);
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
            return -e.errno;
          }
        }
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          } else {
            return name;
          }
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return new Function("body", "return function " + name + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(body);
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function(message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function() {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
          myTypes.forEach(function(type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach(function(dt, i) {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function registerType(rawType, registeredInstance, options) {
          options = options || {};
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError("registerType registeredInstance requires argPackAdvance");
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach(function(cb) {
              cb();
            });
          }
        }
        function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(wt) {
            return !!wt;
          }, "toWireType": function(destructors, o) {
            return o ? trueValue : falseValue;
          }, "argPackAdvance": 8, "readValueFromPointer": function(pointer) {
            var heap;
            if (size === 1) {
              heap = HEAP8;
            } else if (size === 2) {
              heap = HEAP16;
            } else if (size === 4) {
              heap = HEAP32;
            } else {
              throw new TypeError("Unknown boolean type size: " + name);
            }
            return this["fromWireType"](heap[pointer >> shift]);
          }, destructorFunction: null });
        }
        function ClassHandle_isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          var leftClass = this.$$.ptrType.registeredClass;
          var left = this.$$.ptr;
          var rightClass = other.$$.ptrType.registeredClass;
          var right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        }
        function shallowCopyInternalPointer(o) {
          return { count: o.count, deleteScheduled: o.deleteScheduled, preservePointerOnDelete: o.preservePointerOnDelete, ptr: o.ptr, ptrType: o.ptrType, smartPtr: o.smartPtr, smartPtrType: o.smartPtrType };
        }
        function throwInstanceAlreadyDeleted(obj) {
          function getInstanceTypeName(handle) {
            return handle.$$.ptrType.registeredClass.name;
          }
          throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
        }
        var finalizationGroup = false;
        function detachFinalizer(handle) {
        }
        function runDestructor($$) {
          if ($$.smartPtr) {
            $$.smartPtrType.rawDestructor($$.smartPtr);
          } else {
            $$.ptrType.registeredClass.rawDestructor($$.ptr);
          }
        }
        function releaseClassHandle($$) {
          $$.count.value -= 1;
          var toDelete = 0 === $$.count.value;
          if (toDelete) {
            runDestructor($$);
          }
        }
        function attachFinalizer(handle) {
          if ("undefined" === typeof FinalizationGroup) {
            attachFinalizer = function(handle2) {
              return handle2;
            };
            return handle;
          }
          finalizationGroup = new FinalizationGroup(function(iter) {
            for (var result = iter.next(); !result.done; result = iter.next()) {
              var $$ = result.value;
              if (!$$.ptr) {
                console.warn("object already deleted: " + $$.ptr);
              } else {
                releaseClassHandle($$);
              }
            }
          });
          attachFinalizer = function(handle2) {
            finalizationGroup.register(handle2, handle2.$$, handle2.$$);
            return handle2;
          };
          detachFinalizer = function(handle2) {
            finalizationGroup.unregister(handle2.$$);
          };
          return attachFinalizer(handle);
        }
        function ClassHandle_clone() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
          } else {
            var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }));
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        }
        function ClassHandle_delete() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          detachFinalizer(this);
          releaseClassHandle(this.$$);
          if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = void 0;
            this.$$.ptr = void 0;
          }
        }
        function ClassHandle_isDeleted() {
          return !this.$$.ptr;
        }
        var delayFunction = void 0;
        var deletionQueue = [];
        function flushPendingDeletes() {
          while (deletionQueue.length) {
            var obj = deletionQueue.pop();
            obj.$$.deleteScheduled = false;
            obj["delete"]();
          }
        }
        function ClassHandle_deleteLater() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          deletionQueue.push(this);
          if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
          this.$$.deleteScheduled = true;
          return this;
        }
        function init_ClassHandle() {
          ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
          ClassHandle.prototype["clone"] = ClassHandle_clone;
          ClassHandle.prototype["delete"] = ClassHandle_delete;
          ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
          ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
        }
        function ClassHandle() {
        }
        var registeredPointers = {};
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function() {
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module.hasOwnProperty(name)) {
            if (void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) {
              throwBindingError("Cannot register public name '" + name + "' twice");
            }
            ensureOverloadTable(Module, name, name);
            if (Module.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
            }
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            if (void 0 !== numArguments) {
              Module[name].numArguments = numArguments;
            }
          }
        }
        function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
          this.name = name;
          this.constructor = constructor;
          this.instancePrototype = instancePrototype;
          this.rawDestructor = rawDestructor;
          this.baseClass = baseClass;
          this.getActualType = getActualType;
          this.upcast = upcast;
          this.downcast = downcast;
          this.pureVirtualFunctions = [];
        }
        function upcastPointer(ptr, ptrClass, desiredClass) {
          while (ptrClass !== desiredClass) {
            if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
            }
            ptr = ptrClass.upcast(ptr);
            ptrClass = ptrClass.baseClass;
          }
          return ptr;
        }
        function constNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function genericPointerToWireType(destructors, handle) {
          var ptr;
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            if (this.isSmartPointer) {
              ptr = this.rawConstructor();
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
            } else {
              return 0;
            }
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (!this.isConst && handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          if (this.isSmartPointer) {
            if (void 0 === handle.$$.smartPtr) {
              throwBindingError("Passing raw pointer to smart pointer is illegal");
            }
            switch (this.sharingPolicy) {
              case 0:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                }
                break;
              case 1:
                ptr = handle.$$.smartPtr;
                break;
              case 2:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  var clonedHandle = handle["clone"]();
                  ptr = this.rawShare(ptr, __emval_register(function() {
                    clonedHandle["delete"]();
                  }));
                  if (destructors !== null) {
                    destructors.push(this.rawDestructor, ptr);
                  }
                }
                break;
              default:
                throwBindingError("Unsupporting sharing policy");
            }
          }
          return ptr;
        }
        function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAPU32[pointer >> 2]);
        }
        function RegisteredPointer_getPointee(ptr) {
          if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        }
        function RegisteredPointer_destructor(ptr) {
          if (this.rawDestructor) {
            this.rawDestructor(ptr);
          }
        }
        function RegisteredPointer_deleteObject(handle) {
          if (handle !== null) {
            handle["delete"]();
          }
        }
        function downcastPointer(ptr, ptrClass, desiredClass) {
          if (ptrClass === desiredClass) {
            return ptr;
          }
          if (void 0 === desiredClass.baseClass) {
            return null;
          }
          var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
          if (rv === null) {
            return null;
          }
          return desiredClass.downcast(rv);
        }
        function getInheritedInstanceCount() {
          return Object.keys(registeredInstances).length;
        }
        function getLiveInheritedInstances() {
          var rv = [];
          for (var k in registeredInstances) {
            if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
            }
          }
          return rv;
        }
        function setDelayFunction(fn) {
          delayFunction = fn;
          if (deletionQueue.length && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
        }
        function init_embind() {
          Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
          Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
          Module["flushPendingDeletes"] = flushPendingDeletes;
          Module["setDelayFunction"] = setDelayFunction;
        }
        var registeredInstances = {};
        function getBasestPointer(class_, ptr) {
          if (ptr === void 0) {
            throwBindingError("ptr should not be undefined");
          }
          while (class_.baseClass) {
            ptr = class_.upcast(ptr);
            class_ = class_.baseClass;
          }
          return ptr;
        }
        function getInheritedInstance(class_, ptr) {
          ptr = getBasestPointer(class_, ptr);
          return registeredInstances[ptr];
        }
        function makeClassHandle(prototype, record) {
          if (!record.ptrType || !record.ptr) {
            throwInternalError("makeClassHandle requires ptr and ptrType");
          }
          var hasSmartPtrType = !!record.smartPtrType;
          var hasSmartPtr = !!record.smartPtr;
          if (hasSmartPtrType !== hasSmartPtr) {
            throwInternalError("Both smartPtrType and smartPtr must be specified");
          }
          record.count = { value: 1 };
          return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
        }
        function RegisteredPointer_fromWireType(ptr) {
          var rawPointer = this.getPointee(ptr);
          if (!rawPointer) {
            this.destructor(ptr);
            return null;
          }
          var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
          if (void 0 !== registeredInstance) {
            if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance["clone"]();
            } else {
              var rv = registeredInstance["clone"]();
              this.destructor(ptr);
              return rv;
            }
          }
          function makeDefaultHandle() {
            if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: rawPointer, smartPtrType: this, smartPtr: ptr });
            } else {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr });
            }
          }
          var actualType = this.registeredClass.getActualType(rawPointer);
          var registeredPointerRecord = registeredPointers[actualType];
          if (!registeredPointerRecord) {
            return makeDefaultHandle.call(this);
          }
          var toType;
          if (this.isConst) {
            toType = registeredPointerRecord.constPointerType;
          } else {
            toType = registeredPointerRecord.pointerType;
          }
          var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
          if (dp === null) {
            return makeDefaultHandle.call(this);
          }
          if (this.isSmartPointer) {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp, smartPtrType: this, smartPtr: ptr });
          } else {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
          }
        }
        function init_RegisteredPointer() {
          RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
          RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
          RegisteredPointer.prototype["argPackAdvance"] = 8;
          RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
          RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
          RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
        }
        function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
          this.name = name;
          this.registeredClass = registeredClass;
          this.isReference = isReference;
          this.isConst = isConst;
          this.isSmartPointer = isSmartPointer;
          this.pointeeType = pointeeType;
          this.sharingPolicy = sharingPolicy;
          this.rawGetPointee = rawGetPointee;
          this.rawConstructor = rawConstructor;
          this.rawShare = rawShare;
          this.rawDestructor = rawDestructor;
          if (!isSmartPointer && registeredClass.baseClass === void 0) {
            if (isConst) {
              this["toWireType"] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            } else {
              this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            }
          } else {
            this["toWireType"] = genericPointerToWireType;
          }
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (void 0 !== Module[name].overloadTable && void 0 !== numArguments) {
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            Module[name].argCount = numArguments;
          }
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller(dynCall2) {
            var args = [];
            for (var i = 1; i < signature.length; ++i) {
              args.push("a" + i);
            }
            var name = "dynCall_" + signature + "_" + rawFunction;
            var body = "return function " + name + "(" + args.join(", ") + ") {\n";
            body += "    return dynCall(rawFunction" + (args.length ? ", " : "") + args.join(", ") + ");\n";
            body += "};\n";
            return new Function("dynCall", "rawFunction", body)(dynCall2, rawFunction);
          }
          var dc = Module["dynCall_" + signature];
          var fp = makeDynCaller(dc);
          if (typeof fp !== "function") {
            throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
        }
        function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
          name = readLatin1String(name);
          getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
          if (upcast) {
            upcast = embind__requireFunction(upcastSignature, upcast);
          }
          if (downcast) {
            downcast = embind__requireFunction(downcastSignature, downcast);
          }
          rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
          var legalFunctionName = makeLegalFunctionName(name);
          exposePublicSymbol(legalFunctionName, function() {
            throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
          });
          whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
            base = base[0];
            var baseClass;
            var basePrototype;
            if (baseClassRawType) {
              baseClass = base.registeredClass;
              basePrototype = baseClass.instancePrototype;
            } else {
              basePrototype = ClassHandle.prototype;
            }
            var constructor = createNamedFunction(legalFunctionName, function() {
              if (Object.getPrototypeOf(this) !== instancePrototype) {
                throw new BindingError("Use 'new' to construct " + name);
              }
              if (void 0 === registeredClass.constructor_body) {
                throw new BindingError(name + " has no accessible constructor");
              }
              var body = registeredClass.constructor_body[arguments.length];
              if (void 0 === body) {
                throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
              }
              return body.apply(this, arguments);
            });
            var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } });
            constructor.prototype = instancePrototype;
            var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
            var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
            var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
            var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
            registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter };
            replacePublicSymbol(legalFunctionName, constructor);
            return [referenceConverter, pointerConverter, constPointerConverter];
          });
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAP32[(firstElement >> 2) + i]);
          }
          return array;
        }
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
          assert(argCount > 0);
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          invoker = embind__requireFunction(invokerSignature, invoker);
          var args = [rawConstructor];
          var destructors = [];
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = "constructor " + classType.name;
            if (void 0 === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
            }
            if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            }
            classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
              throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
            };
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
                if (arguments.length !== argCount - 1) {
                  throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1));
                }
                destructors.length = 0;
                args.length = argCount;
                for (var i = 1; i < argCount; ++i) {
                  args[i] = argTypes[i]["toWireType"](destructors, arguments[i - 1]);
                }
                var ptr = invoker.apply(null, args);
                runDestructors(destructors);
                return argTypes[0]["fromWireType"](ptr);
              };
              return [];
            });
            return [];
          });
        }
        function new_(constructor, argumentList) {
          if (!(constructor instanceof Function)) {
            throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
          }
          var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
          });
          dummy.prototype = constructor.prototype;
          var obj = new dummy();
          var r = constructor.apply(obj, argumentList);
          return r instanceof Object ? r : obj;
        }
        function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var argsList = "";
          var argsListWired = "";
          for (var i = 0; i < argCount - 2; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
            argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
          }
          var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\nif (arguments.length !== " + (argCount - 2) + ") {\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n}\n";
          if (needsDestructorStack) {
            invokerFnBody += "var destructors = [];\n";
          }
          var dtorStack = needsDestructorStack ? "destructors" : "null";
          var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
          var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
          if (isClassMethodFunc) {
            invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
          }
          for (var i = 0; i < argCount - 2; ++i) {
            invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
            args1.push("argType" + i);
            args2.push(argTypes[i + 2]);
          }
          if (isClassMethodFunc) {
            argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
          }
          invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
          if (needsDestructorStack) {
            invokerFnBody += "runDestructors(destructors);\n";
          } else {
            for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
              var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
              if (argTypes[i].destructorFunction !== null) {
                invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
                args1.push(paramName + "_dtor");
                args2.push(argTypes[i].destructorFunction);
              }
            }
          }
          if (returns) {
            invokerFnBody += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
          } else {
          }
          invokerFnBody += "}\n";
          args1.push(invokerFnBody);
          var invokerFunction = new_(Function, args1).apply(null, args2);
          return invokerFunction;
        }
        function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          methodName = readLatin1String(methodName);
          rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = classType.name + "." + methodName;
            if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
            }
            function unboundTypesHandler() {
              throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
            }
            var proto = classType.registeredClass.instancePrototype;
            var method = proto[methodName];
            if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
            } else {
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
            }
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
              if (void 0 === proto[methodName].overloadTable) {
                memberFunction.argCount = argCount - 2;
                proto[methodName] = memberFunction;
              } else {
                proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
              return [];
            });
            return [];
          });
        }
        function validateThis(this_, classType, humanName) {
          if (!(this_ instanceof Object)) {
            throwBindingError(humanName + ' with invalid "this": ' + this_);
          }
          if (!(this_ instanceof classType.registeredClass.constructor)) {
            throwBindingError(humanName + ' incompatible with "this" of type ' + this_.constructor.name);
          }
          if (!this_.$$.ptr) {
            throwBindingError("cannot call emscripten binding method " + humanName + " on deleted object");
          }
          return upcastPointer(this_.$$.ptr, this_.$$.ptrType.registeredClass, classType.registeredClass);
        }
        function __embind_register_class_property(classType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
          fieldName = readLatin1String(fieldName);
          getter = embind__requireFunction(getterSignature, getter);
          whenDependentTypesAreResolved([], [classType], function(classType2) {
            classType2 = classType2[0];
            var humanName = classType2.name + "." + fieldName;
            var desc = { get: function() {
              throwUnboundTypeError("Cannot access " + humanName + " due to unbound types", [getterReturnType, setterArgumentType]);
            }, enumerable: true, configurable: true };
            if (setter) {
              desc.set = function() {
                throwUnboundTypeError("Cannot access " + humanName + " due to unbound types", [getterReturnType, setterArgumentType]);
              };
            } else {
              desc.set = function(v) {
                throwBindingError(humanName + " is a read-only property");
              };
            }
            Object.defineProperty(classType2.registeredClass.instancePrototype, fieldName, desc);
            whenDependentTypesAreResolved([], setter ? [getterReturnType, setterArgumentType] : [getterReturnType], function(types) {
              var getterReturnType2 = types[0];
              var desc2 = { get: function() {
                var ptr = validateThis(this, classType2, humanName + " getter");
                return getterReturnType2["fromWireType"](getter(getterContext, ptr));
              }, enumerable: true };
              if (setter) {
                setter = embind__requireFunction(setterSignature, setter);
                var setterArgumentType2 = types[1];
                desc2.set = function(v) {
                  var ptr = validateThis(this, classType2, humanName + " setter");
                  var destructors = [];
                  setter(setterContext, ptr, setterArgumentType2["toWireType"](destructors, v));
                  runDestructors(destructors);
                };
              }
              Object.defineProperty(classType2.registeredClass.instancePrototype, fieldName, desc2);
              return [];
            });
            return [];
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module["count_emval_handles"] = count_emval_handles;
          Module["get_first_emval"] = get_first_emval;
        }
        function __emval_register(value) {
          switch (value) {
            case void 0: {
              return 1;
            }
            case null: {
              return 2;
            }
            case true: {
              return 3;
            }
            case false: {
              return 4;
            }
            default: {
              var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
              emval_handle_array[handle] = { refcount: 1, value };
              return handle;
            }
          }
        }
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(handle) {
            var rv = emval_handle_array[handle].value;
            __emval_decref(handle);
            return rv;
          }, "toWireType": function(destructors, value) {
            return __emval_register(value);
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: null });
        }
        function _embind_repr(v) {
          if (v === null) {
            return "null";
          }
          var t = typeof v;
          if (t === "object" || t === "array" || t === "function") {
            return v.toString();
          } else {
            return "" + v;
          }
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function(pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function(pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(value) {
            return value;
          }, "toWireType": function(destructors, value) {
            if (typeof value !== "number" && typeof value !== "boolean") {
              throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
            }
            return value;
          }, "argPackAdvance": 8, "readValueFromPointer": floatReadValueFromPointer(name, shift), destructorFunction: null });
        }
        function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(name, function() {
            throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes);
          }, argCount - 1);
          whenDependentTypesAreResolved([], argTypes, function(argTypes2) {
            var invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
            replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed ? function readS8FromPointer(pointer) {
                return HEAP8[pointer];
              } : function readU8FromPointer(pointer) {
                return HEAPU8[pointer];
              };
            case 1:
              return signed ? function readS16FromPointer(pointer) {
                return HEAP16[pointer >> 1];
              } : function readU16FromPointer(pointer) {
                return HEAPU16[pointer >> 1];
              };
            case 2:
              return signed ? function readS32FromPointer(pointer) {
                return HEAP32[pointer >> 2];
              } : function readU32FromPointer(pointer) {
                return HEAPU32[pointer >> 2];
              };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = function(value) {
            return value;
          };
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = function(value) {
              return value << bitshift >>> bitshift;
            };
          }
          var isUnsignedType = name.indexOf("unsigned") != -1;
          registerType(primitiveType, { name, "fromWireType": fromWireType, "toWireType": function(destructors, value) {
            if (typeof value !== "number" && typeof value !== "boolean") {
              throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
            }
            if (value < minRange || value > maxRange) {
              throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
            }
            return isUnsignedType ? value >>> 0 : value | 0;
          }, "argPackAdvance": 8, "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0), destructorFunction: null });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap = HEAPU32;
            var size = heap[handle];
            var data = heap[handle + 1];
            return new TA(buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": decodeMemoryView, "argPackAdvance": 8, "readValueFromPointer": decodeMemoryView }, { ignoreDuplicateRegistrations: true });
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var str;
            if (stdStringIsUTF8) {
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i;
                if (HEAPU8[currentBytePtr] == 0 || i == length) {
                  var maxRead = currentBytePtr - decodeStartPtr;
                  var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + 1;
                }
              }
            } else {
              var a = new Array(length);
              for (var i = 0; i < length; ++i) {
                a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
              }
              str = a.join("");
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (value instanceof ArrayBuffer) {
              value = new Uint8Array(value);
            }
            var getLength;
            var valueIsOfTypeString = typeof value === "string";
            if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
              throwBindingError("Cannot pass non-string to std::string");
            }
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              getLength = function() {
                return lengthBytesUTF8(value);
              };
            } else {
              getLength = function() {
                return value.length;
              };
            }
            var length = getLength();
            var ptr = _malloc(4 + length + 1);
            HEAPU32[ptr >> 2] = length;
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              stringToUTF8(value, ptr + 4, length + 1);
            } else {
              if (valueIsOfTypeString) {
                for (var i = 0; i < length; ++i) {
                  var charCode = value.charCodeAt(i);
                  if (charCode > 255) {
                    _free(ptr);
                    throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                  }
                  HEAPU8[ptr + 4 + i] = charCode;
                }
              } else {
                for (var i = 0; i < length; ++i) {
                  HEAPU8[ptr + 4 + i] = value[i];
                }
              }
            }
            if (destructors !== null) {
              destructors.push(_free, ptr);
            }
            return ptr;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = function() {
              return HEAPU16;
            };
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = function() {
              return HEAPU32;
            };
            shift = 2;
          }
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var HEAP = getHeap();
            var str;
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i * charSize;
              if (HEAP[currentBytePtr >> shift] == 0 || i == length) {
                var maxReadBytes = currentBytePtr - decodeStartPtr;
                var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + charSize;
              }
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (!(typeof value === "string")) {
              throwBindingError("Cannot pass non-string to C++ string type " + name);
            }
            var length = lengthBytesUTF(value);
            var ptr = _malloc(4 + length + charSize);
            HEAPU32[ptr >> 2] = length >> shift;
            encodeString(value, ptr + 4, length + charSize);
            if (destructors !== null) {
              destructors.push(_free, ptr);
            }
            return ptr;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { isVoid: true, name, "argPackAdvance": 0, "fromWireType": function() {
            return void 0;
          }, "toWireType": function(destructors, o) {
            return void 0;
          } });
        }
        function requireHandle(handle) {
          if (!handle) {
            throwBindingError("Cannot use deleted val. handle = " + handle);
          }
          return emval_handle_array[handle].value;
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
          }
          return impl;
        }
        function __emval_as(handle, returnType, destructorsRef) {
          handle = requireHandle(handle);
          returnType = requireRegisteredType(returnType, "emval::as");
          var destructors = [];
          var rd = __emval_register(destructors);
          HEAP32[destructorsRef >> 2] = rd;
          return returnType["toWireType"](destructors, handle);
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          } else {
            return symbol;
          }
        }
        var emval_methodCallers = [];
        function __emval_call_void_method(caller, handle, methodName, args) {
          caller = emval_methodCallers[caller];
          handle = requireHandle(handle);
          methodName = getStringOrSymbol(methodName);
          caller(handle, methodName, null, args);
        }
        function emval_get_global() {
          if (typeof globalThis === "object") {
            return globalThis;
          }
          return (/* @__PURE__ */ (function() {
            return Function;
          })())("return this")();
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return __emval_register(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return __emval_register(emval_get_global()[name]);
          }
        }
        function __emval_addMethodCaller(caller) {
          var id = emval_methodCallers.length;
          emval_methodCallers.push(caller);
          return id;
        }
        function __emval_lookupTypes(argCount, argTypes) {
          var a = new Array(argCount);
          for (var i = 0; i < argCount; ++i) {
            a[i] = requireRegisteredType(HEAP32[(argTypes >> 2) + i], "parameter " + i);
          }
          return a;
        }
        function __emval_get_method_caller(argCount, argTypes) {
          var types = __emval_lookupTypes(argCount, argTypes);
          var retType = types[0];
          var signatureName = retType.name + "_$" + types.slice(1).map(function(t) {
            return t.name;
          }).join("_") + "$";
          var params = ["retType"];
          var args = [retType];
          var argsList = "";
          for (var i = 0; i < argCount - 1; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
            params.push("argType" + i);
            args.push(types[1 + i]);
          }
          var functionName = makeLegalFunctionName("methodCaller_" + signatureName);
          var functionBody = "return function " + functionName + "(handle, name, destructors, args) {\n";
          var offset = 0;
          for (var i = 0; i < argCount - 1; ++i) {
            functionBody += "    var arg" + i + " = argType" + i + ".readValueFromPointer(args" + (offset ? "+" + offset : "") + ");\n";
            offset += types[i + 1]["argPackAdvance"];
          }
          functionBody += "    var rv = handle[name](" + argsList + ");\n";
          for (var i = 0; i < argCount - 1; ++i) {
            if (types[i + 1]["deleteObject"]) {
              functionBody += "    argType" + i + ".deleteObject(arg" + i + ");\n";
            }
          }
          if (!retType.isVoid) {
            functionBody += "    return retType.toWireType(destructors, rv);\n";
          }
          functionBody += "};\n";
          params.push(functionBody);
          var invokerFunction = new_(Function, params).apply(null, args);
          return __emval_addMethodCaller(invokerFunction);
        }
        function __emval_get_module_property(name) {
          name = getStringOrSymbol(name);
          return __emval_register(Module[name]);
        }
        function __emval_get_property(handle, key2) {
          handle = requireHandle(handle);
          key2 = requireHandle(key2);
          return __emval_register(handle[key2]);
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function craftEmvalAllocator(argCount) {
          var argsList = "";
          for (var i = 0; i < argCount; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
          }
          var functionBody = "return function emval_allocator_" + argCount + "(constructor, argTypes, args) {\n";
          for (var i = 0; i < argCount; ++i) {
            functionBody += "var argType" + i + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + i + '], "parameter ' + i + '");\nvar arg' + i + " = argType" + i + ".readValueFromPointer(args);\nargs += argType" + i + "['argPackAdvance'];\n";
          }
          functionBody += "var obj = new constructor(" + argsList + ");\nreturn __emval_register(obj);\n}\n";
          return new Function("requireRegisteredType", "Module", "__emval_register", functionBody)(requireRegisteredType, Module, __emval_register);
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = requireHandle(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function __emval_new_cstring(v) {
          return __emval_register(getStringOrSymbol(v));
        }
        function __emval_new_object() {
          return __emval_register({});
        }
        function __emval_run_destructors(handle) {
          var destructors = emval_handle_array[handle].value;
          runDestructors(destructors);
          __emval_decref(handle);
        }
        function __emval_set_property(handle, key2, value) {
          handle = requireHandle(handle);
          key2 = requireHandle(key2);
          value = requireHandle(value);
          handle[key2] = value;
        }
        function __emval_take_value(type, argv) {
          type = requireRegisteredType(type, "_emval_take_value");
          var v = type["readValueFromPointer"](argv);
          return __emval_register(v);
        }
        function _abort() {
          abort();
        }
        function _clock() {
          if (_clock.start === void 0) _clock.start = Date.now();
          return (Date.now() - _clock.start) * (1e6 / 1e3) | 0;
        }
        function _emscripten_get_sbrk_ptr() {
          return 470912;
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function _emscripten_get_heap_size() {
          return HEAPU8.length;
        }
        var _emscripten_get_now;
        _emscripten_get_now = function() {
          return performance.now();
        };
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
            console.error("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          requestedSize = requestedSize >>> 0;
          var oldSize = _emscripten_get_heap_size();
          assert(requestedSize > oldSize);
          var PAGE_MULTIPLE = 65536;
          var maxHeapSize = 2147483648;
          if (requestedSize > maxHeapSize) {
            err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
            return false;
          }
          var minHeapSize = 16777216;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
            var t0 = _emscripten_get_now();
            var replacement = emscripten_realloc_buffer(newSize);
            var t1 = _emscripten_get_now();
            console.log("Heap resize call from " + oldSize + " to " + newSize + " took " + (t1 - t0) + " msecs. Success: " + !!replacement);
            if (replacement) {
              return true;
            }
          }
          err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
          return false;
        }
        var ENV = {};
        function __getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", "_": __getExecutableName() };
            for (var x in ENV) {
              env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(x + "=" + env[x]);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function _environ_get(__environ, environ_buf) {
          var bufSize = 0;
          getEnvStrings().forEach(function(string, i) {
            var ptr = environ_buf + bufSize;
            HEAP32[__environ + i * 4 >> 2] = ptr;
            writeAsciiToMemory(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          var strings = getEnvStrings();
          HEAP32[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function(string) {
            bufSize += string.length + 1;
          });
          HEAP32[penviron_buf_size >> 2] = bufSize;
          return 0;
        }
        function _exit(status) {
          exit(status);
        }
        function _fd_close(fd) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.close(stream);
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
            return e.errno;
          }
        }
        function _fd_fdstat_get(fd, pbuf) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
            HEAP8[pbuf >> 0] = type;
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
            return e.errno;
          }
        }
        function _fd_read(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = SYSCALLS.doReadv(stream, iov, iovcnt);
            HEAP32[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
            return e.errno;
          }
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var HIGH_OFFSET = 4294967296;
            var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
            var DOUBLE_LIMIT = 9007199254740992;
            if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
              return -61;
            }
            FS.llseek(stream, offset, whence);
            tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
            if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
            return e.errno;
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = SYSCALLS.doWritev(stream, iov, iovcnt);
            HEAP32[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
            return e.errno;
          }
        }
        function _round(d) {
          d = +d;
          return d >= 0 ? +Math_floor(d + 0.5) : +Math_ceil(d - 0.5);
        }
        function _setTempRet0($i) {
          setTempRet0($i | 0);
        }
        function __isLeapYear(year) {
          return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        }
        function __arraySum(array, index) {
          var sum = 0;
          for (var i = 0; i <= index; sum += array[i++]) {
          }
          return sum;
        }
        var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function __addDays(date, days) {
          var newDate = new Date(date.getTime());
          while (days > 0) {
            var leap = __isLeapYear(newDate.getFullYear());
            var currentMonth = newDate.getMonth();
            var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
            if (days > daysInCurrentMonth - newDate.getDate()) {
              days -= daysInCurrentMonth - newDate.getDate() + 1;
              newDate.setDate(1);
              if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1);
              } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1);
              }
            } else {
              newDate.setDate(newDate.getDate() + days);
              return newDate;
            }
          }
          return newDate;
        }
        function _strftime(s, maxsize, format, tm) {
          var tm_zone = HEAP32[tm + 40 >> 2];
          var date = { tm_sec: HEAP32[tm >> 2], tm_min: HEAP32[tm + 4 >> 2], tm_hour: HEAP32[tm + 8 >> 2], tm_mday: HEAP32[tm + 12 >> 2], tm_mon: HEAP32[tm + 16 >> 2], tm_year: HEAP32[tm + 20 >> 2], tm_wday: HEAP32[tm + 24 >> 2], tm_yday: HEAP32[tm + 28 >> 2], tm_isdst: HEAP32[tm + 32 >> 2], tm_gmtoff: HEAP32[tm + 36 >> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
          var pattern = UTF8ToString(format);
          var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
          for (var rule in EXPANSION_RULES_1) {
            pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
          }
          var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          function leadingSomething(value, digits, character) {
            var str = typeof value === "number" ? value.toString() : value || "";
            while (str.length < digits) {
              str = character[0] + str;
            }
            return str;
          }
          function leadingNulls(value, digits) {
            return leadingSomething(value, digits, "0");
          }
          function compareByDay(date1, date2) {
            function sgn(value) {
              return value < 0 ? -1 : value > 0 ? 1 : 0;
            }
            var compare;
            if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
              if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate());
              }
            }
            return compare;
          }
          function getFirstWeekStartDate(janFourth) {
            switch (janFourth.getDay()) {
              case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
              case 1:
                return janFourth;
              case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
              case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
              case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
              case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30);
            }
          }
          function getWeekBasedYear(date2) {
            var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
            var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
            var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
            var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
            if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
              if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1;
              } else {
                return thisDate.getFullYear();
              }
            } else {
              return thisDate.getFullYear() - 1;
            }
          }
          var EXPANSION_RULES_2 = { "%a": function(date2) {
            return WEEKDAYS[date2.tm_wday].substring(0, 3);
          }, "%A": function(date2) {
            return WEEKDAYS[date2.tm_wday];
          }, "%b": function(date2) {
            return MONTHS[date2.tm_mon].substring(0, 3);
          }, "%B": function(date2) {
            return MONTHS[date2.tm_mon];
          }, "%C": function(date2) {
            var year = date2.tm_year + 1900;
            return leadingNulls(year / 100 | 0, 2);
          }, "%d": function(date2) {
            return leadingNulls(date2.tm_mday, 2);
          }, "%e": function(date2) {
            return leadingSomething(date2.tm_mday, 2, " ");
          }, "%g": function(date2) {
            return getWeekBasedYear(date2).toString().substring(2);
          }, "%G": function(date2) {
            return getWeekBasedYear(date2);
          }, "%H": function(date2) {
            return leadingNulls(date2.tm_hour, 2);
          }, "%I": function(date2) {
            var twelveHour = date2.tm_hour;
            if (twelveHour == 0) twelveHour = 12;
            else if (twelveHour > 12) twelveHour -= 12;
            return leadingNulls(twelveHour, 2);
          }, "%j": function(date2) {
            return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
          }, "%m": function(date2) {
            return leadingNulls(date2.tm_mon + 1, 2);
          }, "%M": function(date2) {
            return leadingNulls(date2.tm_min, 2);
          }, "%n": function() {
            return "\n";
          }, "%p": function(date2) {
            if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
              return "AM";
            } else {
              return "PM";
            }
          }, "%S": function(date2) {
            return leadingNulls(date2.tm_sec, 2);
          }, "%t": function() {
            return "	";
          }, "%u": function(date2) {
            return date2.tm_wday || 7;
          }, "%U": function(date2) {
            var janFirst = new Date(date2.tm_year + 1900, 0, 1);
            var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
            var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
            if (compareByDay(firstSunday, endDate) < 0) {
              var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
              var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
              var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
              return leadingNulls(Math.ceil(days / 7), 2);
            }
            return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
          }, "%V": function(date2) {
            var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
            var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
            var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
            var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
            if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
              return "53";
            }
            if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
              return "01";
            }
            var daysDifference;
            if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
              daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
            } else {
              daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
            }
            return leadingNulls(Math.ceil(daysDifference / 7), 2);
          }, "%w": function(date2) {
            return date2.tm_wday;
          }, "%W": function(date2) {
            var janFirst = new Date(date2.tm_year, 0, 1);
            var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
            var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
            if (compareByDay(firstMonday, endDate) < 0) {
              var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
              var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
              var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
              return leadingNulls(Math.ceil(days / 7), 2);
            }
            return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
          }, "%y": function(date2) {
            return (date2.tm_year + 1900).toString().substring(2);
          }, "%Y": function(date2) {
            return date2.tm_year + 1900;
          }, "%z": function(date2) {
            var off = date2.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            off = off / 60 * 100 + off % 60;
            return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
          }, "%Z": function(date2) {
            return date2.tm_zone;
          }, "%%": function() {
            return "%";
          } };
          for (var rule in EXPANSION_RULES_2) {
            if (pattern.indexOf(rule) >= 0) {
              pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
            }
          }
          var bytes = intArrayFromString(pattern, false);
          if (bytes.length > maxsize) {
            return 0;
          }
          writeArrayToMemory(bytes, s);
          return bytes.length - 1;
        }
        function _strftime_l(s, maxsize, format, tm) {
          return _strftime(s, maxsize, format, tm);
        }
        function _time(ptr) {
          var ret = Date.now() / 1e3 | 0;
          if (ptr) {
            HEAP32[ptr >> 2] = ret;
          }
          return ret;
        }
        var FSNode = function(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.mounted = null;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.node_ops = {};
          this.stream_ops = {};
          this.rdev = rdev;
        };
        var readMode = 292 | 73;
        var writeMode = 146;
        Object.defineProperties(FSNode.prototype, { read: { get: function() {
          return (this.mode & readMode) === readMode;
        }, set: function(val) {
          val ? this.mode |= readMode : this.mode &= ~readMode;
        } }, write: { get: function() {
          return (this.mode & writeMode) === writeMode;
        }, set: function(val) {
          val ? this.mode |= writeMode : this.mode &= ~writeMode;
        } }, isFolder: { get: function() {
          return FS.isDir(this.mode);
        } }, isDevice: { get: function() {
          return FS.isChrdev(this.mode);
        } } });
        FS.FSNode = FSNode;
        FS.staticInit();
        embind_init_charCodes();
        BindingError = Module["BindingError"] = extendError(Error, "BindingError");
        InternalError = Module["InternalError"] = extendError(Error, "InternalError");
        init_ClassHandle();
        init_RegisteredPointer();
        init_embind();
        UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
        init_emval();
        var ASSERTIONS = true;
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
          if (dontAddNull) u8array.length = numBytesWritten;
          return u8array;
        }
        var asmLibraryArg = { "__assert_fail": ___assert_fail, "__cxa_allocate_exception": ___cxa_allocate_exception, "__cxa_atexit": ___cxa_atexit, "__cxa_throw": ___cxa_throw, "__handle_stack_overflow": ___handle_stack_overflow, "__map_file": ___map_file, "__sys_munmap": ___sys_munmap, "_embind_register_bool": __embind_register_bool, "_embind_register_class": __embind_register_class, "_embind_register_class_constructor": __embind_register_class_constructor, "_embind_register_class_function": __embind_register_class_function, "_embind_register_class_property": __embind_register_class_property, "_embind_register_emval": __embind_register_emval, "_embind_register_float": __embind_register_float, "_embind_register_function": __embind_register_function, "_embind_register_integer": __embind_register_integer, "_embind_register_memory_view": __embind_register_memory_view, "_embind_register_std_string": __embind_register_std_string, "_embind_register_std_wstring": __embind_register_std_wstring, "_embind_register_void": __embind_register_void, "_emval_as": __emval_as, "_emval_call_void_method": __emval_call_void_method, "_emval_decref": __emval_decref, "_emval_get_global": __emval_get_global, "_emval_get_method_caller": __emval_get_method_caller, "_emval_get_module_property": __emval_get_module_property, "_emval_get_property": __emval_get_property, "_emval_incref": __emval_incref, "_emval_new": __emval_new, "_emval_new_cstring": __emval_new_cstring, "_emval_new_object": __emval_new_object, "_emval_run_destructors": __emval_run_destructors, "_emval_set_property": __emval_set_property, "_emval_take_value": __emval_take_value, "abort": _abort, "clock": _clock, "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "environ_get": _environ_get, "environ_sizes_get": _environ_sizes_get, "exit": _exit, "fd_close": _fd_close, "fd_fdstat_get": _fd_fdstat_get, "fd_read": _fd_read, "fd_seek": _fd_seek, "fd_write": _fd_write, "memory": wasmMemory, "round": _round, "setTempRet0": _setTempRet0, "strftime_l": _strftime_l, "table": wasmTable, "time": _time };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");
        var _malloc = Module["_malloc"] = createExportWrapper("malloc");
        var _free = Module["_free"] = createExportWrapper("free");
        var _fflush = Module["_fflush"] = createExportWrapper("fflush");
        var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");
        var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");
        var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");
        var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");
        var stackSave = Module["stackSave"] = createExportWrapper("stackSave");
        var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");
        var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");
        var __ZSt18uncaught_exceptionv = Module["__ZSt18uncaught_exceptionv"] = createExportWrapper("_ZSt18uncaught_exceptionv");
        var ___set_stack_limit = Module["___set_stack_limit"] = createExportWrapper("__set_stack_limit");
        var __growWasmMemory = Module["__growWasmMemory"] = createExportWrapper("__growWasmMemory");
        var dynCall_ii = Module["dynCall_ii"] = createExportWrapper("dynCall_ii");
        var dynCall_vi = Module["dynCall_vi"] = createExportWrapper("dynCall_vi");
        var dynCall_iii = Module["dynCall_iii"] = createExportWrapper("dynCall_iii");
        var dynCall_viii = Module["dynCall_viii"] = createExportWrapper("dynCall_viii");
        var dynCall_viiiii = Module["dynCall_viiiii"] = createExportWrapper("dynCall_viiiii");
        var dynCall_viiii = Module["dynCall_viiii"] = createExportWrapper("dynCall_viiii");
        var dynCall_viiiiffi = Module["dynCall_viiiiffi"] = createExportWrapper("dynCall_viiiiffi");
        var dynCall_viiiffif = Module["dynCall_viiiffif"] = createExportWrapper("dynCall_viiiffif");
        var dynCall_viiiifi = Module["dynCall_viiiifi"] = createExportWrapper("dynCall_viiiifi");
        var dynCall_viiifii = Module["dynCall_viiifii"] = createExportWrapper("dynCall_viiifii");
        var dynCall_viiiifiiifiiifii = Module["dynCall_viiiifiiifiiifii"] = createExportWrapper("dynCall_viiiifiiifiiifii");
        var dynCall_viifii = Module["dynCall_viifii"] = createExportWrapper("dynCall_viifii");
        var dynCall_viiifff = Module["dynCall_viiifff"] = createExportWrapper("dynCall_viiifff");
        var dynCall_viiiif = Module["dynCall_viiiif"] = createExportWrapper("dynCall_viiiif");
        var dynCall_viiiffiif = Module["dynCall_viiiffiif"] = createExportWrapper("dynCall_viiiffiif");
        var dynCall_viiif = Module["dynCall_viiif"] = createExportWrapper("dynCall_viiif");
        var dynCall_viiiiff = Module["dynCall_viiiiff"] = createExportWrapper("dynCall_viiiiff");
        var dynCall_viiiiiif = Module["dynCall_viiiiiif"] = createExportWrapper("dynCall_viiiiiif");
        var dynCall_viiiifiiiiii = Module["dynCall_viiiifiiiiii"] = createExportWrapper("dynCall_viiiifiiiiii");
        var dynCall_viiiifiiifffii = Module["dynCall_viiiifiiifffii"] = createExportWrapper("dynCall_viiiifiiifffii");
        var dynCall_viiifiiiifi = Module["dynCall_viiifiiiifi"] = createExportWrapper("dynCall_viiifiiiifi");
        var dynCall_viiiff = Module["dynCall_viiiff"] = createExportWrapper("dynCall_viiiff");
        var dynCall_viiiiii = Module["dynCall_viiiiii"] = createExportWrapper("dynCall_viiiiii");
        var dynCall_viiiiifii = Module["dynCall_viiiiifii"] = createExportWrapper("dynCall_viiiiifii");
        var dynCall_viifififii = Module["dynCall_viifififii"] = createExportWrapper("dynCall_viifififii");
        var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = createExportWrapper("dynCall_viiiiiii");
        var dynCall_viiiffff = Module["dynCall_viiiffff"] = createExportWrapper("dynCall_viiiffff");
        var dynCall_viiiffiiiiii = Module["dynCall_viiiffiiiiii"] = createExportWrapper("dynCall_viiiffiiiiii");
        var dynCall_viiifififif = Module["dynCall_viiifififif"] = createExportWrapper("dynCall_viiifififif");
        var dynCall_viiiifff = Module["dynCall_viiiifff"] = createExportWrapper("dynCall_viiiifff");
        var dynCall_viiiiiiif = Module["dynCall_viiiiiiif"] = createExportWrapper("dynCall_viiiiiiif");
        var dynCall_viiiifiifiiffi = Module["dynCall_viiiifiifiiffi"] = createExportWrapper("dynCall_viiiifiifiiffi");
        var dynCall_viiifiiiffffffff = Module["dynCall_viiifiiiffffffff"] = createExportWrapper("dynCall_viiifiiiffffffff");
        var dynCall_viiifi = Module["dynCall_viiifi"] = createExportWrapper("dynCall_viiifi");
        var dynCall_viiiiifififiiffiif = Module["dynCall_viiiiifififiiffiif"] = createExportWrapper("dynCall_viiiiifififiiffiif");
        var dynCall_viiiifif = Module["dynCall_viiiifif"] = createExportWrapper("dynCall_viiiifif");
        var dynCall_viiiffii = Module["dynCall_viiiffii"] = createExportWrapper("dynCall_viiiffii");
        var dynCall_viiifiiffiffiifiiff = Module["dynCall_viiifiiffiffiifiiff"] = createExportWrapper("dynCall_viiifiiffiffiifiiff");
        var dynCall_viiiiiifiii = Module["dynCall_viiiiiifiii"] = createExportWrapper("dynCall_viiiiiifiii");
        var dynCall_viiiiiiififfifffii = Module["dynCall_viiiiiiififfifffii"] = createExportWrapper("dynCall_viiiiiiififfifffii");
        var dynCall_viiififf = Module["dynCall_viiififf"] = createExportWrapper("dynCall_viiififf");
        var dynCall_viiiiif = Module["dynCall_viiiiif"] = createExportWrapper("dynCall_viiiiif");
        var dynCall_viiiifiiifiiiffiii = Module["dynCall_viiiifiiifiiiffiii"] = createExportWrapper("dynCall_viiiifiiifiiiffiii");
        var dynCall_viiifiifiifiii = Module["dynCall_viiifiifiifiii"] = createExportWrapper("dynCall_viiifiifiifiii");
        var dynCall_viiififififfiff = Module["dynCall_viiififififfiff"] = createExportWrapper("dynCall_viiififififfiff");
        var dynCall_viiifiiifififififffffi = Module["dynCall_viiifiiifififififffffi"] = createExportWrapper("dynCall_viiifiiifififififffffi");
        var dynCall_viiiiiiifffii = Module["dynCall_viiiiiiifffii"] = createExportWrapper("dynCall_viiiiiiifffii");
        var dynCall_viiifiii = Module["dynCall_viiifiii"] = createExportWrapper("dynCall_viiifiii");
        var dynCall_viiiiffff = Module["dynCall_viiiiffff"] = createExportWrapper("dynCall_viiiiffff");
        var dynCall_viiiiifffiff = Module["dynCall_viiiiifffiff"] = createExportWrapper("dynCall_viiiiifffiff");
        var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiii");
        var dynCall_viiiiifiiii = Module["dynCall_viiiiifiiii"] = createExportWrapper("dynCall_viiiiifiiii");
        var dynCall_viiiififfffff = Module["dynCall_viiiififfffff"] = createExportWrapper("dynCall_viiiififfffff");
        var dynCall_viiiiiffiiiffffif = Module["dynCall_viiiiiffiiiffffif"] = createExportWrapper("dynCall_viiiiiffiiiffffif");
        var dynCall_viiiiiffiiiffff = Module["dynCall_viiiiiffiiiffff"] = createExportWrapper("dynCall_viiiiiffiiiffff");
        var dynCall_viiiiffffif = Module["dynCall_viiiiffffif"] = createExportWrapper("dynCall_viiiiffffif");
        var dynCall_viiiiiffff = Module["dynCall_viiiiiffff"] = createExportWrapper("dynCall_viiiiiffff");
        var dynCall_viiiiifiif = Module["dynCall_viiiiifiif"] = createExportWrapper("dynCall_viiiiifiif");
        var dynCall_viiiififf = Module["dynCall_viiiififf"] = createExportWrapper("dynCall_viiiififf");
        var dynCall_viiifiiifififififffffiif = Module["dynCall_viiifiiifififififffffiif"] = createExportWrapper("dynCall_viiifiiifififififffffiif");
        var dynCall_viiiffi = Module["dynCall_viiiffi"] = createExportWrapper("dynCall_viiiffi");
        var dynCall_viiiiiifiiififii = Module["dynCall_viiiiiifiiififii"] = createExportWrapper("dynCall_viiiiiifiiififii");
        var dynCall_viiifffiffi = Module["dynCall_viiifffiffi"] = createExportWrapper("dynCall_viiifffiffi");
        var dynCall_viiiffiiff = Module["dynCall_viiiffiiff"] = createExportWrapper("dynCall_viiiffiiff");
        var dynCall_viiiiiiiif = Module["dynCall_viiiiiiiif"] = createExportWrapper("dynCall_viiiiiiiif");
        var dynCall_viiiifii = Module["dynCall_viiiifii"] = createExportWrapper("dynCall_viiiifii");
        var dynCall_viiiifffiff = Module["dynCall_viiiifffiff"] = createExportWrapper("dynCall_viiiifffiff");
        var dynCall_viiiffifif = Module["dynCall_viiiffifif"] = createExportWrapper("dynCall_viiiffifif");
        var dynCall_viiiiiff = Module["dynCall_viiiiiff"] = createExportWrapper("dynCall_viiiiiff");
        var dynCall_viiiifiifffii = Module["dynCall_viiiifiifffii"] = createExportWrapper("dynCall_viiiifiifffii");
        var dynCall_viiiifiififi = Module["dynCall_viiiifiififi"] = createExportWrapper("dynCall_viiiifiififi");
        var dynCall_viifffiii = Module["dynCall_viifffiii"] = createExportWrapper("dynCall_viifffiii");
        var dynCall_viiiiififfiifif = Module["dynCall_viiiiififfiifif"] = createExportWrapper("dynCall_viiiiififfiifif");
        var dynCall_viiiiififfiififf = Module["dynCall_viiiiififfiififf"] = createExportWrapper("dynCall_viiiiififfiififf");
        var dynCall_viiiiiiiiff = Module["dynCall_viiiiiiiiff"] = createExportWrapper("dynCall_viiiiiiiiff");
        var dynCall_viiiiifffi = Module["dynCall_viiiiifffi"] = createExportWrapper("dynCall_viiiiifffi");
        var dynCall_viiifiifff = Module["dynCall_viiifiifff"] = createExportWrapper("dynCall_viiifiifff");
        var dynCall_viiiffffff = Module["dynCall_viiiffffff"] = createExportWrapper("dynCall_viiiffffff");
        var dynCall_viiiiiiiifi = Module["dynCall_viiiiiiiifi"] = createExportWrapper("dynCall_viiiiiiiifi");
        var dynCall_viiifififfffiiff = Module["dynCall_viiifififfffiiff"] = createExportWrapper("dynCall_viiifififfffiiff");
        var dynCall_viiiiiiifii = Module["dynCall_viiiiiiifii"] = createExportWrapper("dynCall_viiiiiiifii");
        var dynCall_viiifiifiifii = Module["dynCall_viiifiifiifii"] = createExportWrapper("dynCall_viiifiifiifii");
        var dynCall_viiiiiiiffi = Module["dynCall_viiiiiiiffi"] = createExportWrapper("dynCall_viiiiiiiffi");
        var dynCall_viiifffff = Module["dynCall_viiifffff"] = createExportWrapper("dynCall_viiifffff");
        var dynCall_viiiiiifii = Module["dynCall_viiiiiifii"] = createExportWrapper("dynCall_viiiiiifii");
        var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = createExportWrapper("dynCall_viiiiiiii");
        var dynCall_vii = Module["dynCall_vii"] = createExportWrapper("dynCall_vii");
        var dynCall_iiiiii = Module["dynCall_iiiiii"] = createExportWrapper("dynCall_iiiiii");
        var dynCall_iiiii = Module["dynCall_iiiii"] = createExportWrapper("dynCall_iiiii");
        var dynCall_iiiiiffi = Module["dynCall_iiiiiffi"] = createExportWrapper("dynCall_iiiiiffi");
        var dynCall_iiii = Module["dynCall_iiii"] = createExportWrapper("dynCall_iiii");
        var dynCall_iiiiffif = Module["dynCall_iiiiffif"] = createExportWrapper("dynCall_iiiiffif");
        var dynCall_iiiiifi = Module["dynCall_iiiiifi"] = createExportWrapper("dynCall_iiiiifi");
        var dynCall_iiiifii = Module["dynCall_iiiifii"] = createExportWrapper("dynCall_iiiifii");
        var dynCall_iiiiifiiifiiifii = Module["dynCall_iiiiifiiifiiifii"] = createExportWrapper("dynCall_iiiiifiiifiiifii");
        var dynCall_iiifii = Module["dynCall_iiifii"] = createExportWrapper("dynCall_iiifii");
        var dynCall_iiiifff = Module["dynCall_iiiifff"] = createExportWrapper("dynCall_iiiifff");
        var dynCall_iiiiif = Module["dynCall_iiiiif"] = createExportWrapper("dynCall_iiiiif");
        var dynCall_iiiiffiif = Module["dynCall_iiiiffiif"] = createExportWrapper("dynCall_iiiiffiif");
        var dynCall_iiiif = Module["dynCall_iiiif"] = createExportWrapper("dynCall_iiiif");
        var dynCall_iiiiiff = Module["dynCall_iiiiiff"] = createExportWrapper("dynCall_iiiiiff");
        var dynCall_iiiiiiif = Module["dynCall_iiiiiiif"] = createExportWrapper("dynCall_iiiiiiif");
        var dynCall_iiiiifiiiiii = Module["dynCall_iiiiifiiiiii"] = createExportWrapper("dynCall_iiiiifiiiiii");
        var dynCall_iiiiifiiifffii = Module["dynCall_iiiiifiiifffii"] = createExportWrapper("dynCall_iiiiifiiifffii");
        var dynCall_iiiifiiiifi = Module["dynCall_iiiifiiiifi"] = createExportWrapper("dynCall_iiiifiiiifi");
        var dynCall_iiiiff = Module["dynCall_iiiiff"] = createExportWrapper("dynCall_iiiiff");
        var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = createExportWrapper("dynCall_iiiiiii");
        var dynCall_iiiiiifii = Module["dynCall_iiiiiifii"] = createExportWrapper("dynCall_iiiiiifii");
        var dynCall_iiifififii = Module["dynCall_iiifififii"] = createExportWrapper("dynCall_iiifififii");
        var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = createExportWrapper("dynCall_iiiiiiii");
        var dynCall_iiiiffff = Module["dynCall_iiiiffff"] = createExportWrapper("dynCall_iiiiffff");
        var dynCall_iiiiffiiiiii = Module["dynCall_iiiiffiiiiii"] = createExportWrapper("dynCall_iiiiffiiiiii");
        var dynCall_iiiifififif = Module["dynCall_iiiifififif"] = createExportWrapper("dynCall_iiiifififif");
        var dynCall_iiiiifff = Module["dynCall_iiiiifff"] = createExportWrapper("dynCall_iiiiifff");
        var dynCall_iiiiiiiif = Module["dynCall_iiiiiiiif"] = createExportWrapper("dynCall_iiiiiiiif");
        var dynCall_iiiiifiifiiffi = Module["dynCall_iiiiifiifiiffi"] = createExportWrapper("dynCall_iiiiifiifiiffi");
        var dynCall_iiiifiiiffffffff = Module["dynCall_iiiifiiiffffffff"] = createExportWrapper("dynCall_iiiifiiiffffffff");
        var dynCall_iiiifi = Module["dynCall_iiiifi"] = createExportWrapper("dynCall_iiiifi");
        var dynCall_iiiiiifififiiffiif = Module["dynCall_iiiiiifififiiffiif"] = createExportWrapper("dynCall_iiiiiifififiiffiif");
        var dynCall_iiiiifif = Module["dynCall_iiiiifif"] = createExportWrapper("dynCall_iiiiifif");
        var dynCall_iiiiffii = Module["dynCall_iiiiffii"] = createExportWrapper("dynCall_iiiiffii");
        var dynCall_iiiifiiffiffiifiiff = Module["dynCall_iiiifiiffiffiifiiff"] = createExportWrapper("dynCall_iiiifiiffiffiifiiff");
        var dynCall_iiiiiiifiii = Module["dynCall_iiiiiiifiii"] = createExportWrapper("dynCall_iiiiiiifiii");
        var dynCall_iiiiiiiififfifffii = Module["dynCall_iiiiiiiififfifffii"] = createExportWrapper("dynCall_iiiiiiiififfifffii");
        var dynCall_iiiififf = Module["dynCall_iiiififf"] = createExportWrapper("dynCall_iiiififf");
        var dynCall_iiiiiif = Module["dynCall_iiiiiif"] = createExportWrapper("dynCall_iiiiiif");
        var dynCall_iiiiifiiifiiiffiii = Module["dynCall_iiiiifiiifiiiffiii"] = createExportWrapper("dynCall_iiiiifiiifiiiffiii");
        var dynCall_iiiifiifiifiii = Module["dynCall_iiiifiifiifiii"] = createExportWrapper("dynCall_iiiifiifiifiii");
        var dynCall_iiiififififfiff = Module["dynCall_iiiififififfiff"] = createExportWrapper("dynCall_iiiififififfiff");
        var dynCall_iiiifiiifififififffffi = Module["dynCall_iiiifiiifififififffffi"] = createExportWrapper("dynCall_iiiifiiifififififffffi");
        var dynCall_iiiiiiiifffii = Module["dynCall_iiiiiiiifffii"] = createExportWrapper("dynCall_iiiiiiiifffii");
        var dynCall_iiiifiii = Module["dynCall_iiiifiii"] = createExportWrapper("dynCall_iiiifiii");
        var dynCall_iiiiiffff = Module["dynCall_iiiiiffff"] = createExportWrapper("dynCall_iiiiiffff");
        var dynCall_iiiiiifffiff = Module["dynCall_iiiiiifffiff"] = createExportWrapper("dynCall_iiiiiifffiff");
        var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiii");
        var dynCall_iiiiiifiiii = Module["dynCall_iiiiiifiiii"] = createExportWrapper("dynCall_iiiiiifiiii");
        var dynCall_iiiiififfffff = Module["dynCall_iiiiififfffff"] = createExportWrapper("dynCall_iiiiififfffff");
        var dynCall_iiiiiiffiiiffffif = Module["dynCall_iiiiiiffiiiffffif"] = createExportWrapper("dynCall_iiiiiiffiiiffffif");
        var dynCall_iiiiiiffiiiffff = Module["dynCall_iiiiiiffiiiffff"] = createExportWrapper("dynCall_iiiiiiffiiiffff");
        var dynCall_iiiiiffffif = Module["dynCall_iiiiiffffif"] = createExportWrapper("dynCall_iiiiiffffif");
        var dynCall_iiiiiiffff = Module["dynCall_iiiiiiffff"] = createExportWrapper("dynCall_iiiiiiffff");
        var dynCall_iiiiiifiif = Module["dynCall_iiiiiifiif"] = createExportWrapper("dynCall_iiiiiifiif");
        var dynCall_iiiiififf = Module["dynCall_iiiiififf"] = createExportWrapper("dynCall_iiiiififf");
        var dynCall_iiiifiiifififififffffiif = Module["dynCall_iiiifiiifififififffffiif"] = createExportWrapper("dynCall_iiiifiiifififififffffiif");
        var dynCall_iiiiffi = Module["dynCall_iiiiffi"] = createExportWrapper("dynCall_iiiiffi");
        var dynCall_iiiiiiifiiififii = Module["dynCall_iiiiiiifiiififii"] = createExportWrapper("dynCall_iiiiiiifiiififii");
        var dynCall_iiiifffiffi = Module["dynCall_iiiifffiffi"] = createExportWrapper("dynCall_iiiifffiffi");
        var dynCall_iiiiffiiff = Module["dynCall_iiiiffiiff"] = createExportWrapper("dynCall_iiiiffiiff");
        var dynCall_iiiiiiiiif = Module["dynCall_iiiiiiiiif"] = createExportWrapper("dynCall_iiiiiiiiif");
        var dynCall_iiiiifii = Module["dynCall_iiiiifii"] = createExportWrapper("dynCall_iiiiifii");
        var dynCall_iiiiifffiff = Module["dynCall_iiiiifffiff"] = createExportWrapper("dynCall_iiiiifffiff");
        var dynCall_iiiiffifif = Module["dynCall_iiiiffifif"] = createExportWrapper("dynCall_iiiiffifif");
        var dynCall_iiiiiiff = Module["dynCall_iiiiiiff"] = createExportWrapper("dynCall_iiiiiiff");
        var dynCall_iiiiifiifffii = Module["dynCall_iiiiifiifffii"] = createExportWrapper("dynCall_iiiiifiifffii");
        var dynCall_iiiiifiififi = Module["dynCall_iiiiifiififi"] = createExportWrapper("dynCall_iiiiifiififi");
        var dynCall_iiifffiii = Module["dynCall_iiifffiii"] = createExportWrapper("dynCall_iiifffiii");
        var dynCall_iiiiiififfiifif = Module["dynCall_iiiiiififfiifif"] = createExportWrapper("dynCall_iiiiiififfiifif");
        var dynCall_iiiiiififfiififf = Module["dynCall_iiiiiififfiififf"] = createExportWrapper("dynCall_iiiiiififfiififf");
        var dynCall_iiiiiiiiiff = Module["dynCall_iiiiiiiiiff"] = createExportWrapper("dynCall_iiiiiiiiiff");
        var dynCall_iiiiiifffi = Module["dynCall_iiiiiifffi"] = createExportWrapper("dynCall_iiiiiifffi");
        var dynCall_iiiifiifff = Module["dynCall_iiiifiifff"] = createExportWrapper("dynCall_iiiifiifff");
        var dynCall_iiiiffffff = Module["dynCall_iiiiffffff"] = createExportWrapper("dynCall_iiiiffffff");
        var dynCall_iiiiiiiiifi = Module["dynCall_iiiiiiiiifi"] = createExportWrapper("dynCall_iiiiiiiiifi");
        var dynCall_iiiifififfffiiff = Module["dynCall_iiiifififfffiiff"] = createExportWrapper("dynCall_iiiifififfffiiff");
        var dynCall_iiiiiiiifii = Module["dynCall_iiiiiiiifii"] = createExportWrapper("dynCall_iiiiiiiifii");
        var dynCall_iiiifiifiifii = Module["dynCall_iiiifiifiifii"] = createExportWrapper("dynCall_iiiifiifiifii");
        var dynCall_iiiiiiiiffi = Module["dynCall_iiiiiiiiffi"] = createExportWrapper("dynCall_iiiiiiiiffi");
        var dynCall_iiiifffff = Module["dynCall_iiiifffff"] = createExportWrapper("dynCall_iiiifffff");
        var dynCall_iiiiiiifii = Module["dynCall_iiiiiiifii"] = createExportWrapper("dynCall_iiiiiiifii");
        var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiii");
        var dynCall_i = Module["dynCall_i"] = createExportWrapper("dynCall_i");
        var dynCall_viif = Module["dynCall_viif"] = createExportWrapper("dynCall_viif");
        var dynCall_viid = Module["dynCall_viid"] = createExportWrapper("dynCall_viid");
        var dynCall_viiid = Module["dynCall_viiid"] = createExportWrapper("dynCall_viiid");
        var dynCall_iiiid = Module["dynCall_iiiid"] = createExportWrapper("dynCall_iiiid");
        var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");
        var dynCall_v = Module["dynCall_v"] = createExportWrapper("dynCall_v");
        var dynCall_ff = Module["dynCall_ff"] = createExportWrapper("dynCall_ff");
        var dynCall_iidiiii = Module["dynCall_iidiiii"] = createExportWrapper("dynCall_iidiiii");
        var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");
        var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");
        var dynCall_iiiiid = Module["dynCall_iiiiid"] = createExportWrapper("dynCall_iiiiid");
        var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");
        var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");
        if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() {
          abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() {
          abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() {
          abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() {
          abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() {
          abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() {
          abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() {
          abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getMemory")) Module["getMemory"] = function() {
          abort("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() {
          abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() {
          abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() {
          abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() {
          abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() {
          abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() {
          abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() {
          abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() {
          abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() {
          abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() {
          abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() {
          abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() {
          abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() {
          abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() {
          abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() {
          abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() {
          abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() {
          abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() {
          abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() {
          abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() {
          abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() {
          abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() {
          abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() {
          abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() {
          abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "dynamicAlloc")) Module["dynamicAlloc"] = function() {
          abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "loadDynamicLibrary")) Module["loadDynamicLibrary"] = function() {
          abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "loadWebAssemblyModule")) Module["loadWebAssemblyModule"] = function() {
          abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() {
          abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() {
          abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() {
          abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() {
          abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() {
          abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() {
          abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() {
          abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() {
          abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() {
          abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() {
          abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() {
          abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() {
          abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() {
          abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() {
          abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() {
          abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() {
          abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() {
          abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() {
          abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() {
          abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() {
          abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() {
          abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() {
          abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() {
          abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() {
          abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() {
          abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() {
          abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() {
          abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() {
          abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() {
          abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() {
          abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() {
          abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() {
          abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() {
          abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "abortStackOverflow")) Module["abortStackOverflow"] = function() {
          abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() {
          abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() {
          abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() {
          abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() {
          abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() {
          abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() {
          abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() {
          abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() {
          abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() {
          abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() {
          abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() {
          abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() {
          abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() {
          abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() {
          abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() {
          abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() {
          abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() {
          abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() {
          abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() {
          abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() {
          abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() {
          abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() {
          abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() {
          abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() {
          abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() {
          abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() {
          abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() {
          abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() {
          abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() {
          abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() {
          abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() {
          abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() {
          abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() {
          abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() {
          abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() {
          abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() {
          abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() {
          abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() {
          abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() {
          abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() {
          abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() {
          abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() {
          abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() {
          abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() {
          abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() {
          abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() {
          abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() {
          abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() {
          abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() {
          abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array")) Module["emval_handle_array"] = function() {
          abort("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list")) Module["emval_free_list"] = function() {
          abort("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols")) Module["emval_symbols"] = function() {
          abort("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "init_emval")) Module["init_emval"] = function() {
          abort("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles")) Module["count_emval_handles"] = function() {
          abort("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval")) Module["get_first_emval"] = function() {
          abort("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol")) Module["getStringOrSymbol"] = function() {
          abort("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "requireHandle")) Module["requireHandle"] = function() {
          abort("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_newers")) Module["emval_newers"] = function() {
          abort("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator")) Module["craftEmvalAllocator"] = function() {
          abort("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global")) Module["emval_get_global"] = function() {
          abort("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers")) Module["emval_methodCallers"] = function() {
          abort("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "InternalError")) Module["InternalError"] = function() {
          abort("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "BindingError")) Module["BindingError"] = function() {
          abort("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError")) Module["UnboundTypeError"] = function() {
          abort("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError")) Module["PureVirtualError"] = function() {
          abort("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "init_embind")) Module["init_embind"] = function() {
          abort("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError")) Module["throwInternalError"] = function() {
          abort("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError")) Module["throwBindingError"] = function() {
          abort("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError")) Module["throwUnboundTypeError"] = function() {
          abort("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable")) Module["ensureOverloadTable"] = function() {
          abort("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol")) Module["exposePublicSymbol"] = function() {
          abort("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol")) Module["replacePublicSymbol"] = function() {
          abort("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "extendError")) Module["extendError"] = function() {
          abort("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction")) Module["createNamedFunction"] = function() {
          abort("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances")) Module["registeredInstances"] = function() {
          abort("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer")) Module["getBasestPointer"] = function() {
          abort("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance")) Module["registerInheritedInstance"] = function() {
          abort("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance")) Module["unregisterInheritedInstance"] = function() {
          abort("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance")) Module["getInheritedInstance"] = function() {
          abort("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount")) Module["getInheritedInstanceCount"] = function() {
          abort("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances")) Module["getLiveInheritedInstances"] = function() {
          abort("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes")) Module["registeredTypes"] = function() {
          abort("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies")) Module["awaitingDependencies"] = function() {
          abort("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies")) Module["typeDependencies"] = function() {
          abort("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers")) Module["registeredPointers"] = function() {
          abort("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "registerType")) Module["registerType"] = function() {
          abort("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved")) Module["whenDependentTypesAreResolved"] = function() {
          abort("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes")) Module["embind_charCodes"] = function() {
          abort("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes")) Module["embind_init_charCodes"] = function() {
          abort("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String")) Module["readLatin1String"] = function() {
          abort("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getTypeName")) Module["getTypeName"] = function() {
          abort("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray")) Module["heap32VectorToArray"] = function() {
          abort("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType")) Module["requireRegisteredType"] = function() {
          abort("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize")) Module["getShiftFromSize"] = function() {
          abort("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer")) Module["integerReadValueFromPointer"] = function() {
          abort("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer")) Module["enumReadValueFromPointer"] = function() {
          abort("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer")) Module["floatReadValueFromPointer"] = function() {
          abort("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer")) Module["simpleReadValueFromPointer"] = function() {
          abort("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "runDestructors")) Module["runDestructors"] = function() {
          abort("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "new_")) Module["new_"] = function() {
          abort("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction")) Module["craftInvokerFunction"] = function() {
          abort("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction")) Module["embind__requireFunction"] = function() {
          abort("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations")) Module["tupleRegistrations"] = function() {
          abort("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations")) Module["structRegistrations"] = function() {
          abort("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType")) Module["genericPointerToWireType"] = function() {
          abort("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType")) Module["constNoSmartPtrRawPointerToWireType"] = function() {
          abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType")) Module["nonConstNoSmartPtrRawPointerToWireType"] = function() {
          abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer")) Module["init_RegisteredPointer"] = function() {
          abort("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer")) Module["RegisteredPointer"] = function() {
          abort("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee")) Module["RegisteredPointer_getPointee"] = function() {
          abort("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor")) Module["RegisteredPointer_destructor"] = function() {
          abort("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject")) Module["RegisteredPointer_deleteObject"] = function() {
          abort("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType")) Module["RegisteredPointer_fromWireType"] = function() {
          abort("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "runDestructor")) Module["runDestructor"] = function() {
          abort("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle")) Module["releaseClassHandle"] = function() {
          abort("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup")) Module["finalizationGroup"] = function() {
          abort("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps")) Module["detachFinalizer_deps"] = function() {
          abort("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer")) Module["detachFinalizer"] = function() {
          abort("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer")) Module["attachFinalizer"] = function() {
          abort("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle")) Module["makeClassHandle"] = function() {
          abort("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle")) Module["init_ClassHandle"] = function() {
          abort("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle")) Module["ClassHandle"] = function() {
          abort("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf")) Module["ClassHandle_isAliasOf"] = function() {
          abort("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted")) Module["throwInstanceAlreadyDeleted"] = function() {
          abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone")) Module["ClassHandle_clone"] = function() {
          abort("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete")) Module["ClassHandle_delete"] = function() {
          abort("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue")) Module["deletionQueue"] = function() {
          abort("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted")) Module["ClassHandle_isDeleted"] = function() {
          abort("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater")) Module["ClassHandle_deleteLater"] = function() {
          abort("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes")) Module["flushPendingDeletes"] = function() {
          abort("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "delayFunction")) Module["delayFunction"] = function() {
          abort("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction")) Module["setDelayFunction"] = function() {
          abort("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass")) Module["RegisteredClass"] = function() {
          abort("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer")) Module["shallowCopyInternalPointer"] = function() {
          abort("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer")) Module["downcastPointer"] = function() {
          abort("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer")) Module["upcastPointer"] = function() {
          abort("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "validateThis")) Module["validateThis"] = function() {
          abort("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "char_0")) Module["char_0"] = function() {
          abort("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "char_9")) Module["char_9"] = function() {
          abort("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName")) Module["makeLegalFunctionName"] = function() {
          abort("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() {
          abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() {
          abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() {
          abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() {
          abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() {
          abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() {
          abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() {
          abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() {
          abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() {
          abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() {
          abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() {
          abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() {
          abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() {
          abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() {
          abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        };
        Module["writeStackCookie"] = writeStackCookie;
        Module["checkStackCookie"] = checkStackCookie;
        if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() {
          abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        } });
        if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() {
          abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        } });
        if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_DYNAMIC")) Object.defineProperty(Module, "ALLOC_DYNAMIC", { configurable: true, get: function() {
          abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        } });
        if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NONE")) Object.defineProperty(Module, "ALLOC_NONE", { configurable: true, get: function() {
          abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        } });
        var calledRun;
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          writeStackCookie();
          preRun();
          if (runDependencies > 0) return;
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            preMain();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
            assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
          checkStackCookie();
        }
        Module["run"] = run;
        function checkUnflushedContent() {
          var print = out;
          var printErr = err;
          var has = false;
          out = err = function(x) {
            has = true;
          };
          try {
            var flush = Module["_fflush"];
            if (flush) flush(0);
            ["stdout", "stderr"].forEach(function(name) {
              var info = FS.analyzePath("/dev/" + name);
              if (!info) return;
              var stream = info.object;
              var rdev = stream.rdev;
              var tty = TTY.ttys[rdev];
              if (tty && tty.output && tty.output.length) {
                has = true;
              }
            });
          } catch (e) {
          }
          out = print;
          err = printErr;
          if (has) {
            warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
          }
        }
        function exit(status, implicit) {
          checkUnflushedContent();
          if (implicit && noExitRuntime && status === 0) {
            return;
          }
          if (noExitRuntime) {
            if (!implicit) {
              var msg = "program exited (with status: " + status + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
              readyPromiseReject(msg);
            }
          } else {
            ABORT = true;
            EXITSTATUS = status;
            exitRuntime();
            if (Module["onExit"]) Module["onExit"](status);
          }
          quit_(status, new ExitStatus(status));
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        noExitRuntime = true;
        run();
        Module["vectorToArray"] = function(vect) {
          if (!vect) {
            throw "Null input";
          }
          if (vect.size() == 0) {
            throw "Empty vector input";
          }
          const typedArray = new Float32Array(vect.size());
          for (var i = 0; i < vect.size(); i++) {
            typedArray[i] = vect.get(i);
          }
          return typedArray;
        };
        return EssentiaWASM2.ready;
      });
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = EssentiaWASM;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return EssentiaWASM;
      });
    else if (typeof exports === "object")
      exports["EssentiaWASM"] = EssentiaWASM;
  }
});

// src/analysis.ts
var SAMPLE_RATE = 44100;
var MAX_ANALYSIS_SECONDS = 90;
var ANALYSIS_WINDOW_SECONDS = 60;
var FRAME_SIZE = 4096;
var HOP_SIZE = 2048;
var PROFILES = ["edma", "temperley", "krumhansl", "bgate"];
var PITCHES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var PITCH_ES = ["Do", "Do\u266F", "Re", "Re\u266F", "Mi", "Fa", "Fa\u266F", "Sol", "Sol\u266F", "La", "La\u266F", "Si"];
var CAMELOT_MAJOR = ["8B", "3B", "10B", "5B", "12B", "7B", "2B", "9B", "4B", "11B", "6B", "1B"];
var CAMELOT_MINOR = ["5A", "12A", "7A", "2A", "9A", "4A", "11A", "6A", "1A", "8A", "3A", "10A"];
var MAJOR_PROFILE = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
var MINOR_PROFILE = [6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];
var FLAT_TO_SHARP = { Db: "C#", Eb: "D#", Gb: "F#", Ab: "G#", Bb: "A#" };
function selectAnalysisWindow(pcm, full = false) {
  const inputSeconds = pcm.length / SAMPLE_RATE;
  if (full || inputSeconds <= MAX_ANALYSIS_SECONDS) {
    return { pcm, inputSeconds, startSeconds: 0, usedFullAudio: full };
  }
  const length = ANALYSIS_WINDOW_SECONDS * SAMPLE_RATE;
  const start = Math.floor((pcm.length - length) / 2);
  return {
    pcm: pcm.subarray(start, start + length),
    inputSeconds,
    startSeconds: start / SAMPLE_RATE,
    usedFullAudio: false,
    notice: "Se analizaron los 60 s centrales. Usa full: true para analizar el audio completo."
  };
}
function dispose(value) {
  if (value && typeof value === "object" && "delete" in value && typeof value.delete === "function") {
    value.delete();
  }
}
function scalar(essentia, value) {
  if (value && typeof value === "object" && "size" in value && typeof value.size === "function") {
    return essentia.module.vectorToArray(value)[0];
  }
  return value;
}
function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}
function normalizedPitch(value) {
  return FLAT_TO_SHARP[value] ?? value;
}
function modeOf(value) {
  const scale = value.toLowerCase();
  if (scale.startsWith("maj")) return "major";
  if (scale.startsWith("min")) return "minor";
  return null;
}
function keyIdentity(tonic, mode) {
  return `${normalizedPitch(tonic)}_${mode}`;
}
function pitchIndex(tonic) {
  return PITCHES.indexOf(normalizedPitch(tonic));
}
function pearson(a, b) {
  const meanA = a.reduce((sum, value) => sum + value, 0) / a.length;
  const meanB = b.reduce((sum, value) => sum + value, 0) / b.length;
  let numerator = 0;
  let denomA = 0;
  let denomB = 0;
  for (let i = 0; i < a.length; i++) {
    const da = a[i] - meanA;
    const db = b[i] - meanB;
    numerator += da * db;
    denomA += da * da;
    denomB += db * db;
  }
  return denomA && denomB ? numerator / Math.sqrt(denomA * denomB) : 0;
}
function rotateProfile(profile, tonic) {
  return profile.map((_, index) => profile[(index - tonic + 12) % 12]);
}
function camelot(tonic, mode) {
  const index = pitchIndex(tonic);
  return index < 0 ? "" : (mode === "major" ? CAMELOT_MAJOR : CAMELOT_MINOR)[index];
}
function keyNames(tonic, mode) {
  const pitch = normalizedPitch(tonic);
  const index = pitchIndex(pitch);
  const spanishPitch = index >= 0 ? PITCH_ES[index] : pitch;
  return {
    nameEs: `${spanishPitch} ${mode === "major" ? "mayor" : "menor"}`,
    nameEn: `${pitch} ${mode}`,
    camelot: camelot(pitch, mode)
  };
}
function keyScore(chroma, tonic, mode) {
  const profile = rotateProfile(mode === "major" ? MAJOR_PROFILE : MINOR_PROFILE, tonic);
  const third = chroma[(tonic + (mode === "major" ? 4 : 3)) % 12];
  const fifth = chroma[(tonic + 7) % 12];
  return 0.5 * Math.max(0, pearson(chroma, profile)) + 0.32 * (chroma[tonic] + third + fifth) + 0.18 * chroma[tonic] + (mode === "minor" ? 0.05 * chroma[(tonic + 11) % 12] : 0);
}
function disambiguationCandidates(key) {
  const tonic = pitchIndex(key.tonic);
  const mode = key.mode;
  const relative = (tonic + (mode === "major" ? 9 : 3)) % 12;
  const dominant = (tonic + 7) % 12;
  const subdominant = (tonic + 5) % 12;
  const candidates = [
    { tonic, mode },
    { tonic: relative, mode: mode === "major" ? "minor" : "major", reason: "relative-correction" },
    { tonic, mode: mode === "major" ? "minor" : "major", reason: "parallel-correction" },
    { tonic: dominant, mode, reason: "dominant-correction" },
    { tonic: (dominant + (mode === "major" ? 9 : 3)) % 12, mode: mode === "major" ? "minor" : "major", reason: "relative-correction" },
    { tonic: subdominant, mode, reason: "subdominant-correction" },
    { tonic: (subdominant + (mode === "major" ? 9 : 3)) % 12, mode: mode === "major" ? "minor" : "major", reason: "relative-correction" }
  ];
  const seen = /* @__PURE__ */ new Set();
  return candidates.filter((candidate) => {
    const id = keyIdentity(PITCHES[candidate.tonic], candidate.mode);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}
function buildKeyResult(ranking, chroma, totalVotes) {
  const ranked = ranking.map((item) => ({ ...item, ...keyNames(item.tonic, item.mode) }));
  const winner = ranked[0];
  const winnerScore = keyScore(chroma, pitchIndex(winner.tonic), winner.mode);
  const options = disambiguationCandidates(winner).map((candidate) => {
    const tonic = PITCHES[candidate.tonic];
    const rankedCandidate = ranked.find((item) => item.tonic === tonic && item.mode === candidate.mode);
    return { tonic, mode: candidate.mode, score: keyScore(chroma, candidate.tonic, candidate.mode), weight: rankedCandidate?.weight ?? 0, reason: candidate.reason };
  }).sort((a, b) => b.score - a.score);
  const best = options[0];
  const bestSupport = best?.reason ? ranked.find((item) => item.tonic === best.tonic && item.mode === best.mode) : void 0;
  const corrected = best.reason && best.score >= winnerScore + 0.03 && bestSupport && bestSupport.weight >= winner.weight * 0.8 ? best : void 0;
  const selected = corrected ? ranked.find((item) => item.tonic === corrected.tonic && item.mode === corrected.mode) ?? { tonic: corrected.tonic, mode: corrected.mode, weight: corrected.weight, votes: 0, ...keyNames(corrected.tonic, corrected.mode) } : winner;
  const secondWeight = ranked[1]?.weight ?? 0;
  const agreement = totalVotes ? winner.votes / totalVotes : 0;
  const separation = secondWeight > 0 ? Math.min(1, (winner.weight / secondWeight - 1) * 0.8) : 1;
  const confidence = Math.max(0, Math.min(1, 0.45 * separation + 0.35 * agreement + 0.2 * Math.min(1, winner.votes / 6))) * (corrected ? 0.92 : 1);
  const alternatives = [];
  const addAlternative = (item) => {
    if (keyIdentity(item.tonic, item.mode) === keyIdentity(selected.tonic, selected.mode)) return;
    if (alternatives.some((candidate) => keyIdentity(candidate.tonic, candidate.mode) === keyIdentity(item.tonic, item.mode))) return;
    alternatives.push({ tonic: item.tonic, mode: item.mode, ...keyNames(item.tonic, item.mode), weight: item.weight });
  };
  const relativeTonic = PITCHES[(pitchIndex(selected.tonic) + (selected.mode === "major" ? 9 : 3)) % 12];
  const relativeMode = selected.mode === "major" ? "minor" : "major";
  addAlternative(ranking.find((item) => item.tonic === relativeTonic && item.mode === relativeMode) ?? { tonic: relativeTonic, mode: relativeMode, weight: 0 });
  for (const item of ranking) {
    if (alternatives.length >= 3) break;
    addAlternative(item);
  }
  return {
    tonic: selected.tonic,
    mode: selected.mode,
    ...keyNames(selected.tonic, selected.mode),
    weight: selected.weight,
    confidence,
    confidenceLabel: confidence >= 0.75 ? "Alta" : confidence >= 0.5 ? "Media" : "Baja",
    ...corrected?.reason ? { correction: corrected.reason } : {},
    alternatives
  };
}
function findTuning(essentia, signal) {
  let result;
  try {
    result = essentia.TuningFrequencyExtractor(signal, FRAME_SIZE, HOP_SIZE);
    const frequency = result.tuningFrequency;
    const values = frequency && typeof frequency === "object" && "size" in frequency ? Array.from(essentia.module.vectorToArray(frequency)) : Array.isArray(frequency) || frequency instanceof Float32Array ? Array.from(frequency) : [];
    values.sort((a, b) => a - b);
    const median = values.length ? values[Math.floor(values.length / 2)] : Number.NaN;
    return median >= 420 && median <= 460 ? median : 440;
  } catch {
    return 440;
  } finally {
    dispose(result?.tuningFrequency);
  }
}
function getHpcpFrames(essentia, pcm, tuning) {
  const framesVector = essentia.FrameGenerator(pcm, FRAME_SIZE, HOP_SIZE);
  const frames = [];
  const global = Array.from({ length: 36 }, () => 0);
  try {
    for (let index = 0; index < framesVector.size(); index++) {
      const frame = framesVector.get(index);
      let windowed;
      let spectrum;
      let peaks;
      let hpcp;
      try {
        windowed = essentia.Windowing(frame, true, FRAME_SIZE, "blackmanharris62", 0, true);
        spectrum = essentia.Spectrum(windowed.frame, FRAME_SIZE);
        peaks = essentia.SpectralPeaks(spectrum.spectrum, 0, 5e3, 100, 40, "magnitude", SAMPLE_RATE);
        hpcp = essentia.HPCP(
          peaks.frequencies,
          peaks.magnitudes,
          true,
          500,
          4,
          5e3,
          false,
          40,
          false,
          "unitMax",
          tuning,
          SAMPLE_RATE,
          36,
          "cosine",
          1
        );
        const values = Array.from(essentia.module.vectorToArray(hpcp.hpcp));
        if (values.length !== 36 || values.every((value) => value === 0)) continue;
        frames.push(values);
        values.forEach((value, bin) => {
          global[bin] += value;
        });
      } finally {
        dispose(hpcp?.hpcp);
        dispose(peaks?.frequencies);
        dispose(peaks?.magnitudes);
        dispose(spectrum?.spectrum);
        dispose(windowed?.frame);
        dispose(frame);
      }
    }
  } finally {
    dispose(framesVector);
  }
  if (!frames.length) throw new Error("No se ha podido determinar la tonalidad de este audio.");
  global.forEach((_, index) => {
    global[index] /= frames.length;
  });
  return { frames, global };
}
function estimateKey(essentia, pcm, signal, tuning) {
  const { frames, global } = getHpcpFrames(essentia, pcm, tuning);
  const segmentSize = Math.floor(15 * SAMPLE_RATE / HOP_SIZE);
  const votes = /* @__PURE__ */ new Map();
  let totalVotes = 0;
  const register = (rawKey, rawScale, rawStrength, weightMultiplier = 1) => {
    const tonic = normalizedPitch(String(rawKey ?? ""));
    const mode = modeOf(String(rawScale ?? ""));
    const strength = Math.max(0, finiteNumber(rawStrength) ?? 0);
    if (pitchIndex(tonic) < 0 || !mode) return;
    const id = keyIdentity(tonic, mode);
    const vote = votes.get(id) ?? { tonic, mode, weight: 0, votes: 0 };
    vote.weight += strength * weightMultiplier;
    vote.votes++;
    votes.set(id, vote);
    totalVotes++;
  };
  const voteSection = (section, weightMultiplier = 1) => {
    if (section.length < 4) return;
    const mean = Array.from({ length: 36 }, (_, bin) => section.reduce((sum2, frame) => sum2 + frame[bin], 0) / section.length);
    if (Math.max(...mean) === 0) return;
    let pcp;
    try {
      pcp = essentia.arrayToVector(mean);
      for (const profile of PROFILES) {
        const result = essentia.Key(pcp, 4, 36, profile, 0.6, true, true, true);
        try {
          register(scalar(essentia, result.key), scalar(essentia, result.scale), scalar(essentia, result.strength), weightMultiplier);
        } finally {
          dispose(result.key);
          dispose(result.scale);
          dispose(result.strength);
        }
      }
    } finally {
      dispose(pcp);
    }
  };
  for (let start = 0; start < frames.length; start += segmentSize) {
    const section = frames.slice(start, start + segmentSize);
    if (section.length < 4) continue;
    voteSection(section);
  }
  voteSection(frames.slice(0, Math.ceil(0.75 * SAMPLE_RATE / HOP_SIZE)), 4);
  for (const profile of PROFILES) {
    const result = essentia.KeyExtractor(signal, true, FRAME_SIZE, HOP_SIZE, 36, 5e3, 60, 25, 0.2, profile, SAMPLE_RATE, 1, tuning, "cosine", "hann");
    try {
      register(scalar(essentia, result.key), scalar(essentia, result.scale), scalar(essentia, result.strength));
    } finally {
      dispose(result.key);
      dispose(result.scale);
      dispose(result.strength);
    }
  }
  if (!votes.size) throw new Error("No se ha podido determinar la tonalidad de este audio.");
  const ranking = [...votes.values()].sort((a, b) => b.weight - a.weight || b.votes - a.votes);
  if (!(ranking[0].weight > 0)) throw new Error("No se ha podido determinar la tonalidad de este audio.");
  const chroma = Array.from({ length: 12 }, () => 0);
  global.forEach((value, bin) => {
    chroma[(Math.round(bin / 3) + 9) % 12] += value;
  });
  const sum = chroma.reduce((total, value) => total + value, 0);
  if (sum > 0) chroma.forEach((value, index) => {
    chroma[index] = value / sum;
  });
  return buildKeyResult(ranking, chroma, totalVotes);
}
function buildOnsetEnvelope(pcm) {
  const hopSamples = Math.max(1, Math.round(SAMPLE_RATE * 5e-3));
  const frameCount = Math.ceil(pcm.length / hopSamples);
  const rms = new Float32Array(frameCount);
  for (let frame = 0; frame < frameCount; frame++) {
    const start = frame * hopSamples;
    const end = Math.min(pcm.length, start + hopSamples);
    let energy = 0;
    for (let sample = start; sample < end; sample++) energy += pcm[sample] * pcm[sample];
    rms[frame] = Math.sqrt(energy / Math.max(1, end - start));
  }
  const onset = new Float32Array(frameCount);
  for (let frame = 1; frame < frameCount; frame++) onset[frame] = Math.max(0, rms[frame] - rms[frame - 1]);
  return { values: onset, hopSeconds: hopSamples / SAMPLE_RATE };
}
function onsetStrengthNear(envelope, hopSeconds, time) {
  const center = Math.round(time / hopSeconds);
  const radius = Math.ceil(0.06 / hopSeconds);
  let strongest = 0;
  for (let frame = Math.max(0, center - radius); frame <= Math.min(envelope.length - 1, center + radius); frame++) {
    strongest = Math.max(strongest, envelope[frame]);
  }
  return strongest;
}
function hasStrongHalfBeatOnsets(pcm, ticks) {
  if (ticks.length < 5) return false;
  const { values, hopSeconds } = buildOnsetEnvelope(pcm);
  let beats = 0;
  let midbeats = 0;
  let count = 0;
  for (let index = 0; index < ticks.length - 1; index++) {
    const interval = ticks[index + 1] - ticks[index];
    if (!Number.isFinite(interval) || interval < 0.4 || interval > 1.2) continue;
    beats += onsetStrengthNear(values, hopSeconds, ticks[index]);
    midbeats += onsetStrengthNear(values, hopSeconds, ticks[index] + interval / 2);
    count++;
  }
  return count >= 4 && beats > 0 && midbeats / beats >= 0.8;
}
function bpmConfidenceLabel(confidence) {
  if (confidence < 1) return "muy baja";
  if (confidence < 1.5) return "baja";
  if (confidence <= 3.5) return "buena";
  return "excelente";
}
function estimateBpm(essentia, signal, pcm, startSeconds) {
  let percival = 0;
  let rhythm;
  try {
    const result = essentia.PercivalBpmEstimator(signal, 1024, 2048, 128, 256, 210, 50, SAMPLE_RATE);
    percival = finiteNumber(scalar(essentia, result.bpm)) ?? 0;
    dispose(result.bpm);
  } catch {
    percival = 0;
  }
  try {
    rhythm = essentia.RhythmExtractor2013(signal, 210, "multifeature", 40);
  } catch {
    rhythm = void 0;
  }
  try {
    const baseRhythmBpm = finiteNumber(scalar(essentia, rhythm?.bpm)) ?? 0;
    const rhythmBpm = baseRhythmBpm > 0 ? baseRhythmBpm : 0;
    const rhythmConfidence = Math.max(0, finiteNumber(scalar(essentia, rhythm?.confidence)) ?? 0);
    const ratio = percival > 0 && rhythmBpm > 0 ? percival / rhythmBpm : 0;
    const agree = ratio >= 0.95 && ratio <= 1.05;
    let chosen = 0;
    if (percival > 0 && rhythmBpm > 0) {
      if (agree || ratio >= 1.9 && ratio <= 2.1 || ratio >= 0.45 && ratio <= 0.55) chosen = rhythmBpm;
      else {
        const percivalScore = percival >= 60 && percival <= 180 ? 1 : 0.5;
        const rhythmScore = (rhythmBpm >= 60 && rhythmBpm <= 180 ? 1 : 0.5) + rhythmConfidence;
        chosen = rhythmScore >= percivalScore ? rhythmBpm : percival;
      }
    } else chosen = rhythmBpm > 0 ? rhythmBpm : percival;
    if (!Number.isFinite(chosen) || chosen <= 0) {
      throw new Error("No se ha podido determinar el tempo de este audio.");
    }
    if (chosen > 180 && chosen / 2 >= 60) chosen /= 2;
    if (chosen < 50 && chosen * 2 <= 210) chosen *= 2;
    const ticksOutput = rhythm?.ticks;
    let ticks = ticksOutput && typeof ticksOutput === "object" && "size" in ticksOutput ? Array.from(essentia.module.vectorToArray(ticksOutput)).filter(Number.isFinite) : [];
    if (chosen >= 60 && chosen < 100 && hasStrongHalfBeatOnsets(pcm, ticks)) {
      chosen *= 2;
      ticks = ticks.flatMap((time, index) => index < ticks.length - 1 ? [time, (time + ticks[index + 1]) / 2] : [time]).sort((a, b) => a - b);
    }
    ticks = ticks.map((time) => time + startSeconds);
    let confidenceLabel = bpmConfidenceLabel(rhythmConfidence);
    if (agree) confidenceLabel = confidenceLabel === "muy baja" ? "baja" : confidenceLabel === "baja" ? "buena" : "excelente";
    return {
      bpm: chosen,
      rounded: Math.round(chosen),
      confidence: Math.max(0, Math.min(1, rhythmConfidence / 5.32)),
      confidenceLabel,
      estimatorsAgree: agree,
      alternateBpm: chosen < 100 ? chosen * 2 : chosen / 2,
      ticks
    };
  } finally {
    dispose(rhythm?.bpm);
    dispose(rhythm?.confidence);
    dispose(rhythm?.ticks);
    dispose(rhythm?.estimates);
    dispose(rhythm?.bpmIntervals);
  }
}
function lowPassDecimate4(pcm) {
  const taps = new Float64Array(129);
  let sum = 0;
  for (let index = -64; index <= 64; index++) {
    const sinc = index === 0 ? 0.25 : Math.sin(2 * Math.PI * 0.125 * index) / (Math.PI * index);
    taps[index + 64] = sinc * (0.54 - 0.46 * Math.cos(2 * Math.PI * (index + 64) / 128));
    sum += taps[index + 64];
  }
  for (let index = 0; index < taps.length; index++) taps[index] /= sum;
  const output = new Float32Array(Math.ceil(pcm.length / 4));
  for (let outputIndex = 0; outputIndex < output.length; outputIndex++) {
    const center = outputIndex * 4;
    let value = 0;
    for (let tap = 0; tap < taps.length; tap++) {
      const sourceIndex = center + tap - 64;
      if (sourceIndex >= 0 && sourceIndex < pcm.length) value += pcm[sourceIndex] * taps[tap];
    }
    output[outputIndex] = value;
  }
  return output;
}
function nearestBeat(time, ticks) {
  if (ticks.length < 2) return void 0;
  let bestIndex = 0;
  let bestDistance = Infinity;
  ticks.forEach((tick, index) => {
    const distance = Math.abs(tick - time);
    if (distance < bestDistance) {
      bestIndex = index;
      bestDistance = distance;
    }
  });
  return bestIndex;
}
function diatonicChords(key) {
  const tonic = pitchIndex(key.tonic);
  const intervals = key.mode === "major" ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
  const minorDegrees = key.mode === "major" ? /* @__PURE__ */ new Set([1, 2, 5]) : /* @__PURE__ */ new Set([0, 3, 4]);
  return new Set(intervals.map((interval, degree) => `${PITCHES[(tonic + interval) % 12]}${minorDegrees.has(degree) ? "m" : ""}`));
}
function estimateChords(essentia, pcm, key, startSeconds) {
  const decimated = lowPassDecimate4(pcm);
  const sampleRate = SAMPLE_RATE / 4;
  const frameSize = 4096;
  const logFrames = [];
  const meanTuning = [];
  const localTuning = [];
  let beatSignal;
  let beatResult;
  let spectraMatrix;
  let chromaMatrix;
  let bassMatrix;
  let chordsResult;
  const chromaFrames = [];
  try {
    beatSignal = essentia.arrayToVector(pcm);
    beatResult = essentia.BeatTrackerMultiFeature(beatSignal);
    const beatValue = beatResult.ticks;
    const beatTimes = beatValue && typeof beatValue === "object" && "size" in beatValue ? Array.from(essentia.module.vectorToArray(beatValue)) : [];
    if (beatTimes.length < 2) throw new Error("No se han podido detectar suficientes pulsos para obtener acordes.");
    const beatGrid = beatTimes.map((time) => time + startSeconds);
    for (let start = 0; start + frameSize <= decimated.length; start += frameSize) {
      const frame = essentia.arrayToVector(decimated.subarray(start, start + frameSize));
      let windowed;
      let spectrum;
      let log;
      try {
        windowed = essentia.Windowing(frame, false, frameSize, "hann", 0, true);
        spectrum = essentia.Spectrum(windowed.frame, frameSize);
        log = essentia.LogSpectrum(spectrum.spectrum, 3, 2049, 0, sampleRate);
        logFrames.push(Array.from(essentia.module.vectorToArray(log.logFreqSpectrum)));
        meanTuning.push(finiteNumber(scalar(essentia, log.meanTuning)) ?? 0);
        localTuning.push(finiteNumber(scalar(essentia, log.localTuning)) ?? 0);
      } finally {
        dispose(frame);
        dispose(windowed?.frame);
        dispose(spectrum?.spectrum);
        dispose(log?.logFreqSpectrum);
        dispose(log?.meanTuning);
        dispose(log?.localTuning);
      }
    }
    if (logFrames.length < 2) throw new Error("El audio es demasiado corto para identificar acordes.");
    spectraMatrix = new essentia.module.VectorVectorFloat();
    const spectraRows = [];
    logFrames.forEach((frame) => {
      const row = essentia.arrayToVector(frame);
      spectraRows.push(row);
      spectraMatrix.push_back(row);
    });
    const means = essentia.arrayToVector(meanTuning);
    const locals = essentia.arrayToVector(localTuning);
    let nnls;
    try {
      nnls = essentia.NNLSChroma(spectraMatrix, means, locals, "none", 2049, sampleRate, 0.7, 1, "global", false);
      chromaMatrix = nnls.chromagram;
      bassMatrix = nnls.bassChromagram;
      const hpcpFrames = new essentia.module.VectorVectorFloat();
      const hpcpRows = [];
      try {
        for (let index = 0; index < chromaMatrix.size(); index++) {
          const chromaRow = chromaMatrix.get(index);
          const bassRow = bassMatrix && index < bassMatrix.size() ? bassMatrix.get(index) : void 0;
          try {
            const chroma = Array.from(essentia.module.vectorToArray(chromaRow));
            const bass = bassRow ? Array.from(essentia.module.vectorToArray(bassRow)) : [];
            chromaFrames.push(chroma);
            const combined = chroma.map((value, bin) => value + 0.5 * (bass[bin] ?? 0));
            const maximum = Math.max(...combined);
            const normalized = maximum ? combined.map((value) => value / maximum) : combined;
            const vector = essentia.arrayToVector(normalized);
            hpcpRows.push(vector);
            hpcpFrames.push_back(vector);
          } finally {
            dispose(chromaRow);
            dispose(bassRow);
          }
        }
        chordsResult = essentia.ChordsDetection(hpcpFrames, frameSize, sampleRate, 4);
      } finally {
        dispose(hpcpFrames);
        hpcpRows.forEach(dispose);
      }
    } finally {
      dispose(nnls?.chromagram);
      dispose(nnls?.bassChromagram);
      dispose(nnls?.tunedLogfreqSpectrum);
      dispose(nnls?.semitoneSpectrum);
      chromaMatrix = void 0;
      bassMatrix = void 0;
      dispose(spectraMatrix);
      spectraMatrix = void 0;
      spectraRows.forEach(dispose);
      dispose(means);
      dispose(locals);
      logFrames.length = 0;
    }
    const chordNames = chordsResult.chords;
    const strengthVector = chordsResult.strength;
    const strengths = strengthVector && typeof strengthVector === "object" && "size" in strengthVector ? Array.from(essentia.module.vectorToArray(strengthVector)) : [];
    const names = chordNames && typeof chordNames === "object" && "size" in chordNames && typeof chordNames.get === "function" ? Array.from({ length: chordNames.size() }, (_, index) => chordNames.get(index)) : Array.isArray(chordNames) ? [...chordNames] : [];
    if (strengths.some((value) => !Number.isFinite(value))) throw new Error("El an\xE1lisis de acordes produjo una confianza no v\xE1lida.");
    const count = Math.min(names.length, strengths.length);
    const times = Array.from({ length: count }, (_, index) => Math.max(0, (frameSize * index + frameSize / 2 - frameSize) / sampleRate));
    const spans = [];
    for (let index = 0; index < count; index++) {
      const begin = startSeconds + times[index];
      const end = startSeconds + (times[index + 1] ?? decimated.length / sampleRate);
      const chord = names[index] || "N";
      const previous = spans.at(-1);
      if (previous && previous.chord === chord) {
        previous.end = end;
        previous.strength = Math.max(previous.strength, strengths[index]);
        const mergedEndBeat = nearestBeat(end, beatGrid);
        if (mergedEndBeat !== void 0) previous.endBeat = mergedEndBeat;
      } else {
        const startBeat = nearestBeat(begin, beatGrid);
        const endBeat = nearestBeat(end, beatGrid);
        spans.push({ chord, start: begin, end, strength: strengths[index], ...startBeat !== void 0 ? { startBeat } : {}, ...endBeat !== void 0 ? { endBeat } : {} });
      }
    }
    const confidence = count ? strengths.slice(0, count).reduce((sum, value) => sum + value, 0) / count : 0;
    const clarity = count ? chromaFrames.slice(0, count).reduce((sum, values) => {
      const sorted = [...values].sort((a, b) => b - a);
      const total = values.reduce((frameSum, value) => frameSum + value, 0);
      return sum + (total ? sorted.slice(0, 3).reduce((frameSum, value) => frameSum + value, 0) / total : 0);
    }, 0) / count : 0;
    if (!Number.isFinite(confidence) || !Number.isFinite(clarity)) throw new Error("El an\xE1lisis de acordes produjo m\xE9tricas no v\xE1lidas.");
    const totalDuration = spans.reduce((sum, span) => sum + span.end - span.start, 0);
    const diatonic = diatonicChords(key);
    const diatonicDuration = spans.reduce((sum, span) => sum + (diatonic.has(span.chord) ? span.end - span.start : 0), 0);
    return {
      spans,
      confidence: Math.max(0, Math.min(1, confidence)),
      clarity,
      tonal: clarity >= 0.54,
      ...clarity < 0.54 ? { warning: "Audio poco tonal: percusi\xF3n/ruido, los acordes pueden no ser fiables." } : {},
      diatonicRatio: totalDuration ? diatonicDuration / totalDuration : 0
    };
  } finally {
    dispose(chordsResult?.chords);
    dispose(chordsResult?.strength);
    dispose(chromaMatrix);
    dispose(bassMatrix);
    dispose(spectraMatrix);
    dispose(beatResult?.ticks);
    dispose(beatResult?.confidence);
    dispose(beatSignal);
  }
}
function hasSignal(pcm) {
  for (let index = 0; index < pcm.length; index++) {
    if (pcm[index] !== 0) return true;
  }
  return false;
}
async function analyzePcm(essentia, pcm, options = {}, onProgress = () => {
}) {
  if (!(pcm instanceof Float32Array) || pcm.length < SAMPLE_RATE) throw new Error("El audio debe contener al menos un segundo de muestras mono Float32.");
  if (pcm.some((value) => !Number.isFinite(value))) throw new Error("El audio contiene muestras no finitas.");
  const selection = selectAnalysisWindow(pcm, options.full);
  if (!hasSignal(selection.pcm)) throw new Error("El audio est\xE1 en silencio: no hay se\xF1al que analizar.");
  const signal = essentia.arrayToVector(selection.pcm);
  try {
    onProgress({ stage: "key", message: "Detectando tonalidad\u2026", progress: 0.15 });
    const tuning = findTuning(essentia, signal);
    const key = estimateKey(essentia, selection.pcm, signal, tuning);
    onProgress({ stage: "bpm", message: "Detectando BPM\u2026", progress: 0.5 });
    const bpm = estimateBpm(essentia, signal, selection.pcm, selection.startSeconds);
    let chords;
    if (options.withChords !== false) {
      onProgress({ stage: "chords", message: "Leyendo la armon\xEDa\u2026", progress: 0.75 });
      chords = estimateChords(essentia, selection.pcm, key, selection.startSeconds);
    }
    return {
      key,
      bpm,
      tuning: { referenceFrequency: tuning, centsFrom440: 1200 * Math.log2(tuning / 440) },
      ...chords ? { chords } : {},
      duration: {
        inputSeconds: selection.inputSeconds,
        analyzedSeconds: selection.pcm.length / SAMPLE_RATE,
        startSeconds: selection.startSeconds,
        usedFullAudio: selection.usedFullAudio,
        ...selection.notice ? { notice: selection.notice } : {}
      }
    };
  } finally {
    dispose(signal);
  }
}

// src/essentia-loader.ts
var import_essentia_wasm_web = __toESM(require_essentia_wasm_web(), 1);

// node_modules/essentia.js/dist/essentia.js-core.es.js
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : new P(function(resolve2) {
        resolve2(result.value);
      }).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var Essentia = (
  /** @class */
  (function() {
    function Essentia2(EssentiaWASM, isDebug) {
      if (isDebug === void 0) {
        isDebug = false;
      }
      this.EssentiaWASM = EssentiaWASM;
      this.isDebug = isDebug;
      this.algorithms = new EssentiaWASM.EssentiaJS(isDebug);
      this.module = EssentiaWASM;
      this.version = this.algorithms.version;
      this.algorithmNames = this.algorithms.algorithmNames;
    }
    Essentia2.prototype.getAudioBufferFromURL = function(audioURL, webAudioCtx) {
      return __awaiter(this, void 0, void 0, function() {
        var response, arrayBuffer, audioBuffer;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, fetch(audioURL)];
            case 1:
              response = _a.sent();
              return [4, response.arrayBuffer()];
            case 2:
              arrayBuffer = _a.sent();
              return [4, webAudioCtx.decodeAudioData(arrayBuffer)];
            case 3:
              audioBuffer = _a.sent();
              return [2, audioBuffer];
          }
        });
      });
    };
    Essentia2.prototype.getAudioChannelDataFromURL = function(audioURL, webAudioCtx, channel) {
      if (channel === void 0) {
        channel = 0;
      }
      return __awaiter(this, void 0, void 0, function() {
        var response, arrayBuffer, audioBuffer;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, fetch(audioURL)];
            case 1:
              response = _a.sent();
              return [4, response.arrayBuffer()];
            case 2:
              arrayBuffer = _a.sent();
              return [4, webAudioCtx.decodeAudioData(arrayBuffer)];
            case 3:
              audioBuffer = _a.sent();
              return [2, audioBuffer.getChannelData(channel)];
          }
        });
      });
    };
    Essentia2.prototype.audioBufferToMonoSignal = function(buffer) {
      if (buffer.numberOfChannels === 1) {
        return buffer.getChannelData(0);
      }
      if (buffer.numberOfChannels === 2) {
        var left = this.arrayToVector(buffer.getChannelData(0));
        var right = this.arrayToVector(buffer.getChannelData(1));
        var monoSignal = this.MonoMixer(left, right).audio;
        return this.vectorToArray(monoSignal);
      }
      throw new Error("Unexpected number of channels found in audio buffer. Only accepts mono or stereo audio buffers.");
    };
    Essentia2.prototype.shutdown = function() {
      this.algorithms.shutdown();
    };
    Essentia2.prototype.reinstantiate = function() {
      this.algorithms = new this.module.EssentiaJS(this.isDebug);
    };
    Essentia2.prototype.delete = function() {
      this.algorithms.delete();
    };
    Essentia2.prototype.arrayToVector = function(inputArray) {
      return this.module.arrayToVector(inputArray);
    };
    Essentia2.prototype.vectorToArray = function(inputVector) {
      return this.module.vectorToArray(inputVector);
    };
    Essentia2.prototype.FrameGenerator = function(inputAudioData, frameSize, hopSize) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 1024;
      }
      return this.algorithms.FrameGenerator(inputAudioData, frameSize, hopSize);
    };
    Essentia2.prototype.MonoMixer = function(leftSignal, rightSignal) {
      return this.algorithms.MonoMixer(leftSignal, rightSignal);
    };
    Essentia2.prototype.LoudnessEBUR128 = function(leftSignal, rightSignal, hopSize, sampleRate, startAtZero) {
      if (hopSize === void 0) {
        hopSize = 0.1;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (startAtZero === void 0) {
        startAtZero = false;
      }
      return this.algorithms.LoudnessEBUR128(leftSignal, rightSignal, hopSize, sampleRate, startAtZero);
    };
    Essentia2.prototype.AfterMaxToBeforeMaxEnergyRatio = function(pitch) {
      return this.algorithms.AfterMaxToBeforeMaxEnergyRatio(pitch);
    };
    Essentia2.prototype.AllPass = function(signal, bandwidth, cutoffFrequency, order, sampleRate) {
      if (bandwidth === void 0) {
        bandwidth = 500;
      }
      if (cutoffFrequency === void 0) {
        cutoffFrequency = 1500;
      }
      if (order === void 0) {
        order = 1;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.AllPass(signal, bandwidth, cutoffFrequency, order, sampleRate);
    };
    Essentia2.prototype.AudioOnsetsMarker = function(signal, onsets, sampleRate, type) {
      if (onsets === void 0) {
        onsets = [];
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "beep";
      }
      var veconsets = new this.module.VectorFloat();
      for (var i = 0; i < veconsets.size(); i++) {
        veconsets.push_back(onsets[i]);
      }
      return this.algorithms.AudioOnsetsMarker(signal, veconsets, sampleRate, type);
    };
    Essentia2.prototype.AutoCorrelation = function(array, frequencyDomainCompression, generalized, normalization) {
      if (frequencyDomainCompression === void 0) {
        frequencyDomainCompression = 0.5;
      }
      if (generalized === void 0) {
        generalized = false;
      }
      if (normalization === void 0) {
        normalization = "standard";
      }
      return this.algorithms.AutoCorrelation(array, frequencyDomainCompression, generalized, normalization);
    };
    Essentia2.prototype.BFCC = function(spectrum, dctType, highFrequencyBound, inputSize, liftering, logType, lowFrequencyBound, normalize, numberBands, numberCoefficients, sampleRate, type, weighting) {
      if (dctType === void 0) {
        dctType = 2;
      }
      if (highFrequencyBound === void 0) {
        highFrequencyBound = 11e3;
      }
      if (inputSize === void 0) {
        inputSize = 1025;
      }
      if (liftering === void 0) {
        liftering = 0;
      }
      if (logType === void 0) {
        logType = "dbamp";
      }
      if (lowFrequencyBound === void 0) {
        lowFrequencyBound = 0;
      }
      if (normalize === void 0) {
        normalize = "unit_sum";
      }
      if (numberBands === void 0) {
        numberBands = 40;
      }
      if (numberCoefficients === void 0) {
        numberCoefficients = 13;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "power";
      }
      if (weighting === void 0) {
        weighting = "warping";
      }
      return this.algorithms.BFCC(spectrum, dctType, highFrequencyBound, inputSize, liftering, logType, lowFrequencyBound, normalize, numberBands, numberCoefficients, sampleRate, type, weighting);
    };
    Essentia2.prototype.BPF = function(x, xPoints, yPoints) {
      if (xPoints === void 0) {
        xPoints = [0, 1];
      }
      if (yPoints === void 0) {
        yPoints = [0, 1];
      }
      var vecxPoints = new this.module.VectorFloat();
      for (var i = 0; i < vecxPoints.size(); i++) {
        vecxPoints.push_back(xPoints[i]);
      }
      var vecyPoints = new this.module.VectorFloat();
      for (var i = 0; i < vecyPoints.size(); i++) {
        vecyPoints.push_back(yPoints[i]);
      }
      return this.algorithms.BPF(x, vecxPoints, vecyPoints);
    };
    Essentia2.prototype.BandPass = function(signal, bandwidth, cutoffFrequency, sampleRate) {
      if (bandwidth === void 0) {
        bandwidth = 500;
      }
      if (cutoffFrequency === void 0) {
        cutoffFrequency = 1500;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.BandPass(signal, bandwidth, cutoffFrequency, sampleRate);
    };
    Essentia2.prototype.BandReject = function(signal, bandwidth, cutoffFrequency, sampleRate) {
      if (bandwidth === void 0) {
        bandwidth = 500;
      }
      if (cutoffFrequency === void 0) {
        cutoffFrequency = 1500;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.BandReject(signal, bandwidth, cutoffFrequency, sampleRate);
    };
    Essentia2.prototype.BarkBands = function(spectrum, numberBands, sampleRate) {
      if (numberBands === void 0) {
        numberBands = 27;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.BarkBands(spectrum, numberBands, sampleRate);
    };
    Essentia2.prototype.BeatTrackerDegara = function(signal, maxTempo, minTempo) {
      if (maxTempo === void 0) {
        maxTempo = 208;
      }
      if (minTempo === void 0) {
        minTempo = 40;
      }
      return this.algorithms.BeatTrackerDegara(signal, maxTempo, minTempo);
    };
    Essentia2.prototype.BeatTrackerMultiFeature = function(signal, maxTempo, minTempo) {
      if (maxTempo === void 0) {
        maxTempo = 208;
      }
      if (minTempo === void 0) {
        minTempo = 40;
      }
      return this.algorithms.BeatTrackerMultiFeature(signal, maxTempo, minTempo);
    };
    Essentia2.prototype.Beatogram = function(loudness, loudnessBandRatio, size) {
      if (size === void 0) {
        size = 16;
      }
      return this.algorithms.Beatogram(loudness, loudnessBandRatio, size);
    };
    Essentia2.prototype.BeatsLoudness = function(signal, beatDuration, beatWindowDuration, beats, frequencyBands, sampleRate) {
      if (beatDuration === void 0) {
        beatDuration = 0.05;
      }
      if (beatWindowDuration === void 0) {
        beatWindowDuration = 0.1;
      }
      if (beats === void 0) {
        beats = [];
      }
      if (frequencyBands === void 0) {
        frequencyBands = [20, 150, 400, 3200, 7e3, 22e3];
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      var vecbeats = new this.module.VectorFloat();
      for (var i = 0; i < vecbeats.size(); i++) {
        vecbeats.push_back(beats[i]);
      }
      var vecfrequencyBands = new this.module.VectorFloat();
      for (var i = 0; i < vecfrequencyBands.size(); i++) {
        vecfrequencyBands.push_back(frequencyBands[i]);
      }
      return this.algorithms.BeatsLoudness(signal, beatDuration, beatWindowDuration, vecbeats, vecfrequencyBands, sampleRate);
    };
    Essentia2.prototype.BinaryOperator = function(array1, array2, type) {
      if (type === void 0) {
        type = "add";
      }
      return this.algorithms.BinaryOperator(array1, array2, type);
    };
    Essentia2.prototype.BinaryOperatorStream = function(array1, array2, type) {
      if (type === void 0) {
        type = "add";
      }
      return this.algorithms.BinaryOperatorStream(array1, array2, type);
    };
    Essentia2.prototype.BpmHistogramDescriptors = function(bpmIntervals) {
      return this.algorithms.BpmHistogramDescriptors(bpmIntervals);
    };
    Essentia2.prototype.BpmRubato = function(beats, longRegionsPruningTime, shortRegionsMergingTime, tolerance) {
      if (longRegionsPruningTime === void 0) {
        longRegionsPruningTime = 20;
      }
      if (shortRegionsMergingTime === void 0) {
        shortRegionsMergingTime = 4;
      }
      if (tolerance === void 0) {
        tolerance = 0.08;
      }
      return this.algorithms.BpmRubato(beats, longRegionsPruningTime, shortRegionsMergingTime, tolerance);
    };
    Essentia2.prototype.CentralMoments = function(array, mode, range) {
      if (mode === void 0) {
        mode = "pdf";
      }
      if (range === void 0) {
        range = 1;
      }
      return this.algorithms.CentralMoments(array, mode, range);
    };
    Essentia2.prototype.Centroid = function(array, range) {
      if (range === void 0) {
        range = 1;
      }
      return this.algorithms.Centroid(array, range);
    };
    Essentia2.prototype.ChordsDescriptors = function(chords, key, scale) {
      return this.algorithms.ChordsDescriptors(chords, key, scale);
    };
    Essentia2.prototype.ChordsDetection = function(pcp, hopSize, sampleRate, windowSize) {
      if (hopSize === void 0) {
        hopSize = 2048;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (windowSize === void 0) {
        windowSize = 2;
      }
      return this.algorithms.ChordsDetection(pcp, hopSize, sampleRate, windowSize);
    };
    Essentia2.prototype.ChordsDetectionBeats = function(pcp, ticks, chromaPick, hopSize, sampleRate) {
      if (chromaPick === void 0) {
        chromaPick = "interbeat_median";
      }
      if (hopSize === void 0) {
        hopSize = 2048;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.ChordsDetectionBeats(pcp, ticks, chromaPick, hopSize, sampleRate);
    };
    Essentia2.prototype.ChromaCrossSimilarity = function(queryFeature, referenceFeature, binarizePercentile, frameStackSize, frameStackStride, noti, oti, otiBinary, streaming) {
      if (binarizePercentile === void 0) {
        binarizePercentile = 0.095;
      }
      if (frameStackSize === void 0) {
        frameStackSize = 9;
      }
      if (frameStackStride === void 0) {
        frameStackStride = 1;
      }
      if (noti === void 0) {
        noti = 12;
      }
      if (oti === void 0) {
        oti = true;
      }
      if (otiBinary === void 0) {
        otiBinary = false;
      }
      if (streaming === void 0) {
        streaming = false;
      }
      return this.algorithms.ChromaCrossSimilarity(queryFeature, referenceFeature, binarizePercentile, frameStackSize, frameStackStride, noti, oti, otiBinary, streaming);
    };
    Essentia2.prototype.Chromagram = function(frame, binsPerOctave, minFrequency, minimumKernelSize, normalizeType, numberBins, sampleRate, scale, threshold, windowType, zeroPhase) {
      if (binsPerOctave === void 0) {
        binsPerOctave = 12;
      }
      if (minFrequency === void 0) {
        minFrequency = 32.7;
      }
      if (minimumKernelSize === void 0) {
        minimumKernelSize = 4;
      }
      if (normalizeType === void 0) {
        normalizeType = "unit_max";
      }
      if (numberBins === void 0) {
        numberBins = 84;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (scale === void 0) {
        scale = 1;
      }
      if (threshold === void 0) {
        threshold = 0.01;
      }
      if (windowType === void 0) {
        windowType = "hann";
      }
      if (zeroPhase === void 0) {
        zeroPhase = true;
      }
      return this.algorithms.Chromagram(frame, binsPerOctave, minFrequency, minimumKernelSize, normalizeType, numberBins, sampleRate, scale, threshold, windowType, zeroPhase);
    };
    Essentia2.prototype.ClickDetector = function(frame, detectionThreshold, frameSize, hopSize, order, powerEstimationThreshold, sampleRate, silenceThreshold) {
      if (detectionThreshold === void 0) {
        detectionThreshold = 30;
      }
      if (frameSize === void 0) {
        frameSize = 512;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (order === void 0) {
        order = 12;
      }
      if (powerEstimationThreshold === void 0) {
        powerEstimationThreshold = 10;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (silenceThreshold === void 0) {
        silenceThreshold = -50;
      }
      return this.algorithms.ClickDetector(frame, detectionThreshold, frameSize, hopSize, order, powerEstimationThreshold, sampleRate, silenceThreshold);
    };
    Essentia2.prototype.Clipper = function(signal, max, min) {
      if (max === void 0) {
        max = 1;
      }
      if (min === void 0) {
        min = -1;
      }
      return this.algorithms.Clipper(signal, max, min);
    };
    Essentia2.prototype.CoverSongSimilarity = function(inputArray, alignmentType, disExtension, disOnset, distanceType) {
      if (alignmentType === void 0) {
        alignmentType = "serra09";
      }
      if (disExtension === void 0) {
        disExtension = 0.5;
      }
      if (disOnset === void 0) {
        disOnset = 0.5;
      }
      if (distanceType === void 0) {
        distanceType = "asymmetric";
      }
      return this.algorithms.CoverSongSimilarity(inputArray, alignmentType, disExtension, disOnset, distanceType);
    };
    Essentia2.prototype.Crest = function(array) {
      return this.algorithms.Crest(array);
    };
    Essentia2.prototype.CrossCorrelation = function(arrayX, arrayY, maxLag, minLag) {
      if (maxLag === void 0) {
        maxLag = 1;
      }
      if (minLag === void 0) {
        minLag = 0;
      }
      return this.algorithms.CrossCorrelation(arrayX, arrayY, maxLag, minLag);
    };
    Essentia2.prototype.CrossSimilarityMatrix = function(queryFeature, referenceFeature, binarize, binarizePercentile, frameStackSize, frameStackStride) {
      if (binarize === void 0) {
        binarize = false;
      }
      if (binarizePercentile === void 0) {
        binarizePercentile = 0.095;
      }
      if (frameStackSize === void 0) {
        frameStackSize = 1;
      }
      if (frameStackStride === void 0) {
        frameStackStride = 1;
      }
      return this.algorithms.CrossSimilarityMatrix(queryFeature, referenceFeature, binarize, binarizePercentile, frameStackSize, frameStackStride);
    };
    Essentia2.prototype.CubicSpline = function(x, leftBoundaryFlag, leftBoundaryValue, rightBoundaryFlag, rightBoundaryValue, xPoints, yPoints) {
      if (leftBoundaryFlag === void 0) {
        leftBoundaryFlag = 0;
      }
      if (leftBoundaryValue === void 0) {
        leftBoundaryValue = 0;
      }
      if (rightBoundaryFlag === void 0) {
        rightBoundaryFlag = 0;
      }
      if (rightBoundaryValue === void 0) {
        rightBoundaryValue = 0;
      }
      if (xPoints === void 0) {
        xPoints = [0, 1];
      }
      if (yPoints === void 0) {
        yPoints = [0, 1];
      }
      var vecxPoints = new this.module.VectorFloat();
      for (var i = 0; i < vecxPoints.size(); i++) {
        vecxPoints.push_back(xPoints[i]);
      }
      var vecyPoints = new this.module.VectorFloat();
      for (var i = 0; i < vecyPoints.size(); i++) {
        vecyPoints.push_back(yPoints[i]);
      }
      return this.algorithms.CubicSpline(x, leftBoundaryFlag, leftBoundaryValue, rightBoundaryFlag, rightBoundaryValue, vecxPoints, vecyPoints);
    };
    Essentia2.prototype.DCRemoval = function(signal, cutoffFrequency, sampleRate) {
      if (cutoffFrequency === void 0) {
        cutoffFrequency = 40;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.DCRemoval(signal, cutoffFrequency, sampleRate);
    };
    Essentia2.prototype.DCT = function(array, dctType, inputSize, liftering, outputSize) {
      if (dctType === void 0) {
        dctType = 2;
      }
      if (inputSize === void 0) {
        inputSize = 10;
      }
      if (liftering === void 0) {
        liftering = 0;
      }
      if (outputSize === void 0) {
        outputSize = 10;
      }
      return this.algorithms.DCT(array, dctType, inputSize, liftering, outputSize);
    };
    Essentia2.prototype.Danceability = function(signal, maxTau, minTau, sampleRate, tauMultiplier) {
      if (maxTau === void 0) {
        maxTau = 8800;
      }
      if (minTau === void 0) {
        minTau = 310;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (tauMultiplier === void 0) {
        tauMultiplier = 1.1;
      }
      return this.algorithms.Danceability(signal, maxTau, minTau, sampleRate, tauMultiplier);
    };
    Essentia2.prototype.Decrease = function(array, range) {
      if (range === void 0) {
        range = 1;
      }
      return this.algorithms.Decrease(array, range);
    };
    Essentia2.prototype.Derivative = function(signal) {
      return this.algorithms.Derivative(signal);
    };
    Essentia2.prototype.DerivativeSFX = function(envelope) {
      return this.algorithms.DerivativeSFX(envelope);
    };
    Essentia2.prototype.DiscontinuityDetector = function(frame, detectionThreshold, energyThreshold, frameSize, hopSize, kernelSize, order, silenceThreshold, subFrameSize) {
      if (detectionThreshold === void 0) {
        detectionThreshold = 8;
      }
      if (energyThreshold === void 0) {
        energyThreshold = -60;
      }
      if (frameSize === void 0) {
        frameSize = 512;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (kernelSize === void 0) {
        kernelSize = 7;
      }
      if (order === void 0) {
        order = 3;
      }
      if (silenceThreshold === void 0) {
        silenceThreshold = -50;
      }
      if (subFrameSize === void 0) {
        subFrameSize = 32;
      }
      return this.algorithms.DiscontinuityDetector(frame, detectionThreshold, energyThreshold, frameSize, hopSize, kernelSize, order, silenceThreshold, subFrameSize);
    };
    Essentia2.prototype.Dissonance = function(frequencies, magnitudes) {
      return this.algorithms.Dissonance(frequencies, magnitudes);
    };
    Essentia2.prototype.DistributionShape = function(centralMoments) {
      return this.algorithms.DistributionShape(centralMoments);
    };
    Essentia2.prototype.Duration = function(signal, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.Duration(signal, sampleRate);
    };
    Essentia2.prototype.DynamicComplexity = function(signal, frameSize, sampleRate) {
      if (frameSize === void 0) {
        frameSize = 0.2;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.DynamicComplexity(signal, frameSize, sampleRate);
    };
    Essentia2.prototype.ERBBands = function(spectrum, highFrequencyBound, inputSize, lowFrequencyBound, numberBands, sampleRate, type, width) {
      if (highFrequencyBound === void 0) {
        highFrequencyBound = 22050;
      }
      if (inputSize === void 0) {
        inputSize = 1025;
      }
      if (lowFrequencyBound === void 0) {
        lowFrequencyBound = 50;
      }
      if (numberBands === void 0) {
        numberBands = 40;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "power";
      }
      if (width === void 0) {
        width = 1;
      }
      return this.algorithms.ERBBands(spectrum, highFrequencyBound, inputSize, lowFrequencyBound, numberBands, sampleRate, type, width);
    };
    Essentia2.prototype.EffectiveDuration = function(signal, sampleRate, thresholdRatio) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (thresholdRatio === void 0) {
        thresholdRatio = 0.4;
      }
      return this.algorithms.EffectiveDuration(signal, sampleRate, thresholdRatio);
    };
    Essentia2.prototype.Energy = function(array) {
      return this.algorithms.Energy(array);
    };
    Essentia2.prototype.EnergyBand = function(spectrum, sampleRate, startCutoffFrequency, stopCutoffFrequency) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (startCutoffFrequency === void 0) {
        startCutoffFrequency = 0;
      }
      if (stopCutoffFrequency === void 0) {
        stopCutoffFrequency = 100;
      }
      return this.algorithms.EnergyBand(spectrum, sampleRate, startCutoffFrequency, stopCutoffFrequency);
    };
    Essentia2.prototype.EnergyBandRatio = function(spectrum, sampleRate, startFrequency, stopFrequency) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (startFrequency === void 0) {
        startFrequency = 0;
      }
      if (stopFrequency === void 0) {
        stopFrequency = 100;
      }
      return this.algorithms.EnergyBandRatio(spectrum, sampleRate, startFrequency, stopFrequency);
    };
    Essentia2.prototype.Entropy = function(array) {
      return this.algorithms.Entropy(array);
    };
    Essentia2.prototype.Envelope = function(signal, applyRectification, attackTime, releaseTime, sampleRate) {
      if (applyRectification === void 0) {
        applyRectification = true;
      }
      if (attackTime === void 0) {
        attackTime = 10;
      }
      if (releaseTime === void 0) {
        releaseTime = 1500;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.Envelope(signal, applyRectification, attackTime, releaseTime, sampleRate);
    };
    Essentia2.prototype.EqualLoudness = function(signal, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.EqualLoudness(signal, sampleRate);
    };
    Essentia2.prototype.Flatness = function(array) {
      return this.algorithms.Flatness(array);
    };
    Essentia2.prototype.FlatnessDB = function(array) {
      return this.algorithms.FlatnessDB(array);
    };
    Essentia2.prototype.FlatnessSFX = function(envelope) {
      return this.algorithms.FlatnessSFX(envelope);
    };
    Essentia2.prototype.Flux = function(spectrum, halfRectify, norm) {
      if (halfRectify === void 0) {
        halfRectify = false;
      }
      if (norm === void 0) {
        norm = "L2";
      }
      return this.algorithms.Flux(spectrum, halfRectify, norm);
    };
    Essentia2.prototype.FrameCutter = function(signal, frameSize, hopSize, lastFrameToEndOfFile, startFromZero, validFrameThresholdRatio) {
      if (frameSize === void 0) {
        frameSize = 1024;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (lastFrameToEndOfFile === void 0) {
        lastFrameToEndOfFile = false;
      }
      if (startFromZero === void 0) {
        startFromZero = false;
      }
      if (validFrameThresholdRatio === void 0) {
        validFrameThresholdRatio = 0;
      }
      return this.algorithms.FrameCutter(signal, frameSize, hopSize, lastFrameToEndOfFile, startFromZero, validFrameThresholdRatio);
    };
    Essentia2.prototype.FrameToReal = function(signal, frameSize, hopSize) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      return this.algorithms.FrameToReal(signal, frameSize, hopSize);
    };
    Essentia2.prototype.FrequencyBands = function(spectrum, frequencyBands, sampleRate) {
      if (frequencyBands === void 0) {
        frequencyBands = [0, 50, 100, 150, 200, 300, 400, 510, 630, 770, 920, 1080, 1270, 1480, 1720, 2e3, 2320, 2700, 3150, 3700, 4400, 5300, 6400, 7700, 9500, 12e3, 15500, 20500, 27e3];
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      var vecfrequencyBands = new this.module.VectorFloat();
      for (var i = 0; i < vecfrequencyBands.size(); i++) {
        vecfrequencyBands.push_back(frequencyBands[i]);
      }
      return this.algorithms.FrequencyBands(spectrum, vecfrequencyBands, sampleRate);
    };
    Essentia2.prototype.GFCC = function(spectrum, dctType, highFrequencyBound, inputSize, logType, lowFrequencyBound, numberBands, numberCoefficients, sampleRate, silenceThreshold, type) {
      if (dctType === void 0) {
        dctType = 2;
      }
      if (highFrequencyBound === void 0) {
        highFrequencyBound = 22050;
      }
      if (inputSize === void 0) {
        inputSize = 1025;
      }
      if (logType === void 0) {
        logType = "dbamp";
      }
      if (lowFrequencyBound === void 0) {
        lowFrequencyBound = 40;
      }
      if (numberBands === void 0) {
        numberBands = 40;
      }
      if (numberCoefficients === void 0) {
        numberCoefficients = 13;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (silenceThreshold === void 0) {
        silenceThreshold = 1e-10;
      }
      if (type === void 0) {
        type = "power";
      }
      return this.algorithms.GFCC(spectrum, dctType, highFrequencyBound, inputSize, logType, lowFrequencyBound, numberBands, numberCoefficients, sampleRate, silenceThreshold, type);
    };
    Essentia2.prototype.GapsDetector = function(frame, attackTime, frameSize, hopSize, kernelSize, maximumTime, minimumTime, postpowerTime, prepowerThreshold, prepowerTime, releaseTime, sampleRate, silenceThreshold) {
      if (attackTime === void 0) {
        attackTime = 0.05;
      }
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 1024;
      }
      if (kernelSize === void 0) {
        kernelSize = 11;
      }
      if (maximumTime === void 0) {
        maximumTime = 3500;
      }
      if (minimumTime === void 0) {
        minimumTime = 10;
      }
      if (postpowerTime === void 0) {
        postpowerTime = 40;
      }
      if (prepowerThreshold === void 0) {
        prepowerThreshold = -30;
      }
      if (prepowerTime === void 0) {
        prepowerTime = 40;
      }
      if (releaseTime === void 0) {
        releaseTime = 0.05;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (silenceThreshold === void 0) {
        silenceThreshold = -50;
      }
      return this.algorithms.GapsDetector(frame, attackTime, frameSize, hopSize, kernelSize, maximumTime, minimumTime, postpowerTime, prepowerThreshold, prepowerTime, releaseTime, sampleRate, silenceThreshold);
    };
    Essentia2.prototype.GeometricMean = function(array) {
      return this.algorithms.GeometricMean(array);
    };
    Essentia2.prototype.HFC = function(spectrum, sampleRate, type) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "Masri";
      }
      return this.algorithms.HFC(spectrum, sampleRate, type);
    };
    Essentia2.prototype.HPCP = function(frequencies, magnitudes, bandPreset, bandSplitFrequency, harmonics, maxFrequency, maxShifted, minFrequency, nonLinear, normalized, referenceFrequency, sampleRate, size, weightType, windowSize) {
      if (bandPreset === void 0) {
        bandPreset = true;
      }
      if (bandSplitFrequency === void 0) {
        bandSplitFrequency = 500;
      }
      if (harmonics === void 0) {
        harmonics = 0;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 5e3;
      }
      if (maxShifted === void 0) {
        maxShifted = false;
      }
      if (minFrequency === void 0) {
        minFrequency = 40;
      }
      if (nonLinear === void 0) {
        nonLinear = false;
      }
      if (normalized === void 0) {
        normalized = "unitMax";
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 440;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (size === void 0) {
        size = 12;
      }
      if (weightType === void 0) {
        weightType = "squaredCosine";
      }
      if (windowSize === void 0) {
        windowSize = 1;
      }
      return this.algorithms.HPCP(frequencies, magnitudes, bandPreset, bandSplitFrequency, harmonics, maxFrequency, maxShifted, minFrequency, nonLinear, normalized, referenceFrequency, sampleRate, size, weightType, windowSize);
    };
    Essentia2.prototype.HarmonicBpm = function(bpms, bpm, threshold, tolerance) {
      if (bpm === void 0) {
        bpm = 60;
      }
      if (threshold === void 0) {
        threshold = 20;
      }
      if (tolerance === void 0) {
        tolerance = 5;
      }
      return this.algorithms.HarmonicBpm(bpms, bpm, threshold, tolerance);
    };
    Essentia2.prototype.HarmonicPeaks = function(frequencies, magnitudes, pitch, maxHarmonics, tolerance) {
      if (maxHarmonics === void 0) {
        maxHarmonics = 20;
      }
      if (tolerance === void 0) {
        tolerance = 0.2;
      }
      return this.algorithms.HarmonicPeaks(frequencies, magnitudes, pitch, maxHarmonics, tolerance);
    };
    Essentia2.prototype.HighPass = function(signal, cutoffFrequency, sampleRate) {
      if (cutoffFrequency === void 0) {
        cutoffFrequency = 1500;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.HighPass(signal, cutoffFrequency, sampleRate);
    };
    Essentia2.prototype.HighResolutionFeatures = function(hpcp, maxPeaks) {
      if (maxPeaks === void 0) {
        maxPeaks = 24;
      }
      return this.algorithms.HighResolutionFeatures(hpcp, maxPeaks);
    };
    Essentia2.prototype.Histogram = function(array, maxValue, minValue, normalize, numberBins) {
      if (maxValue === void 0) {
        maxValue = 1;
      }
      if (minValue === void 0) {
        minValue = 0;
      }
      if (normalize === void 0) {
        normalize = "none";
      }
      if (numberBins === void 0) {
        numberBins = 10;
      }
      return this.algorithms.Histogram(array, maxValue, minValue, normalize, numberBins);
    };
    Essentia2.prototype.HprModelAnal = function(frame, pitch, fftSize, freqDevOffset, freqDevSlope, harmDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, nHarmonics, orderBy, sampleRate, stocf) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (freqDevOffset === void 0) {
        freqDevOffset = 20;
      }
      if (freqDevSlope === void 0) {
        freqDevSlope = 0.01;
      }
      if (harmDevSlope === void 0) {
        harmDevSlope = 0.01;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 0;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 5e3;
      }
      if (maxPeaks === void 0) {
        maxPeaks = 100;
      }
      if (maxnSines === void 0) {
        maxnSines = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 20;
      }
      if (nHarmonics === void 0) {
        nHarmonics = 100;
      }
      if (orderBy === void 0) {
        orderBy = "frequency";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (stocf === void 0) {
        stocf = 0.2;
      }
      return this.algorithms.HprModelAnal(frame, pitch, fftSize, freqDevOffset, freqDevSlope, harmDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, nHarmonics, orderBy, sampleRate, stocf);
    };
    Essentia2.prototype.HpsModelAnal = function(frame, pitch, fftSize, freqDevOffset, freqDevSlope, harmDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, nHarmonics, orderBy, sampleRate, stocf) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (freqDevOffset === void 0) {
        freqDevOffset = 20;
      }
      if (freqDevSlope === void 0) {
        freqDevSlope = 0.01;
      }
      if (harmDevSlope === void 0) {
        harmDevSlope = 0.01;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 0;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 5e3;
      }
      if (maxPeaks === void 0) {
        maxPeaks = 100;
      }
      if (maxnSines === void 0) {
        maxnSines = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 20;
      }
      if (nHarmonics === void 0) {
        nHarmonics = 100;
      }
      if (orderBy === void 0) {
        orderBy = "frequency";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (stocf === void 0) {
        stocf = 0.2;
      }
      return this.algorithms.HpsModelAnal(frame, pitch, fftSize, freqDevOffset, freqDevSlope, harmDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, nHarmonics, orderBy, sampleRate, stocf);
    };
    Essentia2.prototype.IDCT = function(dct, dctType, inputSize, liftering, outputSize) {
      if (dctType === void 0) {
        dctType = 2;
      }
      if (inputSize === void 0) {
        inputSize = 10;
      }
      if (liftering === void 0) {
        liftering = 0;
      }
      if (outputSize === void 0) {
        outputSize = 10;
      }
      return this.algorithms.IDCT(dct, dctType, inputSize, liftering, outputSize);
    };
    Essentia2.prototype.IIR = function(signal, denominator, numerator) {
      if (denominator === void 0) {
        denominator = [1];
      }
      if (numerator === void 0) {
        numerator = [1];
      }
      var vecdenominator = new this.module.VectorFloat();
      for (var i = 0; i < vecdenominator.size(); i++) {
        vecdenominator.push_back(denominator[i]);
      }
      var vecnumerator = new this.module.VectorFloat();
      for (var i = 0; i < vecnumerator.size(); i++) {
        vecnumerator.push_back(numerator[i]);
      }
      return this.algorithms.IIR(signal, vecdenominator, vecnumerator);
    };
    Essentia2.prototype.Inharmonicity = function(frequencies, magnitudes) {
      return this.algorithms.Inharmonicity(frequencies, magnitudes);
    };
    Essentia2.prototype.InstantPower = function(array) {
      return this.algorithms.InstantPower(array);
    };
    Essentia2.prototype.Intensity = function(signal, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.Intensity(signal, sampleRate);
    };
    Essentia2.prototype.Key = function(pcp, numHarmonics, pcpSize, profileType, slope, useMajMin, usePolyphony, useThreeChords) {
      if (numHarmonics === void 0) {
        numHarmonics = 4;
      }
      if (pcpSize === void 0) {
        pcpSize = 36;
      }
      if (profileType === void 0) {
        profileType = "bgate";
      }
      if (slope === void 0) {
        slope = 0.6;
      }
      if (useMajMin === void 0) {
        useMajMin = false;
      }
      if (usePolyphony === void 0) {
        usePolyphony = true;
      }
      if (useThreeChords === void 0) {
        useThreeChords = true;
      }
      return this.algorithms.Key(pcp, numHarmonics, pcpSize, profileType, slope, useMajMin, usePolyphony, useThreeChords);
    };
    Essentia2.prototype.KeyExtractor = function(audio, averageDetuningCorrection, frameSize, hopSize, hpcpSize, maxFrequency, maximumSpectralPeaks, minFrequency, pcpThreshold, profileType, sampleRate, spectralPeaksThreshold, tuningFrequency, weightType, windowType) {
      if (averageDetuningCorrection === void 0) {
        averageDetuningCorrection = true;
      }
      if (frameSize === void 0) {
        frameSize = 4096;
      }
      if (hopSize === void 0) {
        hopSize = 4096;
      }
      if (hpcpSize === void 0) {
        hpcpSize = 12;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 3500;
      }
      if (maximumSpectralPeaks === void 0) {
        maximumSpectralPeaks = 60;
      }
      if (minFrequency === void 0) {
        minFrequency = 25;
      }
      if (pcpThreshold === void 0) {
        pcpThreshold = 0.2;
      }
      if (profileType === void 0) {
        profileType = "bgate";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (spectralPeaksThreshold === void 0) {
        spectralPeaksThreshold = 1e-4;
      }
      if (tuningFrequency === void 0) {
        tuningFrequency = 440;
      }
      if (weightType === void 0) {
        weightType = "cosine";
      }
      if (windowType === void 0) {
        windowType = "hann";
      }
      return this.algorithms.KeyExtractor(audio, averageDetuningCorrection, frameSize, hopSize, hpcpSize, maxFrequency, maximumSpectralPeaks, minFrequency, pcpThreshold, profileType, sampleRate, spectralPeaksThreshold, tuningFrequency, weightType, windowType);
    };
    Essentia2.prototype.LPC = function(frame, order, sampleRate, type) {
      if (order === void 0) {
        order = 10;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "regular";
      }
      return this.algorithms.LPC(frame, order, sampleRate, type);
    };
    Essentia2.prototype.Larm = function(signal, attackTime, power, releaseTime, sampleRate) {
      if (attackTime === void 0) {
        attackTime = 10;
      }
      if (power === void 0) {
        power = 1.5;
      }
      if (releaseTime === void 0) {
        releaseTime = 1500;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.Larm(signal, attackTime, power, releaseTime, sampleRate);
    };
    Essentia2.prototype.Leq = function(signal) {
      return this.algorithms.Leq(signal);
    };
    Essentia2.prototype.LevelExtractor = function(signal, frameSize, hopSize) {
      if (frameSize === void 0) {
        frameSize = 88200;
      }
      if (hopSize === void 0) {
        hopSize = 44100;
      }
      return this.algorithms.LevelExtractor(signal, frameSize, hopSize);
    };
    Essentia2.prototype.LogAttackTime = function(signal, sampleRate, startAttackThreshold, stopAttackThreshold) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (startAttackThreshold === void 0) {
        startAttackThreshold = 0.2;
      }
      if (stopAttackThreshold === void 0) {
        stopAttackThreshold = 0.9;
      }
      return this.algorithms.LogAttackTime(signal, sampleRate, startAttackThreshold, stopAttackThreshold);
    };
    Essentia2.prototype.LogSpectrum = function(spectrum, binsPerSemitone, frameSize, rollOn, sampleRate) {
      if (binsPerSemitone === void 0) {
        binsPerSemitone = 3;
      }
      if (frameSize === void 0) {
        frameSize = 1025;
      }
      if (rollOn === void 0) {
        rollOn = 0;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.LogSpectrum(spectrum, binsPerSemitone, frameSize, rollOn, sampleRate);
    };
    Essentia2.prototype.LoopBpmConfidence = function(signal, bpmEstimate, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.LoopBpmConfidence(signal, bpmEstimate, sampleRate);
    };
    Essentia2.prototype.LoopBpmEstimator = function(signal, confidenceThreshold) {
      if (confidenceThreshold === void 0) {
        confidenceThreshold = 0.95;
      }
      return this.algorithms.LoopBpmEstimator(signal, confidenceThreshold);
    };
    Essentia2.prototype.Loudness = function(signal) {
      return this.algorithms.Loudness(signal);
    };
    Essentia2.prototype.LoudnessVickers = function(signal, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.LoudnessVickers(signal, sampleRate);
    };
    Essentia2.prototype.LowLevelSpectralEqloudExtractor = function(signal, frameSize, hopSize, sampleRate) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 1024;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.LowLevelSpectralEqloudExtractor(signal, frameSize, hopSize, sampleRate);
    };
    Essentia2.prototype.LowLevelSpectralExtractor = function(signal, frameSize, hopSize, sampleRate) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 1024;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.LowLevelSpectralExtractor(signal, frameSize, hopSize, sampleRate);
    };
    Essentia2.prototype.LowPass = function(signal, cutoffFrequency, sampleRate) {
      if (cutoffFrequency === void 0) {
        cutoffFrequency = 1500;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.LowPass(signal, cutoffFrequency, sampleRate);
    };
    Essentia2.prototype.MFCC = function(spectrum, dctType, highFrequencyBound, inputSize, liftering, logType, lowFrequencyBound, normalize, numberBands, numberCoefficients, sampleRate, silenceThreshold, type, warpingFormula, weighting) {
      if (dctType === void 0) {
        dctType = 2;
      }
      if (highFrequencyBound === void 0) {
        highFrequencyBound = 11e3;
      }
      if (inputSize === void 0) {
        inputSize = 1025;
      }
      if (liftering === void 0) {
        liftering = 0;
      }
      if (logType === void 0) {
        logType = "dbamp";
      }
      if (lowFrequencyBound === void 0) {
        lowFrequencyBound = 0;
      }
      if (normalize === void 0) {
        normalize = "unit_sum";
      }
      if (numberBands === void 0) {
        numberBands = 40;
      }
      if (numberCoefficients === void 0) {
        numberCoefficients = 13;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (silenceThreshold === void 0) {
        silenceThreshold = 1e-10;
      }
      if (type === void 0) {
        type = "power";
      }
      if (warpingFormula === void 0) {
        warpingFormula = "htkMel";
      }
      if (weighting === void 0) {
        weighting = "warping";
      }
      return this.algorithms.MFCC(spectrum, dctType, highFrequencyBound, inputSize, liftering, logType, lowFrequencyBound, normalize, numberBands, numberCoefficients, sampleRate, silenceThreshold, type, warpingFormula, weighting);
    };
    Essentia2.prototype.MaxFilter = function(signal, causal, width) {
      if (causal === void 0) {
        causal = true;
      }
      if (width === void 0) {
        width = 3;
      }
      return this.algorithms.MaxFilter(signal, causal, width);
    };
    Essentia2.prototype.MaxMagFreq = function(spectrum, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.MaxMagFreq(spectrum, sampleRate);
    };
    Essentia2.prototype.MaxToTotal = function(envelope) {
      return this.algorithms.MaxToTotal(envelope);
    };
    Essentia2.prototype.Mean = function(array) {
      return this.algorithms.Mean(array);
    };
    Essentia2.prototype.Median = function(array) {
      return this.algorithms.Median(array);
    };
    Essentia2.prototype.MedianFilter = function(array, kernelSize) {
      if (kernelSize === void 0) {
        kernelSize = 11;
      }
      return this.algorithms.MedianFilter(array, kernelSize);
    };
    Essentia2.prototype.MelBands = function(spectrum, highFrequencyBound, inputSize, log, lowFrequencyBound, normalize, numberBands, sampleRate, type, warpingFormula, weighting) {
      if (highFrequencyBound === void 0) {
        highFrequencyBound = 22050;
      }
      if (inputSize === void 0) {
        inputSize = 1025;
      }
      if (log === void 0) {
        log = false;
      }
      if (lowFrequencyBound === void 0) {
        lowFrequencyBound = 0;
      }
      if (normalize === void 0) {
        normalize = "unit_sum";
      }
      if (numberBands === void 0) {
        numberBands = 24;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "power";
      }
      if (warpingFormula === void 0) {
        warpingFormula = "htkMel";
      }
      if (weighting === void 0) {
        weighting = "warping";
      }
      return this.algorithms.MelBands(spectrum, highFrequencyBound, inputSize, log, lowFrequencyBound, normalize, numberBands, sampleRate, type, warpingFormula, weighting);
    };
    Essentia2.prototype.Meter = function(beatogram) {
      return this.algorithms.Meter(beatogram);
    };
    Essentia2.prototype.MinMax = function(array, type) {
      if (type === void 0) {
        type = "min";
      }
      return this.algorithms.MinMax(array, type);
    };
    Essentia2.prototype.MinToTotal = function(envelope) {
      return this.algorithms.MinToTotal(envelope);
    };
    Essentia2.prototype.MovingAverage = function(signal, size) {
      if (size === void 0) {
        size = 6;
      }
      return this.algorithms.MovingAverage(signal, size);
    };
    Essentia2.prototype.MultiPitchKlapuri = function(signal, binResolution, frameSize, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minFrequency, numberHarmonics, referenceFrequency, sampleRate) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (harmonicWeight === void 0) {
        harmonicWeight = 0.8;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (magnitudeCompression === void 0) {
        magnitudeCompression = 1;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 40;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 1760;
      }
      if (minFrequency === void 0) {
        minFrequency = 80;
      }
      if (numberHarmonics === void 0) {
        numberHarmonics = 10;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.MultiPitchKlapuri(signal, binResolution, frameSize, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minFrequency, numberHarmonics, referenceFrequency, sampleRate);
    };
    Essentia2.prototype.MultiPitchMelodia = function(signal, binResolution, filterIterations, frameSize, guessUnvoiced, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minDuration, minFrequency, numberHarmonics, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, referenceFrequency, sampleRate, timeContinuity) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (filterIterations === void 0) {
        filterIterations = 3;
      }
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (guessUnvoiced === void 0) {
        guessUnvoiced = false;
      }
      if (harmonicWeight === void 0) {
        harmonicWeight = 0.8;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (magnitudeCompression === void 0) {
        magnitudeCompression = 1;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 40;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 2e4;
      }
      if (minDuration === void 0) {
        minDuration = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 40;
      }
      if (numberHarmonics === void 0) {
        numberHarmonics = 20;
      }
      if (peakDistributionThreshold === void 0) {
        peakDistributionThreshold = 0.9;
      }
      if (peakFrameThreshold === void 0) {
        peakFrameThreshold = 0.9;
      }
      if (pitchContinuity === void 0) {
        pitchContinuity = 27.5625;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (timeContinuity === void 0) {
        timeContinuity = 100;
      }
      return this.algorithms.MultiPitchMelodia(signal, binResolution, filterIterations, frameSize, guessUnvoiced, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minDuration, minFrequency, numberHarmonics, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, referenceFrequency, sampleRate, timeContinuity);
    };
    Essentia2.prototype.Multiplexer = function(numberRealInputs, numberVectorRealInputs) {
      if (numberRealInputs === void 0) {
        numberRealInputs = 0;
      }
      if (numberVectorRealInputs === void 0) {
        numberVectorRealInputs = 0;
      }
      return this.algorithms.Multiplexer(numberRealInputs, numberVectorRealInputs);
    };
    Essentia2.prototype.NNLSChroma = function(logSpectrogram, meanTuning, localTuning, chromaNormalization, frameSize, sampleRate, spectralShape, spectralWhitening, tuningMode, useNNLS) {
      if (chromaNormalization === void 0) {
        chromaNormalization = "none";
      }
      if (frameSize === void 0) {
        frameSize = 1025;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (spectralShape === void 0) {
        spectralShape = 0.7;
      }
      if (spectralWhitening === void 0) {
        spectralWhitening = 1;
      }
      if (tuningMode === void 0) {
        tuningMode = "global";
      }
      if (useNNLS === void 0) {
        useNNLS = true;
      }
      return this.algorithms.NNLSChroma(logSpectrogram, meanTuning, localTuning, chromaNormalization, frameSize, sampleRate, spectralShape, spectralWhitening, tuningMode, useNNLS);
    };
    Essentia2.prototype.NoiseAdder = function(signal, fixSeed, level) {
      if (fixSeed === void 0) {
        fixSeed = false;
      }
      if (level === void 0) {
        level = -100;
      }
      return this.algorithms.NoiseAdder(signal, fixSeed, level);
    };
    Essentia2.prototype.NoiseBurstDetector = function(frame, alpha, silenceThreshold, threshold) {
      if (alpha === void 0) {
        alpha = 0.9;
      }
      if (silenceThreshold === void 0) {
        silenceThreshold = -50;
      }
      if (threshold === void 0) {
        threshold = 8;
      }
      return this.algorithms.NoiseBurstDetector(frame, alpha, silenceThreshold, threshold);
    };
    Essentia2.prototype.NoveltyCurve = function(frequencyBands, frameRate, normalize, weightCurve, weightCurveType) {
      if (frameRate === void 0) {
        frameRate = 344.531;
      }
      if (normalize === void 0) {
        normalize = false;
      }
      if (weightCurve === void 0) {
        weightCurve = [];
      }
      if (weightCurveType === void 0) {
        weightCurveType = "hybrid";
      }
      var vecweightCurve = new this.module.VectorFloat();
      for (var i = 0; i < vecweightCurve.size(); i++) {
        vecweightCurve.push_back(weightCurve[i]);
      }
      return this.algorithms.NoveltyCurve(frequencyBands, frameRate, normalize, vecweightCurve, weightCurveType);
    };
    Essentia2.prototype.NoveltyCurveFixedBpmEstimator = function(novelty, hopSize, maxBpm, minBpm, sampleRate, tolerance) {
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (maxBpm === void 0) {
        maxBpm = 560;
      }
      if (minBpm === void 0) {
        minBpm = 30;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (tolerance === void 0) {
        tolerance = 3;
      }
      return this.algorithms.NoveltyCurveFixedBpmEstimator(novelty, hopSize, maxBpm, minBpm, sampleRate, tolerance);
    };
    Essentia2.prototype.OddToEvenHarmonicEnergyRatio = function(frequencies, magnitudes) {
      return this.algorithms.OddToEvenHarmonicEnergyRatio(frequencies, magnitudes);
    };
    Essentia2.prototype.OnsetDetection = function(spectrum, phase, method, sampleRate) {
      if (method === void 0) {
        method = "hfc";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.OnsetDetection(spectrum, phase, method, sampleRate);
    };
    Essentia2.prototype.OnsetDetectionGlobal = function(signal, frameSize, hopSize, method, sampleRate) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (method === void 0) {
        method = "infogain";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.OnsetDetectionGlobal(signal, frameSize, hopSize, method, sampleRate);
    };
    Essentia2.prototype.OnsetRate = function(signal) {
      return this.algorithms.OnsetRate(signal);
    };
    Essentia2.prototype.OverlapAdd = function(signal, frameSize, gain, hopSize) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (gain === void 0) {
        gain = 1;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      return this.algorithms.OverlapAdd(signal, frameSize, gain, hopSize);
    };
    Essentia2.prototype.PeakDetection = function(array, interpolate, maxPeaks, maxPosition, minPeakDistance, minPosition, orderBy, range, threshold) {
      if (interpolate === void 0) {
        interpolate = true;
      }
      if (maxPeaks === void 0) {
        maxPeaks = 100;
      }
      if (maxPosition === void 0) {
        maxPosition = 1;
      }
      if (minPeakDistance === void 0) {
        minPeakDistance = 0;
      }
      if (minPosition === void 0) {
        minPosition = 0;
      }
      if (orderBy === void 0) {
        orderBy = "position";
      }
      if (range === void 0) {
        range = 1;
      }
      if (threshold === void 0) {
        threshold = -1e6;
      }
      return this.algorithms.PeakDetection(array, interpolate, maxPeaks, maxPosition, minPeakDistance, minPosition, orderBy, range, threshold);
    };
    Essentia2.prototype.PercivalBpmEstimator = function(signal, frameSize, frameSizeOSS, hopSize, hopSizeOSS, maxBPM, minBPM, sampleRate) {
      if (frameSize === void 0) {
        frameSize = 1024;
      }
      if (frameSizeOSS === void 0) {
        frameSizeOSS = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (hopSizeOSS === void 0) {
        hopSizeOSS = 128;
      }
      if (maxBPM === void 0) {
        maxBPM = 210;
      }
      if (minBPM === void 0) {
        minBPM = 50;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.PercivalBpmEstimator(signal, frameSize, frameSizeOSS, hopSize, hopSizeOSS, maxBPM, minBPM, sampleRate);
    };
    Essentia2.prototype.PercivalEnhanceHarmonics = function(array) {
      return this.algorithms.PercivalEnhanceHarmonics(array);
    };
    Essentia2.prototype.PercivalEvaluatePulseTrains = function(oss, positions) {
      return this.algorithms.PercivalEvaluatePulseTrains(oss, positions);
    };
    Essentia2.prototype.PitchContourSegmentation = function(pitch, signal, hopSize, minDuration, pitchDistanceThreshold, rmsThreshold, sampleRate, tuningFrequency) {
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (minDuration === void 0) {
        minDuration = 0.1;
      }
      if (pitchDistanceThreshold === void 0) {
        pitchDistanceThreshold = 60;
      }
      if (rmsThreshold === void 0) {
        rmsThreshold = -2;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (tuningFrequency === void 0) {
        tuningFrequency = 440;
      }
      return this.algorithms.PitchContourSegmentation(pitch, signal, hopSize, minDuration, pitchDistanceThreshold, rmsThreshold, sampleRate, tuningFrequency);
    };
    Essentia2.prototype.PitchContours = function(peakBins, peakSaliences, binResolution, hopSize, minDuration, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, sampleRate, timeContinuity) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (minDuration === void 0) {
        minDuration = 100;
      }
      if (peakDistributionThreshold === void 0) {
        peakDistributionThreshold = 0.9;
      }
      if (peakFrameThreshold === void 0) {
        peakFrameThreshold = 0.9;
      }
      if (pitchContinuity === void 0) {
        pitchContinuity = 27.5625;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (timeContinuity === void 0) {
        timeContinuity = 100;
      }
      return this.algorithms.PitchContours(peakBins, peakSaliences, binResolution, hopSize, minDuration, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, sampleRate, timeContinuity);
    };
    Essentia2.prototype.PitchContoursMelody = function(contoursBins, contoursSaliences, contoursStartTimes, duration, binResolution, filterIterations, guessUnvoiced, hopSize, maxFrequency, minFrequency, referenceFrequency, sampleRate, voiceVibrato, voicingTolerance) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (filterIterations === void 0) {
        filterIterations = 3;
      }
      if (guessUnvoiced === void 0) {
        guessUnvoiced = false;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 2e4;
      }
      if (minFrequency === void 0) {
        minFrequency = 80;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (voiceVibrato === void 0) {
        voiceVibrato = false;
      }
      if (voicingTolerance === void 0) {
        voicingTolerance = 0.2;
      }
      return this.algorithms.PitchContoursMelody(contoursBins, contoursSaliences, contoursStartTimes, duration, binResolution, filterIterations, guessUnvoiced, hopSize, maxFrequency, minFrequency, referenceFrequency, sampleRate, voiceVibrato, voicingTolerance);
    };
    Essentia2.prototype.PitchContoursMonoMelody = function(contoursBins, contoursSaliences, contoursStartTimes, duration, binResolution, filterIterations, guessUnvoiced, hopSize, maxFrequency, minFrequency, referenceFrequency, sampleRate) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (filterIterations === void 0) {
        filterIterations = 3;
      }
      if (guessUnvoiced === void 0) {
        guessUnvoiced = false;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 2e4;
      }
      if (minFrequency === void 0) {
        minFrequency = 80;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.PitchContoursMonoMelody(contoursBins, contoursSaliences, contoursStartTimes, duration, binResolution, filterIterations, guessUnvoiced, hopSize, maxFrequency, minFrequency, referenceFrequency, sampleRate);
    };
    Essentia2.prototype.PitchContoursMultiMelody = function(contoursBins, contoursSaliences, contoursStartTimes, duration, binResolution, filterIterations, guessUnvoiced, hopSize, maxFrequency, minFrequency, referenceFrequency, sampleRate) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (filterIterations === void 0) {
        filterIterations = 3;
      }
      if (guessUnvoiced === void 0) {
        guessUnvoiced = false;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 2e4;
      }
      if (minFrequency === void 0) {
        minFrequency = 80;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.PitchContoursMultiMelody(contoursBins, contoursSaliences, contoursStartTimes, duration, binResolution, filterIterations, guessUnvoiced, hopSize, maxFrequency, minFrequency, referenceFrequency, sampleRate);
    };
    Essentia2.prototype.PitchFilter = function(pitch, pitchConfidence, confidenceThreshold, minChunkSize, useAbsolutePitchConfidence) {
      if (confidenceThreshold === void 0) {
        confidenceThreshold = 36;
      }
      if (minChunkSize === void 0) {
        minChunkSize = 30;
      }
      if (useAbsolutePitchConfidence === void 0) {
        useAbsolutePitchConfidence = false;
      }
      return this.algorithms.PitchFilter(pitch, pitchConfidence, confidenceThreshold, minChunkSize, useAbsolutePitchConfidence);
    };
    Essentia2.prototype.PitchMelodia = function(signal, binResolution, filterIterations, frameSize, guessUnvoiced, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minDuration, minFrequency, numberHarmonics, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, referenceFrequency, sampleRate, timeContinuity) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (filterIterations === void 0) {
        filterIterations = 3;
      }
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (guessUnvoiced === void 0) {
        guessUnvoiced = false;
      }
      if (harmonicWeight === void 0) {
        harmonicWeight = 0.8;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (magnitudeCompression === void 0) {
        magnitudeCompression = 1;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 40;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 2e4;
      }
      if (minDuration === void 0) {
        minDuration = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 40;
      }
      if (numberHarmonics === void 0) {
        numberHarmonics = 20;
      }
      if (peakDistributionThreshold === void 0) {
        peakDistributionThreshold = 0.9;
      }
      if (peakFrameThreshold === void 0) {
        peakFrameThreshold = 0.9;
      }
      if (pitchContinuity === void 0) {
        pitchContinuity = 27.5625;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (timeContinuity === void 0) {
        timeContinuity = 100;
      }
      return this.algorithms.PitchMelodia(signal, binResolution, filterIterations, frameSize, guessUnvoiced, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minDuration, minFrequency, numberHarmonics, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, referenceFrequency, sampleRate, timeContinuity);
    };
    Essentia2.prototype.PitchSalience = function(spectrum, highBoundary, lowBoundary, sampleRate) {
      if (highBoundary === void 0) {
        highBoundary = 5e3;
      }
      if (lowBoundary === void 0) {
        lowBoundary = 100;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.PitchSalience(spectrum, highBoundary, lowBoundary, sampleRate);
    };
    Essentia2.prototype.PitchSalienceFunction = function(frequencies, magnitudes, binResolution, harmonicWeight, magnitudeCompression, magnitudeThreshold, numberHarmonics, referenceFrequency) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (harmonicWeight === void 0) {
        harmonicWeight = 0.8;
      }
      if (magnitudeCompression === void 0) {
        magnitudeCompression = 1;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 40;
      }
      if (numberHarmonics === void 0) {
        numberHarmonics = 20;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      return this.algorithms.PitchSalienceFunction(frequencies, magnitudes, binResolution, harmonicWeight, magnitudeCompression, magnitudeThreshold, numberHarmonics, referenceFrequency);
    };
    Essentia2.prototype.PitchSalienceFunctionPeaks = function(salienceFunction, binResolution, maxFrequency, minFrequency, referenceFrequency) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 1760;
      }
      if (minFrequency === void 0) {
        minFrequency = 55;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      return this.algorithms.PitchSalienceFunctionPeaks(salienceFunction, binResolution, maxFrequency, minFrequency, referenceFrequency);
    };
    Essentia2.prototype.PitchYin = function(signal, frameSize, interpolate, maxFrequency, minFrequency, sampleRate, tolerance) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (interpolate === void 0) {
        interpolate = true;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 22050;
      }
      if (minFrequency === void 0) {
        minFrequency = 20;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (tolerance === void 0) {
        tolerance = 0.15;
      }
      return this.algorithms.PitchYin(signal, frameSize, interpolate, maxFrequency, minFrequency, sampleRate, tolerance);
    };
    Essentia2.prototype.PitchYinFFT = function(spectrum, frameSize, interpolate, maxFrequency, minFrequency, sampleRate, tolerance) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (interpolate === void 0) {
        interpolate = true;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 22050;
      }
      if (minFrequency === void 0) {
        minFrequency = 20;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (tolerance === void 0) {
        tolerance = 1;
      }
      return this.algorithms.PitchYinFFT(spectrum, frameSize, interpolate, maxFrequency, minFrequency, sampleRate, tolerance);
    };
    Essentia2.prototype.PitchYinProbabilistic = function(signal, frameSize, hopSize, lowRMSThreshold, outputUnvoiced, preciseTime, sampleRate) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (lowRMSThreshold === void 0) {
        lowRMSThreshold = 0.1;
      }
      if (outputUnvoiced === void 0) {
        outputUnvoiced = "negative";
      }
      if (preciseTime === void 0) {
        preciseTime = false;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.PitchYinProbabilistic(signal, frameSize, hopSize, lowRMSThreshold, outputUnvoiced, preciseTime, sampleRate);
    };
    Essentia2.prototype.PitchYinProbabilities = function(signal, frameSize, lowAmp, preciseTime, sampleRate) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (lowAmp === void 0) {
        lowAmp = 0.1;
      }
      if (preciseTime === void 0) {
        preciseTime = false;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.PitchYinProbabilities(signal, frameSize, lowAmp, preciseTime, sampleRate);
    };
    Essentia2.prototype.PitchYinProbabilitiesHMM = function(pitchCandidates, probabilities, minFrequency, numberBinsPerSemitone, selfTransition, yinTrust) {
      if (minFrequency === void 0) {
        minFrequency = 61.735;
      }
      if (numberBinsPerSemitone === void 0) {
        numberBinsPerSemitone = 5;
      }
      if (selfTransition === void 0) {
        selfTransition = 0.99;
      }
      if (yinTrust === void 0) {
        yinTrust = 0.5;
      }
      return this.algorithms.PitchYinProbabilitiesHMM(pitchCandidates, probabilities, minFrequency, numberBinsPerSemitone, selfTransition, yinTrust);
    };
    Essentia2.prototype.PowerMean = function(array, power) {
      if (power === void 0) {
        power = 1;
      }
      return this.algorithms.PowerMean(array, power);
    };
    Essentia2.prototype.PowerSpectrum = function(signal, size) {
      if (size === void 0) {
        size = 2048;
      }
      return this.algorithms.PowerSpectrum(signal, size);
    };
    Essentia2.prototype.PredominantPitchMelodia = function(signal, binResolution, filterIterations, frameSize, guessUnvoiced, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minDuration, minFrequency, numberHarmonics, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, referenceFrequency, sampleRate, timeContinuity, voiceVibrato, voicingTolerance) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (filterIterations === void 0) {
        filterIterations = 3;
      }
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (guessUnvoiced === void 0) {
        guessUnvoiced = false;
      }
      if (harmonicWeight === void 0) {
        harmonicWeight = 0.8;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (magnitudeCompression === void 0) {
        magnitudeCompression = 1;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 40;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 2e4;
      }
      if (minDuration === void 0) {
        minDuration = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 80;
      }
      if (numberHarmonics === void 0) {
        numberHarmonics = 20;
      }
      if (peakDistributionThreshold === void 0) {
        peakDistributionThreshold = 0.9;
      }
      if (peakFrameThreshold === void 0) {
        peakFrameThreshold = 0.9;
      }
      if (pitchContinuity === void 0) {
        pitchContinuity = 27.5625;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (timeContinuity === void 0) {
        timeContinuity = 100;
      }
      if (voiceVibrato === void 0) {
        voiceVibrato = false;
      }
      if (voicingTolerance === void 0) {
        voicingTolerance = 0.2;
      }
      return this.algorithms.PredominantPitchMelodia(signal, binResolution, filterIterations, frameSize, guessUnvoiced, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxFrequency, minDuration, minFrequency, numberHarmonics, peakDistributionThreshold, peakFrameThreshold, pitchContinuity, referenceFrequency, sampleRate, timeContinuity, voiceVibrato, voicingTolerance);
    };
    Essentia2.prototype.RMS = function(array) {
      return this.algorithms.RMS(array);
    };
    Essentia2.prototype.RawMoments = function(array, range) {
      if (range === void 0) {
        range = 22050;
      }
      return this.algorithms.RawMoments(array, range);
    };
    Essentia2.prototype.ReplayGain = function(signal, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.ReplayGain(signal, sampleRate);
    };
    Essentia2.prototype.Resample = function(signal, inputSampleRate, outputSampleRate, quality) {
      if (inputSampleRate === void 0) {
        inputSampleRate = 44100;
      }
      if (outputSampleRate === void 0) {
        outputSampleRate = 44100;
      }
      if (quality === void 0) {
        quality = 1;
      }
      return this.algorithms.Resample(signal, inputSampleRate, outputSampleRate, quality);
    };
    Essentia2.prototype.ResampleFFT = function(input, inSize, outSize) {
      if (inSize === void 0) {
        inSize = 128;
      }
      if (outSize === void 0) {
        outSize = 128;
      }
      return this.algorithms.ResampleFFT(input, inSize, outSize);
    };
    Essentia2.prototype.RhythmDescriptors = function(signal) {
      return this.algorithms.RhythmDescriptors(signal);
    };
    Essentia2.prototype.RhythmExtractor = function(signal, frameHop, frameSize, hopSize, lastBeatInterval, maxTempo, minTempo, numberFrames, sampleRate, tempoHints, tolerance, useBands, useOnset) {
      if (frameHop === void 0) {
        frameHop = 1024;
      }
      if (frameSize === void 0) {
        frameSize = 1024;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (lastBeatInterval === void 0) {
        lastBeatInterval = 0.1;
      }
      if (maxTempo === void 0) {
        maxTempo = 208;
      }
      if (minTempo === void 0) {
        minTempo = 40;
      }
      if (numberFrames === void 0) {
        numberFrames = 1024;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (tempoHints === void 0) {
        tempoHints = [];
      }
      if (tolerance === void 0) {
        tolerance = 0.24;
      }
      if (useBands === void 0) {
        useBands = true;
      }
      if (useOnset === void 0) {
        useOnset = true;
      }
      var vectempoHints = new this.module.VectorFloat();
      for (var i = 0; i < vectempoHints.size(); i++) {
        vectempoHints.push_back(tempoHints[i]);
      }
      return this.algorithms.RhythmExtractor(signal, frameHop, frameSize, hopSize, lastBeatInterval, maxTempo, minTempo, numberFrames, sampleRate, vectempoHints, tolerance, useBands, useOnset);
    };
    Essentia2.prototype.RhythmExtractor2013 = function(signal, maxTempo, method, minTempo) {
      if (maxTempo === void 0) {
        maxTempo = 208;
      }
      if (method === void 0) {
        method = "multifeature";
      }
      if (minTempo === void 0) {
        minTempo = 40;
      }
      return this.algorithms.RhythmExtractor2013(signal, maxTempo, method, minTempo);
    };
    Essentia2.prototype.RhythmTransform = function(melBands, frameSize, hopSize) {
      if (frameSize === void 0) {
        frameSize = 256;
      }
      if (hopSize === void 0) {
        hopSize = 32;
      }
      return this.algorithms.RhythmTransform(melBands, frameSize, hopSize);
    };
    Essentia2.prototype.RollOff = function(spectrum, cutoff, sampleRate) {
      if (cutoff === void 0) {
        cutoff = 0.85;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.RollOff(spectrum, cutoff, sampleRate);
    };
    Essentia2.prototype.SNR = function(frame, MAAlpha, MMSEAlpha, NoiseAlpha, frameSize, noiseThreshold, sampleRate, useBroadbadNoiseCorrection) {
      if (MAAlpha === void 0) {
        MAAlpha = 0.95;
      }
      if (MMSEAlpha === void 0) {
        MMSEAlpha = 0.98;
      }
      if (NoiseAlpha === void 0) {
        NoiseAlpha = 0.9;
      }
      if (frameSize === void 0) {
        frameSize = 512;
      }
      if (noiseThreshold === void 0) {
        noiseThreshold = -40;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (useBroadbadNoiseCorrection === void 0) {
        useBroadbadNoiseCorrection = true;
      }
      return this.algorithms.SNR(frame, MAAlpha, MMSEAlpha, NoiseAlpha, frameSize, noiseThreshold, sampleRate, useBroadbadNoiseCorrection);
    };
    Essentia2.prototype.SaturationDetector = function(frame, differentialThreshold, energyThreshold, frameSize, hopSize, minimumDuration, sampleRate) {
      if (differentialThreshold === void 0) {
        differentialThreshold = 1e-3;
      }
      if (energyThreshold === void 0) {
        energyThreshold = -1;
      }
      if (frameSize === void 0) {
        frameSize = 512;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (minimumDuration === void 0) {
        minimumDuration = 5e-3;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SaturationDetector(frame, differentialThreshold, energyThreshold, frameSize, hopSize, minimumDuration, sampleRate);
    };
    Essentia2.prototype.Scale = function(signal, clipping, factor, maxAbsValue) {
      if (clipping === void 0) {
        clipping = true;
      }
      if (factor === void 0) {
        factor = 10;
      }
      if (maxAbsValue === void 0) {
        maxAbsValue = 1;
      }
      return this.algorithms.Scale(signal, clipping, factor, maxAbsValue);
    };
    Essentia2.prototype.SineSubtraction = function(frame, magnitudes, frequencies, phases, fftSize, hopSize, sampleRate) {
      if (fftSize === void 0) {
        fftSize = 512;
      }
      if (hopSize === void 0) {
        hopSize = 128;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SineSubtraction(frame, magnitudes, frequencies, phases, fftSize, hopSize, sampleRate);
    };
    Essentia2.prototype.SingleBeatLoudness = function(beat, beatDuration, beatWindowDuration, frequencyBands, onsetStart, sampleRate) {
      if (beatDuration === void 0) {
        beatDuration = 0.05;
      }
      if (beatWindowDuration === void 0) {
        beatWindowDuration = 0.1;
      }
      if (frequencyBands === void 0) {
        frequencyBands = [0, 200, 400, 800, 1600, 3200, 22e3];
      }
      if (onsetStart === void 0) {
        onsetStart = "sumEnergy";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      var vecfrequencyBands = new this.module.VectorFloat();
      for (var i = 0; i < vecfrequencyBands.size(); i++) {
        vecfrequencyBands.push_back(frequencyBands[i]);
      }
      return this.algorithms.SingleBeatLoudness(beat, beatDuration, beatWindowDuration, vecfrequencyBands, onsetStart, sampleRate);
    };
    Essentia2.prototype.Slicer = function(audio, endTimes, sampleRate, startTimes, timeUnits) {
      if (endTimes === void 0) {
        endTimes = [];
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (startTimes === void 0) {
        startTimes = [];
      }
      if (timeUnits === void 0) {
        timeUnits = "seconds";
      }
      var vecendTimes = new this.module.VectorFloat();
      for (var i = 0; i < vecendTimes.size(); i++) {
        vecendTimes.push_back(endTimes[i]);
      }
      var vecstartTimes = new this.module.VectorFloat();
      for (var i = 0; i < vecstartTimes.size(); i++) {
        vecstartTimes.push_back(startTimes[i]);
      }
      return this.algorithms.Slicer(audio, vecendTimes, sampleRate, vecstartTimes, timeUnits);
    };
    Essentia2.prototype.SpectralCentroidTime = function(array, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SpectralCentroidTime(array, sampleRate);
    };
    Essentia2.prototype.SpectralComplexity = function(spectrum, magnitudeThreshold, sampleRate) {
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 5e-3;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SpectralComplexity(spectrum, magnitudeThreshold, sampleRate);
    };
    Essentia2.prototype.SpectralContrast = function(spectrum, frameSize, highFrequencyBound, lowFrequencyBound, neighbourRatio, numberBands, sampleRate, staticDistribution) {
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (highFrequencyBound === void 0) {
        highFrequencyBound = 11e3;
      }
      if (lowFrequencyBound === void 0) {
        lowFrequencyBound = 20;
      }
      if (neighbourRatio === void 0) {
        neighbourRatio = 0.4;
      }
      if (numberBands === void 0) {
        numberBands = 6;
      }
      if (sampleRate === void 0) {
        sampleRate = 22050;
      }
      if (staticDistribution === void 0) {
        staticDistribution = 0.15;
      }
      return this.algorithms.SpectralContrast(spectrum, frameSize, highFrequencyBound, lowFrequencyBound, neighbourRatio, numberBands, sampleRate, staticDistribution);
    };
    Essentia2.prototype.SpectralPeaks = function(spectrum, magnitudeThreshold, maxFrequency, maxPeaks, minFrequency, orderBy, sampleRate) {
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 0;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 5e3;
      }
      if (maxPeaks === void 0) {
        maxPeaks = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 0;
      }
      if (orderBy === void 0) {
        orderBy = "frequency";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SpectralPeaks(spectrum, magnitudeThreshold, maxFrequency, maxPeaks, minFrequency, orderBy, sampleRate);
    };
    Essentia2.prototype.SpectralWhitening = function(spectrum, frequencies, magnitudes, maxFrequency, sampleRate) {
      if (maxFrequency === void 0) {
        maxFrequency = 5e3;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SpectralWhitening(spectrum, frequencies, magnitudes, maxFrequency, sampleRate);
    };
    Essentia2.prototype.Spectrum = function(frame, size) {
      if (size === void 0) {
        size = 2048;
      }
      return this.algorithms.Spectrum(frame, size);
    };
    Essentia2.prototype.SpectrumCQ = function(frame, binsPerOctave, minFrequency, minimumKernelSize, numberBins, sampleRate, scale, threshold, windowType, zeroPhase) {
      if (binsPerOctave === void 0) {
        binsPerOctave = 12;
      }
      if (minFrequency === void 0) {
        minFrequency = 32.7;
      }
      if (minimumKernelSize === void 0) {
        minimumKernelSize = 4;
      }
      if (numberBins === void 0) {
        numberBins = 84;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (scale === void 0) {
        scale = 1;
      }
      if (threshold === void 0) {
        threshold = 0.01;
      }
      if (windowType === void 0) {
        windowType = "hann";
      }
      if (zeroPhase === void 0) {
        zeroPhase = true;
      }
      return this.algorithms.SpectrumCQ(frame, binsPerOctave, minFrequency, minimumKernelSize, numberBins, sampleRate, scale, threshold, windowType, zeroPhase);
    };
    Essentia2.prototype.SpectrumToCent = function(spectrum, bands, centBinResolution, inputSize, log, minimumFrequency, normalize, sampleRate, type) {
      if (bands === void 0) {
        bands = 720;
      }
      if (centBinResolution === void 0) {
        centBinResolution = 10;
      }
      if (inputSize === void 0) {
        inputSize = 32768;
      }
      if (log === void 0) {
        log = true;
      }
      if (minimumFrequency === void 0) {
        minimumFrequency = 164;
      }
      if (normalize === void 0) {
        normalize = "unit_sum";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "power";
      }
      return this.algorithms.SpectrumToCent(spectrum, bands, centBinResolution, inputSize, log, minimumFrequency, normalize, sampleRate, type);
    };
    Essentia2.prototype.Spline = function(x, beta1, beta2, type, xPoints, yPoints) {
      if (beta1 === void 0) {
        beta1 = 1;
      }
      if (beta2 === void 0) {
        beta2 = 0;
      }
      if (type === void 0) {
        type = "b";
      }
      if (xPoints === void 0) {
        xPoints = [0, 1];
      }
      if (yPoints === void 0) {
        yPoints = [0, 1];
      }
      var vecxPoints = new this.module.VectorFloat();
      for (var i = 0; i < vecxPoints.size(); i++) {
        vecxPoints.push_back(xPoints[i]);
      }
      var vecyPoints = new this.module.VectorFloat();
      for (var i = 0; i < vecyPoints.size(); i++) {
        vecyPoints.push_back(yPoints[i]);
      }
      return this.algorithms.Spline(x, beta1, beta2, type, vecxPoints, vecyPoints);
    };
    Essentia2.prototype.SprModelAnal = function(frame, fftSize, freqDevOffset, freqDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, orderBy, sampleRate) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (freqDevOffset === void 0) {
        freqDevOffset = 20;
      }
      if (freqDevSlope === void 0) {
        freqDevSlope = 0.01;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 0;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 5e3;
      }
      if (maxPeaks === void 0) {
        maxPeaks = 100;
      }
      if (maxnSines === void 0) {
        maxnSines = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 0;
      }
      if (orderBy === void 0) {
        orderBy = "frequency";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SprModelAnal(frame, fftSize, freqDevOffset, freqDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, orderBy, sampleRate);
    };
    Essentia2.prototype.SprModelSynth = function(magnitudes, frequencies, phases, res, fftSize, hopSize, sampleRate) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.SprModelSynth(magnitudes, frequencies, phases, res, fftSize, hopSize, sampleRate);
    };
    Essentia2.prototype.SpsModelAnal = function(frame, fftSize, freqDevOffset, freqDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, orderBy, sampleRate, stocf) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (freqDevOffset === void 0) {
        freqDevOffset = 20;
      }
      if (freqDevSlope === void 0) {
        freqDevSlope = 0.01;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 0;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 5e3;
      }
      if (maxPeaks === void 0) {
        maxPeaks = 100;
      }
      if (maxnSines === void 0) {
        maxnSines = 100;
      }
      if (minFrequency === void 0) {
        minFrequency = 0;
      }
      if (orderBy === void 0) {
        orderBy = "frequency";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (stocf === void 0) {
        stocf = 0.2;
      }
      return this.algorithms.SpsModelAnal(frame, fftSize, freqDevOffset, freqDevSlope, hopSize, magnitudeThreshold, maxFrequency, maxPeaks, maxnSines, minFrequency, orderBy, sampleRate, stocf);
    };
    Essentia2.prototype.SpsModelSynth = function(magnitudes, frequencies, phases, stocenv, fftSize, hopSize, sampleRate, stocf) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (stocf === void 0) {
        stocf = 0.2;
      }
      return this.algorithms.SpsModelSynth(magnitudes, frequencies, phases, stocenv, fftSize, hopSize, sampleRate, stocf);
    };
    Essentia2.prototype.StartStopCut = function(audio, frameSize, hopSize, maximumStartTime, maximumStopTime, sampleRate, threshold) {
      if (frameSize === void 0) {
        frameSize = 256;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (maximumStartTime === void 0) {
        maximumStartTime = 10;
      }
      if (maximumStopTime === void 0) {
        maximumStopTime = 10;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (threshold === void 0) {
        threshold = -60;
      }
      return this.algorithms.StartStopCut(audio, frameSize, hopSize, maximumStartTime, maximumStopTime, sampleRate, threshold);
    };
    Essentia2.prototype.StartStopSilence = function(frame, threshold) {
      if (threshold === void 0) {
        threshold = -60;
      }
      return this.algorithms.StartStopSilence(frame, threshold);
    };
    Essentia2.prototype.StochasticModelAnal = function(frame, fftSize, hopSize, sampleRate, stocf) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (stocf === void 0) {
        stocf = 0.2;
      }
      return this.algorithms.StochasticModelAnal(frame, fftSize, hopSize, sampleRate, stocf);
    };
    Essentia2.prototype.StochasticModelSynth = function(stocenv, fftSize, hopSize, sampleRate, stocf) {
      if (fftSize === void 0) {
        fftSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (stocf === void 0) {
        stocf = 0.2;
      }
      return this.algorithms.StochasticModelSynth(stocenv, fftSize, hopSize, sampleRate, stocf);
    };
    Essentia2.prototype.StrongDecay = function(signal, sampleRate) {
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.StrongDecay(signal, sampleRate);
    };
    Essentia2.prototype.StrongPeak = function(spectrum) {
      return this.algorithms.StrongPeak(spectrum);
    };
    Essentia2.prototype.SuperFluxExtractor = function(signal, combine, frameSize, hopSize, ratioThreshold, sampleRate, threshold) {
      if (combine === void 0) {
        combine = 20;
      }
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (ratioThreshold === void 0) {
        ratioThreshold = 16;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (threshold === void 0) {
        threshold = 0.05;
      }
      return this.algorithms.SuperFluxExtractor(signal, combine, frameSize, hopSize, ratioThreshold, sampleRate, threshold);
    };
    Essentia2.prototype.SuperFluxNovelty = function(bands, binWidth, frameWidth) {
      if (binWidth === void 0) {
        binWidth = 3;
      }
      if (frameWidth === void 0) {
        frameWidth = 2;
      }
      return this.algorithms.SuperFluxNovelty(bands, binWidth, frameWidth);
    };
    Essentia2.prototype.SuperFluxPeaks = function(novelty, combine, frameRate, pre_avg, pre_max, ratioThreshold, threshold) {
      if (combine === void 0) {
        combine = 30;
      }
      if (frameRate === void 0) {
        frameRate = 172;
      }
      if (pre_avg === void 0) {
        pre_avg = 100;
      }
      if (pre_max === void 0) {
        pre_max = 30;
      }
      if (ratioThreshold === void 0) {
        ratioThreshold = 16;
      }
      if (threshold === void 0) {
        threshold = 0.05;
      }
      return this.algorithms.SuperFluxPeaks(novelty, combine, frameRate, pre_avg, pre_max, ratioThreshold, threshold);
    };
    Essentia2.prototype.TCToTotal = function(envelope) {
      return this.algorithms.TCToTotal(envelope);
    };
    Essentia2.prototype.TempoScaleBands = function(bands, bandsGain, frameTime) {
      if (bandsGain === void 0) {
        bandsGain = [2, 3, 2, 1, 1.20000004768, 2, 3, 2.5];
      }
      if (frameTime === void 0) {
        frameTime = 512;
      }
      var vecbandsGain = new this.module.VectorFloat();
      for (var i = 0; i < vecbandsGain.size(); i++) {
        vecbandsGain.push_back(bandsGain[i]);
      }
      return this.algorithms.TempoScaleBands(bands, vecbandsGain, frameTime);
    };
    Essentia2.prototype.TempoTap = function(featuresFrame, frameHop, frameSize, maxTempo, minTempo, numberFrames, sampleRate, tempoHints) {
      if (frameHop === void 0) {
        frameHop = 1024;
      }
      if (frameSize === void 0) {
        frameSize = 256;
      }
      if (maxTempo === void 0) {
        maxTempo = 208;
      }
      if (minTempo === void 0) {
        minTempo = 40;
      }
      if (numberFrames === void 0) {
        numberFrames = 1024;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (tempoHints === void 0) {
        tempoHints = [];
      }
      var vectempoHints = new this.module.VectorFloat();
      for (var i = 0; i < vectempoHints.size(); i++) {
        vectempoHints.push_back(tempoHints[i]);
      }
      return this.algorithms.TempoTap(featuresFrame, frameHop, frameSize, maxTempo, minTempo, numberFrames, sampleRate, vectempoHints);
    };
    Essentia2.prototype.TempoTapDegara = function(onsetDetections, maxTempo, minTempo, resample, sampleRateODF) {
      if (maxTempo === void 0) {
        maxTempo = 208;
      }
      if (minTempo === void 0) {
        minTempo = 40;
      }
      if (resample === void 0) {
        resample = "none";
      }
      if (sampleRateODF === void 0) {
        sampleRateODF = 86.1328;
      }
      return this.algorithms.TempoTapDegara(onsetDetections, maxTempo, minTempo, resample, sampleRateODF);
    };
    Essentia2.prototype.TempoTapMaxAgreement = function(tickCandidates) {
      return this.algorithms.TempoTapMaxAgreement(tickCandidates);
    };
    Essentia2.prototype.TempoTapTicks = function(periods, phases, frameHop, hopSize, sampleRate) {
      if (frameHop === void 0) {
        frameHop = 512;
      }
      if (hopSize === void 0) {
        hopSize = 256;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.TempoTapTicks(periods, phases, frameHop, hopSize, sampleRate);
    };
    Essentia2.prototype.TensorflowInputMusiCNN = function(frame) {
      return this.algorithms.TensorflowInputMusiCNN(frame);
    };
    Essentia2.prototype.TensorflowInputVGGish = function(frame) {
      return this.algorithms.TensorflowInputVGGish(frame);
    };
    Essentia2.prototype.TonalExtractor = function(signal, frameSize, hopSize, tuningFrequency) {
      if (frameSize === void 0) {
        frameSize = 4096;
      }
      if (hopSize === void 0) {
        hopSize = 2048;
      }
      if (tuningFrequency === void 0) {
        tuningFrequency = 440;
      }
      return this.algorithms.TonalExtractor(signal, frameSize, hopSize, tuningFrequency);
    };
    Essentia2.prototype.TonicIndianArtMusic = function(signal, binResolution, frameSize, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxTonicFrequency, minTonicFrequency, numberHarmonics, numberSaliencePeaks, referenceFrequency, sampleRate) {
      if (binResolution === void 0) {
        binResolution = 10;
      }
      if (frameSize === void 0) {
        frameSize = 2048;
      }
      if (harmonicWeight === void 0) {
        harmonicWeight = 0.85;
      }
      if (hopSize === void 0) {
        hopSize = 512;
      }
      if (magnitudeCompression === void 0) {
        magnitudeCompression = 1;
      }
      if (magnitudeThreshold === void 0) {
        magnitudeThreshold = 40;
      }
      if (maxTonicFrequency === void 0) {
        maxTonicFrequency = 375;
      }
      if (minTonicFrequency === void 0) {
        minTonicFrequency = 100;
      }
      if (numberHarmonics === void 0) {
        numberHarmonics = 20;
      }
      if (numberSaliencePeaks === void 0) {
        numberSaliencePeaks = 5;
      }
      if (referenceFrequency === void 0) {
        referenceFrequency = 55;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.TonicIndianArtMusic(signal, binResolution, frameSize, harmonicWeight, hopSize, magnitudeCompression, magnitudeThreshold, maxTonicFrequency, minTonicFrequency, numberHarmonics, numberSaliencePeaks, referenceFrequency, sampleRate);
    };
    Essentia2.prototype.TriangularBands = function(spectrum, frequencyBands, inputSize, log, normalize, sampleRate, type, weighting) {
      if (frequencyBands === void 0) {
        frequencyBands = [21.533203125, 43.06640625, 64.599609375, 86.1328125, 107.666015625, 129.19921875, 150.732421875, 172.265625, 193.798828125, 215.33203125, 236.865234375, 258.3984375, 279.931640625, 301.46484375, 322.998046875, 344.53125, 366.064453125, 387.59765625, 409.130859375, 430.6640625, 452.197265625, 473.73046875, 495.263671875, 516.796875, 538.330078125, 559.86328125, 581.396484375, 602.9296875, 624.462890625, 645.99609375, 667.529296875, 689.0625, 710.595703125, 732.12890625, 753.662109375, 775.1953125, 796.728515625, 839.794921875, 861.328125, 882.861328125, 904.39453125, 925.927734375, 968.994140625, 990.52734375, 1012.06054688, 1055.12695312, 1076.66015625, 1098.19335938, 1141.25976562, 1184.32617188, 1205.859375, 1248.92578125, 1270.45898438, 1313.52539062, 1356.59179688, 1399.65820312, 1442.72460938, 1485.79101562, 1528.85742188, 1571.92382812, 1614.99023438, 1658.05664062, 1701.12304688, 1765.72265625, 1808.7890625, 1873.38867188, 1916.45507812, 1981.0546875, 2024.12109375, 2088.72070312, 2153.3203125, 2217.91992188, 2282.51953125, 2347.11914062, 2411.71875, 2497.8515625, 2562.45117188, 2627.05078125, 2713.18359375, 2799.31640625, 2885.44921875, 2950.04882812, 3036.18164062, 3143.84765625, 3229.98046875, 3316.11328125, 3423.77929688, 3509.91210938, 3617.578125, 3725.24414062, 3832.91015625, 3940.57617188, 4069.77539062, 4177.44140625, 4306.640625, 4435.83984375, 4565.0390625, 4694.23828125, 4844.97070312, 4974.16992188, 5124.90234375, 5275.63476562, 5426.3671875, 5577.09960938, 5749.36523438, 5921.63085938, 6093.89648438, 6266.16210938, 6459.9609375, 6653.75976562, 6847.55859375, 7041.35742188, 7256.68945312, 7450.48828125, 7687.35351562, 7902.68554688, 8139.55078125, 8376.41601562, 8613.28125, 8871.6796875, 9130.078125, 9388.4765625, 9668.40820312, 9948.33984375, 10249.8046875, 10551.2695312, 10852.734375, 11175.7324219, 11498.7304688, 11843.2617188, 12187.7929688, 12553.8574219, 12919.921875, 13285.9863281, 13673.5839844, 14082.7148438, 14491.8457031, 14922.5097656, 15353.1738281, 15805.3710938, 16257.5683594];
      }
      if (inputSize === void 0) {
        inputSize = 1025;
      }
      if (log === void 0) {
        log = true;
      }
      if (normalize === void 0) {
        normalize = "unit_sum";
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "power";
      }
      if (weighting === void 0) {
        weighting = "linear";
      }
      var vecfrequencyBands = new this.module.VectorFloat();
      for (var i = 0; i < vecfrequencyBands.size(); i++) {
        vecfrequencyBands.push_back(frequencyBands[i]);
      }
      return this.algorithms.TriangularBands(spectrum, vecfrequencyBands, inputSize, log, normalize, sampleRate, type, weighting);
    };
    Essentia2.prototype.TriangularBarkBands = function(spectrum, highFrequencyBound, inputSize, log, lowFrequencyBound, normalize, numberBands, sampleRate, type, weighting) {
      if (highFrequencyBound === void 0) {
        highFrequencyBound = 22050;
      }
      if (inputSize === void 0) {
        inputSize = 1025;
      }
      if (log === void 0) {
        log = false;
      }
      if (lowFrequencyBound === void 0) {
        lowFrequencyBound = 0;
      }
      if (normalize === void 0) {
        normalize = "unit_sum";
      }
      if (numberBands === void 0) {
        numberBands = 24;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (type === void 0) {
        type = "power";
      }
      if (weighting === void 0) {
        weighting = "warping";
      }
      return this.algorithms.TriangularBarkBands(spectrum, highFrequencyBound, inputSize, log, lowFrequencyBound, normalize, numberBands, sampleRate, type, weighting);
    };
    Essentia2.prototype.Trimmer = function(signal, checkRange, endTime, sampleRate, startTime) {
      if (checkRange === void 0) {
        checkRange = false;
      }
      if (endTime === void 0) {
        endTime = 1e6;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (startTime === void 0) {
        startTime = 0;
      }
      return this.algorithms.Trimmer(signal, checkRange, endTime, sampleRate, startTime);
    };
    Essentia2.prototype.Tristimulus = function(frequencies, magnitudes) {
      return this.algorithms.Tristimulus(frequencies, magnitudes);
    };
    Essentia2.prototype.TruePeakDetector = function(signal, blockDC, emphasise, oversamplingFactor, quality, sampleRate, threshold, version) {
      if (blockDC === void 0) {
        blockDC = false;
      }
      if (emphasise === void 0) {
        emphasise = false;
      }
      if (oversamplingFactor === void 0) {
        oversamplingFactor = 4;
      }
      if (quality === void 0) {
        quality = 1;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (threshold === void 0) {
        threshold = -2e-4;
      }
      if (version === void 0) {
        version = 4;
      }
      return this.algorithms.TruePeakDetector(signal, blockDC, emphasise, oversamplingFactor, quality, sampleRate, threshold, version);
    };
    Essentia2.prototype.TuningFrequency = function(frequencies, magnitudes, resolution) {
      if (resolution === void 0) {
        resolution = 1;
      }
      return this.algorithms.TuningFrequency(frequencies, magnitudes, resolution);
    };
    Essentia2.prototype.TuningFrequencyExtractor = function(signal, frameSize, hopSize) {
      if (frameSize === void 0) {
        frameSize = 4096;
      }
      if (hopSize === void 0) {
        hopSize = 2048;
      }
      return this.algorithms.TuningFrequencyExtractor(signal, frameSize, hopSize);
    };
    Essentia2.prototype.UnaryOperator = function(array, scale, shift, type) {
      if (scale === void 0) {
        scale = 1;
      }
      if (shift === void 0) {
        shift = 0;
      }
      if (type === void 0) {
        type = "identity";
      }
      return this.algorithms.UnaryOperator(array, scale, shift, type);
    };
    Essentia2.prototype.UnaryOperatorStream = function(array, scale, shift, type) {
      if (scale === void 0) {
        scale = 1;
      }
      if (shift === void 0) {
        shift = 0;
      }
      if (type === void 0) {
        type = "identity";
      }
      return this.algorithms.UnaryOperatorStream(array, scale, shift, type);
    };
    Essentia2.prototype.Variance = function(array) {
      return this.algorithms.Variance(array);
    };
    Essentia2.prototype.Vibrato = function(pitch, maxExtend, maxFrequency, minExtend, minFrequency, sampleRate) {
      if (maxExtend === void 0) {
        maxExtend = 250;
      }
      if (maxFrequency === void 0) {
        maxFrequency = 8;
      }
      if (minExtend === void 0) {
        minExtend = 50;
      }
      if (minFrequency === void 0) {
        minFrequency = 4;
      }
      if (sampleRate === void 0) {
        sampleRate = 344.531;
      }
      return this.algorithms.Vibrato(pitch, maxExtend, maxFrequency, minExtend, minFrequency, sampleRate);
    };
    Essentia2.prototype.WarpedAutoCorrelation = function(array, maxLag, sampleRate) {
      if (maxLag === void 0) {
        maxLag = 1;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      return this.algorithms.WarpedAutoCorrelation(array, maxLag, sampleRate);
    };
    Essentia2.prototype.Welch = function(frame, averagingFrames, fftSize, frameSize, sampleRate, scaling, windowType) {
      if (averagingFrames === void 0) {
        averagingFrames = 10;
      }
      if (fftSize === void 0) {
        fftSize = 1024;
      }
      if (frameSize === void 0) {
        frameSize = 512;
      }
      if (sampleRate === void 0) {
        sampleRate = 44100;
      }
      if (scaling === void 0) {
        scaling = "density";
      }
      if (windowType === void 0) {
        windowType = "hann";
      }
      return this.algorithms.Welch(frame, averagingFrames, fftSize, frameSize, sampleRate, scaling, windowType);
    };
    Essentia2.prototype.Windowing = function(frame, normalized, size, type, zeroPadding, zeroPhase) {
      if (normalized === void 0) {
        normalized = true;
      }
      if (size === void 0) {
        size = 1024;
      }
      if (type === void 0) {
        type = "hann";
      }
      if (zeroPadding === void 0) {
        zeroPadding = 0;
      }
      if (zeroPhase === void 0) {
        zeroPhase = true;
      }
      return this.algorithms.Windowing(frame, normalized, size, type, zeroPadding, zeroPhase);
    };
    Essentia2.prototype.ZeroCrossingRate = function(signal, threshold) {
      if (threshold === void 0) {
        threshold = 0;
      }
      return this.algorithms.ZeroCrossingRate(signal, threshold);
    };
    return Essentia2;
  })()
);
var essentia_js_core_es_default = Essentia;

// src/essentia-loader.ts
var FAILURE_COOLDOWN_MS = 3e4;
var instance = null;
var loading = null;
var lastFailure = 0;
var factoryOverride = null;
async function createEssentia() {
  const documentShim = typeof document === "undefined" ? { currentScript: null, createElement: () => ({}) } : document;
  if (typeof document === "undefined") {
    Object.defineProperty(globalThis, "document", { configurable: true, value: documentShim });
  }
  if (typeof window === "undefined") {
    Object.defineProperty(globalThis, "window", { configurable: true, value: { document: documentShim } });
  }
  const url = new URL("./essentia/engine.bin", import.meta.url);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Essentia WASM request failed (${response.status})`);
  const wasmBinary = await response.arrayBuffer();
  const wasmModule = await (0, import_essentia_wasm_web.default)({ wasmBinary, locateFile: (file) => file, print: () => {
  } });
  return new essentia_js_core_es_default(wasmModule, false);
}
function loadEssentia() {
  if (instance) return Promise.resolve(instance);
  if (loading) return loading;
  if (lastFailure && Date.now() - lastFailure < FAILURE_COOLDOWN_MS) {
    return Promise.reject(new Error("El motor de an\xE1lisis est\xE1 en espera tras un fallo. Vuelve a intentarlo en unos segundos."));
  }
  const attempt = (factoryOverride ?? createEssentia)();
  loading = attempt.then(
    (loaded) => {
      instance = loaded;
      lastFailure = 0;
      return loaded;
    },
    (error) => {
      lastFailure = Date.now();
      throw new Error(
        "No se pudo cargar el motor de an\xE1lisis. Comprueba que essentia/engine.bin se sirve correctamente y vuelve a intentarlo m\xE1s tarde.",
        { cause: error }
      );
    }
  ).finally(() => {
    loading = null;
  });
  return loading;
}

// src/worker.ts
var workerScope = globalThis;
var isWorker = typeof workerScope.postMessage === "function" && typeof document === "undefined";
function errorMessage(error) {
  if (error instanceof Error && error.message.trim()) return error.message;
  return "El motor de an\xE1lisis no pudo procesar el audio. Comprueba que la se\xF1al no est\xE9 da\xF1ada.";
}
function assertJsonSafe(value, path = "result", seen = /* @__PURE__ */ new Set()) {
  if (value === null) return;
  const type = typeof value;
  if (type === "number") {
    if (!Number.isFinite(value)) throw new Error(`El an\xE1lisis produjo un valor no finito en ${path}.`);
    return;
  }
  if (type === "string" || type === "boolean") return;
  if (type !== "object") throw new Error(`El an\xE1lisis produjo un valor no serializable en ${path}.`);
  const object = value;
  if (seen.has(object)) throw new Error(`El an\xE1lisis produjo una estructura c\xEDclica en ${path}.`);
  seen.add(object);
  if (Array.isArray(object)) {
    object.forEach((item, index) => assertJsonSafe(item, `${path}[${index}]`, seen));
  } else {
    for (const [key, item] of Object.entries(object)) assertJsonSafe(item, `${path}.${key}`, seen);
  }
  seen.delete(object);
}
async function handleAnalyzeMessage(message, post) {
  if (!message || typeof message !== "object" || !("type" in message) || message.type !== "analyze") {
    post({ type: "error", error: 'Solicitud no v\xE1lida: se esperaba type="analyze".' });
    return;
  }
  const request = message;
  if (!(request.pcm instanceof Float32Array)) {
    post({ type: "error", error: "El audio debe enviarse como Float32Array mono." });
    return;
  }
  if (request.sampleRate !== 44100) {
    post({ type: "error", error: "La frecuencia de muestreo debe ser exactamente 44100 Hz." });
    return;
  }
  try {
    post({ type: "progress", stage: "loading", message: "Cargando motor de an\xE1lisis\u2026", progress: 0 });
    const essentia = await loadEssentia();
    const result = await analyzePcm(essentia, request.pcm, request, (event) => {
      post({ type: "progress", ...event });
    });
    assertJsonSafe(result);
    post({ type: "success", result: JSON.parse(JSON.stringify(result)) });
  } catch (error) {
    post({ type: "error", error: errorMessage(error) });
  }
}
if (isWorker) {
  workerScope.onmessage = (event) => {
    void handleAnalyzeMessage(event.data, (response) => workerScope.postMessage(response));
  };
}
export {
  assertJsonSafe,
  handleAnalyzeMessage
};
