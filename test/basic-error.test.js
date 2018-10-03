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
    expect(valinode.isFailedRule("required", "test")).toBeInstanceOf(Object);

    valinode = valinode.requests({
        test: "12"
    }).validate();
    expect(valinode.errorCount()).toBe(0);

    valinode = valinode.requests({
            test: "tes"
        })
        .rules({
            test: "required"
        }).validate();

    expect(valinode.errorCount()).toBe(0)
});

test("Integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "integer"
        })
        .requests({
            test: "string value"
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("integer", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: 12
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});


test("String", function () {
    let valinode = new Valinode()
        .rules({
            test: "string"
        })
        .requests({
            test: 12
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("string", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: "string"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("Array", function () {
    let valinode = new Valinode()
        .rules({
            test: "array"
        })
        .requests({
            test: 12
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("array", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: []
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("Date", function () {
    let valinode = new Valinode()
        .rules({
            test: "date"
        })
        .requests({
            test: "string value"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("date", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: "2018-09-26"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

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

    valinode = valinode.requests({
        test: "bu bi"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: 5
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: [1, 2]
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: "2018-09-26"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});


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

    valinode = valinode.requests({
        test: "bu bir denemedir."
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: 5
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: [1, 2]
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: "2018-09-26"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

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

    valinode = valinode.requests({
        test: [1]
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: 2
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("In:string", function () {
    // not a valid validation
    expect(true).toBe(true)
});

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

    valinode = valinode.requests({
        test: 5,
        test2: 4
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: "b",
        test2: "a"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: "2018-09-27",
        test2: "2018-09-26"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("Smaller than:integer", function () {
    let valinode = new Valinode()
        .rules({
            test: "smaller_than:test2"
        })
        .requests({
            test: 5,
            test2: 4
        }).validate();

    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("smaller_than", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: 4,
        test2: 5
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("Smaller than:string", function () {
    let valinode = new Valinode()
        .rules({
            test: "smaller_than:test2"
        })
        .requests({
            test: "b",
            test2: "a"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("smaller_than", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: "a",
        test2: "b"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("Smaller than:date", function () {
    let valinode = new Valinode()
        .rules({
            test: "smaller_than:test2"
        })
        .requests({
            test: "2018-09-27",
            test2: "2018-09-26"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("smaller_than", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: "2018-09-26",
        test2: "2018-09-27"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

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

    valinode = valinode.requests({
        test: "4"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: "bu bir deneme içeriktir.." /* 25 characters */
    }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("between", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: "bu bir denemedir." /* 17 characters */
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: "2018-09-27"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("Same", function () {
    let valinode = new Valinode()
        .rules({
            test: "same:test2"
        })
        .requests({
            test: "2018-09-25",
            test2: "2018-09-26"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("same", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: 12,
        test2: "12"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

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

    valinode = valinode.requests({
        test: 12,
        test2: "12"
    }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("hard_same", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: 12,
        test2: 12
    }).validate();
    expect(valinode.errorCount()).toBe(0);

    valinode = valinode.requests({
        test: "12",
        test2: "12"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

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

    valinode = valinode.requests({
        test: "+442071838750"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
    valinode = valinode.requests({
        test: "+905555555555"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});

test("Email", function () {
    let valinode = new Valinode()
        .rules({
            test: "email"
        })
        .requests({
            test: "test@test"
        }).validate();
    expect(valinode.get("test").length).toBe(1);
    expect(valinode.isFailedRule("email", "test")).toBeInstanceOf(Object);
    expect(valinode.get("test")).toBeInstanceOf(Array);

    valinode = valinode.requests({
        test: "test@test.com"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
});


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

    valinode = valinode.requests({
        test: "wwww"
    }).rules({
        test: "nullable|required"
    }).validate();
    expect(valinode.errorCount()).toBe(0);

    valinode = valinode.requests({
        test: ""
    }).rules({
        test: "required|nullable"
    }).validate();
    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: ""
    }).rules({
        test: "nullable|min:6"
    }).validate();

    expect(valinode.errorCount()).toBe(0);
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

    valinode = valinode.requests({
        test: ""
    }).rules({
        test: "nullable|max:6"
    }).validate();

    expect(valinode.errorCount()).toBe(0);
})
