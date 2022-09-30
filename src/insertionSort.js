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

async function insertionSort(delay) {
  var count = 0;
  var count1 = 0;
  function someFunction1() {
    document.getElementById("mem").innerHTML = ++count1;
    console.log(count);
  }
  function someFunction() {
    document.getElementById("swaps").innerHTML = ++count;
    console.log(count);
  }
  var count2 = 0;
  function someFunction2() {
    document.getElementById("comps").innerHTML = ++count2;
    console.log(count2);
  }
  var blocks = document.querySelectorAll(".block");
  for (var i = 1; i < blocks.length; i += 1) {
    someFunction2();
    var j = i;
    while (
      j > 0 &&
      Number(blocks[j].childNodes[0].innerHTML) <
        Number(blocks[j - 1].childNodes[0].innerHTML)
    ) {
      someFunction2();
      someFunction2();
      someFunction1();
      someFunction1();
      for (let m = i; m >= j; m--) {
        blocks[m].style.backgroundColor = "#13CE66";
      }
      blocks[j].style.backgroundColor = "#FF4949";
      //blocks[j - 1].style.backgroundColor = "#FF4949";
      // To wait for .1 sec

      // To compare value of two blocks
      await swap(blocks[j - 1], blocks[j], delay);
      someFunction1();
      someFunction1();
      blocks = document.querySelectorAll(".block");
      // Changing the color to the previous one
      blocks[j].style.backgroundColor = "#6b5b95";
      blocks[j - 1].style.backgroundColor = "#6b5b95";
      j = j - 1;
      someFunction();
    }
    for (var m = i; m >= 0; m--) {
      blocks[m].style.backgroundColor = "#13CE66";
    }
  }
}

export { insertionSort };
