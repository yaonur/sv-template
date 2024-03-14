<script lang="ts">
	import Button from '$elements/Button';
	import type { PageData } from './$types';

	export let data: PageData;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	let message = '';
	let name = '';
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
</script>

<div class="grid grid-cols-12 gap-4">
	<div class="border-2 border-black p-4 col-span-2">
		<p>message: {message}</p>
		<p>name: {name}</p>
		<Button on:click={handleHello}>Call Hello</Button>
	</div>
	<div class="border-2 col-span-4 border-black p-4">
		<input type="file" accept="image/png" on:change={handleFileChange}>
		{#if file}
			<img src={URL.createObjectURL(file)} alt="Preview" class="max-w-full h-auto">
		{/if}
		<Button on:click={handleUploadImage}>Upload Image</Button>
	</div>
</div>
