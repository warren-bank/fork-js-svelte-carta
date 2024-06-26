<script lang="ts">
  import {PreRendered} from 'carta-md'

  import 'carta-md/default.css'
  import '@cartamd/plugin-tikz/fonts.css'
  import '@cartamd/plugin-slash/default.css'
  import '@cartamd/plugin-emoji/default.css'
  import '@cartamd/plugin-code/default.css'
  import '@cartamd/plugin-anchor/default.css'
  import '@cartamd/plugin-attachment/default.css'

  export let data
</script>

<svelte:head>
  <title>Test: all plugins</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" />
</svelte:head>

<PreRendered html={data.html} />
