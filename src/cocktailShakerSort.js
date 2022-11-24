function swap(el1, el2, speed) {
  var container = document.getElementById("console");
  return new Promise((resolve) => {
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, speed);
    });
  });
}

async function cocktailShakerSort(size, speed) {
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
  var blocks = document.querySelectorAll(".block");
  var left = 0;
  var right = size - 1;
  var forward = true;
  while (left != right) {
    if (forward) {
      for (var i = left; i < right; i++) {
        someFunction1();
        someFunction1();
        someFunction2();
        someFunction2();
        if (
          Number(blocks[i].childNodes[0].innerHTML) >
          Number(blocks[i + 1].childNodes[0].innerHTML)
        ) {
          await swap(blocks[i], blocks[i + 1], speed);
          someFunction();
          someFunction1();
          someFunction1();
          blocks = document.querySelectorAll(".block");
        }
      }
      blocks[right].style.backgroundColor = "#13CE66";
      forward = false;
      right = right - 1;
    } else {
      for (var i = right; i > left; i--) {
        someFunction1();
        someFunction1();
        someFunction2();
        someFunction2();
        if (
          Number(blocks[i].childNodes[0].innerHTML) <
          Number(blocks[i - 1].childNodes[0].innerHTML)
        ) {
          await swap(blocks[i - 1], blocks[i], speed);
          someFunction();
          someFunction1();
          blocks = document.querySelectorAll(".block");
        }
      }
      blocks[left].style.backgroundColor = "#13CE66";
      forward = true;
      left = left + 1;
    }
  }
  blocks[left].style.backgroundColor = "#13CE66";
}

export { cocktailShakerSort };
