describe("true-true demo assert", () => {
    afterEach(() => {
        $T.clearRenderedTestComponents();
    });

    describe("1", () => {
        it(`true`, () => {
            expect(true).toBe(true);
        })
    })
})