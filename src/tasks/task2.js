/**
 * @param {string} userInput - Число
 * @returns {string} Строка с перечислением кратных трём
 * @description Формирование строки с перечислением чисел
 * от 1 до userInput, кратных трём, через запятую с пробелом
 */
// export function getMultiplesOfThree(userInput) {
//   let result = "";

//   return result;
// }
export function getMultiplesOfThree(userInput) {
  let result = "";

  if (userInput === null || userInput === undefined || isNaN(userInput)) {
    throw new Error("Некорректное число");
  }

  const number = parseInt(userInput);

  if (number < 3) {
    return "";
  }

  // Формируем строку напрямую
  for (let i = 3; i <= number; i++) {
    if (i % 3 === 0) {
      if (result !== "") {
        result += ", ";
      }
      result += i;
    }
  }

  return result;
}