function length(t) {
    let e = t[0]
      , i = t[1]
      , r = t[2];
    return Math.sqrt(e * e + i * i + r * r)
}
function copy(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t
}
function set(t, e, i, r) {
    return t[0] = e,
    t[1] = i,
    t[2] = r,
    t
}
function add(t, e, i) {
    return t[0] = e[0] + i[0],
    t[1] = e[1] + i[1],
    t[2] = e[2] + i[2],
    t
}
function subtract(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t[2] = e[2] - i[2],
    t
}
function multiply(t, e, i) {
    return t[0] = e[0] * i[0],
    t[1] = e[1] * i[1],
    t[2] = e[2] * i[2],
    t
}
function divide(t, e, i) {
    return t[0] = e[0] / i[0],
    t[1] = e[1] / i[1],
    t[2] = e[2] / i[2],
    t
}
function scale(t, e, i) {
    return t[0] = e[0] * i,
    t[1] = e[1] * i,
    t[2] = e[2] * i,
    t
}
function distance(t, e) {
    let i = e[0] - t[0]
      , r = e[1] - t[1]
      , s = e[2] - t[2];
    return Math.sqrt(i * i + r * r + s * s)
}
function squaredDistance(t, e) {
    let i = e[0] - t[0]
      , r = e[1] - t[1]
      , s = e[2] - t[2];
    return i * i + r * r + s * s
}
function squaredLength(t) {
    let e = t[0]
      , i = t[1]
      , r = t[2];
    return e * e + i * i + r * r
}
function negate(t, e) {
    return t[0] = -e[0],
    t[1] = -e[1],
    t[2] = -e[2],
    t
}
function inverse(t, e) {
    return t[0] = 1 / e[0],
    t[1] = 1 / e[1],
    t[2] = 1 / e[2],
    t
}
function normalize(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = i * i + r * r + s * s;
    return n > 0 && (n = 1 / Math.sqrt(n)),
    t[0] = e[0] * n,
    t[1] = e[1] * n,
    t[2] = e[2] * n,
    t
}
function dot(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
}
function cross(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = i[0]
      , h = i[1]
      , o = i[2];
    return t[0] = s * o - n * h,
    t[1] = n * a - r * o,
    t[2] = r * h - s * a,
    t
}
function lerp(t, e, i, r) {
    let s = e[0]
      , n = e[1]
      , a = e[2];
    return t[0] = s + r * (i[0] - s),
    t[1] = n + r * (i[1] - n),
    t[2] = a + r * (i[2] - a),
    t
}
function transformMat4(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = i[3] * r + i[7] * s + i[11] * n + i[15];
    return a = a || 1,
    t[0] = (i[0] * r + i[4] * s + i[8] * n + i[12]) / a,
    t[1] = (i[1] * r + i[5] * s + i[9] * n + i[13]) / a,
    t[2] = (i[2] * r + i[6] * s + i[10] * n + i[14]) / a,
    t
}
function transformQuat(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = i[0]
      , h = i[1]
      , o = i[2]
      , l = i[3]
      , u = h * n - o * s
      , c = o * r - a * n
      , _ = a * s - h * r
      , d = h * _ - o * c
      , g = o * u - a * _
      , p = a * c - h * u
      , m = 2 * l;
    return u *= m,
    c *= m,
    _ *= m,
    d *= 2,
    g *= 2,
    p *= 2,
    t[0] = r + u + d,
    t[1] = s + c + g,
    t[2] = n + _ + p,
    t
}
let angle = function() {
    let t = [0, 0, 0]
      , e = [0, 0, 0];
    return function(i, r) {
        copy(t, i),
        copy(e, r),
        normalize(t, t),
        normalize(e, e);
        let s = dot(t, e);
        return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s)
    }
}();
function exactEquals(t, e) {
    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
}
class Vec3 extends Array {
    constructor(t=0, e=t, i=t) {
        return super(t, e, i),
        this
    }
    get x() {
        return this[0]
    }
    set x(t) {
        this[0] = t
    }
    get y() {
        return this[1]
    }
    set y(t) {
        this[1] = t
    }
    get z() {
        return this[2]
    }
    set z(t) {
        this[2] = t
    }
    set(t, e=t, i=t) {
        return t.length ? this.copy(t) : (set(this, t, e, i),
        this)
    }
    copy(t) {
        return copy(this, t),
        this
    }
    add(t, e) {
        return e ? add(this, t, e) : add(this, this, t),
        this
    }
    sub(t, e) {
        return e ? subtract(this, t, e) : subtract(this, this, t),
        this
    }
    multiply(t) {
        return t.length ? multiply(this, this, t) : scale(this, this, t),
        this
    }
    divide(t) {
        return t.length ? divide(this, this, t) : scale(this, this, 1 / t),
        this
    }
    inverse(t=this) {
        return inverse(this, t),
        this
    }
    len() {
        return length(this)
    }
    distance(t) {
        return t ? distance(this, t) : length(this)
    }
    squaredLen() {
        return this.squaredDistance()
    }
    squaredDistance(t) {
        return t ? squaredDistance(this, t) : squaredLength(this)
    }
    negate(t=this) {
        return negate(this, t),
        this
    }
    cross(t, e) {
        return cross(this, t, e),
        this
    }
    scale(t) {
        return scale(this, this, t),
        this
    }
    normalize() {
        return normalize(this, this),
        this
    }
    dot(t) {
        return dot(this, t)
    }
    equals(t) {
        return exactEquals(this, t)
    }
    applyMatrix4(t) {
        return transformMat4(this, this, t),
        this
    }
    applyQuaternion(t) {
        return transformQuat(this, this, t),
        this
    }
    angle(t) {
        return angle(this, t)
    }
    lerp(t, e) {
        return lerp(this, this, t, e),
        this
    }
    clone() {
        return new Vec3(this[0],this[1],this[2])
    }
    fromArray(t, e=0) {
        return this[0] = t[e],
        this[1] = t[e + 1],
        this[2] = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this[0],
        t[e + 1] = this[1],
        t[e + 2] = this[2],
        t
    }
    transformDirection(t) {
        let e = this[0]
          , i = this[1]
          , r = this[2];
        return this[0] = t[0] * e + t[4] * i + t[8] * r,
        this[1] = t[1] * e + t[5] * i + t[9] * r,
        this[2] = t[2] * e + t[6] * i + t[10] * r,
        this.normalize()
    }
}
let tempVec3 = new Vec3
  , ID = 0
  , ATTR_ID = 0;
class Geometry {
    constructor(t, e={}) {
        for (let i in this.gl = t,
        this.attributes = e,
        this.id = ID++,
        this.VAOs = {},
        this.drawRange = {
            start: 0,
            count: 0
        },
        this.instancedCount = 0,
        this.gl.renderer.bindVertexArray(null),
        this.gl.renderer.currentGeometry = null,
        this.glState = this.gl.renderer.state,
        e)
            this.addAttribute(i, e[i])
    }
    addAttribute(t, e) {
        if (this.attributes[t] = e,
        e.id = ATTR_ID++,
        e.size = e.size || 1,
        e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
        e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
        e.normalize = e.normalize || !1,
        e.buffer = this.gl.createBuffer(),
        e.count = e.data.length / e.size,
        e.divisor = e.instanced || 0,
        e.needsUpdate = !1,
        this.updateAttribute(e),
        e.divisor) {
            if (this.isInstanced = !0,
            this.instancedCount && this.instancedCount !== e.count * e.divisor)
                return console.warn("geometry has multiple instanced buffers of different length"),
                this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
            this.instancedCount = e.count * e.divisor
        } else
            "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
    }
    updateAttribute(t) {
        this.glState.boundBuffer !== t.id && (this.gl.bindBuffer(t.target, t.buffer),
        this.glState.boundBuffer = t.id),
        this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW),
        t.needsUpdate = !1
    }
    setIndex(t) {
        this.addAttribute("index", t)
    }
    setDrawRange(t, e) {
        this.drawRange.start = t,
        this.drawRange.count = e
    }
    setInstancedCount(t) {
        this.instancedCount = t
    }
    createVAO(t) {
        this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(),
        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
        this.bindAttributes(t)
    }
    bindAttributes(t) {
        t.attributeLocations.forEach( (t, e) => {
            if (!this.attributes[e]) {
                console.warn(`active attribute ${e} not being supplied`);
                return
            }
            let i = this.attributes[e];
            this.gl.bindBuffer(i.target, i.buffer),
            this.glState.boundBuffer = i.id,
            this.gl.vertexAttribPointer(t, i.size, i.type, i.normalize, 0, 0),
            this.gl.enableVertexAttribArray(t),
            this.gl.renderer.vertexAttribDivisor(t, i.divisor)
        }
        ),
        this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
    }
    draw({program: t, mode: e=this.gl.TRIANGLES}) {
        this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t),
        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
        this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`),
        t.attributeLocations.forEach( (t, e) => {
            let i = this.attributes[e];
            i.needsUpdate && this.updateAttribute(i)
        }
        ),
        this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.drawRange.start) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
    }
    computeBoundingBox(t) {
        !t && this.attributes.position && (t = this.attributes.position.data),
        t || console.warn("No position buffer found to compute bounds"),
        this.bounds || (this.bounds = {
            min: new Vec3,
            max: new Vec3,
            center: new Vec3,
            scale: new Vec3,
            radius: 1 / 0
        });
        let e = this.bounds.min
          , i = this.bounds.max
          , r = this.bounds.center
          , s = this.bounds.scale;
        e.set(Infinity),
        i.set(-1 / 0);
        for (let n = 0, a = t.length; n < a; n += 3) {
            let h = t[n]
              , o = t[n + 1]
              , l = t[n + 2];
            e.x = Math.min(h, e.x),
            e.y = Math.min(o, e.y),
            e.z = Math.min(l, e.z),
            i.x = Math.max(h, i.x),
            i.y = Math.max(o, i.y),
            i.z = Math.max(l, i.z)
        }
        s.sub(i, e),
        r.add(e, i).divide(2)
    }
    computeBoundingSphere(t) {
        !t && this.attributes.position && (t = this.attributes.position.data),
        t || console.warn("No position buffer found to compute bounds"),
        this.bounds || this.computeBoundingBox(t);
        let e = 0;
        for (let i = 0, r = t.length; i < r; i += 3)
            tempVec3.fromArray(t, i),
            e = Math.max(e, this.bounds.center.squaredDistance(tempVec3));
        this.bounds.radius = Math.sqrt(e)
    }
    remove() {
        for (let t in this.vao && this.gl.renderer.deleteVertexArray(this.vao),
        this.attributes)
            this.gl.deleteBuffer(this.attributes[t].buffer),
            delete this.attributes[t]
    }
}
let ID$1 = 0
  , arrayCacheF32 = {};
class Program {
    constructor(t, {vertex: e, fragment: i, uniforms: r={}, transparent: s=!1, cullFace: n=t.BACK, frontFace: a=t.CCW, depthTest: h=!0, depthWrite: o=!0, depthFunc: l=t.LESS}={}) {
        this.gl = t,
        this.uniforms = r,
        this.id = ID$1++,
        e || console.warn("vertex shader not supplied"),
        i || console.warn("fragment shader not supplied"),
        this.transparent = s,
        this.cullFace = n,
        this.frontFace = a,
        this.depthTest = h,
        this.depthWrite = o,
        this.depthFunc = l,
        this.blendFunc = {},
        this.blendEquation = {},
        this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
        let u = t.createShader(t.VERTEX_SHADER);
        t.shaderSource(u, e),
        t.compileShader(u),
        "" !== t.getShaderInfoLog(u) && console.warn(`${t.getShaderInfoLog(u)}
Vertex Shader
${addLineNumbers(e)}`);
        let c = t.createShader(t.FRAGMENT_SHADER);
        if (t.shaderSource(c, i),
        t.compileShader(c),
        "" !== t.getShaderInfoLog(c) && console.warn(`${t.getShaderInfoLog(c)}
