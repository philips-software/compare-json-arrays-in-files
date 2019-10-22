const fs = require('fs-extra')
const chalk = require('chalk')
const { errorMessage } = require('../logger/logger')

const writeToJsonFile = async ({ jsonFilename, jsonData }) => {
  try {
    await fs.writeJSON(jsonFilename, jsonData, { spaces: 2, eol: '\n' })
  } catch (e) {
    errorMessage(chalk`Could not write to {blue ${jsonFilename}}`, e)
    throw e
  }
}

module.exports = {
  writeToJsonFile
}
