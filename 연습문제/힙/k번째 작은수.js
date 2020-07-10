// // ----------------------- 힙 클래스 -----------------------
//
// function heap() {
//   this.items = [];
// }
//
// heap.prototype.swap = function(index1, index2) {
//   var temp = this.items[index1];
//   this.items[index1] = this.items[index2];
//   this.items[index2] = temp;
// }
//
// heap.prototype.parentIndex = function(index) {
//   return Math.floor((index-1)/2);
// }
//
// heap.prototype.leftChildIndex = function(index) {
//   return index*2+1
// }
//
// heap.prototype.rightChildIndex = function(index) {
//   return index*2+2
// }
//
// heap.prototype.parent = function(index) {
//   return this.items[this.parentIndex(index)];
// }
//
//
// heap.prototype.leftChild = function(index) {
//   return this.items[this.leftChildIndex(index)];
// }
//
// heap.prototype.rightChild = function(index) {
//   return this.items[this.rightChildIndex(index)];
// }
//
//
// // ----------------------- 삼투 구현 -----------------------
//
// function minHeap() {
//   this.items = [];
// }
//
// minHeap.prototype = Object.create(heap.prototype);
//
//
// minHeap.prototype.bubbleDown = function() {
//   var index = 0;
//
//   while(this.leftChild(index) && (this.leftChild(index) < this.items[index] ||
//         this.rightChild(index) < this.items[index]) ) {
//           var smallerIndex = this.leftChildIndex(index);
//           if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
//             smallerIndex = this.rightChildIndex(index);
//           }
//           this.swap(smallerIndex, index);
//           index = smallerIndex;
//         }
// }
//
// minHeap.prototype.bubbleUp = function() {
//   var index = this.items.length-1;
//   while(this.parent(index) && this.parent(index) > this.items[index]) {
//     this.swap(this.parentIndex(index), index);
//     index = this.parentIndex(index);
//   }
// }
//
//
// // ----------------------- 최소 힙 -----------------------
//
//
// minHeap.prototype.add = function(item) {
//   this.items[this.items.length] = item;
//   this.bubbleUp()
// }
//
// minHeap.prototype.poll = function() {
//   var temp = this.items[0];
//   this.items[0] = this.items[this.items.length-1];
//   this.items.pop();
//   this.bubbleDown();
//   return temp;
// }




문제)
k번째로 가장 작은 값 찾기

문제 설명)
var arr = [13, 2, 15, 7, 9, 43, 21]
var k = 3
arr배열에서 k번째로 가장 작은 값 찾으시오




// 풀이
var arr = [13, 21, 15, 7, 9, 2]

function getSmallValue(arr, k) {
  var minH = new minHeap();
  for(var i=0; i<arr.length; i++) {
    minH.add(arr[i]);
  }

  for(var i=1; i<k; i++) {
    minH.poll();
  }
  return minH.poll();
}

// console.log(getSmallValue(arr, 3))





// 설명

var arr = [13, 21, 15, 7, 9, 2]

function getSmallValue(arr, k) {
  var minH = new minHeap();
  // 힙 배열에 추가
  for(var i=0; i<arr.length; i++) {
    minH.add(arr[i]);
    console.log(minH)
  }

  // 힙 배열에 모두 추가 끝 !!
  console.log('힙 배열 추가 끝!!')

  // k-1까지 최솟값 삭제
  for(var i=1; i<k; i++) {
    minH.poll();
    console.log(minH)
  }
  console.log('k-1번째 까지 삭제 끝!!')

  // k번째 최솟값 삭제후 return
  return minH.poll();
}

console.log(getSmallValue(arr, 3))
// heap { items: [ 13 ] }
// heap { items: [ 13, 21 ] }
// heap { items: [ 13, 21, 15 ] }
// heap { items: [ 7, 13, 15, 21 ] }
// heap { items: [ 7, 9, 15, 21, 13 ] }
// heap { items: [ 2, 9, 7, 21, 13, 15 ] }
//
// 힙 배열 추가 끝!!
//
// heap { items: [ 7, 9, 15, 21, 13 ] }
// heap { items: [ 9, 13, 15, 21 ] }
// k-1번째 까지 삭제 끝!!

// 9 ===>  k번째 가장 작은수
