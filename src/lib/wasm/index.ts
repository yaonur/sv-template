import init, { greet } from './test/pkg/test';
import wasmUrl from './test/pkg/test_bg.wasm?url';

let initialized = false;

async function ensureInitialized() {
    if (!initialized) {
        await init();
        initialized = true;
    }
}

export async function greetWasm() {
    await ensureInitialized();
    return greet();
} 