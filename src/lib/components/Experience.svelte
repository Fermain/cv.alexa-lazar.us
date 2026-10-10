<script lang="ts">
	import { employers, type Employer as Entry } from '../content.ts';
	import Employer from './Employer.svelte';
	import Section from './Section.svelte';

	let { entries = employers }: { entries?: Entry[] } = $props();
</script>

<Section id="main-experience" heading="Professional Experience" headingId="professional-experience">
	<ul class="list-group list-group-flush">
		{#each entries as entry (entry.slug)}
			<Employer {entry} />
		{/each}
	</ul>
</Section>
