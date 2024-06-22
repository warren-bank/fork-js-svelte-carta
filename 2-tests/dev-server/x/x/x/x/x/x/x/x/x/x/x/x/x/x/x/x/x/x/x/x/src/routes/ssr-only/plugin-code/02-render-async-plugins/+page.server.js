import {Carta} from 'carta-md'
import {code} from '@cartamd/plugin-code'

const carta = new Carta({
  extensions: [
    code({
      onError: (e) => {console.log(e.message)}
    })
  ]
})

export async function load(event) {
  //const {url, route, cookies, params, request, setHeaders, fetch, isDataRequest, getClientAddress, platform, locals, parent, depends} = event

  const markdown = "```js\n  console.log('Hello, World!');\n```"
  const html     = await carta.render(markdown)

  return {html}
}
