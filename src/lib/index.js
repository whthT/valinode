Number.isNaN = require('is-nan');

Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) < 0;
    });
};

import trTRLocale from "../locale/tr-TR";

export default class Valinode {
    constructor(args = {}) {

        this.isDebug = args.debug || false;

        this.locale = args.locale || trTRLocale;

        /* OBJECTS */
        this.$ExceptionContainer = {
            errors: {},
            message: ""
        };

        this.$translate = this.locale;


        /* GLOBALS */
        this.$requests = {};
        this.$rules = {};
        this.$messages = {};
        this.$attributes = {};
        this._isFailed = false;
        this._errorCount = 0;
        this._isValidated = false;

        this.$regex = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            phone: /^\+?[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
        };

        this.failedRules = [];
    }

    beginValidate() {
        this.clear();
        this._isValidated = true;
        this._errorCount = 0;
        return new Promise((resolve) => {
            Object.keys(this.$rules).map(v => {
                let rules = this.$rules[v];
                if (rules) {
                    let splitRules = this.$rules[v].split('|'),
                        requestValue = this.$requests[v],
                        typeOf = this.getTypeOf(requestValue),
                        isValueExists = (typeOf == "string" && String(requestValue).length) ||
                        (typeOf == "numeric" && parseInt(requestValue)) ||
                        (typeOf == "array" && requestValue.length > 0) ||
                        (typeOf == "date" && (new Date(requestValue)).getTime()) ?
                        true :
                        false;
                    let requestObj = {
                        property: v,
                        typeOf,
                        cond: splitRules.map(v => {
                            let split = v.split(':');
                            return {
                                _fn: split.shift(),
                                withEqual: split.length > 1 ? true : false,
                                value: split.pop() || true
                            }
                        }),
                        value: this.$requests[v],
                        isValueExists
                    };
                    if (typeof this.$ExceptionContainer.errors[requestObj.property] == "undefined") {
                        this.$ExceptionContainer.errors[requestObj.property] = [];
                    }
                    requestObj.cond.forEach((_v) => {
                        let nullable = this.isNullable(requestObj);
                        if (!nullable || nullable && requestObj.isValueExists) {
                            if (typeof this[_v._fn] != "undefined") {
                                let exception = this[_v._fn](requestObj, _v);
                                if (exception) {
                                    this.setIsFailed(true);
                                    this._errorCount++;
                                    this.$ExceptionContainer.errors[requestObj.property].push(exception);
                                } else {
                                    this.setIsFailed(false);
                                }
                            } else {
                                console.warn(_v._fn + " is not a valid validation rule!");
                            }
                        } else {
                            this.setIsFailed(false);
                        }
                    });
                }
            });
            resolve(this.$ExceptionContainer);
        });
    }

    requests(args, append = false) {
        if (args instanceof Object) {
            this.$requests = append ? { ...this.$requests,
                ...args
            } : args;
            this.clear()
        }
        return this;
    }

    messages(args, append) {
        if (args instanceof Object) {
            this.$messages = append ? { ...this.$messages,
                ...args
            } : args;
            this.clear()
        }
        return this;
    }

    attributes(args, append) {
        if (args instanceof Object) {
            this.$attributes = append ? { ...this.$attributes,
                ...args
            } : args;
            this.clear()
        }
        return this;
    }

    rules(args, append) {
        if (args instanceof Object) {
            this.$rules = append ? { ...this.$rules,
                ...args
            } : args;
            this.clear()
        }
        return this;
    }

    translate(args) {
        this.$translate = { ...this.$translate,
            ...args
        };
        return this;
    }

    required(request, rule) {
        if (!request.isValueExists && !this.isNullable(request)) {
            return this.createNewExceptionMessage(request, rule);
        }
    }

    integer(request, rule) {
        if (request.typeOf != "numeric") {
            return this.createNewExceptionMessage(request, rule);
        }
    }

    string(request, rule) {
        if (request.typeOf != "string") {
            return this.createNewExceptionMessage(request, rule);
        }
    }

    array(request, rule) {
        if (request.typeOf != "array") {
            return this.createNewExceptionMessage(request, rule);
        }
    }
    date(request, rule) {
        if (request.typeOf != "date") {
            return this.createNewExceptionMessage(request, rule);
        }
    }

