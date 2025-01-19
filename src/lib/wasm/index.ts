import init, { add } from '../wasmlib/wasm-math/pkg/wasm_math';

let initialized = false;

async function ensureInitialized() {
    if (!initialized) {
        await init();
        initialized = true;
    }
}

export async function wasmAdd(a: number, b: number): Promise<number> {
    await ensureInitialized();
    return add(a, b);
} 