Fragment Shader
${addLineNumbers(i)}`),
        this.program = t.createProgram(),
        t.attachShader(this.program, u),
        t.attachShader(this.program, c),
        t.linkProgram(this.program),
        !t.getProgramParameter(this.program, t.LINK_STATUS))
            return console.warn(t.getProgramInfoLog(this.program));
        t.deleteShader(u),
        t.deleteShader(c),
        this.uniformLocations = new Map;
        let _ = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
        for (let d = 0; d < _; d++) {
            let g = t.getActiveUniform(this.program, d);
            this.uniformLocations.set(g, t.getUniformLocation(this.program, g.name));
            let p = g.name.match(/(\w+)/g);
            g.uniformName = p[0],
            3 === p.length ? (g.isStructArray = !0,
            g.structIndex = Number(p[1]),
            g.structProperty = p[2]) : 2 === p.length && isNaN(Number(p[1])) && (g.isStruct = !0,
            g.structProperty = p[1])
        }
        this.attributeLocations = new Map;
        let m = []
          , $ = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
        for (let f = 0; f < $; f++) {
            let x = t.getActiveAttrib(this.program, f)
              , v = t.getAttribLocation(this.program, x.name);
            m[v] = x.name,
            this.attributeLocations.set(x.name, v)
        }
        this.attributeOrder = m.join("")
    }
    setBlendFunc(t, e, i, r) {
        this.blendFunc.src = t,
        this.blendFunc.dst = e,
        this.blendFunc.srcAlpha = i,
        this.blendFunc.dstAlpha = r,
        t && (this.transparent = !0)
    }
    setBlendEquation(t, e) {
        this.blendEquation.modeRGB = t,
        this.blendEquation.modeAlpha = e
    }
    applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
        this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
        this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
        this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
        this.gl.renderer.setFrontFace(this.frontFace),
        this.gl.renderer.setDepthMask(this.depthWrite),
        this.gl.renderer.setDepthFunc(this.depthFunc),
        this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
        this.blendEquation.modeRGB && this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
    }
    use({flipFaces: t=!1}={}) {
        let e = -1
          , i = this.gl.renderer.currentProgram === this.id;
        i || (this.gl.useProgram(this.program),
        this.gl.renderer.currentProgram = this.id),
        this.uniformLocations.forEach( (t, i) => {
            let r = i.uniformName
              , s = this.uniforms[r];
            if (i.isStruct && (s = s[i.structProperty],
            r += `.${i.structProperty}`),
            i.isStructArray && (s = s[i.structIndex][i.structProperty],
            r += `[${i.structIndex}].${i.structProperty}`),
            !s)
                return warn(`Active uniform ${r} has not been supplied`);
            if (s && void 0 === s.value)
                return warn(`${r} uniform is missing a value parameter`);
            if (s.value.texture)
                return e += 1,
                s.value.update(e),
                setUniform(this.gl, i.type, t, e);
            if (s.value.length && s.value[0].texture) {
                let n = [];
                return s.value.forEach(t => {
                    e += 1,
                    t.update(e),
                    n.push(e)
                }
                ),
                setUniform(this.gl, i.type, t, n)
            }
            setUniform(this.gl, i.type, t, s.value)
        }
        ),
        this.applyState(),
        t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
    }
    remove() {
        this.gl.deleteProgram(this.program)
    }
}
function setUniform(t, e, i, r) {
    r = r.length ? flatten(r) : r;
    let s = t.renderer.state.uniformLocations.get(i);
    if (r.length) {
        if (void 0 === s)
            t.renderer.state.uniformLocations.set(i, r.slice(0));
        else {
            if (arraysEqual(s, r))
                return;
            s.set ? s.set(r) : setArray(s, r),
            t.renderer.state.uniformLocations.set(i, s)
        }
    } else {
        if (s === r)
            return;
        t.renderer.state.uniformLocations.set(i, r)
    }
    switch (e) {
    case 5126:
        return r.length ? t.uniform1fv(i, r) : t.uniform1f(i, r);
    case 35664:
        return t.uniform2fv(i, r);
    case 35665:
        return t.uniform3fv(i, r);
    case 35666:
        return t.uniform4fv(i, r);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
        return r.length ? t.uniform1iv(i, r) : t.uniform1i(i, r);
    case 35671:
    case 35667:
        return t.uniform2iv(i, r);
    case 35672:
    case 35668:
        return t.uniform3iv(i, r);
    case 35673:
    case 35669:
        return t.uniform4iv(i, r);
    case 35674:
        return t.uniformMatrix2fv(i, !1, r);
    case 35675:
        return t.uniformMatrix3fv(i, !1, r);
    case 35676:
        return t.uniformMatrix4fv(i, !1, r)
    }
}
function addLineNumbers(t) {
    let e = t.split("\n");
    for (let i = 0; i < e.length; i++)
        e[i] = i + 1 + ": " + e[i];
    return e.join("\n")
}
function flatten(t) {
    let e = t.length
      , i = t[0].length;
    if (void 0 === i)
        return t;
    let r = e * i
      , s = arrayCacheF32[r];
    s || (arrayCacheF32[r] = s = new Float32Array(r));
    for (let n = 0; n < e; n++)
        s.set(t[n], n * i);
    return s
}
function arraysEqual(t, e) {
    if (t.length !== e.length)
        return !1;
    for (let i = 0, r = t.length; i < r; i++)
        if (t[i] !== e[i])
            return !1;
    return !0
}
function setArray(t, e) {
    for (let i = 0, r = t.length; i < r; i++)
        t[i] = e[i]
}
let warnCount = 0;
function warn(t) {
    !(warnCount > 100) && (console.warn(t),
    ++warnCount > 100 && console.warn("More than 100 program warnings - stopping logs."))
}
let tempVec3$1 = new Vec3;
class Renderer {
    constructor({canvas: t=document.createElement("canvas"), width: e=300, height: i=150, dpr: r=1, alpha: s=!1, depth: n=!0, stencil: a=!1, antialias: h=!1, premultipliedAlpha: o=!1, preserveDrawingBuffer: l=!1, powerPreference: u="default", autoClear: c=!0, webgl: _=2}={}) {
        let d = {
            alpha: s,
            depth: n,
            stencil: a,
            antialias: h,
            premultipliedAlpha: o,
            preserveDrawingBuffer: l,
            powerPreference: u
        };
        this.dpr = r,
        this.alpha = s,
        this.color = !0,
        this.depth = n,
        this.stencil = a,
        this.premultipliedAlpha = o,
        this.autoClear = c,
        2 === _ && (this.gl = t.getContext("webgl2", d)),
        this.isWebgl2 = !!this.gl,
        this.gl || (this.gl = t.getContext("webgl", d) || t.getContext("experimental-webgl", d)),
        this.gl.renderer = this,
        this.setSize(e, i),
        this.parameters = {},
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        this.state = {},
        this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        },
        this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        },
        this.state.cullFace = null,
        this.state.frontFace = this.gl.CCW,
        this.state.depthMask = !0,
        this.state.depthFunc = this.gl.LESS,
        this.state.premultiplyAlpha = !1,
        this.state.flipY = !1,
        this.state.unpackAlignment = 4,
        this.state.framebuffer = null,
        this.state.viewport = {
            width: null,
            height: null
        },
        this.state.textureUnits = [],
        this.state.activeTextureUnit = 0,
        this.state.boundBuffer = null,
        this.state.uniformLocations = new Map,
        this.extensions = {},
        this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
        this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
        this.getExtension("OES_texture_float_linear"),
        this.getExtension("OES_texture_half_float"),
        this.getExtension("OES_texture_half_float_linear"),
        this.getExtension("OES_element_index_uint"),
        this.getExtension("OES_standard_derivatives"),
        this.getExtension("EXT_sRGB"),
        this.getExtension("WEBGL_depth_texture"),
        this.getExtension("WEBGL_draw_buffers")),
        this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
        this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
        this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
        this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
        this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
        this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
        this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL")
    }
    setSize(t, e) {
        this.width = t,
        this.height = e,
        this.gl.canvas.width = t * this.dpr,
        this.gl.canvas.height = e * this.dpr,
        Object.assign(this.gl.canvas.style, {
            width: t + "px",
            height: e + "px"
        })
    }
    setViewport(t, e) {
        (this.state.viewport.width !== t || this.state.viewport.height !== e) && (this.state.viewport.width = t,
        this.state.viewport.height = e,
        this.gl.viewport(0, 0, t, e))
    }
    enable(t) {
        !0 !== this.state[t] && (this.gl.enable(t),
        this.state[t] = !0)
    }
    disable(t) {
        !1 !== this.state[t] && (this.gl.disable(t),
        this.state[t] = !1)
    }
    setBlendFunc(t, e, i, r) {
        (this.state.blendFunc.src !== t || this.state.blendFunc.dst !== e || this.state.blendFunc.srcAlpha !== i || this.state.blendFunc.dstAlpha !== r) && (this.state.blendFunc.src = t,
        this.state.blendFunc.dst = e,
        this.state.blendFunc.srcAlpha = i,
        this.state.blendFunc.dstAlpha = r,
        void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, r) : this.gl.blendFunc(t, e))
    }
    setBlendEquation(t, e) {
        (this.state.blendEquation.modeRGB !== t || this.state.blendEquation.modeAlpha !== e) && (this.state.blendEquation.modeRGB = t,
        this.state.blendEquation.modeAlpha = e,
        void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
    }
    setCullFace(t) {
        this.state.cullFace !== t && (this.state.cullFace = t,
        this.gl.cullFace(t))
    }
    setFrontFace(t) {
        this.state.frontFace !== t && (this.state.frontFace = t,
        this.gl.frontFace(t))
    }
    setDepthMask(t) {
        this.state.depthMask !== t && (this.state.depthMask = t,
        this.gl.depthMask(t))
    }
    setDepthFunc(t) {
        this.state.depthFunc !== t && (this.state.depthFunc = t,
        this.gl.depthFunc(t))
    }
    activeTexture(t) {
        this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t,
        this.gl.activeTexture(this.gl.TEXTURE0 + t))
    }
    bindFramebuffer({target: t=this.gl.FRAMEBUFFER, buffer: e=null}={}) {
        this.state.framebuffer !== e && (this.state.framebuffer = e,
        this.gl.bindFramebuffer(t, e))
    }
    getExtension(t, e, i) {
        return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
        e) ? this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null : this.extensions[t]
    }
    sortOpaque(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
    }
    sortTransparent(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
    }
    sortUI(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
    }
    getRenderList({scene: t, camera: e, frustumCull: i, sort: r}) {
        let s = [];
        if (e && i && e.updateFrustum(),
        t.traverse(t => {
            if (!t.visible)
                return !0;
            if (t.draw) {
                if (i && t.frustumCulled && e && !e.frustumIntersectsMesh(t))
                    return;
                s.push(t)
            }
        }
        ),
        r) {
            let n = []
              , a = []
              , h = [];
            s.forEach(t => {
                t.program.transparent ? t.program.depthTest ? a.push(t) : h.push(t) : n.push(t),
                t.zDepth = 0,
                0 === t.renderOrder && t.program.depthTest && e && (t.worldMatrix.getTranslation(tempVec3$1),
                tempVec3$1.applyMatrix4(e.projectionViewMatrix),
                t.zDepth = tempVec3$1.z)
            }
            ),
            n.sort(this.sortOpaque),
            a.sort(this.sortTransparent),
            h.sort(this.sortUI),
            s = n.concat(a, h)
        }
        return s
    }
    render({scene: t, camera: e, target: i=null, update: r=!0, sort: s=!0, frustumCull: n=!0, clear: a}) {
        null === i ? (this.bindFramebuffer(),
        this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i),
        this.setViewport(i.width, i.height)),
        (a || this.autoClear && !1 !== a) && (this.depth && (!i || i.depth) && (this.enable(this.gl.DEPTH_TEST),
        this.setDepthMask(!0)),
        this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
        r && t.updateMatrixWorld(),
        e && null === e.parent && e.updateMatrixWorld();
        let h = this.getRenderList({
            scene: t,
            camera: e,
            frustumCull: n,
            sort: s
        });
        h.forEach(t => {
            t.draw({
                camera: e
            })
        }
        )
    }
}
function copy$1(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t
}
function set$1(t, e, i, r, s) {
    return t[0] = e,
    t[1] = i,
    t[2] = r,
    t[3] = s,
    t
}
function normalize$1(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[3]
      , a = i * i + r * r + s * s + n * n;
    return a > 0 && (a = 1 / Math.sqrt(a)),
    t[0] = i * a,
    t[1] = r * a,
    t[2] = s * a,
    t[3] = n * a,
    t
}
function dot$1(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
}
function identity(t) {
    return t[0] = 0,
    t[1] = 0,
    t[2] = 0,
    t[3] = 1,
    t
}
function setAxisAngle(t, e, i) {
    let r = Math.sin(i *= .5);
    return t[0] = r * e[0],
    t[1] = r * e[1],
    t[2] = r * e[2],
    t[3] = Math.cos(i),
    t
}
function multiply$1(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = i[0]
      , o = i[1]
      , l = i[2]
      , u = i[3];
    return t[0] = r * u + a * h + s * l - n * o,
    t[1] = s * u + a * o + n * h - r * l,
    t[2] = n * u + a * l + r * o - s * h,
    t[3] = a * u - r * h - s * o - n * l,
    t
}
function rotateX(t, e, i) {
    i *= .5;
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = Math.sin(i)
      , o = Math.cos(i);
    return t[0] = r * o + a * h,
    t[1] = s * o + n * h,
    t[2] = n * o - s * h,
    t[3] = a * o - r * h,
    t
}
function rotateY(t, e, i) {
    i *= .5;
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = Math.sin(i)
      , o = Math.cos(i);
    return t[0] = r * o - n * h,
    t[1] = s * o + a * h,
    t[2] = n * o + r * h,
    t[3] = a * o - s * h,
    t
}
function rotateZ(t, e, i) {
    i *= .5;
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = Math.sin(i)
      , o = Math.cos(i);
    return t[0] = r * o + s * h,
    t[1] = s * o - r * h,
    t[2] = n * o + a * h,
    t[3] = a * o - n * h,
    t
}
function slerp(t, e, i, r) {
    let s = e[0], n = e[1], a = e[2], h = e[3], o = i[0], l = i[1], u = i[2], c = i[3], _, d, g, p, m;
    return (d = s * o + n * l + a * u + h * c) < 0 && (d = -d,
    o = -o,
    l = -l,
    u = -u,
    c = -c),
    1 - d > 1e-6 ? (p = Math.sin((1 - r) * _) / (g = Math.sin(_ = Math.acos(d))),
    m = Math.sin(r * _) / g) : (p = 1 - r,
    m = r),
    t[0] = p * s + m * o,
    t[1] = p * n + m * l,
    t[2] = p * a + m * u,
    t[3] = p * h + m * c,
    t
}
function invert(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[3]
      , a = i * i + r * r + s * s + n * n
      , h = a ? 1 / a : 0;
    return t[0] = -i * h,
    t[1] = -r * h,
    t[2] = -s * h,
    t[3] = n * h,
    t
}
function conjugate(t, e) {
    return t[0] = -e[0],
    t[1] = -e[1],
    t[2] = -e[2],
    t[3] = e[3],
    t
}
function fromMat3(t, e) {
    let i = e[0] + e[4] + e[8], r;
    if (i > 0)
        r = Math.sqrt(i + 1),
        t[3] = .5 * r,
        r = .5 / r,
        t[0] = (e[5] - e[7]) * r,
        t[1] = (e[6] - e[2]) * r,
        t[2] = (e[1] - e[3]) * r;
    else {
        let s = 0;
        e[4] > e[0] && (s = 1),
        e[8] > e[3 * s + s] && (s = 2);
        let n = (s + 1) % 3
          , a = (s + 2) % 3;
        r = Math.sqrt(e[3 * s + s] - e[3 * n + n] - e[3 * a + a] + 1),
        t[s] = .5 * r,
        r = .5 / r,
        t[3] = (e[3 * n + a] - e[3 * a + n]) * r,
        t[n] = (e[3 * n + s] + e[3 * s + n]) * r,
        t[a] = (e[3 * a + s] + e[3 * s + a]) * r
    }
    return t
}
function fromEuler(t, e, i="YXZ") {
    let r = Math.sin(.5 * e[0])
      , s = Math.cos(.5 * e[0])
      , n = Math.sin(.5 * e[1])
      , a = Math.cos(.5 * e[1])
      , h = Math.sin(.5 * e[2])
      , o = Math.cos(.5 * e[2]);
    return "XYZ" === i ? (t[0] = r * a * o + s * n * h,
    t[1] = s * n * o - r * a * h,
    t[2] = s * a * h + r * n * o,
    t[3] = s * a * o - r * n * h) : "YXZ" === i ? (t[0] = r * a * o + s * n * h,
    t[1] = s * n * o - r * a * h,
    t[2] = s * a * h - r * n * o,
    t[3] = s * a * o + r * n * h) : "ZXY" === i ? (t[0] = r * a * o - s * n * h,
    t[1] = s * n * o + r * a * h,
    t[2] = s * a * h + r * n * o,
    t[3] = s * a * o - r * n * h) : "ZYX" === i ? (t[0] = r * a * o - s * n * h,
    t[1] = s * n * o + r * a * h,
    t[2] = s * a * h - r * n * o,
    t[3] = s * a * o + r * n * h) : "YZX" === i ? (t[0] = r * a * o + s * n * h,
    t[1] = s * n * o + r * a * h,
    t[2] = s * a * h - r * n * o,
    t[3] = s * a * o - r * n * h) : "XZY" === i && (t[0] = r * a * o - s * n * h,
    t[1] = s * n * o - r * a * h,
    t[2] = s * a * h + r * n * o,
    t[3] = s * a * o + r * n * h),
    t
}
let copy$2 = copy$1
  , set$2 = set$1
  , dot$2 = dot$1
  , normalize$2 = normalize$1;
class Quat extends Array {
    constructor(t=0, e=0, i=0, r=1) {
        return super(t, e, i, r),
        this.onChange = () => {}
        ,
        this
    }
    get x() {
        return this[0]
    }
    set x(t) {
        this[0] = t,
        this.onChange()
    }
    get y() {
        return this[1]
    }
    set y(t) {
        this[1] = t,
        this.onChange()
    }
    get z() {
        return this[2]
    }
    set z(t) {
        this[2] = t,
        this.onChange()
    }
    get w() {
        return this[3]
    }
    set w(t) {
        this[3] = t,
        this.onChange()
    }
    identity() {
        return identity(this),
        this.onChange(),
        this
    }
    set(t, e, i, r) {
        return t.length ? this.copy(t) : (set$2(this, t, e, i, r),
        this.onChange(),
        this)
    }
    rotateX(t) {
        return rotateX(this, this, t),
        this.onChange(),
        this
    }
    rotateY(t) {
        return rotateY(this, this, t),
        this.onChange(),
        this
    }
    rotateZ(t) {
        return rotateZ(this, this, t),
        this.onChange(),
        this
    }
    inverse(t=this) {
        return invert(this, t),
        this.onChange(),
        this
    }
    conjugate(t=this) {
        return conjugate(this, t),
        this.onChange(),
        this
    }
    copy(t) {
        return copy$2(this, t),
        this.onChange(),
        this
    }
    normalize(t=this) {
        return normalize$2(this, t),
        this.onChange(),
        this
    }
    multiply(t, e) {
        return e ? multiply$1(this, t, e) : multiply$1(this, this, t),
        this.onChange(),
        this
    }
    dot(t) {
        return dot$2(this, t)
    }
    fromMatrix3(t) {
        return fromMat3(this, t),
        this.onChange(),
        this
    }
    fromEuler(t) {
        return fromEuler(this, t, t.order),
        this
    }
    fromAxisAngle(t, e) {
        return setAxisAngle(this, t, e),
        this
    }
    slerp(t, e) {
        return slerp(this, this, t, e),
        this
    }
    fromArray(t, e=0) {
        return this[0] = t[e],
        this[1] = t[e + 1],
        this[2] = t[e + 2],
        this[3] = t[e + 3],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this[0],
        t[e + 1] = this[1],
        t[e + 2] = this[2],
        t[e + 3] = this[3],
        t
    }
}
function copy$3(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t[4] = e[4],
    t[5] = e[5],
    t[6] = e[6],
    t[7] = e[7],
    t[8] = e[8],
    t[9] = e[9],
    t[10] = e[10],
    t[11] = e[11],
    t[12] = e[12],
    t[13] = e[13],
    t[14] = e[14],
    t[15] = e[15],
    t
}
function set$3(t, e, i, r, s, n, a, h, o, l, u, c, _, d, g, p, m) {
    return t[0] = e,
    t[1] = i,
    t[2] = r,
    t[3] = s,
    t[4] = n,
    t[5] = a,
    t[6] = h,
    t[7] = o,
    t[8] = l,
    t[9] = u,
    t[10] = c,
    t[11] = _,
    t[12] = d,
    t[13] = g,
    t[14] = p,
    t[15] = m,
    t
}
function identity$1(t) {
    return t[0] = 1,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 0,
    t[5] = 1,
    t[6] = 0,
    t[7] = 0,
    t[8] = 0,
    t[9] = 0,
    t[10] = 1,
    t[11] = 0,
    t[12] = 0,
    t[13] = 0,
    t[14] = 0,
    t[15] = 1,
    t
}
function invert$1(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[3]
      , a = e[4]
      , h = e[5]
      , o = e[6]
      , l = e[7]
      , u = e[8]
      , c = e[9]
      , _ = e[10]
      , d = e[11]
      , g = e[12]
      , p = e[13]
      , m = e[14]
      , $ = e[15]
      , f = i * h - r * a
      , x = i * o - s * a
      , v = i * l - n * a
      , b = r * o - s * h
      , w = r * l - n * h
      , E = s * l - n * o
      , y = u * p - c * g
      , A = u * m - _ * g
      , T = u * $ - d * g
      , M = c * m - _ * p
      , R = c * $ - d * p
      , F = _ * $ - d * m
      , S = f * F - x * R + v * M + b * T - w * A + E * y;
    return S ? (S = 1 / S,
    t[0] = (h * F - o * R + l * M) * S,
    t[1] = (s * R - r * F - n * M) * S,
    t[2] = (p * E - m * w + $ * b) * S,
    t[3] = (_ * w - c * E - d * b) * S,
    t[4] = (o * T - a * F - l * A) * S,
    t[5] = (i * F - s * T + n * A) * S,
    t[6] = (m * v - g * E - $ * x) * S,
    t[7] = (u * E - _ * v + d * x) * S,
    t[8] = (a * R - h * T + l * y) * S,
    t[9] = (r * T - i * R - n * y) * S,
    t[10] = (g * w - p * v + $ * f) * S,
    t[11] = (c * v - u * w - d * f) * S,
    t[12] = (h * A - a * M - o * y) * S,
    t[13] = (i * M - r * A + s * y) * S,
    t[14] = (p * x - g * b - m * f) * S,
    t[15] = (u * b - c * x + _ * f) * S,
    t) : null
}
function determinant(t) {
    let e = t[0]
      , i = t[1]
      , r = t[2]
      , s = t[3]
      , n = t[4]
      , a = t[5]
      , h = t[6]
      , o = t[7]
      , l = t[8]
      , u = t[9]
      , c = t[10]
      , _ = t[11]
      , d = t[12]
      , g = t[13]
      , p = t[14]
      , m = t[15];
    return (e * a - i * n) * (c * m - _ * p) - (e * h - r * n) * (u * m - _ * g) + (e * o - s * n) * (u * p - c * g) + (i * h - r * a) * (l * m - _ * d) - (i * o - s * a) * (l * p - c * d) + (r * o - s * h) * (l * g - u * d)
}
function multiply$2(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = e[4]
      , o = e[5]
      , l = e[6]
      , u = e[7]
      , c = e[8]
      , _ = e[9]
      , d = e[10]
      , g = e[11]
      , p = e[12]
      , m = e[13]
      , $ = e[14]
      , f = e[15]
      , x = i[0]
      , v = i[1]
      , b = i[2]
      , w = i[3];
    return t[0] = x * r + v * h + b * c + w * p,
    t[1] = x * s + v * o + b * _ + w * m,
    t[2] = x * n + v * l + b * d + w * $,
    t[3] = x * a + v * u + b * g + w * f,
    x = i[4],
    v = i[5],
    b = i[6],
    w = i[7],
    t[4] = x * r + v * h + b * c + w * p,
    t[5] = x * s + v * o + b * _ + w * m,
    t[6] = x * n + v * l + b * d + w * $,
    t[7] = x * a + v * u + b * g + w * f,
    x = i[8],
    v = i[9],
    b = i[10],
    w = i[11],
    t[8] = x * r + v * h + b * c + w * p,
    t[9] = x * s + v * o + b * _ + w * m,
    t[10] = x * n + v * l + b * d + w * $,
    t[11] = x * a + v * u + b * g + w * f,
    x = i[12],
    v = i[13],
    b = i[14],
    w = i[15],
    t[12] = x * r + v * h + b * c + w * p,
    t[13] = x * s + v * o + b * _ + w * m,
    t[14] = x * n + v * l + b * d + w * $,
    t[15] = x * a + v * u + b * g + w * f,
    t
}
function translate(t, e, i) {
    let r = i[0], s = i[1], n = i[2], a, h, o, l, u, c, _, d, g, p, m, $;
    return e === t ? (t[12] = e[0] * r + e[4] * s + e[8] * n + e[12],
    t[13] = e[1] * r + e[5] * s + e[9] * n + e[13],
    t[14] = e[2] * r + e[6] * s + e[10] * n + e[14],
    t[15] = e[3] * r + e[7] * s + e[11] * n + e[15]) : (a = e[0],
    h = e[1],
    o = e[2],
    l = e[3],
    u = e[4],
    c = e[5],
    _ = e[6],
    d = e[7],
    g = e[8],
    p = e[9],
    m = e[10],
    $ = e[11],
    t[0] = a,
    t[1] = h,
    t[2] = o,
    t[3] = l,
    t[4] = u,
    t[5] = c,
    t[6] = _,
    t[7] = d,
    t[8] = g,
    t[9] = p,
    t[10] = m,
    t[11] = $,
    t[12] = a * r + u * s + g * n + e[12],
    t[13] = h * r + c * s + p * n + e[13],
    t[14] = o * r + _ * s + m * n + e[14],
    t[15] = l * r + d * s + $ * n + e[15]),
    t
}
function scale$1(t, e, i) {
    let r = i[0]
      , s = i[1]
      , n = i[2];
    return t[0] = e[0] * r,
    t[1] = e[1] * r,
    t[2] = e[2] * r,
    t[3] = e[3] * r,
    t[4] = e[4] * s,
    t[5] = e[5] * s,
    t[6] = e[6] * s,
    t[7] = e[7] * s,
    t[8] = e[8] * n,
    t[9] = e[9] * n,
    t[10] = e[10] * n,
    t[11] = e[11] * n,
    t[12] = e[12],
    t[13] = e[13],
    t[14] = e[14],
    t[15] = e[15],
    t
}
function rotateX$1(t, e, i) {
    let r = Math.sin(i)
      , s = Math.cos(i)
      , n = e[4]
      , a = e[5]
      , h = e[6]
      , o = e[7]
      , l = e[8]
      , u = e[9]
      , c = e[10]
      , _ = e[11];
    return e !== t && (t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t[12] = e[12],
    t[13] = e[13],
    t[14] = e[14],
    t[15] = e[15]),
    t[4] = n * s + l * r,
    t[5] = a * s + u * r,
    t[6] = h * s + c * r,
    t[7] = o * s + _ * r,
    t[8] = l * s - n * r,
    t[9] = u * s - a * r,
    t[10] = c * s - h * r,
    t[11] = _ * s - o * r,
    t
}
function rotateY$1(t, e, i) {
    let r = Math.sin(i)
      , s = Math.cos(i)
      , n = e[0]
      , a = e[1]
      , h = e[2]
      , o = e[3]
      , l = e[8]
      , u = e[9]
      , c = e[10]
      , _ = e[11];
    return e !== t && (t[4] = e[4],
    t[5] = e[5],
    t[6] = e[6],
    t[7] = e[7],
    t[12] = e[12],
    t[13] = e[13],
    t[14] = e[14],
    t[15] = e[15]),
    t[0] = n * s - l * r,
    t[1] = a * s - u * r,
    t[2] = h * s - c * r,
    t[3] = o * s - _ * r,
    t[8] = n * r + l * s,
    t[9] = a * r + u * s,
    t[10] = h * r + c * s,
    t[11] = o * r + _ * s,
    t
}
function rotateZ$1(t, e, i) {
    let r = Math.sin(i)
      , s = Math.cos(i)
      , n = e[0]
      , a = e[1]
      , h = e[2]
      , o = e[3]
      , l = e[4]
      , u = e[5]
      , c = e[6]
      , _ = e[7];
    return e !== t && (t[8] = e[8],
    t[9] = e[9],
    t[10] = e[10],
    t[11] = e[11],
    t[12] = e[12],
    t[13] = e[13],
    t[14] = e[14],
    t[15] = e[15]),
    t[0] = n * s + l * r,
    t[1] = a * s + u * r,
    t[2] = h * s + c * r,
    t[3] = o * s + _ * r,
    t[4] = l * s - n * r,
    t[5] = u * s - a * r,
    t[6] = c * s - h * r,
    t[7] = _ * s - o * r,
    t
}
function getTranslation(t, e) {
    return t[0] = e[12],
    t[1] = e[13],
    t[2] = e[14],
    t
}
function getScaling(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[4]
      , a = e[5]
      , h = e[6]
      , o = e[8]
      , l = e[9]
      , u = e[10];
    return t[0] = Math.sqrt(i * i + r * r + s * s),
    t[1] = Math.sqrt(n * n + a * a + h * h),
    t[2] = Math.sqrt(o * o + l * l + u * u),
    t
}
function getMaxScaleOnAxis(t) {
    let e = t[0]
      , i = t[1]
      , r = t[2]
      , s = t[4]
      , n = t[5]
      , a = t[6]
      , h = t[8]
      , o = t[9]
      , l = t[10];
    return Math.sqrt(Math.max(e * e + i * i + r * r, s * s + n * n + a * a, h * h + o * o + l * l))
}
function getRotation(t, e) {
    let i = e[0] + e[5] + e[10]
      , r = 0;
    return i > 0 ? (r = 2 * Math.sqrt(i + 1),
    t[3] = .25 * r,
    t[0] = (e[6] - e[9]) / r,
    t[1] = (e[8] - e[2]) / r,
    t[2] = (e[1] - e[4]) / r) : e[0] > e[5] && e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]),
    t[3] = (e[6] - e[9]) / r,
    t[0] = .25 * r,
    t[1] = (e[1] + e[4]) / r,
    t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]),
    t[3] = (e[8] - e[2]) / r,
    t[0] = (e[1] + e[4]) / r,
    t[1] = .25 * r,
    t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]),
    t[3] = (e[1] - e[4]) / r,
    t[0] = (e[8] + e[2]) / r,
    t[1] = (e[6] + e[9]) / r,
    t[2] = .25 * r),
    t
}
function fromRotationTranslationScale(t, e, i, r) {
    let s = e[0]
      , n = e[1]
      , a = e[2]
      , h = e[3]
      , o = s + s
      , l = n + n
      , u = a + a
      , c = s * o
      , _ = s * l
      , d = s * u
      , g = n * l
      , p = n * u
      , m = a * u
      , $ = h * o
      , f = h * l
      , x = h * u
      , v = r[0]
      , b = r[1]
      , w = r[2];
    return t[0] = (1 - (g + m)) * v,
    t[1] = (_ + x) * v,
    t[2] = (d - f) * v,
    t[3] = 0,
    t[4] = (_ - x) * b,
    t[5] = (1 - (c + m)) * b,
    t[6] = (p + $) * b,
    t[7] = 0,
    t[8] = (d + f) * w,
    t[9] = (p - $) * w,
    t[10] = (1 - (c + g)) * w,
    t[11] = 0,
    t[12] = i[0],
    t[13] = i[1],
    t[14] = i[2],
    t[15] = 1,
    t
}
function fromQuat(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[3]
      , a = i + i
      , h = r + r
      , o = s + s
      , l = i * a
      , u = r * a
      , c = r * h
      , _ = s * a
      , d = s * h
      , g = s * o
      , p = n * a
      , m = n * h
      , $ = n * o;
    return t[0] = 1 - c - g,
    t[1] = u + $,
    t[2] = _ - m,
    t[3] = 0,
    t[4] = u - $,
    t[5] = 1 - l - g,
    t[6] = d + p,
    t[7] = 0,
    t[8] = _ + m,
    t[9] = d - p,
    t[10] = 1 - l - c,
    t[11] = 0,
    t[12] = 0,
    t[13] = 0,
    t[14] = 0,
    t[15] = 1,
    t
}
function perspective(t, e, i, r, s) {
    let n = 1 / Math.tan(e / 2)
      , a = 1 / (r - s);
    return t[0] = n / i,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 0,
    t[5] = n,
    t[6] = 0,
    t[7] = 0,
    t[8] = 0,
    t[9] = 0,
    t[10] = (s + r) * a,
    t[11] = -1,
    t[12] = 0,
    t[13] = 0,
    t[14] = 2 * s * r * a,
    t[15] = 0,
    t
}
function ortho(t, e, i, r, s, n, a) {
    let h = 1 / (e - i)
      , o = 1 / (r - s)
      , l = 1 / (n - a);
    return t[0] = -2 * h,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 0,
    t[5] = -2 * o,
    t[6] = 0,
    t[7] = 0,
    t[8] = 0,
    t[9] = 0,
    t[10] = 2 * l,
    t[11] = 0,
    t[12] = (e + i) * h,
    t[13] = (s + r) * o,
    t[14] = (a + n) * l,
    t[15] = 1,
    t
}
function targetTo(t, e, i, r) {
    let s = e[0]
      , n = e[1]
      , a = e[2]
      , h = r[0]
      , o = r[1]
      , l = r[2]
      , u = s - i[0]
      , c = n - i[1]
      , _ = a - i[2]
      , d = u * u + c * c + _ * _;
    d > 0 && (u *= d = 1 / Math.sqrt(d),
    c *= d,
    _ *= d);
    let g = o * _ - l * c
      , p = l * u - h * _
      , m = h * c - o * u;
    return (d = g * g + p * p + m * m) > 0 && (g *= d = 1 / Math.sqrt(d),
    p *= d,
    m *= d),
    t[0] = g,
    t[1] = p,
    t[2] = m,
    t[3] = 0,
    t[4] = c * m - _ * p,
    t[5] = _ * g - u * m,
    t[6] = u * p - c * g,
    t[7] = 0,
    t[8] = u,
    t[9] = c,
    t[10] = _,
    t[11] = 0,
    t[12] = s,
    t[13] = n,
    t[14] = a,
    t[15] = 1,
    t
}
class Mat4 extends Array {
    constructor(t=1, e=0, i=0, r=0, s=0, n=1, a=0, h=0, o=0, l=0, u=1, c=0, _=0, d=0, g=0, p=1) {
        return super(t, e, i, r, s, n, a, h, o, l, u, c, _, d, g, p),
        this
    }
    set x(t) {
        this[12] = t
    }
    get x() {
        return this[12]
    }
    set y(t) {
        this[13] = t
    }
    get y() {
        return this[13]
    }
    set z(t) {
        this[14] = t
    }
    get z() {
        return this[14]
    }
    set w(t) {
        this[15] = t
    }
    get w() {
        return this[15]
    }
    set(t, e, i, r, s, n, a, h, o, l, u, c, _, d, g, p) {
        return t.length ? this.copy(t) : (set$3(this, t, e, i, r, s, n, a, h, o, l, u, c, _, d, g, p),
        this)
    }
    translate(t, e=this) {
        return translate(this, e, t),
        this
    }
    rotateX(t, e=this) {
        return rotateX$1(this, e, t),
        this
    }
    rotateY(t, e=this) {
        return rotateY$1(this, e, t),
        this
    }
    rotateZ(t, e=this) {
        return rotateZ$1(this, e, t),
        this
    }
    scale(t, e=this) {
        return scale$1(this, e, "number" == typeof t ? [t, t, t] : t),
        this
    }
    multiply(t, e) {
        return e ? multiply$2(this, t, e) : multiply$2(this, this, t),
        this
    }
    identity() {
        return identity$1(this),
        this
    }
    copy(t) {
        return copy$3(this, t),
        this
    }
    fromPerspective({fov: t, aspect: e, near: i, far: r}={}) {
        return perspective(this, t, e, i, r),
        this
    }
    fromOrthogonal({left: t, right: e, bottom: i, top: r, near: s, far: n}) {
        return ortho(this, t, e, i, r, s, n),
        this
    }
    fromQuaternion(t) {
        return fromQuat(this, t),
        this
    }
    setPosition(t) {
        return this.x = t[0],
        this.y = t[1],
        this.z = t[2],
        this
    }
    inverse(t=this) {
        return invert$1(this, t),
        this
    }
    compose(t, e, i) {
        return fromRotationTranslationScale(this, t, e, i),
        this
    }
    getRotation(t) {
        return getRotation(t, this),
        this
    }
    getTranslation(t) {
        return getTranslation(t, this),
        this
    }
    getScaling(t) {
        return getScaling(t, this),
        this
    }
    getMaxScaleOnAxis() {
        return getMaxScaleOnAxis(this)
    }
    lookAt(t, e, i) {
        return targetTo(this, t, e, i),
        this
    }
    determinant() {
        return determinant(this)
    }
}
function fromRotationMatrix(t, e, i="YXZ") {
    return "XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)),
    .99999 > Math.abs(e[8]) ? (t[0] = Math.atan2(-e[9], e[10]),
    t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]),
    t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)),
    .99999 > Math.abs(e[9]) ? (t[1] = Math.atan2(e[8], e[10]),
    t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]),
    t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)),
    .99999 > Math.abs(e[6]) ? (t[1] = Math.atan2(-e[2], e[10]),
    t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0,
    t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)),
    .99999 > Math.abs(e[2]) ? (t[0] = Math.atan2(e[6], e[10]),
    t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0,
    t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)),
    .99999 > Math.abs(e[1]) ? (t[0] = Math.atan2(-e[9], e[5]),
    t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0,
    t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)),
    .99999 > Math.abs(e[4]) ? (t[0] = Math.atan2(e[6], e[5]),
    t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]),
    t[1] = 0)),
    t
}
let tmpMat4 = new Mat4;
class Euler extends Array {
    constructor(t=0, e=t, i=t, r="YXZ") {
        return super(t, e, i),
        this.order = r,
        this.onChange = () => {}
        ,
        this
    }
    get x() {
        return this[0]
    }
    set x(t) {
        this[0] = t,
        this.onChange()
    }
    get y() {
        return this[1]
    }
    set y(t) {
        this[1] = t,
        this.onChange()
    }
    get z() {
        return this[2]
    }
    set z(t) {
        this[2] = t,
        this.onChange()
    }
    set(t, e=t, i=t) {
        return t.length ? this.copy(t) : (this[0] = t,
        this[1] = e,
        this[2] = i,
        this.onChange(),
        this)
    }
    copy(t) {
        return this[0] = t[0],
        this[1] = t[1],
        this[2] = t[2],
        this.onChange(),
        this
    }
    reorder(t) {
        return this.order = t,
        this.onChange(),
        this
    }
    fromRotationMatrix(t, e=this.order) {
        return fromRotationMatrix(this, t, e),
        this
    }
    fromQuaternion(t, e=this.order) {
        return tmpMat4.fromQuaternion(t),
        this.fromRotationMatrix(tmpMat4, e)
    }
}
class Transform {
    constructor() {
        this.parent = null,
        this.children = [],
        this.visible = !0,
        this.matrix = new Mat4,
        this.worldMatrix = new Mat4,
        this.matrixAutoUpdate = !0,
        this.position = new Vec3,
        this.quaternion = new Quat,
        this.scale = new Vec3(1),
        this.rotation = new Euler,
        this.up = new Vec3(0,1,0),
        this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation),
        this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion)
    }
    setParent(t, e=!0) {
        e && this.parent && t !== this.parent && this.parent.removeChild(this, !1),
        this.parent = t,
        e && t && t.addChild(this, !1)
    }
    addChild(t, e=!0) {
        ~this.children.indexOf(t) || this.children.push(t),
        e && t.setParent(this, !1)
    }
    removeChild(t, e=!0) {
        ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1),
        e && t.setParent(null, !1)
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
        this.worldMatrixNeedsUpdate = !1,
        t = !0);
        for (let e = 0, i = this.children.length; e < i; e++)
            this.children[e].updateMatrixWorld(t)
    }
    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale),
        this.worldMatrixNeedsUpdate = !0
    }
    traverse(t) {
        if (!t(this))
            for (let e = 0, i = this.children.length; e < i; e++)
                this.children[e].traverse(t)
    }
    decompose() {
        this.matrix.getTranslation(this.position),
        this.matrix.getRotation(this.quaternion),
        this.matrix.getScaling(this.scale),
        this.rotation.fromQuaternion(this.quaternion)
    }
    lookAt(t, e=!1) {
        e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
        this.matrix.getRotation(this.quaternion),
        this.rotation.fromQuaternion(this.quaternion)
    }
}
let tempMat4 = new Mat4
  , tempVec3a = new Vec3
  , tempVec3b = new Vec3;
class Camera extends Transform {
    constructor(t, {near: e=.1, far: i=100, fov: r=45, aspect: s=1, left: n, right: a, bottom: h, top: o}={}) {
        super(t),
        this.near = e,
        this.far = i,
        this.fov = r,
        this.aspect = s,
        this.projectionMatrix = new Mat4,
        this.viewMatrix = new Mat4,
        this.projectionViewMatrix = new Mat4,
        n || a ? this.orthographic({
            left: n,
            right: a,
            bottom: h,
            top: o
        }) : this.perspective()
    }
    perspective({near: t=this.near, far: e=this.far, fov: i=this.fov, aspect: r=this.aspect}={}) {
        return this.projectionMatrix.fromPerspective({
            fov: i * (Math.PI / 180),
            aspect: r,
            near: t,
            far: e
        }),
        this.type = "perspective",
        this
    }
    orthographic({near: t=this.near, far: e=this.far, left: i=-1, right: r=1, bottom: s=-1, top: n=1}={}) {
        return this.projectionMatrix.fromOrthogonal({
            left: i,
            right: r,
            bottom: s,
            top: n,
            near: t,
            far: e
        }),
        this.type = "orthographic",
        this
    }
    updateMatrixWorld() {
        return super.updateMatrixWorld(),
        this.viewMatrix.inverse(this.worldMatrix),
        this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
        this
    }
    lookAt(t) {
        return super.lookAt(t, !0),
        this
    }
    project(t) {
        return t.applyMatrix4(this.viewMatrix),
        t.applyMatrix4(this.projectionMatrix),
        this
    }
    unproject(t) {
        return t.applyMatrix4(tempMat4.inverse(this.projectionMatrix)),
        t.applyMatrix4(this.worldMatrix),
        this
    }
    updateFrustum() {
        this.frustum || (this.frustum = [new Vec3, new Vec3, new Vec3, new Vec3, new Vec3, new Vec3]);
        let t = this.projectionViewMatrix;
        this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12],
        this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12],
        this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13],
        this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13],
        this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14],
        this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
        for (let e = 0; e < 6; e++) {
            let i = 1 / this.frustum[e].distance();
            this.frustum[e].multiply(i),
            this.frustum[e].constant *= i
        }
    }
    frustumIntersectsMesh(t) {
        if (!t.geometry.attributes.position)
            return !0;
        t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
        let e = tempVec3a;
        e.copy(t.geometry.bounds.center),
        e.applyMatrix4(t.worldMatrix);
        let i = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(e, i)
    }
    frustumIntersectsSphere(t, e) {
        let i = tempVec3b;
        for (let r = 0; r < 6; r++) {
            let s = this.frustum[r]
              , n = i.copy(s).dot(t) + s.constant;
            if (n < -e)
                return !1
        }
        return !0
    }
}
function fromMat4(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[4],
    t[4] = e[5],
    t[5] = e[6],
    t[6] = e[8],
    t[7] = e[9],
    t[8] = e[10],
    t
}
function copy$4(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t[2] = e[2],
    t[3] = e[3],
    t[4] = e[4],
    t[5] = e[5],
    t[6] = e[6],
    t[7] = e[7],
    t[8] = e[8],
    t
}
function set$4(t, e, i, r, s, n, a, h, o, l) {
    return t[0] = e,
    t[1] = i,
    t[2] = r,
    t[3] = s,
    t[4] = n,
    t[5] = a,
    t[6] = h,
    t[7] = o,
    t[8] = l,
    t
}
function identity$2(t) {
    return t[0] = 1,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 1,
    t[5] = 0,
    t[6] = 0,
    t[7] = 0,
    t[8] = 1,
    t
}
function invert$2(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[3]
      , a = e[4]
      , h = e[5]
      , o = e[6]
      , l = e[7]
      , u = e[8]
      , c = u * a - h * l
      , _ = -u * n + h * o
      , d = l * n - a * o
      , g = i * c + r * _ + s * d;
    return g ? (g = 1 / g,
    t[0] = c * g,
    t[1] = (-u * r + s * l) * g,
    t[2] = (h * r - s * a) * g,
    t[3] = _ * g,
    t[4] = (u * i - s * o) * g,
    t[5] = (-h * i + s * n) * g,
    t[6] = d * g,
    t[7] = (-l * i + r * o) * g,
    t[8] = (a * i - r * n) * g,
    t) : null
}
function multiply$3(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = e[4]
      , o = e[5]
      , l = e[6]
      , u = e[7]
      , c = e[8]
      , _ = i[0]
      , d = i[1]
      , g = i[2]
      , p = i[3]
      , m = i[4]
      , $ = i[5]
      , f = i[6]
      , x = i[7]
      , v = i[8];
    return t[0] = _ * r + d * a + g * l,
    t[1] = _ * s + d * h + g * u,
    t[2] = _ * n + d * o + g * c,
    t[3] = p * r + m * a + $ * l,
    t[4] = p * s + m * h + $ * u,
    t[5] = p * n + m * o + $ * c,
    t[6] = f * r + x * a + v * l,
    t[7] = f * s + x * h + v * u,
    t[8] = f * n + x * o + v * c,
    t
}
function translate$1(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = e[4]
      , o = e[5]
      , l = e[6]
      , u = e[7]
      , c = e[8]
      , _ = i[0]
      , d = i[1];
    return t[0] = r,
    t[1] = s,
    t[2] = n,
    t[3] = a,
    t[4] = h,
    t[5] = o,
    t[6] = _ * r + d * a + l,
    t[7] = _ * s + d * h + u,
    t[8] = _ * n + d * o + c,
    t
}
function rotate(t, e, i) {
    let r = e[0]
      , s = e[1]
      , n = e[2]
      , a = e[3]
      , h = e[4]
      , o = e[5]
      , l = e[6]
      , u = e[7]
      , c = e[8]
      , _ = Math.sin(i)
      , d = Math.cos(i);
    return t[0] = d * r + _ * a,
    t[1] = d * s + _ * h,
    t[2] = d * n + _ * o,
    t[3] = d * a - _ * r,
    t[4] = d * h - _ * s,
    t[5] = d * o - _ * n,
    t[6] = l,
    t[7] = u,
    t[8] = c,
    t
}
function scale$2(t, e, i) {
    let r = i[0]
      , s = i[1];
    return t[0] = r * e[0],
    t[1] = r * e[1],
    t[2] = r * e[2],
    t[3] = s * e[3],
    t[4] = s * e[4],
    t[5] = s * e[5],
    t[6] = e[6],
    t[7] = e[7],
    t[8] = e[8],
    t
}
function fromQuat$1(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[3]
      , a = i + i
      , h = r + r
      , o = s + s
      , l = i * a
      , u = r * a
      , c = r * h
      , _ = s * a
      , d = s * h
      , g = s * o
      , p = n * a
      , m = n * h
      , $ = n * o;
    return t[0] = 1 - c - g,
    t[3] = u - $,
    t[6] = _ + m,
    t[1] = u + $,
    t[4] = 1 - l - g,
    t[7] = d - p,
    t[2] = _ - m,
    t[5] = d + p,
    t[8] = 1 - l - c,
    t
}
function normalFromMat4(t, e) {
    let i = e[0]
      , r = e[1]
      , s = e[2]
      , n = e[3]
      , a = e[4]
      , h = e[5]
      , o = e[6]
      , l = e[7]
      , u = e[8]
      , c = e[9]
      , _ = e[10]
      , d = e[11]
      , g = e[12]
      , p = e[13]
      , m = e[14]
      , $ = e[15]
      , f = i * h - r * a
      , x = i * o - s * a
      , v = i * l - n * a
      , b = r * o - s * h
      , w = r * l - n * h
      , E = s * l - n * o
      , y = u * p - c * g
      , A = u * m - _ * g
      , T = u * $ - d * g
      , M = c * m - _ * p
      , R = c * $ - d * p
      , F = _ * $ - d * m
      , S = f * F - x * R + v * M + b * T - w * A + E * y;
    return S ? (S = 1 / S,
    t[0] = (h * F - o * R + l * M) * S,
    t[1] = (o * T - a * F - l * A) * S,
    t[2] = (a * R - h * T + l * y) * S,
    t[3] = (s * R - r * F - n * M) * S,
    t[4] = (i * F - s * T + n * A) * S,
    t[5] = (r * T - i * R - n * y) * S,
    t[6] = (p * E - m * w + $ * b) * S,
    t[7] = (m * v - g * E - $ * x) * S,
    t[8] = (g * w - p * v + $ * f) * S,
    t) : null
}
class Mat3 extends Array {
    constructor(t=1, e=0, i=0, r=0, s=1, n=0, a=0, h=0, o=1) {
        return super(t, e, i, r, s, n, a, h, o),
        this
    }
    set(t, e, i, r, s, n, a, h, o) {
        return t.length ? this.copy(t) : (set$4(this, t, e, i, r, s, n, a, h, o),
        this)
    }
    translate(t, e=this) {
        return translate$1(this, e, t),
        this
    }
    rotate(t, e=this) {
        return rotate(this, e, t),
        this
    }
    scale(t, e=this) {
        return scale$2(this, e, t),
        this
    }
    multiply(t, e) {
        return e ? multiply$3(this, t, e) : multiply$3(this, this, t),
        this
    }
    identity() {
        return identity$2(this),
        this
    }
    copy(t) {
        return copy$4(this, t),
        this
    }
    fromMatrix4(t) {
        return fromMat4(this, t),
        this
    }
    fromQuaternion(t) {
        return fromQuat$1(this, t),
        this
    }
    fromBasis(t, e, i) {
        return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]),
        this
    }
    inverse(t=this) {
        return invert$2(this, t),
        this
    }
    getNormalMatrix(t) {
        return normalFromMat4(this, t),
        this
    }
}
let ID$2 = 0;
class Mesh extends Transform {
    constructor(t, {geometry: e, program: i, mode: r=t.TRIANGLES, frustumCulled: s=!0, renderOrder: n=0}={}) {
        super(t),
        this.gl = t,
        this.id = ID$2++,
        this.geometry = e,
        this.program = i,
        this.mode = r,
        this.frustumCulled = s,
        this.renderOrder = n,
        this.modelViewMatrix = new Mat4,
        this.normalMatrix = new Mat3,
        this.beforeRenderCallbacks = [],
        this.afterRenderCallbacks = []
    }
    onBeforeRender(t) {
        return this.beforeRenderCallbacks.push(t),
        this
    }
    onAfterRender(t) {
        return this.afterRenderCallbacks.push(t),
        this
    }
    draw({camera: t}={}) {
        this.beforeRenderCallbacks.forEach(e => e && e({
            mesh: this,
            camera: t
        })),
        t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
            modelMatrix: {
                value: null
            },
            viewMatrix: {
                value: null
            },
            modelViewMatrix: {
                value: null
            },
            normalMatrix: {
                value: null
            },
            projectionMatrix: {
                value: null
            },
            cameraPosition: {
                value: null
            }
        }),
        this.program.uniforms.projectionMatrix.value = t.projectionMatrix,
        this.program.uniforms.cameraPosition.value = t.position,
        this.program.uniforms.viewMatrix.value = t.viewMatrix,
        this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
        this.program.uniforms.modelMatrix.value = this.worldMatrix,
        this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
        this.program.uniforms.normalMatrix.value = this.normalMatrix);
        let e = this.program.cullFace && 0 > this.worldMatrix.determinant();
        this.program.use({
            flipFaces: e
        }),
        this.geometry.draw({
            mode: this.mode,
            program: this.program
        }),
        this.afterRenderCallbacks.forEach(e => e && e({
            mesh: this,
            camera: t
        }))
    }
}
let emptyPixel = new Uint8Array(4);
function isPowerOf2(t) {
    return (t & t - 1) == 0
}
let ID$3 = 0;
class Texture {
    constructor(t, {image: e, target: i=t.TEXTURE_2D, type: r=t.UNSIGNED_BYTE, format: s=t.RGBA, internalFormat: n=s, wrapS: a=t.CLAMP_TO_EDGE, wrapT: h=t.CLAMP_TO_EDGE, generateMipmaps: o=!0, minFilter: l=o ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR, magFilter: u=t.LINEAR, premultiplyAlpha: c=!1, unpackAlignment: _=4, flipY: d=i == t.TEXTURE_2D, level: g=0, width: p, height: m=p}={}) {
        this.gl = t,
        this.id = ID$3++,
        this.image = e,
        this.target = i,
        this.type = r,
        this.format = s,
        this.internalFormat = n,
        this.minFilter = l,
        this.magFilter = u,
        this.wrapS = a,
        this.wrapT = h,
        this.generateMipmaps = o,
        this.premultiplyAlpha = c,
        this.unpackAlignment = _,
        this.flipY = d,
        this.level = g,
        this.width = p,
        this.height = m,
        this.texture = this.gl.createTexture(),
        this.store = {
            image: null
        },
        this.glState = this.gl.renderer.state,
        this.state = {},
        this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
        this.state.magFilter = this.gl.LINEAR,
        this.state.wrapS = this.gl.REPEAT,
        this.state.wrapT = this.gl.REPEAT
    }
    bind() {
        this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
        this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
    }
    update(t=0) {
        let e = !(this.image === this.store.image && !this.needsUpdate);
        if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t),
        this.bind()),
        e) {
            if (this.needsUpdate = !1,
            this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
            this.glState.flipY = this.flipY),
            this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
            this.glState.premultiplyAlpha = this.premultiplyAlpha),
            this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
            this.glState.unpackAlignment = this.unpackAlignment),
            this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
            this.state.minFilter = this.minFilter),
            this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
            this.state.magFilter = this.magFilter),
            this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
            this.state.wrapS = this.wrapS),
            this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
            this.state.wrapT = this.wrapT),
            this.image) {
                if (this.image.width && (this.width = this.image.width,
                this.height = this.image.height),
                this.target === this.gl.TEXTURE_CUBE_MAP)
                    for (let i = 0; i < 6; i++)
                        this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
                else
                    ArrayBuffer.isView(this.image) ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                this.generateMipmaps && (this.gl.renderer.isWebgl2 || isPowerOf2(this.image.width) && isPowerOf2(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1,
                this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                this.minFilter = this.gl.LINEAR))
            } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                for (let r = 0; r < 6; r++)
                    this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
            else
                this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
            this.store.image = this.image,
            this.onUpdate && this.onUpdate()
        }
    }
}
class RenderTarget {
    constructor(t, {width: e=t.canvas.width, height: i=t.canvas.height, target: r=t.FRAMEBUFFER, color: s=1, depth: n=!0, stencil: a=!1, depthTexture: h=!1, wrapS: o=t.CLAMP_TO_EDGE, wrapT: l=t.CLAMP_TO_EDGE, minFilter: u=t.LINEAR, magFilter: c=u, type: _=t.UNSIGNED_BYTE, format: d=t.RGBA, internalFormat: g=d, unpackAlignment: p, premultiplyAlpha: m}={}) {
        this.gl = t,
        this.width = e,
        this.height = i,
        this.depth = n,
        this.buffer = this.gl.createFramebuffer(),
        this.target = r,
        this.gl.bindFramebuffer(this.target, this.buffer),
        this.textures = [];
        let $ = [];
        for (let f = 0; f < s; f++)
            this.textures.push(new Texture(t,{
                width: e,
                height: i,
                wrapS: o,
                wrapT: l,
                minFilter: u,
                magFilter: c,
                type: _,
                format: d,
                internalFormat: g,
                unpackAlignment: p,
                premultiplyAlpha: m,
                flipY: !1,
                generateMipmaps: !1
            })),
            this.textures[f].update(),
            this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + f, this.gl.TEXTURE_2D, this.textures[f].texture, 0),
            $.push(this.gl.COLOR_ATTACHMENT0 + f);
        $.length > 1 && this.gl.renderer.drawBuffers($),
        this.texture = this.textures[0],
        h && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new Texture(t,{
            width: e,
            height: i,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            format: this.gl.DEPTH_COMPONENT,
            internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
            type: this.gl.UNSIGNED_INT
        }),
        this.depthTexture.update(),
        this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (n && !a && (this.depthBuffer = this.gl.createRenderbuffer(),
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, i),
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)),
        a && !n && (this.stencilBuffer = this.gl.createRenderbuffer(),
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, i),
        this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)),
        n && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(),
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, i),
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))),
        this.gl.bindFramebuffer(this.target, null)
    }
}
function hexToRGB(t) {
    4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e || console.warn(`Unable to convert hex string ${t} to rgb values`),
    [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
}
class Color extends Array {
    constructor(t=0, e=0, i=0) {
        return "string" == typeof t && ([t,e,i] = hexToRGB(t)),
        super(t, e, i),
        this
    }
    get r() {
        return this[0]
    }
    set r(t) {
        this[0] = t
    }
    get g() {
        return this[1]
    }
    set g(t) {
        this[1] = t
    }
    get b() {
        return this[2]
    }
    set b(t) {
        this[2] = t
    }
    set(t, e, i) {
        return ("string" == typeof t && ([t,e,i] = hexToRGB(t)),
        t.length) ? this.copy(t) : (this[0] = t,
        this[1] = e,
        this[2] = i,
        this)
    }
    copy(t) {
        return this[0] = t[0],
        this[1] = t[1],
        this[2] = t[2],
        this
    }
}
function copy$5(t, e) {
    return t[0] = e[0],
    t[1] = e[1],
    t
}
function set$5(t, e, i) {
    return t[0] = e,
    t[1] = i,
    t
}
function add$1(t, e, i) {
    return t[0] = e[0] + i[0],
    t[1] = e[1] + i[1],
    t
}
function subtract$1(t, e, i) {
    return t[0] = e[0] - i[0],
    t[1] = e[1] - i[1],
    t
}
function multiply$4(t, e, i) {
    return t[0] = e[0] * i[0],
    t[1] = e[1] * i[1],
    t
}
function divide$1(t, e, i) {
    return t[0] = e[0] / i[0],
    t[1] = e[1] / i[1],
    t
}
function scale$3(t, e, i) {
    return t[0] = e[0] * i,
    t[1] = e[1] * i,
    t
}
function distance$1(t, e) {
    var i = e[0] - t[0]
      , r = e[1] - t[1];
    return Math.sqrt(i * i + r * r)
}
function squaredDistance$1(t, e) {
    var i = e[0] - t[0]
      , r = e[1] - t[1];
    return i * i + r * r
}
function length$1(t) {
    var e = t[0]
      , i = t[1];
    return Math.sqrt(e * e + i * i)
}
function squaredLength$1(t) {
    var e = t[0]
      , i = t[1];
    return e * e + i * i
}
function negate$1(t, e) {
    return t[0] = -e[0],
    t[1] = -e[1],
    t
}
function inverse$1(t, e) {
    return t[0] = 1 / e[0],
    t[1] = 1 / e[1],
    t
}
function normalize$3(t, e) {
    var i = e[0]
      , r = e[1]
      , s = i * i + r * r;
    return s > 0 && (s = 1 / Math.sqrt(s)),
    t[0] = e[0] * s,
    t[1] = e[1] * s,
    t
}
function dot$3(t, e) {
    return t[0] * e[0] + t[1] * e[1]
}
function cross$1(t, e) {
    return t[0] * e[1] - t[1] * e[0]
}
function lerp$1(t, e, i, r) {
    var s = e[0]
      , n = e[1];
    return t[0] = s + r * (i[0] - s),
    t[1] = n + r * (i[1] - n),
    t
}
function transformMat3(t, e, i) {
    var r = e[0]
      , s = e[1];
    return t[0] = i[0] * r + i[3] * s + i[6],
    t[1] = i[1] * r + i[4] * s + i[7],
    t
}
function transformMat4$1(t, e, i) {
    let r = e[0]
      , s = e[1];
    return t[0] = i[0] * r + i[4] * s + i[12],
    t[1] = i[1] * r + i[5] * s + i[13],
    t
}
function exactEquals$1(t, e) {
    return t[0] === e[0] && t[1] === e[1]
}
class Vec2 extends Array {
    constructor(t=0, e=t) {
        return super(t, e),
        this
    }
    get x() {
        return this[0]
    }
    set x(t) {
        this[0] = t
    }
    get y() {
        return this[1]
    }
    set y(t) {
        this[1] = t
    }
    set(t, e=t) {
        return t.length ? this.copy(t) : (set$5(this, t, e),
        this)
    }
    copy(t) {
        return copy$5(this, t),
        this
    }
    add(t, e) {
        return e ? add$1(this, t, e) : add$1(this, this, t),
        this
    }
    sub(t, e) {
        return e ? subtract$1(this, t, e) : subtract$1(this, this, t),
        this
    }
    multiply(t) {
        return t.length ? multiply$4(this, this, t) : scale$3(this, this, t),
        this
    }
    divide(t) {
        return t.length ? divide$1(this, this, t) : scale$3(this, this, 1 / t),
        this
    }
    inverse(t=this) {
        return inverse$1(this, t),
        this
    }
    len() {
        return length$1(this)
    }
    distance(t) {
        return t ? distance$1(this, t) : length$1(this)
    }
    squaredLen() {
        return this.squaredDistance()
    }
    squaredDistance(t) {
        return t ? squaredDistance$1(this, t) : squaredLength$1(this)
    }
    negate(t=this) {
        return negate$1(this, t),
        this
    }
    cross(t, e) {
        return cross$1(t, e)
    }
    scale(t) {
        return scale$3(this, this, t),
        this
    }
    normalize() {
        return normalize$3(this, this),
        this
    }
    dot(t) {
        return dot$3(this, t)
    }
    equals(t) {
        return exactEquals$1(this, t)
    }
    applyMatrix3(t) {
        return transformMat3(this, this, t),
        this
    }
    applyMatrix4(t) {
        return transformMat4$1(this, this, t),
        this
    }
    lerp(t, e) {
        lerp$1(this, this, t, e)
    }
    clone() {
        return new Vec2(this[0],this[1])
    }
    fromArray(t, e=0) {
        return this[0] = t[e],
        this[1] = t[e + 1],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this[0],
        t[e + 1] = this[1],
        t
    }
}
class Vec4 extends Array {
    constructor(t=0, e=t, i=t, r=t) {
        return super(t, e, i, r),
        this
    }
    get x() {
        return this[0]
    }
    set x(t) {
        this[0] = t
    }
    get y() {
        return this[1]
    }
    set y(t) {
        this[1] = t
    }
    get z() {
        return this[2]
    }
    set z(t) {
        this[2] = t
    }
    get w() {
        return this[3]
    }
    set w(t) {
        this[3] = t
    }
    set(t, e, i, r) {
        return t.length ? this.copy(t) : (set$1(this, t, e, i, r),
        this)
    }
    copy(t) {
        return copy$1(this, t),
        this
    }
    normalize() {
        return normalize$1(this, this),
        this
    }
    fromArray(t, e=0) {
        return this[0] = t[e],
        this[1] = t[e + 1],
        this[2] = t[e + 2],
        this[3] = t[e + 3],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this[0],
        t[e + 1] = this[1],
        t[e + 2] = this[2],
        t[e + 3] = this[3],
        t
    }
}
class Plane extends Geometry {
    constructor(t, {width: e=1, height: i=1, widthSegments: r=1, heightSegments: s=1, attributes: n={}}={}) {
        let a = r
          , h = s
          , o = (a + 1) * (h + 1)
          , l = a * h * 6
          , u = new Float32Array(3 * o)
          , c = new Float32Array(3 * o)
          , _ = new Float32Array(2 * o)
          , d = o > 65536 ? new Uint32Array(l) : new Uint16Array(l);
        Plane.buildPlane(u, c, _, d, e, i, 0, a, h),
        Object.assign(n, {
            position: {
                size: 3,
                data: u
            },
            normal: {
                size: 3,
                data: c
            },
            uv: {
                size: 2,
                data: _
            },
            index: {
                data: d
            }
        }),
        super(t, n)
    }
    static buildPlane(t, e, i, r, s, n, a, h, o, l=0, u=1, c=2, _=1, d=-1, g=0, p=0) {
        let m = g
          , $ = s / h
          , f = n / o;
        for (let x = 0; x <= o; x++) {
            let v = x * f - n / 2;
            for (let b = 0; b <= h; b++,
            g++) {
                let w = b * $ - s / 2;
                if (t[3 * g + l] = w * _,
                t[3 * g + u] = v * d,
                t[3 * g + c] = a / 2,
                e[3 * g + l] = 0,
                e[3 * g + u] = 0,
                e[3 * g + c] = a >= 0 ? 1 : -1,
                i[2 * g] = b / h,
                i[2 * g + 1] = 1 - x / o,
                x === o || b === h)
                    continue;
                let E = m + b + x * (h + 1)
                  , y = m + b + (x + 1) * (h + 1)
                  , A = m + b + (x + 1) * (h + 1) + 1
                  , T = m + b + x * (h + 1) + 1;
                r[6 * p] = E,
                r[6 * p + 1] = y,
                r[6 * p + 2] = T,
                r[6 * p + 3] = y,
                r[6 * p + 4] = A,
                r[6 * p + 5] = T,
                p++
            }
        }
    }
}
class Box extends Geometry {
    constructor(t, {width: e=1, height: i=1, depth: r=1, widthSegments: s=1, heightSegments: n=1, depthSegments: a=1, attributes: h={}}={}) {
        let o = s
          , l = n
          , u = a
          , c = (o + 1) * (l + 1) * 2 + (o + 1) * (u + 1) * 2 + (l + 1) * (u + 1) * 2
          , _ = (o * l * 2 + o * u * 2 + l * u * 2) * 6
          , d = new Float32Array(3 * c)
          , g = new Float32Array(3 * c)
          , p = new Float32Array(2 * c)
          , m = c > 65536 ? new Uint32Array(_) : new Uint16Array(_)
          , $ = 0
          , f = 0;
        Plane.buildPlane(d, g, p, m, r, i, e, u, l, 2, 1, 0, -1, -1, $, f),
        Plane.buildPlane(d, g, p, m, r, i, -e, u, l, 2, 1, 0, 1, -1, $ += (u + 1) * (l + 1), f += u * l),
        Plane.buildPlane(d, g, p, m, e, r, i, u, l, 0, 2, 1, 1, 1, $ += (u + 1) * (l + 1), f += u * l),
        Plane.buildPlane(d, g, p, m, e, r, -i, u, l, 0, 2, 1, 1, -1, $ += (o + 1) * (u + 1), f += o * u),
        Plane.buildPlane(d, g, p, m, e, i, -r, o, l, 0, 1, 2, -1, -1, $ += (o + 1) * (u + 1), f += o * u),
        Plane.buildPlane(d, g, p, m, e, i, r, o, l, 0, 1, 2, 1, -1, $ += (o + 1) * (l + 1), f += o * l),
        Object.assign(h, {
            position: {
                size: 3,
                data: d
            },
            normal: {
                size: 3,
                data: g
            },
            uv: {
                size: 2,
                data: p
            },
            index: {
                data: m
            }
        }),
        super(t, h)
    }
}
class Sphere extends Geometry {
    constructor(t, {radius: e=.5, widthSegments: i=16, heightSegments: r=Math.ceil(.5 * i), phiStart: s=0, phiLength: n=2 * Math.PI, thetaStart: a=0, thetaLength: h=Math.PI, attributes: o={}}={}) {
        let l = i
          , u = r
          , c = s
          , _ = n
          , d = a
          , g = h
          , p = (l + 1) * (u + 1)
          , m = l * u * 6
          , $ = new Float32Array(3 * p)
          , f = new Float32Array(3 * p)
          , x = new Float32Array(2 * p)
          , v = p > 65536 ? new Uint32Array(m) : new Uint16Array(m)
          , b = 0
          , w = 0
          , E = 0
          , y = d + g
          , A = []
          , T = new Vec3;
        for (let M = 0; M <= u; M++) {
            let R = []
              , F = M / u;
            for (let S = 0; S <= l; S++,
            b++) {
                let P = S / l
                  , V = -e * Math.cos(c + P * _) * Math.sin(d + F * g)
                  , L = e * Math.cos(d + F * g)
                  , N = e * Math.sin(c + P * _) * Math.sin(d + F * g);
                $[3 * b] = V,
                $[3 * b + 1] = L,
                $[3 * b + 2] = N,
                T.set(V, L, N).normalize(),
                f[3 * b] = T.x,
                f[3 * b + 1] = T.y,
                f[3 * b + 2] = T.z,
                x[2 * b] = P,
                x[2 * b + 1] = 1 - F,
                R.push(w++)
            }
            A.push(R)
        }
        for (let C = 0; C < u; C++)
            for (let O = 0; O < l; O++) {
                let D = A[C][O + 1]
                  , B = A[C][O]
                  , z = A[C + 1][O]
                  , I = A[C + 1][O + 1];
                (0 !== C || d > 0) && (v[3 * E] = D,
                v[3 * E + 1] = B,
                v[3 * E + 2] = I,
                E++),
                (C !== u - 1 || y < Math.PI) && (v[3 * E] = B,
                v[3 * E + 1] = z,
                v[3 * E + 2] = I,
                E++)
            }
        Object.assign(o, {
            position: {
                size: 3,
                data: $
            },
            normal: {
                size: 3,
                data: f
            },
            uv: {
                size: 2,
                data: x
            },
            index: {
                data: v
            }
        }),
        super(t, o)
    }
}
class Cylinder extends Geometry {
    constructor(t, {radiusTop: e=.5, radiusBottom: i=.5, height: r=1, radialSegments: s=8, heightSegments: n=1, openEnded: a=!1, thetaStart: h=0, thetaLength: o=2 * Math.PI, attributes: l={}}={}) {
        let u = s
          , c = n
          , _ = h
          , d = o
          , g = a ? 0 : i && e ? 2 : 1
          , p = (u + 1) * (c + 1 + g) + g
          , m = u * c * 6 + g * u * 3
          , $ = new Float32Array(3 * p)
          , f = new Float32Array(3 * p)
          , x = new Float32Array(2 * p)
          , v = p > 65536 ? new Uint32Array(m) : new Uint16Array(m)
          , b = 0
          , w = 0
          , E = [];
        function y() {
            let t, s, n = new Vec3, a = (i - e) / r;
            for (s = 0; s <= c; s++) {
                let h = []
                  , o = s / c
                  , l = o * (i - e) + e;
                for (t = 0; t <= u; t++) {
                    let g = t / u
                      , p = g * d + _
                      , m = Math.sin(p)
                      , y = Math.cos(p);
                    $.set([l * m, (.5 - o) * r, l * y], 3 * b),
                    n.set(m, a, y).normalize(),
                    f.set([n.x, n.y, n.z], 3 * b),
                    x.set([g, 1 - o], 2 * b),
                    h.push(b++)
                }
                E.push(h)
            }
            for (t = 0; t < u; t++)
                for (s = 0; s < c; s++) {
                    let A = E[s][t]
                      , T = E[s + 1][t]
                      , M = E[s + 1][t + 1]
                      , R = E[s][t + 1];
                    v.set([A, T, R, T, M, R], 3 * w),
                    w += 2
                }
        }
        function A(t) {
            let s, n = !0 === t ? e : i, a = !0 === t ? 1 : -1, h = b;
            for ($.set([0, .5 * r * a, 0], 3 * b),
            f.set([0, a, 0], 3 * b),
            x.set([.5, .5], 2 * b),
            b++,
            s = 0; s <= u; s++) {
                let o = s / u
                  , l = o * d + _
                  , c = Math.cos(l)
                  , g = Math.sin(l);
                $.set([n * g, .5 * r * a, n * c], 3 * b),
                f.set([0, a, 0], 3 * b),
                x.set([.5 * c + .5, .5 * g * a + .5], 2 * b),
                b++
            }
            for (s = 0; s < u; s++) {
                let p = h + s + 1;
                t ? v.set([p, p + 1, h], 3 * w) : v.set([p + 1, p, h], 3 * w),
                w++
            }
        }
        y(),
        !a && (e && A(!0),
        i && A(!1)),
        Object.assign(l, {
            position: {
                size: 3,
                data: $
            },
            normal: {
                size: 3,
                data: f
            },
            uv: {
                size: 2,
                data: x
            },
            index: {
                data: v
            }
        }),
        super(t, l)
    }
}
let STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    DOLLY_PAN: 3
}
  , tempVec3$2 = new Vec3
  , tempVec2a = new Vec2
  , tempVec2b = new Vec2;
function Orbit(t, {element: e=document, enabled: i=!0, target: r=new Vec3, ease: s=.25, inertia: n=.85, enableRotate: a=!0, rotateSpeed: h=.1, enableZoom: o=!0, zoomSpeed: l=1, enablePan: u=!0, panSpeed: c=.1, minPolarAngle: _=0, maxPolarAngle: d=Math.PI, minAzimuthAngle: g=-1 / 0, maxAzimuthAngle: p=1 / 0, minDistance: m=0, maxDistance: $=1 / 0}={}) {
    this.enabled = i,
    this.target = r,
    s = s || 1,
    n = n || 1,
    this.minDistance = m,
    this.maxDistance = $;
    let f = {
        radius: 1,
        phi: 0,
        theta: 0
    }
      , x = {
        radius: 1,
        phi: 0,
        theta: 0
    }
      , v = {
        radius: 1,
        phi: 0,
        theta: 0
    }
      , b = new Vec3
      , w = new Vec3;
    w.copy(t.position).sub(this.target),
    v.radius = x.radius = w.distance(),
    v.theta = x.theta = Math.atan2(w.x, w.z),
    v.phi = x.phi = Math.acos(Math.min(Math.max(w.y / x.radius, -1), 1)),
    this.update = () => {
        x.radius *= f.radius,
        x.theta += f.theta,
        x.phi += f.phi,
        x.theta = Math.max(g, Math.min(p, x.theta)),
        x.phi = Math.max(_, Math.min(d, x.phi)),
        x.radius = Math.max(this.minDistance, Math.min(this.maxDistance, x.radius)),
        v.phi += (x.phi - v.phi) * s,
        v.theta += (x.theta - v.theta) * s,
        v.radius += (x.radius - v.radius) * s,
        this.target.add(b);
        let e = v.radius * Math.sin(Math.max(1e-6, v.phi));
        w.x = e * Math.sin(v.theta),
        w.y = v.radius * Math.cos(v.phi),
        w.z = e * Math.cos(v.theta),
        t.position.copy(this.target).add(w),
        t.lookAt(this.target),
        f.theta *= n,
        f.phi *= n,
        b.multiply(n),
        f.radius = 1
    }
    ;
    let E = new Vec2
      , y = new Vec2
      , A = new Vec2
      , T = STATE.NONE;
    function M() {
        return Math.pow(.95, l)
    }
    this.mouseButtons = {
        ORBIT: 0,
        ZOOM: 1,
        PAN: 2
    };
    let R = (i, r) => {
        var s, n, a, h;
        let o = e === document ? document.body : e;
        tempVec3$2.copy(t.position).sub(this.target);
        let l = tempVec3$2.distance();
        l *= Math.tan((t.fov || 45) / 2 * Math.PI / 180),
        s = 2 * i * l / o.clientHeight,
        n = t.matrix,
        tempVec3$2.set(n[0], n[1], n[2]),
        tempVec3$2.multiply(-s),
        b.add(tempVec3$2),
        a = 2 * r * l / o.clientHeight,
        h = t.matrix,
        tempVec3$2.set(h[4], h[5], h[6]),
        tempVec3$2.multiply(a),
        b.add(tempVec3$2)
    }
    ;
    function F(t) {
        f.radius /= t
    }
    function S(t, i) {
        tempVec2a.set(t, i),
        tempVec2b.sub(tempVec2a, E).multiply(h);
        let r = e === document ? document.body : e;
        f.theta -= 2 * Math.PI * tempVec2b.x / r.clientHeight,
        f.phi -= 2 * Math.PI * tempVec2b.y / r.clientHeight,
        E.copy(tempVec2a)
    }
    function P(t, e) {
        tempVec2a.set(t, e),
        tempVec2b.sub(tempVec2a, y).multiply(c),
        R(tempVec2b.x, tempVec2b.y),
        y.copy(tempVec2a)
    }
    let V = t => {
        if (this.enabled) {
            switch (t.button) {
            case this.mouseButtons.ORBIT:
                if (!1 === a)
                    return;
                E.set(t.clientX, t.clientY),
                T = STATE.ROTATE;
                break;
            case this.mouseButtons.ZOOM:
                if (!1 === o)
                    return;
                A.set(t.clientX, t.clientY),
                T = STATE.DOLLY;
                break;
            case this.mouseButtons.PAN:
                if (!1 === u)
                    return;
                y.set(t.clientX, t.clientY),
                T = STATE.PAN
            }
            T !== STATE.NONE && (window.addEventListener("mousemove", L, !1),
            window.addEventListener("mouseup", N, !1))
        }
    }
      , L = t => {
        if (this.enabled)
            switch (T) {
            case STATE.ROTATE:
                if (!1 === a)
                    return;
                S(t.clientX, t.clientY);
                break;
            case STATE.DOLLY:
                var e;
                if (!1 === o)
                    return;
                e = t,
                tempVec2a.set(e.clientX, e.clientY),
                tempVec2b.sub(tempVec2a, A),
                tempVec2b.y > 0 ? F(M()) : tempVec2b.y < 0 && F(1 / M()),
                A.copy(tempVec2a);
                break;
            case STATE.PAN:
                if (!1 === u)
                    return;
                P(t.clientX, t.clientY)
            }
    }
      , N = () => {
        this.enabled && (document.removeEventListener("mousemove", L, !1),
        document.removeEventListener("mouseup", N, !1),
        T = STATE.NONE)
    }
      , C = t => {
        this.enabled && o && (T === STATE.NONE || T === STATE.ROTATE) && (t.stopPropagation(),
        t.deltaY < 0 ? F(1 / M()) : t.deltaY > 0 && F(M()))
    }
      , O = t => {
        if (this.enabled)
            switch (t.preventDefault(),
            t.touches.length) {
            case 1:
                if (!1 === a)
                    return;
                E.set(t.touches[0].pageX, t.touches[0].pageY),
                T = STATE.ROTATE;
                break;
            case 2:
                if (!1 === o && !1 === u)
                    return;
                !function t(e) {
                    if (o) {
                        let i = e.touches[0].pageX - e.touches[1].pageX
                          , r = e.touches[0].pageY - e.touches[1].pageY;
                        A.set(0, Math.sqrt(i * i + r * r))
                    }
                    if (u) {
                        let s = .5 * (e.touches[0].pageX + e.touches[1].pageX)
                          , n = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                        y.set(s, n)
                    }
                }(t),
                T = STATE.DOLLY_PAN;
                break;
            default:
                T = STATE.NONE
            }
    }
      , D = t => {
        if (this.enabled)
            switch (t.preventDefault(),
            t.stopPropagation(),
            t.touches.length) {
            case 1:
                if (!1 === a)
                    return;
                S(t.touches[0].pageX, t.touches[0].pageY);
                break;
            case 2:
                if (!1 === o && !1 === u)
                    return;
                !function t(e) {
                    if (o) {
                        let i = e.touches[0].pageX - e.touches[1].pageX
                          , r = e.touches[0].pageY - e.touches[1].pageY;
                        tempVec2a.set(0, Math.sqrt(i * i + r * r)),
                        tempVec2b.set(0, Math.pow(tempVec2a.y / A.y, l)),
                        F(tempVec2b.y),
                        A.copy(tempVec2a)
                    }
                    if (u) {
                        let s;
                        P(.5 * (e.touches[0].pageX + e.touches[1].pageX), .5 * (e.touches[0].pageY + e.touches[1].pageY))
                    }
                }(t);
                break;
            default:
                T = STATE.NONE
            }
    }
      , B = () => {
        this.enabled && (T = STATE.NONE)
    }
      , z = t => {
        this.enabled && t.preventDefault()
    }
    ;
    this.remove = function() {
        e.removeEventListener("contextmenu", z, !1),
        e.removeEventListener("mousedown", V, !1),
        window.removeEventListener("wheel", C, !1),
        e.removeEventListener("touchstart", O, !1),
        e.removeEventListener("touchend", B, !1),
        e.removeEventListener("touchmove", D, !1),
        window.removeEventListener("mousemove", L, !1),
        window.removeEventListener("mouseup", N, !1)
    }
    ,
    e.addEventListener("contextmenu", z, !1),
    e.addEventListener("mousedown", V, !1),
    window.addEventListener("wheel", C, !1),
    e.addEventListener("touchstart", O, {
        passive: !1
    }),
    e.addEventListener("touchend", B, !1),
    e.addEventListener("touchmove", D, {
        passive: !1
    })
}
let tempVec3a$1 = new Vec3
  , tempVec3b$1 = new Vec3
  , tempVec3c = new Vec3
  , tempMat4$1 = new Mat4;
class Raycast {
    constructor(t) {
        this.gl = t,
        this.origin = new Vec3,
        this.direction = new Vec3
    }
    castMouse(t, e=[0, 0]) {
        t.worldMatrix.getTranslation(this.origin),
        this.direction.set(e[0], e[1], .5),
        t.unproject(this.direction),
        this.direction.sub(this.origin).normalize()
    }
    intersectBounds(t) {
        Array.isArray(t) || (t = [t]);
        let e = tempMat4$1
          , i = tempVec3a$1
          , r = tempVec3b$1
          , s = [];
        return t.forEach(t => {
            t.geometry.bounds || t.geometry.computeBoundingBox(),
            "sphere" === t.geometry.raycast && t.geometry.bounds === 1 / 0 && t.geometry.computeBoundingSphere(),
            e.inverse(t.worldMatrix),
            i.copy(this.origin).applyMatrix4(e),
            r.copy(this.direction).transformDirection(e);
            let n = 0;
            (n = "sphere" === t.geometry.raycast ? this.intersectSphere(t.geometry.bounds, i, r) : this.intersectBox(t.geometry.bounds, i, r)) && (t.hit || (t.hit = {
                localPoint: new Vec3
            }),
            t.hit.distance = n,
            t.hit.localPoint.copy(r).multiply(n).add(i),
            s.push(t))
        }
        ),
        s.sort( (t, e) => t.hit.distance - e.hit.distance),
        s
    }
    intersectSphere(t, e=this.origin, i=this.direction) {
        let r = tempVec3c;
        r.sub(t.center, e);
        let s = r.dot(i)
          , n = r.dot(r) - s * s
          , a = t.radius * t.radius;
        if (n > a)
            return 0;
        let h = Math.sqrt(a - n)
          , o = s - h
          , l = s + h;
        return o < 0 && l < 0 ? 0 : o < 0 ? l : o
    }
    intersectBox(t, e=this.origin, i=this.direction) {
        let r, s, n, a, h, o, l = 1 / i.x, u = 1 / i.y, c = 1 / i.z, _ = t.min, d = t.max;
        return (r = ((l >= 0 ? _.x : d.x) - e.x) * l,
        s = ((l >= 0 ? d.x : _.x) - e.x) * l,
        n = ((u >= 0 ? _.y : d.y) - e.y) * u,
        r > (a = ((u >= 0 ? d.y : _.y) - e.y) * u) || n > s) ? 0 : (n > r && (r = n),
        a < s && (s = a),
        h = ((c >= 0 ? _.z : d.z) - e.z) * c,
        r > (o = ((c >= 0 ? d.z : _.z) - e.z) * c) || h > s) ? 0 : (h > r && (r = h),
        o < s && (s = o),
        s < 0) ? 0 : r >= 0 ? r : s
    }
}
class Post {
    constructor(t, {width: e, height: i, dpr: r, wrapS: s=t.CLAMP_TO_EDGE, wrapT: n=t.CLAMP_TO_EDGE, minFilter: a=t.LINEAR, magFilter: h=t.LINEAR, geometry: o=new Geometry(t,{
        position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3])
        },
        uv: {
            size: 2,
            data: new Float32Array([0, 0, 2, 0, 0, 2])
        }
    })}={}) {
        this.gl = t,
        this.options = {
            wrapS: s,
            wrapT: n,
            minFilter: a,
            magFilter: h
        },
        this.passes = [],
        this.geometry = o;
        let l = this.fbo = {
            read: null,
            write: null,
            swap() {
                let t = l.read;
                l.read = l.write,
                l.write = t
            }
        };
        this.resize({
            width: e,
            height: i,
            dpr: r
        })
    }
    addPass({vertex: t=defaultVertex, fragment: e=defaultFragment, uniforms: i={}, textureUniform: r="tMap", enabled: s=!0}={}) {
        i[r] = {
            value: this.fbo.read.texture
        };
        let n = new Program(this.gl,{
            vertex: t,
            fragment: e,
            uniforms: i
        })
          , a = new Mesh(this.gl,{
            geometry: this.geometry,
            program: n
        })
          , h = {
            mesh: a,
            program: n,
            uniforms: i,
            enabled: s,
            textureUniform: r
        };
        return this.passes.push(h),
        h
    }
    resize({width: t, height: e, dpr: i}={}) {
        i && (this.dpr = i),
        t && (this.width = t,
        this.height = e || t),
        i = this.dpr || this.gl.renderer.dpr,
        t = (this.width || this.gl.renderer.width) * i,
        e = (this.height || this.gl.renderer.height) * i,
        this.options.width = t,
        this.options.height = e,
        this.fbo.read = new RenderTarget(this.gl,this.options),
        this.fbo.write = new RenderTarget(this.gl,this.options)
    }
    render({scene: t, camera: e, target: i=null, update: r=!0, sort: s=!0, frustumCull: n=!0}) {
        let a = this.passes.filter(t => t.enabled);
        this.gl.renderer.render({
            scene: t,
            camera: e,
            target: a.length ? this.fbo.write : i,
            update: r,
            sort: s,
            frustumCull: n
        }),
        this.fbo.swap(),
        a.forEach( (t, e) => {
            t.mesh.program.uniforms[t.textureUniform].value = this.fbo.read.texture,
            this.gl.renderer.render({
                scene: t.mesh,
                target: e === a.length - 1 ? i : this.fbo.write,
                clear: !1
            }),
            this.fbo.swap()
        }
        )
    }
}
let defaultVertex = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`
  , defaultFragment = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`
  , prevPos = new Vec3
  , prevRot = new Quat
  , prevScl = new Vec3
  , nextPos = new Vec3
  , nextRot = new Quat
  , nextScl = new Vec3;
class Animation {
    constructor({objects: t, data: e}) {
        this.objects = t,
        this.data = e,
        this.elapsed = 0,
        this.weight = 1,
        this.duration = e.frames.length - 1
    }
    update(t=1, e) {
        let i = e ? 1 : this.weight / t
          , r = this.elapsed % this.duration
          , s = Math.floor(r)
          , n = r - s
          , a = this.data.frames[s]
          , h = this.data.frames[(s + 1) % this.duration];
        this.objects.forEach( (t, e) => {
            prevPos.fromArray(a.position, 3 * e),
            prevRot.fromArray(a.quaternion, 4 * e),
            prevScl.fromArray(a.scale, 3 * e),
            nextPos.fromArray(h.position, 3 * e),
            nextRot.fromArray(h.quaternion, 4 * e),
            nextScl.fromArray(h.scale, 3 * e),
            prevPos.lerp(nextPos, n),
            prevRot.slerp(nextRot, n),
            prevScl.lerp(nextScl, n),
            t.position.lerp(prevPos, i),
            t.quaternion.slerp(prevRot, i),
            t.scale.lerp(prevScl, i)
        }
        )
    }
}
let tempMat4$2 = new Mat4;
class Skin extends Mesh {
    constructor(t, {rig: e, geometry: i, program: r, mode: s=t.TRIANGLES}={}) {
        super(t, {
            geometry: i,
            program: r,
            mode: s
        }),
        this.createBones(e),
        this.createBoneTexture(),
        this.animations = [],
        Object.assign(this.program.uniforms, {
            boneTexture: {
                value: this.boneTexture
            },
            boneTextureSize: {
                value: this.boneTextureSize
            }
        })
    }
    createBones(t) {
        if (this.root = new Transform,
        this.bones = [],
        t.bones && t.bones.length) {
            for (let e = 0; e < t.bones.length; e++) {
                let i = new Transform;
                i.position.fromArray(t.bindPose.position, 3 * e),
                i.quaternion.fromArray(t.bindPose.quaternion, 4 * e),
                i.scale.fromArray(t.bindPose.scale, 3 * e),
                this.bones.push(i)
            }
            t.bones.forEach( (t, e) => {
                if (this.bones[e].name = t.name,
                -1 === t.parent)
                    return this.bones[e].setParent(this.root);
                this.bones[e].setParent(this.bones[t.parent])
            }
            ),
            this.root.updateMatrixWorld(!0),
            this.bones.forEach(t => {
                t.bindInverse = new Mat4(...t.worldMatrix).inverse()
            }
            )
        }
    }
    createBoneTexture() {
        if (!this.bones.length)
            return;
        let t = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.bones.length)) / Math.LN2)));
        this.boneMatrices = new Float32Array(t * t * 4),
        this.boneTextureSize = t,
        this.boneTexture = new Texture(this.gl,{
            image: this.boneMatrices,
            generateMipmaps: !1,
            type: this.gl.FLOAT,
            internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA16F : this.gl.RGBA,
            flipY: !1,
            width: t
        })
    }
    addAnimation(t) {
        let e = new Animation({
            objects: this.bones,
            data: t
        });
        return this.animations.push(e),
        e
    }
    update() {
        let t = 0;
        this.animations.forEach(e => t += e.weight),
        this.animations.forEach( (e, i) => {
            e.update(t, 0 === i)
        }
        )
    }
    draw({camera: t}={}) {
        this.root.updateMatrixWorld(!0),
        this.bones.forEach( (t, e) => {
            tempMat4$2.multiply(t.worldMatrix, t.bindInverse),
            this.boneMatrices.set(tempMat4$2, 16 * e)
        }
        ),
        this.boneTexture && (this.boneTexture.needsUpdate = !0),
        super.draw({
            camera: t
        })
    }
}
function Text({font: t, text: e, width: i=1 / 0, align: r="left", size: s=1, letterSpacing: n=0, lineHeight: a=1.4, wordSpacing: h=0, wordBreak: o=!1}) {
    let l = this, u, c, _, d, g, p = /\n/, m = /\s/;
    function $() {
        _ = t.common.lineHeight,
        g = s / (d = t.common.base);
        let i = e.replace(/[ \n]/g, "").length;
        c = {
            position: new Float32Array(12 * i),
            uv: new Float32Array(8 * i),
            id: new Float32Array(4 * i),
            index: new Uint16Array(6 * i)
        };
        for (let r = 0; r < i; r++)
            c.id[r] = r,
            c.index.set([4 * r, 4 * r + 2, 4 * r + 1, 4 * r + 1, 4 * r + 2, 4 * r + 3], 6 * r);
        f()
    }
    function f() {
        let _ = []
          , d = 0
          , $ = 0
          , f = 0
          , v = b();
        function b() {
            let t = {
                width: 0,
                glyphs: []
            };
            return _.push(t),
            $ = d,
            f = 0,
            t
        }
        let w = 0;
        for (; d < e.length && w < 100; ) {
            w++;
            let E = e[d];
            if (!v.width && m.test(E)) {
                $ = ++d,
                f = 0;
                continue
            }
            if (p.test(E)) {
                d++,
                v = b();
                continue
            }
            let y = u[E];
            if (v.glyphs.length) {
                let A = v.glyphs[v.glyphs.length - 1][0]
                  , T = x(y.id, A.id) * g;
                v.width += T,
                f += T
            }
            v.glyphs.push([y, v.width]);
            let M = 0;
            if (m.test(E) ? ($ = d,
            f = 0,
            M += h * s) : M += n * s,
            M += y.xadvance * g,
            v.width += M,
            f += M,
            v.width > i) {
                if (o && v.glyphs.length > 1) {
                    v.width -= M,
                    v.glyphs.pop(),
                    v = b();
                    continue
                }
                if (!o && f !== v.width) {
                    let R = d - $ + 1;
                    v.glyphs.splice(-R, R),
                    d = $,
                    v.width -= f,
                    v = b();
                    continue
                }
            }
            d++
        }
        v.width || _.pop(),
        function e(i) {
            let n = t.common.scaleW
              , h = t.common.scaleH
              , o = .07 * s
              , u = 0;
            for (let _ = 0; _ < i.length; _++) {
                let d = i[_];
                for (let p = 0; p < d.glyphs.length; p++) {
                    let $ = d.glyphs[p][0]
                      , f = d.glyphs[p][1];
                    if ("center" === r ? f -= .5 * d.width : "right" === r && (f -= d.width),
                    m.test($.char))
                        continue;
                    f += $.xoffset * g,
                    o -= $.yoffset * g;
                    let x = $.width * g
                      , v = $.height * g;
                    c.position.set([f, o - v, 0, f, o, 0, f + x, o - v, 0, f + x, o, 0], 12 * u);
                    let b = $.x / n
                      , w = $.width / n
                      , E = 1 - $.y / h
                      , y = $.height / h;
                    c.uv.set([b, E - y, b, E, b + w, E - y, b + w, E, ], 8 * u),
                    o += $.yoffset * g,
                    u++
                }
                o -= s * a
            }
            l.buffers = c,
            l.numLines = i.length,
            l.height = l.numLines * s * a
        }(_)
    }
    function x(e, i) {
        for (let r = 0; r < t.kernings.length; r++) {
            let s = t.kernings[r];
            if (!(s.first < e) && !(s.second < i)) {
                if (s.first > e || s.first === e && s.second > i)
                    return 0;
                return s.amount
            }
        }
        return 0
    }
    u = {},
    t.chars.forEach(t => u[t.char] = t),
    $(),
    this.resize = function(t) {
        ({width: i} = t),
        f()
    }
    ,
    this.update = function(t) {
        ({text: e} = t),
        $()
    }
}
let vertex = `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`
  , fragment = `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;
