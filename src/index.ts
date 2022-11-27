/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeOut(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

/**
 * Add three numbers
 * @param a first number
 * @param b second number
 */
export async function addNumbers(a: number, b: number) {
  await timeOut(500);
  return a + b;
}

(async () => {
  console.log(await addNumbers(3, 4));
})();
