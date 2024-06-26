<script lang="ts">
  import {PreRendered} from 'carta-md'

  import 'carta-md/default.css'

  export let data
</script>

<svelte:head>
  <title>Test: plugin-code</title>
</svelte:head>

<PreRendered html={data.html} />