function NormalProgram(t) {
    return new Program(t,{
        vertex: vertex,
        fragment: fragment
    })
}
class Flowmap {
    constructor(t, {size: e=128, falloff: i=.3, alpha: r=1, dissipation: s=.98}={}) {
        let n = this;
        function a() {
            let i = t.renderer.extensions[`OES_texture_${t.renderer.isWebgl2 ? "" : "half_"}float_linear`]
              , r = {
                width: e,
                height: e,
                type: t.renderer.isWebgl2 ? t.HALF_FLOAT : t.renderer.extensions.OES_texture_half_float ? t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : t.UNSIGNED_BYTE,
                format: t.RGBA,
                internalFormat: t.renderer.isWebgl2 ? t.RGBA16F : t.RGBA,
                minFilter: i ? t.LINEAR : t.NEAREST,
                depth: !1
            };
            n.mask.read = new RenderTarget(t,r),
            n.mask.write = new RenderTarget(t,r),
            n.mask.swap()
        }
        function h() {
            return new Mesh(t,{
                geometry: new Geometry(t,{
                    position: {
                        size: 2,
                        data: new Float32Array([-1, -1, 3, -1, -1, 3])
                    },
                    uv: {
                        size: 2,
                        data: new Float32Array([0, 0, 2, 0, 0, 2])
                    }
                }),
                program: new Program(t,{
                    vertex: vertex$1,
                    fragment: fragment$1,
                    uniforms: {
                        tMap: n.uniform,
                        uFalloff: {
                            value: .5 * i
                        },
                        uAlpha: {
                            value: r
                        },
                        uDissipation: {
                            value: s
                        },
                        uAspect: {
                            value: 1
                        },
                        uMouse: {
                            value: n.mouse
                        },
                        uVelocity: {
                            value: n.velocity
                        }
                    },
                    depthTest: !1
                })
            })
        }
        this.gl = t,
        this.uniform = {
            value: null
        },
        this.mask = {
            read: null,
            write: null,
            swap() {
                let t = n.mask.read;
                n.mask.read = n.mask.write,
                n.mask.write = t,
                n.uniform.value = n.mask.read.texture
            }
        },
        a(),
        this.aspect = 1,
        this.mouse = new Vec2,
        this.velocity = new Vec2,
        this.mesh = h()
    }
    update() {
        this.mesh.program.uniforms.uAspect.value = this.aspect,
        this.gl.renderer.render({
            scene: this.mesh,
            target: this.mask.write,
            clear: !1
        }),
        this.mask.swap()
    }
}
let vertex$1 = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`
  , fragment$1 = `
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;
class GPGPU {
    constructor(t, {data: e=new Float32Array(16), geometry: i=new Geometry(t,{
        position: {
            size: 2,
            data: new Float32Array([-1, -1, 3, -1, -1, 3])
        },
        uv: {
            size: 2,
            data: new Float32Array([0, 0, 2, 0, 0, 2])
        }
    })}) {
        this.gl = t;
        let r = e;
        this.passes = [],
        this.geometry = i,
        this.dataLength = r.length / 4,
        this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)),
        this.coords = new Float32Array(2 * this.dataLength);
        for (let s = 0; s < this.dataLength; s++) {
            let n = s % this.size / this.size
              , a = Math.floor(s / this.size) / this.size;
            this.coords.set([n, a], 2 * s)
        }
        let h = ( () => {
            if (r.length === this.size * this.size * 4)
                return r;
            {
                let t = new Float32Array(this.size * this.size * 4);
                return t.set(r),
                t
            }
        }
        )();
        this.uniform = {
            value: new Texture(t,{
                image: h,
                target: t.TEXTURE_2D,
                type: t.FLOAT,
                format: t.RGBA,
                internalFormat: t.renderer.isWebgl2 ? t.RGBA32F : t.RGBA,
                wrapS: t.CLAMP_TO_EDGE,
                wrapT: t.CLAMP_TO_EDGE,
                generateMipmaps: !1,
                minFilter: t.NEAREST,
                magFilter: t.NEAREST,
                width: this.size,
                flipY: !1
            })
        };
        let o = {
            width: this.size,
            height: this.size,
            type: t.renderer.isWebgl2 ? t.HALF_FLOAT : t.renderer.extensions.OES_texture_half_float ? t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : t.UNSIGNED_BYTE,
            format: t.RGBA,
            internalFormat: t.renderer.isWebgl2 ? t.RGBA16F : t.RGBA,
            minFilter: t.NEAREST,
            depth: !1,
            unpackAlignment: 1
        };
        this.fbo = {
            read: new RenderTarget(t,o),
            write: new RenderTarget(t,o),
            swap: () => {
                let t = this.fbo.read;
                this.fbo.read = this.fbo.write,
                this.fbo.write = t,
                this.uniform.value = this.fbo.read.texture
            }
        }
    }
    addPass({vertex: t=defaultVertex$1, fragment: e=defaultFragment$1, uniforms: i={}, textureUniform: r="tMap", enabled: s=!0}={}) {
        i[r] = this.uniform;
        let n = new Program(this.gl,{
            vertex: t,
            fragment: e,
            uniforms: i
        })
          , a = new Mesh(this.gl,{
            geometry: this.geometry,
            program: n
        })
          , h = {
            mesh: a,
            program: n,
            uniforms: i,
            enabled: s,
            textureUniform: r
        };
        return this.passes.push(h),
        h
    }
    render() {
        let t = this.passes.filter(t => t.enabled);
        t.forEach( (t, e) => {
            this.gl.renderer.render({
                scene: t.mesh,
                target: this.fbo.write,
                clear: !1
            }),
            this.fbo.swap()
        }
        )
    }
}
let defaultVertex$1 = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`
  , defaultFragment$1 = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`
  , tmp = new Vec3;
