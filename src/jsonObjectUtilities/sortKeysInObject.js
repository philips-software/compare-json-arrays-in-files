const sortKeysInObject = ({ jsonObject }) => {
  const jsonObjectWithSortedKeys = {}
  Object.keys(jsonObject).sort().forEach(key => {
    jsonObjectWithSortedKeys[key] = jsonObject[key]
  })
  return jsonObjectWithSortedKeys
}

module.exports = {
  sortKeysInObject
}
