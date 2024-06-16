<script lang="ts">
  import { Carta, MarkdownEditor } from 'carta-md'
  import { code } from '@cartamd/plugin-code'

  import 'carta-md/default.css'

  const carta = new Carta({
    extensions: [
      code()
    ]
  })

  let value = "```js\nconsole.log('Hello, World!');\n```"
</script>

<MarkdownEditor mode="split" bind:value {carta} />
