import { useState } from "react";

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
var ss;

async function BubbleSort(delay) {
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

  // BubbleSort Algorithm
  for (var i = 0; i < blocks.length; i += 1) {
    for (var j = 0; j < blocks.length - i - 1; j += 1) {
      // To change background-color of the
      // blocks to be compared
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      console.log("run");
      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
      someFunction1();
      someFunction1();

      // To compare value of two blocks
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1], delay);
        someFunction();
        blocks = document.querySelectorAll(".block");
      }

      // Changing the color to the previous one
      blocks[j].style.backgroundColor = "#6b5b95";
      blocks[j + 1].style.backgroundColor = "#6b5b95";
    }

    //changing the color of greatest element
    //found in the above traversal
    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
}

export { BubbleSort };
export { ss };
