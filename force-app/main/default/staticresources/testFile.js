describe("true-true demo assert", () => {

    it(`validate component`, done => { 
        $T.createComponent(`c:mainComponent`, {}, true)
            .then(cmp => {
                expect(cmp.get("v.int")).toBe(0);
                cmp.increment();
                expect(cmp.get("v.int")).toBe(1);
                done();
            })
        });
})