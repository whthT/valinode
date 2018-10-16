import Valinode from "../src";


test("Integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "integer"
        })
        .requests({
            test: "string value"
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.fails()).toBe(true);
    expect(valinode.isFailedRule("integer", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: 12
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});