<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { GET } from '$lib/api/client';
	import type { UserResponse } from '$lib/api/types';
	import { baseUrl } from '$lib/stores/api';
	import Datatable from '$lib/components/Datatable.svelte';
	// Extract the user type from the OpenAPI paths

	let users: UserResponse[] = [];
	let loading: boolean = true;
	let error: Error | null = null;

	// interface TableCell {
	// 	key: string; // Table column name
	// 	value: string | number | boolean | null; // Value for the table cell
	// }

	console.log('baseUrl', baseUrl);
	// type TableRow = UserResponse; // Each row matches the user object structure

	// Load users on mount
	onMount(async () => {
		try {
			console.log('Running mount');
			const { data, error: apiError } = await GET('/users');
			if (apiError) throw apiError;
			users = data || [];
			console.log('Users assigned.');
			console.log(users);
		} catch (e) {
			error = e instanceof Error ? e : new Error('Unknown error occurred');
		} finally {
			loading = false;
		}
	});

	// Handle user deletion
	// async function handleDelete(id: number): Promise<void> {
	// 	if (!confirm('Are you sure you want to delete this user?')) return;
	//
	// 	try {
	// 		const { error: apiError } = await DELETE('/users/{id}', {
	// 			params: {
	// 				path: { id }
	// 			}
	// 		});
	// 		if (apiError) throw apiError;
	//
	// 		// Remove user from local state
	// 		users = users.filter((user) => user.id !== id);
	// 	} catch (e) {
	// 		alert(`Failed to delete user: ${e}`);
	// 	}
	// }

	// function handleEdit(userId: number): void {
	// 	window.location.href = '/users/' + userId;
	// }
	// $: sourceData = {
	// 	head: ['ID', 'Name', 'Email', 'Actions'],
	// 	body: tableMapperValues(
	// 		users.map((user) => ({
	// 			...user
	// 		})),
	// 		['id', 'name', 'email', 'id']
	// 	),
	// 	meta: tableMapperValues(users, ['id', 'name', 'email', 'id']),
	// 	foot: ['Total', '', users.length.toString(), '']
	// };

	// const formatters: Record<string, any> = {
	// 	actions: (id: number) => `
	//      <div class="space-x-2">
	//        <button class="btn btn-sm variant-filled-error" data-delete-id="${id}">Delete</button>
	//        <button class="btn btn-sm variant-filled-primary" data-edit-id="${id}">Edit</button>
	//      </div>`
	// };

	// $: tableSimple = sourceData;
</script>

<div class="container mx-auto p-4 space-y-4">
	<div class="flex justify-between items-center">
		<h1 class="h1">Users</h1>
		<a href="/users/new" class="btn variant-filled-primary">Add User</a>
	</div>

	{#if loading}
		<div class="card p-3 variant-ghost-surface">
			<p class="text-center">Loading users...</p>
		</div>
	{:else if error}
		<div class="card p-4 variant-filled-error">
			<p class="text-center">Error loading users: {error.message}</p>
		</div>
	{:else if users.length === 0}
		<div class="card p-4 variant-ghost-surface">
			<p class="text-center">No users found</p>
		</div>
	{:else}
		<div class="card variant-ghost-surface">
			<!-- <Table interactive={true} source={tableSimple} {formatters} /> -->

			<Datatable {users} />
		</div>
	{/if}
</div>
