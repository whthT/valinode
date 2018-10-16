import Valinode from "../src";

test("Max:string", function () {
    let valinode = new Valinode()
        .rules({
            test: "max:5"
        })
        .requests({
            test: "bu bir denemedir."
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("max", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "bu bi"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Max:integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "max:5"
        })
        .requests({
            test: "6"
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("max", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: 5
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Max:array", function () {
    let valinode = new Valinode()
        .rules({
            test: "max:2"
        })
        .requests({
            test: [1, 2, 3]
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("max", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: [1, 2]
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Max:date", function () {
    let valinode = new Valinode()
        .rules({
            test: "max:2018-09-26"
        })
        .requests({
            test: "2018-09-27"
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("max", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "2018-09-26"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});