<script lang="ts">
    import { wasmAdd } from '$lib/wasm';
    
    let num1 = 0;
    let num2 = 0;
    let result: number | null = null;
    
    async function calculateSum() {
        result = await wasmAdd(num1, num2);
    }
</script>

<div class="container">
    <h1>WebAssembly Math Demo</h1>
    
    <div class="inputs">
        <input type="number" bind:value={num1} />
        <span>+</span>
        <input type="number" bind:value={num2} />
        <button on:click={calculateSum}>Calculate</button>
    </div>
    
    {#if result !== null}
        <p>Result: {result}</p>
    {/if}
</div>

<style>
    .container {
        max-width: 600px;
        margin: 2rem auto;
        padding: 1rem;
    }
    
    .inputs {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin: 1rem 0;
    }
    
    input {
        width: 100px;
        padding: 0.5rem;
    }
</style> 