function _0x118b(_0x1f3d3c, _0x617076) {
    var _0x45cc27 = _0x45cc();
    return _0x118b = function(_0x118b55, _0x945e0b) {
        _0x118b55 = _0x118b55 - 0x123;
        var _0x30d6b0 = _0x45cc27[_0x118b55];
        return _0x30d6b0;
    }
    ,
    _0x118b(_0x1f3d3c, _0x617076);
}
var _0x2405f4 = _0x118b;
(function(_0x2cf38e, _0x28ebbe) {
    var _0x4a05ba = _0x118b
      , _0x20b99f = _0x2cf38e();
    while (!![]) {
        try {
            var _0x36c841 = -parseInt(_0x4a05ba(0x127)) / 0x1 * (-parseInt(_0x4a05ba(0x130)) / 0x2) + parseInt(_0x4a05ba(0x135)) / 0x3 + parseInt(_0x4a05ba(0x123)) / 0x4 * (-parseInt(_0x4a05ba(0x125)) / 0x5) + parseInt(_0x4a05ba(0x131)) / 0x6 + -parseInt(_0x4a05ba(0x12d)) / 0x7 * (-parseInt(_0x4a05ba(0x12a)) / 0x8) + -parseInt(_0x4a05ba(0x128)) / 0x9 + parseInt(_0x4a05ba(0x124)) / 0xa;
            if (_0x36c841 === _0x28ebbe)
                break;
            else
                _0x20b99f['push'](_0x20b99f['shift']());
        } catch (_0x9da7a3) {
            _0x20b99f['push'](_0x20b99f['shift']());
        }
    }
}(_0x45cc, 0xe387d));
function _0x45cc() {
    var _0x45f834 = ['49UOlRxQ', 'DOM', 'initEvents', '1328zLfzAz', '778752CAblvS', 'inner', 'addEventListener', 'defaultStyle', '1376352nzWtqe', '16ERnvWg', '8446800cIeiub', '868345GjsyQF', 'getRect', '521UgVPdV', '14590998xOECcp', '.content__img-inner', '1678472AycYYw', 'getBoundingClientRect', 'rect'];
    _0x45cc = function() {
        return _0x45f834;
    }
    ;
    return _0x45cc();
}
export class Image {
    ['DOM'] = {
        'el': null,
        'inner': null
    };
    ['defaultStyle'] = {
        'scale': 0x1,
        'x': 0x0,
        'y': 0x0,
        'opacity': 0x0
    };
    ['timeline'] = null;
    ['rect'] = null;
    constructor(_0x29d78d) {
        var _0x20cb1d = _0x118b;
        this[_0x20cb1d(0x12e)]['el'] = _0x29d78d,
        this[_0x20cb1d(0x12e)][_0x20cb1d(0x132)] = this['DOM']['el']['querySelector'](_0x20cb1d(0x129)),
        this[_0x20cb1d(0x126)](),
        this['initEvents']();
    }
    [_0x2405f4(0x12f)]() {
        var _0x4baf72 = _0x2405f4;
        this['resize'] = () => {
            var _0x1e1803 = _0x118b;
            gsap['set'](this[_0x1e1803(0x12e)]['el'], this[_0x1e1803(0x134)]),
            this[_0x1e1803(0x126)]();
        }
        ,
        this[_0x4baf72(0x12e)]['el'][_0x4baf72(0x133)]('resize', () => this['resize']());
    }
    [_0x2405f4(0x126)]() {
        var _0x3cddc7 = _0x2405f4;
        this[_0x3cddc7(0x12c)] = this[_0x3cddc7(0x12e)]['el'][_0x3cddc7(0x12b)]();
    }
}
