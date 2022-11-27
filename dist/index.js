"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeOut(n) {
    return new Promise((res) => setTimeout(res, n));
}
/**
 * Add three numbers
 * @param a first number
 * @param b second number
 */
async function addNumbers(a, b) {
    await timeOut(500);
    return a + b;
}
exports.addNumbers = addNumbers;
(async () => {
    console.log(await addNumbers(3, 4));
})();
