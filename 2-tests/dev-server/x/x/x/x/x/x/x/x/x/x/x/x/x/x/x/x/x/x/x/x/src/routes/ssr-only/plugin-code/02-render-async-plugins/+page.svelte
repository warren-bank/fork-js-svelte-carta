<script lang="ts">
  import {PreRendered} from 'carta-md'

  import 'carta-md/default.css'

  export let data
</script>

<PreRendered html={data.html} />
