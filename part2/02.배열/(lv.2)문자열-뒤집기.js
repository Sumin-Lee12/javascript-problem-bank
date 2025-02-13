/**
 * [(lv.2)문자열-뒤집기.js]
 *
 * reverseString 함수를 작성하세요.
 * - 문자열이 아니라면 빈 문자열을 반환하세요.
 * - 반복문을 사용하여 입력받은 문자열을 뒤집어 반환하세요.
 *
 * @param {string} str
 * @returns {string}
 */

function reverseString(str) {
  newStr = "";

  if (typeof(str) === "string") {
    for (let i = str.length-1; i >= 0; i--) { // str.length-1인 이유가, str의 length는 5인 반면에, index는 0으로 시작해 4로 끝난다. 그래서 index에 맞추기 위해 str.length-1이라 적은 것!
      newStr += str[i]; // 위에서 i >= 0 인 이유: i = 0은 할당 연사자이기 때문에 i = 0 -> 0 = false가 되어버려 반복문 실행 자체가 안 된다.
    }
  } else {
    return "";
  }
  return newStr;
}

// export 를 수정하지 마세요.
export { reverseString };
