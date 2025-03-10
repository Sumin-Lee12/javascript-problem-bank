/**
 * [(lv.3)검색어-캐싱하기.js]
 *
 * updateTopKeywords(keywords):
 *   1) 여러 검색어가 들어올 때, 많이 검색된 순으로 상위 10개까지만 저장하세요.
 *   2) 중복 키워드는 1회만 노출되도록 하세요.
 *   3) 기존 캐시를 모두 지우고, 새로운 결과만 캐시에 저장하세요.
 * getTopKeywords():
 *   1) 현재 저장된 상위 10개 키워드를 반환하세요.
 *
 * keywords example : ["banana", "apple", "apple", "orange", "banana", "banana"]
 * @param {string[]} keywords - 검색된 키워드 배열
 * @returns {void}
 */

let topKeywordsCache = [];

function updateTopKeywords(keywords) {
  let topKeywords = [];
  // 키워드 언급 횟수 계산
  const keywordCount = keywords.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // 2. 객체를 배열로 변환 & 정렬
  topKeywords = Object.entries(keywordCount)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])) // 빈도 우선, 동일하면 사전순
    .map(entry => entry[0]) // 키워드 추출
    .slice(0, 10); // 상위 10개 저장
}

function getTopKeywords() {
  return topKeywords;
}


// export를 수정하지 마세요.
export { topKeywordsCache, updateTopKeywords, getTopKeywords };
