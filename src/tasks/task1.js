/**
 * @param {string} word - Исходное слово
 * @param {string} ignoredCharacter - Игнорируемый символ
 * @returns {string} Новая строка без указанного символа
 * @description Формирование новой строки без указанного символа
 */



export function processWord(word, ignoredCharacter) {
  if (word === null || word === undefined) {
    throw new Error("Некорректное слово");
  }

  if (ignoredCharacter === null || ignoredCharacter === undefined || ignoredCharacter.length !== 1) {
    throw new Error("Не указан игнорируемый символ");
  }

  if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
    throw new Error("Слово содержит небуквенные символы");
  }

  if (!/^[а-яА-Яa-zA-Z]$/.test(ignoredCharacter)) {
    throw new Error("Игнорируемый символ должен быть одной буквой");
  }

  let result = "";

  for (let i = 0; i < word.length; i++) {
    const currentCharacter = word[i];
    
    
    if (currentCharacter.toLowerCase() !== ignoredCharacter.toLowerCase()) {
      result += currentCharacter;
    }
  }
  //  // TODO

  return result;
}
