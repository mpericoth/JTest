function suma_de_elementos_positivos(number) {
    if (number.length == 0) {
        return 0;
    } else {
        let suma=0;
        for (let i = 0; i < number.length; i++) {
            if(number[i]>=0)
            suma +=number[i];
        }
        return suma;
    }
}

describe('kata #2: Suma de elementos posisitvos de un array', () => {
    test('[]', () => {
        expect(suma_de_elementos_positivos([])).toBe(0);
    }), test('[1,2,3,4,5]', () => {
        expect(suma_de_elementos_positivos([1,2,3,4,5])).toBe(15);
    }), test('[1,-2,3,4,5]', () => {
        expect(suma_de_elementos_positivos([1,-2,3,4,5])).toBe(13);
    }), test('[-1,2,3,4,-5]', () => {
        expect(suma_de_elementos_positivos([-1,2,3,4,-5])).toBe(9);
    }), test('[-1,-2,-3,-4,-5]', () => {
        expect(suma_de_elementos_positivos([-1,-2,-3,-4,-5])).toBe(0);
    });
});