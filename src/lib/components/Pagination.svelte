<script lang="ts">
	import type { TableHandler } from '@vincjo/datatables';
	export let table: TableHandler;
	const pageNumber = table.currentPage;
	const pageCount = table.pageCount;
	const pages = table.pagesWithEllipsis;
</script>

<!-- Desktop buttons -->
<section class="btn-group variant-ghost-surface [&>*+*]:border-surface-500 h-10 hidden lg:block">
	<button
		type="button"
		class="hover:variant-soft-primary"
		class:disabled={pageNumber === 1}
		on:click={() => table.setPage('previous')}
	>
		←
	</button>
	{#each pages as page}
		<button
			type="button"
			class="hover:variant-soft-primary"
			class:active={pageNumber === page}
			class:ellipse={page === null}
			on:click={() => table.setPage(page)}
		>
			{page ?? '...'}
		</button>
	{/each}
	<button
		type="button"
		class="hover:variant-soft-primary"
		class:disabled={pageNumber === pageCount}
		on:click={() => table.setPage('next')}
	>
		→
	</button>
</section>

<!-- Mobile buttons -->
<section class="lg:hidden">
	<button
		type="button"
		class="btn variant-ghost-surface mr-2 mb-2 hover:variant-soft-primary"
		class:disabled={pageNumber === 1}
		on:click={() => table.setPage('previous')}
	>
		←
	</button>
	<button
		type="button"
		class="btn variant-ghost-surface mb-2 hover:variant-soft-primary"
		class:disabled={pageNumber === pageCount}
		on:click={() => table.setPage('next')}
	>
		→
	</button>
</section>
