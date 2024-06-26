<script lang="ts">
  import {Carta, MarkdownEditor, Markdown} from 'carta-md'
  import {code} from '@cartamd/plugin-code'

  import * as placeholder from '$lib/placeholder'

  import 'carta-md/default.css'

  export let form

  const carta = new Carta({
    extensions: [
      code({
        onError: (e) => {console.log(e.message)}
      })
    ]
  })

  let value = placeholder.getMarkdown()
</script>

<svelte:head>
  <title>Test: plugin-code</title>

  <!-- Fira font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" />
</svelte:head>

<style>
  :global(.carta-font-code),
  :global(.carta-font-code *) {
    font-family: 'Fira Code', monospace !important;
    font-variant-ligatures: normal !important;
    font-size: 1.1rem !important;
    line-height: 1.5rem !important;
    margin: 0px !important;
    padding: 0px !important;
  }
</style>

{#if form?.markdown}
  <Markdown value={form.markdown} {carta} />
{:else}
  <MarkdownEditor mode="split" bind:value {carta} />

  {#if value}
    <form method="POST">
      <input type="hidden" name="markdown" {value} />
      <input type="submit" value="Submit" />
    </form>
  {/if}
{/if}
