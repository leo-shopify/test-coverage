/*eslint-env node*/

const tap = require('tap');
const Module = require('../');
const a = Module.a;
const b = Module.b;
const c = Module.c;

tap.ok(a(5) === '<a>good</a>');
tap.ok(a(4) === '<a>good</a>');
tap.ok(a(3) === '<a>ugly</a>');
tap.ok(a(2) === '<a>bad</a>');
tap.ok(a(1) === '<a>bad</a>');
tap.ok(a(0) === '<a>bad</a>');

tap.ok(b(5) === '<b>good</b>');
tap.ok(b(4) === '<b>good</b>');
tap.ok(b(3) === '<b>ugly</b>');
tap.ok(b(2) === '<b>bad</b>');
tap.ok(b(1) === '<b>bad</b>');
tap.ok(b(0) === '<b>bad</b>');

tap.ok(c(5) === '<c>good</c>');
tap.ok(c(4) === '<c>good</c>');
tap.ok(c(3) === '<c>ugly</c>');
tap.ok(c(2) === '<c>bad</c>');
tap.ok(c(1) === '<c>bad</c>');
tap.ok(c(0) === '<c>bad</c>');
