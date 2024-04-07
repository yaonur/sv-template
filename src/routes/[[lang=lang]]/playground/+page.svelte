<script lang="ts">
	import { dictionary } from './../../../../.svelte-kit/generated/client/app.js';
	import Button from '$elements/Button';
	import type { PageData } from './$types';

	export let data: PageData;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	let message = '';
	let name = '';
	let calculatedField=0
	let calculationValue =1
	let file: File | null = null; // To store the selected file

	async function handleHello() {
		const { data, error } = await supabase.functions.invoke('hello', {
			body: { name: 'onur' }
		});
		if (error) {
			console.log('error:', error);
			message = `Error ${error.message}`;
		}
		console.log('data:', data);
		message = data.message;
		name = data.name;
	}
	async function handleCalculation() {
		const { data, error } = await supabase.functions.invoke('calculation', {
			body: {  calculationValue:calculationValue,target_user_id:"f5d514e2-cdae-4cfe-8669-0c7ce1a1cd9a"}
		});
		if (error) {
			console.log('error:', error);
			message = `Error ${error.message}`;
		}
		console.log('data:', data);
		message = "calculation succesfull";
		calculatedField = data.value
		name = data.name;
	}

	async function handleUploadImage() {
		console.log("uploading image")
		if (!file) {
			console.error('No file selected');
			return;
		}
		const { data, error } = await supabase.storage.from('profiles').upload(`${session?.user?.email}/avatar-${Date.now()}.${file?.type.split('/')[1]}`, file, {
			cacheControl: '3600',
			contentType: 'image/*',
			upsert: true
		});
		if (error) {
			console.error('Upload error:', error);
			return;
		}
		console.log('Upload successful:', data);
	}

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input.files || input.files.length === 0) {
			console.error('No file selected');
			return;
		}
		file = input.files[0];
		console.log(file)
	}
	let honoResp:any
	async function handleHono(){
		console.log("hono")
		const {data,error} = await supabase.functions.invoke('hono',{body:{name:"onur"}})
		if(error){
			console.log("error:",error)
		}
		console.log("data:",data)
		honoResp = data
	}
</script>

<div class="grid grid-cols-12 gap-4 mx-auto">
	<div class="border-2 w-full border-black p-4 col-span-3 flex flex-col gap-1">
		<div class="">
			<p>message: {message}</p>
			<p>name: {name}</p>
			<Button class="w-full" on:click={handleHello}>Call Hello</Button>
		</div>
		<div>
			<p>Calculated Field: {calculatedField}</p>
			<input type="text" bind:value={calculationValue}>
			<Button on:click={handleCalculation}>Call Calculation</Button>
		</div>
	</div>
	<div class="border-2 col-span-4 border-black p-5 flex flex-col gap-1">
		<input type="file" accept="image/png" on:change={handleFileChange}>
		{#if file}
			<img src={URL.createObjectURL(file)} alt="Preview" class="max-w-full h-auto">
		{/if}
		<Button on:click={handleUploadImage}>Upload Image</Button>
	</div>
	<div class="border-2 w-full border-black p-4 col-span-3 flex flex-col gap-1">
		<div class="">
			<p>message: {honoResp?.message}</p>
			<p>isAuth: {honoResp?.authenticated}</p>
			{#if honoResp?.authenticated}
				<p>userMail: {honoResp?.userMail}</p>
			{/if}
			<Button class="w-full" on:click={handleHono}>Call Hono</Button>
		</div>
	</div>

</div>
