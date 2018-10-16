import Valinode from "../src";

test("Between:integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "between:4,5"
        })
        .requests({
            test: "2"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("between", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "4"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Between:string", function () {
    let valinode = new Valinode()
        .rules({
            test: "between:10,20"
        })
        .requests({
            test: "bu bir de" /* 9 characters */
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("between", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "bu bir deneme içeriktir.." /* 25 characters */
    }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("between", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "bu bir denemedir." /* 17 characters */
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Between:date", function () {
    let valinode = new Valinode()
        .rules({
            test: "between:2018-09-27,2018-09-29"
        })
        .requests({
            test: "2018-09-25"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("between", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "2018-09-27"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});