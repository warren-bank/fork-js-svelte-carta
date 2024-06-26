export const actions = {
  default: async (event) => {
    //const {url, route, cookies, params, request, setHeaders, fetch, isDataRequest, getClientAddress, platform, locals} = event

    const data     = await event.request.formData()
    const markdown = data.get('markdown')

    return {markdown}
  }
}
