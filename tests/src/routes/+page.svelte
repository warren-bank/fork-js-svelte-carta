<script context="module">
  const title = 'Tests'

  const top_level_dirs = [
    {
      name: 'SSR (Server-Side Rendering) only',
      path: 'ssr-only'
    },
    {
      name: 'CSR (Client-Side Rendering) only',
      path: 'csr-only'
    },
    {
      name: 'SSR and CSR',
      path: 'ssr-and-csr'
    },
  ]
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h2><u>{title}</u></h2>

{#each top_level_dirs as tld (tld.path)}
  <h3>{tld.name}</h3>
  <ul>
    <li><a target="_blank" href={`/${tld.path}/plugin-code`}>plugin-code</a></li>
  </ul>
{/each}
