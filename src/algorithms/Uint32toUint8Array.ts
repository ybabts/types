import * as e from '../endianness.ts';
import * as i from '../dataviews.ts';

export function bitshifting(n: number, endian: e.endian = e.native): Uint8Array {
    if(endian) return new Uint8Array([
        (n & 0x000000ff) >> 0,
        (n & 0x0000ff00) >> 8,
        (n & 0x00ff0000) >> 16,
        (n & 0xff000000) >> 24
    ]);
    return new Uint8Array([
        (n & 0xff000000) >> 24,
        (n & 0x00ff0000) >> 16,
        (n & 0x0000ff00) >> 8,
        (n & 0x000000ff) >> 0
    ]);
}

export function newarray(n: number, endian: e.endian = e.native): Uint8Array {
    const a = new Uint32Array([n]);
    const result = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    return endian !== e.native ? result.reverse() : result;
}

export function dataview(n: number, endian: e.endian = e.native): Uint8Array {
    i.dv.Uint8.setUint32(0, n, !!endian);
    return i.ta.Uint8.slice(0,4);
}