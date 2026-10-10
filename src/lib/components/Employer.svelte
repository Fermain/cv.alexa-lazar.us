<script lang="ts">
	import type { Employer } from '../content.ts';
	import Groups from './Groups.svelte';

	let { entry }: { entry: Employer } = $props();
</script>

<li class="list-group-item">
	<div class="d-flex align-items-center justify-content-between my-2">
		<h3 class="h5 me-2 mb-0">{entry.employer}</h3>
		{#if entry.position}<h4 class="h6 mb-0">{entry.position}</h4>{/if}
		<em>{entry.period}</em>
	</div>
	<Groups groups={entry.groups} />
</li>
