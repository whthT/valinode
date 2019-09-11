export = Valinode

interface IProps {
    debug?: boolean
    locale?: object
}
interface ExceptionContainer {
    errors: object,
    message: string
}
interface Regex {
    email: any,
    phone: any
}
declare class Valinode {
    constructor(args?: IProps);

    isDebug: boolean;
    locale: object;
    $ExceptionContainer: ExceptionContainer;
    $translate:object;

    $requests: object;
    $rules: object;
    $messages: object;
    $attributes: object;
    _isFailed: boolean;
    _errorCount: number;
    _isValidated: boolean;

    $regex: Regex

    failedRules: Array<any>;

    beginValidate(): Promise;
    requests(args: object, append?: boolean): Valinode;
    messages(args: object, append?: boolean): Valinode;
    attributes(args: object, append?: boolean): Valinode;
    rules(args: object, append?: boolean): Valinode;
    translate(args): Valinode

    required(request, rule): string
    integer(request, rule): string
    string(request, rule): string
    array(request, rule): string
    date(request, rule): string
    max(request, rule): string
    min(request, rule): string
    in(request, rule): string
    valinode_in(request, rule): string
    bigger_than(request, rule): string
    smaller_than(request, rule): string
    between(request, rule): string
    same(request, rule): string
    hard_same(request, rule): string
    email(request, rule): string
    phone(request, rule): string
    nullable(request, rule): string
    isRuleExists(request, rule): string
    isNullable(request, rule): string

    get(property? = false): Array<any>
    limit(property? = false, limit? = false): Array<any>
    first(property? = false): string|null
    all(): string|null
    errors(): object
    isFailed(property? = false): boolean
    fails(): boolean
    isValidated(): boolean
    errorCount(property? = null): boolean
    clear(): Valinode
    isFailedRule(rule?: string, property?: string): string|null
    validate(): Valinode
}