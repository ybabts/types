import * as t from '../../src/algorithms/uint32toUint8Array.ts';
import * as e from '../../src/endianness.ts';
import * as r from '../random.ts';

const random = r.Uint32();

Deno.bench({
    name: 'Data View',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        t.dataview(random,e.endian.BIG);
    }
});

Deno.bench({
    name: 'Bit Shifting',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        t.bitshifting(random, e.endian.BIG);
    }
});

Deno.bench({
    name: 'New Array',
    group: 'Uint32 -> Uint8Array',
    fn: () => {
        t.newarray(random ,e.endian.BIG);
    }
});

// Deno.bench({
//     name: 'Hexadecimal',
//     group: 'Uint32 -> Uint8Array',
//     fn: () => {
//         t.hexadecimal(random ,e.endian.BIG);
//     }
// });