const { getCommonElements, getElementsInLeftOnly } = require('./compareArrays')

describe('getCommonElements', () => {
  it('finds the two common elements of the arrays,' +
  'when the elements have the same keys order' +
  '', () => {
    const inputLeft = [
      {
        drink: 'water',
        cake: 'brownie'
      },
      {
        drink: 'apple juice',
        cake: 'muffin'
      }
    ]
    const inputRight = [
      {
        drink: 'orange juice',
        cake: 'carrot cake'
      },
      {
        drink: 'apple juice',
        cake: 'muffin'
      },
      {
        drink: 'water',
        cake: 'brownie'
      }
    ]
    const actualOutput = getCommonElements({ leftJsonArr: inputLeft,
      rightJsonArr: inputRight })
    const expectedOutput = [
      {
        cake: 'brownie',
        drink: 'water'
      },
      {
        cake: 'muffin',
        drink: 'apple juice'
      }
    ]

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('finds the two common elements of the two arrays' +
  'when the elements have a different keys order' +
  '', () => {
    const inputLeft = [
      {
        drink: 'water',
        cake: 'brownie'
      },
      {
        cake: 'muffin',
        drink: 'apple juice'
      }
    ]
    const inputRight = [
      {
        drink: 'orange juice',
        cake: 'carrot cake'
      },
      {
        drink: 'apple juice',
        cake: 'muffin'
      },
      {
        drink: 'water',
        cake: 'brownie'
      }
    ]
    const actualOutput = getCommonElements({ leftJsonArr: inputLeft,
      rightJsonArr: inputRight })

    const expectedOutput = [
      {
        cake: 'brownie',
        drink: 'water'
      },
      {
        cake: 'muffin',
        drink: 'apple juice'
      }
    ]

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns an an empty list if at least one of the two arrays is empty' +
  '', () => {
    const inputLeft = [{ key1: 'a' }]
    const inputRight = []
    const actualOutput = getCommonElements({ leftJsonArr: inputLeft,
      rightJsonArr: inputRight })

    const expectedOutput = []

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns an an empty list if the two arrays are not empty and have no common elements' +
  '', () => {
    const inputLeft = [{ key1: 'a' }]
    const inputRight = [{ key1: 'b' }]
    const actualOutput = getCommonElements({ leftJsonArr: inputLeft,
      rightJsonArr: inputRight })

    const expectedOutput = []

    expect(actualOutput)
      .toEqual(expectedOutput)
  })
})

describe('getElementsInLeftOnly', () => {
  it('finds the elements which are in the left array but not in the right one,' +
  'when the left array has such elements' +
  '', () => {
    const inputLeft = [
      { key: 'value 1 common' },
      { key: 'value 2 only in left' }
    ]
    const inputRight = [
      { key: 'value 1 common' },
      { key: 'value 3 only in right' }
    ]
    const actualOutput = getElementsInLeftOnly({ leftJsonArr: inputLeft,
      rightJsonArr: inputRight })
    const expectedOutput = [
      { key: 'value 2 only in left' }
    ]

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns an empty array when the left array has no elements' +
  '', () => {
    const inputLeft = []
    const inputRight = [
      { key: 'value 1 common' },
      { key: 'value 3 only in right' }
    ]
    const actualOutput = getElementsInLeftOnly({ leftJsonArr: inputLeft,
      rightJsonArr: inputRight })
    const expectedOutput = []

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns an empty array, when both the left array and the right one are empty' +
  '', () => {
    const inputLeft = []
    const inputRight = []
    const actualOutput = getElementsInLeftOnly({ leftJsonArr: inputLeft,
      rightJsonArr: inputRight })
    const expectedOutput = []

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns the sorted left array, when right one is empty' +
  '', () => {
    const inputLeft = [
      { key1: 'B', key2: '2' },
      { key2: '1', key1: 'A' }
    ]
    const inputRight = []
    const actualOutput = getElementsInLeftOnly({ leftJsonArr: inputLeft, rightJsonArr: inputRight })
    const expectedOutput = [
      { key1: 'A', key2: '1' },
      { key1: 'B', key2: '2' }
    ]

    expect(actualOutput)
      .toEqual(expectedOutput)
  })
})
