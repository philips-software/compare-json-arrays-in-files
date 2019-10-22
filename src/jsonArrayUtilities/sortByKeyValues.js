const sortByKeyValues = ({ keysOrder }) => {
  return function (lhsJson, rhsJson) {
    const keyValuesSeparator = '$'
    let lhsString = ''
    let rhsString = ''
    keysOrder.forEach(key => {
      lhsString += lhsJson[key] + keyValuesSeparator
      rhsString += rhsJson[key] + keyValuesSeparator
    })
    return lhsString.localeCompare(rhsString)
  }
}

module.exports = {
  sortByKeyValues
}
