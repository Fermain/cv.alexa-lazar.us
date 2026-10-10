<script lang="ts">
	import type { Group } from '../content.ts';

	let { groups, class: className = 'mb-3' }: { groups: Group[]; class?: string } = $props();

	// A group whose lines carry dates puts them at the end of each line. Any other puts
	// the name in bold with its description after it.
	const dated = (group: Group) => group.layout === 'Dated lines';
</script>

{#each groups ?? [] as group, index (index)}
	<ul class="list-group {className}">
		<li class="list-group-item d-flex align-items-center justify-content-between bg-secondary text-light">
			<h4 class="h6 mb-0">{group.name}</h4>
		</li>
		{#each group.items ?? [] as item, at (at)}
			{#if dated(group)}
				<li class="list-group-item d-flex align-items-center justify-content-between list-group-item-action">
					{item.name}
					<em>{item.value}</em>
				</li>
			{:else}
				<li class="list-group-item list-group-item-action">
					<strong>{item.name}:</strong>
					{item.value}
				</li>
			{/if}
		{/each}
	</ul>
{/each}
