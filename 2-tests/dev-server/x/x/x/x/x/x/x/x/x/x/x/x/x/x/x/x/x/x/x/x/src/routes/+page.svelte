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

<h3>SSR (Server-Side Rendering) only</h3>
<ul>
  <li>all plugins
    <ul>
      <li><a target="_blank" href="/ssr-only/all-plugins/01-editor">editor</a></li>
      <li><a target="_blank" href="/ssr-only/all-plugins/02-editor-with-form">editor with form</a></li>
      <li><a target="_blank" href="/ssr-only/all-plugins/03-prerender">prerender</a></li>
    </ul>
  </li>
  <li>plugin-code
    <ul>
      <li><a target="_blank" href="/ssr-only/plugin-code/01-editor">editor</a></li>
      <li><a target="_blank" href="/ssr-only/plugin-code/02-editor-with-form">editor with form</a></li>
      <li><a target="_blank" href="/ssr-only/plugin-code/03-prerender">prerender</a></li>
    </ul>
  </li>
</ul>

<h3>CSR (Client-Side Rendering) only</h3>
<ul>
  <li>all plugins
    <ul>
      <li><a target="_blank" href="/csr-only/all-plugins/01-editor">editor</a></li>
      <li><a target="_blank" href="/csr-only/all-plugins/02-editor-with-form">editor with form</a></li>
    </ul>
  </li>
  <li>plugin-code
    <ul>
      <li><a target="_blank" href="/csr-only/plugin-code/01-editor">editor</a></li>
      <li><a target="_blank" href="/csr-only/plugin-code/02-editor-with-form">editor with form</a></li>
    </ul>
  </li>
</ul>

<h3>SSR and CSR</h3>
<ul>
  <li>all plugins
    <ul>
      <li><a target="_blank" href="/ssr-and-csr/all-plugins/01-editor">editor</a></li>
      <li><a target="_blank" href="/ssr-and-csr/all-plugins/02-editor-with-form">editor with form</a></li>
    </ul>
  </li>
  <li>plugin-code
    <ul>
      <li><a target="_blank" href="/ssr-and-csr/plugin-code/01-editor">editor</a></li>
      <li><a target="_blank" href="/ssr-and-csr/plugin-code/02-editor-with-form">editor with form</a></li>
    </ul>
  </li>
</ul>
