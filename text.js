describe("A suite of basic functions", function() {
    var name;

    it("sayHello", function() {
        name = "Conan";
        var exp = "Hello Conan";
        expect(exp).toEqual(sayHello(name));
    });
});
/*
it("reverse word",function(){
    expect("DCBA").toEqual(reverse("ABCD"));
});
*/