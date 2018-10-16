import Valinode from "../src";


test("String", function () {
    let valinode = new Valinode()
        .rules({
            test: "string"
        })
        .requests({
            test: 12
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("string", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "string"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});