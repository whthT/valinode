import Valinode from "../src";

test("Nullable:required", function () {
    let valinode = new Valinode()
        .rules({
            test: "required"
        })
        .requests({
            test: ""
        })
        .validate();

    expect(valinode.get("test").length).toBe(1);

    expect(valinode.isFailedRule("required", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "wwww"
    }).rules({
        test: "nullable|required"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);

    valinode = valinode.requests({
        test: ""
    }).rules({
        test: "required|nullable"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
    expect(valinode.errorCount("test")).toBe(0);
});

test("Nullable:min:integer", function () {
    let valinode = new Valinode()
        .requests({
            test: "5"
        }).rules({
            test: "min:6"
        }).validate();

    expect(valinode.errorCount()).toBe(1);
    expect(valinode.isFailedRule("min", "test")).toBeInstanceOf(Object);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: ""
    }).rules({
        test: "nullable|min:6"
    }).validate();

    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});

test("Nullable:min:array", function () {
    let valinode = new Valinode()
        .requests({
            test: [1],
        }).rules({
            test: "array|min:2"
        }).validate();
    expect(valinode.errorCount()).toBe(1);
    expect(valinode.isFailedRule("min", "test")).toBeInstanceOf(Object);
    expect(valinode.fails()).toBe(true);

    valinode = valinode
        .requests({
            test: []
        })
        .rules({
            test: "min:2"
        }).validate();

    expect(valinode.errorCount()).toBe(1);

    valinode = valinode
        .requests({
            test: []
        })
        .rules({
            test: "nullable|min:2"
        }).validate();


    expect(valinode.errorCount()).toBe(0)
});

test("Nullable:max", function () {
    let valinode = new Valinode()
        .requests({
            test: "5"
        }).rules({
            test: "max:4"
        }).validate();
    expect(valinode.errorCount()).toBe(1);
    expect(valinode.isFailedRule("max", "test")).toBeInstanceOf(Object);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: ""
    }).rules({
        test: "nullable|max:6"
    }).validate();

    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
})
