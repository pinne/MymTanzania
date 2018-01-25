let contentful = require('contentful')
const space = 'kl86qt22vgc9'
const accessToken = 'faa977ce007881a00f698b518482190e13c037b0b1011766101aad9c6bb5f107'
let client = contentful.createClient({ space, accessToken })

const fetchEntry = async entry => {
  try {
    const result = await client.getEntry(entry)
    const status = result.status
    if (status >= 400 && status <= 409) {
      throw new Error(`HTTP ${status} error`)
    }
    return result.fields
  } catch (error) {
    return error
  }
}

module.exports.fetchEntry = fetchEntry
