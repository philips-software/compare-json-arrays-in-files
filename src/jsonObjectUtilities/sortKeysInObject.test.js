const { sortKeysInObject } = require('./sortKeysInObject')

describe('Custom sorter of keys in a Json object', () => {
  it('re-orders the object\'s key-values, sorting keys alphabeticaly' +
  '', () => {
    const input = {
      keyC: '1',
      keyA: '2',
      keyB: '3'
    }
    const actualOutput = sortKeysInObject({ jsonObject: input })
    const expectedOutput = {
      keyA: '2',
      keyB: '3',
      keyC: '1'
    }

    expect(actualOutput)
      .toEqual(expectedOutput)
  })

  it('returns the same object of it only has one key' +
  '', () => {
    const input = {
      oneKeyOnly: 'value'
    }
    const actualOutput = sortKeysInObject({ jsonObject: input })
    const expectedOutput = {
      oneKeyOnly: 'value'
    }

    expect(actualOutput)
      .toEqual(expectedOutput)
  })
})
