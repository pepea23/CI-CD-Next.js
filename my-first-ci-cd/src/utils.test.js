describe('test ue test jest', () => {
  test('test package jest', () => {
    expect(true).toEqual(true)
  })
})

describe('FizzBuzzz', () => {
  test('test input 1 should return 1',() => {
       const input = 1
       actual = checkFizzBuzz(input)
       expected = 1
       expect(expected).toEqual(actual)
   })
})
