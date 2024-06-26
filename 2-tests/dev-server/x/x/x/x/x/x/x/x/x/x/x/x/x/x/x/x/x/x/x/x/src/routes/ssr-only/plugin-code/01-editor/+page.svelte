<script lang="ts">
  import {Carta, MarkdownEditor} from 'carta-md'
  import {code} from '@cartamd/plugin-code'

  import * as placeholder from '$lib/placeholder'

  import 'carta-md/default.css'

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
    padding: 0px !important;
    margin: 0px !important;
  }
</style>

<MarkdownEditor mode="split" bind:value {carta} />
