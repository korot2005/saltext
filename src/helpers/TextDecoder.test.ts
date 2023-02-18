import {textEncoder} from "./TextDecoder";


describe('textDecoder', () => {
    test('Проверка функции кодировки', () => {
        expect(textEncoder('Солевой язык')).toBe('Сосолесевосой ясязысык')
    })
    // test('Проверка функции декодера', () => {
    //     expect(textEncoder('Сосолесевосой ясязысык')).toBe('Солевой язык')
    // })
    test('Проверка на примере "эволюция"', () => {
        expect(textEncoder('эволюция')).toBe('Эсэвосолюсюцисияся')
    })
    test('Проверка на примере "абориген', () => {
        expect(textEncoder('абориген')).toBe('Асабосорисигесен')
    })
    test('Проверка на примере "ручка', () => {
        expect(textEncoder('ручка')).toBe('Русучкаса')
    })
})