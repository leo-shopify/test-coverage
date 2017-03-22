/*eslint-env node*/

const tap = require('tap');
const Module = require('../');
const a = Module.a;
const b = Module.b;
const c = Module.c;

tap.ok(a(5) === '<a>good</a>');
tap.ok(b(3) === '<b>ugly</b>');
tap.ok(c(0) === '<c>bad</c>');
