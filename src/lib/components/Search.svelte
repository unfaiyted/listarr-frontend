<!-- <script lang="ts"> -->
<!-- 	import type { SearchBuilder, TableHandler } from '@vincjo/datatables'; -->
<!-- 	export let handler: TableHandler; -->
<!-- 	let value: string; -->
<!---->

<script lang="ts">
	import type { TableHandler } from '@vincjo/datatables';
	export let table: TableHandler;

	let search = table.createSearch(['first_name', 'last_name']);
</script>

<input
	class="input sm:w-64 w-36"
	type="search"
	placeholder="Search..."
	bind:value={search.value}
	on:input={() => search.set()}
/>
