<script lang="ts">
	import { TableHandler } from '@vincjo/datatables';
	import Search from '$lib/components/Search.svelte';
	import RowsPerPage from '$lib/components/RowsPerPage.svelte';
	import RowCount from '$lib/components/RowCount.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import ThFilter from '$lib/components/ThFilter.svelte';
	import ThSort from '$lib/components/ThSort.svelte';
	import type { UserResponse } from '$lib/api/types';
	//Load local data
	// import data from '$lib/data/data';

	export let users: UserResponse[] = [];

	console.log(users);

	//Init data handler - CLIENT
	// const rows = table.createCalculation('id').distinct; // Get rows from handler
	const table = new TableHandler(users, { rowsPerPage: 5 }); // Init data handler - CLIENT
</script>

<div class="p-4 overflow-x-auto space-y-4">
	<!-- Header -->
	<header class="flex justify-between gap-4">
		<Search {table} />
		<RowsPerPage {table} />
	</header>
	<!-- Table -->

	<table class="table table-hover table-compact w-full table-auto">
		<thead>
			<tr>
				<ThSort {table} field="Id">ID</ThSort>
				<ThSort {table} field="Name">Name</ThSort>
				<ThSort {table} field="email">Email</ThSort>
			</tr>
			<tr>
				<ThFilter {table} field="ID" />
				<ThFilter {table} field="name" />
				<ThFilter {table} field="email" />
			</tr>
		</thead>
		<tbody>
			{#each table.rows as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.name}</td>
					<td>{row.email}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<!-- Footer -->
	<footer class="flex justify-between">
		<RowCount {table} />
		<Pagination {table} />
	</footer>
</div>
