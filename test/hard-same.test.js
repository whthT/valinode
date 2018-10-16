import Valinode from "../src";

test("Hard Same", function () {
    let valinode = new Valinode()
        .rules({
            test: "hard_same:test2"
        })
        .requests({
            test: "2018-09-25",
            test2: "2018-09-26"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("hard_same", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: 12,
        test2: "12"
    }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("hard_same", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: 12,
        test2: 12
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);

    valinode = valinode.requests({
        test: "12",
        test2: "12"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});