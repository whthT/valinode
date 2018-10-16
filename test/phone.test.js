import Valinode from "../src";

test("Phone", function () {
    let valinode = new Valinode()
        .rules({
            test: "phone"
        })
        .requests({
            test: "2018-09-25"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("phone", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);
    expect(valinode.fails()).toBe(true);

    valinode = valinode.requests({
        test: "+442071838750"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
    valinode = valinode.requests({
        test: "+905555555555"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    expect(valinode.fails()).toBe(false);
});