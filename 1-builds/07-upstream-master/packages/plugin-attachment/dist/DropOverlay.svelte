<script>import UploadIcon from "./icons/UploadIcon.svelte";
export let carta;
export let draggingOverTextArea;
export let draggingOverOverlay;
export let handleDrop;
export let dropOverlay;
carta;
</script>

{#if dropOverlay !== false && ($draggingOverTextArea || $draggingOverOverlay)}
	<div
		class="carta-drop-overlay"
		on:dragover|preventDefault
		on:dragenter={() => draggingOverOverlay.set(true)}
		on:dragleave={() => draggingOverOverlay.set(false)}
		on:drop={handleDrop}
		role="button"
		tabindex="0"
		aria-label="Drop files to upload"
	>
		{#if dropOverlay}
			<svelte:component this={dropOverlay} />
		{:else}
			<div class="carta-drop-overlay-container">
				<div class="carta-drop-overlay-content">
					<UploadIcon />
				</div>
			</div>
		{/if}
	</div>
{/if}
