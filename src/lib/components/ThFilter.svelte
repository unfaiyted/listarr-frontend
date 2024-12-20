<script lang="ts">
	import type { TableHandler } from '@vincjo/datatables';
	export let table: TableHandler;
	export let field: string;
	export const filter = table.createFilter(field);
</script>

<th>
	<input
		class="input text-sm w-full"
		type="text"
		placeholder="Filter"
		bind:value={filter.value}
		on:input={() => {
			if (field) filter.set();
		}}
	/>
</th>
