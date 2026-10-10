<script lang="ts">
	import type { School } from '../content.ts';

	let { entry }: { entry: School } = $props();
</script>

<li class="list-group-item">
	<div class="d-flex align-items-center justify-content-between mb-2 mt-2">
		<h3 class="h5 me-2 mb-0">{entry.institution}</h3>
		{#if entry.qualification}<h4 class="h6 mb-0">{entry.qualification}</h4>{/if}
		<em>{entry.period}</em>
	</div>
	<ul class="list-group">
		{#each entry.points ?? [] as point, index (index)}
			<li class="list-group-item">{point}</li>
		{/each}
	</ul>
</li>
