function swap(el1, el2, speed) {
  var container = document.getElementById("console");
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // For waiting for .25 sec
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, speed);
    });
  });
}

async function exchange(i, j, delay) {
  var blocks = document.querySelectorAll(".block");
  for (var m = i; m < j; m++) {
    await swap(blocks[m], blocks[m + 1], delay);
    blocks = document.querySelectorAll(".block");
  }
  for (var m = j - 1; m > i; m--) {
    await swap(blocks[m - 1], blocks[m], delay);
    blocks = document.querySelectorAll(".block");
  }
}
var count = 0;
function someFunction() {
  document.getElementById("swaps").innerHTML = ++count;
  console.log(count);
}
var count1 = 0;
function someFunction1() {
  document.getElementById("mem").innerHTML = ++count1;
  console.log(count);
}
var count2 = 0;
function someFunction2() {
  document.getElementById("comps").innerHTML = ++count2;
  console.log(count2);
}
async function heapifyUtil(node, to, delay) {
  var blocks = document.querySelectorAll(".block");
  var largest = node;
  var left = 2 * node + 1;
  var right = 2 * node + 2;
  someFunction1();
  someFunction1();
  someFunction2();
  someFunction2();
  if (
    left <= to &&
    Number(blocks[largest].childNodes[0].innerHTML) <
      Number(blocks[left].childNodes[0].innerHTML)
  ) {
    largest = left;
  }
  someFunction1();
  someFunction1();
  someFunction2();
  someFunction2();
  if (
    right <= to &&
    Number(blocks[right].childNodes[0].innerHTML) >
      Number(blocks[largest].childNodes[0].innerHTML)
  ) {
    largest = right;
  }
  if (largest != node) {
    await exchange(node, largest, delay);
    someFunction();
    someFunction1();
    await heapifyUtil(largest, to);
  }
}

async function heapify(from, to, delay) {
  var right = Math.floor((to - from + 1) / 2);
  var left = Math.floor((to - from + 1) / 4);
  while (right > 0) {
    someFunction2();
    for (var i = left; i < right; i++) {
      await heapifyUtil(i, to, delay);
    }
    right = left;
    left = Math.floor(left / 2);
  }
}

async function heapSort(size, delay) {
  count = 0;
  var blocks = document.querySelectorAll(".block");
  for (var i = size - 1; i > 0; i--) {
    someFunction2();
    for (var m = 0; m <= i; m++) {
      blocks[m].style.backgroundColor = "#FF4949";
    }
    await heapify(0, i, delay);
    blocks = document.querySelectorAll(".block");
    for (var m = 0; m < i; m++) {
      await swap(blocks[m], blocks[m + 1], delay);
      blocks[m].style.backgroundColor = "#13CE66";
      blocks = document.querySelectorAll(".block");
    }
    someFunction();
    someFunction1();
    blocks = document.querySelectorAll(".block");
    blocks[i].style.backgroundColor = "#13CE66";
  }
  blocks[0].style.backgroundColor = "#13CE66";
}

export { heapSort };
