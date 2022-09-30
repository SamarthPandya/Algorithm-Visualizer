function swap(el1, el2, delay) {
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
      }, delay);
    });
  });
}

async function partition(low, high, delay) {
  // operate on this array
  var blocks = document.querySelectorAll(".block");
  // selecting last element as the pivot
  var pivot = Number(blocks[high].childNodes[0].innerHTML);
  var pivotInd = high;
  for (var m = low; m <= high; m++) {
    blocks[m].style.backgroundColor = "#FF4949";
  }
  blocks[pivotInd].style.backgroundColor = "#13CE66";
  var j = low;
  while (j <= pivotInd) {
    //blocks[pivotInd].style.backgroundColor = "#13CE66";
    while (pivot < Number(blocks[j].childNodes[0].innerHTML) && pivotInd > j) {
      for (var m = j; m < pivotInd; m++) {
        await swap(blocks[m], blocks[m + 1], delay);
        blocks = document.querySelectorAll(".block");
      }
      pivotInd = pivotInd - 1;
      blocks[pivotInd].style.backgroundColor = "#13CE66";
    }
    j = j + 1;
  }
  for (var m = low; m <= high; m++) {
    if (m != pivotInd) {
      blocks[m].style.backgroundColor = "#6b5b95";
    }
  }

  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve(pivotInd))
  );
  return pivotInd;
}

async function exchange(i, j) {
  var blocks = document.querySelectorAll(".block");
  for (var m = i; m < j; m++) {
    await swap(blocks[m], blocks[m + 1]);
    blocks = document.querySelectorAll(".block");
  }
  for (var m = j - 1; m > i; m--) {
    await swap(blocks[m - 1], blocks[m]);
    blocks = document.querySelectorAll(".block");
  }
}

async function alt(low, high) {
  var blocks = document.querySelectorAll(".block");
  for (var m = low; m <= high; m++) {
    blocks[m].style.backgroundColor = "#FF4949";
  }
  blocks[high].style.backgroundColor = "#13CE66";
  var pivot = Number(blocks[high].childNodes[0].innerHTML);
  var i = low - 1;
  var j = low;
  while (j < high) {
    if (Number(blocks[j].childNodes[0].innerHTML) <= pivot) {
      i = i + 1;
      await exchange(i, j);
    }
    j = j + 1;
  }
  i = i + 1;
  await exchange(i, high);
  console.log(pivot);
  console.log(i);
  const result1 = await new Promise((resolve) => setTimeout(() => resolve(i)));
  return i;
}
var count = 0;
var count1 = 0;
var count2 = 0;
async function altt(low, high, delay) {
  function someFunction() {
    document.getElementById("swaps").innerHTML = ++count;
    console.log(count);
  }
  function someFunction1() {
    document.getElementById("mem").innerHTML = ++count1;
    console.log(count1);
  }
  function someFunction2() {
    document.getElementById("comps").innerHTML = ++count2;
    console.log(count2);
  }
  var blocks = document.querySelectorAll(".block");
  for (var m = low; m <= high; m++) {
    blocks[m].style.backgroundColor = "#FF4949";
  }
  blocks[high].style.backgroundColor = "#13CE66";
  var pivot = Number(blocks[high].childNodes[0].innerHTML);
  someFunction1();
  var i = low - 1;
  var j = low;
  while (j < high) {
    someFunction1();
    someFunction2();
    someFunction2();
    if (Number(blocks[j].childNodes[0].innerHTML) <= pivot) {
      i = i + 1;
      for (var m = j; m > i; m--) {
        await swap(blocks[m - 1], blocks[m], delay);
        blocks = document.querySelectorAll(".block");
      }
      someFunction();
      someFunction1();
    }
    j = j + 1;
  }
  i = i + 1;
  for (var m = high; m > i; m--) {
    await swap(blocks[m - 1], blocks[m], delay);
    blocks = document.querySelectorAll(".block");
  }
  someFunction1();
  someFunction();
  console.log(pivot);
  console.log(i);
  const result1 = await new Promise((resolve) => setTimeout(() => resolve(i)));
  return i;
}

async function quickSort(low, high, delay) {
  var blocks = document.querySelectorAll(".block");
  if (low == 0 && high == blocks.length - 1) {
    count = 0;
    count1 = 0;
    count2 = 0;
  }
  ++count2;
  if (low <= high) {
    //let pi = await partition(low, high, 1);
    let pi = await altt(low, high, delay);
    document.getElementById("swaps").innerHTML = count;
    await quickSort(low, pi - 1, delay);
    for (var m = low; m < pi; m++) {
      blocks[m].style.backgroundColor = "#13CE66";
    }
    await quickSort(pi + 1, high, delay);
    document.getElementById("swaps").innerHTML = count;
    for (var m = pi + 1; m <= high; m++) {
      blocks[m].style.backgroundColor = "#13CE66";
    }
  }
}

export { quickSort };
