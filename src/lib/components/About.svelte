<script lang="ts">
	import { person, type Person } from '../content.ts';
	import Masthead from './Masthead.svelte';
	import Profile from './Profile.svelte';
	import Sidebar from './Sidebar.svelte';

	// Everything "About you" feeds, together, for the editor's preview.
	let { entry = person }: { entry?: Person } = $props();
</script>

<Masthead {entry} />
<div class="container-fluid">
	<div class="row">
		<div class="col-12 col-md-8 mb-3 order-1 order-md-0">
			<div class="accordion shadow"><Profile {entry} /></div>
		</div>
		<div class="col-12 col-md-4 mb-3 order-0 order-md-1"><Sidebar {entry} /></div>
	</div>
</div>
<footer class="bg-secondary text-light py-3 d-print-none">
	<div class="container text-center">{entry.footer}</div>
</footer>
