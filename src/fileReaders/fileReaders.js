const fs = require('fs-extra')
const chalk = require('chalk')
const {
  errorMessage
} = require('../logger/logger')

const readJsonFile = async ({ jsonFilename }) => {
  try {
    return await fs.readJSON(jsonFilename)
  } catch (e) {
    errorMessage(chalk`Could not open {blue ${jsonFilename}} for reading...`, e)
    throw e
  }
}

module.exports = {
  readJsonFile
}
