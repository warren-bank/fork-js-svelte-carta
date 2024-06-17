<!-- 
	@component
	This component is used to render Markdown once after being parsed twice
	by Carta. The first parsing is done in the server-side rendering (SSR) and the
	second (async) parsing is done in the client-side rendering.
-->

<script>import { onMount } from "svelte";
import { loadNestedLanguages } from ".";
export let carta;
export let value;
export let theme = "default";
let elem;
let rendered = carta.renderSSR(value);
onMount(async () => {
  carta.$setRenderer(elem);
  const highlighter = await carta.highlighter();
  await loadNestedLanguages(highlighter, value);
  rendered = await carta.render(value);
});
</script>

<div bind:this={elem} class="carta-viewer carta-theme__{theme} markdown-body">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html rendered}
</div>
