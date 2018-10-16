export default {
    and: "ve",
    required: ":attribute alanı boş olamaz.",
    integer: ":attribute sayı olmalıdır.",
    string: ":attribute alanının değeri yazı olmalıdır.",
    array: ":attribute alanının değeri dizi olmalıdır.",
    max: {
        numeric: ":attribute alanının değeri en fazla :rule_value olabilir. Lütfen düzeltiniz.",
        string: ":attribute alanı en fazla :rule_value karakterden oluşabilir. (:length karakter)",
        array: ":attribute alanında en fazla :rule_value seçim yapabilirsiniz.",
        date: ":attribute alanının tarih aralığı en fazla :rule_value olabilir.",
    },
    min: {
        numeric: ":attribute alanının değeri en az :rule_value olabilir. Lütfen düzeltiniz.",
        string: ":attribute alanı en az :rule_value karakterden oluşabilir.",
        array: ":attribute alanında en az :rule_value seçim yapmalısınız.",
        date: ":attribute alanının tarih aralığı en az :rule_value olabilir.",
    },
    in: ":attribute alanının değeri geçersizdir.",
    bigger_than: ":attribute alanı :other alanından büyük olmalıdır.",
    between: ":attribute alanı :other arasında olabilir.",
    same: ":attribute alanı :other alanı ile aynı olmalıdır.",
    hard_same: ":attribute alanı :other alanı ile aynı olmak zorundadır.",
    email: ":attribute alanı geçerli bir email adresi olmalıdır.",
    phone: ":attribute alanı geçerli bir telefon numarası olmalıdır.",
    date: ":attribute alanı geçerli bir tarih olmalıdır."
}
