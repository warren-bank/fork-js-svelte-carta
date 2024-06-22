<script lang="ts">
  import { Carta, MarkdownEditor } from 'carta-md'
  import { code } from '@cartamd/plugin-code'

  import 'carta-md/default.css'

  const carta = new Carta({
    extensions: [
      code()
    ]
  })

  let value = "```js\n  console.log('Hello, World!');\n```"
</script>

<svelte:head>
  <title>Test: plugin-code</title>
</svelte:head>

<MarkdownEditor mode="split" bind:value {carta} />
