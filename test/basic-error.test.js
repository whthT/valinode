import Bubba from "../src";

test("Required", function() {
    let bubba = new Bubba()
        .rules({test: "required"})
        .requests({test: ""}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.get("test")).toBeInstanceOf(Array);
    expect(bubba.isFailedRule("required")).toBeInstanceOf(Object);
    bubba = bubba.requests({test: "12"}).validate();

    expect(bubba.get("test").length).toBe(0);
    expect(bubba.errorCount()).toBe(0);
});

test("Integer", function() {
    let bubba = new Bubba()
        .rules({test: "integer"})
        .requests({test: "string value"}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("integer")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 12}).validate();
    expect(bubba.errorCount()).toBe(0);
});


test("String", function() {
    let bubba = new Bubba()
        .rules({test: "string"})
        .requests({test: 12}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("string")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "string"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Array", function() {
    let bubba = new Bubba()
        .rules({test: "array"})
        .requests({test: 12}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("array")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: []}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Date", function() {
    let bubba = new Bubba()
        .rules({test: "date"})
        .requests({test: "string value"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("date")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "2018-09-26"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Max:string", function() {
    let bubba = new Bubba()
        .rules({test: "max:5"})
        .requests({test: "bu bir denemedir."}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("max")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "bu bi"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Max:integer", function() {
    let bubba = new Bubba()
        .rules({test: "max:5"})
        .requests({test: "6"}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("max")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 5}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Max:array", function() {
    let bubba = new Bubba()
        .rules({test: "max:2"})
        .requests({test: [1,2,3]}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("max")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: [1,2]}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Max:date", function() {
    let bubba = new Bubba()
        .rules({test: "max:2018-09-26"})
        .requests({test: "2018-09-27"}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("max")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "2018-09-26"}).validate();
    expect(bubba.errorCount()).toBe(0);
});


test("Min:string", function() {
    let bubba = new Bubba()
        .rules({test: "min:5"})
        .requests({test: "bu"}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("min")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "bu bir denemedir."}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Min:integer", function() {
    let bubba = new Bubba()
        .rules({test: "min:5"})
        .requests({test: "2"}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("min")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 5}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Min:array", function() {
    let bubba = new Bubba()
        .rules({test: "min:2"})
        .requests({test: [1]}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("min")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: [1,2]}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Min:date", function() {
    let bubba = new Bubba()
        .rules({test: "min:2018-09-26"})
        .requests({test: "2018-09-25"}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("min")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "2018-09-26"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("In:array", function() {
    let bubba = new Bubba()
        .rules({test: "in:[1,2]"})
        .requests({test: [3]}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("in")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: [1]}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("In:integer", function() {
    let bubba = new Bubba()
        .rules({test: "in:[1,2]"})
        .requests({test: 3}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("in")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 2}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("In:string", function() {
    // not a valid validation
    expect(true).toBe(true)
});

test("Bigger than:integer", function() {
    let bubba = new Bubba()
        .rules({test: "bigger_than:test2"})
        .requests({test: 4, test2: 5}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("bigger_than")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 5, test2: 4}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Bigger than:string", function() {
    let bubba = new Bubba()
        .rules({test: "bigger_than:test2"})
        .requests({test: "a", test2: "b"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("bigger_than")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "b", test2: "a"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Bigger than:date", function() {
    let bubba = new Bubba()
        .rules({test: "bigger_than:test2"})
        .requests({test: "2018-09-26", test2: "2018-09-27"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("bigger_than")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "2018-09-27", test2: "2018-09-26"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Smaller than:integer", function() {
    let bubba = new Bubba()
        .rules({test: "smaller_than:test2"})
        .requests({test: 5, test2: 4}).validate();

    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("smaller_than")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 4, test2: 5}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Smaller than:string", function() {
    let bubba = new Bubba()
        .rules({test: "smaller_than:test2"})
        .requests({test: "b", test2: "a"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("smaller_than")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "a", test2: "b"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Smaller than:date", function() {
    let bubba = new Bubba()
        .rules({test: "smaller_than:test2"})
        .requests({test: "2018-09-27", test2: "2018-09-26"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("smaller_than")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "2018-09-26", test2: "2018-09-27"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Between:integer", function() {
    let bubba = new Bubba()
        .rules({test: "between:4,5"})
        .requests({test: "2"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("between")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "4"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Between:string", function() {
    let bubba = new Bubba()
        .rules({test: "between:10,20"})
        .requests({test: "bu bir de" /* 9 characters */}).validate();
       
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("between")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "bu bir deneme içeriktir.." /* 25 characters */}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("between")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "bu bir denemedir." /* 17 characters */}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Between:date", function() {
    let bubba = new Bubba()
        .rules({test: "between:2018-09-27,2018-09-29"})
        .requests({test: "2018-09-25"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("between")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "2018-09-27"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Same", function() {
    let bubba = new Bubba()
        .rules({test: "same:test2"})
        .requests({test: "2018-09-25", test2: "2018-09-26"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("same")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 12, test2: "12"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Hard Same", function() {
    let bubba = new Bubba()
        .rules({test: "hard_same:test2"})
        .requests({test: "2018-09-25", test2: "2018-09-26"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("hard_same")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 12, test2: "12"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("hard_same")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: 12, test2: 12}).validate();
    expect(bubba.errorCount()).toBe(0);

    bubba = bubba.requests({test: "12", test2: "12"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Phone", function() {
    let bubba = new Bubba()
        .rules({test: "phone"})
        .requests({test: "2018-09-25"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("phone")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "+442071838750"}).validate();
    expect(bubba.errorCount()).toBe(0);
    bubba = bubba.requests({test: "+905555555555"}).validate();
    expect(bubba.errorCount()).toBe(0);
});

test("Email", function() {
    let bubba = new Bubba()
        .rules({test: "email"})
        .requests({test: "test@test"}).validate();
    expect(bubba.get("test").length).toBe(1);
    expect(bubba.isFailedRule("email")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: "test@test.com"}).validate();
    expect(bubba.errorCount()).toBe(0);
});


test("Nullable:required", function() {
    let bubba = new Bubba()
        .rules({test: "required"})
        .validate();
    expect(bubba.get("test").length).toBe(1);

    expect(bubba.isFailedRule("required")).toBeInstanceOf(Object);
    expect(bubba.get("test")).toBeInstanceOf(Array);

    bubba = bubba.requests({test: ""}).rules({test: "nullable|required"}).validate();
    console.log(bubba.all())
    expect(bubba.errorCount()).toBe(0);
});
