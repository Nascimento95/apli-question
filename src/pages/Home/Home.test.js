import {sum} from './Home'

test('ma function sum', () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
})