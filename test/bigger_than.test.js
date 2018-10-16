import Valinode from "../src";

test("Bigger than:integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "bigger_than:test2"
        })
        .requests({
            test: 4,
            test2: 5
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("bigger_than", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: 5,
        test2: 4
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Bigger than:string", function () {
    let valinode = new Valinode()
        .rules({
            test: "bigger_than:test2"
        })
        .requests({
            test: "a",
            test2: "b"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("bigger_than", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "b",
        test2: "a"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Bigger than:date", function () {
    let valinode = new Valinode()
        .rules({
            test: "bigger_than:test2"
        })
        .requests({
            test: "2018-09-26",
            test2: "2018-09-27"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("bigger_than", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "2018-09-27",
        test2: "2018-09-26"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});