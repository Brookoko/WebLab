'use strict';

const r = 10;
const a = 3;
const b = 4;
const circle = () => Math.PI * r ** 2;
const hypotenuse = () => a * a + b * b;
const nl = () => document.write('<br>');
document.writeln('First');
nl();
document.write(circle());
nl();
document.write(hypotenuse());
