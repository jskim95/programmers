문제)
단어 갯수 세기

문제 설명)
특정 문자열에서 중복으로 사용된 단어 => 단어 이름 : 중복 횟수 형식으로
가장 많이 사용된 단어 순서로 정렬하여 출력하기

예시)
var str ='tomorrow never comes. never so so so so never give up. tomorrow will comes.'
return => { so: 4, never: 3, tomorrow: 2, comes: 2, give: 1, up: 1, will: 1 }


function countWord(str) {
  // /[.]/ : str문자열 안에 있는 => .
  // g :  조건에 맞는 모든 패턴 즉 str문자열의 모든 검색
  // ,'' : 앞에있는 특정 문자를 빈문자열로 바꾸겠다
  var arr = str.replace(/[.]/g,'').split(" ");
  var countList = {}
  var answerList = {}

  for(var i=0; i<arr.length; i++) {
    var nowWord = arr[i]
    if(!countList[nowWord]) {
      countList[nowWord] = 1;
    } else {
      countList[nowWord]++;
    }
  }

  var arrayTemp = [];
  for(var prop in countList) {
    arrayTemp.push([countList[prop], prop])
  }
  arrayTemp.sort(function turnSort(a, b) {
    return b[0] - a[0]
  })

  for(var i=0; i<arrayTemp.length; i++) {
    answerList[arrayTemp[i][1]] = arrayTemp[i][0]
  }

  return answerList

}

console.log(countWord('tomorrow never comes. never so so so so never give up. tomorrow will comes.'))





-------------------- 설명 --------------------

function countWord(str) {
  // /[.]/ : str문자열 안에 있는 => .
  // g :  조건에 맞는 모든 패턴 즉 str문자열의 모든 검색
  // ,'' : 앞에있는 특정 문자를 빈문자열로 바꾸겠다
  var arr = str.replace(/[.]/g,'').split(" ");
  var countList = {}
  var answerList = {}

  // 단어 중복 갯수 세기
  for(var i=0; i<arr.length; i++) {
    var nowWord = arr[i]
    if(!countList[nowWord]) {
      countList[nowWord] = 1;
    } else {
      countList[nowWord]++;
    }
  }
  console.log(countList)
  // { tomorrow: 2, never: 3, comes: 2, so: 4, give: 1, up: 1, will: 1 }

  // 단어 중복 갯수 계산한 객체 2차원 배열로 바꾸기
  var arrayTemp = [];
  for(var prop in countList) {
    arrayTemp.push([countList[prop], prop])
  }
  console.log(arrayTemp)
//   [
//   [ 2, 'tomorrow' ],
//   [ 3, 'never' ],
//   [ 2, 'comes' ],
//   [ 4, 'so' ],
//   [ 1, 'give' ],
//   [ 1, 'up' ],
//   [ 1, 'will' ]
//   ]

  // 가장 많이 중복된 단어 순으로 내림차순 정렬
  arrayTemp.sort(function turnSort(a, b) {
    return b[0] - a[0]
  })
  console.log(arrayTemp)
//   [
//   [ 4, 'so' ],
//   [ 3, 'never' ],
//   [ 2, 'tomorrow' ],
//   [ 2, 'comes' ],
//   [ 1, 'give' ],
//   [ 1, 'up' ],
//   [ 1, 'will' ]
//   ]

  // 정렬한 배열 객체로 바꿔주기
  for(var i=0; i<arrayTemp.length; i++) {
    answerList[arrayTemp[i][1]] = arrayTemp[i][0]
  }

  return answerList
  // { so: 4, never: 3, tomorrow: 2, comes: 2, give: 1, up: 1, will: 1 }
}

console.log(countWord('tomorrow never comes. never so so so so never give up. tomorrow will comes.'))




