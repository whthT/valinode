import Valinode from "../src";

test("Min:string", function () {
    let valinode = new Valinode()
        .rules({
            test: "min:5"
        })
        .requests({
            test: "bu"
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("min", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "bu bir denemedir."
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Min:integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "min:5"
        })
        .requests({
            test: "2"
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("min", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: 5
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Min:array", function () {
    let valinode = new Valinode()
        .rules({
            test: "min:2"
        })
        .requests({
            test: [1]
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("min", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: [1, 2]
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Min:date", function () {
    let valinode = new Valinode()
        .rules({
            test: "min:2018-09-26"
        })
        .requests({
            test: "2018-09-25"
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("min", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "2018-09-26"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});