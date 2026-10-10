<script lang="ts">
	import { dial, person, type Person } from '../content.ts';
	import Section from './Section.svelte';

	let { entry = person }: { entry?: Person } = $props();
</script>

<div class="accordion" id="sidebar">
	<Section id="sidebar-profile" heading="Contact" headingId="contact">
		<div class="list-group list-group-flush">
			<a class="list-group-item list-group-item-action" href="tel:{dial(entry.phone)}">{entry.phone}</a>
			<a class="list-group-item list-group-item-action" href="mailto:{entry.email}">{entry.email}</a>
			<div class="list-group-item">
				<address class="m-0" style="white-space: pre-line">{entry.address}</address>
			</div>
		</div>
	</Section>
	<Section id="sidebar-references" heading="References" headingId="references" open={false} flush={false} class="d-print-none">
		<span style="white-space: pre-line">{entry.references}</span>
	</Section>
</div>
