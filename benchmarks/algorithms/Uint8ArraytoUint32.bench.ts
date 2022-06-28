import * as t from '../../src/algorithms/Uint8ArraytoUint32.ts';
import * as e from '../../src/endianness.ts';
import * as r from '../random.ts';

const random = r.Uint8A(4);

Deno.bench({
    name: 'Data View',
    group: 'Uint8Array -> Uint8A',
    fn: () => {
        t.dataview(random,e.endian.BIG);
    }
});

Deno.bench({
    name: 'Bit Shifting',
    group: 'Uint8Array -> Uint8A',
    fn: () => {
        t.bitshifting(random, e.endian.BIG);
    }
});

Deno.bench({
    name: 'New Array',
    group: 'Uint8Array -> Uint8A',
    fn: () => {
        t.newarray(random ,e.endian.BIG);
    }
});