class Polyline {
    constructor(t, {points: e, vertex: i=defaultVertex$2, fragment: r=defaultFragment$2, uniforms: s={}, attributes: n={}}) {
        this.gl = t,
        this.points = e,
        this.count = e.length,
        this.position = new Float32Array(6 * this.count),
        this.prev = new Float32Array(6 * this.count),
        this.next = new Float32Array(6 * this.count);
        let a = new Float32Array(2 * this.count)
          , h = new Float32Array(4 * this.count)
          , o = new Uint16Array((this.count - 1) * 6);
        for (let l = 0; l < this.count; l++) {
            a.set([-1, 1], 2 * l);
            let u = l / (this.count - 1);
            if (h.set([0, u, 1, u], 4 * l),
            l === this.count - 1)
                continue;
            let c = 2 * l;
            o.set([c + 0, c + 1, c + 2], (c + 0) * 3),
            o.set([c + 2, c + 1, c + 3], (c + 1) * 3)
        }
        let _ = this.geometry = new Geometry(t,Object.assign(n, {
            position: {
                size: 3,
                data: this.position
            },
            prev: {
                size: 3,
                data: this.prev
            },
            next: {
                size: 3,
                data: this.next
            },
            side: {
                size: 1,
                data: a
            },
            uv: {
                size: 2,
                data: h
            },
            index: {
                size: 1,
                data: o
            }
        }));
        this.updateGeometry(),
        s.uResolution || (this.resolution = s.uResolution = {
            value: new Vec2
        }),
        s.uDPR || (this.dpr = s.uDPR = {
            value: 1
        }),
        s.uThickness || (this.thickness = s.uThickness = {
            value: 1
        }),
        s.uColor || (this.color = s.uColor = {
            value: new Color("#000")
        }),
        s.uMiter || (this.miter = s.uMiter = {
            value: 1
        }),
        this.resize();
        let d = this.program = new Program(t,{
            vertex: i,
            fragment: r,
            uniforms: s
        });
        this.mesh = new Mesh(t,{
            geometry: _,
            program: d
        })
    }
    updateGeometry() {
        this.points.forEach( (t, e) => {
            t.toArray(this.position, 6 * e),
            t.toArray(this.position, 6 * e + 3),
            e ? (t.toArray(this.next, (e - 1) * 6),
            t.toArray(this.next, (e - 1) * 6 + 3)) : (tmp.copy(t).sub(this.points[e + 1]).add(t),
            tmp.toArray(this.prev, 6 * e),
            tmp.toArray(this.prev, 6 * e + 3)),
            e === this.points.length - 1 ? (tmp.copy(t).sub(this.points[e - 1]).add(t),
            tmp.toArray(this.next, 6 * e),
            tmp.toArray(this.next, 6 * e + 3)) : (t.toArray(this.prev, (e + 1) * 6),
            t.toArray(this.prev, (e + 1) * 6 + 3))
        }
        ),
        this.geometry.attributes.position.needsUpdate = !0,
        this.geometry.attributes.prev.needsUpdate = !0,
        this.geometry.attributes.next.needsUpdate = !0
    }
    resize() {
        this.resolution && this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height),
        this.dpr && (this.dpr.value = this.gl.renderer.dpr)
    }
}
let defaultVertex$2 = `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`
  , defaultFragment$2 = `
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;
class Shadow {
    constructor(t, {light: e=new Camera(t), width: i=1024, height: r=i}) {
        this.gl = t,
        this.light = e,
        this.target = new RenderTarget(t,{
            width: i,
            height: r
        }),
        this.depthProgram = new Program(t,{
            vertex: defaultVertex$3,
            fragment: defaultFragment$3,
            cullFace: null
        }),
        this.castMeshes = []
    }
    add({mesh: t, receive: e=!0, cast: i=!0, vertex: r=defaultVertex$3, fragment: s=defaultFragment$3, uniformProjection: n="shadowProjectionMatrix", uniformView: a="shadowViewMatrix", uniformTexture: h="tShadow"}) {
        if (e && !t.program.uniforms[n] && (t.program.uniforms[n] = {
            value: this.light.projectionMatrix
        },
        t.program.uniforms[a] = {
            value: this.light.viewMatrix
        },
        t.program.uniforms[h] = {
            value: this.target.texture
        }),
        i && (this.castMeshes.push(t),
        t.colorProgram = t.program,
        !t.depthProgram)) {
            if (r === defaultVertex$3 && s === defaultFragment$3) {
                t.depthProgram = this.depthProgram;
                return
            }
            t.depthProgram = new Program(gl,{
                vertex: r,
                fragment: s,
                cullFace: null
            })
        }
    }
    render({scene: t}) {
        t.traverse(t => {
            t.draw && (~this.castMeshes.indexOf(t) ? t.program = t.depthProgram : (t.visible && (t.isForceVisibility = !0),
            t.visible = !1))
        }
        ),
        this.gl.renderer.render({
            scene: t,
            camera: this.light,
            target: this.target
        }),
        t.traverse(t => {
            t.draw && (~this.castMeshes.indexOf(t) ? t.program = t.colorProgram : t.isForceVisibility && (t.visible = !0))
        }
        )
    }
}
let defaultVertex$3 = `
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`
  , defaultFragment$3 = `
    precision highp float;

    vec4 packRGBA (float v) {
        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);
        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;
        return pack;
    }

    void main() {
        gl_FragColor = packRGBA(gl_FragCoord.z);
    }
`;
export {Animation, Box, Camera, Color, Cylinder, Euler, Flowmap, GPGPU, Geometry, Mat3, Mat4, Mesh, NormalProgram, Orbit, Plane, Polyline, Post, Program, Quat, Raycast, RenderTarget, Renderer, Shadow, Skin, Sphere, Text, Texture, Transform, Vec2, Vec3, Vec4};
