function elimna_primer_y_ultimo(palabra) {

   return palabra.replace(/\s+/g, '');

}

describe("Kata #0: elimna_primer_y_ultimo", () => {
  test("de 0 es 0", () => {
    expect(elimna_primer_y_ultimo("buenos días")).toBe("buenosdías");
  }),
    test("de 1 es 1", () => {
      expect(elimna_primer_y_ultimo(" pastel de zanahoria    ")).toBe(
        "pasteldezanahoria"
      );
    }),
    test("de 2 es 3", () => {
      expect(elimna_primer_y_ultimo("dábale arroz a la zorra el abad")).toBe(
        "dábalearrozalazorraelabad"
      );
    });
});
