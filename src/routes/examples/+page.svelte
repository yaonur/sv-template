<script lang="ts">
	import {
		LocalStorageClass,
		LocalStorageFunction,
		useLocalStorage
	} from '$lib/stores/useLocalStorage.svelte';

	let count = LocalStorageFunction('count', 0);
	let anObjectWithClass = new LocalStorageClass('dumdarasObj', { val1: 'obj val1', val2: 'obj val2' });

	// 
	let shadowedClass = useLocalStorage('shadowedClass',  {valSh:'shdw val1', valSh2:"shdw val2"} );
	//
	function changedShadowedClass(){
		shadowedClass.value.valSh2 = "changed shadowedClass";
	}
</script>

<div>
	<p>----------------------- Page ----------------------------</p>
	<div class="border py-2">
		<p class="">Count: {count.value}</p>
		<button class="border bg-green-400 px-2" onclick={() => (count.value += 1)}>Increment</button>
	</div>
	<div class="border py-2">
		<input class="border" type="text" bind:value={anObjectWithClass.value.val1} />
		<button class="border bg-green-400 px-2" onclick={() => (anObjectWithClass.value = {val1:"changed",val2:"changed2"})}>set value to trigger setter</button>
		<p>anObjectWithClass val1: {anObjectWithClass.value.val1}</p>
		<p>anObjectWithClass val2: {anObjectWithClass.value.val2}</p>
	</div>
	<div class="border py-2">
		<input type="text" bind:value={shadowedClass.value.valSh} class="border" />
	   <button class="border bg-green-400 px-2" onclick={changedShadowedClass}>change shadow val2</button>
	   <p>shadowedClass val1: {shadowedClass.value.valSh}</p>
	   <p>shadowed Class val2: {shadowedClass.value.valSh2}</p>
	</div>
</div>
