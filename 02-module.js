/**
 * 
 * @param {*} firstNum 
 * @param {*} secondNum 
 * @returns summary 2 elements
 */
function sumBig(firstNum, secondNum) {
  let result = BigInt(firstNum) + BigInt(secondNum);

  return result;
}

/**
 * 
 * @param {*} firstNum 
 * @param {*} secondNum 
 * @returns subtraction 2 elements
 */
function subBig(firstNum, secondNum) {
  let result = BigInt(firstNum) - BigInt(secondNum);

  return result;
}

/**
 * 
 * @param {*} firstNum 
 * @param {*} secondNum 
 * @returns multiply 2 elements
 */
function mulBig(firstNum, secondNum) {
  let result = BigInt(firstNum) * BigInt(secondNum);

  return result;
}

/**
 * 
 * @param {*} firstNum 
 * @param {*} secondNum 
 * @returns dividing 2 elements
 */
function divBig(firstNum, secondNum) {
  if (secondNum > firstNum) {
    console.log('Вынужденная перестановка, второе число больше первого');
    console.log(`Если вы уверены в данных, Ваш результат до перестановки: 0,${firstNum}`);
    [firstNum, secondNum] = [secondNum, firstNum];
  }
  let result = BigInt(firstNum) / BigInt(secondNum);
  let output = BigInt(firstNum) % BigInt(secondNum);

  result = result.toString() + ',' + output;
  return result;
}

export {sumBig, subBig, mulBig, divBig};