    max(request, rule) {
        if (
            request.typeOf == "numeric" && parseInt(request.value) > parseInt(rule.value) ||
            request.typeOf == "string" && String(request.value).length > parseInt(rule.value) ||
            request.typeOf == "array" && request.value.length > parseInt(rule.value) ||
            request.typeOf == "date" && (new Date(request.value)).getTime() > (new Date(rule.value)).getTime()
        ) {
            return this.createNewExceptionMessage(request, rule);
        }

    }

    min(request, rule) {
            if (
                request.typeOf == "numeric" && parseInt(request.value) < parseInt(rule.value) ||
                request.typeOf == "string" && String(request.value).length < parseInt(rule.value) ||
                request.typeOf == "array" && request.value.length < parseInt(rule.value) ||
                request.typeOf == "date" && (new Date(request.value)).getTime() < (new Date(rule.value)).getTime()
            ) {
                return this.createNewExceptionMessage(request, rule);
            }
        }

        in (request, rule) {
            if ( //TODO: Date formatına göre iki tarih arasında in kuralı geçerli olması için çalışılacaktır.
                (
                    request.typeOf == "array" ?
                    request.value : [request.typeOf == "numeric" ?
                parseInt(request.value) : request.value]).diff(JSON.parse(rule.value)).length
            ) {
                return this.createNewExceptionMessage(request, rule);
            }
        }

