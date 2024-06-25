<script lang="ts">
  import {Carta, MarkdownEditor} from 'carta-md'

  import {tikz}       from '@cartamd/plugin-tikz'
  import {math}       from '@cartamd/plugin-math'
  import {slash}      from '@cartamd/plugin-slash'
  import {emoji}      from '@cartamd/plugin-emoji'
  import {code}       from '@cartamd/plugin-code'
  import {anchor}     from '@cartamd/plugin-anchor'
  import {attachment} from '@cartamd/plugin-attachment'

  import 'carta-md/default.css'
  import '@cartamd/plugin-tikz/fonts.css'
  import '@cartamd/plugin-slash/default.css'
  import '@cartamd/plugin-emoji/default.css'
  import '@cartamd/plugin-code/default.css'
  import '@cartamd/plugin-anchor/default.css'
  import '@cartamd/plugin-attachment/default.css'

  const carta = new Carta({
    extensions: [
      tikz(),
      math(),
      slash(),
      emoji({
        accessible:    true,
        padSpaceAfter: false,
        emoticon:      false
      }),
      code(),
      anchor(),
      attachment({
        supportedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'],
        upload: async (file) => `https://beartocode.github.io/carta/${file.name}`
      })
    ]
  })

  let value = "```js\nconsole.log('Hello, World!');\n```"
</script>

<svelte:head>
  <title>Test: all plugins</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" />

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
