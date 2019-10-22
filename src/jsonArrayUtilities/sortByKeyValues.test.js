const { sortByKeyValues } = require('./sortByKeyValues')

describe('Custom sorter for an array of JSON objects', () => {
  it('sorts the objects alphabeticaly based on the values of only the keys specified (in that order) in the keys parameter' +
  '', () => {
    const input = [
      {
        key1: 'Amsterdam',
        key2: 'x',
        key3: 'y',
        key4: 'z'
      },
      {
        key1: 'Paris',
        key2: 'a',
        key3: 'ab',
        key4: 'c'
      },
      {
        key1: 'London',
        key2: 'a',
        key3: 'a',
        key4: 'bc'
      }
    ]
    const keysOrder = ['key2', 'key3', 'key4'] // key1 does not matter for the comparison
    const actualOutput = input.sort(sortByKeyValues({ keysOrder }))
    const expectedOutput = [
      {
        key1: 'London',
        key2: 'a',
        key3: 'a',
        key4: 'bc'
      },
      {
        key1: 'Paris',
        key2: 'a',
        key3: 'ab',
        key4: 'c'
      },
      {
        key1: 'Amsterdam',
        key2: 'x',
        key3: 'y',
        key4: 'z'
      }
    ]

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns the same array as input, if the input only has one element' +
  '', () => {
    const input = [
      {
        key1: 'Amsterdam',
        key2: 'x',
        key3: 'y',
        key4: 'z'
      }
    ]
    const keysOrder = ['key2', 'key3', 'key4'] // key1 does not matter for the comparison
    const actualOutput = input.sort(sortByKeyValues({ keysOrder }))
    const expectedOutput = [
      {
        key1: 'Amsterdam',
        key2: 'x',
        key3: 'y',
        key4: 'z'
      }
    ]

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns an empty list if the list to be sorted is empty' +
  '', () => {
    const input = []
    const keysOrder = ['key2', 'key3', 'key4']
    const actualOutput = input.sort(sortByKeyValues({ keysOrder }))
    const expectedOutput = [
    ]

    expect(actualOutput)
      .toEqual(expectedOutput)
  })
})
