<script lang="ts">
	import { skills, type Skills } from '../content.ts';
	import Groups from './Groups.svelte';
	import Section from './Section.svelte';

	let { entry = skills }: { entry?: Skills } = $props();
</script>

<Section id="main-skills" heading="Skills" headingId="skills">
	<ul class="list-group list-group-flush">
		{#each entry.groups ?? [] as group, index (index)}
			<li class="list-group-item">
				<Groups groups={[group]} class="mb-3 mt-2" />
			</li>
		{/each}
	</ul>
</Section>
