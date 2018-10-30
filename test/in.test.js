import Valinode from "../src";

test("In:array", function () {
    let valinode = new Valinode()
        .rules({
            test: "in:[1,2]"
        })
        .requests({
            test: [3]
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("in", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: [1]
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("In:integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "in:[1,2]"
        })
        .requests({
            test: 3
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("in", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: 2
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("In:integer:flat", function () {
    let valinode = new Valinode()
        .rules({
            test: "in:1,2"
        })
        .requests({
            test: 3
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("in", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: 2
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("In:string", function () {
    // not a valid validation
    expect(true).toBe(true)
});
