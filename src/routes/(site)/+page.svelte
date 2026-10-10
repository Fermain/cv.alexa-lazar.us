<script lang="ts">
	import Education from '#lib/components/Education.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Masthead from '#lib/components/Masthead.svelte';
	import Profile from '#lib/components/Profile.svelte';
	import Sidebar from '#lib/components/Sidebar.svelte';
	import Skills from '#lib/components/Skills.svelte';
	import { person } from '#lib/content.ts';
</script>

<Masthead />
<div class="container-fluid">
	<div class="row">
		<div class="col-12 col-md-8 mb-3 order-1 order-md-0">
			<div class="accordion shadow" id="main">
				<Profile />
				<Experience />
				<Education />
				<Skills />
			</div>
		</div>
		<div class="col-12 col-md-4 mb-3 order-0 order-md-1">
			<Sidebar />
		</div>
	</div>
</div>

<footer class="bg-secondary text-light py-3 d-print-none">
	<div class="container text-center">{person.footer}</div>
</footer>
