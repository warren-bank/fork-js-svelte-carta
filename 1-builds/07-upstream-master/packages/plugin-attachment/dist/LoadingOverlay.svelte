<script>import SpinnerIcon from "./icons/SpinnerIcon.svelte";
export let carta;
export let uploadingFiles;
export let loadingOverlay;
carta;
</script>

{#if loadingOverlay !== false}
	{#if loadingOverlay}
		<svelte:component this={loadingOverlay} uploadingFiles={$uploadingFiles} />
	{:else if $uploadingFiles.length > 0}
		<div class="carta-loading-overlay">
			<SpinnerIcon />
			<span>
				Loading {$uploadingFiles.length} file{$uploadingFiles.length > 1 ? 's' : ''}
			</span>
		</div>
	{/if}
{/if}
