const _0x6760b6 = _0x1b46;
function _0x1b46(_0x32347d, _0x5e4165) {
    const _0x122afd = _0x122a();
    return _0x1b46 = function(_0x1b46bb, _0x194edf) {
        _0x1b46bb = _0x1b46bb - 0x19c;
        let _0x34c72f = _0x122afd[_0x1b46bb];
        return _0x34c72f;
    }
    ,
    _0x1b46(_0x32347d, _0x5e4165);
}
function _0x122a() {
    const _0x1f4628 = ['classList', '12knHsCA', 'items', 'appendChild', 'navigate', '.slider--fg', 'querySelector', 'createElement', '10UJuYPM', 'click', '.tp-portfolio-slider-type\x20>\x20.type__item', 'parentNode', '.tp-portfolio-slider__item', 'map', 'itemsTotal', 'element', 'itemsInner', '.tp-portfolio-slider__main', 'dataset', 'wheel,touch,scroll,pointer', '.char', '1386535sMMDUi', 'power4.inOut', '200556wGBrnA', '13899321bnMNOw', '.slider--bg', 'isAnimating', 'remove', 'next', '3465432SzOtLa', 'char-wrap', 'addEventListener', '42HcLDUS', '244531NSyLrQ', 'forEach', 'set', '.slider-nav\x20>\x20.slider-nav__item--next', 'transform', 'type__item--current', 'querySelectorAll', 'add', 'current', '247719XcnvIF', '.tp-portfolio-slider__item-inner', '855244jrCxxh', 'reverseDirection', 'prev', 'length'];
    _0x122a = function() {
        return _0x1f4628;
    }
    ;
    return _0x122a();
}
(function(_0x334687, _0x2d8861) {
    const _0x235750 = _0x1b46
      , _0x3b48c8 = _0x334687();
    while (!![]) {
        try {
            const _0xc58481 = -parseInt(_0x235750(0x1a5)) / 0x1 + -parseInt(_0x235750(0x1ba)) / 0x2 + parseInt(_0x235750(0x1b8)) / 0x3 * (-parseInt(_0x235750(0x1bf)) / 0x4) + parseInt(_0x235750(0x1a3)) / 0x5 + -parseInt(_0x235750(0x1ae)) / 0x6 * (parseInt(_0x235750(0x1af)) / 0x7) + -parseInt(_0x235750(0x1ab)) / 0x8 + parseInt(_0x235750(0x1a6)) / 0x9 * (parseInt(_0x235750(0x1c6)) / 0xa);
            if (_0xc58481 === _0x2d8861)
                break;
            else
                _0x3b48c8['push'](_0x3b48c8['shift']());
        } catch (_0xacab7) {
            _0x3b48c8['push'](_0x3b48c8['shift']());
        }
    }
}(_0x122a, 0x41725));
const wrapElements = (_0x3012d5, _0x3358a9, _0xf0e41f) => {
    const _0x39461d = _0x1b46;
    _0x3012d5[_0x39461d(0x1b0)](_0x59b3d6 => {
        const _0x5adda8 = _0x39461d
          , _0x498b1f = document[_0x5adda8(0x1c5)](_0x3358a9);
        _0x498b1f[_0x5adda8(0x1be)] = _0xf0e41f,
        _0x59b3d6[_0x5adda8(0x1c9)][_0x5adda8(0x1c1)](_0x498b1f),
        _0x498b1f[_0x5adda8(0x1c1)](_0x59b3d6);
    }
    );
}
;
if (document[_0x6760b6(0x1b5)](_0x6760b6(0x19f))[_0x6760b6(0x1bd)]) {
    class Slider {
        #current = 0x0;
        constructor(_0x57f877, _0x78ad1e=![]) {
            const _0xfad059 = _0x6760b6;
            this[_0xfad059(0x19d)] = _0x57f877,
            this[_0xfad059(0x1bb)] = _0x78ad1e,
            this['items'] = [...this['element'][_0xfad059(0x1b5)](_0xfad059(0x1ca))],
            this[_0xfad059(0x19e)] = this[_0xfad059(0x1c0)][_0xfad059(0x1cb)](_0xad97a6 => _0xad97a6[_0xfad059(0x1c4)](_0xfad059(0x1b9))),
            this[_0xfad059(0x1c0)][this['current']]['classList'][_0xfad059(0x1b6)](_0xfad059(0x1b7)),
            this[_0xfad059(0x19c)] = this[_0xfad059(0x1c0)]['length'],
            gsap['set']([this[_0xfad059(0x1c0)], this[_0xfad059(0x19e)]], {
                'will-change': _0xfad059(0x1b3)
            });
        }
        ['next']() {
            const _0x4bcad6 = _0x6760b6;
            this[_0x4bcad6(0x1c2)](0x1);
        }
        [_0x6760b6(0x1bc)]() {
            this['navigate'](-0x1);
        }
        get[_0x6760b6(0x1b7)]() {
            return this.#current;
        }
        set[_0x6760b6(0x1b7)](_0x4e7d72) {
            this.#current = _0x4e7d72;
        }
        [_0x6760b6(0x1c2)](_0x21ccae) {
            const _0x2c43d2 = _0x6760b6;
            if (this[_0x2c43d2(0x1a8)])
                return ![];
            this[_0x2c43d2(0x1a8)] = !![];
            const _0x189e58 = this[_0x2c43d2(0x1b7)];
            this['current'] = _0x21ccae === 0x1 ? this['current'] < this['itemsTotal'] - 0x1 ? ++this[_0x2c43d2(0x1b7)] : 0x0 : this[_0x2c43d2(0x1b7)] > 0x0 ? --this[_0x2c43d2(0x1b7)] : this['itemsTotal'] - 0x1;
            const _0x59f483 = this[_0x2c43d2(0x1c0)][_0x189e58]
              , _0x4c4658 = this['itemsInner'][_0x189e58]
              , _0xa09128 = this[_0x2c43d2(0x1c0)][this[_0x2c43d2(0x1b7)]]
              , _0x81cf53 = this[_0x2c43d2(0x19e)][this[_0x2c43d2(0x1b7)]];
            gsap['timeline']({
                'defaults': {
                    'duration': 1.1,
                    'ease': 'power3.inOut'
                },
                'onComplete': () => {
                    const _0x1449f6 = _0x2c43d2;
                    this[_0x1449f6(0x1c0)][_0x189e58][_0x1449f6(0x1be)][_0x1449f6(0x1a9)]('current'),
                    this['items'][this[_0x1449f6(0x1b7)]][_0x1449f6(0x1be)][_0x1449f6(0x1b6)](_0x1449f6(0x1b7)),
                    this[_0x1449f6(0x1a8)] = ![];
                }
            })['to'](_0x59f483, {
                'xPercent': this['reverseDirection'] ? _0x21ccae * 0x64 : -_0x21ccae * 0x64,
                'onComplete': () => gsap['set'](_0x59f483, {
                    'opacity': 0x0
                })
            })['to'](_0x4c4658, {
                'xPercent': this[_0x2c43d2(0x1bb)] ? -_0x21ccae * 0x1e : _0x21ccae * 0x1e,
                'startAt': {
                    'rotation': 0x0
                },
                'rotation': -_0x21ccae * 0x14,
                'scaleX': 2.8
            }, 0x0)['to'](_0xa09128, {
                'startAt': {
                    'opacity': 0x1,
                    'xPercent': this[_0x2c43d2(0x1bb)] ? -_0x21ccae * 0x50 : _0x21ccae * 0x50
                },
                'xPercent': 0x0
            }, 0x0)['to'](_0x81cf53, {
                'startAt': {
                    'xPercent': this[_0x2c43d2(0x1bb)] ? _0x21ccae * 0x1e : -_0x21ccae * 0x1e,
                    'scaleX': 2.8,
                    'rotation': _0x21ccae * 0x14
                },
                'xPercent': 0x0,
                'scaleX': 0x1,
                'rotation': 0x0
            }, 0x0);
        }
    }
    const navigation = {
        'next': document['querySelector'](_0x6760b6(0x1b2)),
        'prev': document[_0x6760b6(0x1c4)]('.slider-nav\x20>\x20.slider-nav__item--prev'),
        'back': document['querySelector']('.slider-nav\x20>\x20.slider-nav__item--back')
    }
      , sliderBG = new Slider(document[_0x6760b6(0x1c4)](_0x6760b6(0x1a7)))
      , sliderFG = new Slider(document['querySelector'](_0x6760b6(0x1c3)),!![])
      , titles = [...document[_0x6760b6(0x1b5)](_0x6760b6(0x1c8))];
    titles[0x0][_0x6760b6(0x1be)]['add']('type__item--current'),
    titles[_0x6760b6(0x1b0)](_0x5bced2 => _0x5bced2[_0x6760b6(0x1a0)]['splitting'] = ''),
    Splitting();
    const chars = titles['map'](_0x22f656 => {
        const _0x5214f7 = _0x6760b6
          , _0x268022 = _0x22f656[_0x5214f7(0x1b5)](_0x5214f7(0x1a2));
        return wrapElements(_0x268022, 'span', _0x5214f7(0x1ac)),
        _0x268022;
    }
    );
    gsap['set']([titles, chars], {
        'will-change': _0x6760b6(0x1b3)
    });
    const navigate = _0x1b2d85 => {
        toggleTitle(_0x1b2d85),
        sliderBG[_0x1b2d85](),
        sliderFG[_0x1b2d85]();
    }
      , toggleTitle = _0x1889de => {
        const _0x2785a4 = _0x6760b6;
        if (sliderBG[_0x2785a4(0x1a8)])
            return ![];
        const _0x24d1be = sliderBG['current']
          , _0x2397d9 = chars[_0x24d1be]
          , _0x4659fd = _0x1889de === 'next' ? _0x24d1be < sliderBG[_0x2785a4(0x19c)] - 0x1 ? _0x24d1be + 0x1 : 0x0 : _0x24d1be > 0x0 ? _0x24d1be - 0x1 : sliderBG['itemsTotal'] - 0x1
          , _0xf669 = chars[_0x4659fd]
          , _0x31372b = 1.1
          , _0x31fbc0 = _0x1889de === _0x2785a4(0x1aa) ? -0x1 : 0x1;
        gsap['timeline']({
            'defaults': {
                'duration': _0x31372b,
                'ease': _0x2785a4(0x1a4)
            },
            'onStart': () => {
                const _0x388211 = _0x2785a4;
                titles[_0x4659fd]['classList']['add'](_0x388211(0x1b4));
            }
            ,
            'onComplete': () => {
                const _0x154665 = _0x2785a4;
                gsap[_0x154665(0x1b1)](titles[_0x24d1be], {
                    'opacity': 0x0
                }),
                titles[_0x24d1be][_0x154665(0x1be)]['remove'](_0x154665(0x1b4));
            }
        })[_0x2785a4(0x1b1)](titles[_0x4659fd], {
            'opacity': 0x0
        }, 0x0)['to'](titles[_0x24d1be], {
            'xPercent': _0x31fbc0 * 0x28
        })['to'](_0x2397d9, {
            'xPercent': _0x31fbc0 * 0x67
        }, 0x0)['addLabel']('in', _0x31372b * 0.15, 0x0)[_0x2785a4(0x1b1)](titles[_0x4659fd], {
            'opacity': 0x1
        }, 'in')['to'](titles[_0x4659fd], {
            'startAt': {
                'xPercent': _0x31fbc0 * -0x28
            },
            'xPercent': 0x0
        }, 'in')['to'](_0xf669, {
            'startAt': {
                'xPercent': _0x31fbc0 * -0x67
            },
            'xPercent': 0x0
        }, 'in');
    }
    ;
    navigation[_0x6760b6(0x1aa)]['addEventListener'](_0x6760b6(0x1c7), () => navigate(_0x6760b6(0x1aa))),
    navigation[_0x6760b6(0x1bc)][_0x6760b6(0x1ad)]('click', () => navigate('prev')),
    Observer['create']({
        'target': window,
        'type': _0x6760b6(0x1a1),
        'onUp': () => navigate(_0x6760b6(0x1aa)),
        'onDown': () => navigate(_0x6760b6(0x1bc)),
        'wheelSpeed': -0x1
    });
}
