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

async function selectionSort(delay) {
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
  var blocks = document.querySelectorAll(".block");
  for (var i = 0; i < blocks.length; i++) {
    var minInd = blocks.length - 1;
    for (var j = blocks.length - 2; j >= i; j--) {
      someFunction1();
      someFunction1();
      if (
        Number(blocks[j].childNodes[0].innerHTML) <
        Number(blocks[minInd].childNodes[0].innerHTML)
      ) {
        minInd = j;
      }
    }
    for (var m = minInd; m > i; m--) {
      blocks[m].style.backgroundColor = "#FF4949";
      await swap(blocks[m - 1], blocks[m], delay);
      blocks = document.querySelectorAll(".block");
    }
    someFunction1();
    if (i != minInd) {
      someFunction();
    }
    blocks[i].style.backgroundColor = "#13CE66";
    /*await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );*/
  }
}

export { selectionSort };
