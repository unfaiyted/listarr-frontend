<script lang="ts">
	import type { TableHandler } from '@vincjo/datatables';

	export let table: TableHandler;
	export let field: string;

	const sorted = table.createSort(field);
</script>

<th on:click={() => sorted.set()} class="cursor-pointer select-none">
	<div class="flex h-full items-center justify-start gap-x-2">
		<slot />
		{#if sorted.isActive === true}
			{#if sorted.direction === 'asc'}
				&darr;
			{:else if sorted.direction === 'desc'}
				&uarr;
			{/if}
		{:else}
			&updownarrow;
		{/if}
	</div>
</th>
