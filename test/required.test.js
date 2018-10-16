import Valinode from "../src";

test("Required", function () {
    let valinode = new Valinode()
        .rules({
            test: "required"
        })
        .requests({
            test: ""
        })
        .validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);
    expect(valinode.isFailedRule("required", "test")).toBeInstanceOf(Object);

    valinode = valinode.requests({
        test: "12"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);

    valinode = valinode.requests({
            test: "tes"
        })
        .rules({
            test: "required"
        }).validate();

    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});
