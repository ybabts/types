import * as t from './algorithms/Uint32toUint8Array.ts'
import * as f from './algorithms/Uint8ArraytoUint32.ts';
import * as e from './endianness.ts';

const i = 966547743;
const en = e.endian.LITTLE

console.log(f.bitshifting(t.bitshifting(i, en), en))