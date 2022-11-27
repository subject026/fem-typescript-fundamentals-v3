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

export function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number; // optional property
}): void {
  let str = `${car.make} ${car.model} ${car.year}`;

  // this is a typeguard
  if (typeof car.chargeVoltage !== undefined) {
    // ts compiler knows chargeVoltage is defined in here
    str += `// ${car.chargeVoltage}`;
  }

  console.log(str);
}
