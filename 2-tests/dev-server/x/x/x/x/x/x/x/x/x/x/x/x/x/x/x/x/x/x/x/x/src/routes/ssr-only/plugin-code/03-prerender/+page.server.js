import {Carta} from 'carta-md'
import {code}  from '@cartamd/plugin-code'

import * as placeholder from '$lib/placeholder'

const carta = new Carta({
  extensions: [
    code({
      onError: (e) => {console.log(e.message)}
    })
  ]
})

export async function load(event) {
  //const {url, route, cookies, params, request, setHeaders, fetch, isDataRequest, getClientAddress, platform, locals, parent, depends} = event

  const html = await carta.render(placeholder.getMarkdown())

  return {html}
}
