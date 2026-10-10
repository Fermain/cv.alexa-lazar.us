<script lang="ts">
	import { html, person, type Person } from '../content.ts';
	import Section from './Section.svelte';

	let { entry = person }: { entry?: Person } = $props();
</script>

<Section id="main-profile" heading="Profile" headingId="profile" flush={false}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- her own words, from her own repository -->
	{@html html(entry.profile)}
</Section>
