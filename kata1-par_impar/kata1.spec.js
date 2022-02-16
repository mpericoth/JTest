function par_o_impar(number){
    if(number%2==0){
        return "par";
    }else
        return "impar";
}
describe("Kata #1: par o impar", ()=>{
    test('2 es par', ()=>{
        expect(par_o_impar(2)).toBe("par");
    }), test('5 es impar', ()=>{
        expect(par_o_impar(5)).toBe("impar");
    })
});