<script lang="ts">
	import type { Snippet } from 'svelte';

	// One fold of an accordion. `id` names the part that opens and closes.
	let {
		id,
		heading,
		headingId,
		open = true,
		flush = true,
		class: className = '',
		children
	}: {
		id: string;
		heading: string;
		headingId: string;
		open?: boolean;
		/** Whether the content runs to the edges, as lists do. */
		flush?: boolean;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<div class="accordion-item {className}">
	<h2 class="accordion-header">
		<button
			class={['accordion-button', !open && 'collapsed']}
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#{id}"
			aria-expanded={open}
			aria-controls={id}
		>
			<span class="m-0 h5" id={headingId}>{heading}</span>
		</button>
	</h2>
	<div {id} class={['accordion-collapse collapse', open && 'show']}>
		<div class={['accordion-body', flush && 'p-0']}>
			{@render children()}
		</div>
	</div>
</div>
