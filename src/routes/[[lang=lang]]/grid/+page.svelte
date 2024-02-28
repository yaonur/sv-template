<script lang="ts">
	export const gridData = [
		{
			title: 'Subscriber',
			value: 14.0
		},
		{
			title: 'Revenue',
			value: 120000.5
		},
		{
			title: 'User Count',
			value: 5000
		},
		{
			title: 'Product Sales',
			value: 75000
		},
		{
			title: 'Website Visits',
			value: 1000000
		},
		{
			title: 'Customer Satisfaction',
			value: 0.95
		},
		{
			title: 'Employee Count',
			value: 120
		}
	];
	
</script>

<div class="mx-auto max-w-7xl">
	<div class="grid auto-rows-[300px] md:grid-cols-1 grid-cols-4 gap-4 my-10">
		{#each gridData as item,i}
			<div class="flex flex-col items-center justify-center rounded-xl border-2 bg-neutral-100 p-2
			{(i===0 || i===4||i===5)&&'md:col-span-1 col-span-2'}
			{(i===2)&&'row-span-3 md:row-span-1'}">
				<h2 class="text-xl text-gray-600">{item.title}</h2>
				<p class="text-2xl font-bold">{item.value}</p>
			</div>
		{/each}
	</div>
</div>
