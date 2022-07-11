import { assertEquals, fail, AssertionError } from "https://deno.land/std@0.145.0/testing/asserts.ts";
import * as Uint32 from '../../src/types/uint32.ts';

Deno.test({
    name: 'Uint32.fromUint8Array.MAX',
    fn: () => {
        assertEquals(Uint32.MAX, Uint32.fromUint8Array(new Uint8Array([255,255,255,255])));
    }
});

Deno.test({
    name: 'Uint32.fromUint8Array.MIN',
    fn: () => {
        assertEquals(Uint32.MIN, Uint32.fromUint8Array(new Uint8Array([0,0,0,0])));
    }
});

Deno.test({
    name: 'Uint32.fromUint8Array.underflow',
    fn: () => {
        try {
            Uint32.fromUint8Array(new Uint8Array([3,1]));
            fail();
        } catch(e) {
            if(e instanceof AssertionError) throw e;
            assertEquals(e instanceof RangeError, true);
        }
    }
});

Deno.test({
    name: 'Uint32.fromUint8Array.overflow',
    fn: () => {
        try {
            Uint32.fromUint8Array(new Uint8Array([3,1,4,2,3]));
            fail();
        } catch(e) {
            if(e instanceof AssertionError) throw e;
            assertEquals(e instanceof RangeError, true);
        }
    }
});

Deno.test({
    name: 'Uint32.fromUint8Array.result.LITTLE',
    fn: () => {
        assertEquals(Uint32.fromUint8Array(new Uint8Array([156,131,51,0]), 1), 3376028);
    }
});

Deno.test({
    name: 'Uint32.fromUint8Array.result.BIG',
    fn: () => {
        assertEquals(Uint32.fromUint8Array(new Uint8Array([156,131,51,0]), 0), 2625843968);
    }
});

Deno.test({
    name: 'Uint32.toUint8Array.MIN',
    fn: () => {
        assertEquals(Uint32.toUint8Array(Uint32.MIN), new Uint8Array([0,0,0,0]));
    }
});

Deno.test({
    name: 'Uint32.toUint8Array.MAX',
    fn: () => {
        assertEquals(Uint32.toUint8Array(Uint32.MAX), new Uint8Array([255,255,255,255]));
    }
});

Deno.test({
    name: 'Uint32.toUint8Array.underflow',
    fn: () => {
        try {
            Uint32.toUint8Array(-15);
            fail();
        } catch(e) {
            if(e instanceof AssertionError) throw e;
            assertEquals(e instanceof RangeError, true);
        }
    }
});

Deno.test({
    name: 'Uint32.toUint8Array.overflow',
    fn: () => {
        try {
            Uint32.toUint8Array(42949672959);
            fail();
        } catch(e) {
            if(e instanceof AssertionError) throw e;
            assertEquals(e instanceof RangeError, true);
        }
    }
});

Deno.test({
    name: 'Uint32.toUint8Array.result.LITTLE',
    fn: () => {
        assertEquals(Uint32.toUint8Array(3376028, 1), new Uint8Array([156,131,51,0]));
    }
});

Deno.test({
    name: 'Uint32.toUint8Array.result.BIG',
    fn: () => {
        assertEquals(Uint32.toUint8Array(3376028, 0), new Uint8Array([0,51,131,156]));
    }
});