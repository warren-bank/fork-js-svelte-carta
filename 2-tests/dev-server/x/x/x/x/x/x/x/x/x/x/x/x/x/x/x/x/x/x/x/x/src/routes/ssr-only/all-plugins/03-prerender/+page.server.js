import {Carta}      from 'carta-md'
import {tikz}       from '@cartamd/plugin-tikz'
import {math}       from '@cartamd/plugin-math'
import {slash}      from '@cartamd/plugin-slash'
import {emoji}      from '@cartamd/plugin-emoji'
import {code}       from '@cartamd/plugin-code'
import {anchor}     from '@cartamd/plugin-anchor'
import {attachment} from '@cartamd/plugin-attachment'

import * as placeholder from '$lib/placeholder'

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
    code({
      onError: (e) => {console.log(e.message)}
    }),
    anchor(),
    attachment({
      supportedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'],
      upload: async (file) => `https://beartocode.github.io/carta/${file.name}`
    })
  ]
})

export async function load(event) {
  //const {url, route, cookies, params, request, setHeaders, fetch, isDataRequest, getClientAddress, platform, locals, parent, depends} = event

  const html = await carta.render(placeholder.getMarkdown())

  return {html}
}
