export default {
  go (url) {
    const serverUrl = process.env.SERVER_URL
    if (url.indexOf(serverUrl) === 0) {
      location.assign(url)
    }
  }
}
