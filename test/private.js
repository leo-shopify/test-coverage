/*eslint-env node*/

const tap = require('tap');
const Module = require('../');
const tag = Module.tag;
const ratingToString = Module.ratingToString;
const normalize = Module.normalize;
const a = Module.a;
const b = Module.b;
const c = Module.c;

tap.ok(tag('span', 'any text'));

tap.ok(normalize(0) === -3);
tap.ok(normalize(1) === -2);
tap.ok(normalize(2) === -1);
tap.ok(normalize(3) ===  0);
tap.ok(normalize(4) ===  1);
tap.ok(normalize(5) ===  2);

tap.ok(ratingToString(1) === 'good');
tap.ok(ratingToString(0) === 'ugly');
tap.ok(ratingToString(-1) === 'bad');

tap.ok(a(5) === '<a>good</a>');
tap.ok(b(1) === '<b>bad</b>');
tap.ok(c(3) === '<c>ugly</c>');
