
// const utilities = require('./utilities')
const { sortByKeyValues } = require('./sortByKeyValues')
const { sortKeysInObject } = require('../jsonObjectUtilities/sortKeysInObject')

const arrayContainsObject = ({ jsonArray, jsonObjToSearch }) => {
  return jsonArray
    .find(elem =>
      // TODO nice to have: find another way to compare equality,
      // to become independent of the ordering of keys
      JSON.stringify(elem) === JSON.stringify(jsonObjToSearch)
    ) !== undefined
}

const getCommonElementsFromArrays = ({ leftJsonArr, rightJsonArr }) => {
  return leftJsonArr.filter(leftJsonObj =>
    arrayContainsObject({ jsonArray: rightJsonArr, jsonObjToSearch: leftJsonObj })
  )
}

const getLeftOnlyElementsFromArrays = ({ leftJsonArr, rightJsonArr }) => {
  return leftJsonArr.filter(jsonObjLeft =>
    !arrayContainsObject({ jsonArray: rightJsonArr, jsonObjToSearch: jsonObjLeft })
  )
}

const sortObjectKeysAndArrayElements = ({ unsortedArray }) => {
  if (unsortedArray.length === 0) {
    return []
  }
  const keysOrder = Object.keys(unsortedArray[0]).sort()
  const unsortedArrWithOrderedKeys = unsortedArray.map(obj => sortKeysInObject({ jsonObject: obj }))
  return unsortedArrWithOrderedKeys.sort(sortByKeyValues({ keysOrder }))
}

const getCommonElements = ({ leftJsonArr, rightJsonArr }) => {
  if (leftJsonArr.length === 0 || rightJsonArr.length === 0) {
    return []
  }

  const leftJsonArrSorted = sortObjectKeysAndArrayElements({ unsortedArray: leftJsonArr })
  const rightJsonArrSorted = sortObjectKeysAndArrayElements({ unsortedArray: rightJsonArr })

  return getCommonElementsFromArrays({
    leftJsonArr: leftJsonArrSorted, rightJsonArr: rightJsonArrSorted
  })
}

const getElementsInLeftOnly = ({ leftJsonArr, rightJsonArr }) => {
  const leftJsonArrSorted = sortObjectKeysAndArrayElements({ unsortedArray: leftJsonArr })
  const rightJsonArrSorted = sortObjectKeysAndArrayElements({ unsortedArray: rightJsonArr })

  return getLeftOnlyElementsFromArrays({
    leftJsonArr: leftJsonArrSorted, rightJsonArr: rightJsonArrSorted
  })
}

module.exports = {
  getCommonElements,
  getElementsInLeftOnly
}
