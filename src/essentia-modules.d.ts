declare module 'essentia.js/dist/essentia.js-core.es.js' {
  export default class EssentiaCore {
    constructor(module: unknown, isDebug?: boolean);
  }
}

declare module 'essentia.js/dist/essentia-wasm.web.js' {
  export default function wasmFactory(options?: {
    wasmBinary?: ArrayBuffer | Uint8Array;
    locateFile?: (file: string, prefix?: string) => string;
    print?: (text: string) => void;
    printErr?: (text: string) => void;
  }): Promise<unknown>;
}
