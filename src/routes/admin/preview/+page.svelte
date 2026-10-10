<script lang="ts">
	// The site's styles, without the rest of the page.
	import '../../../scss/index.scss';
	import { Preview } from '@fermain/frame/preview';
	import config from '#lib/frame.config.ts';
</script>

<!-- One entry on its own is a row of a list, so it is shown inside one. -->
<div class="container-fluid py-3">
	<div class="accordion shadow"><ul class="list-group list-group-flush m-0 p-0"><Preview {config} /></ul></div>
</div>
