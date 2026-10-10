<script lang="ts">
	import { person, type Person } from '../content.ts';

	let { entry = person }: { entry?: Person } = $props();
</script>

<div class="container-fluid mb-3">
	<div class="d-flex align-items-center gap-2">
		<div class="d-flex flex-column gap-2 mt-3">
			<h1 class="mb-0 fw-bolder">{entry.name}</h1>
			<h2 class="fw-light mb-0"><i>{entry.title}</i></h2>
		</div>
	</div>
</div>
