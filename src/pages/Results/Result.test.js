import {formatJobList, formatFetchParams} from './Results'

test('La function formatJobList', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
})

describe('la function formatFetchParams', () => {
    test("n'ajoute pas de & si il y a une seul reponse et prend true ou false de l'user", () => {
        const expectedResult1 = 'a1=true'
        expect(formatFetchParams({1:true})).toEqual(expectedResult1)
    })
    test("ajoute  & si il y a plus d'une reponse et prend true ou false de l'user", () => {
        const expectedResult1 = 'a1=true&a2=false'
        expect(formatFetchParams({1:true,2:false})).toEqual(expectedResult1)
    })

})