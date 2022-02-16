function repiteString(texto, repeticion) {
    let rep = "";
    for (let i = 0; i < repeticion; i++)
        rep += texto;
    return rep;
}

describe('Kata #0: repiteString', () => {
    test('de 0 es 0', () => {
        expect(repiteString('Javascript', 0)).toBe("");
    }), test('de 1 es 1', () => {
        expect(repiteString('miau', 1)).toBe("miau");
    }), test('de 2 es 3', () => {
        expect(repiteString('hola', 3)).toBe("holaholahola");
    }), test('de 3 es 6', () => {
        expect(repiteString('?', 10)).toBe('??????????');
    });
});
