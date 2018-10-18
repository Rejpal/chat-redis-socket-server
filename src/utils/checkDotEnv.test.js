/* eslint-env jest */
import { checkDotEnv } from './checkDotEnv'

describe('checkDotEnv', () => {
  const dataSet = [
    { expectedResult: false, input: { PORT: 4000, REDIS_HOST: 'localhost' } },
    { expectedResult: false, input: { PORT: 4000, REDIS_PORT: 6379 } },
    { expectedResult: false, input: { REDIS_HOST: 'localhost', REDIS_PORT: 6379 } }
  ]
  dataSet.forEach((test) => {
    it(`should throw`, () => {
      expect(() => { checkDotEnv(test.input) }).toThrow()
    })
  })

  it(`should not throw`, () => {
    expect(checkDotEnv({ PORT: 4000, REDIS_HOST: 'localhost', REDIS_PORT: 6379 })).toEqual(true)
  })
})
