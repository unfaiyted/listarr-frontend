<script lang="ts">
	import type { TableHandler } from '@vincjo/datatables';
	export let table: TableHandler;
	const options = [5, 10, 20, 50, 100];
</script>

<aside class="flex place-items-center">
	Show
	<select class="select ml-2" bind:value={table.rowsPerPage}>
		{#each options as option}
			<option value={option} on:change={() => table.setRowsPerPage(option)}>
				{option}
			</option>
		{/each}
	</select>
</aside>
