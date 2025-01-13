<script lang='ts'> 
	let a = $state(0)
	let b = $derived(a * 2)
</script>

<div>
	<p>{b}</p>
	<button onclick={() => a += 1}>
		increment
	</button>
</div>