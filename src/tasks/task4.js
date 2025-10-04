/**
 * @param {string} word - Слово для проверки 
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;
  
  while (left < right) {
    if (word[left] !== word[right]) {
      return `${word} - не палиндром`;
    }
    left++;
    right--;
  }
  
  return `${word} - палиндром`;
}