const program = require('commander')
const chalk = require('chalk')
const {
  setVerbose,
  infoMessage,
  warningMessage,
  errorMessage
} = require('./logger/logger')
const { readJsonFile } = require('./fileReaders/fileReaders')
const { getCommonElements, getElementsInLeftOnly } = require('./jsonArrayUtilities/compareArrays')
const { writeToJsonFile } = require('./fileWriters/fileWriters')
let left
let right
program
  .version('0.0.1', '-v, --version')
  .arguments('<leftFile> <rightFile>')
  .action(function (leftFile, rightFile) {
    left = leftFile
    right = rightFile
  })
  .option('--verbose', 'Verbose output of commands and errors')
  .parse(process.argv)

const {
  verbose
} = program

const commonElemsFilename = 'commonElements.json'
const leftOnlyFilename = 'elementsInLeftOnly.json'
const rightOnlyFilename = 'elementsInRightOnly.json'

const compareJsonFiles = async () => {
  setVerbose(verbose)
  infoMessage(chalk`compareJsonFiles.\nProgram arguments:\n    left={blue ${left}}\n    right={blue ${right}}\n    verbose={blue ${verbose}}\n`)

  if (!left || !right) {
    errorMessage(chalk`Error: {red left and right parameters should be specified!} Program exits now.`)
    return
  }
  let leftJsonArr
  let rightJsonArr
  try {
    leftJsonArr = await readJsonFile({ jsonFilename: left })
    infoMessage(chalk`Successfully read file: {blue ${left}}`)

    rightJsonArr = await readJsonFile({ jsonFilename: right })
    infoMessage(chalk`Successfully read file: {blue ${right}}\n`)
  } catch (e) {
    return
  }

  infoMessage(chalk`Comparing the {underline {cyan number of elements}} in both files...`)
  if (leftJsonArr.length === rightJsonArr.length) {
    infoMessage(chalk`\tThe left and right json arrays have the same number of elements: {blue ${leftJsonArr.length}}\n`)
  } else {
    warningMessage(chalk`\tThe left and right json arrays {yellow don't have the same number of elements}: 
          - {blue ${left}}  has {bgYellow {red ${leftJsonArr.length}}} elements, 
          - {blue ${right}}  has {bgYellow {red ${rightJsonArr.length}}} elements\n`)
  }

  infoMessage(chalk`Comparing {underline {cyan contents}} of left and right json arrays...`)
  const commonElements = getCommonElements({ leftJsonArr, rightJsonArr })
  const elementsInLeftOnly = getElementsInLeftOnly({
    leftJsonArr,
    rightJsonArr
  })
  const elementsInRightOnly = getElementsInLeftOnly({
    leftJsonArr: rightJsonArr,
    rightJsonArr: leftJsonArr
  })

  await writeToJsonFile({ jsonFilename: commonElemsFilename, jsonData: commonElements })
  await writeToJsonFile({ jsonFilename: leftOnlyFilename, jsonData: elementsInLeftOnly })
  await writeToJsonFile({ jsonFilename: rightOnlyFilename, jsonData: elementsInRightOnly })
  infoMessage(chalk`\tSuccessfully wrote comparison outcome:
  \t - {red ${commonElements.length}} {green common} elements to file {blue ${commonElemsFilename}}
  \t - {red ${elementsInLeftOnly.length}} elements {green only in left} to file {blue ${leftOnlyFilename}}
  \t - {red ${elementsInRightOnly.length}} elements {green only in right} to file {blue ${rightOnlyFilename}}
  `)
}

compareJsonFiles()
