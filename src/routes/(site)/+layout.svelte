<script lang="ts">
	import '../../scss/index.scss';
	import { onMount } from 'svelte';
	import { person, plain } from '#lib/content.ts';

	let { children } = $props();

	const title = `${person.name.split(' ').filter((_, index, all) => index === 0 || index === all.length - 1).join(' ')} | CV`;

	// The folds open and close with Bootstrap's own script, which needs the page to exist.
	onMount(() => void import('bootstrap/js/dist/collapse'));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="apple-mobile-web-app-title" content={title} />
	<meta name="application-name" content={title} />
	<meta name="description" content={plain(person.profile)} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={plain(person.profile)} />
	<meta property="og:image" content="https://cv.alexa-lazar.us/images/profile.jpeg" />
	<meta property="og:url" content="https://cv.alexa-lazar.us" />
	<meta property="og:type" content="website" />
</svelte:head>

{@render children()}
