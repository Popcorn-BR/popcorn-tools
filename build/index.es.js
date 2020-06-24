var validateCpf = function (cpf) {
    var sum;
    var calc;
    var cpfSerialized = cpf.replace(/_|\.|-/g, '');
    sum = 0;
    if (cpfSerialized === '00000000000')
        return false;
    for (var i = 1; i <= 9; i += 1) {
        sum += Number(cpfSerialized.substring(i - 1, i)) * (11 - i);
    }
    calc = (sum * 10) % 11;
    if (calc === 10 || calc === 11)
        calc = 0;
    if (calc !== Number(cpfSerialized.substring(9, 10)))
        return false;
    sum = 0;
    for (var i = 1; i <= 10; i += 1) {
        sum += Number(cpfSerialized.substring(i - 1, i)) * (12 - i);
    }
    calc = (sum * 10) % 11;
    if (calc === 10 || calc === 11)
        calc = 0;
    if (calc !== Number(cpfSerialized.substring(10, 11)))
        return false;
    return true;
};

var formatPrice = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.value, value = _c === void 0 ? 0 : _c, _d = _b.style, style = _d === void 0 ? 'pt-BR' : _d, _e = _b.currency, currency = _e === void 0 ? 'BRL' : _e;
    var format = new Intl.NumberFormat(style, {
        style: 'currency',
        currency: currency,
    }).format;
    return format(value);
};

var filter = function (array, value) {
    return array
        ? array.filter(function (element) {
            return element.value.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        })
        : [];
};

var ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'G' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' },
];
var measureFormat = function (value) {
    if (value === void 0) { value = 0; }
    for (var i = 0; i < ranges.length; i += 1) {
        if (value >= ranges[i].divider) {
            return (value / ranges[i].divider).toFixed(0) + ranges[i].suffix;
        }
    }
    return value.toString();
};

var mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
            check = true;
        }
    })(window.navigator.userAgent || window.navigator.vendor);
    return check;
};

export { filter, formatPrice, measureFormat, mobilecheck, validateCpf };
//# sourceMappingURL=index.es.js.map