    bigger_than(request, rule) {
        if (typeof this.$requests[rule.value] != "undefined") {
            let bigger_who = this.$requests[rule.value];
            if (
                request.typeOf == "numeric" && parseInt(request.value) <= parseInt(bigger_who) ||
                request.typeOf == "string" && request.value <= bigger_who ||
                request.typeOf == "date" && (new Date(request.value)).getTime() <= (new Date(bigger_who)).getTime()
            ) {
                return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));
            }
        }
    }

    smaller_than(request, rule) {
        if (typeof this.$requests[rule.value] != "undefined") {
            let smaller_who = this.$requests[rule.value];
            if (
                request.typeOf == "numeric" && parseInt(request.value) >= parseInt(smaller_who) ||
                request.typeOf == "string" && request.value >= smaller_who ||
                request.typeOf == "date" && (new Date(request.value)).getTime() >= (new Date(smaller_who)).getTime()
            ) {
                return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));
            }
        }
    }

    between(request, rule) {
        let arrRuleValue = rule.value.split(/[,]/g).map(v => v.trim());
        if (
            arrRuleValue.length && arrRuleValue.length == 2 &&
            (
                (request.typeOf == "numeric" && parseInt(request.value) < parseInt(arrRuleValue[0]) || parseInt(request.value) > parseInt(arrRuleValue[1])) ||
                (request.typeOf == "string" && String(request.value).length < parseInt(arrRuleValue[0]) || String(request.value).length > parseInt(arrRuleValue[1])) ||
                (request.typeOf == "date" && (new Date(request.value)).getTime() < (new Date(arrRuleValue[0])).getTime() || (new Date(request.value)).getTime() > (new Date(arrRuleValue[1])).getTime())
            )
        ) {
            return this.createNewExceptionMessage(request, rule, arrRuleValue.join(` ${this._('and')} `));
        }
    }

    same(request, rule) {
        let same_who = this.getRequestByProperty(rule.value);
        if (same_who && request.value != same_who) {
            return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));
        }
    }

    hard_same(request, rule) {
        let same_who = this.getRequestByProperty(rule.value);
        if (same_who && request.value !== same_who) {
            return this.createNewExceptionMessage(request, rule, this.getAttributeByProperty(rule.value));
        }
    }

    email(request, rule) {
        if (!this.$regex.email.test(request.value)) {
            return this.createNewExceptionMessage(request, rule);
        }
    }

    phone(request, rule) {
        if (!this.$regex.phone.test(request.value)) {
            return this.createNewExceptionMessage(request, rule);
        }
    }

    nullable(_request, _rule) {
        // is't here for keep works!
    }

    isRuleExists(rules, rule) {
        return rules.cond.filter(v => v._fn == rule).length ? true : false;
    }

    isNullable(request) {
        return this.isRuleExists(request, "nullable");
    }

    createNewExceptionMessage(request, rule, other = null) {
        this.failedRules.push({
            property: request.property,
            rule: rule._fn,
            expect: rule.value,
            found: request.value
        });
        return this.compileException({
            property: request.property,
            typeOf: request.typeOf,
            activeRule: rule,
            value: rule.value,
            requestValue: request.value,
            other,
            attribute: this.getAttributeByProperty(request.property)
        });
    }

    compileException(args) {
        let message = this.getTranslateMessageByType(args);
        return message ?
            message
            .replace(/:attribute/g, args.attribute)
            .replace(/:rule_value/g, args.value)
            .replace(/:other/g, args.other)
            .replace(/:length/g, String(args.requestValue).length) :
            `message not exists (${message})`;
    }

    getTranslateMessageByType(args) {
        return typeof this.$messages[args.property + '.' + args.activeRule._fn] != "undefined" ?
            this.$messages[args.property + '.' + args.activeRule._fn] :
            typeof this.$translate[args.activeRule._fn] == "object" ?
            this.$translate[args.activeRule._fn][args.typeOf] :
            typeof this.$translate[args.activeRule._fn] == "string" ?
            this.$translate[args.activeRule._fn] :
            `'${args.activeRule._fn}' message is not empty`;
    }

    getAttributeByProperty(property) {
        return typeof this.$attributes[property] != "undefined" ?
            this.$attributes[property] : this.parseBaseProperty(property);
    }

    getRequestByProperty(property) {
        return typeof this.$requests[property] != "undefined" ?
            this.$requests[property] : null;
    }

    parseBaseProperty(property) {
        return property.replace(/[_-]/g, ' ')
    }

    isInteger(x) {
        return (String(parseInt(x)).length == String(x).length && !Number.isNaN(parseInt(x))) && Object.prototype.toString.call(parseInt(x)) === "[object Number]"
    }

    isString(x) {
        return Object.prototype.toString.call(x) === "[object String]"
    }

    isDate(x) {
        return Object.prototype.toString.call(x) === "[object Date]" && x != "Invalid Date"
    }

    isArray(x) {
        return Object.prototype.toString.call(x) === "[object Array]"
    }

    isObject(x) {
        return Object.prototype.toString.call(x) === "[object Object]"
    }

    getTypeOf(value) {
        return this.isArray(value) ? 'array' :
            this.isObject(value) ? 'object' :
            this.isInteger(value) ? 'numeric' :
            this.isDate(new Date(value)) ? 'date' :
            this.isString(value) ? 'string' :
            typeof value;
    }

    get(property = false) {
        if (typeof property == "boolean") {
            return this.all();
        }
        if (property) {
            let error = Object.keys(this.$ExceptionContainer.errors).filter(v => v == property).shift();
            if (error && this.$ExceptionContainer.errors[error] instanceof Array) {
                return this.$ExceptionContainer.errors[error];
            }
        }
        return [];
    }

    limit(property = false, limit = false) {
        if (parseInt(property)) {

            return this.all().slice(0, property);
        }
        if (limit) {
            return this.get(property).slice(0, parseInt(limit))
        }
    }

    first(property = false) {
        if (property) {
            return this.get(property).shift()
        } else {
            return this.all().shift();
        }
    }

    all() {
        let errorList = [];
        Object.keys(this.$ExceptionContainer.errors)
            .map(v => this.$ExceptionContainer.errors[v])
            .forEach(v => errorList = [...errorList, ...v]);
        return errorList;
    }

    errors() {
        return this.$ExceptionContainer.errors
    }

    isFailed(property = false) {
        if (property) {
            return this.first(property) ? true : false;
        }
        return this._isFailed;
    }

    setIsFailed(bool) {
        if (this._isFailed != bool) {
            this._isFailed = bool;
        }
    }

    fails() {
        return this._isFailed;
    }

    isValidated() {
        return this._isValidated;
    }

    errorCount(property = null) {
        return property ?
            this.all(property).length :
            this._errorCount
    }

    clear() {
        this.$ExceptionContainer = {
            errors: {},
            message: ""
        };
        return this;
    }

    isFailedRule(rule, property) {
        let match = this.failedRules.filter(v => v.rule == rule && v.property == property);
        return match.length ? match.shift() : null
    }

    validate() {
        this.beginValidate();
        return this;
    }

    _(str) {
        return typeof this.$translate[str] != "undefined" ? this.$translate[str] : str
    }

};
