function _0x47b6(_0x2ef60b, _0x5e44b6) {
    const _0x1090e4 = _0x1090();
    return _0x47b6 = function(_0x47b693, _0x446a4c) {
        _0x47b693 = _0x47b693 - 0x73;
        let _0x3b4352 = _0x1090e4[_0x47b693];
        return _0x3b4352;
    }
    ,
    _0x47b6(_0x2ef60b, _0x5e44b6);
}
const _0x275ac6 = _0x47b6;
function _0x1090() {
    const _0x564281 = ['height', 'resolution', 'wrapT', 'camera', 'innerWidth', 'value', 'addObjects', 'images', '12984FjLpLx', 'innerHeight', 'setSize', '22RNOZuo', 'render', '1591731vHxeJB', 'RepeatWrapping', 'textures', 'geometry', 'then', 'from', 'plane', 'Vector4', '2439LpeJMB', 'fragment', 'PlaneGeometry', '.slide-img', 'imageAspect', 'PerspectiveCamera', 'wrapS', 'isRunning', 'varying\x20vec2\x20vUv;void\x20main()\x20{vUv\x20=\x20uv;gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);}', '1708260mjUPUg', 'bind', 'setPixelRatio', 'stop', 'src', 'all', 'width', 'initiate', 'Mesh', 'attr', 'fov', '#showcase-slider-holder', 'vertex', 'resize', 'paused', 'image', 'load', 'updateProjectionMatrix', 'add', 'domElement', 'material', 'offsetWidth', 'canvas-slider', 'scale', 'position', 'addEventListener', '48AgYekw', '3809390RWBuQX', 'current', 'TextureLoader', '5149060dzvjer', '710raDvYc', 'renderer', 'setClearColor', '7625hoypVN', '1675RZrKFo', 'container', 'scene', 'offsetHeight', 'uniforms', 'setupResize'];
    _0x1090 = function() {
        return _0x564281;
    }
    ;
    return _0x1090();
}
(function(_0x50fb25, _0x1ba5e1) {
    const _0x4941ce = _0x47b6
      , _0x40d4fd = _0x50fb25();
    while (!![]) {
        try {
            const _0x15e42a = -parseInt(_0x4941ce(0x8f)) / 0x1 * (-parseInt(_0x4941ce(0x8b)) / 0x2) + parseInt(_0x4941ce(0xa2)) / 0x3 + parseInt(_0x4941ce(0x86)) / 0x4 * (parseInt(_0x4941ce(0x8e)) / 0x5) + parseInt(_0x4941ce(0xb3)) / 0x6 + -parseInt(_0x4941ce(0x8a)) / 0x7 + -parseInt(_0x4941ce(0x9d)) / 0x8 * (-parseInt(_0x4941ce(0xaa)) / 0x9) + -parseInt(_0x4941ce(0x87)) / 0xa * (parseInt(_0x4941ce(0xa0)) / 0xb);
            if (_0x15e42a === _0x1ba5e1)
                break;
            else
                _0x40d4fd['push'](_0x40d4fd['shift']());
        } catch (_0x310cd2) {
            _0x40d4fd['push'](_0x40d4fd['shift']());
        }
    }
}(_0x1090, 0x5a79b));
class WebGL {
    constructor(_0x4dc588) {
        const _0x1210ff = _0x47b6;
        this[_0x1210ff(0x91)] = new THREE['Scene'](),
        this[_0x1210ff(0x78)] = _0x1210ff(0xb2),
        this['material'] = _0x4dc588[_0x1210ff(0x80)],
        this['fragment'] = _0x4dc588[_0x1210ff(0xab)],
        this['uniforms'] = _0x4dc588[_0x1210ff(0x93)],
        this['renderer'] = new THREE['WebGLRenderer'](),
        this[_0x1210ff(0xb9)] = window[_0x1210ff(0x99)],
        this[_0x1210ff(0x95)] = window['innerHeight'],
        this[_0x1210ff(0x8c)][_0x1210ff(0xb5)](window['devicePixelRatio']),
        this[_0x1210ff(0x8c)][_0x1210ff(0x9f)](this[_0x1210ff(0xb9)], this[_0x1210ff(0x95)]),
        this['renderer'][_0x1210ff(0x8d)](0x23272a, 0x1),
        this[_0x1210ff(0x90)] = document['getElementById'](_0x1210ff(0x82)),
        this[_0x1210ff(0x9c)] = Array[_0x1210ff(0xa7)](document['querySelectorAll'](_0x1210ff(0xad))),
        this[_0x1210ff(0xb9)] = this[_0x1210ff(0x90)]['offsetWidth'],
        this['height'] = this[_0x1210ff(0x90)]['offsetHeight'],
        this[_0x1210ff(0x90)]['appendChild'](this[_0x1210ff(0x8c)][_0x1210ff(0x7f)]),
        this[_0x1210ff(0x98)] = new THREE[(_0x1210ff(0xaf))](0x46,window[_0x1210ff(0x99)] / window[_0x1210ff(0x9e)],0.001,0x3e8),
        this['camera'][_0x1210ff(0x84)]['set'](0x0, 0x0, 0x2),
        this[_0x1210ff(0x88)] = 0x0,
        this[_0x1210ff(0xa4)] = [],
        this[_0x1210ff(0xb1)] = !0x1,
        this['paused'] = !0x0,
        this[_0x1210ff(0x73)]( () => {
            const _0x84e4a6 = _0x1210ff;
            this[_0x84e4a6(0x94)](),
            this[_0x84e4a6(0x9b)](),
            this[_0x84e4a6(0x79)](),
            this['play']();
        }
        );
    }
    [_0x275ac6(0x73)](_0x747c94) {
        const _0x2b7602 = _0x275ac6
          , _0x798faa = [];
        let _0x4b6cac = this;
        this[_0x2b7602(0x9c)]['forEach']( (_0x5d4c42, _0x44de1a) => {
            let _0x4c0b75 = new Promise(_0x437216 => {
                const _0xf646cf = _0x47b6;
                _0x4b6cac[_0xf646cf(0xa4)][_0x44de1a] = new THREE[(_0xf646cf(0x89))]()[_0xf646cf(0x7c)](_0x5d4c42[_0xf646cf(0xb7)], _0x437216);
            }
            );
            _0x798faa['push'](_0x4c0b75);
        }
        ),
        Promise[_0x2b7602(0xb8)](_0x798faa)[_0x2b7602(0xa6)]( () => {
            _0x747c94();
        }
        );
    }
    [_0x275ac6(0x94)]() {
        const _0x27db8f = _0x275ac6;
        window[_0x27db8f(0x85)](_0x27db8f(0x79), this[_0x27db8f(0x79)]['bind'](this));
    }
    [_0x275ac6(0x79)]() {
        const _0x55303c = _0x275ac6;
        let _0x162b55, _0x425550;
        this[_0x55303c(0xb9)] = this[_0x55303c(0x90)][_0x55303c(0x81)],
        this[_0x55303c(0x95)] = this['container'][_0x55303c(0x92)],
        this[_0x55303c(0x8c)][_0x55303c(0x9f)](this[_0x55303c(0xb9)], this[_0x55303c(0x95)]),
        this[_0x55303c(0x98)]['aspect'] = this[_0x55303c(0xb9)] / this[_0x55303c(0x95)],
        this[_0x55303c(0xae)] = this['textures'][0x0][_0x55303c(0x7b)][_0x55303c(0x95)] / this[_0x55303c(0xa4)][0x0]['image']['width'],
        this['height'] / this[_0x55303c(0xb9)] > this[_0x55303c(0xae)] ? (_0x162b55 = this['width'] / this[_0x55303c(0x95)] * this[_0x55303c(0xae)],
        _0x425550 = 0x1) : (_0x162b55 = 0x1,
        _0x425550 = this[_0x55303c(0x95)] / this[_0x55303c(0xb9)] / this['imageAspect']),
        this['material'][_0x55303c(0x93)][_0x55303c(0x96)][_0x55303c(0x9a)]['x'] = this['width'],
        this[_0x55303c(0x80)]['uniforms'][_0x55303c(0x96)][_0x55303c(0x9a)]['y'] = this[_0x55303c(0x95)],
        this[_0x55303c(0x80)][_0x55303c(0x93)][_0x55303c(0x96)][_0x55303c(0x9a)]['z'] = _0x162b55,
        this[_0x55303c(0x80)][_0x55303c(0x93)]['resolution']['value']['w'] = _0x425550;
        const _0x276afa = this[_0x55303c(0x98)][_0x55303c(0x84)]['z'];
        this['camera'][_0x55303c(0x76)] = 0xb4 / Math['PI'] * 0x2 * Math['atan'](0x1 / (0x2 * _0x276afa)),
        this[_0x55303c(0xa8)][_0x55303c(0x83)]['x'] = this[_0x55303c(0x98)]['aspect'],
        this[_0x55303c(0xa8)][_0x55303c(0x83)]['y'] = 0x1,
        this[_0x55303c(0x98)][_0x55303c(0x7d)]();
    }
    ['addObjects']() {
        const _0x478e97 = _0x275ac6;
        let _0x1fa120 = new THREE[(_0x478e97(0x89))]()['load']($(_0x478e97(0x77))[_0x478e97(0x75)]('data-pattern-img'));
        _0x1fa120[_0x478e97(0xb0)] = _0x1fa120[_0x478e97(0x97)] = THREE[_0x478e97(0xa3)],
        this['material'] = new THREE['ShaderMaterial']({
            'uniforms': {
                'effectFactor': {
                    'type': 'f',
                    'value': 0.15
                },
                'dispFactor': {
                    'type': 'f',
                    'value': 0x0
                },
                'currentImage': {
                    'type': 't',
                    'value': this[_0x478e97(0xa4)][0x0]
                },
                'nextImage': {
                    'type': 't',
                    'value': this[_0x478e97(0xa4)][0x1]
                },
                'disp': {
                    'type': 't',
                    'value': _0x1fa120
                },
                'resolution': {
                    'type': 'v4',
                    'value': new THREE[(_0x478e97(0xa9))]()
                }
            },
            'vertexShader': this['vertex'],
            'fragmentShader': this[_0x478e97(0xab)],
            'transparent': !0x0,
            'opacity': 0x1
        }),
        this[_0x478e97(0xa5)] = new THREE[(_0x478e97(0xac))](0x1,0x1,0x2,0x2),
        this['plane'] = new THREE[(_0x478e97(0x74))](this[_0x478e97(0xa5)],this['material']),
        this[_0x478e97(0x91)][_0x478e97(0x7e)](this[_0x478e97(0xa8)]);
    }
    [_0x275ac6(0xb6)]() {
        const _0x40199e = _0x275ac6;
        this[_0x40199e(0x7a)] = !0x0;
    }
    ['play']() {
        const _0x5ee887 = _0x275ac6;
        this[_0x5ee887(0x7a)] = !0x1,
        this[_0x5ee887(0xa1)]();
    }
    [_0x275ac6(0xa1)]() {
        const _0x3abcec = _0x275ac6;
        this[_0x3abcec(0x7a)] || (requestAnimationFrame(this[_0x3abcec(0xa1)][_0x3abcec(0xb4)](this)),
        this[_0x3abcec(0x8c)]['render'](this[_0x3abcec(0x91)], this[_0x3abcec(0x98)]));
    }
}
