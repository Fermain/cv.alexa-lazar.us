<script lang="ts">
	import { schools, type School as Entry } from '../content.ts';
	import School from './School.svelte';
	import Section from './Section.svelte';

	let { entries = schools }: { entries?: Entry[] } = $props();
</script>

<Section id="main-education" heading="Education" headingId="education">
	<ul class="list-group list-group-flush">
		{#each entries as entry (entry.slug)}
			<School {entry} />
		{/each}
	</ul>
</Section>
